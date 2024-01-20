import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Dashboard() {
    const [itineraryList, setItineraryList] = useState([
        {"title": "test", "destination": "test", "country": "test"}
    ]);

    const navigate = useNavigate();
    const routeChange = () =>{ 
        navigate('/details')
    }

	return (
        <div className='dashboardEverything'>
            <Navbar style={{ background:"black"}}> 
                <Navbar.Brand href="/dashboard" style={{color: "white", paddingLeft: "10px"}}> 
                    Itineraries      
                </Navbar.Brand>
                <Navbar.Brand href="/destination" style={{color: "white", paddingLeft: "500px"}}> 
                    Destinations
                </Navbar.Brand>
                <br /> 
            </Navbar>
            
            <div className='topText'>
                <p> Welcome, user! </p>
                <h1> List of Itineraries </h1>
            </div>

            <div style={{justifyContent: 'flex-end'}}>
                <Button
                    variant = "contained"
                    color = "primary"
                    style={{ marginBottom: '20px' }}
                    className='addButton'
                >
                    Add New Itinerary
                </Button>
            </div>

            <List>
                {itineraryList.map((itinerary) => {
                    return (
                        <ListItemButton onClick={routeChange}>
                            <ListItemText primary={itinerary.title} secondary = {itinerary.destination} />
                            <ListItemText primary={itinerary.country}/>
                        </ListItemButton>
                    )
                })}        
            </List>

        </div>
	);
}

export default Dashboard;
