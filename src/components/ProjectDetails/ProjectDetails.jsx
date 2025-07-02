import React from 'react'
import { useParams } from 'react-router-dom'
import './ProjectDetails.css'
import image1 from '../../assets/project1.png'
import image2 from '../../assets/project2.png'
import image3 from '../../assets/project3.png'






const ProjectDetails = () => {
    const openGitHubProject = ()=>{
    window.open("https://github.com/rawansubh/test")
  }
  
const MyProject = [{
    id : 'pr1',
    img : image1,
    title : 'Courses Platform',
    date : '15/11/2024',
    lang : 'Html , css3' ,
    libraries : 'none',
    btn : 'Github Repo'

},
{
    id : 'pr2',
    img : image3,
    title : 'Education Platform',
    date : '13/1/2025',
    lang : 'Html , css3, javascript' ,
    libraries : 'react',

},
{
    id : 'pr3',
    img : image2,
    title : 'Houses Location',
    date : '7/10/2024',
    lang : 'Html , css3' ,
    libraries : 'none',


}
]
const {id} = useParams();
const project = MyProject.find(proj => proj.id === id)


  return (

<div className='container'>
          <img src={project.img} alt={project.title}></img>
        <div className="description">
          <div className="repo">
            <h1>{project.title}</h1>
            
          </div>
          
          <h6>{project.date}</h6>
          <h5><span>Basic Languages :</span>{project.lang}</h5>
          <h5><span>Libraries :</span>{project.libraries}</h5>
          {project.btn && <button onClick={openGitHubProject}>{project.btn}</button>}
        </div>
    </div>
  )
}

export default ProjectDetails