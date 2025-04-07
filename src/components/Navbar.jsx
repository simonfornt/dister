import React, { useState } from 'react';
import {  NavLink, useLocation, useNavigate } from 'react-router-dom'; 
import Profile from './Profile';
import { Menu, X } from 'lucide-react'; // using Lucide icons
import Button from './Button';



const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/incidents', label: 'Incidents' },
  { path: '/locations', label: 'Locations' },
  { path: '/activities', label: 'Activities' },
  { path: '/documents', label: 'Documents' },
  { path: '/cypher-ai', label: 'Cypher AI' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locations = useLocation();
  const navigate = useNavigate();



  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-black text-black font-semi-bold' : 'text-secondary text-[14px] font-ones';


      const currentTitle = navItems.find((item) => item.path === location.pathname) ?.label || 'Dashboard';
      // create pate titles

    //   const pageTitles ={
    // '/dashboard': 'Dashboard',
    // '/incidents': 'Incidents',
    // '/locations': 'Locations',
    // '/activities': 'Activities',
    // '/documents': 'Documents',
    // '/cypher-ai': 'Cypher AI',

    //   };




  return (
    <div className='bg-[#E4E4E780]'>
      <div className='max-w-7xl px-4 py-3 mx-auto flex justify-between items-center border-b border-gray-300'>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/img/logo.png" alt="Logo" className='h-10' />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6 text-secondary'>
          <ul className='flex gap-4'>
            {navItems.map(({path, label}) =>(
              <li key={path}>
                <NavLink to={path} className={linkStyle}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile */}
        <div className='hidden md:block'>
          <Profile />
        </div>

        {/* Hamburger Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-gray-800' aria-label='Toggle Menu'>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
      </div>

      <div className='max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between'>
        <div>
            <span className='text-secondary font-ones text-[12px]'>Welcome To</span>
            {/* h2 tag text should change depending on active link */}
            <h2 className='font-bold text-2xl font-ones'>{currentTitle}</h2>  

        </div>


        {/*  hard funcationality  !! */}

        <div className='flex flex-wrap gap-3'>
            
            <Button text='Search incident' className='bg-white text-secondary text-[12px] px-8'/>
            <Button text='Sort By:Date modified' className='bg-white text-secondary text-[12px]'/>
            {locations.pathname === '/incidents' ? (
                <Button text='New Incident' className='bg-button text-white text-[12px]'
                onClick={() => navigate('/getstarted')}
                />
            ) : (
                <Button text='Cypher AI' className='bg-button text-white text-[12px]'/>
            ) }
            </div>



            
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <ul className='flex flex-col gap-3'>
              {navItems.map(({path, label}) => (
                <li key={path}>
                  <NavLink to={path} className={linkStyle} onClick={() => setIsMenuOpen(false)}>{label}</NavLink>
                </li>
              ))}
            <li><Profile /></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
