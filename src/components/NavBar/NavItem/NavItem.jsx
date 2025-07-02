import React from 'react'
import { Link } from 'react-scroll'
import './NavItem.css'








const NavItem = ({href,title}) => {


  
  return (
          <Link spy={true} activeClass="active"  to = {href.replace('#' , '')} smooth={true} duration={500}>
      {title}
    </Link>
  )
}

export default NavItem