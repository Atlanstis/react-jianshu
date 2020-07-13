import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  padding-top: 30px;
  float: right;
`;

export const BackToTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
