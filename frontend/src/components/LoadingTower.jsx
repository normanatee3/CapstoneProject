import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function LoadingTower() {
    return (
        <div>
            <Spinner animation="grow" variant="danger" /><br />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" /><br />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" /><br />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}

export default LoadingTower