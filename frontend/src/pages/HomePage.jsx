import React from 'react'
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()
  const toForum = () =>{
    navigate('/forum')
  }
  return (
    <div>
      <Card className="bg-dark text-white homeCard">
      <Card.Img style={{opacity: ".1"}} src="https://media1.giphy.com/media/VSqX8wwKFHtQGr4iuj/200w.gif" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Img style={{width: "30%"}} src="https://images.squarespace-cdn.com/content/v1/6260c09554aa491baf4c0fba/dfea8b4b-1050-408a-8e53-53d4cff62b57/Colab_Logos__Main_White.png" alt="Card image" />
        <Card.Text className='mid'>
          CoLab is a platform for engineers and devs to share their projects and questions, and find in-context, community driven answers, potential collaborators, inspiration and feedback on their work.
        </Card.Text>
        <button  onClick={toForum} className="button-49">Join the Conversation</button>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default HomePage

