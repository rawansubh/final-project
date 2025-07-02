
import NavItem from './NavItem/NavItem'
import './NavBar.css'
import { useContext, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { ThemeContext } from '../../App'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";



const NavBar = ({navItems} ) => {
const {theme , setTheme}= useContext(ThemeContext)
const [show , setShow] = useState(false)
const toggleMenu = () => {
  setShow(!show)
}
  return (
    <nav>
      <h1>Rawan</h1>
      <ul className={`${show ? 'show-menu' : ''}`}>
      {navItems?.map((item , index) => {
          return (
            <li key={index} >
              <NavItem 
              href = {item.href}
              title = {item.title}>
              </NavItem>
            </li>
          )
        })
      }
      </ul>
      <button  onClick={() => {
        setTheme(prevTheme => prevTheme ==='light'?'dark':'light')}}>{theme === 'light' ? <FaMoon color='black' /> : <BsSunFill color='white' />}</button>
        <button className='bars' onClick={toggleMenu} aria-label='Toggle menu'> {show ? <FaTimes  /> :  <FaBars />} </button>

    </nav>
  )
}


export default NavBar