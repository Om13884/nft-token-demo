// destination id : fc0c014e-253d-434d-b2ed-77afc9dde426
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_8c50ae813edb4f06844770a4ff79c65a'
};

const data = {
  name: 'NFT Transfer',
  expression: 'Ly8gKHR4X2xvZ3NfdG9waWMxID1+ICczZkMyMDNkNTY1NDE2MmVCNzIwNjIwMUQ4QkZGODQ3ZEVCZTUxNGQ4JykgJiYgDQovLyAodHhfbG9nc19hZGRyZXNzID09ICcweDM5N2RjYThmMmEwMTIyOWU4ZTU4MzU1OTljODAyOWViMGJmNjhkZDAnKSAmJiANCi8vICh0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjVmYTZiNGU2YzRhMGM4ZjdjNWYzZDlmJyk=',

  network: 'ethereum-sepolia',
  destinationIds: ['7f2dc969-4ab7-43e8-b74f-430e0593578a']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));


// (tx_logs_topic1 =~ '3fC203d5654162eB7206201D8BFF847dEBe514d8') && 
// (tx_logs_address == '0x397dca8f2a01229e8e5835599c8029eb0bf68dd0') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f165fa6b4e6c4a0c8f7c5f3d9f')
