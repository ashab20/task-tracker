import Task from "./Task"

const Tasks = ({tasks,handleRemove,toggleReminder}) => {

    return (
        <div>
            {tasks.map((task) =>  (
            <Task key={task.id} 
                task={task} 
                toggleReminder={toggleReminder} 
                handleRemove={handleRemove}/>)
            )}
        </div>
    )
}

export default Tasks
