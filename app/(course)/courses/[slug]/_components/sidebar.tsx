// @ts-nocheck
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import StudentSidebar from "./student-sidebar";
import VisitorSidebar from "./visitor-sidebar";

const lessons = [
  { id: "U1", title: "Introduction", completed: true },
  { id: "U2", title: "Preparation for a Project", completed: true },
  { id: "U3", title: "UX Phase and Art Direction", completed: true },
  { id: "U4", title: "Defining Design Elements", completed: true },
  { id: "U5", title: "Responsive Design and Handover", completed: true },
  { id: "U6", title: "Presentation and Final Boost", completed: false },
  { id: "FP", title: "Final project", completed: false },
];

export default function Sidebar({ course, access, userId, lesson }) {
  return (
    <div>
      {access ? (
        <StudentSidebar lesson={lesson} />
      ) : (
        <VisitorSidebar course={course} access={access} userId={userId} />
      )}
    </div>
  );
}
