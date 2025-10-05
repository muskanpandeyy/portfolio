import React from 'react';
import { Box, Typography, Container, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HeroContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgb(30, 40, 57);
  padding-top: 64px;
  
  @media (max-width: 600px) {
    padding-top: 80px;
    min-height: 90vh;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  border: 1px solid #64ffda;
  color: #64ffda;
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
  
  @media (max-width: 600px) {
    margin-top: 1rem;
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

const TextContent = styled(Box)`
  max-width: 800px;
  
  @media (max-width: 900px) {
    text-align: center;
  }
  
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const StyledTypography = styled(Typography)`
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const IntroText = styled(Typography)`
  color: #64ffda;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  
  @media (max-width: 600px) {
    font-size: 1rem !important;
    margin-bottom: 1rem !important;
  }
`;

const ButtonStack = styled(Stack)`
  @media (max-width: 600px) {
    flex-direction: column !important;
    width: 100%;
    
    & > * {
      margin-bottom: 1rem;
    }
  }
`;

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroContainer id="home">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContentWrapper>
            <TextContent>
              <IntroText 
                variant="h6" 
                sx={{ 
                  mb: { xs: 1, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
              >
                Hi, my name is
              </IntroText>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: '#ccd6f6', 
                    fontWeight: 'bold', 
                    mb: { xs: 1, sm: 2 },
                    fontSize: { 
                      xs: '2rem', 
                      sm: '2.5rem', 
                      md: '3rem', 
                      lg: '3.5rem' 
                    },
                    letterSpacing: '1px',
                    lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
                  }}
                >
                  Muskan Pandey.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: '#8892b0', 
                    mb: { xs: 2, sm: 3 },
                    fontSize: { 
                      xs: '1.4rem', 
                      sm: '1.8rem', 
                      md: '2.2rem', 
                      lg: '2.5rem' 
                    },
                    letterSpacing: '0.5px',
                    lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
                  }}
                >
                  
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <StyledTypography 
                  variant="body1" 
                  sx={{ 
                    color: '#8892b0', 
                    maxWidth: '600px', 
                    mb: { xs: 3, sm: 4 },
                    fontSize: { 
                      xs: '0.9rem', 
                      sm: '1rem', 
                      md: '1.1rem' 
                    },
                    opacity: 0.9,
                    lineHeight: { xs: 1.5, sm: 1.6 }
                  }}
                >
                  I'm an Engineer specializing in transforming complex datasets into actionable insights, and a skilled Web Developer passionate about building interactive and user-friendly applications. With expertise in React, Node.js, Python, and visualization tools, I create end-to-end solutions that drive business value.
                </StyledTypography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <ButtonStack 
                  direction={isMobile ? "column" : "row"} 
                  spacing={isMobile ? 2 : 4}
                  sx={{ width: isMobile ? '100%' : 'auto' }}
                >
                  <StyledButton 
                    variant="outlined" 
                    size={isMobile ? "medium" : "large"}
                    component="a"
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<DescriptionIcon />}
                    sx={{ 
                      width: isMobile ? '100%' : 'auto',
                      minWidth: isMobile ? '200px' : 'auto'
                    }}
                  >
                    View Resume
                  </StyledButton>
                  <StyledButton 
                    variant="outlined" 
                    size={isMobile ? "medium" : "large"}
                    component="a"
                    href="https://github.com/muskanpandeyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ 
                      width: isMobile ? '100%' : 'auto',
                      minWidth: isMobile ? '200px' : 'auto'
                    }}
                  >
                    GitHub Profile
                  </StyledButton>
                  <StyledButton 
                    variant="outlined" 
                    size={isMobile ? "medium" : "large"}
                    component="a"
                    href="https://www.linkedin.com/in/muskan-pandey-b97928249/"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkedInIcon />}
                    sx={{ 
                      width: isMobile ? '100%' : 'auto',
                      minWidth: isMobile ? '200px' : 'auto'
                    }}
                  >
                    LinkedIn Profile
                  </StyledButton>
                </ButtonStack>
              </motion.div>
            </TextContent>
          </ContentWrapper>
        </motion.div>
      </Container>
    </HeroContainer>
  );
};

export default Hero; 
