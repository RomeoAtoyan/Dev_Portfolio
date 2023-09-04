import React from "react";

const Yellow = ({ children, className }) => {
  return (
    <div style={{ background: "var(--yellow)" }} className={className}>
      {children}
    </div>
  );
};

export default Yellow;
