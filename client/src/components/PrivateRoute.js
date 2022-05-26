
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('auth-token');
    useEffect(()=> {
        if (!jwt_token) {
            console.log('returning...');
            navigate('/');
        }
    }, []);
    
    return children;
}

export default PrivateRoute