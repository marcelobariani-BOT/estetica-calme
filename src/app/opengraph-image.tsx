import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Estética Calme — Centro de Estética Avanzada en CABA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF6F1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(244, 217, 208, 0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "rgba(244, 217, 208, 0.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 120,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(201, 123, 92, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 140,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(201, 123, 92, 0.15)",
          }}
        />

        {/* Subtle horizontal lines */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(201, 123, 92, 0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(201, 123, 92, 0.14)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: 15,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#C97B5C",
              margin: 0,
              marginBottom: 24,
              fontFamily: "sans-serif",
            }}
          >
            Centro de Estética Avanzada
          </p>

          <h1
            style={{
              fontSize: 112,
              fontFamily: "serif",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#2C2422",
              margin: 0,
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            Calme
          </h1>

          <div
            style={{
              width: 56,
              height: 1,
              background: "#C97B5C",
              marginBottom: 28,
            }}
          />

          <p
            style={{
              fontSize: 20,
              color: "#7A6860",
              letterSpacing: "0.12em",
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            Parque Chacabuco y Parque Centenario · CABA
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
