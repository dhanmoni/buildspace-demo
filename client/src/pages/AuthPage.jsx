import React, {useState} from 'react';
import {ethers} from 'ethers'
import '../styles/AuthPage.css'
import {provider, signer} from '../util/metamask'
import { useNavigate } from 'react-router-dom';


const {ethereum} = window

function AuthPage() {

  const navigate = useNavigate()

  const handleAuthenticate = async ({publicKey,signature}) =>{
    console.log('authenticating..', publicKey)
		const res = await fetch(`http://localhost:5000/api/auth/`, {
			body: JSON.stringify({ publicKey, signature }),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})

    return res.json()
  }

  const handleSignup = async (publicKey) =>{
    console.log('signing up..', publicKey)
		const res = await fetch(`http://localhost:5000/api/auth/register`, {
			body: JSON.stringify({ publicKey }),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
    return res.json();
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

  const saveAndRedirect = (data)=> {
    console.log({data})
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
    
    fetch(`http://localhost:5000/api/auth/get-user/${accounts[0]}`)
      .then((response) => response.json())
      // If yes, retrieve it. If no, create it.
      .then((user) => user ? user : handleSignup(accounts[0]))
      // Popup MetaMask confirmation modal to sign message
      .then(handleSignMessage)
      // // Send signature to backend on the /auth route
      .then(handleAuthenticate)
      // // Pass accessToken back to parent component (to save it in localStorage)
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