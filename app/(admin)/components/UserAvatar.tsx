import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";

type UserAvatarProps = {
  name: string;
  src?: string;
  size?: number;
};

export function UserAvatar({ name, src, size = 36 }: UserAvatarProps) {
  return (
    <Tooltip title={name} placement="right">
      <Avatar
        size={size}
        src={src}
        icon={!src && <UserOutlined />}
        style={{
          // background: "linear-gradient(135deg, #667eea, #764ba2)",
          cursor: "pointer",
        }}
      >
        {!src && name?.charAt(0).toUpperCase()}
      </Avatar>
    </Tooltip>
  );
}
