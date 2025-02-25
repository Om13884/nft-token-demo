import { useLocation, useNavigate } from "react-router-dom";
import './Home.css'
const Home= ()=> {
    const location = useLocation();
    const navigateTo = useNavigate();
    const reveralMsg = async()=> {
        try{
            // IMP : in my app i need to proper sinup in the plce before passing the account data 
            const account = location.state.address;

            const res = await fetch('http://localhost:3001/members',{
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({from:account})
            })
            const data = await res.json();
            if (data.status ===200){

                navigateTo("/members")
                

            }else{
                window.alert("You currently di nit hold any NFTs in collection in this address : 0xdede76f241ea932403b2ac6d419b0e56fdcb49b6")

            }
           

        }catch(error){
            console.error(error)

        }
    }
    return (
    <>
    <span className="beatiful-sentence">I have a secret message for holders of  my NFT collection with <br />address 0xdede76f241ea932403b2ac6d419b0e56fdcb49b6</span>
       <br ></br >
       <br ></br >
    <button onClick={reveralMsg}> Reveal mesaage</button>
    </>
)}
export default Home;