import { Check } from "lucide-react";

const requirements = [
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
  " You will master the Python programming language by building 100 unique projects over 100 days.",
];

export default function WhatYouLearn() {
  return (
    <div className="bg-white border border-gray-300 p-6 my-12 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">What you'll learn</h1>
      {/* <div className="grid grid-cols-2 gap-4"> */}
      <ul className="list-none space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((item, i) => (
          <li key={i} className="flex gap-2 items-start">
            <Check className="h-5 w-5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
}
