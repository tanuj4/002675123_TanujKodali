import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function About(){
    
    const navigate = useNavigate();

    function navigation(){
        navigate('/home');
    }
    
    return(
        <div class ="button container-fluid">
            <div class = "heading row" >
                <div class = "col-sm-12 line1 text-center">
            <b>About Us</b>
                </div>
                <div class = "col-sm-3 text-center line2">
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src = {require('../Images/Popeyes-logo.png')}/>
            <Card.Body>
            <Card.Title><b>History</b></Card.Title>
            <Card.Text>
                <div>Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. </div>
            
            </Card.Text>
            <Button variant="primary"  onClick={navigation}>Home</Button>
      </Card.Body>
    </Card>
                </div>
                
            </div>
            
        </div>
    )
}



export default About