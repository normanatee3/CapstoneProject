import React, { useState, useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { editEvent } from "../../utilities/events-api";

function EditEvent({ closeEditEventForm, activeEvent }) {

    const parsedDate = activeEvent.date.slice(0, 10)
    const parsedTime = activeEvent.date.slice(11, 19)


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
                const event = await editEvent(formData, activeEvent._id)
                console.log(event ? "success" : "fail");
                closeEditEventForm()
            } catch (error) {
                console.log(error)
            }
    };



    return (
        <div>
            <Form as={Card} className="bg-dark text-white homeCard">
                <i onClick={closeEditEventForm} className="bi bi-x-circle closeButton" ></i>
                <Card.Img style={{ opacity: ".1" }} src="https://media1.giphy.com/media/VSqX8wwKFHtQGr4iuj/200w.gif" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text as='h1'>EDIT EVENT</Card.Text>
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
                                defaultValue={activeEvent.title}
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
                                defaultValue={activeEvent.link}
                                
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
                                defaultValue={parsedDate}
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
                                defaultValue={parsedTime}
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

export default EditEvent