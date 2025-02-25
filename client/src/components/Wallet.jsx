import { useNavigate } from "react-router-dom";
const Wallet = ()=> {
    const navigateTo = useNavigate()
    const connectWallet = async()=>{
        
        try{
            if (window.ethereum){
                const account = await window.ethereum.request({method:'eth_requestAccounts'});
                // console.log(account[0])
                navigateTo("/Home",{state:{address:account[0]}} )
            }else{
                alert("Invalid Metamask")
            }
        }catch(error){
            console.error(error)

        }
    }
    return <><button onClick={connectWallet}>Connect Wallet</button></>
}
export default Wallet;