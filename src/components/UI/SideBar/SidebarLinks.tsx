"use client";
import { useUser } from "@/src/context/user.provider";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { buttonWrapperStyle, subtitleStyle, titleStyle } from "./ProfileStyles";
import "./SidebarLinks.css";

const SidebarLinks = ({ userLinks }: any) => {
  const { user, isLoading } = useUser();
  return (
    <>
      <div className="card min">
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

            {/* {user ? (
              <Image
                isBlurred
                width={340}
                src={user?.profilePhoto}
                alt="NextUI Album Cover"
                className="mt-5"
              />
            ) : (
              <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <circle cx="64" cy="64" fill="#ff8475" r="60"></circle>
                <circle
                  cx="64"
                  cy="64"
                  fill="#f85565"
                  opacity=".4"
                  r="48"
                ></circle>
                <path
                  d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z"
                  fill="#7f3838"
                ></path>
                <path
                  d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z"
                  fill="#393c54"
                  opacity=".4"
                ></path>
                <circle cx="89" cy="65" fill="#fbc0aa" r="7"></circle>
                <path
                  d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z"
                  fill="#4bc190"
                ></path>
                <path
                  d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z"
                  fill="#356cb6"
                  opacity=".3"
                ></path>
                <path
                  d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z"
                  fill="#356cb6"
                  opacity=".3"
                ></path>
                <path
                  d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"
                  fill="#fff"
                ></path>
                <path
                  d="m64 88.75v9.75"
                  fill="none"
                  stroke="#fbc0aa"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="14"
                ></path>
                <circle cx="39" cy="65" fill="#fbc0aa" r="7"></circle>
                <path
                  d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"
                  fill="#ffd8c9"
                ></path>
                {/* Add remaining SVG paths and shapes */}
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
