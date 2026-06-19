"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot" style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="foot-links">
            <a href="/gemini-watermark-remove/image">Image Tool</a>
            <a href="/gemini-watermark-remove/video">Video Tool</a>
          </div>
          <div style={{ color: 'var(--muted, #a1a1aa)', fontSize: '13px', maxWidth: '320px', lineHeight: '1.5' }}>
            We do not store your images or videos. All processing is done locally on your device, ensuring your data remains 100% private.
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontWeight: 600 }}>
            <a href="/gemini-watermark-remove/privacypolicy" style={{ color: 'var(--muted, #a1a1aa)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text, #f4f4f5)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted, #a1a1aa)'}>Privacy Policy</a>
            <a href="/gemini-watermark-remove/termsandconditions" style={{ color: 'var(--muted, #a1a1aa)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text, #f4f4f5)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted, #a1a1aa)'}>Terms & Conditions</a>
          </div>
          <div style={{ color: 'var(--muted, #a1a1aa)', fontFamily: 'monospace, "Courier New"', fontSize: '13px' }}>
            © 2026 <a href="https://codelove.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: 'var(--text, #f4f4f5)', transition: 'color 0.2s' }}>codelove.in</a> . All rights reserved.
          </div>
          <div style={{ fontWeight: 600, color: 'var(--text, #f4f4f5)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>Developed with</span>
            <span style={{ color: '#ef4444', fontSize: '16px' }}>❤️</span>
            <span style={{ color: '#3b82f6', letterSpacing: '-1px' }}>&lt;&gt;</span>
            <span>by</span>
            <a href="https://gowtham.codelove.in/" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--text, #f4f4f5)' }}>Gowtham</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
