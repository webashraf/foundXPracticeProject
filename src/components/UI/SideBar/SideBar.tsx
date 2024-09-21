"use client";

import { useUser } from "@/src/context/user.provider";
import Profile from "./Profile";
import SidebarLinks from "./SidebarLinks";
import { admLinks, userLinks } from "./constants";

const SideBar = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="">
      <div>
        <Profile />
      </div>
      <div>
        <SidebarLinks
          userLinks={
            user?.role === "ADMIN"
              ? admLinks
              : user?.role === "USER"
                ? userLinks
                : []
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
