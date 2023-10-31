/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

//1. Create a Context
const PostContext = createContext();

function PostProvider({ children }) {
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("tasks"));
    if (storedArray) {
      setTasks(storedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  ////////////////////////////////////////////////////////////////

  //Adding into the array.
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function handleDeleteTask(id) {
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    }, 300);
  }

  function handleEditTask(myId, myTitle, myDescription, myPriority) {
    const newListItem = tasks.map((item) => {
      if (item.id === myId) {
        const updatedItem = {
          ...item,
          title: myTitle,
          description: myDescription,
          priority: myPriority,
        };
        return updatedItem;
      }
      return item;
    });
    setTasks(newListItem);
  }

  return (
    <PostContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
        isAddTask: isAddTask,
        setIsAddTask: setIsAddTask,
        handleAddTask: handleAddTask,
        handleDeleteTask: handleDeleteTask,
        handleEditTask: handleEditTask,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function useTodo() {
  const context = useContext(PostContext);
  return context;
}

export { PostProvider, useTodo };
