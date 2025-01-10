/* eslint-disable react/prop-types */
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          about,
          age,
          gender,
          photoURL,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong:(");
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex items-start justify-center gap-8  my-10">
        <div className="flex justify-center">
          <div className="card bg-base-300 w-[550px] shadow-xl">
            <div className="card-body flex items-center w-full">
              <h2 className="card-title">Edit Profile</h2>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Gender
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <textarea
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="textarea textarea-bordered"
                  placeholder="About"
                ></textarea>
              </label>
              {error && <p className="text-red-600">{error}</p>}
              <div className="card-actions w-full pt-4">
                <button
                  onClick={saveProfile}
                  className="btn btn-primary w-full"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, about, age, gender, photoURL }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Updated profile successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
