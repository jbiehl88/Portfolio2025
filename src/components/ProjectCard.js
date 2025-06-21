import React, { useState} from 'react';
import { Card, CardContent, Typography, Box, Link, Dialog, DialogTitle, DialogContentText, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FolderIcon from '@mui/icons-material/Folder';
import NodeIcon from './icons/node.svg';
import ReactIcon from './icons/react.svg';
import PostgreIcon from './icons/postgresql.svg';
import NginxIcon from './icons/nginx.svg';
import AnsibleIcon from './icons/ansible.svg';
import JinjaIcon from './icons/jinja.svg';
import MaterialUIIcon from './icons/material-ui.svg';
import JavaScriptIcon from './icons/javascript.svg';
import Auth0Icon from './icons/auth0.svg'
import SequelizeIcon from './icons/sequelize.svg'
import SQLiteIcon from './icons/sqlite.svg'
import ExpressIcon from './icons/express.svg'
import PythonIcon from './icons/python.svg'
import DockerIcon from './icons/docker.svg'
import GCPIcon from './icons/gcp.svg'
import LangChainIcon from './icons/langchain-color.svg'
import DeepseekIcon from './icons/deepseek.svg'

const ICON_SIZE = 48;

const ProjectCard = ({ title, description, technologies, link, learning = [] }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const iconMap = {
    'React': ReactIcon,
    'PostgreSQL': PostgreIcon,
    'Nginx': NginxIcon,
    'Ansible': AnsibleIcon,
    'Jinja': JinjaIcon,
    'Material UI': MaterialUIIcon,
    'Node.js': NodeIcon,
    'Javascript': JavaScriptIcon,
    'Auth0': Auth0Icon,
    'Sequelize': SequelizeIcon,
    'SQLite': SQLiteIcon,
    'Express': ExpressIcon,
    'Python': PythonIcon,
    'Docker': DockerIcon,
    'GCP': GCPIcon,
    'LangChain': LangChainIcon,
    'Deepseek': DeepseekIcon
  };

  return (
    <>
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

          {/* View Learnings Link */}
          {learning.length > 0 && (
            <Box mt={2}>
              <Link
                component="button"
                onClick={handleOpen}
                sx={{ fontWeight: 'bold', color: 'lightblue', textDecoration: 'none' }}
              >
                Project Reflections
              </Link>
            </Box>
          )}
        </CardContent>

        {/* Icons at the bottom */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          {technologies.map((tech, index) => {
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

      {/* Dialog to show learning points */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {title} Reflections
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {learning.map((point, i) => (
            <DialogContentText key={i} sx={{ mb: 1 }}>
              • {point}
            </DialogContentText>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;