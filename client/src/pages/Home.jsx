import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
    useEffect(()=> {
        const token = localStorage.getItem('auth-token')
        setToken(token)
    }, [])

    const handleSignout = ()=> {
      localStorage.removeItem('auth-token')
      navigate('/')
    }
  return (
    <div style={{width: '80vw', margin: '0 auto'}}>
      <h5>Woohooo!!! Succesfully Signed In using Metamask!</h5>
      <h6>Here is your JWT Token: {token}</h6>
      <h6>Ready to try it again? Sign out by clicking the button below</h6>
      <div className='btn-container'>
        <button onClick={handleSignout}>Sign Out</button>
      </div>
      </div>
  )
}

export default Home