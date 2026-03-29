import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pomerico Group – BPO & HR Outsourcing Partner in Poland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 20 }}>
          POMERICO GROUP
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 30 }}>
          Your Strategic Growth{"\n"}Partner in Poland.
        </div>
        <div style={{ fontSize: 24, opacity: 0.7, maxWidth: 700 }}>
          BPO · HR Outsourcing · EOR · Recruitment · Business Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
