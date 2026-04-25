import { ReactNode } from "react";

export type NavItemProps = {
  key: string;
  icon?: ReactNode;
  label: string;
  children?: NavItemProps[];
};

// Factory function untuk Antd Menu item
export const createNavItem = ({
  key,
  icon,
  label,
  children,
}: NavItemProps) => ({
  key,
  icon,
  label,
  children,
});

// Type untuk Komponen UI
export type NavMenuItemProps = {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
};

// Komponen visual
export function NavMenuItem({
  icon,
  label,
  active = false,
  collapsed = false,
}: NavMenuItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        borderRadius: 8,
        cursor: "pointer",
        background: active ? "rgba(102,126,234,0.15)" : "transparent",
        color: active ? "#667eea" : "rgba(255,255,255,0.65)",
        transition: "all 0.2s",
      }}
    >
      {icon}
      {!collapsed && <span style={{ fontSize: 14 }}>{label}</span>}
    </div>
  );
}
