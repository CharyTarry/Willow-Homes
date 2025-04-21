import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Facilities /> 
      <Pricing/>
      <Menu/>
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
}
