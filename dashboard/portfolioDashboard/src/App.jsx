import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  const sidebarLinks = [
    { name: "Projects", path: "projects" },
    { name: "Add Project", path: "add-project" },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Navbar />
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {sidebarLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              <li>
                <a>{item.name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
