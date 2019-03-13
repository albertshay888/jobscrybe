import React from "react";
import Button from "@material-ui/core/Button"
import UnsaveIcon from "@material-ui/icons/NotInterested"
import API from "../utils/API";


class UnsaveButton extends React.Component {

  state={
    user:this.props.user,
    jobInfo:this.props.jobInfo
   
  }

  handleJobDelete = id => {
    API.deleteJobs(id).then(res => this.state);
  };


render() {
  return (
    <Button color="black"

      onClick={this.handleJobDelete}
    >
              <UnsaveIcon />
      Delete Posting
    </Button>

  )
}
}

export default UnsaveButton;




