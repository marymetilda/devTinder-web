import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;

  if (feed.length === 0)
    return (
      <div className="flex items-center justify-center mt-10">
        No Users Found!
      </div>
    );

  return (
    <div className="flex items-center justify-center pt-20">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
};

export default Feed;
