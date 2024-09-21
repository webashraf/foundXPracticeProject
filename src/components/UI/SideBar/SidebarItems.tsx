"use client";
import { useUser } from "@/src/context/user.provider";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { buttonWrapperStyle, subtitleStyle, titleStyle } from "./ProfileStyles";
import "./SidebarItems.css";

const SidebarLinks = ({ userLinks }: any) => {
  const { user, isLoading } = useUser();
  return (
    <>
      <div className="card min min-h-[50vh]">
        <span>In this article</span>
        <div className="">
          <div className="">
            {user ? (
              <Image
                isBlurred
                width={340}
                src={user?.profilePhoto}
                alt="NextUI Album Cover"
                className="mt-5"
              />
            ) : (
              ""
            )}
          </div>

          <div style={titleStyle} className="mt-5">
            {user?.name}
          </div>
          <div style={subtitleStyle}>{user?.email}</div>
          <div style={buttonWrapperStyle}></div>
        </div>
        <div className="card__container flex flex-col ">
          {userLinks?.map((link: string | any) => (
            <Link
              key={link.href}
              href={link.href}
              className="element capitalize"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarLinks;
