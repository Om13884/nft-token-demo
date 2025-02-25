const express = require('express');
const cors= require('cors')
const { Web3 } = require('web3');
const ABI = require('./ABI.json');
const app = express();
app.use(cors())
app.use(express.json());


const web3 = new Web3("https://late-thrumming-season.ethereum-sepolia.quiknode.pro/1119ea795cd6f340bf64a9aee8d8bb16ac150a1d");
const contractAddress = '0x397dca8f2a01229e8e5835599c8029eb0bf68dd0';
const contract = new web3.eth.Contract(ABI, contractAddress);

const fetchNFTs = async(account)=> {   // <-- Accept account as a parameter
    try {
        const nftBalance = await contract.methods.balanceOf(account).call();
        return { userNFTs: Number(nftBalance) }
    } catch (error) {
        console.log('Error fetching NFTs', error);
    }
}


app.post('/members', async (req, res) => {
    try {
        const account = req.body.from;
        const numNFTs = await fetchNFTs(account);  // <-- Pass account as an argument
        if (numNFTs.userNFTs > 0) {
            res.status(200).json({ status: 200, numNFTs });
        } else {
            res.status(404).json({ status: 404, message: "You don't own any NFT" , numNFTs});
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
});

app.post('/Webhook', async(req, res)=>{
    console.log("We are in our webhook ")
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log('server running at', PORT)
});
