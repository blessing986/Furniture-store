import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";

import { navbar } from "../data/Data";
import Sidebar from "../common/Sidebar";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`${sticky ? "sticky header py-4 top-0 z-50 shadow-xl" : ""}`}
      >
        <div className="w-10/12 m-auto flex flex-wrap justify-between items-center">
          <div>
            <div className="logo">miniture</div>
          </div>

          <div className="md:flex flex-wrap text-base py-3">
            {navbar.map((val, key) => (
              <div key={key} className="mr-5">
                <Link
                  className="active link-hover transition-all"
                  to={val.path}
                >
                  {val.nav}
                </Link>
              </div>
            ))}
          </div>

          <li className="flex flex-wrap">
            <Link className="mr-5 text-2xl">
              <HiOutlineHeart />
            </Link>

            <Link className="mr-5 text-2xl">
              <HiOutlineUser />
            </Link>

            <Link className="relative mr-5 text-2xl" onClick={toggleSidebar}>
              <MdOutlineShoppingBag />

              <div className="items_count">
                <span className="text-white">0</span>
              </div>
            </Link>
          </li>
        </div>
      </div>

      <div>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={() => toggleSidebar()}
        />
      </div>
    </>
  );
};
export default Header;
