// @ts-nocheck

import { Preview } from "@/components/preview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Code, FileText, Lock, PlayCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

// const course = {
//   chapters: [
//     {
//       id: 1,
//       title:
//         "Day 1 - Beginner - Working with Variables in Python to Manage Data",
//       description: [
//         {
//           title: "What you're going to get from this course.",
//           duration: "04:13",
//         },
//         {
//           title: "What you're going to get from this course.",
//           duration: "01:13",
//         },
//         {
//           title: "What you're going to get from this course.",
//           duration: "09:13",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title:
//         "Day 2 - Beginner - Working with Variables in Python to Manage Data",
//       description: [
//         {
//           title: "What you're going to get from this course.",
//           duration: "09:13",
//         },
//         {
//           title: "What you're going to get from this course.",
//           duration: "10:13",
//         },
//         {
//           title: "What you're going to get from this course.",
//           duration: "02:13",
//         },
//       ],
//     },
//   ],
// };

export default function CourseLesson({ course, access }) {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-bold mb-4">Course lessons</h1>
      <Accordion type="single" collapsible className="border">
        {course.lessons.map((lesson, i) => (
          <AccordionItem key={i} value={lesson.id}>
            <div className="flex items-center justify-between bg-gray-100 ">
              <AccordionTrigger className="px-4 font-bold text-sm text-left flex justify-start gap-4 hover:no-underline">
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                {lesson.title}
              </AccordionTrigger>
              <p className="text-gray-500 px-4 text-sm">
                12 lectures 1hr 12min
              </p>
            </div>
            <AccordionContent className="p-4">
              <div key={i} className="flex justify-between mb-2">
                <div className="flex items-start gap-4">
                  <PlayCircle className="w-6 h-6 text-gray-500" />

                  {access ? (
                    <Link href={`/courses/${course.slug}/${lesson.slug}`}>
                      <p
                        className="text-sm text-black"
                        dangerouslySetInnerHTML={{
                          __html: lesson.description,
                        }}
                      />
                    </Link>
                  ) : (
                    <p
                      className="text-sm text-black"
                      dangerouslySetInnerHTML={{ __html: lesson.description }}
                    />
                  )}

                  <span className="text-gray-500">03.27</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
