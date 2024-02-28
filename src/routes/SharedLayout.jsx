import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Users</NavLink>
            </li>
            <li>
              <NavLink to="">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
