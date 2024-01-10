"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLink/navLinks";
import { useSearchParams } from "next/navigation";

export default function Links() {
  const [open, setOpen] = useState(false);
  const links = [
    { path: "/", title: "Homepage" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/blog", title: "Blog" },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}{" "}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ path: "/login", title: "Login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
