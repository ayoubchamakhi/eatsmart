interface HeroProps {
  isArabic: boolean;
  onOpenScanner?: () => void;
}

export function Hero({ isArabic, onOpenScanner }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-backdrop" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className={isArabic ? "rtl-copy" : ""}>
            {isArabic
              ? "افهم أخيراً شنوة قاعد تاكل"
              : "Comprenez enfin ce que vous mangez"}
          </h1>

          <p className={`hero-lede ${isArabic ? "rtl-copy" : ""}`}>
            {isArabic
              ? "سكانّي الكود بار في الحانوت، واعرف مكونات ماكلتك، المواد الحافظة، ولقى البدائل الصحية والتونسية بنقرة واحدة."
              : "Scannez le code-barres de vos produits en rayon pour obtenir un diagnostic nutritionnel clair, repérer les additifs indésirables et repérer de meilleures alternatives locales."}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
            {onOpenScanner && (
              <button
                type="button"
                className="btn btn--sage"
                onClick={onOpenScanner}
                style={{ cursor: "pointer", fontSize: "0.95rem" }}
              >
                <span>{isArabic ? "🔍 جرب مسح المنتوجات الآن" : "🔍 Tester le scanner en ligne"}</span>
              </button>
            )}

            <div className="store-badges" style={{ margin: 0 }}>
              <a href="#download" className="store-badge-link" aria-label="Télécharger dans l'App Store">
                <img
                  className="store-badge-img"
                  src="/assets_v2/play_store_FR.svg"
                  alt="Télécharger dans l'App Store"
                />
              </a>

              <a href="#download" className="store-badge-link" aria-label="Disponible sur Google Play">
                <img
                  className="store-badge-img"
                  src="/assets_v2/apps_store_FR.svg"
                  alt="Disponible sur Google Play"
                />
              </a>
            </div>
          </div>

          <div className="hero-trust">
            <span>
              {isArabic ? "✓ مجاني، مستقل وبدون إشهار" : "✓ Gratuit, neutre et sans publicité"}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-mockup-wrap">
            <img
              className="hero-mockup"
              src="/assets_v2/landing.png"
              alt="Application Eatsmart scannant un pot de Harissa SICAM avec son score de 83 sur 100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
