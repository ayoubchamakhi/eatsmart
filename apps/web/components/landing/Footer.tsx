interface FooterProps {
  isArabic: boolean;
}

export function Footer({ isArabic }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a className="brand" href="/">
            <img
              className="brand-logo"
              src="/assets_v2/header_dark_logo.png"
              alt="Eatsmart"
              width={130}
              height={34}
            />
          </a>
          <p>
            {isArabic
              ? "دليلك المستقل لفهم المكونات واختيار أفضل المنتوجات الغذائية في تونس."
              : "Le guide indépendant pour comprendre vos étiquettes et mieux choisir vos produits alimentaires."}
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="footer-copy">© 2026 Eats.tn (Eatsmart). Tous droits réservés.</p>
          <p style={{ fontSize: "0.78rem", color: "var(--ink-faint)", marginTop: 6, lineHeight: 1.5 }}>
            EATSMART TUNISIE SARL · Matricule Fiscal : 1845920/A/M/000 · Code RNE : 1845920A<br />
            Siège social : Les Berges du Lac, 1053 Tunis · Tél : +216 71 860 000
          </p>
        </div>

        <div className="footer-col">
          <strong>L'Application</strong>
          <a href="#evaluer">{isArabic ? "كيفاش يخدم" : "Comment ça marche"}</a>
          <a href="#independance">{isArabic ? "استقلاليتنا" : "Notre indépendance"}</a>
          <a href="#recommandations">{isArabic ? "التوصيات والبدائل" : "Recommandations"}</a>
        </div>

        <div className="footer-col">
          <strong>Méthodologie</strong>
          <a href="#evaluer">{isArabic ? "القيمة الغذائية" : "Qualité nutritionnelle"}</a>
          <a href="#evaluer">{isArabic ? "تحليل المواد الحافظة" : "Analyse des additifs"}</a>
          <a href="#evaluer">{isArabic ? "قاعدة البيانات" : "Base de données"}</a>
        </div>

        <div className="footer-col">
          <strong>Informations Légales</strong>
          <a href="/mentions-legales">{isArabic ? "البيانات القانونية" : "Mentions légales"}</a>
          <a href="/cgv">{isArabic ? "شروط البيع العامة" : "Conditions Générales de Vente (CGV)"}</a>
          <a href="/legal/privacy">{isArabic ? "سياسة الخصوصية" : "Politique de confidentialité"}</a>
          <a href="/legal/terms">{isArabic ? "ميثاق الاستقلالية" : "Charte d'indépendance"}</a>
          <a href="mailto:contact@eats.tn">contact@eats.tn</a>
          <a href="tel:+21671860000">+216 71 860 000</a>
        </div>
      </div>

      <div className="footer-illustration">
        <img src="/assets_v2/footer.png" alt="Illustration paysage Eatsmart" loading="lazy" />
      </div>
    </footer>
  );
}
