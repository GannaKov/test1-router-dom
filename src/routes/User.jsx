import { useLoaderData } from "react-router-dom";
import { getUserById } from "../services/requests";


export async function loader({ params }) {
  const user = await getUserById(params.userId);
  console.log("params", params);
  console.log("user in loader", user);
  return user;
}

const User = () => {
  const user = useLoaderData();

  return (
    <>
      {user && (
        <div>
          <img
            src="https://fakeimg.pl/200x150/81e697/ffffff?text=User&font=lobster"
            alt={user.name}
          />
          <p>{user.name}</p>
          <p>Username:</p>

          <p>{user.username}</p>
          <p>Company:</p>
          <p>{user.company.name}</p>
        </div>
      )}
    </>
  );
};

export default User;
