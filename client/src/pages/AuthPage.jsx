import React from 'react';
import '../styles/AuthPage.css'
import {provider, signer} from '../util/metamask'
import { useNavigate } from 'react-router-dom';
import api from '../util/api'

const {ethereum} = window

function AuthPage() {

  const navigate = useNavigate()

  const handleAuthenticate = async ({publicKey,signature}) =>{
    console.log('authenticating..', publicKey)
    const res = await api.post('/api/auth/', {publicKey, signature})
    console.log({res})
    return res;
  }

  const handleSignup = async (publicKey) =>{
    console.log('signing up..', publicKey)
    const res = await api.post('/api/auth/register', {publicKey})
    console.log({res})
    return res;
}
  
  const handleSignMessage = async ({publicKey,nonce}) => {
    console.log('signing msg..', publicKey, nonce)
		try {
			const signature = await signer.signMessage(`I am signing my one-time nonce: ${nonce}`);
      console.log({publicKey, nonce, signature})
			return { publicKey, signature };
		} catch (err) {
			throw new Error(
				'You need to sign the message to be able to log in.'
			);
		}
	};

  const saveAndRedirect = ({data})=> {
    localStorage.setItem("auth-token", data.token)
    navigate('/home')
  }

  const handleMetamaskSign = async ()=> {
    if(!ethereum) return alert('Please install metamask!');
   // MetaMask requires requesting permission to connect users accounts
   const accounts = await provider.send("eth_requestAccounts", []);

    console.log({accounts})
    if(!accounts.length){
      return alert('No account found!')
    } 
    console.log("fetching...")
    api.get(`/api/auth/get-user/${accounts[0]}`)
    // .then(data=> console.log(data))
      .then((response) => response.data)
      //If user exists, retrieve it. If no, then signup and create user.
      .then((user) => user ? user : handleSignup(accounts[0]))
      // // Popup MetaMask confirmation modal to sign message
      .then(handleSignMessage)
      // // // Send signature to backend on the /auth route
      .then(handleAuthenticate)
      // // //  save jwt token in localStorage
      .then(saveAndRedirect)
      .catch((err) => {
        console.log({err})
      });

   
 
}
  return (
    <div id="auth-page">
      <div id="left-panel">
      <p>home to the next generation of <br/><span>builders</span></p>
      </div>  
      <div id="auth-form">
        <p>Let's get you started</p>
        <input placeholder='Email Address'/>
        <div id="email-btn">Continue with Email</div>
        <span style={{margin:10}}>or</span>
        <div id="metamask-btn" onClick={handleMetamaskSign}>Sign in with Metamask</div>
      </div>
    </div>
  )
}

export default AuthPage