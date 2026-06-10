import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Links = [
  {
    href: "https://x.com/AshrafAli522512",
    label: "X (Twitter)",
    icon: <FaSquareXTwitter className="h-6 w-6" />,
  },
  {
    href: "https://www.linkedin.com/in/ashraf-ali-96100533a/",
    label: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6 text-blue-600" />,
  },
  {
    href: "https://github.com/ashrafali5",
    label: "GitHub",
    icon: <FaGithubSquare className="h-6 w-6 text-gray-900" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:py-6 sm:px-8 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex items-center">
        {Links.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={link.label}
            className="flex items-center space-x-2 mr-8 text-gray-900 hover:text-gray-700 transition-colors duration-300"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
