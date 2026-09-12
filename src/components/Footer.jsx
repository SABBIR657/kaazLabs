import React from "react";

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-muted">
        <span>© {new Date().getFullYear()} KaazLabs. All rights reserved.</span>
        <span>Web · Android · UI/UX · Security</span>
      </div>
    </footer>
  );
}
