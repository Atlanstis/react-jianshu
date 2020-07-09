import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class List extends Component {
  render() {
    let { list } = this.props;
    list = list.toJS();
    return (
      <div>
        {list.map((item) => {
          return (
            <ListItem key={item.id}>
              <img className="pic" alt="" src={item.pic}></img>
              <ListInfo>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
  };
};

const mapDispatcherToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatcherToProps)(List);

const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
