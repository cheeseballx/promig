import React from "react";
import ProjectsCounter from "./ProjectsCounter";
import Form from "./Form";
import ProjectsList from "./ProjectsList";

function App() {
  const STORE = "pro2";

  const [projects, setProjects] = React.useState([]);

  const addProject = (newProject) =>{
    const newList = [...projects, newProject];
    localStorage.setItem(STORE, JSON.stringify(newList ));
    setProjects(newList)
  }

  const notifyUpdate = (updatedProjects) => {
    // Store updated todo list in local storage
    localStorage.setItem(STORE, JSON.stringify(updatedProjects ));
    setProjects(updatedProjects);
  }

  // Retrieve data from localStorage when component mounts 
  // use DB later, as an 1 to 1 exchange in here
  React.useEffect(() => {
    const storedTodos = localStorage.getItem(STORE);
    if (storedTodos) setProjects(JSON.parse(storedTodos));
  }, []);
  const projects_migrated = projects.filter(p => p.is_completed === true).length;
  return (
    <>
      <ProjectsCounter todos_completed={projects_migrated} total_todos={projects.length} />
      <Form addProject={addProject}/>
      <ProjectsList projects={projects} notifyUpdate={notifyUpdate} />
    </>
  );
}

export default App;