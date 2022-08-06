import React, { Component } from "react";

import { connect } from "react-redux";

import clothes from "../../../Data/clothes.json";

class Tabs extends Component {
  renderTabs = () => {
    return clothes.navPills.map((ele) => {
      return (
        <li
          onClick={() => this.props.setSelectedType(ele.type)}
          key={ele.tabName}
          className="nav-item"
        >
          <a
            className={`nav-link ${ele.active && "active"}`}
            data-toggle="pill"
            href={`#${ele.tabName}`}
          >
            {ele.showName}
          </a>
        </li>
      );
    });
  };

  render() {
    return <ul className="nav nav-pills">{this.renderTabs()}</ul>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedType: (type) => {
      dispatch({
        type: "SET_SELECTED_TYPE",
        payload: type,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Tabs);
