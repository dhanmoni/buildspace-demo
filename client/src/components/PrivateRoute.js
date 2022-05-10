
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    
    const navigate = useNavigate()
    const jwt_token = localStorage.getItem('auth-token')
    useEffect(()=> {
        if (!jwt_token) {
            console.log('returning...')
            navigate('/');
        }
    }, [])
    
    console.log({jwt_token})
    if (!jwt_token) {
        return null;
    } else {
        console.log('not returning...')
        return children
    }
}

export default PrivateRoute