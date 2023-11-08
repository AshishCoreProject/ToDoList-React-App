/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

//1. Create a Context
const PostContext = createContext();

function PostProvider({ children }) {
  const [projectList, setProjectList] = useState([]);
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "5239",
      title: "Ashish",
      description: "Barthwal",
      priority: "P1",
      dueDate: "2023/10/1",
      dueMonth: "Nov",
    },
    {
      id: "5238",
      title: "Ashish",
      description: "Barthwal",
      priority: "P1",
      dueDate: "2023/09/31",
      dueMonth: "Oct",
    },
  ]);

  //Creating Due Date Login
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
  }

  function handleDeleteTask(id) {
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    }, 300);
  }

  function handleEditTask(
    myId,
    myTitle,
    myDescription,
    myPriority,
    myDueDate,
    myDueMonth
  ) {
    const newListItem = tasks.map((item) => {
      if (item.id === myId) {
        const updatedItem = {
          ...item,
          title: myTitle,
          description: myDescription,
          priority: myPriority,
          dueDate: myDueDate,
          dueMonth: myDueMonth,
        };
        return updatedItem;
      }
      return item;
    });
    setTasks(newListItem);
  }

  ///////////////////////////////////////////////////////////////////////////////
  function handleAddProject(subTask, TakeLogic) {
    const project = projectList.find((element) => element.id === TakeLogic); //A
    //{id: '481', projectName: 'React.js', projectTodo: Array(0)}  ------getting an object

    if (project) {
      const updatedProject = {
        ...project,
        projectTodo: [...project.projectTodo, subTask],
      };
      const updatedProjectList = projectList.map((p) =>
        p.id === TakeLogic ? updatedProject : p
      );

      setProjectList(updatedProjectList);
      console.log("Adding into the sub Array");
    }

    if (TakeLogic === 0)
      setProjectList([...projectList, subTask]),
        console.log("Adding into Main Array");
  }

  //////////////////////////////////////////////////////////////////////////////
  function handleDeleteProject(deleteProjectId, deleteProjectSubArrayId) {
    console.log(deleteProjectId);

    const project = projectList.find(
      (element) => element.id === deleteProjectId
    );

    if (project) {
      const updatedProject = {
        ...project,
        projectTodo: [...project.projectTodo].filter(
          (item) => item.id !== deleteProjectSubArrayId
        ),
      };
      const updatedProjectList = projectList.map((p) =>
        p.id === deleteProjectId ? updatedProject : p
      );
      setProjectList(updatedProjectList);
    }
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
        projectList: projectList,
        handleAddProject: handleAddProject,
        handleDeleteProject: handleDeleteProject,
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
