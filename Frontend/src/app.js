import React, { useState } from 'react';
import { fetchUserProfile, requestAmbulance } from './api';

function App() {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleEmergency = async () => {
        setLoading(true);
        const response = await requestAmbulance(userProfile.id);
        alert(`Ambulance assigned: ${response.ambulanceId}`);
        setLoading(false);
    };

    return (
        <div>
            <h1>EmergencyMed</h1>
            <button onClick={handleEmergency} disabled={loading}>
                {loading ? 'Requesting...' : 'Request Ambulance'}
            </button>
        </div>
    );
}

export default App;
