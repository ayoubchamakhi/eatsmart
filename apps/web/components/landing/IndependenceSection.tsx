interface IndependenceProps {
  isArabic: boolean;
}

export function IndependenceSection({ isArabic }: IndependenceProps) {
  return (
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
  );
}
