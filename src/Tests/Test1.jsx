import axios from 'axios'
import React from 'react'

const Test = () => {

  const data = 
    {
      title: 'New Test2',
      description: 'Example 2',
      project: 1,
      stage: 1,
      tag: 1,
      assigned: [1, 2, 3],
      contract: 1,
      deadline: '2022-09-20T11:50:00+04:30'
    }
  

  const handleSubmit = async (e) => {

    let form = new FormData()
    // Object.keys(data).map(key=>{
    //   formData.append(key, typeof data[key] === "object" && key!=="logo"? JSON.stringify(data[key]):data[key])
    // })

    let assign = data.assigned.map(item => JSON.stringify(item))

    console.log(assign)
    
    
    form.append('title', data.title)
    form.append('description', data.description)
    form.append('project', data.project)
    form.append('stage', data.stage)
    form.append('tag', data.tag)
    form.append('contract', data.contract)
    data.assigned.map(item=>form.append('assigned', JSON.parse(item)))
    form.append('deadline', data.deadline)

    const response = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/taskmanager/task/',
      data: form,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    console.log(response)
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={handleSubmit}>Send</button>
    </div>
  )
}

export default Test