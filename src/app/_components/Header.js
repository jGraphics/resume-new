"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather'; // You can use any icon library or create your own icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update the state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the menu open state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <nav className="flex items-center justify-between p-4">
        <div className="flex-1 lg:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="flex-1 lg:flex lg:justify-end lg:space-x-4">
          <ul className={`flex flex-col lg:flex-row lg:items-center ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4`}>
            <li>
              <Link 
                href="#home" 
                className="block py-2 px-4 hover:text-yellow-700 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block py-2 px-4 hover:text-yellow-700 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#work" 
                className="block py-2 px-4 hover:text-yellow-700 transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="#news" 
                className="block py-2 px-4 hover:text-yellow-700 transition duration-300"
              >
                News
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block py-2 px-4 rounded-md bg-yellow-700 border-2 border-transparent text-white text-md hover:bg-gold transition duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
