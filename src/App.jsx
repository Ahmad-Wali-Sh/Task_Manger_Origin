import React from "react"
import TaskManager from "./pages/LandingPage/TaskManager"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDetails from "./pages/Installation/TaskDetails"
import TroubleshootDetails from "./pages/Troubleshoot/TroubleshootDetails"
import OnlineSupportDetails from "./pages/OnlineSupport/OnlineSupportDetails";

export default function App() {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskManager />}/>
            <Route path="/details" element={<TaskDetails />}/>
            <Route path="/troubleshoot" element={<TroubleshootDetails />}/>
            <Route path="/online_support" element={<OnlineSupportDetails />}/>
        </Routes>
        </BrowserRouter>
        
        

        
    )
}