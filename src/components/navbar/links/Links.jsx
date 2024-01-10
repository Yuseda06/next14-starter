import Link from "next/link";
import React from "react";

export default function Links() {
  const links = [
    { path: "/", title: "Homepage" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/blog", title: "Blog" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
