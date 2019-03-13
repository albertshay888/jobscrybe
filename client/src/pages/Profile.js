

// class Profile extends Component {
//   state = {
//     jobs: []
//   };

//   componentDidMount() {
//     this.getSavedJobs();
//   }

//   getSavedJobs = () => {
//     API.getSavedJobs()
//       .then(resp =>
//         this.setState({
//           jobs: resp.data
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   handleJobDelete = id => {
//     API.deleteJobs(id).then(resp => this.getSavedJobs());
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1 className="text-center">
//                 <strong>(React) Jobscrybe Job Search</strong>
//               </h1>
//               <h2 className="text-center">Search for and Save Jobs of Interest.</h2>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <Card title="Saved Jobs" icon="download">
//               {this.state.jobs.length ? (
//                 <List>
//                   {this.state.jobs.map(job => (
//                     <Job
//                       key={job._id}
//                       title={job.title}
//                       description={job.descrption}
//                       link={job.companu_url}
//                       created_at={job.created_at}
//                       company_logo={job.company_logo}
//                       Button={() => (
//                         <button
//                           onClick={() => this.handleJobDelete(job._id)}
//                           className="btn btn-danger ml-2"
//                         >
//                           Delete
//                         </button>
//                       )}
//                     />
//                   ))}
//                 </List>
//               ) : (
//                 <h2 className="text-center">No Saved Jobs</h2>
//               )}
//             </Card>
//           </Col>
//         </Row>
//         <Footer />
//       </Container>
//     );
//   }
// }

// export default Profile;
























































































































































































































































































































































































































// // import React, { Component } from "react";
// // import DeleteBtn from "../Components/DeleteBtn";
// // import Jumbotron from "../Components/Jumbotron";
// // import API from "../utils/API";
// // import { Link } from "react-router-dom";
// // import { Col, Row, Container } from "../Components/Grid";
// // import { List, ListItem } from "../Components/List";
// // import { Input, TextArea, FormBtn } from "../Components/Form";

// // class Profile extends Component {
// //   state = {
// //     resumes: [],
// //     title: "",  
// //     descrption: "",
// //     body: "",
// //     user: "",
// //     date: ""
// //   };
  
// //   componentDidMount() {
// //     this.getResumes(this.props.user);
// //   }

// //   getResumes = (user) => {
// //     API.getResumes(user)
// //       .then(resp =>
// //         this.setState({ resumes: resp.data, 
// //                         title: "",
// //                         description: "",
// //                         body: "",
// //                         user:"",
// //                         date:""
// //                      })
// //       )
// //       .catch(err => console.log(err));
// //   };
 

// //   deleteResume = id => {
// //     API.deleteResume(id)
// //       .then(resp => this.getResumes())
// //       .catch(err => console.log(err));
// //   };

// //   handleInputChange = event => {
// //     const { name, value } = event.target;
// //     this.setState({
// //       [name]: value
// //     });
// //   };
  
// //   handleSubmit = event=>{
// //     event.preventDefault();
// //     if(!this.state.resumeBody){
// //       alert("You can't save a blank resume!");
// //     } else{
// //       console.log(this.props.user)
// //       API.addResume({
// //         title: this.state.title, 
// //         description:this.state.description,
// //         body: this.state.resumeBody,
// //         user: this.props.user,
// //         date: Date.now
// //       })
// //       .then(resp=>{
// //         console.log(resp)
// //         if(resp.status===200){
// //             console.log("resume added!")
// //         //   this.props.history.push("/main")
// //         }
// //       })

// //       .catch(err=>console.log(err));
// //       this.setState({
// //         description:"",
// //         title:"",
// //         resumeBody:"",
// //       })
// //     }
// //   }

// //   render() {
// //     return (
// //       <Container fluid>
// //         <Row>
// //           <Col size="md-6">
// //             <Jumbotron>
// //               <h1>Resume Respository</h1>
// //             </Jumbotron>
// //             <form>
// //               <Input
// //                 value={this.state.title}
// //                 onChange={this.handleInputChange}
// //                 name="title"
// //                 placeholder="Title/Position (required)"
// //               />
// //               <Input
// //                 value={this.state.description}
// //                 onChange={this.handleInputChange}
// //                 name="description"
// //                 placeholder="Company name (required)"
// //               />
// //               <TextArea
// //                 value={this.state.resumebody}
// //                 onChange={this.handleInputChange}
// //                 name="body"
// //                 placeholder="body (required)"
// //               />
// //               <FormBtn
// //                 disabled={!(this.state.description && this.state.title)}
// //                 onClick={this.handleFormSubmit}
// //               >
// //                 Submit Resume
// //               </FormBtn>
// //             </form>
// //           </Col>
// //           <Col size="md-6 sm-12">
// //             <Jumbotron>
// //               <h1>Resumes</h1>
// //             </Jumbotron>
// //             {this.state.resumes.length ? (
// //               <List>
// //                 {this.state.resumes.map(resume => (
// //                   <ListItem key={resume._id}>
// //                     <Link to={"/resumes/" + resume._id}>
// //                       <strong>
// //                         {resume.title} by {resume.description}
// //                       </strong>
// //                     </Link>
// //                     <DeleteBtn onClick={() => this.deleteResume(resume._id)} />
// //                   </ListItem>
// //                 ))}
// //               </List>
// //             ) : (
// //               <h3>No Results to Display</h3>
// //             )}
// //           </Col>
// //         </Row>
// //       </Container>
// //     );
// //   }
// // }


// // export default Profile;
