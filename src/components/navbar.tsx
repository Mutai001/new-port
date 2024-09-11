import React, { useState } from 'react';
import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  ContactsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
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

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default PortfolioApp;
