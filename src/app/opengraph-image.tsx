import { ImageResponse } from "next/og";
import { profile, role } from "@/data/profile";

export const alt = `${profile.name} — ${role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0f",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#f59e0b",
            }}
          />
          <div style={{ color: "#8a8a96", fontSize: 28, letterSpacing: 4 }}>
            {profile.handle.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ededf0",
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ color: "#f59e0b", fontSize: 38, marginTop: 24 }}>
            {role.en}
          </div>
        </div>

        <div style={{ display: "flex", color: "#61616d", fontSize: 24 }}>
          {"3+ years  /  100k+ users impacted  /  Nestle"}
        </div>
      </div>
    ),
    size,
  );
}
