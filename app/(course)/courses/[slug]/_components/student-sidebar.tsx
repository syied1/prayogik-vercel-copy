// @ts-nocheck

export default function StudentSidebar({ lesson }) {
  return (
    <div className="p-6 relative">
      <h1 className="text-sm font-semibold mb-5">COURSE LESSONS</h1>
      <ul>
        {lesson.map((item, index) => (
          <li key={index} className="flex items-center mb-3">
            <div className="w-7 h-7 rounded-full flex  items-center justify-center bg-gray-200"></div>
            <div className="flex items-center justify-between w-full">
              <p className="text-sm ml-3">{item.title}</p>

              {/* {item.completed && <Check className="h-4 w-4" />} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
