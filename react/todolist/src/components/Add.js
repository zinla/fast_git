import { useState } from 'react';

function Add({ OnAddTask }) {
    
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const OnSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Enput Task name")
            return
        }
        OnAddTask({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={OnSubmit}>
            <div className="from-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={ (e)=> setText(e.target.value)}/>
            </div>

            <div className="from-control">
                <label htmlFor="">Day</label>
                <input type="text" placeholder="Day" value={day} onChange={ (e)=> setDay(e.target.value)}/>
            </div>

            <div className="from-control">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={ (e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}
export default Add
