import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InfoSwitch from "../../../../components/info-switch";
import { actionCreator } from "../../store";

class Writer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
    this.writerArea = this.writerArea.bind(this);
  }

  handleSwitchClick() {
    this.props.changeList();
  }

  writerArea() {
    let { writerList, page } = this.props;
    const showList = writerList.toJS().slice((page - 1) * 5, page * 5);
    return (
      <WriterList>
        {showList.map((item) => {
          return (
            <WriterItem key={item.id}>
              <WriterAvatar>
                <img alt="" src={item.avatar}></img>
              </WriterAvatar>
              <BtnFollow>关注</BtnFollow>
              <WriterName>{item.name}</WriterName>
              <WriterDesc>{item.desc}</WriterDesc>
            </WriterItem>
          );
        })}
      </WriterList>
    );
  }

  render() {
    const { handleSwitchClick, writerArea } = this;
    return (
      <WriterWrapper>
        <WriterTitle>
          <span>推荐作者</span>
          <InfoSwitch
            className="info-switch"
            onHandleSwitchClick={handleSwitchClick}
          ></InfoSwitch>
        </WriterTitle>
        {writerArea()}
        <WriterMore>查看全部</WriterMore>
      </WriterWrapper>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    writerList: state.getIn(["home", "writerList"]),
    page: state.getIn(["home", "page"]),
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    changeList() {
      dispatch(actionCreator.changeWriterPage());
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Writer);

const WriterMore = styled.a`
  display: block;
  box-sizing: border-box;
  padding: 7px 7px 7px 12px;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
`;

const WriterDesc = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
`;

const WriterName = styled.a`
  padding-top: 5px;
  margin-right: 60px;
  font-size: 14px;
  display: block;
`;

const BtnFollow = styled.a`
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
`;

const WriterAvatar = styled.a`
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
`;

const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;

const WriterTitle = styled.div`
  text-align: left;
  span {
    font-size: 14px;
    color: #969696;
  }
  .info-switch {
    float: right;
  }
`;

const WriterWrapper = styled.div`
  margin-top: 10px;
  a {
    cursor: pointer;
  }
`;
