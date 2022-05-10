import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { List } from "immutable";
import { FiCheck } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import cx from "classnames";
// data
import { EnvelopeData } from "./Common/CSSAnime";

const StyleContent = styled.div(({ EnvelopeData })=>`
  margin-top:5px;
  border-radius: 20px;
  box-sizing:border-box;
  padding:0 5%;
  padding-bottom:${EnvelopeData.get("mobileStraight")*0.8}px;
  background-color: #83a473;
  .title {
    text-align:center;
    font-size:18px;
    color:#fff;
    padding:20px 0;
  }
  .textare-area {
    position: relative;
    box-sizing:border-box;
    margin-top:5px;
    padding:12px 12px 30px 12px;
    border-radius: 15px;
    border:1px solid #e2e2e2;
    background-color:#fff;
    textarea {
      width:100%;
      padding:0;
      margin:0;
      min-height:65px;
      font-size:16px;
      color:#5a564b;
      outline:none;
      border:none;
      -webkit-tap-highlight-color: transparent;
      line-height:1.2;
      &::placeholder {
        font-size:16px;
        color:#9f9f9f;
      }
    }
    .limitTip {
      position: absolute;
      right:12px;
      bottom:12px;
      font-size:16px;
      color:#9f9f9f;
    }
  }
  /* 橫板 rwd mobile iPhone 5SE*/
  @media (min-width: 568px) {
    padding-bottom:${EnvelopeData.get("mobileHorizontal")*0.8}px;
  };
  @media (min-width: 768px) and (min-height: 1024px) {
    padding-bottom:${EnvelopeData.get("mobileHorizontal")*0.8}px;
  };
  @media (min-width: 1024px) {
    padding-bottom:${EnvelopeData.get("ipadHorizontal")*0.85}px;
  };
  @media (min-width: 1366px) {
    padding-bottom:${EnvelopeData.get("ipadProHorizontal")*0.85}px;
  };
`);
const TagArea = styled.ul`
  @keyframes scaleIn {
    0% { opacity:0;transform:scale(0); }
    100% { opacity:1;transform:scale(1); }
  }
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  li {
    width:31.33333%;
    margin-right:3%;
    margin-bottom:8px;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:8px 0;
    background-color:#67825b;
    transition:.2s;
    span {
      color:#fff;
      font-size:16px;
    }
    &:nth-child(3n) {
      margin-right:0;
    }
    svg {
      width:22px;
      height:22px;
      fill:#fff;
      margin-left:4px;
    }
    &.check {
      background-color:#fff;
      animation:scaleIn .2s;
      span {
        color:#597c52;
      }
      svg {
        stroke: #597c52;
        stroke-width:3px;
      }
    }
  }
  @media (min-width: 568px) {
    li {
      width:23.5%;
      margin-right:2%;
      &:nth-child(3n) {
      margin-right:2%;
    }
      &:nth-child(4n) {
        margin-right:0;
      }
    }
  }
`
export default ({
  tagList=List(),
  textareaLen=Number(),
  textareaEl='',
  setTagList=noop,
  setTextareaLen=noop,
  setTagCheckd=noop
})=> {
  const textareaLenLimit = 100;
  const CreateTags = () => {
    return (
      <TagArea>
        {tagList.filter(v=>v.get("id")!==6).map((value,index)=>{
            return (
              <li 
                key={index}
                className={cx({ check : value.get('status')})}
                onClick={()=>{
                  setTagList(prev => prev.setIn([index,'status'],!value.get('status')));
                  setTagCheckd(prev => {
                    if(!!~prev.indexOf(value.get("id"))){
                      return prev.filter(v => v !== value.get("id"))
                    }else {
                      return prev.push(value.get("id"))
                    };
                  })
                }}
              >
                <span>{value.get('name')}</span>
                {!value.get('status') ? <IoMdAddCircle/> : <FiCheck/>}
              </li>
            )
          })}
      </TagArea>
    )}
  return (
  <StyleContent EnvelopeData={EnvelopeData}>
    <div className="title">请选择反馈类型(可复选)</div>
    {CreateTags()}
    <div className="textare-area">
      <textarea 
        ref={textareaEl}
        maxLength={textareaLenLimit}
        placeholder="可以详细说说吗？" 
        onChange={(event)=>{ 
          event.target.value = event.target.value.replace(/^\s+/g, "");
          setTextareaLen(String(textareaEl.current.value.length))
        }}
      />
      <div className="limitTip">{textareaLen}/{textareaLenLimit}</div>
    </div>
  </StyleContent>)
}