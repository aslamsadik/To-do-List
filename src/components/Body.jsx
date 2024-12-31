// import { useState } from "react"
// import InputTask from "./InputTask"
// import React from "react"

// const Body=()=>{
//   const [tasks,setTask]=useState([])
//   const [newTask,setNewTask]=useState("")

//   const AddTask=()=>{
//     if(newTask.trim()){
//       setTask([...tasks,newTask])
//       setNewTask("")
//     }
//   }

//   const DeleteTask=(index)=>{
//     const filteredTask=tasks.filter((_,idx)=>{
//       return idx!==index
//     })
//     setTask(filteredTask)
//   }

//     return(
//       <div className="body" >
//         <div className="flex">
//          <div className="tasks"> 
//          {tasks.map((task,index)=>{
//            return(
//             <div key={index} >
//              <span>{task}</span> 
//              <button type="submit" className="delete_button" onClick={()=>  DeleteTask(index)} >Delete Task</button>
//           </div>
//            )
//          })}
//          </div>   
//         </div>
//         <input
//         type="text"
//         name="task"
//         id="task"
//         className="input"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//         <button type="submit" className="insert_button" onClick={AddTask} >Insert Task</button>
//       </div>
//     )
// }

// // const Body = () => {
// //   const [tasks, setTasks] = useState([]); // State to manage tasks
// //   const [newTask, setNewTask] = useState(""); // State to manage input value

// //   // Add a task to the list
// //   const handleAddTask = () => {
// //     if (newTask.trim()) {
// //       setTasks([...tasks, newTask]);
// //       setNewTask(""); // Clear input field
// //     }
// //   };

// //   // Remove a task
// //   const handleDeleteTask = (index) => {
// //     const updatedTasks = tasks.filter((_, idx) => idx !== index);
// //     setTasks(updatedTasks);
// //   };

// //   return (
// //     <div className="body">
// //       <div className="flex">
// //         <div className="tasks">
// //           {tasks.map((task, index) => (
// //             <div key={index}>
// //               <span>{task}</span>
// //               <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //             </div>
// //           ))}
// //         </div>
// //         <input
// //           type="text"
// //           name="task"
// //           id="task"
// //           value={newTask}
// //           onChange={(e) => setNewTask(e.target.value)}
// //         />{" "}
// //         <br />
// //         <button onClick={handleAddTask}>Insert Task</button>
// //       </div>
// //     </div>
// //   );
// // };

// export default Body

import { useState } from "react";
import React from "react";

const Body = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const AddTask = () => {
    if (newTask.trim()) {
      setTask([...tasks, newTask]);
      setNewTask("");
    }
  };

  const DeleteTask = (index) => {
    const filteredTask = tasks.filter((_, idx) => {
      return idx !== index;
    });
    setTask(filteredTask);

    // Also remove the task from the checked list, if it exists
    setCheckedTasks(checkedTasks.filter((_, idx) => idx !== index));
  };

  const handleCheckboxChange = (index) => {
    if (checkedTasks.includes(index)) {
      setCheckedTasks(checkedTasks.filter((idx) => idx !== index));
    } else {
      setCheckedTasks([...checkedTasks, index]);
    }
  };

  return (
    <div className="body">
      <div className="flex">
        <div className="tasks">
          {tasks.map((task, index) => {
            return (
              <div key={index} className="task-item">
                <input
                  type="checkbox"
                  checked={checkedTasks.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className={checkedTasks.includes(index) ? "completed-task" : ""}>
                  {task}
                </span>
                <button
                  type="submit"
                  className="delete_button"
                  onClick={() => DeleteTask(index)}
                >
                  Delete Task
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <input
        type="text"
        name="task"
        id="task"
        className="input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="insert_button" onClick={AddTask}>
        Insert Task
      </button>
    </div>
  );
};

export default Body;
