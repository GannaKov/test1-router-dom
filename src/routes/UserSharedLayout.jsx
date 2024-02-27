import { NavLink, Outlet, useParams } from "react-router-dom";

const UserSharedLayout = () => {
  const { userId } = useParams();
  console.log("userId", userId);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="">Info</NavLink>
            {/* ///users/:userId */}
          </li>
          <li>
            <NavLink to="address">Address</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserSharedLayout;
