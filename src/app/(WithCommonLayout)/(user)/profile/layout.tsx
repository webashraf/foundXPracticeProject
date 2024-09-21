import Container from "@/src/components/UI/Container";
import SideBar from "@/src/components/UI/SideBar/SideBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="flex gap-10">
        <div className="w-[25%] bg-r h-[80vh]">
          <SideBar  />
        </div>
        <div className="w-[75%]"> {children}</div>
      </div>
    </Container>
  );
};

export default layout;
