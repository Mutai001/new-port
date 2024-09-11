// import React, { useState } from 'react';
import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  ContactsOutlined,
  MenuFoldOutlined,
  FileTextOutlined,
  BarsOutlined
} from '@ant-design/icons';
import { Button, Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';

const { Sider, Content, Header } = Layout;

const items: MenuProps['items'] = [
  { key: '1', icon: <HomeOutlined />, label: 'Home' },
  { key: '2', icon: <UserOutlined />, label: 'About Me' },
  { key: '3', icon: <CodeOutlined />, label: 'Projects' },
  {
    key: 'sub1',
    label: 'Skills',
    icon: <FileTextOutlined />,
    children: [
      { key: '4', label: 'Frontend' },
      { key: '5', label: 'Backend' },
      { key: '6', label: 'DevOps' },
    ],
  },
  {
    key: '7',
    icon: <ContactsOutlined />,
    label: 'Contact',
  },
];

const PortfolioApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          backgroundColor: '#3A1078',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
        <div style={{ color: '#F7F7F8', marginRight: '16px' }}>Portfolio</div>
      </Header>

      <Layout style={{ marginTop: 64 }}>
        {showMenu && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            theme="dark"
            style={{
              position: 'fixed',
              height: '100%',
              left: 0,
              top: 64,
              zIndex: 2,
              backgroundColor: '#3A1078',
            }}
          >
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </Sider>
        )}

        <Layout style={{ marginLeft: showMenu ? 256 : 0, transition: 'margin-left 0.3s' }}>
          <Content
            style={{
              padding: '24px',
              margin: 0,
              minHeight: 280,
              backgroundColor: '#F7F7F8',
            }}
          >
            {/* Content goes here */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PortfolioApp;
