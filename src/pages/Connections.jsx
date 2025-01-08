import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../redux/connectionSlice";

const Connections = () => {
  const connection = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    if (connection) return;
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connection) return;

  if (connection.length === 0) return <div>No Connections Found!</div>;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center">Connections</h1>

      <div className="w-full flex flex-col items-center justify-center gap-8 pt-8">
        {connection.map((con) => {
          const { firstName, lastName, age, gender, about, photoURL } = con;
          return (
            <div
              key={firstName}
              className="card card-side bg-base-300 shadow-xl w-1/2"
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
