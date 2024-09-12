import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  ContactsOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { Button, Menu, Layout } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu; // Import SubMenu from Menu

const PortfolioApp: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Header
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        backgroundColor: '#3A1078',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          type="primary"
          onClick={toggleMenu}
          style={{
            marginLeft: '16px',
            backgroundColor: '#4E31AA',
            borderColor: '#4E31AA',
          }}
        >
          {showMenu ? <MenuFoldOutlined style={{ color: '#F7F7F8' }} /> : <BarsOutlined style={{ color: '#F7F7F8' }} />}
        </Button>
        <div style={{ color: '#F7F7F8', fontSize: '20px' }}>Portfolio</div>
      </div>
      {showMenu && (
        <Menu
          mode="horizontal"
          theme="dark"
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#3A1078',
          }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/about">About Me</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CodeOutlined />}>
            <Link to="/projects">Projects</Link>
          </Menu.Item>

          {/* Submenu for Skills */}
          <SubMenu key="sub1" icon={<FileTextOutlined />} title="Skills">
            <Menu.Item key="4">
              <Link to="/skills#frontend">Frontend</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/skills#backend">Backend</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/skills#devops">DevOps</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="7" icon={<ContactsOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
};

export default PortfolioApp;
