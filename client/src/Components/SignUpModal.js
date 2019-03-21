import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    }, 
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
    outline: 'none',
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
});

class SignUpModal extends React.Component {
  state = {
    open: false,
    email:"",
    password:""

  };


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event=>{
    event.preventDefault();
    console.log(this.state.email, this.state.password)
    if(!this.state.email||!this.state.password){
      alert("Fields are incomplete, please enter your name and password");
    } else{
      API.signUp({
        email:this.state.email, 
        password:this.state.password
      })
      .then(resp=>{
        console.log(resp)
        if(resp.status===200){
          //this closes the modal after sign up is complete!
 this.setState({ open: false });
        }
        // window.location.href = "/main" 
      })

      .catch(err=>console.log(err));
      this.setState({
        email:"",
        password:"",
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      
        <Button
          variant="outlined"
          required fullWidth
           
       
            variant="contained"
            color="primary"
          onClick={this.handleOpen}>SIGN UP</Button>
        <Modal
          aria-labelledby="email"
          aria-describedby="modal-body"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Grid container spacing={8} alignItems="flex-end" >
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input fullWidth value={this.state.email} onChange = { this.handleInputChange } id="email" name="email" />
                </FormControl>
              </Grid>
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input fullWidth value={this.state.password} onChange = { this.handleInputChange } id="password" name="password" type="password" />
                </FormControl>
              </Grid>


              <Grid item md={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  required fullWidth
                  onClick = { this.handleSubmit } 
                  // onClose ={this.handleClose}
                >
                  SIGN UP
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SignUpModal);