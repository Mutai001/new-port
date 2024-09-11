// import React from 'react';
import { Card, Row, Col, Typography, Tag, Button } from 'antd';

const { Title, Paragraph } = Typography;

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Car Rental Management System',
    description: 'A full-stack web application for managing car rentals with user and admin dashboards.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Stripe'],
    link: 'https://github.com/Mutai001/car-rental-management',
  },
  {
    title: 'Restaurant Management System',
    description: 'An e-commerce platform for ordering food with payment integration and admin controls.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Paystack'],
    link: 'https://github.com/Mutai001/restaurant-management',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects, skills, and experiences.',
    techStack: ['React', 'TypeScript', 'Ant Design', 'Vercel'],
    link: 'https://github.com/Mutai001/portfolio-website',
  },
  {
    title: 'Tech Giants E-commerce',
    description: 'An electronics e-commerce store with dynamic product displays and a fully functional cart.',
    techStack: ['React', 'TailwindCSS', 'Firebase', 'Redux'],
    link: 'https://github.com/Mutai001/tech-giants-store',
  },
];

const cardStyle: React.CSSProperties = {
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#F7F7F8',
  transition: 'all 0.3s ease',
};


const tagStyle: React.CSSProperties = {
  margin: '4px',
  backgroundColor: '#4E31AA',
  color: '#F7F7F8',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3795BD',
  borderColor: '#3795BD',
  color: '#F7F7F8',
};

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#F7F7F8' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#3A1078' }}>
        Projects
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.title}>
            <Card
              title={project.title}
              bordered={false}
              style={cardStyle}
              bodyStyle={{ padding: '16px' }}
              hoverable
              actions={[
                <Button
                  type="primary"
                  href={project.link}
                  target="_blank"
                  style={buttonStyle}
                >
                  View Project
                </Button>,
              ]}
            >
              <Paragraph>{project.description}</Paragraph>
              <Paragraph>
                {project.techStack.map((tech) => (
                  <Tag style={tagStyle} key={tech}>
                    {tech}
                  </Tag>
                ))}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
