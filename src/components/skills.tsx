import React from 'react';
import { Card, Typography, List, Tag, Row, Col, Divider } from 'antd';
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  SketchOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const frontendSkills = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'Material-UI',
  'Redux Toolkit',
  'Next.js',
];

const backendSkills = [
  'Node.js',
  'Hono',
  'Drizzle ORM',
  'PostgreSQL',
  'MongoDB',
  'Stripe Integration',
  'Paystack Integration',
];

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

const Skills: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#F7F7F8' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#3A1078' }}>
        My Skills
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {/* Frontend Skills */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title={
              <Title level={3} style={{ margin: 0, color: '#F7F7F8' }}>
                <CodeOutlined style={{ color: '#3795BD', marginRight: '8px' }} />
                Frontend Skills
              </Title>
            }
            bordered={false}
            style={{
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#3A1078',
              color: '#F7F7F8',
              padding: '16px',
              height: '100%',
            }}
          >
            <List
              dataSource={frontendSkills}
              renderItem={(skill) => (
                <List.Item>
                  <Tag color="#4E31AA" style={{ fontSize: '14px', padding: '5px 10px', borderRadius: '4px' }}>
                    {skill}
                  </Tag>
                </List.Item>
              )}
              style={{ padding: 0 }}
            />
          </Card>
        </Col>

        {/* Backend Skills */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title={
              <Title level={3} style={{ margin: 0, color: '#F7F7F8' }}>
                <DatabaseOutlined style={{ color: '#3795BD', marginRight: '8px' }} />
                Backend Skills
              </Title>
            }
            bordered={false}
            style={{
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#3A1078',
              color: '#F7F7F8',
              padding: '16px',
              height: '100%',
            }}
          >
            <List
              dataSource={backendSkills}
              renderItem={(skill) => (
                <List.Item>
                  <Tag color="green" style={{ fontSize: '14px', padding: '5px 10px', borderRadius: '4px' }}>
                    {skill}
                  </Tag>
                </List.Item>
              )}
              style={{ padding: 0 }}
            />
          </Card>
        </Col>

        {/* DevOps & Design Skills */}
        <Col xs={24} sm={12} md={8}>
          <Card
            title={
              <Title level={3} style={{ margin: 0, color: '#F7F7F8' }}>
                <CloudOutlined style={{ color: '#3795BD', marginRight: '8px' }} />
                DevOps Skills
                <Divider type="vertical" />
                <SketchOutlined style={{ color: '#3795BD', marginRight: '8px' }} />
                Design Skills
              </Title>
            }
            bordered={false}
            style={{
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#3A1078',
              color: '#F7F7F8',
              padding: '16px',
              height: '100%',
            }}
          >
            <Title level={4} style={{ color: '#F7F7F8' }}>DevOps Skills</Title>
            <List
              dataSource={devOpsSkills}
              renderItem={(skill) => (
                <List.Item>
                  <Tag color="volcano" style={{ fontSize: '14px', padding: '5px 10px', borderRadius: '4px' }}>
                    {skill}
                  </Tag>
                </List.Item>
              )}
              style={{ padding: 0 }}
            />
            <Divider />
            <Title level={4} style={{ color: '#F7F7F8' }}>Design Skills</Title>
            <List
              dataSource={designSkills}
              renderItem={(skill) => (
                <List.Item>
                  <Tag color="magenta" style={{ fontSize: '14px', padding: '5px 10px', borderRadius: '4px' }}>
                    {skill}
                  </Tag>
                </List.Item>
              )}
              style={{ padding: 0 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
