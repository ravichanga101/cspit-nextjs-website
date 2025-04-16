"use client";

export default function Container({
  className = "",
  children,
  size = "default",
  ...props
}) {
  const sizes = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-[90rem]",
    full: "max-w-none",
  };

  return (
    <div
      className={`
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        w-full
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
