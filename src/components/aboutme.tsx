import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography, Space, Divider, Card, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Container = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #F7F7F8;
`;

const StyledCard = styled(Card)`
  width: 300px; /* Fixed width */
  margin: 10px auto; /* Centered and with space around */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  background-color: #3A1078;
  color: #F7F7F8;
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }
`;

const StyledParagraph = styled(Paragraph)`
  max-width: 800px;
  text-align: left;
  background-color: #F7F7F8;
  border: 1px solid #3795BD;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background-color: #E6F7FF;
    border-color: #4E31AA;
  }
`;

const SkillsCard = styled(StyledCard)`
  max-width: 300px; /* Match the width of other cards */
  margin-top: 20px; /* Ensure space between sections */
`;

const InterestsCard = styled(StyledCard)`
  max-width: 300px; /* Match the width of other cards */
  margin-top: 20px; /* Ensure space between sections */
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Space direction="vertical" size="large" align="center">
        {/* Avatar and Name Section */}
        <StyledCard>
          <Avatar 
            size={120} 
            icon={<UserOutlined />} 
            style={{ backgroundColor: '#F7F7F8', color: '#3A1078' }} // Avatar background and icon color
          />
          <Title level={2} style={{ color: '#F7F7F8', marginTop: '16px' }}>
            Cyrus Kimutai
          </Title>
          <Text type="secondary" style={{ color: '#4E31AA' }}>
            Full-Stack Developer
          </Text>
        </StyledCard>

        {/* About Me Description */}
        <StyledParagraph>
          I am a passionate full-stack developer with expertise in building robust and scalable web applications. 
          My experience spans across various technologies such as React, TypeScript, TailwindCSS, Hono, and Drizzle ORM. 
          I love solving complex problems and building user-friendly interfaces.
        </StyledParagraph>

        {/* Divider */}
        <Divider style={{ borderColor: '#3795BD' }} />

        {/* Skills Section */}
        <SkillsCard>
          <Title level={4} style={{ color: '#3A1078' }}>Skills & Technologies</Title>
          <Paragraph>
            <Text strong style={{ color: '#3A1078' }}>Frontend:</Text>
            <List
              bordered
              dataSource={['React', 'TypeScript', 'TailwindCSS', 'Material-UI']}
              renderItem={item => (
                <List.Item style={{ borderRadius: '8px', marginBottom: '8px', backgroundColor: '#E6F7FF' }}>
                  {item}
                </List.Item>
              )}
              style={{ border: '1px solid #4E31AA', borderRadius: '8px' }}
            />
            <br />
            <Text strong style={{ color: '#3A1078' }}>Backend:</Text>
            <List
              bordered
              dataSource={['Node.js', 'Hono', 'Drizzle ORM', 'PostgreSQL']}
              renderItem={item => (
                <List.Item style={{ borderRadius: '8px', marginBottom: '8px', backgroundColor: '#E6F7FF' }}>
                  {item}
                </List.Item>
              )}
              style={{ border: '1px solid #4E31AA', borderRadius: '8px' }}
            />
            <br />
            <Text strong style={{ color: '#3A1078' }}>DevOps:</Text>
            <List
              bordered
              dataSource={['Docker', 'CI/CD', 'GitHub Actions']}
              renderItem={item => (
                <List.Item style={{ borderRadius: '8px', marginBottom: '8px', backgroundColor: '#E6F7FF' }}>
                  {item}
                </List.Item>
              )}
              style={{ border: '1px solid #4E31AA', borderRadius: '8px' }}
            />
            <br />
            <Text strong style={{ color: '#3A1078' }}>Other Tools:</Text>
            <List
              bordered
              dataSource={['Redux Toolkit', 'Stripe', 'Paystack']}
              renderItem={item => (
                <List.Item style={{ borderRadius: '8px', marginBottom: '8px', backgroundColor: '#E6F7FF' }}>
                  {item}
                </List.Item>
              )}
              style={{ border: '1px solid #4E31AA', borderRadius: '8px' }}
            />
          </Paragraph>
        </SkillsCard>

        <Divider style={{ borderColor: '#3795BD' }} />

        {/* Hobbies or Interests Section */}
        <InterestsCard>
          <Title level={4} style={{ color: '#3A1078' }}>Interests & Hobbies</Title>
          <Paragraph>
            Apart from coding, I enjoy exploring new technologies, contributing to open-source projects, and working on side projects.
            In my free time, I love playing chess, reading tech blogs, and cycling.
          </Paragraph>
        </InterestsCard>
      </Space>
    </Container>
  );
};

export default AboutMe;
