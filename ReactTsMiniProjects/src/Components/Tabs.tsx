import { FaHome, FaInfoCircle } from "react-icons/fa";
import Card from "./Card";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import { PiPhone } from "react-icons/pi";
import Contact from "./Contact";
import { useState } from "react";
import About from "./About";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is an amazing card description that gives you insight into the content of the card."
            image="https://placeholder.pics/svg/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Project"
            description="This is an amazing project description that gives you insight into the content of the project."
            image="https://placeholder.pics/svg/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Course"
            description="This is an amazing course description that gives you insight into the content of the course."
            image="https://placeholder.pics/svg/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <PiPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="mt-12 p-4">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 text-sm font-medium ${activeTab === tab.id ? "border-b-2 border-gray-300" : "text-gray-600"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2 cursor-pointer">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => activeTab === tab.id)?.content}
      </div>
    </div>
  );
};

export default Tabs;
