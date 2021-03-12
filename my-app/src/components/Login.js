import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Users from "./Users"


function Login() {
    let history = useHistory();
    let location = useLocation();
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setIsAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replaceState(from);
        }
    }

    return (
        
        <div className="login">
            <Router>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username}  onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            
                <Route path="/login" exact>
                <button onClick={()=> {setIsAuth(true);}} >Login</button>
                </Route>
           
            <ProtectedRoute path="/users" component={Users} isAuth={isAuth} />
            </Router>  
        </div>
    )

    
}


    


    export default Login;