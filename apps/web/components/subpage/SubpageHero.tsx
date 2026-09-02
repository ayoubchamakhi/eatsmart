import Image from "next/image";
import { ReactNode } from "react";

interface SubpageHeroProps {
  badgeIcon: React.ReactElement | React.ReactNode;
  badgeText: string;
  badgeVariant?: "sage" | "coral" | "amber";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function SubpageHero({
  badgeIcon,
  badgeText,
  badgeVariant = "sage",
  title,
  description,
  imageSrc,
  imageAlt,
}: SubpageHeroProps) {
  const badgeStyles = {
    sage: { bg: "#EBF3E8", text: "#2D5A27" },
    coral: { bg: "#FEF3EB", text: "#D9531E" },
    amber: { bg: "#FEF8E7", text: "#C47F00" },
  }[badgeVariant];

  return (
    <section style={{ padding: "16px 0 48px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: badgeStyles.bg,
              color: badgeStyles.text,
              padding: "7px 16px",
              borderRadius: 9999,
              fontSize: "0.84rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              marginBottom: 20,
            }}
          >
            {badgeIcon}
            <span>{badgeText}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)",
              color: "#1F221B",
              fontWeight: 800,
              lineHeight: 1.14,
              margin: "0 0 20px",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              color: "#5C564B",
              fontSize: "1.12rem",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 580,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: 320,
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 18px 45px rgba(31, 34, 27, 0.08)",
            border: "1px solid rgba(61, 58, 52, 0.06)",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
