"use client";

const variants = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-semibold",
  h6: "text-base md:text-lg font-semibold",
};

export default function Heading({
  variant = "h1",
  as,
  color = "default",
  className = "",
  children,
  ...props
}) {
  const Component = as || variant;
  const colorClasses = {
    default: "text-gray-900",
    primary: "text-[#0056b3]",
    white: "text-white",
  };

  return (
    <Component
      className={`
        ${variants[variant]}
        ${colorClasses[color]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
