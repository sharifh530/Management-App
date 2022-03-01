import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routePath from "../../routes/routePath";

const Sidebar = () => {
  const [pathName, setPathName] = useState("");
  console.log(pathName);

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, []);
  return (
    <>
      <div>
        {/* <!-- mobile navigation  --> */}
        {/* <!-- navigation overlay  --> */}

        {/* <!-- navigation overlay  --> */}
        <nav className="block  w-[300px] h-screen fixed top-0 left-0  transition-all duration-300 bg-gray-800 z-[50]">
          <div className="relative flex flex-col overflow-y-auto h-full">
            {/* <!-- close option  --> */}
            <div className="absolute right-5 top-3 text-2xl text-white transform hover:text-lemon hover:rotate-180 transition-all duration-300 cursor-pointer">
              <i className="fas fa-times"></i>
            </div>
            {/* <!-- close option  --> */}
            {/* <!-- profile information  --> */}
            <div className="py-10 border-b border-gray-700">
              <div className="text-center mt-5">
                <h1 className="font-bold text-2xl text-white">Logo</h1>
                <p className="mt-1 text-gray-300 font-medium text-sm">
                  Tag Line
                </p>
              </div>
            </div>
            {/* <!-- profile information  --> */}
            {/* <!-- menu items  --> */}
            <div className="mt-10">
              <ul>
                <li>
                  <Link
                    to={routePath.DASHBOARD}
                    cl
                    className={
                      pathName === routePath?.DASHBOARD
                        ? "inline-block px-6 py-3 w-full text-white font-medium capitalize border-l-4 border-lemon transition-all duration-300"
                        : "inline-block px-6 py-3 w-full text-white font-medium capitalize border-l-4 border-transparent hover:border-lemon transition-all duration-300"
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={routePath.ADD_MEMBER}
                    className={
                      pathName === routePath?.ADD_MEMBER
                        ? "inline-block px-6 py-3 w-full text-white font-medium capitalize border-l-4 border-lemon transition-all duration-300"
                        : "inline-block px-6 py-3 w-full text-white font-medium capitalize border-l-4 border-transparent hover:border-lemon transition-all duration-300"
                    }
                  >
                    Add Member
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- menu items  --> */}
          </div>
        </nav>
        {/* <!-- mobile navigation  --> */}
      </div>
    </>
  );
};

export default Sidebar;
