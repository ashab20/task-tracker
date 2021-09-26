import {useState} from 'react'

const AddTask = ({onSubmitHandler}) => {
const [text,setText] = useState('');
const [day,setDay] = useState('');
const [reminder,setReminder] = useState(false);

const onSubmitFormHandler = (e) => {
    e.preventDefault();
    
    if(!text){
        alert('Please add a task');
        return
    }

    onSubmitHandler({text,day, reminder});

    setText('');
    setDay('');
    setReminder(false);
}

    return (
        <form className="add-form" onSubmit={onSubmitFormHandler}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" 
                onChange={(e) => setText(e.target.value)} value={text}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" name="" id="" placeholder="Add Date and Time" 
                onChange={(e) => setDay(e.target.value)} value={day}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" 
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} 
                value={reminder}/>
            </div>
            <input type="submit" value="Save Task"  className="btn-block btn"/>
        </form>
    )
}

export default AddTask
