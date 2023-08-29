import React from 'react'
import logo from "../Images/chatterbox-icon.png"
import {TextField, Button} from "@mui/material"

function Login() {
    return (
        <div className='login-container'>
            <div className='image-container'>
                <img src={logo} alt='Logo' className='welcome-logo' />
            </div>
            <div className='login-box'>
                <p className='login-text'>Login</p>
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <TextField id="outline-password-input" label="Password" type='password' autoComplete='current-password' />
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login