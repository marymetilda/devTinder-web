/* eslint-disable react/prop-types */

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoURL, about } = user;

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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
