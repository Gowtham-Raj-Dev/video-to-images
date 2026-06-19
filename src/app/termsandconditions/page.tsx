"use client";

import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsConditions() {
  useEffect(() => {
    // Remove loading class if still present
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 100);
  }, []);

  return (
    <div className="gwr-landing" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main className="wrap" style={{ flex: 1, padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Terms & Conditions</h1>
        <div style={{ color: 'var(--muted)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>Last updated: June 2026</p>
          <p>Welcome to Free Gemini Watermark Remover. By using our tool, you agree to these terms.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>1. Acceptable Use</h2>
          <p>You agree to use this tool only for lawful purposes. You are solely responsible for ensuring you have the right to modify and remove watermarks from the media you process. We are not responsible for any copyright infringement or misuse of modified content.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>2. Provided "As Is"</h2>
          <p>This software is provided "as is", without warranty of any kind, express or implied. We do not guarantee perfect removal of all watermarks and shall not be held liable for any damages arising from the use or inability to use this tool.</p>

          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>3. Privacy</h2>
          <p>As detailed in our Privacy Policy, all media processing is performed locally on your device. We do not claim any ownership over your content, and we do not collect or store your media.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>4. Modifications to the Service</h2>
          <p>We reserve the right to modify or discontinue, temporarily or permanently, the tool with or without notice.</p>

          <p style={{ marginTop: '24px' }}>If you have any questions about these Terms, please contact us at codelove.in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
