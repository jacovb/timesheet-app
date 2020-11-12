import React from "react";

export default function NewProjects({project, handleProjectChange}) {
    function handleProjectUpdate(event) {
        handleProjectChange({ ...project, [event.target.name]: event.target.value})
    }
    return (
        <>
            <p>New Projects</p>
            <label for="projNo">Project Number: </label>
            <input 
                type="text"
                id="projNo"
                value={project.projectNo}
                name="projectNo"
                onChange={handleProjectUpdate}
            />
            <br/>
            <label for="projName">Project Name: </label>
            <input 
                type="text"
                id="projName"
                value={project.projectName}
                name="projectName"
                onChange={handleProjectUpdate}
            />
            <br/>
            <label for="projHours">Allowed Hours: </label>
            <input 
                type="number"
                id="projHours"
                value={project.projectAllowedHours}
                name="projectAllowedHours"
                onChange={handleProjectUpdate}
            />
            {console.log(project)}
        </>
    )
}