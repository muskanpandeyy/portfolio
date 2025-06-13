import React from 'react';
import {  Container, Grid } from '@mui/material';
import styled from 'styled-components';

const AboutSection = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
`;

const Title = styled.h2`
  color: #ccd6f6;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 600;
`;

const TextBlock = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 24px;
  text-align: justify;
`;

const Heading = styled.div`
  color: #ccd6f6;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SkillsTitle = styled.h3`
  color: #ccd6f6;
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 1.25rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
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
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <TextBlock>
              I am a recently graduated Engineer with a strong passion for data-driven decision-making and analytical problem-solving. With a background in Computer Science, I have developed a solid foundation in technical thinking and quantitative analysis.
            </TextBlock>
            
            <TextBlock>
              Over the past few months, I have completed several hands-on data analytics projects involving real-world datasets, where I used tools like Python (Pandas, NumPy, Matplotlib), SQL, Excel, and Power BI to extract insights and build dashboards. These projects helped me transform raw data into clear, actionable insights — a skill I am eager to bring into a professional role.
            </TextBlock>
            
            <TextBlock>
              I am now actively looking for opportunities where I can contribute as a Data Analyst, continue learning, and make a meaningful impact through data storytelling and analysis. I am particularly interested in roles that combine business understanding with analytical thinking.
            </TextBlock>

            <SkillsTitle>
              Key Areas of Expertise:
            </SkillsTitle>
            
            <SkillsList>
              <SkillItem>Data Analysis & Visualization</SkillItem>
              <SkillItem>Statistical Modeling</SkillItem>
              <SkillItem>SQL & Database Management</SkillItem>
              <SkillItem>Python Programming</SkillItem>
              <SkillItem>Business Intelligence Tools</SkillItem>
              <SkillItem>Version control</SkillItem>
            </SkillsList>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 
