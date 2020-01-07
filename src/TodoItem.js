import React from 'react'

function TodoItem(props)
{
    const completedStyle = {
        fontStyle:"italic",
        color:"cdcdcd",
        textDecoration:"line-through"
    }
    return(
        <div className="todo-item">
                <input type='checkbox' 
                checked={props.item.completed}
                onChange={() =>props.handleChange(props.item.id)}
                ></input>
                <h1 style={props.item.completed ? null : completedStyle}>{props.item.text}</h1>

            
        </div>
    )
}


export default TodoItem