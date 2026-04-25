// import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
import DashboardLayout from "@/app/(admin)/components/sidebar/DashboardLayout";
import ConfigProvider from "antd/es/config-provider";
import { AntdAppProvider } from "@/app/(admin)/components/AntdAppProvider";
import { AuthProvider } from "../../context/AuthContext";
import { AuthGate } from "@/app/(admin)/components/AuthGate";

export default async function AdminLayout({
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
          // borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
        },
        components: {
          Menu: {
            darkItemBg: "#1A1D27",
            darkItemSelectedBg: "rgba(204, 0, 0, 0.5)",
            darkItemSelectedColor: "#FFFFFF",
            darkItemColor: "rgba(255,255,255,0.55)",
            darkSubMenuItemBg: "#222636",
          },
          Layout: {
            siderBg: "#1A1D27",
            headerBg: "#FFFFFF",
          },
        },
      }}
    >
      <AntdAppProvider>
        <AuthProvider>
          <AuthGate>
            <DashboardLayout>{children}</DashboardLayout>
          </AuthGate>
        </AuthProvider>
      </AntdAppProvider>
    </ConfigProvider>
  );
}
