import React, { Component } from "react";
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from "./style";
import { actionCreator } from "./store";

class Header extends Component {
  SearchInfoArea() {
    let {
      focused,
      list,
      page,
      mouseIn,
      handleListPageChange,
      handleMouseStatus,
    } = this.props;
    if (focused || mouseIn) {
      const showList = list.toJS().slice((page - 1) * 10, page * 10);
      return (
        <SearchInfo
          onMouseEnter={() => {
            handleMouseStatus(true);
          }}
          onMouseLeave={() => {
            handleMouseStatus(false);
          }}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleListPageChange(this.switchIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.switchIcon = icon;
                }}
                className="iconfont icon-refresh"
              ></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {showList.map((item, index) => {
              return <SearchInfoItem key={index}>{item}</SearchInfoItem>;
            })}
          </div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
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
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? "focused iconfont icon-search"
                  : "iconfont icon-search"
              }
            ></i>
            {this.SearchInfoArea()}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus(true));
    },
    handleInputBlur() {
      dispatch(actionCreator.searchFocus(false));
    },
    handleListPageChange(switchIcon) {
      let deg = switchIcon.style.transform.replace(/\D/g, "");
      deg = deg ? Number(deg) : 0;
      deg += 360;
      switchIcon.style.transform = `rotate(${deg}deg)`;
      dispatch(actionCreator.listPageChange());
    },
    handleMouseStatus(value) {
      dispatch(actionCreator.mouseStatusChagne(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
