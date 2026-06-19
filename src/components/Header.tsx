"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeTab?: "img" | "multi-img" | "vid" | "multi-vid" | "none";
}

export default function Header({ activeTab = "none" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Desktop Header */}
      <div className="wrap nav desktop-header">
        <div className="logo-container">
          <a href="/" className="logo">
            <span className="mark">✦</span>
            <span className="logo-text">
              Gemini<span className="logo-text-extra">WatermarkRemover</span>
            </span>
          </a>
        </div>
        <nav className="nav-links">
          <a href="/gemini-watermark-remove/image" className={activeTab === "img" || activeTab === "multi-img" ? "active" : ""}>
            Image Tool
          </a>
          <a href="/gemini-watermark-remove/video" className={activeTab === "vid" || activeTab === "multi-vid" ? "active" : ""}>
            Video Tool
          </a>
        </nav>
        <div className="nav-right">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="wrap mobile-header">
        <div className="mobile-nav-top">
          <a href="/gemini-watermark-remove" className="mobile-logo">
            <span className="mobile-mark">✦</span>
            <div className="mobile-logo-text-group">
              <span className="mobile-logo-title">Gemini</span>
              <span className="mobile-logo-subtitle">WatermarkRemover</span>
            </div>
          </a>
          <div className="mobile-nav-right" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <ThemeToggle />
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mobile-nav-dropdown">
            <div className="dropdown-title">Select Tool</div>
            <a href="/gemini-watermark-remove/image" className={`dropdown-item ${activeTab === "img" || activeTab === "multi-img" ? "active" : ""}`}>
              <div className="dropdown-item-icon img-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <div className="dropdown-item-details">
                <span className="dropdown-item-title">Image Watermark Remover</span>
                <span className="dropdown-item-desc">Remove watermarks from JPG, PNG, WebP</span>
              </div>
            </a>
            <a href="/gemini-watermark-remove/video" className={`dropdown-item ${activeTab === "vid" || activeTab === "multi-vid" ? "active" : ""}`}>
              <div className="dropdown-item-icon vid-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
              </div>
              <div className="dropdown-item-details">
                <span className="dropdown-item-title">Video Watermark Remover</span>
                <span className="dropdown-item-desc">Erase watermarks from MP4, WebM, MOV</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
