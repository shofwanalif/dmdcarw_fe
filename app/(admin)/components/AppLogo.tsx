"use client";

import { Typography } from "antd";
import Image from "next/image";

const { Text } = Typography;

export type AppLogoProps = {
  collapsed: boolean;
};

export function AppLogo({ collapsed }: AppLogoProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "flex-start",
        gap: 10,
        padding: collapsed ? "14px 0" : "12px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "padding 0.2s",
      }}
    >
      {/* Logo PNG — ukuran menyesuaikan collapsed state */}
      <Image
        src="/assets/03.png"
        alt="MJA Group Logo"
        width={collapsed ? 36 : 32}
        height={collapsed ? 36 : 32}
        style={{
          objectFit: "contain",
          flexShrink: 0,
          transition: "height 0.2s",
          filter: "brightness(1.1)",
        }}
      />
      {!collapsed && (
        <Text
          strong
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
          }}
        >
          MJA Group
        </Text>
      )}
    </div>
  );
}
