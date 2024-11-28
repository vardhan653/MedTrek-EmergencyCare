const API_URL = 'http://localhost:5000/api';

export const fetchUserProfile = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    return response.json();
};

export const requestAmbulance = async (userId) => {
    const response = await fetch(`${API_URL}/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
    });
    return response.json();
};
