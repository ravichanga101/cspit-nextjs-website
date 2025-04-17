"use client";

import Container from "./Container";

export default function Section({
  className = "",
  children,
  background = "white",
  size = "default",
  containerSize = "default",
  ...props
}) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    primary: "bg-[#0056b3] text-white",
    "primary-light": "bg-[#0056b3]/5",
  };

  const sizes = {
    small: "py-8", // 32px vertical padding
    default: "py-16", // 64px vertical padding
    large: "py-24", // 96px vertical padding
  };

  return (
    <section
      className={`
        ${backgrounds[background]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
