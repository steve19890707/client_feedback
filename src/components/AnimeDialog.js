import React from "react";
import styled from "styled-components";
import cx from "classnames";

const StyleDialogRight = styled.div`
  @keyframes popupIn {
    0% {
      opacity:0;
      top:45px;
      right:2%;
    };
    100% {
      opacity:1;
      top:15px;
      right:12%;
    };
  };
  @keyframes loop-DialogRight {
    0% { transform:translateY(0%) };
    50% { transform:translateY(12.5%) };
    100% { transform:translateY(0%) };
  };
  position: absolute;
  top:15px;
  right:12%;
  width:32%;
  border-radius:10px;
  background:rgba(255,255,255,0.1);
  box-sizing:border-box;
  animation:popupIn 1s;
  &.loop {
    animation:loop-DialogRight 3.5s infinite;
  }
  .dialog-content {
    position: relative;
    width:100%;
    padding-bottom:35%;
    .run-bar {
      @keyframes load {
        0% { width:0; };
        100% { width:100%; };
      };
      position: absolute;
      top:50%;
      left:50%;
      width:72.5%;
      height:2px;
      transform:translate(-50%,-50%);
      &:before {
        content:'';
        position: absolute;
        width:0;
        height:100%;
        background:rgba(255,255,255,0.2);
        border-radius:10px;
      }
      &:nth-child(1) {
        top:30%;
        &:before {
          animation:load 1s 0.8s forwards;
        }
      }
      &:nth-child(2) {
        &:before {
          animation:load 1s 1.8s forwards;
        }
      }
      &:nth-child(3) {
        top:70%;
        &:before {
          animation:load 1s 2.6s forwards;
        }
      }
    } 
    .bubble {
      position: absolute;
      bottom:0;
      left:5%;
      width:15%;
      padding-bottom:15%;
      transform:translateY(70%);
      background:url('./images/bubble.png')no-repeat;
      background-size:100%;
    } 
  }
  @media (min-width: 768px) {
    width:25%;
  };
  @media (min-width: 1024px) {
    width:21%;
  }
`
export const DialogRight = ({ status })=> {
  return (
    <StyleDialogRight className={cx({ loop : status })}>
      <div className="dialog-content">
        <div className="run-bar"/>
        <div className="run-bar"/>
        <div className="run-bar"/>
        <div className="bubble"/>
      </div>
    </StyleDialogRight>
)};
const StyleDialogLeft = styled.div`
  @keyframes loop-DialogLeft {
    0% { transform:translateY(-47.5%) };
    50% { transform:translateY(-60%) };
    100% { transform:translateY(-47.5%) };
  };
  position: absolute;
  opacity:0;
  top:0;
  left:0;
  border-radius:0 10px 10px 0;
  width:25%;
  padding-bottom:16%;
  transition:.3s;
  background:rgba(255,255,255,0.1);
  transform:translateY(-47.5%);
  &:before {
    content:'';
    position: absolute;
    bottom:0;
    right:10%;
    width:20%;
    padding-bottom:20%;
    transform:translateY(60%)rotateY(180deg);
    background:url('./images/bubble.png')no-repeat;
    background-size:100%;
  };
  &.run {
    animation:loop-DialogLeft 3.5s infinite;
  }
  &.open { opacity:1; }
  @media (min-width: 568px) {
    width:20%;
  };
  @media (min-width: 768px) {
    width:15%;
    padding-bottom:14%;
  };
`;
export const DialogLeft = ({ status, delay })=> {
  return <StyleDialogLeft className={cx({ open : delay },{ run : status })}/>
}