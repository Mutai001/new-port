import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined, ToolOutlined, MessageOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import PortfolioHeader from './components/header';
import PortfolioFooter from './components/';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactSection from './ContactSection';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <HeaderSection />
        </Header>

        <Layout>
          <Layout.Sider width={256} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['home']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<UserOutlined />}>
                <Link to="/about">About Me</Link>
              </Menu.Item>
              <Menu.Item key="projects" icon={<ProjectOutlined />}>
                <Link to="/projects">Projects</Link>
              </Menu.Item>
              <Menu.Item key="skills" icon={<ToolOutlined />}>
                <Link to="/skills">Skills</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<MessageOutlined />}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
          </Layout.Sider>

          <Layout>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              <FooterSection />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
