import React, { useState } from 'react'
import NewPost from './newCrud/NewPost';
import PostFeed from './readCrud/PostFeed';


function ForumPage() {

    const [show, setShow] = useState(false)

    const showPostForm = () => {
        setShow(!show)
    }

    return (
        <div className='fullPage'>
            <div className="titleBanner">
                {/* title card */}
                <div className="titleImage"></div>
                <div className="titleText">

                    <h1>DISCUSSIONS & POSTS</h1>
                    <h3>Explore the forum and engage with our community.</h3>
                </div>
            </div>
            {show ?
                <NewPost showPostForm={showPostForm} />
                :
                <>

                    {/* new post button */}
                    <br />
                    <button onClick={showPostForm} className="button-49 button-newpost">CREATE A POST</button>
                    <PostFeed/>
                </>
            }
        </div>
    )
}

export default ForumPage