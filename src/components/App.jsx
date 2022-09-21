import React from "react"
import TaskManager from "./TaskManager"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskEdit from "./subcomponents/TaskEdit";
import TaskDetails from "./subcomponents/TaskDetails"
import TroubleshootDetails from "./subcomponents/TroubleshootDetails"

export default function App() {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskManager />}/>
            <Route path="/details" element={<TaskDetails />}/>
            <Route path="/troubleshoot" element={<TroubleshootDetails />}/>
        </Routes>
        </BrowserRouter>
        
        

        
    )
}