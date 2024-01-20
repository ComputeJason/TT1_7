import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const createData = (title, country, destinations) => {
    return { title, country, destinations };
};


function Dashboard() {
    const [itineraryList, setItineraryList] = useState([
        {"title": "test", "destination": "test", "country": "test"}
    ]);

	return (
        <div className='dashboardEverything'>
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
                    <ListItemButton>
                        <ListItemText primary={itinerary.title} secondary = {itinerary.destination} />
                        <ListItemText primary={itinerary.country}/>
                    </ListItemButton>
                })}        
            </List>
        </div>
	);
}

export default Dashboard;
