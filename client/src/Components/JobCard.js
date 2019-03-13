import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia"; 
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button"
import JobDialog from "./JobDialog";
// import Dropdown from "./Dropdown";

class JobCard extends React.Component{
    render(){
        const { classes } = this.props;
        return(

            
            
    <Card>

        <CardContent>
           
            <Typography gutterBottom variant="h5" component="h2" align="left">
                {this.props.jobInfo.title}
            </Typography>
            <Typography gutterBottom variant="h6" align="left">
          
                {this.props.jobInfo.company}
                
             
            </Typography>
            <CardMedia
              component="img"
             
              className="companyImage"
     
               image={this.props.jobInfo.company_logo}
              
               
             />
            <Typography align="left">
                {this.props.jobInfo.location}
            </Typography>
            <Typography align="left">
                {this.props.jobInfo.created_at}
            </Typography>
        </CardContent>
        <CardActions>
                <JobDialog jobInfo={this.props.jobInfo} user={this.props.user} />
    
        </CardActions>
    </Card>
)
}
}

export default JobCard