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

        this.handleChangeF1 = this.handleChangeF1.bind(this);

        this.handleChangeF2 = this.handleChangeF2.bind(this);

        this.handleChangeF3 = this.handleChangeF3.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeF1(event) {
        this.setState({f1: event.target.value});
    };
    handleChangeF2(event) {
        this.setState({f2: event.target.value});
    };
    handleChangeF3(event) {
        this.setState({f3: event.target.value});
    };
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.f1 + this.state.f2 + this.state.f3);
        event.preventDefault();
    };

    render() {
        return (
            <div container>
                <Typography variant="h4" component="h4" style={{color:"white"}}>
                    Choose 3 Skills As Your Focus
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth margin="normal" label="Skill 1" value={this.state.f1} onChange={this.handleChangeF1} type="text" placeholder="Ex. Natural Language Processing" required />
                    <TextField fullWidth margin="normal" label="Skill 2" value={this.state.f2} onChange={this.handleChangeF2} type="text" placeholder="Ex. Leadership" required />
                    <TextField fullWidth margin="normal" label="Skill 3" value={this.state.f3} onChange={this.handleChangeF3} type="text" placeholder="Ex. React JS" required />
                    <Button block value="Submit" type="submit" variant='contained'>
                        <Typography>
                            Continue
                        </Typography>
                    </Button>
                </form>
            </div>
          );
    }  
};

export default SignUp;
