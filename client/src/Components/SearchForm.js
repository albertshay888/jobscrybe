import React, { Fragment } from "react"
import { withStyles, InputLabel } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"

const styles = theme =>({
    paper: {
        marginTop: theme.spacing.unit * 8,
   
    }
})


class SearchForm extends React.Component{
    state={
        search:"",
        location:"",
        jobs:[]
    }


    handleChange = event => {
        // Getting the value and name of the input which triggered the change
        console.log(event.target.name)
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleSubmit = event=>{
        event.preventDefault();
        if (!this.state.search){
            alert("Please enter keywords");
        } else{
            // console.log(this.state)
            API.getJobs({
                search: this.state.search,
                location: this.state.location
            })
            .then(resp => {


                // this.addJobs(resp.data)
                console.log(resp.data)
                // console.log(this.state)
                this.setState({ jobs: resp.data });
                this.props.grabJobs(this.state.jobs)

                // console.log(this.state)
            }).catch(err => {
                console.log(err)
            })
        }
    }


    render() {
        const classes = this.props
        return (
            <Fragment>
                <Grid container spacing={12} justify="flex-end">
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="search">🔍 Job Title</InputLabel>
                            <Input value={this.state.search} onChange={this.handleChange} id="search" name="search" autoFocus />
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel  htmlFor="location">Location</InputLabel>
                            <Input  value={this.state.location} onChange={this.handleChange} id="location" name="location"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                    
                            onClick={this.handleSubmit}
                            type="submit"
                            position="fixed"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Search
                        </Button>
                       
                    </Grid>
                    {/* </span> */}
                </Grid>
            </Fragment>
        )
    }
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm)