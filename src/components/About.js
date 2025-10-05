import React from 'react';
import {  Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';

const AboutSection = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
  
  @media (max-width: 600px) {
    padding: 80px 0 60px 0;
  }
`;

const Title = styled.h2`
  color: #ccd6f6;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 600;
  
  @media (max-width: 900px) {
    text-align: center;
  }
  
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const TextBlock = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 24px;
  text-align: justify;
  
  @media (max-width: 900px) {
    text-align: center;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

const SkillsTitle = styled.h3`
  color: #ccd6f6;
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 1.25rem;
  
  @media (max-width: 900px) {
    text-align: center;
  }
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-top: 28px;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const SkillItem = styled.li`
  color: #8892b0;
  position: relative;
  padding-left: 25px;
  font-size: 1rem;
  line-height: 1.8;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
  }
  
  @media (max-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.6;
    padding-left: 20px;
  }
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Grid container spacing={isMobile ? 4 : 6}>
          <Grid item xs={12} md={7}>
            <TextBlock>
              I am a recently graduated Engineer with a strong passion for both data-driven decision-making and full-stack web development. With a background in Computer Science, I have developed a solid foundation in technical thinking, quantitative analysis, and modern software development practices.
            </TextBlock>
            
            <TextBlock>
              Over the past few months, I have completed several hands-on projects spanning data analytics and full-stack web development. My data projects involve real-world datasets using tools like Python (Pandas, NumPy, Matplotlib), SQL, Excel, and Power BI to extract insights and build dashboards. Simultaneously, I've built full-stack applications using React, Node.js, MongoDB, and modern web technologies.
            </TextBlock>
            
            <TextBlock>
              I am now actively looking for opportunities where I can contribute as a Full-Stack Developer or Data Analyst, continue learning, and make a meaningful impact through both data storytelling and innovative web solutions. I am particularly interested in roles that combine analytical thinking with modern software development practices.
            </TextBlock>

            <SkillsTitle>
              Key Areas of Expertise:
            </SkillsTitle>
            
            <SkillsList>
              <SkillItem>Full-Stack Web Development</SkillItem>
              <SkillItem>Data Analysis & Visualization</SkillItem>
              <SkillItem>Frontend & Backend Technologies</SkillItem>
              <SkillItem>Database Design & Management</SkillItem>
              <SkillItem>RESTful APIs & Modern Frameworks</SkillItem>
              <SkillItem>Responsive Design & UI/UX</SkillItem>
            </SkillsList>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 
