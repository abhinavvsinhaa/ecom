import React, {useState} from 'react';
import './Login.css'
import Logo from '../../Assets/logo.jpeg';
import Navbar from '../Navbar/Navbar';
import bcrypt from 'bcryptjs'

//cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(response => {
            if (response.password) {
                bcrypt.compare(password, response.password, (err, res) => {
                    if (err) console.log(err)
                    if (res === true) {
                        console.log("User logged in succesfully");
                        
                        //on logging, send request to get a signed JWT
                        fetch("http://localhost:8080/api/v1/user/login/authorize", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email
                            })
                        })
                        .then(message => message.json())
                        .then(authObject => {
                            console.log(authObject.token);

                            //store the token as cookie
                            cookies.set('JWT', authObject.token, {
                                path: '/',
                                maxAge: 2592000,
                                secure: false
                            })
                        })
                        .catch(console.log);

                    } else {
                        console.log("Incorrect email or password")
                    }
                })
            }
        })
        .catch(console.log)
    }

    return(
    <div className="container-fluid login">
        <div className="row navbar-row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <Navbar/>
            </div>
        </div>
        <div className="login-space"></div>
        <div className="row justify-content-center login-form-row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12 form-container">
                <div className="login-form">
                    <img src={Logo} alt="ShoeMania Logo" className="login-shoemania-logo"/>
                    <div className="form-content">
                        <p className="login-heading">Login</p>
                        <form onSubmit={getUser}>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        required
                        onChange={e => setEmail(e.target.value)}
                        />
                        <br /><br />
                        <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="Password"
                        required
                        onChange={e => setPassword(e.target.value)}
                        />
                        <br /><br />
                        <p className="terms">By continuing I agree to the  
                        <a href="/" className="terms-link">
                        &nbsp;Terms of use
                        </a>
                        &nbsp;&&nbsp;
                        <a href="/" className="terms-link">
                        Privacy policy.
                        </a> 
                        </p>
                        <input type="submit" value="CONTINUE" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;
