import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeroContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #0a192f;
  padding-top: 64px;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  border: 1px solid #64ffda;
  color: #64ffda;
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
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
`;

const TextContent = styled(Box)`
  max-width: 800px;
  @media (max-width: 900px) {
    text-align: center;
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
`;

const Hero = () => {
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
              <IntroText variant="h6" sx={{ mb: 2 }}>
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
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: '1px'
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
                    mb: 3,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    letterSpacing: '0.5px'
                  }}
                >
                  I analyze data to tell stories.
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
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    opacity: 0.9
                  }}
                >
                  I'm a data analyst specializing in transforming complex datasets into actionable insights. 
                  With expertise in SQL, Python, and visualization tools, I help businesses make data-driven decisions.
                </StyledTypography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Stack direction="row" spacing={4}>
                  <StyledButton 
                    variant="outlined" 
                    size="large" 
                    component="a"
                    href="/Data%20resume.pdf%281%29.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<DescriptionIcon />}
                  >
                    View Resume
                  </StyledButton>
                  <StyledButton 
                    variant="outlined" 
                    size="large" 
                    component="a"
                    href="https://github.com/muskanpandeyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                  >
                    GitHub Profile
                  </StyledButton>
                </Stack>
              </motion.div>
            </TextContent>
          </ContentWrapper>
        </motion.div>
      </Container>
    </HeroContainer>
  );
};

export default Hero; 
