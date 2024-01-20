import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Dashboard() {
	return (
        <div className='dashboardEverything'>
            <div className='topText'>
                <h1> List of Itineraries </h1>
            </div>

            <List>                
                <ListItemButton>
                    <ListItemText primary="Itinerary 1" secondary = "MBS, Gardens" />
                </ListItemButton>
            </List>
        </div>
	);
}

export default Dashboard;
