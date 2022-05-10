import React from "react";
import styled from "styled-components";
// import noop from "lodash/noop";
// import cx from "classnames";

const StyleCharacter = styled.div`
  position: relative;
  width:100%;
  padding-bottom:120%;
  .leftleg-kit {
    position: absolute;
    bottom:37%;
    right:10%;
    width:50%;
    padding-bottom:37%;
    background:url('./images/L_thigh.png')no-repeat;
    background-size:100%;
    z-index:8;
  };
  .rightleg-kit {
    position: absolute;
    left:18%;
    bottom:4%;
    width:63%;
    padding-bottom: 58%;
    background:url('./images/R_leg.png')no-repeat;
    background-size:100%;
    z-index:7;
  };
  .leftleg-calf-kit {
    @keyframes calf {
      0% { transform: rotate(0deg) }
      50% {transform: rotate(8deg) }
      100% { transform: rotate(0deg) }
    };
    @keyframes feet {
      0% { transform: translate(-45%,45%)rotate(-10deg) }
      50% {transform: translate(-45%,45%)rotate(0deg) }
      100% { transform: translate(-45%,45%)rotate(-10deg) }
    };
    position: absolute;
    left:11%;
    bottom:27%;
    width:42%;
    padding-bottom:49%; 
    z-index:6;
    transform-origin:top right;
    animation:calf 2.5s infinite;
    &:before {
      content:'';
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:2;
      background:url('./images/L_lower_leg.png')no-repeat;
      background-size:100%;
    }
    &:after {
      content:'';
      position: absolute;
      bottom:0;
      left:0;
      width:52%;
      padding-bottom:31%;
      background:url('./images/L_foot.png')no-repeat;
      background-size:100%;
      transform: translate(-45%,45%)rotate(-10deg);
      z-index:1;
      transform-origin:top right;
      animation:feet 2.5s infinite;
    }
  };
  .notebook-kit {
    @keyframes notebook {
      0% { transform:translate(5%,15%)rotate(-10deg) }
      100% { transform:translate(0%,0%)rotate(0deg) }
    };
    position: absolute;
    top:14%;
    left:25%;
    width:55%;
    padding-bottom:40%;
    background:url('./images/notebook.png')no-repeat;
    background-size:100%;
    transform-origin:center;
    animation:notebook 2s;
    z-index:5;
  };
  .hand-kit {
    @keyframes hand {
      5% { transform:rotate(15deg)}
      10% { transform:rotate(0deg)}
      15% { transform:rotate(15deg)}
      20% { transform:rotate(0deg)}
      25% { transform:rotate(15deg)}
      30% { transform:rotate(0deg)}
      35% { transform:rotate(15deg)}
      50% { transform:rotate(0deg)}
      100% { transform:rotate(0deg)}
    };
    position: absolute;
    top:35%;
    right:22%;
    width:14%;
    padding-bottom:10%;
    background:url('./images/hand.png')no-repeat;
    background-size:100%;
    transform-origin:center right;
    animation:hand 3s 1s infinite linear;
    z-index:8;
  };
  .face-kit {
    @keyframes face {
      0% { transform: rotate(0deg)}
      10% { transform: rotate(-12deg)}
      100% { transform: rotate(0deg)}
    };
    position: absolute;
    top:10%;
    right:16%;
    width:20%;
    padding-bottom:17%;
    background:url('./images/face.png')no-repeat;
    background-size:100%;
    transform-origin:center bottom;
    animation: face 5s 3s infinite;
    z-index:8;
  };
  .body-kit {
    position: absolute;
    top:18%;
    right:0%;
    width:40%;
    padding-bottom:40%;
    background:url('./images/body.png')no-repeat;
    background-size:100%;
    z-index:7;
  };
  .hair-kit {
    @keyframes hair {
      0% { transform:rotate(0deg);}
      20% { transform:rotate(6deg);}
      100% { transform:rotate(0deg);}
    };
    position: absolute;
    top:0.5%;
    right:0%;
    width:40%;
    padding-bottom:40%;
    background:url('./images/hair.png')no-repeat;
    background-size:100%;
    transform-origin:top left;
    animation: hair 5s 3s infinite;
    z-index:1;
  };
`
export default () => {
  return (
    <StyleCharacter>
      <div className="hair-kit"/>
      <div className="body-kit"/>
      <div className="face-kit"/>
      <div className="hand-kit"/>
      <div className="notebook-kit"/>
      <div className="leftleg-calf-kit"/>
      <div className="rightleg-kit"/>
      <div className="leftleg-kit"/>  
    </StyleCharacter>
)}