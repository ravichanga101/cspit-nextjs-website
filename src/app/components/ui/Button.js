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
        inline-flex
        items-center
        justify-center
        font-medium
        rounded-lg
        transition-colors
        duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
