import React, { Component } from "react";
import styled from "styled-components";

class InfoSwitch extends Component {
  constructor(props) {
    super(props);
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
  }

  handleSwitchClick(switchIcon) {
    const { onHandleSwitchClick } = this.props;

    let deg = switchIcon.style.transform.replace(/\D/g, "");
    deg = deg ? Number(deg) : 0;
    deg += 360;
    switchIcon.style.transform = `rotate(${deg}deg)`;
    onHandleSwitchClick();
  }

  render() {
    const { handleSwitchClick } = this;

    return (
      <Switch
        onClick={() => {
          handleSwitchClick(this.switchIcon);
        }}
      >
        <i
          ref={(icon) => {
            this.switchIcon = icon;
          }}
          className="iconfont icon-refresh"
        ></i>
        换一批
      </Switch>
    );
  }
}

export const Switch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .icon-refresh {
    display: inline-block;
    margin-right: 2px;
    font-size: 13px;
    transition: all 0.3s ease;
    transform-origin: center center;
  }
  &:hover {
    color: #222;
  }
`;

export default InfoSwitch;
