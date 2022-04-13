import { useState,useEffect } from "react"
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import './styles/ais8cmj.css';
import './styles/code.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Add from './components/Add';
import Footer from './components/Footer';
import About from './components/About';

function App() {


  const [showAddButton, setShowAddButton] = useState(true);
  
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const get_task = async () => {
      const fromserver = await fetchTasks();
      setTasks(fromserver);
    }
  
    get_task();
  },[])
  //get all data from server
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      return data 
    }
  
    //get one data from server
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data 
    }
  
  
  //delete task in server
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"})
    setTasks(tasks.filter((task) => task.id !== id
    ))
    console.log("del",id);
  }
  
  
  // Delete task in UI
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id
  //   ))
  //   console.log("del",id);
  // }

  //Toggle reminder on server
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const upTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, { method: "PUT",headers: { 'Content-Type': 'application/json'},body: JSON.stringify(upTask)})

    const data = await res.json();
    setTasks(tasks.map((task) => task.id ===id ? {...task,reminder: data.reminder} : task))
    console.log(id);
  }
  //Toggle reminder
  // const toggleReminder = (id) => {
    // setTasks(tasks.map((task) => task.id ===id ? {...task,reminder: !task.reminder} : task))
    // console.log(id);
  // }

  //Add task to server
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) });
    
    const data = await res.json();
    setTasks([...tasks,data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id: id, ...task };
    // setTasks([...tasks,newTask]);
    // console.log(newTask);
  }
   //Add task to UI
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id: id, ...task };
  //   setTasks([...tasks,newTask]);
  //   console.log(newTask);
  // }
  // hide and show add button

  return (
    <Router>
            <div className="App">
                    <Header title="TodoList App" onAdd={() => setShowAddButton(!showAddButton)} showAdd={ showAddButton}/>
                    
        <Route path="/" exact render={(props) => (
        <>
                    {showAddButton && <Add OnAddTask={addTask} />}
            {tasks.length > 0 ? (<Tasks tasks={tasks} OnDelete={deleteTask} OnToggle={toggleReminder} />) : ('No Tasks To Show')}
            
        </>

          )}/>
                    

        <Route path='/about' component={About} />
        <Footer />

            </div>
        </Router>
      
  );
}

export default App;
