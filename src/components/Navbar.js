"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home">
          <Image
            src="/logo2.png"
            alt="Hostel Logo"
            className="h-16 w-auto"
            width={200}
            height={100}
          />
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu for desktop */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">Rooms</a>
          <a href="#facilities" className="hover:text-purple-300">Facilities</a>
          <a href="#booking" className="hover:text-purple-300">Booking</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-800 text-lg">
          <a href="#" className="hover:text-purple-300" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-purple-300" onClick={toggleMenu}>Rooms</a>
          <a href="#facilities" className="hover:text-purple-300" onClick={toggleMenu}>Facilities</a>
          <a href="#booking" className="hover:text-purple-300" onClick={toggleMenu}>Booking</a>
          <a href="#contact" className="hover:text-purple-300" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
