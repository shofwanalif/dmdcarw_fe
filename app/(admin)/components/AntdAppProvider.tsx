"use client";

import { App } from "antd";

export function AntdAppProvider({ children }: { children: React.ReactNode }) {
  return <App>{children}</App>;
}
