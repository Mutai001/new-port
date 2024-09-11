import React from 'react';
import { Button, Typography, Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, FileTextOutlined, ProjectOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const cardStyle: React.CSSProperties = {
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#F7F7F8',
  transition: 'all 0.3s ease',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3795BD',
  borderColor: '#3795BD',
  color: '#F7F7F8',
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '24px', backgroundColor: '#F7F7F8' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={1} style={{ color: '#3A1078' }}>Welcome to My Portfolio</Title>
        <Paragraph style={{ fontSize: '18px', color: '#555' }}>
          Hi, I’m Cyrus Kimutai, a Full-Stack Developer passionate about building impactful applications.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<ArrowRightOutlined />}
          onClick={() => navigate('/projects')}
          style={{ marginTop: '20px', ...buttonStyle }}
        >
          View My Projects
        </Button>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#3A1078' }}>Skills & Expertise</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Frontend Development"
              bordered={false}
              cover={<img alt="frontend" src="https://via.placeholder.com/300x200" />}
              style={cardStyle}
              hoverable
            >
              <Paragraph>React, TypeScript, TailwindCSS, Ant Design</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Backend Development"
              bordered={false}
              cover={<img alt="backend" src="https://via.placeholder.com/300x200" />}
              style={cardStyle}
              hoverable
            >
              <Paragraph>Node.js, Express, PostgreSQL, Drizzle ORM</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="DevOps"
              bordered={false}
              cover={<img alt="devops" src="https://via.placeholder.com/300x200" />}
              style={cardStyle}
              hoverable
            >
              <Paragraph>Docker, CI/CD, Vercel, GitHub Actions</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#3A1078' }}>Featured Projects</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={8}>
            <Card
              title="Project One"
              bordered={false}
              cover={<img alt="project1" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" style={{ color: '#3A1078' }} />]}
              style={cardStyle}
              hoverable
            >
              <Paragraph>
                A brief description of the project, highlighting key features and technologies used.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <Card
              title="Project Two"
              bordered={false}
              cover={<img alt="project2" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" style={{ color: '#3A1078' }} />]}
              style={cardStyle}
              hoverable
            >
              <Paragraph>
                A brief description of the project, highlighting key features and technologies used.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <Card
              title="Project Three"
              bordered={false}
              cover={<img alt="project3" src="https://via.placeholder.com/300x200" />}
              actions={[<ProjectOutlined key="view" style={{ color: '#3A1078' }} />]}
              style={cardStyle}
              hoverable
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
          icon={<FileTextOutlined style={{ color: '#3A1078' }} />}
          onClick={() => navigate('/about')}
          style={buttonStyle}
        >
          Learn More About Me
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
