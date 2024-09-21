"use client";

import { useUser } from "@/src/context/user.provider";
import SidebarLinks from "./SidebarItems";
import { admLinks, userLinks } from "./constants";

const SideBar = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="">
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
