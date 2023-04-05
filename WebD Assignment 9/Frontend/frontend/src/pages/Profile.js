import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Profile(){
    
    const navigate = useNavigate();
    
    function navigation(){
        navigate('/home');
    }
    
    const orders = [
      { name: "Dr. pepper" },
      { name: "Pepsi" },
      { name: "Sandwich" },
    ];

    return(
        <div className="button container-fluid">
            <div className="heading row">
                <div className="col-sm-12 line1 text-center">
                    <b>Profile</b>
                </div>
                <div className="col-sm-3 text-center line2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../Images/Popeyes-logo.png')}/>
                        <Card.Body>
                            <Card.Title><b>Your Favourite Orders</b></Card.Title>
                            <Card.Text>
                                {orders.map(order => (
                                    <div key={order.name}>{order.name}</div>
                                ))}
                            </Card.Text>
                            <Button variant="primary" onClick={navigation}>Home</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Profile;
