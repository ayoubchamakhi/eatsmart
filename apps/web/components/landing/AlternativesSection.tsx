interface AlternativesProps {
  isArabic: boolean;
}

export function AlternativesSection({ isArabic }: AlternativesProps) {
  return (
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
  );
}
