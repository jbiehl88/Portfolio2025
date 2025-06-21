import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    if (!formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // TODO: Integrate with your email sending backend or service here
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box 
      sx={{
      maxWidth: 600,
      mx: 'auto',
      px: 4,   // increased horizontal padding (left & right)
      py: 4,   // increased vertical padding (top & bottom)
      px: 2,
      bgcolor: 'rgba(255, 255, 255, 0.8)', // translucent white background
      borderRadius: 2,                      // optional: rounded corners
      boxShadow: 3,                        // optional: subtle shadow
  }}
    >
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography mb={3}>
        Feel free to send me a message or email me directly at{' '}
        <a href="mailto:your@email.com">your@email.com</a>.
      </Typography>

      {status === 'success' && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}
      {status === 'error' && <Alert severity="error" sx={{ mb: 2 }}>Please fill in your email and message.</Alert>}

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          required
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          autoComplete="name"
        />
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          autoComplete="email"
        />
        <TextField
          fullWidth
          required
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
