import type { FC } from "react"; // FC is an older way - User: FC<UserInfo>

// type UserInfo = {
//   // this is new way
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserInfo {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = ({ name, age, isStudent }: UserInfo) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>isStudent : {isStudent}</h1>
    </div>
  );
};

export default User;
