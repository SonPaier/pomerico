import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Pomerico Group – partner w outsourcingu BPO i HR w Polsce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/pomerico-group-logo-brand-colors.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #183B6E 0%, #1a2744 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
        }}
      >
        {/* White badge keeps the brand-blue logo readable on the navy background */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: "16px",
            padding: "22px 32px",
            marginBottom: "44px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={287}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "28px",
            maxWidth: "800px",
          }}
        >
          Twój strategiczny partner rozwoju w Polsce.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          BPO · Outsourcing HR · EOR · Rekrutacja · Doradztwo biznesowe
        </div>
      </div>
    ),
    { ...size }
  );
}
