import React from 'react';
import { Row, Col, Typography } from 'antd';
import FrontendSkills from './frontendSkills';
import BackendSkills from './backendSkill';
import DevOpsAndDesignSkills from './devopsSkills';

const { Title } = Typography;

const Skills: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        My Skills
      </Title>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <FrontendSkills />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <BackendSkills />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DevOpsAndDesignSkills />
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
