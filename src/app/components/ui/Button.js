"use client";

const variants = {
  primary: "bg-[#0056b3] text-white hover:bg-[#004494] active:bg-[#003d85]",
  outline:
    "border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white",
  ghost: "text-[#0056b3] hover:bg-[#0056b3]/10",
  link: "text-[#0056b3] hover:underline underline-offset-4",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[#0056b3]
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
