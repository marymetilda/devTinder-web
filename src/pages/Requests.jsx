import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../redux/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    if (requests) return;
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      const requestData = res?.data?.data?.map((i) => i.fromUserId);
      dispatch(addRequests(requestData));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <div className="flex items-center justify-center mt-10">
        No Requests Found!
      </div>
    );

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center">Requests</h1>

      <div className="w-full flex flex-col items-center justify-center gap-8 pt-8">
        {requests.map((request) => {
          const { _id, firstName, lastName, age, gender, about, photoURL } =
            request;
          return (
            <div
              key={_id}
              className="card card-side bg-base-300 shadow-xl w-1/2 justify-between"
            >
              <div className="flex items-center justify-center">
                <figure className="p-4">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={photoURL}
                    alt="Photo"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && <p>{age + " " + gender}</p>}
                  <p>{about}</p>
                </div>
              </div>
              <div className="card-actions justify-center p-2 pr-8 flex items-center">
                <button className="btn btn-primary w-32">Reject</button>
                <button className="btn btn-secondary w-32">Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
