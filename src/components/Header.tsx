import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  FaInstagram,
  FaFacebookF,
  // FaXTwitter
} from "react-icons/fa6"; // make sure you have react‑icons v4+

const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // hide when scrolling down past 80px, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = (
    <div
      className={`w-full bg-strawberry transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 hover:opacity-90"
          aria-label="Lowkie homepage"
        >
          {/* <img src={Logo} alt="Lowkie logo" className="w-12" /> */}
          <span className="text-2xl font-black text-crimson apple-peach">LOWKIE</span>
        </a>

        {/* Nav links */}
        <nav className="hidden space-x-10 md:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About us" }
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-crimson transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center space-x-5">
          <a
            href="https://www.instagram.com/lowkie_cookie"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5 text-crimson hover:text-white" />
          </a>
          <a
            href="https://facebook.com/profile.php?id=61578438907607"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-5 w-5 text-crimson hover:text-white" />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter className="h-5 w-5 text-crimson hover:text-white" />
          </a> */}
        </div>
      </div>
    </div>
  );

  const portalTarget = document.querySelector('header');
  return portalTarget ? ReactDOM.createPortal(content, portalTarget) : null;
};

export default Header;