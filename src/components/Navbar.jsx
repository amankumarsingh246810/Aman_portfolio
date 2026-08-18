import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-inner">

        <a href="#home" className="logo">
          A<span>.</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>

          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}

        </nav>

        <a
          href="/Aman_portfolio/Aman_Kumar_Singh_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          Resume
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>

      </div>

    </header>
  );
}
