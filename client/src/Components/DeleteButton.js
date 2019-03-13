// import React from "react";
// import Button from "@material-ui/core/Button"
// import API from "../utils/API";

// class DeleteButton extends React.Component {

//   state={
//       resumes:[]
//   }

//   // handleResumeDelete = id => {
//   //   API.deleteResume(id).then(res => this.getSavedJobs());
//   // };

// deleteResume = id => {
//   API.deleteResume(id)
//     .then(res => this.getResums())
//     .catch(err => console.log(err));
// };
// render() {
//   return (
//     <Button color="primary"
//       onClick={this.deleteResume}
//     >
//           <UnsaveIcon />
//       Remove 
//     </Button>

//   )
// }
// }

// export default DeleteButton;
import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteButton;


