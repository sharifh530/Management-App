import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="">
          <Sidebar />
        </div>
        <div className="ml-[300px]">
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
