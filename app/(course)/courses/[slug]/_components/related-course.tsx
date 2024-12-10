import { StarFilledIcon } from "@radix-ui/react-icons";
import { User2, Users2Icon } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    image: "https://placehold.co/100x100",
    title: "Power BI and Tableau for Data Visualization [2-in-1 Bundle]",
    hours: "24 total hours",
    updated: "Updated 11/2023",
    rating: 4.4,
    students: "18,707",
    price: "$13.99",
    oldPrice: "$19.99",
  },

  {
    image: "https://placehold.co/100x100",
    title: "Business Data Analytics (IIBA®-CBDA Exam preparation)",
    hours: "8 total hours",
    updated: "Updated 7/2024",
    rating: 4.5,
    students: "3,449",
    price: "$13.99",
    oldPrice: "$74.99",
    bestseller: true,
  },
  {
    image: "https://placehold.co/100x100",
    title: "Tableau Desktop Specialist + Data Analyst Certification",
    hours: "10 total hours",
    updated: "Updated 9/2024",
    rating: 4.7,
    students: "1,574",
    price: "$13.99",
    oldPrice: "$19.99",
  },
  {
    image: "https://placehold.co/100x100",
    title:
      "JSON - Beginners Guide to learning JSON with JavaScript JSON - Beginners Guide to learning JSON with J",
    hours: "2.5 total hours",
    updated: "Updated 1/2023",
    rating: 4.1,
    students: "13,142",
    price: "$13.99",
    oldPrice: "$49.99",
  },
];

export default function RelatedCourse() {
  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold mb-4">Related courses</h1>
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start mb-4 border-b pb-4 space-y-4 sm:space-y-0"
        >
          <Image
            src={course.image}
            alt={`Course ${index + 1}`}
            width={80} 
            height={80} 
            className="object-cover sm:mr-4"
          />
          <div className="flex-1">
            <h2 className="text-sm font-bold">{course.title}</h2>
            <p className="text-sm text-gray-600 my-2">
              {course.hours} • {course.updated}
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-sm">{course.rating}</span>
              <StarFilledIcon className="text-yellow-500 mb-px" />
            </div>
            <div className="flex items-center text-gray-600 gap-1">
              <Users2Icon className="w-4 h-4" />
              <span className="text-sm">{course.students}</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">{course.price}</div>
              <div className="text-sm line-through text-gray-500">
                {course.oldPrice}
              </div>
            </div>
            <button className="text-gray-500">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
