import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' style={{ maxHeight: '80px' }}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Team
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link class="dropdown-item" to="/team">FACULTY</Link>
                <Link class="dropdown-item" to="/staff">STAFF</Link>
                <Link class="dropdown-item" to="/students">STUDENTS</Link>
              </div>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/professorEdit'>ProfessorEdit</Link>
            </li>
            <li>
              <Link to='/faculty/:id'>Personal</Link>
            </li>
            <li>
              <Link to='/adminPage'>Admin Page</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET ENROLLED</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>

      </header>
    </>
  )
}

export default Header
