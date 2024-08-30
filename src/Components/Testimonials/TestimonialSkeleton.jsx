import React from "react";

const TestimonialSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col justify-center items-center text-center bg-secondary p-4 rounded-md shadow-lg">
      {/* Comment Placeholder */}
      <div className="bg-gray-400 dark:bg-gray-600 h-16 w-3/4 mb-4 rounded"></div>

      <div className="flex items-center justify-center gap-3">
        {/* Image Placeholder */}
        <div className="bg-gray-400 dark:bg-gray-600 h-9 w-9 rounded-full"></div>

        <div className="flex flex-col gap-2">
          {/* Name Placeholder */}
          <div className="bg-gray-400 dark:bg-gray-600 h-4 w-1/2 rounded"></div>

          {/* Role Placeholder */}
          <div className="bg-gray-400 dark:bg-gray-600 h-4 w-1/3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
