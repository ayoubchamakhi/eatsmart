import Image from "next/image";

interface YukaFlankCloudsProps {
  variant?: "methodology" | "nutrition" | "additives" | "database" | "legal" | "terms";
}

export function YukaFlankClouds({ variant = "methodology" }: YukaFlankCloudsProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Top Left Organic Cloud */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "-180px",
          width: 620,
          height: 320,
          opacity: 0.85,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_cloud_1.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Top Right Warm Cloud */}
      <div
        style={{
          position: "absolute",
          top: 140,
          right: "-180px",
          width: 640,
          height: 320,
          opacity: 0.8,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_cloud_2.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Left Olive Branch Flank Accent */}
      <div
        style={{
          position: "absolute",
          top: 580,
          left: "1.5%",
          width: 75,
          height: 105,
          opacity: 0.65,
          transform: "rotate(-12deg)",
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_olive_branch.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Mid Left Soft Cloud */}
      <div
        style={{
          position: "absolute",
          top: 860,
          left: "-140px",
          width: 520,
          height: 270,
          opacity: 0.75,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_cloud_2.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Right Olive Leaf Accent */}
      <div
        style={{
          position: "absolute",
          top: 1020,
          right: "2%",
          width: 65,
          height: 85,
          opacity: 0.6,
          transform: "scaleX(-1) rotate(18deg)",
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_leaf_accent.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Mid Right Warm Cloud */}
      <div
        style={{
          position: "absolute",
          top: 1350,
          right: "-160px",
          width: 560,
          height: 290,
          opacity: 0.8,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_cloud_1.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Lower Left Cloud */}
      <div
        style={{
          position: "absolute",
          top: 1950,
          left: "-160px",
          width: 540,
          height: 280,
          opacity: 0.75,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_cloud_1.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Lower Left Olive Branch Accent near footer */}
      <div
        style={{
          position: "absolute",
          bottom: 340,
          left: "2%",
          width: 70,
          height: 95,
          opacity: 0.55,
        }}
      >
        <Image
          src="/assets_v2/branding/eatsmart_olive_branch.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
