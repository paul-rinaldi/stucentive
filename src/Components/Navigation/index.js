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
      {/**HEADER/ */}
      <Tabs 
        //value={value} 
        //onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="fullWidth"
        >
        <Tab label="Add Event" />
        <Tab label="Focus" />
        <Tab label="My Events" />
      </Tabs>
    </Paper>
  )
};

export default Navigation;