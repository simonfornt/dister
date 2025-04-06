import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import { Menu, X } from 'lucide-react'; // using Lucide icons
import Button from './Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-black text-black font-semi-bold' : 'text-secondary text-[14px] font-ones';

  return (
    <div className='bg-[#E4E4E780]'>
      <div className='max-w-7xl px-4 py-3 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/img/logo.png" alt="Logo" className='h-10' />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6 text-secondary'>
          <ul className='flex gap-4'>
            <li ><NavLink to="/dashboard" className={linkStyle} >Dashboard</NavLink></li>
            <li ><NavLink to="/incidents" className={linkStyle}>Incidents</NavLink></li>
            <li><NavLink to="/locations" className={linkStyle}>Locations</NavLink></li>
            <li><NavLink to="/activities" className={linkStyle}>Activities</NavLink></li>
            <li><NavLink to="/documents" className={linkStyle}>Documents</NavLink></li>
            <li><NavLink to="/cypher-ai" className={linkStyle}>Cypher AI</NavLink></li>
          </ul>
        </div>

        {/* Profile */}
        <div className='hidden md:block'>
          <Profile />
        </div>

        {/* Hamburger Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-gray-800'>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
      </div>

      <div className='max-w-7xl mx-auto py-5 flex justify-between'>
        <div>left</div>
        <div><Button/></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <ul className='flex flex-col gap-3'>
            <li><NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink></li>
            <li><NavLink to="/incidents" className={linkStyle}>Incidents</NavLink></li>
            <li><NavLink to="/locations" className={linkStyle}>Locations</NavLink></li>
            <li><NavLink to="/activities" className={linkStyle}>Activities</NavLink></li>
            <li><NavLink to="/documents" className={linkStyle}>Documents</NavLink></li>
            <li><NavLink to="/cypher-ai" className={linkStyle}>Cypher AI</NavLink></li>
            <li><Profile /></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
