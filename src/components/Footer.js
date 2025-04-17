import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Contact Us Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-6 text-purple-200">Contact Us</h3>
          
          <div className="flex items-center gap-4 text-lg mb-4">
            <AiOutlineMail className="text-2xl text-purple-400" />
            <a href="mailto:willowhomesmgt@gmail.com" className="text-white">
              willowhomesmgt@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg mb-4">
            <FaPhoneAlt className="text-2xl text-purple-400" />
            <a href="tel:+254798770523" className="text-white">
              +254 798 770 523
            </a>
          </div>

          <div className="flex items-start gap-4 text-lg mb-6">
            <IoLocationSharp className="text-3xl text-purple-400" />
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7742469912337!2d36.80459317681011!3d-1.3107988356572144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f943a1c7a7%3A0x96473325aa73ee3a!2sWillow%20Homes%20Ladies%20Hostel!5e0!3m2!1sen!2ske!4v1744713265026!5m2!1sen!2ske"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Mbagathi Apartments along Raila Odinga Way (formerly Mbagathi Way), Nairobi, Kenya
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8">
            <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/willow_homes_hostel/" className="text-4xl hover:scale-110 transition-transform">
              <img src="/insta.png" className="w-12 h-12"/>
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/@willowhomes" className="text-4xl hover:scale-110 transition-transform">
            <img src="/tiktok.png" className="w-12 h-12"/>
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/people/Willow-Homes/pfbid0A2zMyBk9crX1igkesjSN6iHUjGEBjDRksg9ueeiCN1p79GRqEDM5EHzNLPHFwXKpl/" className="text-4xl hover:scale-110 transition-transform">
            <img src="/fb.png" className="w-12 h-12"/>
            </a>
          </div>
        </div>

        {/* Google Map Location */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4 text-purple-200">Our Location</h3>
          <div className="w-full h-60">
            <iframe
              title="Hostel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7742469912337!2d36.80459317681011!3d-1.3107988356572144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f943a1c7a7%3A0x96473325aa73ee3a!2sWillow%20Homes%20Ladies%20Hostel!5e0!3m2!1sen!2ske!4v1744713265026!5m2!1sen!2ske"
              className="w-full h-full border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-lg mt-10 text-gray-500">
        &copy; 2025 Willow Homes. All Rights Reserved.
      </div>
    </div>
  );
}
