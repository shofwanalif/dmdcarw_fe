"use client";

import React from "react";
import { ConfigProvider, App } from "antd";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#CC0000",
          colorBgContainer: "#FFFFFF",
          colorBgLayout: "#F7F8FA",
          fontFamily: "'Inter', sans-serif",
        },
      }}
    >
      <div style={styles.root}>
        {/* Background decorative blobs */}
        <div style={styles.blobTopRight} />
        <div style={styles.blobBottomLeft} />

        {/* Card wrapper */}
        <div style={styles.card}>
          <App>
            <AuthProvider>
              {/* Logo / Brand */}
              <div style={styles.brand}>
                <Link href="/" style={styles.logoLink}>
                  <Image
                    src="/assets/03.png"
                    alt="Logo"
                    width={160}
                    height={60}
                    style={styles.logoImage}
                    priority
                  />
                </Link>
              </div>

              {children}
            </AuthProvider>
          </App>
        </div>
      </div>
    </ConfigProvider>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F7F8FA",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
    padding: "24px",
  },
  blobTopRight: {
    position: "absolute",
    top: "-120px",
    right: "-120px",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(204,0,0,0.08) 0%, rgba(204,0,0,0.03) 60%, transparent 100%)",
    opacity: 1,
    pointerEvents: "none",
  },
  blobBottomLeft: {
    position: "absolute",
    bottom: "-100px",
    left: "-100px",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(204,0,0,0.06) 0%, rgba(204,0,0,0.02) 60%, transparent 100%)",
    opacity: 1,
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    zIndex: 1,
    background: "#FFFFFF",
    borderRadius: "16px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
    padding: "40px 36px",
    width: "100%",
    maxWidth: "500px",
  },
  brand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
  },
  logoLink: {
    display: "inline-flex",
  },
  logoImage: {
    objectFit: "contain",
    height: "auto",
  },
};
