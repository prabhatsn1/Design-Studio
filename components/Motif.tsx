import React from "react";
import Image from "next/image";
import heartImage from "@/media/obj6.png";
import faunaImage from "@/media/obj4.png";
import jaliImage from "@/media/obj3.png";

const Motif: React.FC = () => {
  return (
    <div
      style={{
        background: "#f9f8f6",
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "serif",
        color: "#2b4a52",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontWeight: 600,
          letterSpacing: "1px",
          marginBottom: 32,
          color: "#1F6F83",
          fontSize: "48px",
        }}
      >
        Motif
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 48,
          alignItems: "flex-start",
          marginBottom: 40,
        }}
      >
        {/* Main Motif Image */}
        <div
          style={{
            background: "#1F6F83",
            borderRadius: 12,
            padding: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "716px",
            height: "487px",
          }}
        >
          <Image
            src={heartImage}
            alt="Floral Motif"
            width={471}
            height={459}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Floral Description */}
        <div style={{ maxWidth: 320 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 500,
              marginBottom: 12,
              color: "#1F6F83",
            }}
          >
            Floral
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#1F6F83" }}>
            Stone carvings, inspired by various floral motifs, feature highly
            intricate patterns on frames, vases, and lanterns. These designs
            highlight naturalistic themes, bringing fine detailing and graceful
            artistry.
          </p>
        </div>
      </div>

      {/* Fauna and Jali Work */}
      <div style={{ display: "flex", gap: 36 }}>
        {/* Fauna Work */}
        <div
          style={{
            background: "#1F6F83",
            borderRadius: 24,
            padding: 18,
            width: 377.29,
            height: 232,
            textAlign: "center",
          }}
        >
          <Image
            src={faunaImage}
            alt="Fauna work"
            width={377.29}
            height={232}
            style={{ objectFit: "contain", marginBottom: 10 }}
            priority
          />
        </div>

        {/* Jali Work */}
        <div
          style={{
            background: "#1F6F83",
            borderRadius: 24,
            padding: 18,
            width: 377.29,
            height: 232,
            textAlign: "center",
          }}
        >
          <Image
            src={jaliImage}
            alt="Jali work"
            width={377.29}
            height={232}
            style={{ objectFit: "contain", marginBottom: 10 }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Motif;
