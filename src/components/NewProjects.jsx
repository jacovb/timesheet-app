import React from "react";

export default function NewProjects({newProject, setNewProject, projects, setProjects}) {
    function handleNewProject(event) {
        setNewProject({ ...newProject, [event.target.name]: event.target.value})
    }
    
    function handleAddProjects() { 
        if (projects.some((item) => item.projectNo === newProject.projectNo)) {
            alert("Project Number Already Exists") 
        } else {
            setProjects([...projects, newProject])
            setNewProject({
                projectNo: "",
                projectName: "",
                projectAllowedHours: "", 
            }) 
        }
    }

    function showAllProjects() {
        console.log(projects)
        projects.map((project) => (
            <div key={project.projectNo}>
                <h2>{project.projectNo}</h2>
                <h3>{project.projectName}</h3>
                <h3>{project.projectAllowedHours}</h3>
            </div>
            )
        )
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
                required
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
            <button onClick={showAllProjects}>Show All Projects</button>
            {projects.map((project) => (
                <div key={project.projectNo}>
                    <h2>{project.projectNo}</h2>
                    <h3>{project.projectName}</h3>
                    <h3>{project.projectAllowedHours}</h3>
                </div>
            ))}
        </>
    )
}