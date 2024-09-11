import React from 'react';
import { Card, Typography, List, Tag, Divider } from 'antd';
import { CloudOutlined, SketchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const devOpsSkills = [
  'Docker',
  'CI/CD',
  'GitHub Actions',
  'AWS',
  'Heroku',
];

const designSkills = [
  'Figma',
  'Adobe XD',
  'Responsive Design',
];

const DevOpsAndDesignSkills: React.FC = () => {
  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          <CloudOutlined /> DevOps Skills &nbsp; | &nbsp; <SketchOutlined /> Design Skills
        </Title>
      }
      bordered={false}
      style={{ marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
    >
      {/* DevOps Skills */}
      <Title level={4}>DevOps Skills</Title>
      <List
        dataSource={devOpsSkills}
        renderItem={(skill) => (
          <List.Item>
            <Tag color="volcano" style={{ fontSize: '14px', padding: '5px 10px' }}>
              {skill}
            </Tag>
          </List.Item>
        )}
      />

      <Divider />

      {/* Design Skills */}
      <Title level={4}>Design Skills</Title>
      <List
        dataSource={designSkills}
        renderItem={(skill) => (
          <List.Item>
            <Tag color="magenta" style={{ fontSize: '14px', padding: '5px 10px' }}>
              {skill}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DevOpsAndDesignSkills;
