import { Layout } from "antd";
import { ToggleButton } from "../ToggleButon";
import UserProfile from "./UserProfile";

const { Header } = Layout;

export type HeaderBarProps = {
  collapsed: boolean;
  onToggle: () => void;
  currentPage?: string;
  isMobile?: boolean;
  mobileOpen?: boolean;
};

export function HeaderBar({
  collapsed,
  onToggle,
  isMobile,
  // mobileOpen,
  // currentPage,
}: HeaderBarProps) {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "0 1px 0 #E8E8E8",
        padding: "0 28px 0 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 60,
        gap: 8,
      }}
    >
      {/* Atom: Toggle */}
      <ToggleButton
        collapsed={collapsed}
        onToggle={onToggle}
        alwaysHamburger={isMobile}
      />

      <div style={{ flex: 1 }} />

      <UserProfile collapsed />
    </Header>
  );
}
