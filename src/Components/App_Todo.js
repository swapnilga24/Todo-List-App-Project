import React, { useState } from "react";
import "./TodoApp.css";

function App_Todo() {
    
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };
    
    const resetName = ()=>{
        setTask("");
    }

    const addTask = () => {
        console.log("New Task is:"+task);
        if(task !== "") {
            const taskObject = {
                id:(Math.floor(Math.random()*1000)),
                value:task,
                isCompleted:false,
            };
            setTaskList([...taskList,taskObject]);
        }
        console.log("taskList is: "+JSON.stringify(taskList));
        resetName();
    };

    const taskCompleted = (event, id) => {
        event.preventDefault();

        const element = taskList.findIndex((ele)=> ele.id === id );;

        const copyArray = [...taskList];

        copyArray[element] = {
            ...copyArray[element],
            isCompleted: true,
        };

        setTaskList(copyArray);
    };

    const deletetask = (event, id) => {
        event.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
    };

    return (
        <div className="todo">
            <input type="text" name="text" id="text" placeholder="Add Task ..." value={task} onChange={handleChange}></input>
            <button className="btn-add" onClick={addTask} onFocus="swa">Add Task</button>
            <br/>
            {
                taskList !== [] ? (
                <ul>
                    {taskList.map((t)=>(
                        <li className={t.isCompleted ? "crossText" : "listitem"}>
                            {t.value}
                            <button className="completed" onClick={(event) => taskCompleted(event, t.id)}>
                                Completed
                            </button>
                            <button className="delete" onClick={(event) => deletetask(event, t.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                ) : null
            }
        </div>
    )
}

export default App_Todo;
