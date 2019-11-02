import React from 'react';

import Tabs from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const Navigation = () => {
  return (
    <Paper>
      <Tabs 
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="fullWidth"
        
        >
        <Tab label="Focus" to={'/focus'} component={Link}/>
        <Tab label="My Events" to={'/myevents'} component={Link}/>
      </Tabs>
    </Paper>
  )
};

export default Navigation;