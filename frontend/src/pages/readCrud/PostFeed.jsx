import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from '../../data/categories'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function PostFeed() {
    const [newPosts, setNewPosts] = useState(null)
    const categories = Categories



    useEffect(() => {
        axios.get('/api/posts/newPosts').then((res) => {
            setNewPosts(res.data.data)
        })
    }, [])

    const navigate = useNavigate();

    const goToPost = async (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className='center'>
            {/* categories */}
            <div className="strikeBox">
                CATEGORIES
                <div className="tallRow"></div>
            </div>
            <div className="categories">
                {categories.slice(1).map((cat, i) => {
                    return <Card key={i} style={{ backgroundColor: "#353552", color: "white" }} className='catCard' body>{cat.toLocaleUpperCase()}</Card>
                })}
            </div>
            {/* separator */}
            <div className="strikeBox">
                POSTS
                <div className="tallRow"></div>
            </div>
            {/* post cards */}
            {newPosts === null ? null :
                <div className='postBox'>
                    {newPosts.map((post, i) => {
                        return <Card key={i} onClick={()=>{goToPost(post._id)}} style={{ backgroundColor: "#6b282c", color: "white" }} className='postCard' body>{post.title.toLocaleUpperCase()}</Card>
                    })}
                </div>}
        </div>
    )
}

export default PostFeed