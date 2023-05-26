import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils'
const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography color={'black'} sx ={{ flexGrow: 1 }} align='left'>STUDENT APP</Typography>
          <Button  variant='contained'><Link to={'/Stable'}>Students</Link></Button>
          <Button variant='contained'><Link to={'/Addd'}>ADD</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
