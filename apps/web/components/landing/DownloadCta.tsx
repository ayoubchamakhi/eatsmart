interface DownloadCtaProps {
  isArabic: boolean;
}

export function DownloadCta({ isArabic }: DownloadCtaProps) {
  return (
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
  );
}
