import React from 'react';
import './Login.css'
import Logo from '../../Assets/logo.jpeg';

const Login = () => {
    return(
    <div className="container-fluid login">
        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12 form-container">
                <div className="login-form">
                    <img src={Logo} alt="ShoeMania Logo" className="login-shoemania-logo"/>
                    <div className="form-content">
                        <p className="login-heading">Login</p>
                        <form>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                        <br /><br />
                        <input type="password" name="password" id="password"
                        placeholder="Password" />
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
