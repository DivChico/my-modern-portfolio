import React from "react";

const Tooltip = ({ children, title }) => (
  <div className="relative group">
    {children}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {title}
    </div>
  </div>
);

export default Tooltip;
