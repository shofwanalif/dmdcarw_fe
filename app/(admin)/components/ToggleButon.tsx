import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";

export type ToggleButtonProps = {
  collapsed: boolean;
  onToggle: () => void;
  alwaysHamburger?: boolean;
};

export const ToggleButton = ({
  collapsed,
  onToggle,
  alwaysHamburger,
}: ToggleButtonProps) => (
  <Button
    type="text"
    icon={
      alwaysHamburger ? (
        <MenuOutlined />
      ) : collapsed ? (
        <MenuUnfoldOutlined />
      ) : (
        <MenuFoldOutlined />
      )
    }
    onClick={onToggle}
    style={{ fontSize: 16, width: 40, height: 40 }}
  />
);
