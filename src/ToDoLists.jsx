import React from "react";
const ToDoLists = (props) =>{
    
    return(
    <>    
    <div className='todo_style'></div>
    <i class="fa-solid fa-delete-left"
    onClick={() => {
        props.onSelect(props.id);
    }}/>

    <li>{props.text}</li>
    </> 
 );
}
export default ToDoLists;



