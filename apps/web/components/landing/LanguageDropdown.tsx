"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";

interface LanguageDropdownProps {
  isArabic: boolean;
  onSelectLanguage: (isArabic: boolean) => void;
}

export function LanguageDropdown({ isArabic, onSelectLanguage }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (nextArabic: boolean) => {
    onSelectLanguage(nextArabic);
    setIsOpen(false);
  };

  return (
    <div className="lang-dropdown-wrap" ref={dropdownRef}>
      <button
        type="button"
        className="lang-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={isArabic ? "تغيير اللغة" : "Changer de langue"}
      >
        <span className="flag-icon-wrap">
          <Image
            src={isArabic ? "/assets_v2/flag_tn.svg" : "/assets_v2/flag_fr.svg"}
            alt={isArabic ? "Drapeau Tunisie" : "Drapeau France"}
            width={20}
            height={20}
            className="rounded-flag"
          />
        </span>
        <span className="lang-name-label">{isArabic ? "عربي" : "Français"}</span>
        <ChevronDown
          size={14}
          className={`lang-chevron ${isOpen ? "chevron-rotated" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu" role="menu">
          {/* French Option */}
          <button
            type="button"
            className={`lang-option ${!isArabic ? "active" : ""}`}
            onClick={() => handleSelect(false)}
            role="menuitem"
          >
            <div className="lang-option-content">
              <Image
                src="/assets_v2/flag_fr.svg"
                alt="Drapeau France"
                width={20}
                height={20}
                className="rounded-flag"
              />
              <span className="lang-option-text">Français</span>
            </div>
            {!isArabic && <Check size={14} className="lang-check" />}
          </button>

          {/* Tunisian Arabic Option */}
          <button
            type="button"
            className={`lang-option ${isArabic ? "active" : ""}`}
            onClick={() => handleSelect(true)}
            role="menuitem"
          >
            <div className="lang-option-content">
              <Image
                src="/assets_v2/flag_tn.svg"
                alt="Drapeau Tunisie"
                width={20}
                height={20}
                className="rounded-flag"
              />
              <span className="lang-option-text">عربي (تونس)</span>
            </div>
            {isArabic && <Check size={14} className="lang-check" />}
          </button>
        </div>
      )}
    </div>
  );
}
