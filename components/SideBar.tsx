"use client"

import { LogOut } from "react-feather";

const Sidebar = () => {
    const handleLogout = async () => {
        try {
          const response = await fetch("/api/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (!response.ok) {
            throw new Error("Logout failed");
          }
      
          console.log("Logout successful");
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div className="bg-blue-700 py-6 flex justify-center">
      <button className="text-white px-6 font-bold text-2xl flex flex-1 flex-row-reverse justify-around items-center" onClick={() => handleLogout()}><LogOut />Logout</button>
    </div>
  );
};

export default Sidebar;