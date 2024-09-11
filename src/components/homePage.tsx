import React from 'react';
import { Button, Typography, Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, FileTextOutlined, ProjectOutlined, ToolOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '24px', background: '#f0f2f5' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={1} style={{ color: '#001529' }}>Welcome to My Portfolio</Title>
        <Paragraph style={{ fontSize: '18px', color: '#555' }}>
          Hi, I’m Cyrus Kimutai, a Full-Stack Developer passionate about building impactful applications.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<ArrowRightOutlined />}
          onClick={() => navigate('/projects')}
          style={{ marginTop: '20px' }}
        >
          View My Projects
        </Button>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#001529' }}>Skills & Expertise</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Frontend Development"
              bordered={false}
              cover={<img alt="frontend" src="https://via.placeholder.com/300x200" />}
            >
              <Paragraph>React, TypeScript, TailwindCSS, Ant Design</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Backend Development"
              bordered={false}
              cover={<img alt="backend" src="https://via.placeholder.com/300x200" />}
            >
              <Paragraph>Node.js, Express, PostgreSQL, Drizzle ORM</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="DevOps"
              bordered={false}
              cover={<img alt="devops" src="https://via.placeholder.com/300x200" />}
            >
              <Paragraph>Docker, CI/CD, Vercel, GitHub Actions</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#001529' }}>Featured Projects</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Project One"
              bordered={false}
              cover={<img alt="project1" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" />]}
            >
              <Paragraph>
                A brief description of the project, highlighting key features and technologies used.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Project Two"
              bordered={false}
              cover={<img alt="project2" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" />]}
            >
              <Paragraph>
                A brief description of the project, highlighting key features and technologies used.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Project Three"
              bordered={false}
              cover={<img alt="project3" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" />]}
            >
              <Paragraph>
                A brief description of the project, highlighting key features and technologies used.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button
          type="default"
          size="large"
          icon={<FileTextOutlined />}
          onClick={() => navigate('/about')}
        >
          Learn More About Me
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
