import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from 'axios'

function Post() {
    const [post, setpost] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                setpost(res.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <Navbar />
            <h3 className="bg-primary p-3 text-center p-2">Hey! check out this posts.</h3>
            
            {

        [post].forEach((data) => {
                     <div className="container">
                        <h2>{data.title}</h2>
                        <span className="badge badge-dark p-2">{data.auth}</span>
                        <h6 className="text-white mt-4">{data.desc}</h6>
                        <hr style={{ border: '1px dotted white' }} />
                    </div>
        })
            }
        </div>
    );
}

export default Post;