import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import SingleCoursePrice from "./single-course-price";
import SubscriptionPrice from "./subscription-price";

export default function VisitorSidebar({ course, access, userId }: any) {
  return (
    <div>
      {/* preview */}
      <div className="relative w-full aspect-video">
        <Image fill className="" alt="course image" src={course.imageUrl} />

        <Image
          alt="video icon"
          src="/images/courses/video-icon.svg"
          height={100}
          width={100}
          className="absolute top-20 left-36 flex items-center justify-center mt-4"
        />
      </div>

      <div className="px-6 py-2">
        {/* course subscription price */}
        <SubscriptionPrice />
        {/* separator */}
        <div className="flex items-center justify-center my-3">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* single course pricing */}
        <SingleCoursePrice course={course} access={access} userId={userId} />

        {/* coupon */}
        <div className="mb-4">
          <p className="text-gray-500 mt-4 text-sm">Coupon</p>
          <div className="flex mt-1">
            <Input
              type="text"
              className="flex-grow border border-gray-300 p-2 w-fit rounded-none"
              placeholder="Enter Coupon"
            />
            <Button className="bg-gray-800 rounded-none text-white py-2 px-4">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
