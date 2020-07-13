import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from "./style";
import { actionCreator } from "./store";
import List from "./components/list";
import Recommend from "./components/recommend";
import Writer from "./components/writer";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.getArticleList = this.getArticleList.bind(this);
  }

  getArticleList() {
    let { articlePage } = this.props;
    this.props.getArticleList(articlePage);
  }

  backToTopHandle() {
    window.scrollTo(0, 0);
  }

  render() {
    let { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          ></img>
          <List></List>
          <LoadMore onClick={this.getArticleList}>阅读更多</LoadMore>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {showScroll ? (
          <BackToTop onClick={this.backToTopHandle}>Top</BackToTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.getWriterList();
    this.getArticleList(this.props.articlePage);
    window.addEventListener("scroll", this.props.scollHandle);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.scollHandle);
  }
}

const mapStateToProps = (state) => {
  return {
    articlePage: state.getIn(["home", "articlePage"]),
    showScroll: state.getIn(["home", "showScroll"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterList() {
      dispatch(actionCreator.getWriterList());
    },
    getArticleList(page) {
      dispatch(actionCreator.getArticleList(page));
    },
    scollHandle() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 400) {
        dispatch(actionCreator.changeScrollShow(true));
      } else {
        dispatch(actionCreator.changeScrollShow(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const LoadMore = styled.a`
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #9b9b9b;
  }
`;
