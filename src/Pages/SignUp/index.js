import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Button } from '@material-ui/core';

const SignUp = () => {
  
    return (
    <div container>
        <Typography variant="h4" component="h4" gutterBottom style={{color:"white"}}>
            Choose your focuses 
        </Typography>
        <Paper>
            <TextField name="Primary Focus" type="text" placeholder="Natural Language Processing" required />
            <TextField name="Secondary Focus" type="text" placeholder="Leadership" required />
            <TextField name="Tertiary Focus" type="text" placeholder="React JS" />
            <Button type="submit"/>
        </Paper>
    </div>
  );
};

export default SignUp;
