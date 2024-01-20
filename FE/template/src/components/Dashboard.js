import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const createData = (title, country, destinations) => {
    return { title, country, destinations };
};

function Dashboard({ userId }) {
    const [itineraryList, setItineraryList] = useState([]);

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/itineraryRouter/${userId}`
                );
                console.log(response.data);
                setItineraryList(response.data);
            } catch (err) {}
        };
        fetchItineraries();
    }, []);

    const navigate = useNavigate();
    const routeChange = () => {
        navigate("/details");
    };

    return (
        <div className="dashboardEverything">
            <div className="topText">
                <p> Welcome, user! </p>
                <h1> List of Itineraries </h1>
            </div>

            <div style={{ justifyContent: "flex-end" }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: "20px" }}
                    className="addButton"
                >
                    Add New Itinerary
                </Button>
            </div>

            <List>
                {itineraryList.map((itinerary) => {
                    return (
                        <ListItemButton onClick={routeChange}>
                            <ListItemText
                                primary={itinerary.title}
                                secondary={itinerary.destination}
                            />
                            <ListItemText primary={itinerary.country} />
                        </ListItemButton>
                    );
                })}
            </List>
        </div>
    );
}

export default Dashboard;
