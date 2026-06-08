interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-4 rounded-lg shadow-md overflow-hidden bg-gray-100 ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h2 className="font-bold text-2xl mb-4">{title}</h2>
        <p className="text-gray-500 font-semibold mb-4">{description}</p>
        <a
          href="#"
          className="py-2 inline-block px-4 shadow bg-white text-black hover:bg-gray-200 rounded-lg transition duration-500"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
