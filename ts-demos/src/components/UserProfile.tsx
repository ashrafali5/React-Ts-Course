import { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: 1,
    email: "",
  });

  const UpdateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };
  const UpdateAge = (age: string) => {
    setProfile((prev) => ({ ...prev, age: +age }));
  };
  const UpdateEmail = (email: string) => {
    setProfile((prev) => ({ ...prev, email }));
  };

  return (
    <div>
      <h1>UserProfile</h1>
      <input
        type="text"
        value={profile.name}
        placeholder="Enter Name"
        onChange={(e) => UpdateName(e.target.value)}
      />
      <input
        type="number"
        value={profile.age > 0 ? profile.age : ""}
        placeholder="Enter Age"
        onChange={(e) => UpdateAge(e.target.value)}
      />
      <input
        type="email"
        value={profile.email}
        placeholder="Enter Email"
        onChange={(e) => UpdateEmail(e.target.value)}
      />
      <hr />
      <div>
        <ul>
          <li>Name : {profile.name}</li>
          <li>Age : {profile.age}</li>
          <li>Email : {profile.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
