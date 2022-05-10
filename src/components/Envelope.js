import React, { useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import noop from "lodash/noop";
import { Map } from "immutable";
import { animeKeyframes } from "./Common/CSSAnime";
import { ClassicSpinner } from "react-spinners-kit";
const StyledEnvelopeTop = styled.div(
  ({ EnvelopeData }) => `
  ${animeKeyframes.getIn(["EnvelopeTop", "keyframes"])}
  position: absolute;
  width:100%;
  left:0;
  bottom:0;
  z-index:99;
  &.animeForSendMsg {
    animation: 
      ${animeKeyframes.getIn(["EnvelopeTop", "name", "main"])} 
      ${EnvelopeData.get("animeSecond")}s forwards;
    .envelopeTop-container {
      &:after { animation: 
        ${animeKeyframes.getIn(["EnvelopeTop", "name", "shadowB"])} 
        ${EnvelopeData.get("animeSecond")}s forwards;
      }
    }
    .send-btn { opacity:0 }
  }
  .envelopeTop-container {
    position: relative;
    width:100%;
    height:${EnvelopeData.get("mobileStraight")}px;
    border-radius:0 0 20px 20px;
    overflow:hidden;
    z-index:1;
    &:after {
      content:'';
      opacity:0;
      position: absolute;
      left:0;
      bottom:0;
      width:100%;
      height:40%;
      background:url('./images/ic_UponLetter_shadow.png')no-repeat bottom center;
      background-size:cover;
      z-index:3;
    }
    .part-style {
      position: absolute;
      left:0;
      bottom:0;
      width:100%;
      height:100%;
      background:url('./images/ic_UponLetter.png')no-repeat top center;
      background-size:cover;
      z-index:1;
    }
    .send-btn {
      position: absolute;
      width:50%;
      z-index:99;
      left: 50%;
      bottom:15%;
      transform:translateX(-50%);
      font-size:18px;
      color:#ced4e0;
      background-color:#b6b7c1;
      padding:12px 0px;
      border-radius:50px;
      border:0;
      outline:none;
      box-shadow: 0 3px 10px 0 rgb(0, 0, 0, 0);
      transition:.2s;
      &.active {
        background-color: #4053c8;
        color:#fff;
        box-shadow: 0 3px 10px 0 rgb(0, 0, 0, 0.7);
      }
    }
  }
  .send-spinner {
    position: absolute;
    z-index:99;
    left: 50%;
    bottom:20%;
    transform:translateX(-50%);
  }
  /* mobile 橫板 */
  @media (min-width: 568px){
    .envelopeTop-container {
      height:${EnvelopeData.get("mobileHorizontal")}px;
      .send-btn {
        width:35%;
      }
    }
  }
  /* ipad */
  @media (min-width: 768px){
    .envelopeTop-container {
      .send-btn {
        width:30%;
      }
    }
  }
  @media (min-width: 1024px){
    .envelopeTop-container {
      height:${EnvelopeData.get("ipadHorizontal")}px;
      .send-btn {
        width:25%;
      }
    }
  }
  @media (min-width: 1366px){
    .envelopeTop-container {
      height:${EnvelopeData.get("ipadProHorizontal")}px;
      .send-btn {
        width:25%;
      }
    }
  }
`
);
export const EnvelopeTop = ({
  runState = false,
  EnvelopeData = Map(),
  formStatus = true,
  apiIsSend = false,
  netState = true,
  sendApi = noop,
  reInit = noop,
}) => {
  const [reSendCD, setReSendCD] = useState(false);
  const timeoutFun = () => {
    setReSendCD(true);
    const timeoutFun = setTimeout(() => {
      setReSendCD(false);
      return clearTimeout(timeoutFun);
    }, [2000]);
  };
  return (
    <StyledEnvelopeTop
      className={cx({ animeForSendMsg: runState })}
      EnvelopeData={EnvelopeData}
    >
      <div className="envelopeTop-container">
        <div className="part-style" />
        {netState ? (
          <button
            className={cx("send-btn", { active: !formStatus })}
            disabled={formStatus || apiIsSend}
            onClick={() => {
              sendApi();
            }}
          >
            送出
          </button>
        ) : (
          <>
            {reSendCD ? (
              <div className="send-spinner">
                <ClassicSpinner size={36} color={`#2bc57e`} />
              </div>
            ) : (
              <button
                disabled={reSendCD}
                className="send-btn active"
                onClick={() => {
                  reInit();
                  timeoutFun();
                }}
              >
                点击重送
              </button>
            )}
          </>
        )}
      </div>
    </StyledEnvelopeTop>
  );
};
const StyledEnvelopeTopCover = styled.div(
  ({ EnvelopeData }) => `
  position: absolute;
  display:none;
  width:100%;
  left:0;
  bottom:0;
  z-index:99;
  // tick
  &:before {
    content:'';
    opacity:0
    position: absolute;
    left:50%;
    top:50%;
    width:35%;
    padding-bottom:35%;
    transform:translate(-50%,-55%);
    background:url('./images/ic_check.png')no-repeat center;
    background-size:115%;
    z-index:2;
  }
  &.animeForSendMsg {
    display:block;
    transform:translateY(100%);bottom:50%;
    animation: 
      ${animeKeyframes.getIn(["EnvelopeTop", "name", "main"])} 
      ${EnvelopeData.get("animeSecond")}s forwards;
    &:before {
      animation: 
        ${animeKeyframes.getIn(["EnvelopeTop", "name", "Tick"])} 
        ${EnvelopeData.get("animeSecond")}s .5s forwards;
    }
    .envelopeTop-container {
      &:before { animation: 
        ${animeKeyframes.getIn(["EnvelopeTop", "name", "shadowA"])} 
        ${EnvelopeData.get("animeSecond")}s .5s forwards;
      }
    }
  }
  .envelopeTop-container {
    position: relative;
    width:100%;
    height:${EnvelopeData.get("mobileStraight")}px;
    border-radius:0 0 20px 20px;
    overflow:hidden;
    z-index:1;
    &:before {
      content:'';
      opacity:0;
      position: absolute;
      left:0;
      bottom:0;
      width:100%;
      height:100%;
      background:url('./images/ic_UponLetter_shadow.png')no-repeat top center;
      background-size:cover;
      z-index:2;
    }
  }
  /* mobile 橫板 */
  @media (min-width: 568px){
    &:before {
      width:20%;
      padding-bottom:20%;
    }
    .envelopeTop-container {
      height:${EnvelopeData.get("mobileHorizontal")}px;
    }
  }
  /* ipad */
  @media (min-width: 768px){
    &:before {
      width:15%;
      padding-bottom:15%;
      transform:translate(-50%,-50%);
    }
  }
  @media (min-width: 1024px){
    .envelopeTop-container {
      height:${EnvelopeData.get("ipadHorizontal")}px;
    }
  }
  @media (min-width: 1366px){
    .envelopeTop-container {
      height:${EnvelopeData.get("ipadProHorizontal")}px;
    }
  }
`
);
export const EnvelopeTopCover = ({
  runState = false,
  EnvelopeData = Map(),
}) => {
  return (
    <StyledEnvelopeTopCover
      className={cx({ animeForSendMsg: runState })}
      EnvelopeData={EnvelopeData}
    >
      <div className="envelopeTop-container" />
    </StyledEnvelopeTopCover>
  );
};
const envelopeBottomHeightNum = 1.65;
const StyledEnvelopeBottom = styled.div(
  ({ EnvelopeData }) => `
  ${animeKeyframes.getIn(["EnvelopeBottom", "keyframes"])}
  position: absolute;
  width:100%;
  height:${EnvelopeData.get("mobileStraight") * envelopeBottomHeightNum}px;
  left:0;
  bottom:0;
  z-index:2;
  &.animeForSendMsg {
    animation: 
    ${animeKeyframes.getIn(["EnvelopeBottom", "name", "main"])} 
    ${EnvelopeData.get("animeSecond")}s forwards;
  }
  .envelopeBottom-container {
    position: relative;
    width:100%;
    height:100%;
    background:#ffba5f;
    border-radius:0 0 20px 20px;
  }
  @media (min-width: 568px){
    height:${EnvelopeData.get("mobileHorizontal") * envelopeBottomHeightNum}px;
  }
  @media (min-width: 1024px){
    height:${EnvelopeData.get("ipadHorizontal") * envelopeBottomHeightNum}px;
  }
  @media (min-width: 1366px){
    height:${EnvelopeData.get("ipadProHorizontal") * envelopeBottomHeightNum}px;
  }
`
);
export const EnvelopeBottom = ({ runState = false, EnvelopeData = Map() }) => {
  return (
    <StyledEnvelopeBottom
      className={cx({ animeForSendMsg: runState })}
      EnvelopeData={EnvelopeData}
    >
      <div className="envelopeBottom-container" />
    </StyledEnvelopeBottom>
  );
};
const StyledEnvelopeCover = styled.div(
  ({ EnvelopeData }) => `
  ${animeKeyframes.getIn(["EnvelopeCover", "keyframes"])}
  position: absolute;
  width:100%;
  height:${EnvelopeData.get("mobileStraightCover")}px;
  left:0;
  bottom:0;
  z-index:1;
  transform-origin:top center;
  transform:translateY(${EnvelopeData.get(
    "mobileStraightCover"
  )}px)rotateX(180deg);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  &.animeForSendMsg {
    animation: 
      ${animeKeyframes.getIn(["EnvelopeCover", "name", "main"])}
      ${EnvelopeData.get("animeSecond")}s forwards;
    .envelopeCover-container {
      .text {
        animation: 
          ${animeKeyframes.getIn(["EnvelopeCover", "name", "text"])}
          ${EnvelopeData.get("animeSecond")}s .5s forwards;
      }
    }
  }
  .envelopeCover-container {
    position: relative;
    width:100%;
    height:100%;
    overflow:hidden;
    background:url('./images/ic_LetterCover.png')no-repeat bottom center;
    background-size:cover;
    .text {
      opacity:0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .mainTitle {
        position: relative;
        font-family: "MFMoDeng";
        font-weight: 100;
        font-size:26px;
        letter-spacing: 2px;
        color:#d5daf5;
        margin-bottom: 8px;
        white-space: nowrap;
        &:before {
          content:'';
          position: absolute;
          transform: translate(-100%,-50%);
          top: 50%;
          left: -5px;
          width: 20px;
          height: 2px;
          background-color:#d5daf5;
        }
        &:after {
          content:'';
          position: absolute;
          transform: translate(100%,-50%);
          top: 50%;
          right:-5px;
          width: 20px;
          height: 2px;
          background-color:#d5daf5;
        }
      }
      .subtitle {
        font-size:16px;
        color:#d5daf5;
      }
    }
  }
  @media (min-width: 568px){
    ${animeKeyframes.getIn(["EnvelopeCover", "rwd", "mobileHorizontal"])}
    height:${EnvelopeData.get("mobileHorizontalCover")}px;
    transform:translateY(${EnvelopeData.get(
      "mobileHorizontalCover"
    )}px)rotateX(180deg);
  }
  @media (min-width: 1024px){
    ${animeKeyframes.getIn(["EnvelopeCover", "rwd", "ipadHorizontal"])}
    height:${EnvelopeData.get("ipadHorizontalCover")}px;
    transform:translateY(${EnvelopeData.get(
      "ipadHorizontalCover"
    )}px)rotateX(180deg);
    .envelopeCover-container {
      .text {
        .mainTitle {
          font-size: 30px;
          &:before, &:after  { font-size: 20px; }
        }
      }
    }
  }
  @media (min-width: 1366px){
    ${animeKeyframes.getIn(["EnvelopeCover", "rwd", "ipadProHorizontal"])}
    height:${EnvelopeData.get("ipadProHorizontalCover")}px;
    transform:translateY(${EnvelopeData.get(
      "ipadProHorizontalCover"
    )}px)rotateX(180deg);
  }
`
);
export const EnvelopeCover = ({ runState = false, EnvelopeData = Map() }) => {
  return (
    <StyledEnvelopeCover
      className={cx({ animeForSendMsg: runState })}
      EnvelopeData={EnvelopeData}
    >
      <div className="envelopeCover-container">
        <div className="text">
          <div className="mainTitle">感谢您提供的反馈</div>
          <div className="subtitle">我们将提供更好的体验给您</div>
        </div>
      </div>
    </StyledEnvelopeCover>
  );
};
