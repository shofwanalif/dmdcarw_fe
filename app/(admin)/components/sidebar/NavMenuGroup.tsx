import { Typography } from "antd";
import { ReactNode } from "react";
import { createNavItem } from "./NavMenuItem";

const { Text } = Typography;

// Type untuk Nav Item (reuse)
export type NavItemProps = {
  key: string;
  icon?: ReactNode;
  label: string;
  children?: NavItemProps[];
};

// Type untuk Nav Group
export type NavGroupProps = {
  label: string;
  items: NavItemProps[];
};

// Factory untuk Ant Design Menu Group
export const createNavGroup = ({ label, items }: NavGroupProps) => ({
  type: "group" as const,
  label: (
    <Text
      style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.3)",
        letterSpacing: "0.08em",
      }}
    >
      {label.toUpperCase()}
    </Text>
  ),
  children: items.map((item) => createNavItem(item)),
});

// Komponen Visual (opsional)
export type NavMenuGroupProps = {
  label: string;
  children: ReactNode;
};

export function NavMenuGroup({ label, children }: NavMenuGroupProps) {
  return (
    <div>
      <Text
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.3)",
          padding: "12px 20px 4px",
          display: "block",
        }}
      >
        {label.toUpperCase()}
      </Text>
      {children}
    </div>
  );
}
