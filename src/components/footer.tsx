import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const PortfolioFooter: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: '#001529', // Same dark blue background for consistency
        color: '#fff',
        padding: '20px 50px',
      }}
    >
      <Space direction="vertical" align="center" size="middle">
        <div>
          <Space size="large">
            <a href="https://github.com/Mutai001" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
            <a href="mailto:cyrus@gmail.com">
              <MailOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
          </Space>
        </div>
        <Text style={{ color: '#aaa' }}>© 2024 Cyrus Kimutai. All Rights Reserved.</Text>
      </Space>
    </Footer>
  );
};

export default PortfolioFooter;
