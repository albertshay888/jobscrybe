import React from "react";
import PropTypes from "prop-types";



class ResultList extends React.Component {
  render() {
    return (
      <div className="component-resultlist">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
ResultList.propTypes = {
  value: PropTypes.string,
};
export default ResultList;