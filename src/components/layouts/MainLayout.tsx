import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "home",
    label: <NavLink to={`/`}>Home</NavLink>,
  },
  {
    key: "about-us",
    label: <NavLink to={`/about-us`}>About Us</NavLink>,
  },
  {
    key: "all-products",
    label: <NavLink to={`/all-products`}>All Products</NavLink>,
  },
];

const MainLayout = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content className="min-h-[80vh]" style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
