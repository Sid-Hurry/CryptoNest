import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row
                      items-center justify-between gap-4 text-sm text-gray-600">

        {/* Left: App name */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">
            CryptoTrack
          </span>
          . All rights reserved.
        </p>

        {/* Right: Credits */}
        <p className="text-gray-500">
          Powered by CoinGecko API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
