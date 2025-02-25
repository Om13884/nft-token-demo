const axios = require('axios');

const headers = {
    'Accept': 'application/json',
    'x-api-key': 'QN_8c50ae813edb4f06844770a4ff79c65a'
};

// GET request to fetch all destinations
axios.get('https://api.quicknode.com/quickalerts/rest/v1/destinations', { headers })
    .then(response => {
        console.log("API Response:", response.data);  // Log response to confirm structure

        if (!Array.isArray(response.data)) {
            console.log("❌ Error: Expected an array but received something else.");
            return;
        }

        // Check if our destination ID exists in the array
        const destination = response.data.find(dest => dest.id === 'fc0c014e-253d-434d-b2ed-77afc9dde426');

        if (destination) {
            console.log("✅ Destination ID exists:", destination);
        } else {
            console.log("❌ Destination ID NOT found!");
        }
    })
    .catch(error => {
        console.log('Error fetching destinations:', error.response ? error.response.data : error.message);
    });
