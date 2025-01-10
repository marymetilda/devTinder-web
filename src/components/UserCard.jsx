/* eslint-disable react/prop-types */

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../redux/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gender, photoURL, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className="px-8 mt-8 h-80">
        <img className="object-contain object-top" src={photoURL} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center pt-2">
          <button
            onClick={() => handleSendRequest("ignored", _id)}
            className="btn btn-primary"
          >
            Ignore
          </button>
          <button
            onClick={() => handleSendRequest("interested", _id)}
            className="btn btn-secondary"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
