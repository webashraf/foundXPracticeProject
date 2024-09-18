import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>User Layout</h1>
      {children}
    </div>
  );
};

export default layout;
