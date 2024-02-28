import { useLoaderData } from "react-router-dom";
const Address = () => {
  const user = useLoaderData();
  console.log("street", user);
  return (
    <div>
      {user && (
        <div>
          <h2>User&apos;s Address</h2>

          <p>
            {user.address.street} {user.address.suite}
          </p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
      )}
    </div>
  );
};

export default Address;
