import React from 'react'
import ProjectShow from '../Components/Project/ProjectShow'
import Logo from "../Components/LandingPage/Logo";
const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
       <ProjectShow/>
       <Logo />
       
    </div>
  )
}

export default Projects