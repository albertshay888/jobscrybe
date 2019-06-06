
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SearchPage from "../pages/Search"
import {Link} from 'react-router-dom';
import ResumesPage from "../pages/MyResumes"
import Profile from "../pages/Profile"
import NavBar from "./NavBar"
import Logout from '../pages/Logout';
import SavedJobs from "../pages/SavedJobs"
import logo from "../Components/logo.svg";
import '../App.css';

// import { ReactComponent as Logo } from "../Components/logo.svg";
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   }
// });
function TabContainer(props) {
  return (
    <Typography class="navbar-fixed" component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()  } {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
  
  


});
// const App = () => (
//   <div>
//     <Logo></Logo>
    
//   </div>
// );

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };  

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // let Img = <img src={'/logo.png'}/>
    return (
      <div class="navbar-fixed">
      <br/>
      <img id="logoPic" width="40%" src={logo} href="../pages/Search"/> 
      <br/>
      <nav>
        <div class="nav-wrapper" className={classes}>
            <Tabs position="fixed" variant="fullWidth" value={value} onChange={this.handleChange}>
              {/* <img width="16%" src={logo} href="../pages/Search"/>  */}
              <LinkTab label="Search" href="../pages/Search" />
              <LinkTab label="Popular" href="../SavedJobs" />
              <LinkTab label="Resumes" href="../pages/MyResumes" />
              {/* <LinkTab label="Profile" href="../pages/Profile" /> */}
              <LinkTab label="Logout" href="Logout" />

            </Tabs>
        
        
          {/* {value === 0 && <TabContainer> <img/></TabContainer>} */}
          {value === 0 && <TabContainer> <SearchPage /></TabContainer>}
          {value === 1 && <TabContainer> <SavedJobs user ={this.props.user}/></TabContainer>}
          {value === 2 && <TabContainer> <ResumesPage user = {this.props.user}/></TabContainer>}
          {/* {value === 3 && <TabContainer>Page under construction</TabContainer>} */}
          {value === 3 && <TabContainer><Logout logoutHandler={this.props.logoutHandler}/></TabContainer>}
   
        </div>
        </nav>
        </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default (NavTabs);
// export defaultwithStyles (styles)(NavTabs);


// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default (Dashboard);

export default withStyles(styles) (NavTabs);