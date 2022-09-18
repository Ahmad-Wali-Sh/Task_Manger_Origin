import axios from "axios"

import React from "react"

export default function getList() {
    return fetch('http://192.168.60.55:8000/api/taskmanager/task/')
        .then((response) => response.json())
}

const TASK_URL = process.env.REACT_APP_TASK
const token = '8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c'



// export function GetUrl () {
//     const [title, setTitle] = React.useState([])
    
//     React.useEffect(() => { 
//     axios.get(TASK_URL, {
//     headers: {
//         Authorization: token
//     }
// }).then (res => {
//    setTitle(res.data.results[0].title)
// })


// }, [])
// }