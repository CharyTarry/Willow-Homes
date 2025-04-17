import {
  FaWifi,
  FaLock,
  FaCouch,
  FaShower,
  FaTv,
} from "react-icons/fa";
import { MdMeetingRoom, MdOutlineBedroomParent } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  IoGameControllerOutline,
  IoFilmOutline,
} from "react-icons/io5";

export default function Facilities() {
  const facilityList = [
    {
      title: "Fully Furnished, Cozy Rooms",
      icon: <MdOutlineBedroomParent className="text-3xl text-purple-500" />,
    },
    {
      title: "Ensuite Rooms for Privacy",
      icon: <MdMeetingRoom className="text-3xl text-pink-400" />,
    },
    {
      title: "Free, Fast WiFi",
      icon: <FaWifi className="text-3xl text-purple-500" />,
    },
    {
      title: "24/7 Security",
      icon: <FaLock className="text-3xl text-pink-400" />,
    },
    {
      title: "Inviting Common Areas",
      icon: <FaCouch className="text-3xl text-purple-500" />,
    },
    {
      title: "Elegant Dining Space",
      icon: <GiMeal className="text-3xl text-pink-400" />,
    },
    {
      title: "Hot Showers",
      icon: <FaShower className="text-3xl text-purple-500" />,
    },
    {
      title: "Spacious Rooms",
      icon: <MdOutlineBedroomParent className="text-3xl text-pink-400" />,
    },
    {
      title: "Flat-screen TV",
      icon: <FaTv className="text-3xl text-purple-500" />,
    },
    {
      title: "Close to Campuses",
      icon: <PiStudentBold className="text-3xl text-pink-400" />,
    },
    {
      title: "All Utility Bills Covered",
      icon: <BsLightningChargeFill className="text-3xl text-purple-500" />,
    },
  ];

  const activityList = [
    {
      title: "Game Night",
      icon: <IoGameControllerOutline className="text-3xl text-purple-500" />,
      description:
        "Enjoy fun-filled game nights with a variety of board games!",
    },
    {
      title: "Movie Night",
      icon: <IoFilmOutline className="text-3xl text-pink-400" />,
      description:
        "Relax and unwind with a movie night on our big screen!",
    },
  ];

  return (
    <div id="facilities" className="bg-gradient-to-br from-pink-100 via-purple-50 to-purple-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">
        Our Facilities
      </h2>

      {/* Facilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {facilityList.map((facility, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300 flex items-start gap-4"
          >
            <div className="shrink-0">{facility.icon}</div>
            <p className="text-purple-900 font-medium">{facility.title}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-16 h-1 bg-purple-200 rounded-full mx-auto my-14"></div>

      {/* Activities */}
      <h3 className="text-2xl font-bold text-center text-purple-900 mb-6">
        Fun Activities to Enjoy
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {activityList.map((activity, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300 flex items-start gap-4"
          >
            <div className="shrink-0">{activity.icon}</div>
            <div>
              <p className="text-purple-900 font-medium">{activity.title}</p>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
