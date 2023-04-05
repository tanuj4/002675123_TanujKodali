import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Jobs(){
    
    const navigate = useNavigate();

    function navigation(){
        navigate('/home');
    }
    
    return(
        <div class ="button container-fluid">
            <div class = "heading row" >
                <div class = "col-sm-12 line1 text-center">
            <b>Jobs</b>
                </div>
                <div class = "col-sm-3 text-center line2">
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src = {require('../Images/Popeyes-logo.png')}/>
            <Card.Body>
            <Card.Title><b>Current Openings</b></Card.Title>
            <Card.Text>
            <div>Cleaner</div>
            <div>Supervisor</div>
            <div>Manager</div>
            
            </Card.Text>
            <Button variant="primary"  onClick={navigation}>Home</Button>
      </Card.Body>
    </Card>
                </div>
                
            </div>
            
        </div>
    )
}



export default Jobs