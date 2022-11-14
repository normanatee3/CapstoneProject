import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import LoadingTower from '../components/LoadingTower';
import EditPost from './editCrud/EditPost';


function PostPage() {
  const [onePost, setOnePost] = useState(null)
  const [showEdit, setShowEdit] = useState(false)
  const params = useParams()

  const showEditPostForm = () => {
    setShowEdit(!showEdit)
  }

  const navigate = useNavigate();

  const deletePost = () =>{
    axios.delete(`/api/posts/${params.postId}`).then(()=>{
      navigate('/forum')
    })
  }

  useEffect(() => {
    axios.get(`/api/posts/${params.postId}`).then((res) => {
      setOnePost(res.data.data)
    }).then(() => {
      // console.log(onePost);
    })
  }, [])


  return (
    <>
      {onePost ?
        <>
          {showEdit ?
            <>
            <EditPost showEditPostForm={showEditPostForm} post={onePost}/>
            </>
            :
            <>
              <div className='fullPage'>

                <Card className="bg-dark text-white fullPost">
                  <Container className='postTitle'><Card.Text>Title: {onePost.title}</Card.Text></Container>
                  <Container className='postName'><Card.Text style={{marginRight: "3px"}}>Posted by: {onePost.creator_name} {' '}</Card.Text>
                  <Card.Text>{' '}in: {onePost.category}</Card.Text></Container>
                  <Container className='postMessage'>
                  <Card bg='dark' border='secondary'>
                    <Card.Header>Message: </Card.Header>
                    <Card.Body>{onePost.description}</Card.Body>
                  </Card>
                  </Container>
                  <br />
                  <Container className='postStamp'><Card.Text style={{marginRight: "3px"}}>Created: {new Date(onePost.createdAt).toLocaleString()} •</Card.Text>
                  <Card.Text >Last Edit: {new Date(onePost.updatedAt).toLocaleString()}</Card.Text></Container>
                  <br />
                <Container className='postButtons'>

                <button className='buttonMini' onClick={showEditPostForm}>EDIT</button>
                <button className='buttonMini' onClick={deletePost}>DELETE</button>
                </Container>
                </Card>
                <button className="buttonMini">BACK TO POSTS</button>
              </div>
            </>
          }

        </>
        : <>
          <LoadingTower/>
        </>
      }
      

    </>
  )
}

export default PostPage