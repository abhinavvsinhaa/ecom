import React, {useState} from 'react';
import Logo from '../../Assets/logo.jpeg';
import Navbar from '../Navbar/Navbar';
import "../Login/Login.css";
import bcrypt from "bcryptjs";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const showPassword = () => {
        let showpass = document.getElementById("show-pass");
        if (showpass.checked) {
            document.getElementById("password").type="text";
        } else {
            document.getElementById("password").type="password"
        }
    }

    const submitUser = ({name, email, hash}) => {
        const user = {
            name: name,
            email: email,
            password: hash
        }

        fetch("http://localhost:8080/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(console.log)
        .catch(console.log)
    }

    const getUserDetails = (e) => {
        e.preventDefault();
        
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) throw err;
                submitUser({name, email, hash});
            })
        })
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
                <div className="login-form signup-form">
                    <img src={Logo} alt="ShoeMania Logo" className="login-shoemania-logo"/>
                    <div className="form-content">
                        <p className="login-heading">Sign Up</p>
                        <form onSubmit={getUserDetails}>
                        <input 
                        type="name" 
                        name="name" 
                        id="name" 
                        placeholder="Name" 
                        required
                        onChange={e => setName(e.target.value)}
                        />
                        <br /><br />
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
                        <input type="checkbox" name="show-pass" id="show-pass" 
                        onClick={showPassword}
                        />
                        &nbsp;
                        <label htmlFor="show-pass">Show password</label>
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
                        <input type="submit" value="SIGN UP" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SignUp;
