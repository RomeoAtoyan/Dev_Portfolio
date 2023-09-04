import React from "react";

const Black = ({ children, className }) => {
  return (
    <div style={{ background: "var(--black)" }} className={className}>
      {children}
    </div>
  );
};

export default Black;
