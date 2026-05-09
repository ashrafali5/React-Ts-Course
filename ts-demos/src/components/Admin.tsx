import type { UInfo } from "./UserInfo";

interface AInfo extends UInfo {
  admin: string;
}

const Admin: React.FC<AInfo> = ({ username, email, age, location, admin }) => {
  return (
    <div>
      <ul>
        <li>Name : {username}</li>
        <li>Email : {email}</li>
        <li>Age : {age}</li>
        <li>Location : {JSON.stringify(location)}</li>
        <li>Admin : {admin}</li>
      </ul>
    </div>
  );
};

export default Admin;
