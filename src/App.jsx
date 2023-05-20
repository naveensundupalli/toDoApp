import react, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () =>{
    const[inputList,setInputList] = useState("");
    const[items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    const listOfItems = () =>{
    setItems((oldItems) =>{
       return[...oldItems,inputList];
    });
    setInputList("");
    };
    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrayElem,index)=>{
                return index !==id;
            });
        });
    };
    
    return(
    <>
        <div className="main_div">
            <div className="center_div">
            <br></br>
            <h1>To-Do List</h1>
            <br/>
            <input type="text" 
             placeholder="add a item"
             value={inputList}
             onChange={itemEvent}></input>
            <button onClick={listOfItems}> + </button>
            <ol>
                {/* <li>{inputList}</li> */}
                {items.map((itemVal ,index)=>{
                  return <ToDoLists 
                  key={index}
                  id = {index}
                  text ={itemVal}
                  onSelect={deleteItems}
                  />;
                })}
            </ol>

            </div>
        </div>
    </>
    )
}
export default App;