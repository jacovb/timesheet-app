import React from "react";

export default function NewProjects({newProject, setNewProject, projects, setProjects}) {
    function handleNewProject(event) {
        setNewProject({ ...newProject, [event.target.name]: event.target.value})
    }
    function handleAddProjects() { 
        setProjects([...projects, newProject])
        setNewProject({
            projectNo: "",
            projectName: "",
            projectAllowedHours: "",
        })
    }

    return (
        <>
            <p>Add New Projects</p>
            <label htmlFor="projNo">Project Number: </label>
            <input 
                type="text"
                id="projNo"
                value={newProject.projectNo}
                name="projectNo"
                onChange={handleNewProject}
            />
            <br/>
            <label htmlFor="projName">Project Name: </label>
            <input 
                type="text"
                id="projName"
                value={newProject.projectName}
                name="projectName"
                onChange={handleNewProject}
            />
            <br/>
            <label htmlFor="projHours">Allowed Hours: </label>
            <input 
                type="number"
                id="projHours"
                value={newProject.projectAllowedHours}
                name="projectAllowedHours"
                onChange={handleNewProject}
            />
            <br/>
            <button onClick={handleAddProjects}>Add New Project</button>
            {console.log("new Project ", newProject)}
            {console.log("Array ", projects)}
        </>
    )
}