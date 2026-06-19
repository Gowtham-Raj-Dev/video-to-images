"use client";

import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
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
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Privacy Policy</h1>
        <div style={{ color: 'var(--muted)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>Last updated: June 2026</p>
          <p>At Free Gemini Watermark Remover, your privacy is our top priority. We believe that what is yours should stay yours.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>1. Local Processing</h2>
          <p>We do not store, upload, or transmit any of your images or videos to our servers. All watermark removal processing is done entirely locally within your web browser using client-side technologies. Your data never leaves your device.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>2. Data Collection</h2>
          <p>We do not collect personal information, user accounts, or usage analytics. Since there are no servers processing your files, there are no server logs containing your private media.</p>

          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>3. Third-Party Services</h2>
          <p>Our website is hosted on modern infrastructure that may collect basic server access logs (like IP address and user agent) for security and performance purposes, but this has no connection to the content you process in the app.</p>
          
          <h2 style={{ color: 'var(--text)', fontSize: '20px', marginTop: '16px', fontWeight: 700 }}>4. Changes to this Policy</h2>
          <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page.</p>

          <p style={{ marginTop: '24px' }}>If you have any questions, please contact us at codelove.in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
