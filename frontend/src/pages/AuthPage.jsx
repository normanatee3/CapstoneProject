import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'
import { useState } from 'react';
import '../css/Auth.css'


function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <Container style={{backgroundColor: "slategrey"}} fluid>
                <Row>
                    <Col  as="h1" >CoLab</Col>
                </Row>
            </Container>
            {showLogin ?
                <LogInForm showLogin={showLogin} setShowLogin={setShowLogin} setUser={setUser} />
                :
                <SignUpForm showLogin={showLogin} setShowLogin={setShowLogin} setUser={setUser} />
                }
            
        </div>
    )
}

export default AuthPage