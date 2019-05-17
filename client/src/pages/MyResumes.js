import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CopyPasteModal from "../Components/CopyPasteModal";
import Resume from "../Components/ResumeCard"
import API from '../utils/API';

const styles = theme => ({
  appBar: {
    position: 'relative',
  }, 
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: { 
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class MyResumes extends React.Component{

  state={
    resumes:[]
  }
  
  componentDidMount(){
    this.getResumes();
  }
  
  handleSubmit = event=>{
    event.preventDefault();
    if(!this.state.resumes){
      alert("You can't save a blank resume!");
    } else{
      console.log(this.props.user)
      API.addResume({
        resumes: this.state.resumes
      })
      .then(resp=>{
        console.log(resp)
        if(resp.status===200){
            console.log("resume added!")
        //   this.props.history.push("/main")
        }
      })

      .catch(err=>console.log(err));
      this.setState({
        resumes: ""
      })
    }
  }
  // getResumes= ()=>{
  //   API.getResumes(this.props.user)
  //   .then(resp=>{
  //     this.setState({resumes: resp.data})
  //   })
  // }

  getResumes = (user)=>{
    API.getResumes(user).then(resp=>{
      this.setState({resumes:resp.data})
    })
  }

 
  handleDeleteResume = id => {
    API.deleteResume(id)
      .then(resp => this.getResumes())
      .catch(err => console.log(err));
  };
 
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

 


  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Resumes
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Use the space below to organize your personalized resumes
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
   

<Button
  variant="contained"
  color="primary"
  component="label"
  // onClick = { this.handleSubmit }
>
  Upload a resume here
  <input
    type="file"
    style={{ display: "none" }}
    user = {this.props.user } 
    reloadResumes={this.getResumes} 
  />
</Button>
                  
                </Grid>
                <Grid item>
                    <CopyPasteModal user = {this.props.user } reloadResumes={this.getResumes} />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} >
          {this.state.resumes.length ? 
            (this.state.resumes.map(resume => (
              <Grid item key={resume} sm={6} md={4}>
                {/* {console.log(card)} */}
                  <Resume 
                    key={resume._id}
                    title={resume.title} 
                    description={resume.description}
                    body={resume.body}
                    date={resume.date}   
                    // Button={() => (
                    //     <button
                    //       onClick={() => this.handleResumeDelete(card._user)}
                      
                    //     >
                    //       Delete!!!!!
                    //     </button>
                    //   )}
                    
            
                  />
                   {/* <Button onClick={() => this.handleDeleteResume(resume._id)}> Delete Resume</Button>   */}
              </Grid>
            ))) : 
            (<Grid item>
              <Typography variant="h4" color="inherit">
                No resumes to be found, upload one above to get started
              </Typography>
            </Grid>)
          
        }
          </Grid>
        </div>
     
      </main>

    </React.Fragment>
    )
  }
}


MyResumes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyResumes);