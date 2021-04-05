import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msg, setmsg] = useState('')
    const history=useHistory()

    function loginCheck(e) {
        e.preventDefault()
        let data = {
            email: email,
            password: pass
        }
        axios.post('http://localhost:5000/login', data)
            .then(resp => {
                if (resp.data == "1")
                history.push('/posts')
                else if (resp.data == "0")
                    setmsg("Invalid Credentials")
                else 
                setmsg("No user found! Click on register")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <h2 className="mt-5 text-center">Login into MERN PROJECT</h2>
            <form onSubmit={(e) => { loginCheck(e) }} className="col-md-5  mx-auto mt-5">
                <h5 className="p-3 text-center text-white">{msg}</h5>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} className="form-control" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" value={pass} onChange={e => { setPass(e.target.value) }} className="form-control" placeholder="Password" required />
                </div>

                <button type="submit" className="btn btn-primary mb-5">Submit</button>

            </form>
            <Link to='/register' style={{ textDecoration: 'none', color: "black" }} className="mt-5 text-center"><h5>👉Not a member? Register Here👈</h5></Link>
        </div>

    )

}
export default Login