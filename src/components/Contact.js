import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Snackbar, Alert, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';

const ContactSection = styled(Box)`
  min-height: 100vh;
  padding: 100px 0;
  background-color: #0a192f;
  
  @media (max-width: 600px) {
    padding: 80px 0 60px 0;
  }
`;

const StyledForm = styled.form`
  background-color: #112240;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
  
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const SocialButton = styled(Button)`
  margin: 0 1rem;
  color: #8892b0;
  &:hover {
    color: #64ffda;
  }
  
  @media (max-width: 600px) {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: flex-start;
    padding: 12px 16px;
  }
`;

const Contact = () => {
  const form = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    try {
      emailjs.init('A9vm-SIsT3ZUdiXMX');
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: event.target.user_name.value,
      to_name: 'Muskan',
      email: event.target.user_email.value,
      message: event.target.message.value
    };

    emailjs.send(
      'service_rlzxbyo',
      'template_z7oq63f',
      templateParams,
      'A9vm-SIsT3ZUdiXMX'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        event.target.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error.text || error.message || error);
        setSnackbarMessage(`Failed to send message: ${error.text || error.message || 'Please try again'}`);
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#ccd6f6', 
              mb: 2, 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.125rem', md: '2.125rem' }
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#8892b0', 
              mb: 4, 
              textAlign: 'center', 
              maxWidth: '600px', 
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledForm ref={form} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#8892b0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#64ffda',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#8892b0',
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ccd6f6',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#8892b0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#64ffda',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#8892b0',
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ccd6f6',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={isMobile ? 3 : 4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#8892b0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#64ffda',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#8892b0',
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ccd6f6',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  size={isMobile ? "medium" : "large"}
                  disabled={loading}
                  sx={{
                    mt: 2,
                    borderColor: '#64ffda',
                    color: '#64ffda',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      borderColor: '#64ffda',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    },
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </StyledForm>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ccd6f6', 
                    mb: 3,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Other ways to connect:
                </Typography>
                <Box sx={{ 
                  mb: 3, 
                  width: { xs: '100%', md: 'auto' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  <SocialButton
                    component="a"
                    startIcon={<EmailIcon />}
                    href="mailto:muskanpandey781@gmail.com"
                  >
                    muskanpandey781@gmail.com
                  </SocialButton>
                </Box>
                <Box sx={{ 
                  mb: 3,
                  width: { xs: '100%', md: 'auto' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  <SocialButton
                    component="a"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/muskan-pandey-b97928249"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </SocialButton>
                </Box>
                <Box sx={{ 
                  width: { xs: '100%', md: 'auto' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  <SocialButton
                    component="a"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/muskanpandeyy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </SocialButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ContactSection>
  );
};

export default Contact; 
