const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { connectDB } = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/ambulances', require('./routes/ambulanceRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));

// WebSocket connection
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('request_ambulance', (data) => {
        console.log('Emergency Request:', data);
        io.emit('ambulance_assigned', { ambulanceId: 123, userId: data.userId });
    });
    socket.on('disconnect', () => console.log('Client disconnected'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
