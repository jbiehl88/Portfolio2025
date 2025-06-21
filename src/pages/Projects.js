import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <div>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>Projects</Typography>
    <Box sx={{ mx: '50px', mt: 4 }}>

    <Grid container spacing={2} sx={{ mt: 1 }} alignItems="stretch">
      {[
        {
          title: "Tee-JAM Store", 
          description: "An eCommerce store where internal consumers can directly view and manage products without any intermediary service over the internet. The goal was to develop an easy-to-use web-based interface where customers can search for products and view a complete description of the product. Since the store is meant for internal use, Users are allowed to add, update, and delete items.",
          technologies: [ 'Javascript', 'React', 'Node.js', 'Express', 'SQLite', 'Sequelize'],
          link: 'https://github.com/Tee-JAM/inventory-app',
          learning: [
          "Purpose: Build a full-stack app to manage and track inventory items efficiently.",
          "Features: Add, view, update, and delete inventory items with a clean React UI.",
          "Skills: React, Node.js/Express, SQLite, REST API development.",
          "Demonstrated: Created React UI components, designed Express routes, and integrated PostgreSQL queries.",
          "Takeaways: Improved SQL database integration with backend and frontend.",
          "Contributions: Deployment and  backend API and database setup."
          ]
        },
        {
          title: "Ansible Deployment",
          description: "Multiverse Project - An Ansible automation script to deploy numerous web servers, proxy servers, and databases based on your needs. This project is currently just utilizing Debian powered virtual machines to demonstrate its' usability. I have chosen to host my virtual machines using VMware to save cost but the script can be used with virtual machines hosted on cloud providers such as AWS, Azure, and Google Cloud as long as the OS on the hosts are Debian unless the script is modified. This script also utilizes a project repository hosted on GitHub. You can choose to host your own project, however, keep in mind the file structure NGINX expects to host a web server.",
          technologies: ['Ansible', 'Nginx', 'Jinja', 'PostgreSQL', 'Express', 'Python'],
          link: 'https://github.com/jbiehl88/ansibleproj',
          learning: [
          "Purpose: Automate the deployment of web servers, proxy servers, and databases on Debian-based virtual machines using Ansible.",
          "Features: Ansible playbooks for setup, SSH configuration, proxy setup, and system testing.",
          "Skills: Ansible automation, YAML scripting, system administration, virtualization with VMware.",
          "Demonstrated: Created reusable roles and playbooks to configure servers, manage SSH keys, set up proxies, and verify system status.",
          "Takeaways: Gained practical experience in infrastructure automation and learned to manage configurations across multiple virtual machines.",
          "Contributions: Developed and organized Ansible playbooks and roles for efficient server provisioning and configuration."
          ]
        },
        {
          title: "Planet Express",
          description: "A service API backend where internal consumers can directly create, view, and manage shipments without any intermediary service over the internet. The goal was to develop an easy-to-use web-based interface where customers can create shipments and view their shipments. Users are only allowed to create and view their own shipments. Admins have the ability to create, update, delete and view all shipments.",
          technologies: ['Javascript', 'Express', 'Auth0', 'SQLite', 'Sequelize', 'Node.js'],
          link: 'https://github.com/Farnsworth-Enterprises/PlanetExpress',
          learning: [
          "Purpose: Develop a backend API for managing shipments in a multiverse delivery service.",
          "Features: RESTful API allowing users to create, view, and manage shipments; admin capabilities for full CRUD operations.",
          "Skills: Node.js, Express, REST API design, authentication, database seeding.",
          "Demonstrated: Implemented user-specific shipment management, secured routes, and populated the database with initial data.",
          "Takeaways: Gained experience in building secure APIs and handling user-specific data operations.",
          "Contributions: Focused on API development and database seeding."
          ]
        },
        {
          title: "PlanExCrew",
          description: "A web-based application inspired by the animated series Futurama. It allows users to assemble a crew of up to three members to undertake various missions, each with a specified difficulty level. By evaluating each potential crew member's rating, users can strategically select the most suitable team to successfully complete missions.",
          technologies: ['React', 'Material UI', 'Javascript', 'Node.js'],
          link: 'https://github.com/Farnsworth-Enterprises/PlanExCrew',
          learning: [
          "Purpose: Develop a web-based application inspired by Futurama to assemble a crew for various missions.",
          "Features: Select crew members with unique competencies, assign them to missions of varying difficulty, and evaluate outcomes based on team composition.",
          "Skills: React for frontend development, component-based architecture, state management, and user interaction design.",
          "Demonstrated: Built interactive components like CrewCard.js, managed application state, and implemented user input handling.",
          "Takeaways: Enhanced understanding of React component structure, state management, and user experience design.",
          "Contributions: Focused on building interactive components and managing application state."
          ]
        },
        {
          title: "Morbo",
          description: "Morbo is an AI-powered GitHub Action that automatically generates a descriptive Pull Request (PR) summaries using Ollama-powered LLM. Designed to integrate directly with your CI/CD pipeline, Morbo detects code changes introduced in a PR, generates a concise, informative summary utilizing the diff, and posts it directly to the PR.",
          technologies: [ 'Python', 'Docker', 'LangChain', 'Deepseek', 'GCP' ],
          link: 'https://github.com/Farnsworth-Enterprises/Morbo',
          learning: [
          "Purpose: Automate the generation of descriptive Pull Request summaries using AI.",
          "Features: GitHub Action that analyzes code diffs and posts AI-generated summaries to PRs.",
          "Skills: Python scripting, GitHub Actions, integration with AI models, CI/CD workflows.",
          "Demonstrated: Developed a Python script that interfaces with the Ollama API to generate summaries, and configured the GitHub Action to trigger on PR events.",
          "Takeaways: Gained experience in automating developer workflows and integrating AI into CI/CD pipelines.",
          "Contributions: Focused on scripting and integration of AI summarization."
          ]
        }
      ].map((project, index) => (
        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', minHeight: '100%' }}>
          <ProjectCard 
            title={project.title} 
            description={project.description} 
            technologies={project.technologies} // Pass the technologies array
            link={project.link}
            learning={project.learning}
          />
        </Grid>
      ))}
    </Grid>
    </Box>
  </div>
);

export default Projects;
