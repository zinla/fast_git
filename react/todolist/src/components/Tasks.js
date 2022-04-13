import Task from './Task';
function Tasks({tasks,OnDelete,OnToggle}) {
   
    return (
        <>
             {tasks.map((task) => (
                  <Task key={task.id} task={task} OnDelete={OnDelete} OnToggle={OnToggle} />
              
        )    )}
        </>
    )
}

export default Tasks
