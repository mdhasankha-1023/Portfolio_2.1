import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const navLinks = ["Dashboard", "Profile", "Setting"];

  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="flex gap-4">
        <label htmlFor="my-drawer" className="btn drawer-button">
          <FaBarsStaggered className="text-xl" />
        </label>
        <a className="btn btn-ghost text-2xl uppercase">Hasan</a>
      </div>
      <div>
        <ul className="flex gap-10 text-lg">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
