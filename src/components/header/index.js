import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWraper,
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    const { focused } = this.state;

    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left download">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWraper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? "focused iconfont icon-search"
                  : "iconfont icon-search"
              }
            ></i>
          </SearchWraper>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont icon-pen"></i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }

  handleInputBlur() {
    this.setState({
      focused: false,
    });
  }
}

export default Header;
