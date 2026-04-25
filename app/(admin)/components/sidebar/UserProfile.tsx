"use client";

import { Typography, Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { UserAvatar } from "../UserAvatar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd/es/menu";

const { Text } = Typography;

export type UserProfileProps = {
  collapsed: boolean;
};

const UserProfile = ({ collapsed }: UserProfileProps) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const name = (user?.name as string) ?? "User";

  const handleMenuClick: MenuProps["onClick"] = async ({ key }) => {
    if (key === "logout") {
      await logout();
      router.replace("/login");
    }
  };

  const dropdownItems: MenuProps["items"] = [
    { key: "logout", icon: <LogoutOutlined />, label: "Logout", danger: true },
  ];

  return (
    <Dropdown
      menu={{ items: dropdownItems, onClick: handleMenuClick }}
      placement="topRight"
      trigger={["click"]}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: 8,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <UserAvatar name={name} />
        {!collapsed && (
          <div style={{ overflow: "hidden" }}>
            <Text
              strong
              style={{
                color: "#fff",
                display: "block",
                fontSize: 13,
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </Text>
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default UserProfile;
