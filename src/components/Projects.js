import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button, Chip, Dialog } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsSection = styled(Box)`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
  
  /* Add smooth scrolling for the projects container */
  .projects-container {
    scrollbar-width: thin;
    scrollbar-color: #64ffda #112240;
    
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #112240;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #64ffda;
      border-radius: 4px;
    }
  }
`;

const ProjectCard = styled(Card)`
  background-color: #112240;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Projects = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handlePreviewOpen = (image) => {
    setSelectedImage(image);
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };

  const projects = [
    {
      title: "Blinkit Grocery Sales Dashboard",
      description: (
        <>
          Blinkit Grocery Sales Dashboard is a comprehensive Power BI project analyzing over{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
            
            }}
          >
            8.5k
            
          </Typography>
          {' '}orders. This interactive dashboard visualizes key metrics including revenue trends, product performance, and customer behavior patterns. Using Excel for data cleaning and Power BI for visualization, it transforms raw sales data into actionable insights, demonstrating strong data analysis and visualization skills.
        </>
      ),
      technologies: ["Excel", "Power BI", "Github"],
      github: "https://github.com/muskanpandeyy/Blinkit-sales-dashboard",
      live: "/blinkit-dashboard.jpg",
      isImage: true
    },
    {
      title: "Student Depression Dashboard",
      description: (
        <>
          Student Depression Dashboard explores mental health patterns among{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
             
            }}
          >
            27k+
          </Typography>
          {' '}students using a dataset from Kaggle. The project analyzes factors like academic pressure, sleep habits, diet, and financial stress to uncover their correlation with depression. Cleaned and transformed in Excel, explored with SQL, and visualized in Power BI, the dashboard highlights critical insights—such as how reduced sleep and high academic load contribute to mental health challenges. An end-to-end analysis combining data science and empathy-driven storytelling.
        </>
      ),
      technologies: ["MySQL", "Power BI", "Github"],
      github: "https://github.com/muskanpandeyy/StudentdepressionDashborad",
      live: "/student-depression-dashboard.jpg",
      isImage: true
    },
    {
      title: "Sales Dashboard Analysis",
      description: (
        <>
          Sales Dashboard with Python & Dash — Built using Pandas, Dash, and Jupyter Notebook, this project analyzes and visualizes sales data with over{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
             
            }}
          >
            10k
          </Typography>
          {' '}rows. It showcases how raw data is cleaned, transformed, and turned into interactive dashboards using Python's powerful data stack. From trend analysis to category breakdowns, this dashboard highlights real-time insights in a clean, web-based interface—demonstrating end-to-end data analysis and dashboarding skills.
        </>
      ),
      technologies: [ "Pandas", "Plotly", "JupyterNotebook","Dash","Render"],
      github: "https://github.com/muskanpandeyy/SalesDashboard",
      live: "https://dash-ecfw.onrender.com/"
    },
    {
      title: "Zomato Analysis",
      description: (
        <>
          Zomato Restaurant Analysis  provides insights into restaurant data across multiple cities. Using Python for data cleaning and Seaborn , Numpy  for visualization, this project analyzes patterns in cuisine types, pricing, ratings, and locations. The interactive dashboard helps understand market trends and customer preferences in the food service industry, analyzing over{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
              
            }}
          >
            149
          </Typography>
          {' '}restaurants.
        </>
      ),
      technologies: ["Pandas", "Numpy", "Seaborn","Matplotlib"],
      github: "https://github.com/muskanpandeyy/ZomatoAnalysis",
      live: "/zomato-dashboard.png",
      isImage: true
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Typography variant="h4" sx={{ color: '#ccd6f6', mb: 4 }}>
          Featured Projects
        </Typography>
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            flexWrap: 'nowrap', 
            overflowX: 'auto',
            pb: 2,
            px: 1
          }}
          className="projects-container"
        >
          {projects.map((project, index) => (
            <Grid key={index} item xs={12} sm={10} md={8} lg={6} sx={{ minWidth: { xs: '100%', sm: '80%', md: '600px' } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: '#1a1a1a',
                            color: '#64ffda'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto', p: 2 }}>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: '#8892b0' }}
                    >
                      Code
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      onClick={project.isImage ? () => handlePreviewOpen(project.live) : null}
                      href={project.isImage ? undefined : project.live}
                      target={project.isImage ? undefined : "_blank"}
                      rel={project.isImage ? undefined : "noopener noreferrer"}
                      sx={{ color: '#8892b0' }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={openPreview}
        onClose={handlePreviewClose}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }
        }}
      >
        <img
          src={selectedImage}
          alt="Project Preview"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain'
          }}
          onClick={handlePreviewClose}
        />
      </Dialog>
    </ProjectsSection>
  );
};

export default Projects; 