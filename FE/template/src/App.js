import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
