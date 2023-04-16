import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import HeaderSearch from "./HeaderSearch";
import styled from "styled-components";
import { Layout } from "antd";
const HeaderComponent = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          backgroundColor: "#fefefe",
          boxShadow: "1px 4px 16px #d6d2d2",
        }}
      >
        <HeaderComponents>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <HeaderSearch />
        </HeaderComponents>
      </Header>
    </div>
  );
};

export default HeaderComponent;
const HeaderComponents = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
