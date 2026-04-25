"use client";

import { useState } from "react";
import { Layout, theme, Grid, Drawer } from "antd";
import SidebarNav from "./SidebarNav";
import { HeaderBar } from "./HeaderBar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { token } = theme.useToken();
  const screens = useBreakpoint();

  const isMobile = !screens.md;
  const spacing = isMobile ? 12 : 24;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        /* ── Mobile: full-screen Drawer overlay ── */
        <Drawer
          placement="left"
          width={260}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          closable={false}
          styles={{
            body: { padding: 0, background: "#1A1D27" },
            header: { display: "none" },
          }}
        >
          <SidebarNav
            collapsed={false}
            onCollapse={() => {}}
            selectedKey={selectedKey}
            onSelect={(key) => {
              setSelectedKey(key);
              setMobileOpen(false);
            }}
            drawerMode
          />
        </Drawer>
      ) : (
        /* ── Tablet / Desktop: persistent sticky Sider ── */
        <SidebarNav
          collapsed={collapsed}
          onCollapse={setCollapsed}
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
        />
      )}

      <Layout>
        {/* Organism: Header */}
        <HeaderBar
          collapsed={collapsed}
          onToggle={() => {
            if (isMobile) {
              setMobileOpen((prev) => !prev);
            } else {
              setCollapsed((prev) => !prev);
            }
          }}
          isMobile={isMobile}
          mobileOpen={mobileOpen}
        />

        {/* Content Area */}
        <Content
          style={{
            margin: spacing,
            padding: spacing,
            background: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            minHeight: 360,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
