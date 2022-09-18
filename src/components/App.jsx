import React from "react"
import TaskManager from "./TaskManager"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskEdit from "./subcomponents/TaskEdit";
import TaskDetails from "./subcomponents/TaskDetails"

export default function App() {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskManager />}/>
            <Route path="/details" element={<TaskDetails />}/>
        </Routes>
        </BrowserRouter>
        
        

        
    )
}