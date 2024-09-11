import React from 'react';
import { Card, Typography, List, Tag } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';

const { Title } = Typography;

const backendSkills = [
  'Node.js',
  'Hono',
  'Drizzle ORM',
  'PostgreSQL',
  'MongoDB',
  'Stripe Integration',
  'Paystack Integration',
];

const BackendSkills: React.FC = () => {
  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          <DatabaseOutlined /> Backend Skills
        </Title>
      }
      bordered={false}
      style={{ marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
    >
      <List
        dataSource={backendSkills}
        renderItem={(skill) => (
          <List.Item>
            <Tag color="green" style={{ fontSize: '14px', padding: '5px 10px' }}>
              {skill}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default BackendSkills;
