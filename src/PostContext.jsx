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

  console.log(projectList);
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
    const project = projectList.find((element) => element.id === TakeLogic);
    console.log(project);
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
  ///////////////////////////////////////////////////////////////////////////////
  function handleDeleteProjectList(id) {
    setProjectList(projectList.filter((ProjectItem) => ProjectItem.id !== id));
  }

  function handleEditProjectList(id, EditProjectName) {
    const renamedProject = projectList.map((projectItem) => {
      if (projectItem.id === id) {
        const updatedProject = {
          ...projectItem,
          projectName: EditProjectName,
        };
        return updatedProject;
      }
      return projectItem;
    });
    setProjectList(renamedProject);
  }

  //////////////////////////////////////////////////////////////////////////////
  function handleDeleteProject(deleteProjectId, deleteProjectSubArrayId) {
    const project = projectList.find(
      (element) => element.id === deleteProjectId
    );

    setTimeout(() => {
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
    }, 300);
  }
  //////////////////////////////////////////////////////////////////////////////////
  function handleEditProject(
    projectId,
    myId,
    myTitle,
    myDescription,
    myPriority,
    myDueDate,
    myDueMonth
  ) {
    const project = projectList.find((item) => item.id === projectId);

    if (project) {
      const updatedProject = {
        ...project,
        projectTodo: [...project.projectTodo].map((item) => {
          if (item.id === myId) {
            const updateArray = {
              ...item,
              id: myId,
              title: myTitle,
              description: myDescription,
              priority: myPriority,
              dueDate: myDueDate,
              dueMonth: myDueMonth,
            };
            return updateArray;
          }
          return item;
        }),
      };

      //pretier-ignore
      const updatedProjectList = projectList.map((p) =>
        p.id === projectId ? updatedProject : p
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
        handleDeleteProjectList: handleDeleteProjectList,
        handleEditProjectList: handleEditProjectList,
        handleDeleteProject: handleDeleteProject,
        handleEditProject: handleEditProject,
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
