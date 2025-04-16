"use client";

const variants = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-[#0056b3] text-white",
  outline: "border border-[#0056b3] text-[#0056b3]",
  soft: "bg-[#0056b3]/10 text-[#0056b3]",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export default function Badge({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
