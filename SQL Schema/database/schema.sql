CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    medical_history TEXT
);

CREATE TABLE ambulances (
    id SERIAL PRIMARY KEY,
    location POINT NOT NULL,
    status VARCHAR(20) DEFAULT 'available'
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    ambulance_id INT REFERENCES ambulances(id),
    status VARCHAR(20) DEFAULT 'pending'
);
