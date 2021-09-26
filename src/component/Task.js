import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,handleRemove,toggleReminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3> 
                {task.text} 
                <FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => handleRemove(task.id)}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
