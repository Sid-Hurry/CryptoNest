import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-gray-200">
      <div
        className="max-w-6xl mx-auto px-4 py-4
                   grid grid-cols-1 md:grid-cols-3
                   items-center gap-4
                   text-sm text-gray-600"
      >
        {/* Left: App name */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">
            Cryptonest
          </span>
          . All rights reserved.
        </p>

        {/* Center: CoinGecko */}
        <p className="text-center">
          Powered by{" "}
          <span className="font-semibold text-green-600">
            CoinGecko
          </span>
          {" "}
        </p>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-5">

          {/* GitHub */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.4 4.8c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 2-2.4-.9.5-1.9.9-2.9 1.1-1.8-1.9-4.9-1.1-5.8 1.3-.4.9-.3 1.9.1 2.8-3.7-.2-7-2-9.2-4.9-1.2 2.1-.6 4.9 1.5 6.2-.7 0-1.4-.2-2-.5 0 2.2 1.6 4.1 3.7 4.5-.6.2-1.3.2-2 .1.6 1.9 2.3 3.2 4.4 3.2-1.7 1.3-3.8 2-6 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.7 2.2 7.4 2.2 8.9 0 13.8-7.5 13.8-14v-.6c1-.7 1.8-1.5 2.4-2.4z" />
            </svg>
          </a>

          {/* LinkedIn (CLEAN ICON) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-3v-10h2.8v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9v6.4z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
