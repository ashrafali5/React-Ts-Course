import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b-2 border-gray-200">
      <div className="max-w-md flex items-center space-x-2 rounded-full border-2 border-gray-300 px-4 py-2 ml-20">
        <FaSearch className="text-2xl text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-lg"
        />
      </div>
      <section className="flex items-center mr-20">
        <FaUserCircle className="text-3xl text-gray-500" />
      </section>
    </nav>
  );
};

export default Navigation;
