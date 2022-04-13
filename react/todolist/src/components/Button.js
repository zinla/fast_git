import React from 'react'
import protoTypes from 'prop-types';
export default function Button(props) {
    const addTask = (e) => {
        // console.log(e);
    }
    Button.protoTypes = {
        OnClick: protoTypes.func.isRequired
    }
    
    return (
        <button onClick={addTask} style={{ height: '45px', alignSelf: 'center', backgroundColor: props.backgroundColor, color: props.color }}>{ props.text }</button>
            
        
    )
}
