import React, { useState } from "react";
import { Box, Typography, Paper, MobileStepper, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import siteImg from '../components/assets/site.PNG';
import runplayImg from '../components/assets/runplay.PNG';
import planexImg from '../components/assets/PlanEx.PNG';
import crewImg from '../components/assets/PlanExCrew.PNG';
import morboImg from '../components/assets/Morbo.PNG';

const projects = [
  { title: "Inventory App", description: "Full-stack React & PostgreSQL", img: siteImg },
  { title: "Ansible Automation", description: "Infrastructure as Code", img: runplayImg },
  { title: "PlanetExpress API", description: "RESTful API project", img: planexImg },
  { title: "PlanExCrew", description: "React app for crew assembly", img: crewImg },
  { title: "Morbo", description: "AI-powered PR summarizer", img: morboImg },
];

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box 
        sx={{
        maxWidth: { xs: 320, sm: 600, md: 900, lg: 1000 }, // responsive maxWidth
        margin: "auto",
        mt: { xs: 2, sm: 4, md: 5 },                       // responsive top margin
        textAlign: "center",
        px: { xs: 1, sm: 2, md: 3 },                       // responsive padding X
  }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Jordan Biehl
      </Typography>
      <Typography variant="h5" gutterBottom>
        Software Engineer
      </Typography>

      <SwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {projects.map((project, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              bgcolor: "transparent", // transparent background
              boxShadow: "none",      // just in case
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 650,
            }}
          >
            <Box 
              component="img"
              src={project.img}
              alt={project.title}
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "contain",
                mb: 2,
                borderRadius: 1,
              }}
            />
            <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>{project.description}</Typography>
          </Paper>
        ))}
      </SwipeableViews>

      <MobileStepper
        sx={{
            bgcolor: "transparent", // transparent background
            boxShadow: "none",      // just in case
            "& .MuiMobileStepper-dot": {
            backgroundColor: "#fff",   // white for inactive dots
            opacity: 0.5,              // slightly transparent if you want
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#fff",   // white for active dot
            opacity: 1,
    },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: '1.6rem',
              textTransform: "none", // optional: keep normal text casing
            }}
          >
            Next <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: '1.6rem',
              textTransform: "none",
            }}
          >
            <KeyboardArrowLeft /> Back
          </Button>
        }
      />
    </Box>
  );
};

export default Home;