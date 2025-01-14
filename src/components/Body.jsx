
import { useState } from "react";
import React from "react";

const Body = () => {
  const [message,SetMessage]=useState("")
  const [tasks, setTask] = useState([]); // Array of task objects
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);

  const AddTask = () => {
    if (newTask.trim()) {
      if(tasks.some((task)=> task.text===newTask)){
        SetMessage("Task already exists")
      }else{
        setTask([...tasks, { id: Date.now(), text: newTask }]); // Assign unique id to each task
        setNewTask("");
        SetMessage("")
      }
    }
  };

  const DeleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));

    // Also remove the task from the checked list, if it exists
    setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
  };

  const handleCheckboxChange = (taskId) => {
    if (checkedTasks.includes(taskId)) {
      setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
    } else {
      setCheckedTasks([...checkedTasks, taskId]);
    }
  };

  return (
    <div className="body">
      <div className="flex">
        <div className="tasks">
          <span className="message" style={{color:"red"}}>{message}</span>
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={checkedTasks.includes(task.id)}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <span className={checkedTasks.includes(task.id) ? "completed-task" : ""}>
                {task.text}
              </span>
              <button
                type="submit"
                className="delete_button"
                onClick={() => DeleteTask(task.id)}
              >
                Delete Task
              </button>
            </div>
          ))}
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