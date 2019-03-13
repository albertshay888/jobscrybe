import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, CardMedia } from "@material-ui/core";
import SearchForm from "../Components/SearchForm";
// import logo from "../Components/logo.png";
// import CardMedia from "@material-ui/core/CardMedia";
// import Profile from "./Profile";



import SearchResults from "../pages/SearchResults"



const styles = theme =>({
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
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
})

class Search extends React.Component{
    
    
    state = {
        jobs: []
    }
    
    resetState = ()=>{
        this.setState({jobs:[]})
    }
    
    componentDidMount(){
        this.resetState();
    }
    
    grabJobs = searchResponse=>{
        this.setState({jobs:searchResponse})
        console.log(this.state.jobs)
    }

    render(){
        const {classes} = this.props
        const { value } = this.state;
       
        return(
            <Fragment className={classes.heroUnit}>
            <Grid container spacing={24}>
                <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
          {/* <CardMedia
              component="img"
              // let Img = <img src={'/logo.png'}</img>
              className={this.props.media}
             
               image={this.props.Img}
             /> */}
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Search
            </Typography>
            
           
            {/* <img src={logo} alt='Logo'/> */}
          
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Look for jobs in your area
            </Typography>
          </div>
        </div>

                <Grid item xs={12}>
                {this.state.jobs.length ? (<SearchResults jobs={this.state.jobs} />) : (<SearchForm grabJobs={this.grabJobs} />)}
                </Grid>

            </Grid>
            </Fragment>
            
       
        )
        
    }
    
}
{/* <Profile></Profile> */}
export default withStyles(styles)(Search);