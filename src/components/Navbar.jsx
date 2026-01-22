import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'; // styles.js
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  
  const [active, setActive] = useState(''); 
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link to="/" className="flex items-center gap-2" onClick={() => { 
          setActive(""); 
          window.scrollTo(0,0); 
          }}>
          

          <img src={logo} alt="logo" className="w-9 h-9 object-contain"  />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Haris Sušić
            <span className="hidden sm:block text-secondary text-[12px] sm:text-[14px] font-medium leading-snug">
              Software Engineer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer 
              transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu } 
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl p-6 border-4 border-red-500`}>

            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] 
                  transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;



