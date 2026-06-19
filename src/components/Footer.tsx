"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot" style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="foot-links">
            <a href="/image">Image Tool</a>
            <a href="/video">Video Tool</a>
          </div>
          <div style={{ color: 'var(--muted, #a1a1aa)', fontSize: '13px', maxWidth: '320px', lineHeight: '1.5' }}>
            We do not store your images or videos. All processing is done locally on your device, ensuring your data remains 100% private.
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontWeight: 600 }}>
            <a href="/privacypolicy" style={{ color: 'var(--muted, #a1a1aa)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text, #f4f4f5)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted, #a1a1aa)'}>Privacy Policy</a>
            <a href="/termsandconditions" style={{ color: 'var(--muted, #a1a1aa)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text, #f4f4f5)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted, #a1a1aa)'}>Terms & Conditions</a>
          </div>
          <div style={{ color: 'var(--muted, #a1a1aa)', fontFamily: 'monospace, "Courier New"', fontSize: '13px' }}>
            © 2026 codelove.in . All rights reserved.
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text, #f4f4f5)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>Developed with</span>
            <span style={{ color: '#ef4444', fontSize: '16px' }}>❤️</span>
            <span style={{ color: '#3b82f6', letterSpacing: '-1px' }}>&lt;&gt;</span>
            <span>by</span>
            <a href="https://gowtham.codelovein/" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--text, #f4f4f5)' }}>Gowtham</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
