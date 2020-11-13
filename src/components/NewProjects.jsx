import React from "react";

export default function NewProjects({newProject, handleNewProjectChange, projects, setProjects}) {
    function handleNewProjectUpdate(event) {
        handleNewProjectChange({ ...newProject, [event.target.name]: event.target.value})
    }
    function handleAddProjects(projects, newProject) { //adding project to array is still broken
        setProjects(projects =>[...projects, newProject])
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
                onChange={handleNewProjectUpdate}
            />
            <br/>
            <label htmlFor="projName">Project Name: </label>
            <input 
                type="text"
                id="projName"
                value={newProject.projectName}
                name="projectName"
                onChange={handleNewProjectUpdate}
            />
            <br/>
            <label htmlFor="projHours">Allowed Hours: </label>
            <input 
                type="number"
                id="projHours"
                value={newProject.projectAllowedHours}
                name="projectAllowedHours"
                onChange={handleNewProjectUpdate}
            />
            <br/>
            <button onClick={handleAddProjects}>Add New Project</button>
            {console.log("new Project ", newProject)}
            {console.log("Array ", projects)}
        </>
    )
}