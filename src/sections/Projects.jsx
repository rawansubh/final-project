import React from 'react'
import './Project.css'
import { MdArrowOutward } from "react-icons/md";
import Card from '../components/Card/Card';

const Projects = ({id}) => {
  const openGitHub = ()=>{
    window.open('https://github.com/rawansubh')
  }
  return (
    <section id={id}>
      <div className="projects-header">
        <div className="left">
          <h6>Portfolio</h6>
          <h1>My Creative Works
          Latest<span>Projects</span> </h1>
        </div>
        <div className="right-btn">
          <button onClick={openGitHub}>View Github <MdArrowOutward className='icon'/></button>
          
        </div>
      </div>
      <div  className="project-body">
      <Card id="pr1"  img = 'src/assets/project1.png' desc= 'Courses Platform' lang = 'Html-Css3'></Card>
      <Card id="pr2" img = 'src/assets/project3.png' desc= 'Education Platform' lang = 'Html-Css3-React javascript'></Card>
      <Card id="pr3"  img = 'src/assets/project2.png' desc = 'Houses Location' lang = 'Html-Css3'></Card>
      </div>
    </section>
  )
}

export default Projects