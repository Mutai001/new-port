import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/homePage';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Skills from './components/skills';
import ContactSection from './components/contactSection';
import PortfolioApp from './components/navbar'; // Ensure this path is correct
import PortfolioFooter from './components/footer'; // Ensure this path is correct

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0 }}>
          <PortfolioApp />
        </Header>
        <Layout style={{ marginTop: 64 }}>
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
            {/* Use the PortfolioFooter component here */}
            <PortfolioFooter />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
