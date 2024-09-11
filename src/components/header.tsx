import React from 'react';
import { Layout, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title, Text } = Typography;

const PortfolioHeader: React.FC = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#001529', // Ant Design's default dark blue
        color: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: '16px' }} />
        <div>
          <Title level={3} style={{ color: '#fff', margin: 0 }}>
            Cyrus Kimutai
          </Title>
          <Text style={{ color: '#aaa' }}>Full-Stack Developer</Text>
        </div>
      </div>

      <div>
        <Text style={{ color: '#fff' }}>Welcome to my portfolio!</Text>
      </div>
    </Header>
  );
};

export default PortfolioHeader;
