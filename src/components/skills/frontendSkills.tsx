import React from 'react';
import { Card, Typography, List, Tag } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const frontendSkills = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'Material-UI',
  'Redux Toolkit',
  'Next.js',
];

const FrontendSkills: React.FC = () => {
  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          <CodeOutlined /> Frontend Skills
        </Title>
      }
      bordered={false}
      style={{ marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
    >
      <List
        dataSource={frontendSkills}
        renderItem={(skill) => (
          <List.Item>
            <Tag color="blue" style={{ fontSize: '14px', padding: '5px 10px' }}>
              {skill}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default FrontendSkills;
