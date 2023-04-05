import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home(props){

    const navigate = useNavigate();

    function handlelogout(){
        props.handle(false);
        navigate('/');
    }
    
    return(
        <div class ="button container-fluid">
            <div class = "heading row" >
                <div class = "col-sm-12 line1 text-center">
            <b>Welcome To popeyes</b>
                </div>
                <div class = "col-sm-3 text-center line2">
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src = {require('../Images/Popeyes-logo.png')}/>
            <Card.Body>
            <Card.Title><b>MENU</b></Card.Title>
            <Card.Text>
                <div>Spicy Sandwich</div>
                <div>Fries</div>
                <div>Onion Rings</div>
            </Card.Text>
            <Button variant="primary"  onClick={handlelogout}>Logout</Button>
      </Card.Body>
    </Card>
                </div>
                
            </div>
            
        </div>


        
        
    )
}






export default Home