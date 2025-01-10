import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";

export const Profile = () => {
  const user = useSelector((store) => store.user);

  return <div>{user && <EditProfile user={user} />}</div>;
};
