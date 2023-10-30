import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
Player.defaultProps = {
    name: "Player Name",
    team: "Team Name",
    nationality: "Nationality",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ibrahim_Traor%C3%A9_-_2023_%28cropped%29.png",
  };

export default Player
