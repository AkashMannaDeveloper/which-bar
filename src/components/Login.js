import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let loginCheck = async () => {
        // console.log(email, password);

        let result = await fetch("https://which-bar.dedicateddevelopers.us/api/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {
                "Content-type" : "application/json",
            }
        });

        result = await result.json();
        console.log(result);

        if (result.success) {
            localStorage.setItem('user', JSON.stringify(result.data));
            localStorage.setItem('token', JSON.stringify(result.token));
            navigate('/');
        }
    }
    return (
        <div className="register">
            <h1>Login Page</h1>
            <input className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
            <input className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Password" />
            <button className="frm-btn" onClick={loginCheck} type="button">Login</button>
        </div>
    );
}

export default Login;