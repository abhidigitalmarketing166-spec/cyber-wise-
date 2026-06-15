import React from "react";

export default function CyberWiseLogo({ className = "h-6 w-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      {...props}
    >
      {/* Outer stylized 'C' */}
      <path
        d="M 60 22 C 39.01 22 22 39.01 22 60 C 22 80.99 39.01 98 60 98 C 73.14 98 84.77 91.31 91.68 81.16 L 80.1 73.5 C 75.32 80.2 68.16 84.5 60 84.5 C 46.47 84.5 35.5 73.53 35.5 60 C 35.5 46.47 46.47 35.5 60 35.5 C 68.16 35.5 75.32 39.8 80.1 46.5 L 91.68 38.84 C 84.77 28.69 73.14 22 60 22 Z"
        fill="currentColor"
      />
      {/* Stylized 'W' with custom angles nested into the opening of 'C' */}
      <path
        d="M 52.5 58 L 61 58 L 67.5 71.5 L 74 61 L 80.5 71.5 L 87 58 L 95.5 58 L 86 79.5 L 80.5 79.5 L 74 69 L 67.5 79.5 L 62 79.5 Z"
        fill="currentColor"
      />
      {/* Diamond/slanted dot for 'i' at the top-right */}
      <path
        d="M 97.5 45.5 L 103 45.5 L 108 36.5 L 102.5 36.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
