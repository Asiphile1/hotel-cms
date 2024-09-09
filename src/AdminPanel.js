import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';

const AdminPanel = () => {
  return (
    <Container>
      <Typography variant="h4">Admin Panel</Typography>
      <Button component={Link} to="/admin/carousel" variant="contained" color="primary" style={{ margin: '10px' }}>
        Manage Carousel
      </Button>
      <Button component={Link} to="/admin/accommodations" variant="contained" color="primary" style={{ margin: '10px' }}>
        Manage Accommodations
      </Button>
      <Button component={Link} to="/admin/reviews" variant="contained" color="primary" style={{ margin: '10px' }}>
        Manage Reviews
      </Button>
    </Container>
  );
};

export default AdminPanel;
