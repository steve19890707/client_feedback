import React from "react";
import styled, { css } from "styled-components";
import noop from "lodash/noop";
import cx from "classnames";
const createAnimeScaleActive = ()=>{
  let styles = '';
  for (let i = 1; i < 6; i += 1) {
    styles += `
      @keyframes transitionScaleActive-${i} {
        0%{ transform:translate(-50%,-50%)scale(0,0) }
        50%{ transform:translate(-50%,-50%)scale(${1+i*0.1},${1+i*0.1}) }
        100%{ transform:translate(-50%,-50%)scale(1,1) }
      };
    `
  }
  return css`${styles}`;
}
const StyleContent = styled.div`
  width:100%;
  display:flex;
  align-items:flex-start;
  justify-content: center;
  @media (min-width: 768px){
    width:80%;
    margin: 0 auto;
  }
`
const StyledStarOutside = styled.div`
  position: relative;
  width:20%;
  padding-bottom:20%;
  height:100%;
`
const StyledStar = styled.div(({ index })=>`
  @keyframes transitionScale {
    0%{ transform:translate(-50%,-50%)scale(0.5,0.5) }
    100%{ transform:translate(-50%,-50%)scale(1,1) }
  };
  ${createAnimeScaleActive()}
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  height:100%;
  max-width:80px;
  max-height:80px;
  background:url('./images/ic_star_sprite.png')no-repeat;
  background-size:100%;
  background-position-y:100%;
  -webkit-tap-highlight-color: transparent;
  animation:transitionScale .3s;
  &.active-${index+1} {
    background-position-y:0%;
    animation:transitionScaleActive-${index+1} .3s;
  }
`)
const StyleTitle = styled.div`
  font-family: sans-serif;
  font-size:18px;
  font-weight:bold;
  padding-bottom:10px;
  color:#3e4356;
  letter-spacing:1.5px;
  text-align:center;
  @media (min-width: 568px){
    padding-bottom:5px;
    font-size:20px;
  }
`
const StyleText = styled.div`
  padding-top:10px;
  font-size:16px;
  font-style:italic;
  color:#949d92;
  text-align:center;
  @media (min-width: 568px){
    padding-top:5px;
    font-size:18px;
  }
`
export default ({
  listKey=Number(),
  id=Number(),
  title='',
  rateScoreKey={},
  setRateScore=noop
})=> {
  let starArr = [1,2,3,4,5];
  let text
  const rateNumber = rateScoreKey.rate ? rateScoreKey.rate : 0;
  switch(rateNumber){
    case 0:
      text = `请给评分`;
      break;
    case 1:
      text = `有待改进`;
      break;
    case 2:
      text = `一般般吧`;
      break;
    case 3:
      text = `还算满意`;
      break; 
    case 4: 
      text = `点赞棒棒哒`;
      break;
    case 5: 
      text = `厉害了，简直牛逼`;
      break;
    default: text = ``;
      break;
  };
  return (
    <>
      <StyleTitle>{title}</StyleTitle>
      <StyleContent>
        {
          starArr.map((value, key)=>{
            const activeKey = `active-${key+1}`
            return (
              <StyledStarOutside key={key}>
                <StyledStar 
                  index={key} 
                  className={cx({ [activeKey]: !(value > rateNumber) })}
                  onClick={()=>{setRateScore(prev=> prev.set(listKey,{
                    id:id,
                    rate:key+1
                  }))}}
                />
              </StyledStarOutside>
          )})
        }
      </StyleContent>
      <StyleText>{text}</StyleText>
    </>
  )
};