import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { editPost } from "../../utilities/posts-api";
import { useParams } from 'react-router-dom';

function EditPost({ showEditPostForm, post }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const params = useParams()

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleFormSubmission = async (e) => {
        e.preventDefault()
        
        const state = { 
            creator_name: post.creator_name,
            creator_email: post.creator_email, 
            category: post.category,
            title, 
            description };

            try {
                const formData = { ...state };
                const post = await editPost(formData, params.postId)
                console.log(post ? "success" : "fail");
                showEditPostForm()
            } catch (error) {
                console.log(error)
            }
    };



    return (
        <div>
            <Form as={Card} className="bg-dark text-white homeCard">
                <i onClick={showEditPostForm} className="bi bi-x-circle closeButton" ></i>
                <Card.Img style={{ opacity: ".1" }} src="https://media1.giphy.com/media/VSqX8wwKFHtQGr4iuj/200w.gif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text as='h1'>EDIT POST</Card.Text>
                    <br />
                    {/* -------------------- */}
                    <form
                        style={{ background: "none", margin: "0", width: "100%" }}
                        autoComplete="off"
                        onSubmit={(e) => {
                            return handleFormSubmission(e);
                        }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label as="h5">Title</Form.Label>
                            <Form.Control
                                type="text"
                                className='customForm'
                                placeholder="Post Title"
                                onChange={(e) => {
                                    return handleTitleChange(e);
                                }}
                                defaultValue={post.title}
                                
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label as="h5">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                className='customForm'
                                rows={5}
                                placeholder="Write your post here"
                                onChange={(e) => {
                                    return handleDescriptionChange(e);
                                }}
                                defaultValue={post.description}
                                required
                            />
                        </Form.Group>
                        
                        <br />
                    <button type='submit' className="button-49 button-submit">SUBMIT</button>
                    </form>
                    {/* -------------------- */}
                </Card.ImgOverlay>
            </Form>
        </div>
    )
}

export default EditPost