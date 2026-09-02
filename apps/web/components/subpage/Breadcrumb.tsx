import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        fontSize: "0.85rem",
        color: "#6E675C",
        padding: "24px 0 16px",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          color: "#2D5A27",
          textDecoration: "none",
          fontWeight: 600,
          transition: "opacity 0.2s ease",
        }}
      >
        <Home size={14} />
        <span>Accueil</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <ChevronRight size={13} color="#B3ADA3" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{
                  color: "#2D5A27",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "opacity 0.2s ease",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: isLast ? "#1F221B" : "#6E675C", fontWeight: isLast ? 700 : 500 }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
