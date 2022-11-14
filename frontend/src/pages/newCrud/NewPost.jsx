import React, { useState, useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { newPost } from "../../utilities/posts-api";
import Categories from '../../data/categories';

function NewPost({ showPostForm }) {

    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const user = useContext(UserContext)
    
    const categories = Categories

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    const handleFormSubmission = async (e) => {
        e.preventDefault()
        
        const state = { 
            creator_name: user.name,
            creator_email: user.email, 
            category, 
            title, 
            description };

            try {
                const formData = { ...state };
                const post = await newPost(formData)
                console.log(post ? "success" : "fail");
                showPostForm()
            } catch (error) {
                console.log(error)
            }
    };



    return (
        <div>
            <Form as={Card} className="bg-dark text-white homeCard">
                <i onClick={showPostForm} className="bi bi-x-circle closeButton" ></i>
                <Card.Img style={{ opacity: ".1" }} src="https://media1.giphy.com/media/VSqX8wwKFHtQGr4iuj/200w.gif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text as='h1'>NEW POST</Card.Text>
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
                                value={title}
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
                                value={description}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label as="h5">Category</Form.Label>
                            <Form.Select 
                            onChange={(e) => {
                                return handleCategoryChange(e);
                            }} 
                            className='g-4 customForm' 
                            aria-label="Default select example">
                                {categories.map((cat, i)=>{
                                    return <option key={`${i}`} value={cat}>{cat}</option>
                                })}
                                
                            </Form.Select>
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

export default NewPost