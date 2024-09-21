import { useUser } from "@/src/context/user.provider";
import React from "react";

interface ProfileProps {
  name?: string;
  subtitle?: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const { user, isLoading } = useUser();

  return <div></div>;
};

export default Profile;
