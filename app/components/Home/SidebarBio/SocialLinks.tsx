import React from "react";
import { socialLinks } from "@/app/data/socialLinks";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex mx-auto space-x-4 mt-2">
      {socialLinks.map(({ href, label, svg }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
        >
          {svg}
        </Link>
      ))}
    </div>
  );
};
