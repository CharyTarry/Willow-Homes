"use client";
import Image from 'next/image';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

export default function BookingAndTestimonials() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");  // State for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z2vtsn9",   // Replace with your actual EmailJS service ID
        "template_9v8qyub",  // Replace with your template ID
        form.current,
        "MGpH6o6Qxz9sU5GfS"    // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccessMessage("Booking request sent successfully!");
          e.target.reset();
      
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000); // message disappears after 3 seconds
        },
        (error) => {
          setSuccessMessage("Failed to send booking. Please try again later.");
          console.error(error.text);
      
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }
      );
      
  };

  return (
    <div id="booking" className="bg-gradient-to-br from-pink-100 via-purple-50 to-purple-200 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Booking Form Section */}
        <div className="flex-1 bg-[#f7f0fc] p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#5c3d8f] mb-10">
            Book Your Stay
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
              <FaUser className="text-2xl text-[#5c3d8f] mr-4" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="flex-1 bg-transparent text-black placeholder-black outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
              <FaEnvelope className="text-2xl text-[#5c3d8f] mr-4" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="flex-1 bg-transparent text-black placeholder-black outline-none"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
              <HiOutlinePhone className="text-2xl text-[#5c3d8f] mr-4" />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="flex-1 bg-transparent text-black placeholder-black outline-none"
                required
              />
            </div>

            {/* Check-in Date Field */}
            <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
              <FaCalendarAlt className="text-2xl text-[#5c3d8f] mr-4" />
              <input
                type="date"
                name="check_in_date"
                className="flex-1 bg-transparent text-black placeholder-black outline-none"
                required
              />
            </div>

            {/* Room and Bed Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
                <select
                  name="room_type"
                  className="flex-1 bg-transparent text-black outline-none p-2"
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="4-sharing">4 Sharing</option>
                  <option value="6-sharing">6 Sharing</option>
                </select>
              </div>
              <div className="flex items-center border border-[#b69fdf] rounded-xl p-4">
                <select
                  name="bed_type"
                  className="flex-1 bg-transparent text-black outline-none p-2"
                  required
                >
                  <option value="">Select Bed Type</option>
                  <option value="upper-bunk">Upper Bunk</option>
                  <option value="lower-bunk">Lower Bunk</option>
                </select>
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div
                className={`text-center p-4 mt-6 rounded-xl ${
                  successMessage.includes("successfully")
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#5c3d8f] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#462172] transition duration-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Section */}
        <div className="flex-1 bg-[#f7f0fc] p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#5c3d8f] mb-10">
            What Our Guests Say
          </h2>

          <div className="space-y-10">
            {/* Testimonial 1 */}
            <div className="flex items-start gap-6">
              <FaQuoteLeft className="text-3xl text-[#5c3d8f] mt-1" />
              <div>
                <p className="text-black font-medium mb-2">
                &quot;The best place to stay in town! Cozy rooms and amazing amenities.quote&quot;
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Image
                    src="/icon1.png"
                    alt="Guest 1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-black font-semibold">Susan Wanjiku</p>
                    <p className="text-black text-sm">March 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex items-start gap-6">
              <FaQuoteLeft className="text-3xl text-[#5c3d8f] mt-1" />
              <div>
                <p className="text-black font-medium mb-2">
                &quot;Highly recommend this hostel. Friendly staff and great atmosphere.quote&quot;
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Image
                    src="/icon1.png"
                    alt="Guest 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-black font-semibold">Nicole  Kimani</p>
                    <p className="text-black text-sm">February 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex items-start gap-6">
              <FaQuoteLeft className="text-3xl text-[#5c3d8f] mt-1" />
              <div>
                <p className="text-black font-medium mb-2">
                &quot;Affordable and comfortable! Will definitely book again next time.quote&quot;
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Image
                    src="/icon1.png"
                    alt="Guest 3"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-black font-semibold">Mary Agiza</p>
                    <p className="text-black text-sm">January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
