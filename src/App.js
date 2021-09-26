import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './component/About';
import AddTask from './component/AddTask';
import Footer from './component/Footer';
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {

const server = process.env.REACT_APP_FETCHING_SERVER||'http:localhost:5000/tasks'


const [showAddForm, setShowAddForm] = useState(false);

const [tasks,setTasks] = useState([]);

useEffect(() => {
  const getTasks = async() => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  getTasks();

// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

// fetch All Task
const fetchTasks  = async() => {
  const res = await fetch(server);

  const data = res.json();

  return data;
}

// fetch Task byId
const fetchTaskById  = async(id) => {
  const res = await fetch(`${server}/${id}`);

  const data = res.json();

  return data;
}

// add task 
const onSubmitHandler = async(task) => {
  // const id = Math.floor(Math.random() * 10000) + 1;

  // const newTask = {id, ...task}

  // setTasks([...tasks,newTask]);

  const res = await fetch(server,{
    method:'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task)
  });

  const getData = await res.json()

  setTasks([...tasks, getData]);

  return

}


// delete task from list
const handleRemove = async(id) => {
  await fetch(`${server}/${id}`,{
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id ));
   //We should control the response status to decide if we will change the state or not.
  // res.status === 200
  //   ? setTasks(tasks.filter((task) => task.id !== id))
  //   : alert('Error Deleting This Task')
  return
}

// toggle reminder
const toggleReminder = async(id) => {

  const tasktoToggle =  await fetchTaskById(id)

  const updateTask = {...tasktoToggle, reminder: !tasktoToggle.reminder}


  const res = await fetch(`${server}/${id}`,{
    method:'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateTask)
  })

  const data = await res.json()


  // eslint-disable-next-line array-callback-return
  setTasks(tasks.map((task) => task.id === id ?
    {...task , reminder: data.reminder} : task
  ))
  return
}


  return (
    <Router>
      <div className="container">
      <Header title="Task Tracker" onAddBtn={() => setShowAddForm(!showAddForm)} 
      showAddForm={showAddForm}
      />
      <Route path="/" exact render={(props) => (
        <>
          {showAddForm && <AddTask onSubmitHandler={onSubmitHandler} />}
      {tasks.length > 0 
        ? <Tasks tasks={tasks} handleRemove={handleRemove} toggleReminder={toggleReminder}/> : <p>There is no task</p>} 
        </>
      )}/>

        <Route path="/about" component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;