import React, { useState, useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { newEvent } from "../../utilities/events-api";

function NewEvent({ showEventForm }) {


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const user = useContext(UserContext)
    

    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleLinkChange = (e) => setLink(e.target.value);

    const handleFormSubmission = async (e) => {
        e.preventDefault()
        const formattedDate = new Date(`${date}T${time}:00`)
        const state = { 
            creator_name: user.name,
            creator_email: user.email, 
            date: formattedDate, 
            title, 
            link };
            
            try {
                
                // console.log(state)
                const formData = { ...state };
                const event = await newEvent(formData)
                console.log(event ? "success" : "fail");
                showEventForm()
            } catch (error) {
                console.log(error)
            }
    };



    return (
        <div>
            <Form as={Card} className="bg-dark text-white homeCard">
                <i onClick={showEventForm} className="bi bi-x-circle closeButton" ></i>
                <Card.Img style={{ opacity: ".1" }} src="https://media1.giphy.com/media/VSqX8wwKFHtQGr4iuj/200w.gif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text as='h1'>NEW EVENT</Card.Text>
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
                                maxLength={30}
                                className='customForm'
                                placeholder="Post Title"
                                onChange={(e) => {
                                    return handleTitleChange(e);
                                }}
                                value={title}
                                required
                            />
                            <Form.Text className="text-muted">
                            Limit 30 char.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLink">
                            <Form.Label as="h5">External link to event</Form.Label>
                            <Form.Control
                                type="url"
                                className='customForm'
                                rows={5}
                                placeholder="Insert link here"
                                onChange={(e) => {
                                    return handleLinkChange(e);
                                }}
                                value={link}
                                
                            />
                            <Form.Text className="text-muted">
                            (Optional)
                        </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-1" controlId="formBasicDate">
                            <Form.Label as="h5">Date</Form.Label>
                            <Form.Control
                                type="date"
                                className='customForm'
                                onChange={(e) => {
                                    return handleDateChange(e);
                                }}
                                value={date}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicDate">
                            <Form.Label as="h5">Time</Form.Label>
                            <Form.Control 
                                type='time'
                                className='customForm'
                                onChange={(e) => {
                                    return handleTimeChange(e);
                                }}
                                value={time}
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

export default NewEvent