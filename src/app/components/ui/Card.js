"use client";

export default function Card({
  className = "",
  children,
  hover = false,
  highlight = false,
  ...props
}) {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
        ${
          hover
            ? "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            : ""
        }
        ${highlight ? "border-l-4 border-[#0056b3]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div
      className={`
        px-6
        py-4
        border-b
        border-gray-100
        text-lg font-semibold
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ className = "", children, ...props }) {
  return (
    <div
      className={`
        px-6
        py-4
        text-base text-gray-600
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }) {
  return (
    <div
      className={`
        px-6
        py-4
        border-t
        border-gray-100
        bg-gray-50
        text-sm text-gray-500
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
