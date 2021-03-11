import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Users from "./Users"

function Login() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Router>
                <Route path="/login" exact>
                <button onClick={()=> {setIsAuth(true);}} >Login</button>
                <button onClick={()=> {setIsAuth(false);}}>Logout</button>
                </Route>
           
            <ProtectedRoute path="/users" component={Users} isAuth={isAuth} />
            </Router>

            
            
        </div>
    )
}

export default Login;