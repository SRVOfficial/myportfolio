// import React from 'react';
// import logo from '../assets/SrvLogo.png';

// import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaSquareXTwitter } from 'react-icons/fa6';
// import { FaInstagram } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className='mb-20 flex items-center justify-between py-2'>
//         <div className='flex flex-shrink-0 items-center w-20 h-20 ml-4'>
//             <img src={logo} alt='logo' />
//         </div>
//         <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//             <FaLinkedin />
//             <FaGithub />
//             <FaSquareXTwitter />
//             <FaInstagram />

//         </div>
//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import logo from '../assets/SrvLogo.png';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

import Tooltip from './Tooltip';

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/SRVOfficial';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/srv159/';
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center w-20 h-20 ml-4'>
        <img src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl relative'>
        <div 
          onMouseEnter={() => setHoveredIcon('linkedin')} 
          onMouseLeave={() => setHoveredIcon(null)} 
          onClick={handleLinkedInClick} 
          className='cursor-pointer relative'
        >
          <FaLinkedin />
          {hoveredIcon === 'linkedin' && <Tooltip message="Visit LinkedIn" />}
        </div>
        <div 
          onMouseEnter={() => setHoveredIcon('github')} 
          onMouseLeave={() => setHoveredIcon(null)} 
          onClick={handleGithubClick} 
          className='cursor-pointer relative'
        >
          <FaGithub />
          {hoveredIcon === 'github' && <Tooltip message="Visit GitHub" />}
        </div>
        <div 
          onMouseEnter={() => setHoveredIcon('twitter')} 
          onMouseLeave={() => setHoveredIcon(null)} 
          className='cursor-pointer relative'
        >
          <FaSquareXTwitter />
          {hoveredIcon === 'twitter' && <Tooltip message="Currently unavailable" />}
        </div>
        <div 
          onMouseEnter={() => setHoveredIcon('instagram')} 
          onMouseLeave={() => setHoveredIcon(null)} 
          className='cursor-pointer relative'
        >
          <FaInstagram />
          {hoveredIcon === 'instagram' && <Tooltip message="Currently unavailable" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
