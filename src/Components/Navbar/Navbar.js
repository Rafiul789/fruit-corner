import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav  className="flex sticky   gap-2 justify-center md:justify-between  py-5 px-5">
        <div className='text-4xl font-bold text-blue-600'>
          <h1>Fruit Corner</h1>
        </div>
        <div className='text-xl flex gap-3'>
          <NavLink
             style={isActive => ({
              color: isActive ? "blue" : "green"
            })}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
                  style={isActive => ({
                    color: isActive ? "blue" : "green"
                  })}      to='/reviews'
          >
            Reviews
          </NavLink>
          <NavLink
             style={isActive => ({
              color: isActive ? "blue" : "green"
            })}
            to='/dashboard'
          >
            Dashboard
          </NavLink>

          <NavLink
              style={isActive => ({
                color: isActive ? "blue" : "green"
              })}
            to='/blogs'
          >
            Blogs
          </NavLink>

          <NavLink
            style={isActive => ({
              color: isActive ? "blue" : "green"
            })}
           
            to='/about'
          >
            About
          </NavLink>
        </div>
      </nav>
    );
};

export default Navbar;