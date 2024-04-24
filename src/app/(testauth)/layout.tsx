import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>test Auth layout 2</h2>
      {children}
    </div>
  );
};

export default layout;
