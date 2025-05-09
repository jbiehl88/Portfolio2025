import React from 'react';
import { Typography, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <div>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>Projects</Typography>
    <Grid container spacing={2} sx={{ mt: 1 }} alignItems="stretch">
      {[
        {
          title: "Ansible Deployment",
          description: "Multiverse Project - An Ansible automation script to deploy numerous web servers, proxy servers, and databases based on your needs. This project is currently just utilizing Debian powered virtual machines to demonstrate its' usability. I have chosen to host my virtual machines using VMware to save cost but the script can be used with virtual machines hosted on cloud providers such as AWS, Azure, and Google Cloud as long as the OS on the hosts are Debian unless the script is modified. This script also utilizes a project repository hosted on GitHub. You can choose to host your own project, however, keep in mind the file structure NGINX expects to host a web server.",
          technologies: ['Ansible', 'Nginx', 'Jinja'],
          link: 'https://github.com/jbiehl88/ansibleproj',
        },
        {
          title: "PlanExCrew",
          description: "A web-based application inspired by the animated series Futurama. It allows users to assemble a crew of up to three members to undertake various missions, each with a specified difficulty level. By evaluating each potential crew member's rating, users can strategically select the most suitable team to successfully complete missions.",
          technologies: ['React', 'Material UI', 'Javascript'],
          link: 'https://github.com/Farnsworth-Enterprises/PlanExCrew',
        },
        {
          title: "Planet Express",
          description: "A service API backend where internal consumers can directly create, view, and manage shipments without any intermediary service over the internet. The goal was to develop an easy-to-use web-based interface where customers can create shipments and view their shipments. Users are only allowed to create and view their own shipments. Admins have the ability to create, update, delete and view all shipments.",
          technologies: ['Javascript', 'PostgreSQL', 'Express'],
          link: 'https://github.com/Farnsworth-Enterprises/PlanetExpress',
        },
        {
          title: "Tee-JAM Store", 
          description: "An eCommerce store where internal consumers can directly view and manage products without any intermediary service over the internet. The goal was to develop an easy-to-use web-based interface where customers can search for products and view a complete description of the product. Since the store is meant for internal use, Users are allowed to add, update, and delete items.",
          technologies: [ 'Javascript', 'React', 'Node.js', 'Express'],
          link: 'https://github.com/orgs/Tee-JAM/repositories',
        },
        {
          title: "PokemonViaAPI",
          description: "PokemonViaAPI is a React-based web application that fetches data from the PokeAPI to display the first 151 Pokémon. The app allows users to search, filter, and view detailed statistics for each Pokémon. The UI is built with Material-UI for a modern and responsive design.",
          technologies: [ 'Javascript', 'React', 'Material UI' ],
          link: 'https://github.com/jbiehl88/PokemonViaAPI',
        }
      ].map((project, index) => (
        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', minHeight: '100%' }}>
          <ProjectCard 
            title={project.title} 
            description={project.description} 
            technologies={project.technologies} // Pass the technologies array
            link={project.link}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Projects;
