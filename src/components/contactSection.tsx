import React from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, Space, notification } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

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

const ContactSection: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Received values:', values);
    // Show success notification
    notification.success({
      message: 'Message Sent!',
      description: 'Thank you for getting in touch, I will get back to you shortly.',
    });
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#F7F7F8' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#3A1078' }}>
        Get in Touch
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {/* Contact Info Section */}
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Title level={4} style={{ margin: 0, color: '#3A1078' }}>
                Contact Information
              </Title>
            }
            bordered={false}
            style={cardStyle}
            hoverable
          >
            <Space direction="vertical" size="large">
              <Paragraph>
                <MailOutlined style={{ color: '#3A1078' }} /> Email: <a href="mailto:cyrus@gmail.com">cyrus@gmail.com</a>
              </Paragraph>
              <Paragraph>
                <PhoneOutlined style={{ color: '#3A1078' }} /> Phone: <a href="tel:+0722227154">0722227154</a>
              </Paragraph>
              <Paragraph>
                <EnvironmentOutlined style={{ color: '#3A1078' }} /> Location: 30 Kutus
              </Paragraph>
              <Paragraph>
                <LinkedinOutlined style={{ color: '#3A1078' }} /> LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
              </Paragraph>
              <Paragraph>
                <GithubOutlined style={{ color: '#3A1078' }} /> GitHub: <a href="https://github.com/Mutai001">github.com/Mutai001</a>
              </Paragraph>
            </Space>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Title level={4} style={{ margin: 0, color: '#3A1078' }}>
                Send Me a Message
              </Title>
            }
            bordered={false}
            style={cardStyle}
            hoverable
          >
            <Form
              layout="vertical"
              onFinish={onFinish}
              style={{ width: '100%' }}
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Your Email"
                rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block style={buttonStyle}>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
