"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AppLogo } from "../AppLogo";
import UserProfile from "./UserProfile";
import { createNavGroup } from "./NavMenuGroup";

const { Sider } = Layout;

const navConfig = [
  createNavGroup({
    label: "Main",
    items: [
      { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "users", icon: <UserOutlined />, label: "Users" },
    ],
  }),
  createNavGroup({
    label: "Management",
    items: [
      { key: "products", icon: <ShoppingOutlined />, label: "Products" },
      { key: "orders", icon: <FileTextOutlined />, label: "Orders" },
      { key: "reports", icon: <BarChartOutlined />, label: "Reports" },
    ],
  }),
  createNavGroup({
    label: "System",
    items: [{ key: "settings", icon: <SettingOutlined />, label: "Settings" }],
  }),
];

export type SidebarNavProps = {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  selectedKey: string;
  onSelect: (key: string) => void;
  drawerMode?: boolean;
};

const SidebarNav = ({
  collapsed,
  onCollapse,
  selectedKey,
  onSelect,
  drawerMode = false,
}: SidebarNavProps) => {
  const innerContent = (
    <>
      {/* Atom: Logo */}
      <AppLogo collapsed={drawerMode ? false : collapsed} />

      {/* Molecule Groups → Menu */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => onSelect(key)}
        items={navConfig}
        style={{
          border: "none",
          flex: 1,
          overflowY: "auto",
          padding: "8px 0",
        }}
      />

      {/* Molecule: User Profile */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: 8 }}
      >
        <UserProfile collapsed={drawerMode ? false : collapsed} />
      </div>
    </>
  );

  if (drawerMode) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#1A1D27",
        }}
      >
        {innerContent}
      </div>
    );
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      trigger={null}
      width={260}
      collapsedWidth={64}
      style={{
        background: "#1A1D27",
        boxShadow: "2px 0 12px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {innerContent}
    </Sider>
  );
};

export default SidebarNav;
