import { useState } from 'react'
import projectData from '../data/projectList.json'

export default function Projects() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="min-h-screen bg-pink-900 text-white">
            <h1 className="text-center text-4xl pt-6 font-bold">Projects</h1>
            <div className="p-6 flex flex-col md:grid md:grid-cols-2 gap-6">
                {projectData.map(project => {
                    return(
                        <div className="w-4/5 h-96 flex flex-col mx-auto bg-white">
                            <img src={project.image} alt="" 
                            className="h-1/2 object-cover"/>
                            <div className="text-black p-4">
                                <h1 className="text-center text-2xl font-bold mb-2">{project.name}</h1>
                                <p>{project.description}</p>
                            </div>
                            <div className="flex gap-4 p-4">
                                <a href="" target="_blank"
                                className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-800">
                                    Live Demo
                                </a>
                                <a href={project.github} target="_blank"
                                className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-800">
                                    Github
                                </a>
                            </div>
                        </div>
                    )               
                })}
            </div>
        </div>
    )
}