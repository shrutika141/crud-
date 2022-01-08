import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
      <div>
          <nav className="navbar navbar-light bg-light">
              <Link to="/" className="navbar-brand">Blog</Link>
              <Link to="/addpost" className="btn btn-outline-dark btn-sm my-2 my-sm-0" type="submit">Add post</Link>
          </nav>
      </div>
  )
}

export default Navbar
