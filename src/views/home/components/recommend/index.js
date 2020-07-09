import React, { Component } from "react";
import styled from "styled-components";
import { ImgVip, ImgBook, ImgPublications, ImgCourage } from "./imgs";

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
          <RecommendVip></RecommendVip>
          <RecommendBook></RecommendBook>
          <RecommendPub></RecommendPub>
          <RecommendCourage></RecommendCourage>
      </RecommendWrapper>
    );
  }
}

export default Recommend;

const RecommendWrapper = styled.div`
  padding-bottom: 4px;
  .recommed-img {
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;
    :hover {
      cursor: pointer;
    }
  }
`;

const RecommendVip = styled.img.attrs({
  src: ImgVip,
  className: "recommed-img",
})``;

const RecommendBook = styled.img.attrs({
  src: ImgBook,
  className: "recommed-img",
})``;

const RecommendPub = styled.img.attrs({
  src: ImgPublications,
  className: "recommed-img",
})``;

const RecommendCourage = styled.img.attrs({
  src: ImgCourage,
  className: "recommed-img",
})``;
