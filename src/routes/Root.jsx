import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getAllUsers } from "../services/requests";
import { useEffect } from "react";

export async function loader() {
  const users = await getAllUsers();
  console.log("users in loader", users);
  return users;
}

const Root = () => {
  const users = useLoaderData();

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">List</NavLink>
            </li>
            <li>
              <NavLink to="">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`users/${user.id}`}>
                <img
                  src="https://fakeimg.pl/100x100/e681cd/f2e9e9?text=User&font=lobster"
                  alt=""
                />
                <p>{user.name}</p>
                <p>{user.username}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default Root;
