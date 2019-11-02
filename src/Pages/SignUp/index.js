import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Button } from '@material-ui/core';

const INITIAL_STATE = {
    f1: "",
    f2: "",
    f3: ""
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    };
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <div container>
                <Typography variant="h4" component="h4" gutterBottom style={{color:"white"}}>
                    Choose your focuses 
                </Typography>
                <Paper>
                    <form onSubmit={this.handleSubmit}>
                        <TextField label="Skill 1" value={this.state.f1} onChange={this.handleChange} name="Primary Focus" type="text" placeholder="Natural Language Processing" required />
                        <TextField label="Skill 2" value={this.state.f2} onChange={this.handleChange} name="Secondary Focus" type="text" placeholder="Leadership" required />
                        <TextField label="Skill 3" value={this.state.f3} onChange={this.handleChange} name="Tertiary Focus" type="text" placeholder="React JS" required />
                        <Button block value="Submit" type="submit" variant='contained'>
                            <Typography>
                                Continue
                            </Typography>
                        </Button>
                    </form>
                </Paper>
            </div>
          );
    }  
};

export default SignUp;
