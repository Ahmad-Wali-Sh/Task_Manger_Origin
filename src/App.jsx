import React from "react"
import TaskManager from "./pages/LandingPage/TaskManager"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDetails from "./pages/Installation/TaskDetails"
import TroubleshootDetails from "./pages/Troubleshoot/TroubleshootDetails"
import OnlineSupportDetails from "./pages/OnlineSupport/OnlineSupportDetails";
import ChangeLocationDetails from "./pages/ChangeLocation/ChangeLocationDetails";
import AmendmentDetails from "./pages/Amendment/AmendmentDetails";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import 'react-notifications/lib/notifications.css';

export default function App() {
    
   

 
    return (
       <>
       <NotificationContainer />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskManager />}/>
            <Route path="/details" element={<TaskDetails />}/>
            <Route path="/troubleshoot" element={<TroubleshootDetails />}/>
            <Route path="/online_support" element={<OnlineSupportDetails />}/>
            <Route path="/change_location" element={<ChangeLocationDetails />}/>
            <Route path="/amendment" element={<AmendmentDetails />}/>
        </Routes>
        </BrowserRouter>
       </>
        
        

        
    )
}