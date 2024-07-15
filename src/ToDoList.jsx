import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value); // Update the newTask state to let use see what users type into input field
  }

  function addTask() {
    if (newTask.trim() !== "") { // Check if the newTask is not empty
      setTasks(t => [...t, newTask]); // Add the new task to the tasks state
                                    // (t is the current state of tasks)
      setNewTask(''); // Clear the newTask state after adding
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Create a new array of tasks without the task at the given index
    setTasks(updatedTasks); // Update the tasks state with the new array

  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]; // Create a copy of the tasks array
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]]; // Swap the tasks at the given index and the one before it
      setTasks(updatedTasks); // Update the tasks state with the new array
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]; // Create a copy of the tasks array
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]]; // Swap the tasks at the given index and the one before it
      setTasks(updatedTasks); // Update the tasks state with the new array
    }
  }

  return (
      <>
        <div className='to-do-list'>

            <h1>To Do List</h1>

            <div>
                <input
                    type='text'
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className='add-button'
                    onClick={addTask}>
                      Add Task
                </button>

            </div>

            <ol>
                {tasks.map((task, i) =>
                    <li key={i}>
                      <span className='text'>{task}</span>
                      <button
                            className='delete-button'
                            onClick={() => deleteTask(i)}>
                            Delete
                      </button>
                      <button
                          className='move-button'
                          onClick={() => moveTaskUp(i)}>
                          ☝️
                      </button>
                      <button
                          className='move-button'
                          onClick={() => moveTaskDown(i)}>
                          👇
                      </button>
                    </li>
                )}
            </ol>
        </div>
      </>
  );

}

export default ToDoList;
