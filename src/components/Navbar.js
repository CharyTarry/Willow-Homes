"use client";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        {/* Logo */}
        <a href="#home" className="">
        <img src="/logo2.png" alt="Hostel Logo" className="h-32 w-auto mr-3" width={1000} height={1000}/>
        </a>

        {/* Menu aligned to the right */}
        <div className="ml-auto flex gap-8 text-lg">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">Rooms</a>
          <a href="#facilities" className="hover:text-purple-300">Facilities</a>
          <a href="#booking" className="hover:text-purple-300">Booking</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
