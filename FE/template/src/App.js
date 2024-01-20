
import Login from "./Login";
import Destination from './components/Destination'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";



import React from 'react';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
				<Route path="/destination" element={<Destination />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
