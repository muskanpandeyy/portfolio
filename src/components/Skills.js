import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled(Box)`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
  
  @media (max-width: 600px) {
    padding: 80px 0 60px 0;
  }
`;

const SkillCard = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #112240;
  color: #8892b0;
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Material-UI", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "Authentication", "JWT", "OAuth"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "MySQL", "AWS", "Google Cloud"]
    },
    {
      category: "Data Analysis",
      skills: ["Python", "SQL", "Excel", "Statistical Analysis", "Data Cleaning", "Pandas", "NumPy"]
    },
    {
      category: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Dash"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Postman"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management", "Agile", "Leadership"]
    },
    {
      category: "Manual Testing",
      skills: ["Test Case Design", "Bug Reporting", "User Acceptance Testing", "Regression Testing", "Black Box Testing"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#ccd6f6', 
            mb: 4,
            fontSize: { xs: '1.8rem', sm: '2.125rem', md: '2.125rem' },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid 
          container 
          spacing={isMobile ? 3 : 4}
          sx={{ px: { xs: 1, sm: 0 } }}
        >
          {skillCategories.map((category, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard elevation={3}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#64ffda', 
                      mb: 2,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {category.category}
                  </Typography>
                  {category.skills.map((skill, skillIndex) => (
                    <Typography 
                      key={skillIndex} 
                      variant="body2" 
                      sx={{ 
                        mb: 1,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' }
                      }}
                    >
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