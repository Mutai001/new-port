// import React from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, Space, notification } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const onFinish = (values: never) => {
    console.log('Received values:', values);
    // Show success notification
    notification.success({
      message: 'Message Sent!',
      description: 'Thank you for getting in touch, I will get back to you shortly.',
    });
  };

  const onRecaptchaChange = (value: string | null) => {
    console.log('ReCAPTCHA value:', value);
    // Handle ReCAPTCHA verification here
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        Get in Touch
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {/* Contact Info Section */}
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Title level={4} style={{ margin: 0 }}>
                Contact Information
              </Title>
            }
            bordered={false}
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <Space direction="vertical" size="large">
              <Paragraph>
                <MailOutlined /> Email: <a href="mailto:cyrus@gmail.com">cyrus@gmail.com</a>
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> Phone: <a href="tel:+0722227154">0722227154</a>
              </Paragraph>
              <Paragraph>
                <EnvironmentOutlined /> Location: 30 Kutus
              </Paragraph>
              <Paragraph>
                <LinkedinOutlined /> LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
              </Paragraph>
              <Paragraph>
                <GithubOutlined /> GitHub: <a href="https://github.com/Mutai001">github.com/Mutai001</a>
              </Paragraph>
            </Space>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col xs={24} md={12} lg={8}>
          <Card
            title={
              <Title level={4} style={{ margin: 0 }}>
                Send Me a Message
              </Title>
            }
            bordered={false}
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
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
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={onRecaptchaChange}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
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
