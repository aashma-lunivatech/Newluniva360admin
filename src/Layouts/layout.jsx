import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const { Header, Sider, Content } = Layout;
import Logo from "../assets/images/logo.png";
import TopMainSection from "../Components/TopMainSection";
import { RouteDataAdmin } from "../Helpers/NavMenuData";
import HeaderSearch from "./HeaderSearch";
import ThemeChanger from "../Components/Settings/ThemeChanger";
const Mainlayout = ({}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sideBarDataNew, setSideBarDataNew] = useState([]);
  const [selecteddata, setSelectedData] = useState();
  useEffect(() => {
    setSideBarDataNew(RouteDataAdmin);
    console.log(sideBarDataNew, "sidebardatanew");
  });
  const HandleSelection = (e) => {
    console.log(e.key, "selected homa");
    setSelectedData(e.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <LayoutComponenets>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            minHeight: "100vh",
            position: "fixed",
            left: "0",
            top: "0",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            minWidth: "208px",
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SideBarTop>
              <div>
                <img src={Logo} />
              </div>
            </SideBarTop>
            {sideBarDataNew?.map((e) => {
              console.log(e, "selected data");
              return (
                <Menu.Item onClick={HandleSelection} key={e.id} item={e.label}>
                  <NavLink
                    to={e.pathName}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    {e.icon && (
                      <e.icon
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    )}
                    {collapsed ? null : (
                      <span
                        style={{
                          marginLeft: "8px",
                        }}
                      >
                        {e.label}
                      </span>
                    )}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className={collapsed ? "hundred" : "two-hundred"}>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              backgroundColor: "#fefefe",
              boxShadow: "1px 4px 16px #d6d2d2",
            }}
          >
            <HeaderComponent>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <HeaderSearch />
            </HeaderComponent>
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            {selecteddata == null && <TopMainSection />}
            {selecteddata == 1 ? <TopMainSection /> : ""}
            {selecteddata == 2 ? <ThemeChanger /> : ""}
            {selecteddata == 3 ? <ThemeChanger /> : ""}
            {selecteddata == 4 ? <ThemeChanger /> : ""}
          </Content>
        </Layout>
      </Layout>
    </LayoutComponenets>
  );
};

export default Mainlayout;

const LayoutComponenets = styled.div`
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;
const SideBarTop = styled.div`
  /* height: 100px; */
  height: auto;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  /* padding: 8px; */
  /* position: relative; */
  /* margin-bottom: 8px; */
  img {
    width: 100%;
  }
`;
const HeaderComponent = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
