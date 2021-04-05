import React,{useState} from 'react';
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'
function AddPost() {
    const [title,settitle]=useState('')
    const [auth,setauth]=useState('')
    const [desc,setdesc]=useState('')
    const [msg,setmsg]=useState('')

    function handleSubmit(e){
            e.preventDefault()
            let blog={
                title:title,
                desc:desc,
                auth:auth   
            }
            axios.post('http://localhost:5000/add-post',blog)
            .then(
                resp => {
                    if (resp)
                        alert("post added")
                    else
                        alert("Something went wrong while adding post ")
                  }
            )
            .catch((err)=>{
                console.log(err)
            })
    }
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mt-5 text-center">Add Post into website</h2>
                <form onSubmit={(e) => {handleSubmit(e)}} className="col-md-6  mx-auto mt-5">
                    <h5 className="p-3 text-center text-white">{msg}</h5>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" value={title} onChange={e => { settitle(e.target.value) }} className="form-control" placeholder="Enter Title" required />
                    </div>
                    <div className="form-group">
                        <label >Desciption</label>
                        <textarea type="text" value={desc} onChange={e => { setdesc(e.target.value) }} rows='8' className="form-control" placeholder="Enter Description" required />
                    </div>

                    <div className="form-group">
                        <label >Author Name</label>
                        <input type="text" value={auth} onChange={e => { setauth(e.target.value) }} className="form-control" placeholder="Enter Author" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/posts' className="btn btn-dark ml-4">Back to Home</Link>
                </form>
            </div>

        </div>
    );
}

export default AddPost