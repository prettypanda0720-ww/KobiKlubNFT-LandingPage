import React from "react";

export default function DSImage({ src, children }) {
  return (
    <div
      className="image-discord"
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  );
}
