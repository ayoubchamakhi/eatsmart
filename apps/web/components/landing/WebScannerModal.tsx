"use client";

import { useState } from "react";
import { X, Search, Sparkles, Leaf, ShieldAlert, Barcode, Check } from "lucide-react";
import { SEED_PRODUCTS, getScoreColor, type Product } from "@eatsmart/domain";

interface WebScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export function WebScannerModal({ isOpen, onClose, isArabic }: WebScannerModalProps) {
  const [barcodeInput, setBarcodeInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product>(SEED_PRODUCTS[0]);

  if (!isOpen) return null;

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setBarcodeInput(product.barcode);
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = barcodeInput.trim().toLowerCase();
    const found = SEED_PRODUCTS.find(
      (p) =>
        p.barcode === query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
    if (found) {
      setSelectedProduct(found);
    }
  };

  const scoreColor = getScoreColor(selectedProduct.score.tier);

  return (
    <div className="web-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="web-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="web-modal-header">
          <div className="web-modal-title-wrap">
            <div className="web-modal-icon">
              <Barcode size={22} color="#2D5A27" />
            </div>
            <div>
              <h3>
                {isArabic ? "تجربة الماسح الذكي" : "Démonstrateur Scanner Web"}
              </h3>
              <p>
                {isArabic
                  ? "اختر منتوجاً أو اكتب رمز الباركود لتشاهد التقييم الفوري"
                  : "Sélectionnez un produit ou saisissez un code-barres tunisien"}
              </p>
            </div>
          </div>
          <button
            className="web-modal-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Quick Presets */}
        <div className="web-modal-presets">
          <span className="presets-label">
            {isArabic ? "منتوجات جاهزة للتجربة :" : "Exemples en rayon :"}
          </span>
          <div className="presets-chips">
            {SEED_PRODUCTS.map((p) => {
              const isSelected = p.id === selectedProduct.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={`preset-chip ${isSelected ? "active" : ""}`}
                  onClick={() => handleSelectProduct(p)}
                >
                  <span
                    className="chip-score-dot"
                    style={{ backgroundColor: getScoreColor(p.score.tier) }}
                  />
                  <strong>{p.brand}</strong> - {p.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Manual Barcode Search Form */}
        <form onSubmit={handleManualSearch} className="web-barcode-form">
          <div className="barcode-input-wrap">
            <input
              type="text"
              className="barcode-input"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              placeholder={
                isArabic
                  ? "اكتب الرمز (مثال: 6194001900123) أو اسم الماركة"
                  : "Saisir un code-barres (ex: 6194001900123) ou marque..."
              }
            />
            <button type="submit" className="barcode-submit-btn">
              {isArabic ? "تحليل" : "Analyser"}
            </button>
          </div>
        </form>

        {/* Product Diagnostic Result Card */}
        <div className="diagnostic-card">
          <div className="diagnostic-header">
            <div>
              <span className="product-brand-kicker">{selectedProduct.brand}</span>
              <h4 className="product-card-title">{selectedProduct.name}</h4>
              <span className="product-card-category">{selectedProduct.category}</span>
            </div>

            {/* Score Pill */}
            <div
              className="score-hero-badge"
              style={{ backgroundColor: scoreColor }}
            >
              <span className="score-hero-value">{selectedProduct.score.value}</span>
              <span className="score-hero-scale">/100</span>
            </div>
          </div>

          <div className="diagnostic-tier-banner">
            <strong style={{ color: scoreColor }}>
              {isArabic
                ? selectedProduct.score.label.ar
                : selectedProduct.score.label.fr}
            </strong>
            <span className="confidence-text">
              {isArabic
                ? `دقة البيانات: ${selectedProduct.score.confidence}%`
                : `Confiance: ${selectedProduct.score.confidence}%`}
            </span>
          </div>

          {/* Terroir / Origin Pill */}
          <div className="diagnostic-row terroir-row">
            <div className="icon-badge">
              <Leaf size={16} color="#2D5A27" />
            </div>
            <div>
              <strong>{isArabic ? "المصدر والأصل" : "Origine & Terroir"} :</strong>{" "}
              <span>{selectedProduct.origin}</span>
            </div>
          </div>

          {/* Nutrition Table */}
          <div className="diagnostic-nutrition-grid">
            <div className="nutri-item">
              <span className="nutri-label">{isArabic ? "السعرات" : "Énergie"}</span>
              <strong>{selectedProduct.nutrition.energyKcal} kcal</strong>
            </div>
            <div className="nutri-item">
              <span className="nutri-label">{isArabic ? "السكريات" : "Sucres"}</span>
              <strong className={selectedProduct.nutrition.sugars > 15 ? "alert" : ""}>
                {selectedProduct.nutrition.sugars}g
              </strong>
            </div>
            <div className="nutri-item">
              <span className="nutri-label">{isArabic ? "دهون مشبعة" : "Gras sat."}</span>
              <strong className={selectedProduct.nutrition.saturatedFat > 5 ? "alert" : ""}>
                {selectedProduct.nutrition.saturatedFat}g
              </strong>
            </div>
            <div className="nutri-item">
              <span className="nutri-label">{isArabic ? "الملح" : "Sel"}</span>
              <strong>{selectedProduct.nutrition.salt}g</strong>
            </div>
          </div>

          {/* Additives Summary */}
          <div className="diagnostic-additives">
            <div className="additives-title">
              <ShieldAlert
                size={16}
                color={selectedProduct.additives.length > 0 ? "#C2410C" : "#2D5A27"}
              />
              <strong>
                {isArabic ? "المواد المضافة :" : "Additifs détectés :"}
              </strong>
            </div>
            {selectedProduct.additives.length === 0 ? (
              <span className="safe-text">
                {isArabic
                  ? "✓ خالي من أي ملونات أو مواد حافظة"
                  : "✓ Aucun additif ou conservateur chimique détecté"}
              </span>
            ) : (
              <div className="additives-list">
                {selectedProduct.additives.map((add) => (
                  <span key={add.code} className="additive-chip">
                    <strong>{add.code}</strong> ({isArabic ? add.nameAr : add.nameFr})
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer info in modal */}
        <div className="web-modal-footer">
          <p>
            {isArabic
              ? "📱 لتحليل منتوجاتك بالكاميرا في المتجر، حمّل تطبيق Eatsmart مجاناً."
              : "📱 Pour scanner vos produits directement avec la caméra en rayon, téléchargez l'application mobile."}
          </p>
          <a
            href="#download"
            className="btn btn--sage btn--small"
            onClick={onClose}
          >
            {isArabic ? "تحميل التطبيق" : "Télécharger l'application"}
          </a>
        </div>
      </div>
    </div>
  );
}
