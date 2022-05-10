import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { List } from "immutable";
import cx from "classnames";
const StyledCreateTags = styled.ul`
  @keyframes scaleIn {
    0% { transform: scale(0.8,0.8) }
    50% { transform: scale(1.2,1.2) }
    100% { transform: scale(1,1) }
  }
  @keyframes fadeIn {
    0% { opacity:0; }
    100% { opacity:1; }
  }
  font-size:0;
  li {
    text-align:center;
    border-radius:50px;
    width:calc(50% - 5px);
    margin-right:10px;
    margin-bottom:10px;
    display:inline-block;
    padding:12px 0;
    box-sizing:border-box;
    background-color:#f8f6f9;
    font-size:18px;
    color:#989898;
    box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0);
    animation:fadeIn .3s;
    &:nth-child(2n){ margin-right:0; }
    &.active {
      background:linear-gradient(to top, #feea7a, #f4d553);
      color:#655c4e;
      box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.1);
      animation:scaleIn .3s;
    }
  }
  @media (min-width: 568px){
    li {
      width:calc(33.33333% - 10px);
      margin-right:15px;
      &:nth-child(2n){ margin-right:15px; }
      &:nth-child(3n){ margin-right:0; }
    }
  }
`
export default ({ 
  dataList=List(),
  checked=[],
  setChecked=noop,
})=>{
  return(
    <StyledCreateTags>
      {
        dataList.map((value,key)=>{
          return (
            <li 
              className={cx({ active : !!~checked.indexOf(value.get("name")) })} 
              key={key}
              onClick={()=>{
                if(!!~checked.indexOf(value.get("name"))){
                  setChecked(prev=> List(prev).filter(v => v !== value.get("name")).toArray())
                }else {
                  setChecked(prev=> List(prev).push(value.get("name")).toArray())
                }
              }}
            >{value.get("name")}</li>
          )
        })
      }
    </StyledCreateTags>
  )
};