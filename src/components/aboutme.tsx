import React from 'react';
import { Avatar, Typography, Space, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const AboutMe: React.FC = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f0f2f5' }}>
      <Space direction="vertical" size="large" align="center">
        {/* Avatar and Name Section */}
        <Avatar size={120} icon={<UserOutlined />} />
        <Title level={2}>Cyrus Kimutai</Title>
        <Text type="secondary">Full-Stack Developer</Text>

        {/* About Me Description */}
        <Paragraph style={{ maxWidth: '800px', textAlign: 'center' }}>
          I am a passionate full-stack developer with expertise in building robust and scalable web applications. 
          My experience spans across various technologies such as React, TypeScript, TailwindCSS, Hono, and Drizzle ORM. 
          I love solving complex problems and building user-friendly interfaces.
        </Paragraph>

        {/* Divider */}
        <Divider />

        {/* Skills Section */}
        <Title level={4}>Skills & Technologies</Title>
        <Paragraph>
          <Text strong>Frontend:</Text> React, TypeScript, TailwindCSS, Material-UI <br />
          <Text strong>Backend:</Text> Node.js, Hono, Drizzle ORM, PostgreSQL <br />
          <Text strong>DevOps:</Text> Docker, CI/CD, GitHub Actions <br />
          <Text strong>Other Tools:</Text> Redux Toolkit, Stripe, Paystack
        </Paragraph>

        <Divider />

        {/* Hobbies or Interests Section */}
        <Title level={4}>Interests & Hobbies</Title>
        <Paragraph>
          Apart from coding, I enjoy exploring new technologies, contributing to open-source projects, and working on side projects.
          In my free time, I love playing chess, reading tech blogs, and cycling.
        </Paragraph>
      </Space>
    </div>
  );
};

export default AboutMe;
