import Login from "./Login";
import Destination from "./components/Destination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import ItineraryDetails from "./components/ItineraryDetails";

function App() {
    const [userId, setUserId] = useState("");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setUserId={setUserId} />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard userId={userId} />}
                />
                <Route path="/destination" element={<Destination />} />
                <Route path="/details" element={<ItineraryDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
