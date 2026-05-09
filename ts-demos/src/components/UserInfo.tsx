export type UInfo = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ username, email, age, location }: UInfo) => {
  return (
    <div>
      <ul>
        <li>Name : {username}</li>
        <li>Email : {email}</li>
        <li>Age : {age}</li>
        <li>Location : {JSON.stringify(location)}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
