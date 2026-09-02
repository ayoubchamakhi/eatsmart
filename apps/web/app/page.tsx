"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextArabic = !isArabic;
    setIsArabic(nextArabic);
    document.documentElement.lang = nextArabic ? "ar" : "fr";
    document.documentElement.dir = nextArabic ? "rtl" : "ltr";
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {isArabic ? "الانتقال إلى المحتوى الرئيسي" : "Aller au contenu principal"}
      </a>

      {/* Header */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`} data-header>
        <div className="wrap header-inner">
          <a className="brand" href="/" aria-label="Eatsmart, accueil">
            <img
              className="brand-logo"
              src="/assets_v2/header_dark_logo.png"
              alt="Eatsmart"
              width={140}
              height={36}
            />
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#independance">{isArabic ? "استقلاليتنا" : "Notre indépendance"}</a>
            <a href="#evaluer">{isArabic ? "فهم التقييم" : "Comprendre la note"}</a>
            <a href="#recommandations">{isArabic ? "البدائل الصحية" : "Alternatives"}</a>
          </nav>

          <div className="header-actions">
            <button
              className="language-toggle"
              type="button"
              onClick={toggleLanguage}
              aria-label={isArabic ? "Passer en français" : "Passer en arabe"}
            >
              {isArabic ? "Français" : "عربي"}
            </button>
            <a className="btn btn--sage btn--small" href="#download">
              {isArabic ? "تحميل التطبيق" : "Télécharger l'app"}
            </a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div
          className="mobile-menu"
          id="mobile-menu"
          hidden={!mobileMenuOpen}
        >
          <a href="#independance" onClick={() => setMobileMenuOpen(false)}>
            {isArabic ? "استقلاليتنا" : "Notre indépendance"}
          </a>
          <a href="#evaluer" onClick={() => setMobileMenuOpen(false)}>
            {isArabic ? "فهم التقييم" : "Comprendre la note"}
          </a>
          <a href="#recommandations" onClick={() => setMobileMenuOpen(false)}>
            {isArabic ? "البدائل الصحية" : "Alternatives"}
          </a>
          <a href="#download" onClick={() => setMobileMenuOpen(false)}>
            {isArabic ? "تحميل التطبيق" : "Télécharger l'app"}
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
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

              <div className="store-badges">
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

        {/* Section 1: Notre indépendance (3 Pillars with 3D Assets) */}
        <section className="independent-section" id="independance">
          <div className="wrap">
            <div className="section-header-center">
              <h2>
                {isArabic ? (
                  <>تقييم <span className="highlight">100% مستقل</span></>
                ) : (
                  <>Une évaluation <span className="highlight">100% indépendante</span></>
                )}
              </h2>
              <p>
                {isArabic
                  ? "هدفنا الوحيد هو تقديم معلومة شفافة وصحيحة على المواد الغذائية اليومية."
                  : "Notre seule mission est de fournir une information claire et objective sur vos aliments du quotidien."}
              </p>
            </div>

            <div className="pillars-grid">
              {/* Pillar 1 */}
              <article className="pillar-card">
                <img
                  className="pillar-img"
                  src="/assets_v2/pillar_no_brand.png"
                  alt="Aucune influence des marques"
                />
                <h3>
                  <span className="highlight-sage">
                    {isArabic ? "بدون تأثير" : "Zéro influence"}
                  </span>{" "}
                  {isArabic ? "من الشركات" : "des marques"}
                </h3>
                <p>
                  {isArabic
                    ? "حتى شركة ما تنجم تبدّل النوتة متاعها وإلا تدفع فلوس باش تظهر في الأول."
                    : "Aucun industriel ne peut modifier sa note, payer pour un classement avantageux ou orienter nos analyses."}
                </p>
              </article>

              {/* Pillar 2 */}
              <article className="pillar-card">
                <img
                  className="pillar-img"
                  src="/assets_v2/pillar_no_ads.png"
                  alt="Application sans publicité"
                />
                <h3>
                  <span className="highlight-blush">
                    {isArabic ? "بدون إعلانات" : "Aucune publicité"}
                  </span>{" "}
                  {isArabic ? "تجارية" : "commerciale"}
                </h3>
                <p>
                  {isArabic
                    ? "ما فما حتى إشهار يوجه اختياراتك. التطبيق يبقى نقي ومستقل تماماً."
                    : "Vous ne trouverez aucune annonce sponsorisée pour orienter vos achats. L'application reste neutre et épurée."}
                </p>
              </article>

              {/* Pillar 3 */}
              <article className="pillar-card">
                <img
                  className="pillar-img"
                  src="/assets_v2/pillar_transparent.png"
                  alt="Méthodologie transparente"
                />
                <h3>
                  <span className="highlight-butter">
                    {isArabic ? "منهجية شفافة" : "Modèle transparent"}
                  </span>{" "}
                  {isArabic ? "وعلمية" : "et éthique"}
                </h3>
                <p>
                  {isArabic
                    ? "طريقة التقييم مبنية على أبحاث علمية منشورة مع تشجيع المنتوجات المحلية التونسية."
                    : "Notre méthode de calcul repose sur la recherche scientifique publique et l'authenticité des produits du terroir."}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 2: Évaluation détaillée du produit (Hero Mockup with Insight Bubbles) */}
        <section className="evaluate-section" id="evaluer">
          <div className="wrap">
            <div className="section-header-center">
              <h2>
                {isArabic ? (
                  <>كيفاش نحسبوا <span className="highlight">نوتة Eatsmart</span> ؟</>
                ) : (
                  <>Comment fonctionne <span className="highlight">la note Eatsmart</span> ?</>
                )}
              </h2>
              <p>
                {isArabic
                  ? "نوتة شاملة من 0 إلى 100 محسوبة بكل استقلالية حسب 3 معايير علمية :"
                  : "Un score global de 0 à 100 calculé en toute indépendance selon 3 critères complémentaires :"}
              </p>
            </div>

            <div className="eval-stage-wrap">
              <div className="eval-mockup-hero">
                <div className="eval-glow" aria-hidden="true"></div>
                <img
                  className="eval-mockup-large"
                  src="/assets_v2/eval_breakdown_mockup.png"
                  alt="Fiche d'analyse détaillée d'un pot de Harissa SICAM avec score de 83 sur 100"
                />

                {/* Card 1: Nutrition */}
                <div className="insight-bubble bubble--nutrition">
                  <div className="bubble-header">
                    <div className="bubble-icon-wrap icon--green">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                      </svg>
                    </div>
                    <h4 className="bubble-title">
                      {isArabic ? "الجودة الغذائية" : "Qualité nutritionnelle"}
                    </h4>
                  </div>
                  <p className="bubble-desc">
                    {isArabic
                      ? "التوازن العام : الألياف، البروتينات، السكر، الدهون المشبعة والأملاح."
                      : "Équilibre global : calcul selon les fibres, protéines, sucres, graisses saturées et sel (Nutri-Score)."}
                  </p>
                  <svg className="bubble-arrow arrow--nutrition-box" width="60" height="36" viewBox="0 0 60 36" fill="none">
                    <path d="M 2 4 C 24 4, 36 28, 54 28" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="54" cy="28" r="3.5" fill="#047857" />
                  </svg>
                </div>

                {/* Card 2: Additifs */}
                <div className="insight-bubble bubble--additives">
                  <div className="bubble-header">
                    <div className="bubble-icon-wrap icon--orange">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v7.31L4.75 20.5a1 1 0 0 0 .89 1.5h12.72a1 1 0 0 0 .89-1.5L14 9.31V2" />
                        <path d="M8.5 2h7" />
                        <path d="M7 16h10" />
                      </svg>
                    </div>
                    <h4 className="bubble-title">
                      {isArabic ? "المواد المضافة" : "Présence d'additifs"}
                    </h4>
                  </div>
                  <p className="bubble-desc">
                    {isArabic
                      ? "تحليل دقيق : كشف الملونات والمواد الحافظة حسب مستوى خطورتها الصحية."
                      : "Analyse médicale : détection systématique des conservateurs, colorants et émulsifiants selon leur niveau de risque."}
                  </p>
                  <svg className="bubble-arrow arrow--additives-box" width="60" height="80" viewBox="0 0 60 80" fill="none">
                    <path d="M 2 74 C 26 74, 36 8, 54 8" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="54" cy="8" r="3.5" fill="#C2410C" />
                  </svg>
                </div>

                {/* Card 3: Indépendant */}
                <div className="insight-bubble bubble--trust">
                  <div className="bubble-header">
                    <div className="bubble-icon-wrap icon--emerald">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="bubble-title">
                      {isArabic ? "مستقل ومحايد" : "Indépendant & Neutre"}
                    </h4>
                  </div>
                  <p className="bubble-desc">
                    {isArabic
                      ? "شفافية كاملة : بدون إعلانات ولا تمويل من مصانع الأغذية."
                      : "Transparence totale : aucune publicité, aucun sponsor et financé uniquement par nos utilisateurs."}
                  </p>
                  <svg className="bubble-arrow arrow--trust-box" width="64" height="36" viewBox="0 0 64 36" fill="none">
                    <path d="M 62 8 C 38 8, 22 28, 6 28" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="6" cy="28" r="3.5" fill="#15803D" />
                  </svg>
                </div>

                {/* Card 4: Terroir */}
                <div className="insight-bubble bubble--terroir">
                  <div className="bubble-header">
                    <div className="bubble-icon-wrap icon--teal">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h4 className="bubble-title">
                      {isArabic ? "الإنتاج المحلي والبيولوجي" : "Terroir & Origine"}
                    </h4>
                  </div>
                  <p className="bubble-desc">
                    {isArabic
                      ? "تثمين المنتوج التونسي الأصيل ومكونات الفلاحة البيولوجية."
                      : "Filière locale : valorisation des ingrédients du terroir tunisien et des labels certifiés bio."}
                  </p>
                  <svg className="bubble-arrow arrow--terroir-box" width="76" height="42" viewBox="0 0 76 42" fill="none">
                    <path d="M 74 34 C 48 34, 28 8, 6 8" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="6" cy="8" r="3.5" fill="#0F766E" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Recommandations d'alternatives saines */}
        <section className="alternatives-section" id="recommandations">
          <div className="wrap alt-grid">
            <div className="alt-mockup-wrapper">
              <img
                className="alt-mockup-img"
                src="/assets_v2/alternatives_comparison.png"
                alt="Comparaison entre un produit transformé et une alternative locale saine"
              />
            </div>

            <div className="alt-copy">
              <h2>
                {isArabic ? (
                  <>بدائل تونسية <span className="highlight">أكثر صحة</span></>
                ) : (
                  <>Des alternatives locales <span className="highlight">plus saines</span></>
                )}
              </h2>
              <p>
                {isArabic
                  ? "كي تسكانّي منتوج فيه نوتة طايحة، التطبيق يقترح عليك طول بدائل صحية، لذيذة وموجودة في العطارة والمغازات متاعنا."
                  : "Si un article scanné présente un score insuffisant, l'application vous propose spontanément des produits équivalents et bien meilleurs pour votre santé, disponibles dans vos commerces habituels."}
              </p>
              <a className="btn btn--sage btn--icon-hover" href="#download">
                <span>{isArabic ? "اكتشفها في التطبيق" : "Découvrir dans l'application"}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Download Banner */}
        <section className="wrap" id="download" style={{ paddingTop: "var(--s-6)" }}>
          <div className="download-banner">
            <div className="download-banner-backdrop" aria-hidden="true"></div>
            <div className="download-copy">
              <h2>
                {isArabic ? "ابدأ اختار صحتك من اليوم" : "Faites de meilleurs choix dès aujourd'hui"}
              </h2>
              <p>
                {isArabic
                  ? "حمّل تطبيق Eatsmart مجاناً على iOS و Android وابدأ سكانّي قضيتك."
                  : "Téléchargez gratuitement Eatsmart sur iOS et Android pour scanner vos premiers produits en magasin."}
              </p>

              <div className="store-badges">
                <a href="#" className="store-badge-link" aria-label="Télécharger dans l'App Store">
                  <img
                    className="store-badge-img"
                    src="/assets_v2/play_store_FR.svg"
                    alt="Télécharger dans l'App Store"
                  />
                </a>

                <a href="#" className="store-badge-link" aria-label="Disponible sur Google Play">
                  <img
                    className="store-badge-img"
                    src="/assets_v2/apps_store_FR.svg"
                    alt="Disponible sur Google Play"
                  />
                </a>
              </div>
            </div>

            <div className="download-visual">
              <img
                className="cta-mascot-img"
                src="/assets_v2/cta_mascot_app.png"
                alt="Mascotte piment Eatsmart avec smartphone de scan"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            <p className="footer-copy">© 2026 Eatsmart. Projet indépendant à visée informative.</p>
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
            <strong>À Propos</strong>
            <a href="#">{isArabic ? "فريق العمل" : "L'équipe"}</a>
            <a href="#">{isArabic ? "اتصل بنا" : "Contact & Presse"}</a>
            <a href="#">{isArabic ? "سياسة الخصوصية" : "Politique de confidentialité"}</a>
            <a href="#">{isArabic ? "شروط الاستخدام" : "Conditions d'utilisation"}</a>
          </div>
        </div>

        <div className="footer-illustration">
          <img src="/assets_v2/footer.png" alt="Illustration paysage Eatsmart" loading="lazy" />
        </div>
      </footer>
    </>
  );
}
