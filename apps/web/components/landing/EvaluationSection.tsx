interface EvaluationProps {
  isArabic: boolean;
}

export function EvaluationSection({ isArabic }: EvaluationProps) {
  return (
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
  );
}
