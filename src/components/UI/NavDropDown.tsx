"use client";
import { useUser } from "@/src/context/user.provider";
import { config } from "@/src/middleware";
import { logoutUser } from "@/src/services/AuthService";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";

const NavDropDown = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setIsLoading: setUserLoading } = useUser();

  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  const handleLogout = () => {
    logoutUser();
    setUserLoading(true);

    if (config.matcher.includes(pathname)) {
      router.push("/");
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="w-6 h-6 text-tiny"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>

        <DropdownItem
          onClick={() => handleNavigation("/profile/settings")}
          key="settings"
        >
          Settings
        </DropdownItem>

        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="create-post"
        >
          Create post
        </DropdownItem>

        <DropdownItem key="delete" className="text-danger" color="danger">
          <button onClick={() => handleLogout()}>Log out</button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavDropDown;
