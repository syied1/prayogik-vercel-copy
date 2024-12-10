// @ts-nocheck

import { BreadCrumb } from "@/components/common/breadCrumb";
// import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { BadgeCheckIcon, Star } from "lucide-react";

export default function Hero({ course }) {
  const date = new Date(course.updatedAt);
  const formattedDate =
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getFullYear();
  return (
    <div className=" bg-[#115E57]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="max-w-2xl py-4">
          {/* breadcrumb */}
          <div className="mb-6">
            <BreadCrumb
              name={course.category.name}
              title={course.title}
              url={"/courses/category"}
            />
          </div>

          {/* title */}
          <h1 className="text-3xl font-bold mb-6 text-white">{course.title}</h1>

          {/* description */}
          <p
            className="text-lg mb-6 text-white"
            dangerouslySetInnerHTML={{ __html: course.description }}
          />

          {/* ratings */}
          <div className="flex items-center mb-3">
            <span className="text-white text-lg font-bold mr-2">4.7</span>
            <span className="text-lg mr-2 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
            </span>
            <span className="text-lg mr-2 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
            </span>
            <span className="text-lg mr-2 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
            </span>
            <span className="text-lg mr-2 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
            </span>

            <a href="#" className="text-yellow-400 underline">
              (560 ratings)
            </a>
            <span className="text-gray-100 ml-2">1200 students</span>
          </div>

          {/* created by */}
          <p className="mb-3 text-white text-sm">
            Created by{" "}
            <a href="#" className="text-yellow-400 underline">
              {course.teacher.name}
            </a>
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <BadgeCheckIcon className="w-4 h-4" />{" "}
            <span>
              Last updated
              <span className="ml-1 text-white">{formattedDate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}