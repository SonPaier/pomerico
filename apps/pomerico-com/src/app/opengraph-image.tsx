import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Pomerico Group – BPO & HR Outsourcing Partner in Poland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/pomerico-group-logo.png")
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={280}
          height={70}
          style={{ objectFit: "contain", marginBottom: "40px" }}
        />
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
          Your Strategic Growth Partner in Poland.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          BPO · HR Outsourcing · EOR · Recruitment · Business Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
