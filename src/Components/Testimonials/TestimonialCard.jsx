import React, { useState } from "react";
import Tooltip from "../ToolTip/ToolTip";

const TestimonialCard = ({ comment, image, role, name, source, UniqKey }) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const toggleComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <figure
      key={UniqKey}
      className="hover:scale-105 transition-transform duration-300 flex flex-col justify-between items-center text-center bg-secondary p-4 rounded-md shadow-lg h-64"
    >
      {/* Comment Section */}
      <blockquote
        className={`mx-auto px-2 max-w-full text-gray-500 dark:text-gray-400 flex-1 ${
          showFullComment ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        <p className={`my-4 text-xs ${showFullComment ? "" : "line-clamp-3"}`}>
          {comment}
        </p>
        <button
          onClick={toggleComment}
          className="text-xs text-primary bg-transparent border border-primary px-2 py-1 rounded-md hover:bg-primary hover:text-white transition-colors mt-2"
        >
          {showFullComment ? "View Less" : "View More"}
        </button>
      </blockquote>

      {/* Author Section */}
      <figcaption className="flex justify-center items-center space-x-3 mt-4">
        {image ? (
          <img className="w-12 h-12 rounded-full" src={image} alt={name} />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold text-xl">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="space-y-1 font-medium dark:text-white text-left text-xs">
          <div className="text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </div>
          <div className="font-light text-gray-500 dark:text-gray-400 text-xs text-ellipsis overflow-hidden whitespace-nowrap">
            {role}
          </div>
        </div>
      </figcaption>

      {/* Source Link */}
      {source && (
        <button
          onClick={() => window.open(source, "_blank")}
          className="text-xs text-white bg-tertiary px-4 py-1 rounded-md hover:bg-tertiary-dark transition-colors mt-4"
        >
          View Comment
        </button>
      )}
    </figure>
  );
};

export default TestimonialCard;
