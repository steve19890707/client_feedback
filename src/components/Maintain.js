import React from "react";
import styled,{ css } from "styled-components";

const colors = {
  background:`#040849`,
  moonShine:`rgba(157, 229, 253, 0.59)`,
  blueShine:`rgba(46, 46, 150, 0.5)`,
  white:`#ffffff26`,
  starColor1:`#9796f126`,
  starColor2:`#645DF6`
};
const forloop = ()=>{
  let styles = ``;
  for (let i = 0; i < 20; i += 1) {
    styles+=`&:nth-of-type(${i}){ animation-delay: ${i/-1.5}s;} `
  };
  return css`${styles}`;
};
const StyleMaintain = styled.div `
  @keyframes shineMe {
    from{ height: 3px; }
    to{ height: 100%;}
  }
  @keyframes shineMe2 {
    from{ opacity: .3; }
    to{ opacity: .9; }
  }
  overflow:hidden;
  width:100%;
  height:100%;
  background:linear-gradient(#2E2E96,#040849);
  .wrapper{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    background: radial-gradient(circle, ${colors.blueShine}, transparent 40%);
  }
  .stars{
    width:100%;
    height:100%;
    .star{ 
      position: absolute;
      width: 10px;
      height: 10px;
      &::before, &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 3px;
        background: #fff;
        border-radius: 50%;
        animation: shineMe 1s ease-in-out infinite alternate;
        transform-origin: middle;
        box-shadow: 0 0 6px 3px ${colors.white};
      }
      &::before{ transform: translate(-50%, -50%); }
      &::after{ transform: translate(-50%, -50%)rotate(90deg);}
      &:nth-child(1){
        top: 10%;
        left: 3%;
        &::before, &::after{ animation-delay: 1s; }
      }
      &:nth-child(2){
        top: 20%;
        left: 23%;
        transform: scale(1.4);
      }
      &:nth-child(3){
        top: 15%;
        right: 7%;
        transform: scale(.7);
      }
      &:nth-child(4){
        top: 9%;
        left: 59%;
        transform: scale(1.5);
        &::before, &::after{ animation-delay: 1.5s; }
      }
      &:nth-child(5){
        top: 19%;
        left: 69%;
        &::before, &::after{ animation-delay: 1s; }
      }
      &:nth-child(6){
        top: 49%;
        left: 0;
        transform: scale(.7);
        &::before, &::after{ animation-delay: 1s; }
      }
      &:nth-child(7){
        top: 40%;
        right: 15%;
        transform: scale(.7);
      }
    }
  }
  .stars2{
    width:100%;
    height:100%;
    .star{ 
      position: absolute;
      width: 10px;
      height: 10px;
      animation: swing2 8s linear infinite;
      &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 3px;
        background: ${colors.starColor2};
        border-radius: 50%;
        animation: shineMe2 2s ease-in-out infinite alternate;
        transform: translate(-50%, -50%);
        transform-origin: middle;
        box-shadow: 0 0 6px 3px ${colors.starColor1};
        opacity: .1;
      }
      &:nth-child(1){
        top: 20%;
        right: 3%;
      }
      &:nth-child(2){
        top: 30%;
        left: 6%;
      }
      &:nth-child(3){
        top: 3%;
        left: 32%;
      }
      &:nth-child(4){
        top: 9%;
        left: 69%;
      }
      &:nth-child(5){
        top: 40%;
        right: 9%;
      }
      &:nth-child(6){
        top: 50%;
        left: 25%;
      }
    }
  }
  /* Meteor Stars */
  @keyframes shoot {
    0% {transform: translate(500px, -500px);}
    100% {transform: translate(-500px, 500px);}
  }
  .meteor-stars {
    position: absolute;
    top:0%;
    left: 50%;
    width:100%;
    height:100%;
    z-index: 2;
  }
  .meteor-head {
    position: relative;
    width: 0; 
    height: 0; 
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 9px solid #fff;
    transform: rotate(-45deg);
  }
  .meteor-trail {
    position: relative;
    width: 185px;
    height: 5px;
    margin-top: -73px;
    margin-left: -22px;
    background: linear-gradient(310deg, rgba(0,0,0,0), rgba(255,255,255,0.3));
    transform: rotate(-45deg);
  }
  .meteor:first-of-type {
    margin-top: -350px;
    margin-left: 400px;
    animation: shoot 2s linear infinite;
    animation-delay: 0.2s;
  }
  .meteor:nth-of-type(2) {
    margin-top: 10px;
    margin-left: 360px;
    animation: shoot 2.5s linear infinite;
    animation-delay: 0.4s;
  }
  .meteor:nth-of-type(3) {
    margin-top: 70px;
    margin-left: 350px;
    animation: shoot 2.5s linear infinite;
    animation-delay: 0.2s;
  }
  .meteor:nth-of-type(4) {
    margin-top: 70px;
    margin-left: 390px;
    animation: shoot 2s linear infinite;
    animation-delay: 0.2s;
  }
  .meteor:nth-of-type(5) {
    margin-top: -160px;
    margin-left: 280px;
    animation: shoot 1.5s linear infinite;
    animation-delay: 0.4s;
  }
  /* Moon */
  .moon {
    position: absolute;
    top:30%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index: 2;
    width:120px;
    height:120px;
    border-radius:100%;
    background:#fff;
    box-shadow:0px 20px 50px ${colors.moonShine}; 
    -webkit-tap-highlight-color:transparent;
    .face {
      position:absolute;
      left: 23px;
      top: 45px;
      width: 75px;
      height: 38px;
      opacity:0;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover { 
      cursor: pointer;
      .face { opacity:1; }
    }
    &::before {
      content:'';
      position:absolute;
      top: 40px;
      left: 82px;
      width:30px;
      height:30px;
      border-radius:100%;
      background:linear-gradient(to bottom, rgba(0,0,0,0.05), transparent 40%);	
      transform:rotate(-60deg);
    }
    &::after {
      content:'';
      position:absolute;
      top: 80px;
      left: 25px;
      width:50px;
      height:50px;
      border-radius:100px;
      background:linear-gradient(to bottom, rgba(0,0,0,0.05), transparent 40%);	
      transform:rotate(-20deg);
    }
    ul li {
      list-style:none;
      background:#fff;
      background:radial-gradient(circle, #fff 0%, transparent 90%);
      position:absolute;
      border-radius:100%;
      opacity:0.2;
      transform:scale(1);
      transition:all 0.5s ease;
    }
    li:nth-child(1) {
      width:120%;
      height:120%;
      left:-10px;
      top:-10px;
    }
    li:nth-child(2) {
      width:140%;
      height:140%;
      left:-22.5px;
      top:-22.5px;
    }
    li:nth-child(3) {
      width:160%;
      height:160%;
      left:-35px;
      top:-35px;
    }
  }
  /* words */
  @keyframes bobbing{
    0%{ transform:translateY(0px) rotate(5deg);}
    100%{ transform:translateY(-10px) rotate(-5deg);}
  }
  .words {
    position:absolute;
    left:50%;
    bottom:30%;
    transform:translateX(-50%);
    color:rgba(255,255,255,1);
    font-size: 1.6rem;
    line-height:0.75;
    white-space:nowrap;
    z-index:9;
    span{
      animation:bobbing 4s ease-in-out infinite alternate;
      display:inline-block;
      transform-origin:50% 100%;
      padding: 0 2px;
      ${forloop()}
    }
  }
  /* ocean & wave */
  @keyframes wave {
    0% { margin-left:0; }
    100% { margin-left:-1600px; }
  }
  @keyframes swell {
    0%,100% { transform: translate3d(0,-25px,0); }
    50% {transform: translate3d(0,5px,0); }
  }
  .ocean { 
    position:absolute;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    width:125%;
    height:150px;
    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .wave {
    position: absolute;
    top:0;
    width: 6400px;
    height: 100%;
    transform: translate3d(0, 0, 0);
    background: url('./images/wave.svg')repeat-x; 
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  }
  .wave:nth-of-type(2) {
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }
`
export default ()=> {
  const forCreate = (total=Number,classname=String) =>{
    const list = [];
    for(let i = 0;i<total;i++){
      list.push(<div key={i} className={classname}/>);
    };
    return list;
  };
  const forCreateMeteor = (total=Number) =>{
    const list = [];
    for(let i = 0;i<total;i++){
      list.push(
      <div key={i} className="meteor">
        <div className="meteor-head"/>
        <div className="meteor-trail"/>
      </div>);
    };
    return list;
  };
  const forCreateSpan = (list=[])=>{
    return list.map((v,k)=>{return <span key={k}>{v}</span>});
  };
  return (
    <StyleMaintain>
      <div className="wrapper" onClick={()=>{}}>
        <div className="stars">{forCreate(7,'star')}</div>
        <div className="stars2">{forCreate(6,'star')}</div>
        <div className="meteor-stars">{forCreateMeteor(5)}</div>
        <div className="moon" onClick={()=>{}}>
          <img className="face" src="./images/moon_face.png" alt=""/>
          <ul><li/><li/><li/></ul>
        </div>
        <div className="words">{forCreateSpan(['反','饋','系','統','維','護','中','...'])}</div>
        <div className="ocean">
          <div className="content">
            <div className="wave"/>
            <div className="wave"/>
          </div>
        </div>
      </div>
    </StyleMaintain>)
};