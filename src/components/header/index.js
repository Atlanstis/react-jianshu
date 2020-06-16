import React from "react";
import { connect } from "react-redux";
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
import { actionCreator } from "./store";

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;

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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </CSSTransition>
          <i
            className={
              focused ? "focused iconfont icon-search" : "iconfont icon-search"
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFocus(true));
    },
    handleInputBlur() {
      dispatch(actionCreator.searchFocus(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
