const axios = require('axios');

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': 'QN_8c50ae813edb4f06844770a4ff79c65a'
};

const data = {
    name: 'Webhook',
    to_url: 'https://eacf-103-5-134-170.ngrok-free.app/Webhook'.trim(),
    webhook_type: 'POST',
    service: 'webhook',
    payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
    .then(response => console.log("Response Data:", response.data))
    .catch(error => {
        if (error.response) {
            console.log('Error Response Data:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error setting up request:', error.message);
        }
    });
