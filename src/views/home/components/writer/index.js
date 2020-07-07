import React, { Component } from "react";
import InfoSwitch from "../../../../components/info-switch";

class Writer extends Component {
  constructor(props) {
    super(props);
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
  }

  handleSwitchClick() {}

  render() {
    const { handleSwitchClick } = this;
    return (
      <div>
        <InfoSwitch onHandleSwitchClick={handleSwitchClick}></InfoSwitch>
      </div>
    );
  }
}

export default Writer;
