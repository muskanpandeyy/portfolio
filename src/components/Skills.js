import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled(Box)`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
`;

const SkillCard = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #112240;
  color: #8892b0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      category: "Data Analysis",
      skills: ["Python", "SQL", "Excel", "Statistical Analysis", "Data Cleaning"]
    },
    {
      category: "Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Dash"]
    },
    {
      category: "Databases",
      skills: [ "MySQL", "MongoDB", "Database Design", "ETL Processes"]
    },
    {
      category: "Web Development",
      skills: ["Html","Css","Javascript","React"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Jupyter Notebook", "AWS"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Typography variant="h4" sx={{ color: '#ccd6f6', mb: 4 }}>
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard elevation={3}>
                  <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
                    {category.category}
                  </Typography>
                  {category.skills.map((skill, skillIndex) => (
                    <Typography key={skillIndex} variant="body2" sx={{ mb: 1 }}>
                      {skill}
                    </Typography>
                  ))}
                </SkillCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 