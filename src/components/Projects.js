import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button, Chip, Dialog, useTheme, useMediaQuery, Tabs, Tab } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsSection = styled(Box)`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
  
  @media (max-width: 600px) {
    padding: 80px 0 60px 0;
  }
  
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
  
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 2rem;
  
  .MuiTab-root {
    color: #8892b0;
    font-weight: 500;
    
    &.Mui-selected {
      color: #64ffda;
    }
  }
  
  .MuiTabs-indicator {
    background-color: #64ffda;
  }
`;

const Projects = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePreviewOpen = (image) => {
    setSelectedImage(image);
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const dataProjects = [
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

  const fullStackProjects = [
    {
      title: "Mindcare-Hub",
      description: (
        <>
          A comprehensive web platform designed to assist individuals dealing with depression and mental health issues, built with{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
            }}
          >
            React.js, MongoDB, and Node.js
          </Typography>
          . This socially impactful application provides mental health support resources, user-friendly interfaces for those struggling with depression, and demonstrates the ability to build applications that make a real difference in people's lives. Features include user authentication, mental health resources, and responsive design optimized for accessibility.
        </>
      ),
      technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "Mental Health", "Responsive Design"],
      github: "https://github.com/muskanpandeyy/mindcare-frontend",
      githubBackend: "https://github.com/muskanpandeyy/mindcare-backend",
      live: "https://mindcarehub.onrender.com",
      isImage: false,
      hasBackend: true
    },
    {
      title: "TextUtils",
      description: (
        <>
          A TextUtils website developed to analyze text using{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
            }}
          >
            React.js
          </Typography>
          . This utility application provides comprehensive text analysis features including word count, character count, text transformation (uppercase, lowercase), and text formatting. Built with modern React practices, it demonstrates frontend development skills and the ability to create practical, user-friendly web applications.
        </>
      ),
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Text Analysis", "Utility App"],
      github: "https://github.com/muskanpandeyy/TextUtils",
      live: "https://muskanpandeyy.github.io/TextUtils/",
      isImage: false,
      hasBackend: false
    },
    {
      title: "NutriLink – Food Donation App",
      description: (
        <>
          NutriLink is a fully responsive modern web application that bridges the gap between food donors and those in need, built with{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
            }}
          >
            React, Vite, and Tailwind CSS
          </Typography>
          . It features clean UI, smooth navigation, and a component-based architecture to enable real-time listings for surplus food donations, promoting food sustainability and reducing wastage.
        </>
      ),
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "HTML5", "JavaScript"],
      github: "https://github.com/muskanpandeyy/Nutrilink",
      live: "https://github.com/muskanpandeyy/Nutrilink",
      isImage: false
    },
    
    {
      title: "Portfolio Website",
      description: (
        <>
          A responsive portfolio website built with{' '}
          <Typography
            component="span"
            sx={{
              color: '#64ffda',
            }}
          >
            React, TypeScript, and CSS
          </Typography>
          . Features include smooth animations, responsive design, contact form integration, and modern UI/UX principles. This project showcases frontend development skills with attention to design and user experience.
        </>
      ),
      technologies: ["React", "TypeScript", "CSS"],
      github: "https://github.com/muskanpandeyy/portfolio",
      live: "https://pandeymuskanportfolio.netlify.app/",
      isImage: false
    }
  ];

  const allProjects = [...dataProjects, ...fullStackProjects];

  const renderProjects = (projects) => {
    if (isMobile) {
      // Mobile layout - vertical stack
      return (
        <Box sx={{ px: 1 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard>
                <CardContent>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#64ffda', 
                      mb: 2,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#8892b0', 
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      lineHeight: 1.6
                    }}
                  >
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
                          color: '#64ffda',
                          fontSize: { xs: '0.75rem', sm: '0.75rem' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#8892b0',
                      mb: { xs: 1, sm: 0 },
                      width: { xs: '100%', sm: 'auto' }
                    }}
                  >
                    {project.hasBackend ? 'Frontend Code' : 'Code'}
                  </Button>
                  {project.hasBackend && (
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#8892b0',
                        mb: { xs: 1, sm: 0 },
                        width: { xs: '100%', sm: 'auto' }
                      }}
                    >
                      Backend Code
                    </Button>
                  )}
                  <Button
                    startIcon={<LaunchIcon />}
                    onClick={project.isImage ? () => handlePreviewOpen(project.live) : null}
                    href={project.isImage ? undefined : project.live}
                    target={project.isImage ? undefined : "_blank"}
                    rel={project.isImage ? undefined : "noopener noreferrer"}
                    sx={{ 
                      color: '#8892b0',
                      width: { xs: '100%', sm: 'auto' }
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </motion.div>
          ))}
        </Box>
      );
    } else {
      // Desktop layout - horizontal scroll
      return (
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
                      {project.hasBackend ? 'Frontend Code' : 'Code'}
                    </Button>
                    {project.hasBackend && (
                      <Button
                        startIcon={<GitHubIcon />}
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#8892b0' }}
                      >
                        Backend Code
                      </Button>
                    )}
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
      );
    }
  };

  return (
    <ProjectsSection id="projects">
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
          Featured Projects
        </Typography>

        <StyledTabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant={isMobile ? "fullWidth" : "standard"}
          centered={!isMobile}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#64ffda',
            },
          }}
        >
          <Tab label="All Projects" />
          <Tab label="Data Analysis" />
          <Tab label="Web Development" />
        </StyledTabs>

        {activeTab === 0 && renderProjects(allProjects)}
        {activeTab === 1 && renderProjects(dataProjects)}
        {activeTab === 2 && renderProjects(fullStackProjects)}
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