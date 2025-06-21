import React from 'react';
import {
  Box,
  Typography,
  Link,
  Container,
  Divider,
} from '@mui/material';

const ApprenticeshipOverview = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom color="primary">
        Apprenticeship Overview
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Deployed Portfolio</Typography>
        <Link
          href="https://jbiehl88.github.io/Portfolio2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Portfolio
        </Link>
      </Box>

      <Divider />

      <Box mt={4} mb={2} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Company & Apprenticeship Length</Typography>
        <Typography>Verizon — 12-month Apprenticeship</Typography>
      </Box>

      <Divider />

      <Box mt={4} mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Who I Am</Typography>
        <Typography>
          I’m Jordan Biehl, a full-stack developer with a passion for building intuitive and accessible applications.
        </Typography>
      </Box>

      <Divider />

      <Box mt={4} mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Why I Do What I Do</Typography>
        <Typography>
          I love solving real-world problems with code and working on creative, collaborative teams.
        </Typography>
      </Box>

      <Divider />

<Box mt={4} mb={2}>
  <Typography
    variant="h6"
    sx={{ fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center' }}
  >
    Areas of Interest
  </Typography>

  <Box
    component="ul"
    sx={{
      listStyleType: 'disc',
      paddingLeft: 4,
      marginTop: 2,
      marginBottom: 0,
      textAlign: 'center',
      fontFamily: 'inherit',
      fontSize: '1rem', 
      mx: 'auto',
      maxWidth: 360, 
    }}
  >
    <li>Front-End Development (React, Material UI)</li>
    <li>DevOps & Automation (Ansible, CI/CD)</li>
    <li>API Development & Integration</li>
    <li>Databas Management</li>
    <li>Cloud & Deployment</li>
  </Box>
</Box>


      <Divider />

      <Box mt={4} mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Teams I’ve Worked On</Typography>
        <Typography>
          VCPFE - VAPP Automation
        </Typography>
      </Box>

      <Divider />

      <Box mt={4}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>My Impact</Typography>
        <Typography>
          Delivered production-ready features, automated deployments, and led code improvements for accessibility
          and developer experience.
        </Typography>
      </Box>
    </Container>
  );
};

export default ApprenticeshipOverview;
