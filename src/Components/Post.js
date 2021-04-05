import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from 'axios'

function Post() {
    const [post, setpost] = useState('')

    useEffect(() => {
        axios.get('/posts')
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

        post.forEach(data => {return data.title})
            }
        </div>
    );
}

export default Post;