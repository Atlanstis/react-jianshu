import styled from "styled-components";
import logoPic from "../../static/imgs/nav-logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
    cursor: pointer;
  }
  &.download {
    &:hover {
      background: #f5f5f5;
    }
  }
  &.right {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWraper = styled.div`
  float: left;
  position: relative;
  .slide-enter,
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit-active {
    width: 160px;
  }
  .icon-search {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #eee;
    text-align: center;
    color: #999;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.a`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
    &:hover {
      cursor: pointer;
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236, 97, 73, 0.05);
    }
  }
  &.write {
    color: #fff;
    background: #ea6f5a;
    &:hover {
      cursor: pointer;
      background-color: #ec6149;
    }
  }
`;
