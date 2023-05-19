import React from "react";
const ToDoLists = (props) =>{
    
    return(
    <>    
    <div className='todo_style'></div>
    <i className='fa fa-times' aria-hidden="true" 
    onClick={() => {
        props.onSelect(props.id);
    }}/>

    <li>{props.text}</li>
    </>
 );
}
export default ToDoLists;



