import UserCard from "./UserCard";

const Followers = [
  { name: "John Doe", follow: false },
  { name: "Jane Smith", follow: true },
  { name: "Alice Johnson", follow: true },
  { name: "Bob Brown", follow: false },
  { name: "Charlie Davis", follow: true },
];

const PeopleToFollow = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-2xl mb-4 font-bold ">Followers</h3>
      <hr className="text-gray-500 mb-4 w-full" />
      <div className="space-y-4">
        {Followers.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
