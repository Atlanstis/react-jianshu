import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { actionCreator } from "./store";
import List from "./components/list";
import Recommend from "./components/recommend";
import Writer from "./components/writer";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          ></img>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.getWriterList();
    this.props.getArticleList();
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterList() {
      dispatch(actionCreator.getWriterList());
    },
    getArticleList() {
      dispatch(actionCreator.getArticleList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
