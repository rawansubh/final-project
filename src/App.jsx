
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { createContext, useState } from 'react'
import {  Route,   Router,   Routes } from 'react-router-dom'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import Footer from './components/Footer/Footer'


export const ThemeContext = createContext(null);


function App() {
  const [theme , setTheme] = useState('light')
const navItems = [
  {
    title : "Home",
    href : '#home'
  },
  {
    title : "About me",
    href : '#about'
  },
  {
    title : "Education",
    href : '#education'
  },
  {
    title : "Projects",
    href : '#projects'
  },
  {
    title : "Contact",
    href : '#contact'
  }
]




  return (
          <div style={{backgroundColor : (theme === 'light') ? '#FFFFFF' : ' #1D2130', color :(theme === 'light') ? ' #1D2130' : '#FFFFFF'}}>
    <ThemeContext.Provider value={{theme , setTheme}} >
    <NavBar navItems={navItems}  ></NavBar>
    <Routes>
      <Route path='/' element={
        <>
    <section id='home'><Home/></section>
    <section id='about'><About/></section>
    <section id='education' ><Education/></section>
    <section id='projects'><Projects/></section>
    <section id='contact' ><Contact/></section>
    </>
      } ></Route>
      <Route path="/projects/:id" element={<ProjectDetails></ProjectDetails>}></Route>
    </Routes> 
    <Footer></Footer>
    </ThemeContext.Provider>
      </div>
 

      
    

    


    

  )

}
export default App
