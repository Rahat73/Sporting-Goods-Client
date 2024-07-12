import { Col, Layout, Menu, Row } from "antd";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "home",
    label: <NavLink to={`/`}>Home</NavLink>,
  },
  {
    key: "all-products",
    label: <NavLink to={`/all-products`}>All Products</NavLink>,
  },
  {
    key: "manage-products",
    label: <NavLink to={`/manage-products`}>Manage Products</NavLink>,
  },
  {
    key: "cart",
    label: <NavLink to={`/cart`}>Cart</NavLink>,
  },
  {
    key: "about-us",
    label: <NavLink to={`/about-us`}>About Us</NavLink>,
  },
];

const MainLayout = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} className="w-[300px]" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: "end" }}
        />
      </Header>
      <Content className="min-h-[80vh]">
        <div>
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{ textAlign: "center" }}
        className="bg-slate-800 text-white"
      >
        <Row>
          <Col span={12}>
            <p>Copyright © 2024. All Rights Reserved.</p>
            <p>Sporting Goods</p>
          </Col>
          <Col span={12} className="flex justify-center">
            <Row className="text-3xl space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
