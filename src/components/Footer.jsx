import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-2xl border-t border-border/50 text-muted mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Left: Branding & Copyright */}
        <p className="text-center md:text-left flex items-center justify-center md:justify-start gap-2 flex-wrap text-muted/80">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Cryptonest
          </span>
          <span className="text-border/50 hidden sm:inline">|</span>
          <span>All rights reserved.</span>
        </p>

        {/* Center: CoinGecko Live Status API attribution */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm bg-foreground/5 px-4 py-1.5 rounded-full border border-border/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-muted/80">Live data powered by</span>
          <a
            href="https://www.coingecko.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
          >
            CoinGecko
          </a>
        </div>

        {/* Right: Contact + Social Links with premium hover effect */}
        <div className="flex items-center justify-center md:justify-end gap-2">
          {/* Email */}
          <a
            href="mailto:siddharthhooda0013@gmail.com"
            aria-label="Email"
            className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sid-Hurry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-300"
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
            className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-300"
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
            className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-foreground/5 hover:scale-110 active:scale-95 transition-all duration-300"
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
