import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import NodeIcon from './icons/node.svg';
import ReactIcon from './icons/react.svg';
import PostgreIcon from './icons/postgresql.svg';
import NginxIcon from './icons/nginx.svg';
import AnsibleIcon from './icons/ansible.svg';
import JinjaIcon from './icons/jinja.svg';
import MaterialUIIcon from './icons/material-ui.svg';
import JavaScriptIcon from './icons/javascript.svg';

const ICON_SIZE = 48; // 200% of 24px

const ProjectCard = ({ title, description, technologies, link }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      bgcolor: 'rgba(128, 128, 128, 0.75)',
      color: 'white',
      border: '2px solid white',
      borderRadius: 2,
      height: '100%',
      flex: 1,
      p: 2,
    }}
  >
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FolderIcon sx={{ fontSize: 50, mr: 2 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
      </Box>
      <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>{description}</Typography>

      {/* View Repo Link */}
      {link && (
        <Link href={link} target="_blank" sx={{ fontWeight: 'bold', color: 'lightblue', textDecoration: 'none' }}>
          View Repo
        </Link>
      )}
    </CardContent>

    {/* Icons at the bottom */}
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
      {technologies.map((tech, index) => {
        const iconMap = {
          'React': ReactIcon,
          'PostgreSQL': PostgreIcon,
          'Nginx': NginxIcon,
          'Ansible': AnsibleIcon,
          'Jinja': JinjaIcon,
          'Material UI': MaterialUIIcon,
          'Node.js': NodeIcon,
          'Javascript': JavaScriptIcon,
        };
        const iconSrc = iconMap[tech];
        return (
          iconSrc && (
            <img
              key={index}
              src={iconSrc}
              alt={tech}
              style={{ width: ICON_SIZE, height: ICON_SIZE }}
            />
          )
        );
      })}
    </Box>
  </Card>
);

export default ProjectCard;
