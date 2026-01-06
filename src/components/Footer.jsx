import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-color)",
        borderTop: "1px solid var(--border-color)",
        color: "var(--muted-text)",
      }}
      className="w-full"
    >
      <div
        className="
          max-w-6xl mx-auto px-4 py-6
          grid grid-cols-1 md:grid-cols-3
          items-center gap-6
          text-sm
        "
      >
        {/* Left: App name */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--text-color)" }}
          >
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
        </p>

        {/* Right: Contact + Icons */}
        <div
          className="
            flex flex-wrap items-center justify-center
            md:justify-end gap-4
          "
        >
          {/* Contact label */}
          <span
            className="font-medium"
            style={{ color: "var(--text-color)" }}
          >
            Contact
          </span>

          {/* Email */}
          <a
            href="mailto:siddharthhooda0013@gmail.com"
            aria-label="Email"
            className="hover:opacity-80 transition"
            style={{ color: "var(--text-color)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sid-Hurry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition"
            style={{ color: "var(--text-color)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/02_Opinionated?t=wkeK3m3p4Fpj7nUO3x0saw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:opacity-80 transition"
            style={{ color: "var(--text-color)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2H21.49L14.37 10.193 22.5 22h-6.39l-4.99-6.78L5.7 22H2.45l7.6-8.7L2 2h6.55l4.51 6.19L18.244 2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/siddharth-hooda-188606324/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
            style={{ color: "var(--text-color)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-3v-10h2.8v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9v6.4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
