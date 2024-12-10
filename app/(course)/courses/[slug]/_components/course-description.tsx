// @ts-nocheck
import React from "react";

export default function CourseDescription({ course }) {
  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold mb-4">Description</h1>
      <div className="text-base">
        <p
          className="text-lg mb-4 text-black"
          dangerouslySetInnerHTML={{ __html: course.description }}
        />
      </div>
    </div>
  );
}
