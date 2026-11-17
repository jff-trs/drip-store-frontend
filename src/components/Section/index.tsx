import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  titleAlign?: "left" | "center";
  link?: { text: string; href: string };
  children: ReactNode;
}

export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}: SectionProps) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-8 py-10 flex flex-col gap-6">
      <div
        className={`flex items-center ${titleAlign === "center" ? "justify-center" : "justify-between"}`}
      >
        <h2 className="text-dark-gray-2 text-[24px] font-bold">{title}</h2>
        {link && (
          <Link
            to={link.href}
            className="text-primary text-[18px] font-bold hover:underline"
          >
            {link.text}
          </Link>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
