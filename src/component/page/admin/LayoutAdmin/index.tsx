"use client";

import React, { ReactNode } from "react";
import { UserOutlined, CarOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const { Header, Content, Sider } = Layout;

export const LayoutAdmin: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  const tourKey =
    pathname === "/admin" ||
    pathname === "/admin/tour/add" ||
    pathname.includes("/admin/tour/edit")
      ? pathname
      : "/admin";

  const menuList = [
    {
      key: tourKey,
      icon: React.createElement(CarOutlined),
      label: "Tour",
    },
    {
      key: "/admin/user",
      icon: React.createElement(UserOutlined),
      label: "User",
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }}>
          <Menu.Item>
            <Link href="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Layout
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              defaultSelectedKeys={[pathname]}
              mode="inline"
              style={{ height: "100%" }}
              theme="dark"
            >
              {menuList.map((menu) => {
                return (
                  <Menu.Item key={menu?.key}>
                    <Link href={menu.key}>{menu.label}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
