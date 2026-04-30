import * as React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-5xl font-outfit font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
