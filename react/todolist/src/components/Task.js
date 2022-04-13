import { FaTimes } from 'react-icons/fa';

function Task(props) {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>props.OnToggle(props.task.id)}>
            <h3>
                {props.task.text}
                <FaTimes onClick={() => props.OnDelete(props.task.id)} style={{color: 'red',cursor:'pointer'}}/>
            </h3>
            <p>
                {props.task.day}
            </p>

        </div>
    )
}
export default Task
