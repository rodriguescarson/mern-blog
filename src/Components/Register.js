import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Register() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function Register(e) {
        e.preventDefault()
        let data = {
            email: email,
            password: pass
        }
        axios.post('/register', data)
            .then(resp => {
                if (resp)
                    alert("Succesfully registered now login")
                else
                    alert("Something went wrong")
              })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <h2 className="mt-5 text-center">Register into MERN PROJECT</h2>
            <form onSubmit={(e) => Register(e)} className="col-md-5  mx-auto mt-5 ">
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" value={email} className="form-control" onChange={e => { setEmail(e.target.value) }} placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" value={pass} className="form-control" onChange={e => { setPass(e.target.value) }} placeholder="Password" required />
                </div>

                <button type="submit" className="btn btn-primary mb-5">Submit</button>

            </form>
            <Link to='/' style={{ textDecoration: 'none', color: "black" }} className="mt-5 text-center"><h5>👉Already a member? Login Here👈</h5></Link>
        </div>
    )

}
export default Register