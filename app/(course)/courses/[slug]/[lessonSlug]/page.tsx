//@ts-nocheck

// import { checkCourseAccess } from "@/actions/get-course-access";
import { getServerUserSession } from "@/lib/getServerUserSession";
import { VdocipherVideoPlayer } from "../chapters/[chapterId]/_components/vdocipher-video-player";
import Sidebar from "../_components/sidebar";
import CourseDescription from "../_components/course-description";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// get lesson
const getLesson = async (lessonSlug, userId) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/lessons/lesson`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonSlug, userId }),
    });

    if (!response.ok) {
      throw new Error("Failed to get lesson");
    }

    const data = await response.json();
    return {
      error: false,
      data,
    };
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return {
      error: true,
      message: error.message,
    };
  }
};

// Check course access via the new API route
const checkCourseAccess = async (courseSlug, userId) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/access`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseSlug, userId }),
    });

    if (!response.ok) {
      // Ensure you don't attempt to parse an empty body
      let errorMessage = "Access denied";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (error) {
        console.error("Error parsing error response:", error);
      }

      return {
        access: false,
        message: errorMessage,
      };
    }

    const data = await response.json();
    return {
      access: data.access,
    };
  } catch (error) {
    console.error("Error checking course access via API", error);
    return {
      access: false,
      message: "Error occurred while checking access",
    };
  }
};

// lesson page component
export default async function LessonPage({ params }) {
  const { userId } = await getServerUserSession();
  const { slug, lessonSlug } = params;

  // Fetch the lesson data
  const lessonResponse = await getLesson(lessonSlug, userId);
  if (lessonResponse.error) {
    return <div>Lesson not found</div>;
  }

  const { lesson, course, attachments, nextLesson, userProgress, purchase } =
    lessonResponse.data;

  // Call the API to check if the user has access to the course
  // const accessResponse = await checkCourseAccess(slug);
  const accessResponse = await checkCourseAccess(slug, userId);
  console.log("access response:", accessResponse);
  const hasCourseAccess = accessResponse.access;

  if (!hasCourseAccess) {
    return <div>Unauthorized access</div>;
  }

  const isLocked = !lesson.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {/* course title */}
      <div className=" bg-[#105650]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-3 lg:px-8">
          <h1 className="text-xl font-semibold text-white">{course.title}</h1>
        </div>
      </div>
      {/* video */}
      <div className=" bg-[#115E57]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="w-full max-w-[51rem]">
            <div className="w-full">
              <VdocipherVideoPlayer
                chapterId={lesson.id}
                title={lesson.title}
                courseId={course.id}
                nextChapterId={nextLesson?.id}
                videoUrl={lesson?.videoUrl || ""}
                videoStatus={lesson?.videoStatus}
                isLocked={isLocked}
                completeOnEnd={completeOnEnd}
              />
            </div>
          </div>
        </div>
      </div>

      {/* slug content */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1">
            <main className="min-h-screen">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-black">
                  {lesson.title}
                </h1>
                {/* completed button */}
                <div className="flex justify-end mt-2">
                  <Button>
                    Mark as completed
                    <CheckCircle className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <CourseDescription course={course} />
            </main>
          </div>
          {/* sidebar */}
          <div className="flex-initial w-full relative lg:w-96 z-10">
            <div className="w-full h-full lg:-mt-[508px]">
              <div className="sticky bg-white top-4">
                <div className="border border-gray-200 min-h-[80vh]">
                  <Sidebar
                    course={course}
                    access={hasCourseAccess}
                    userId={userId}
                    lesson={course.lessons}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
