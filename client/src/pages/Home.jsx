import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

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
    <div>
      <h5>Succesfully Signed In using Metamask! </h5>
      <h6>JWT Token: {token}</h6>
      <button onClick={handleSignout} >Sign Out</button>
      </div>
  )
}

export default Home