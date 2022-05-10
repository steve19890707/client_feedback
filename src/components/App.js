import React, { useState, useRef, useEffect } from "react";
import packageJson from "../../package.json";
import styled from "styled-components";
import cx from "classnames";
import noop from "lodash/noop";
import device from "current-device";
import { List, fromJS } from "immutable";
// component
import Character from "./AnimeCharacter";
import CreateStar from "./CreateStar";
import CreateTextInput from "./CreateTextInput";
import Maintain from "./Maintain";
import {
  EnvelopeTop,
  EnvelopeTopCover,
  EnvelopeBottom,
  EnvelopeCover,
} from "./Envelope";
import { EnvelopeData, animeKeyframes } from "./Common/CSSAnime";
import { DialogRight, DialogLeft } from "./AnimeDialog";
import { ClassicSpinner } from "react-spinners-kit";
// api
// import { apiCreate, apiInit } from "../api";
const StyledContent = styled.div(
  ({ mediaType }) => `
  ${mediaType ? "max-width: 600px;" : ""}
  user-select: none;
  position: relative;
  transform: scale(0.85);
  height:88vh;
  margin:6vh auto;
  /* 橫板 rwd mobile iPhone 5SE*/
  @media (min-width: 568px) {
    transform: scale(0.8);
    height:100vh;
    margin:0 auto;
    width:80%;
  }
  @media (min-width: 768px) and (min-height: 1024px) {
    height:62.5vh;
    margin:18.75vh auto;
  }
  @media (min-width: 1024px) {
    height:70vh;
    margin:15vh auto;
  }
  @media (min-width: 1024px) and (min-height: 1366px) {
    height:52.5vh;
    margin:23.75vh auto;
  }
  @media (min-width: 1366px) {
    height:70vh;
    margin:15vh auto;
  }
`
);
const StyledApp = styled.div(
  ({ textareaIsOpen, EnvelopeData }) => `
  ${animeKeyframes.getIn(["StyledApp", "keyframes"])}
  @font-face {
    font-family: "MFMoDeng";
    src: url('./fonts/MFMoDeng.ttf')format('truetype');
  };
  @font-face {
    font-family: "TengXiangJiaLiCuYuanJian";
    src: url('./fonts/TengXiangJiaLiCuYuanJian.ttf')format('truetype');
  };
  @font-face {
    font-family: "Hiragino-Sans-GB";
    src: url('./fonts/Hiragino-Sans-GB.ttc'),
         url('./fonts/Hiragino-Sans-GB.otf')format("opentype");
  };
  position: relative;
  transform: scale(1);
  height:100%;
  z-index:2;
  min-width:320px;
  background:transparent;
  font-family: "Hiragino-Sans-GB";
  .bg-falsh {
    position: absolute;
    bottom:5px;
    left:50%;
    transform:translateX(-50%);
    width:95%;
    height:100%;
    z-index:3;
    animation: 
      ${animeKeyframes.getIn(["StyledApp", "name", "keepFlash"])} 
      1.5s infinite
    &.animeForSendMsg {
      display:none;
    }
    &::before {
      content:'';
      position: absolute;
      top:0;
      left:0;
      width:100%;
      padding-bottom: 32.5%;
      background:url('./images/ic_letter_bg_flash.png')no-repeat top;
      background-size:100%;
      transform:translateY(-82.5%);
    }
  }
  .container {
    position: absolute;
    bottom:5px;
    left:50%;
    transform:translateX(-50%);
    width:95%;
    height:100%;
    background-color: rgba(255,255,255,0.3);
    box-sizing:border-box;
    border-radius: 30px;
    border:1px solid rgba(255,255,255,0.5);
    padding:5%;
    z-index:4;
    overflow:hidden;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.4);
    &.animeForSendMsg {
      animation: 
      ${animeKeyframes.getIn(["StyledApp", "name", "container"])} 
      ${EnvelopeData.get("animeSecond")}s forwards;
    }
    .info-content {   
      width:100%;
      height:100%;
      border-radius: 20px;
      overflow:auto;
      background-color: #f7f1f0;
      &::-webkit-scrollbar {
        display:none;
      }
      .part-of-regular {
        position: relative;
        box-sizing:border-box;
        overflow:hidden;
        padding:12% 8% 0 8%;
        padding-bottom:${
          !textareaIsOpen ? EnvelopeData.get("mobileStraight") * 0.8 : 0
        }px;
      }
      .background {
        position: absolute;
        overflow: hidden;
        border-radius: 20px 20px 0 0;
        top:0;
        left:0;
        width:100%;
        height:150px;
        background-image:linear-gradient(to bottom, #618957 50%, #97b090);
        z-index: 1;
        .bg-content {
          position: relative;
          width:100%;
          height:100%;
        }
      }
      .information {
        position: relative;
        top:0;
        width:100%;
        z-index: 2;
      }
      .text-area {
        box-sizing:border-box;
        padding-left:15px;
        margin-bottom:15px;
        .title {
          font-size:24px;
          font-family: "TengXiangJiaLiCuYuanJian";
          color:#fff;
          letter-spacing:1.2px;
          margin-bottom:10px;
        }
        .subtitle {
          font-size:16px;
          color:#fff;
          letter-spacing:1.2px;
        }
      }
      .loading-area {
        position: relative;
        width:100%;
        height:100%;
        .spinner {
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
        }
      }
      .error-area {
        margin-top:12vh;
        text-align:center;
        .error-title {
          font-size:32px;
          font-family: "MFMoDeng";
          color:#5a564c;
          letter-spacing: 1.2px;
        }
        .error-img {
          margin:0 auto;
          width:75%;
          padding-bottom:65%;
          background:url('./images/ic_error.png')no-repeat center;
          background-size:100%;
        }
        .error-subtitle {
          font-size:16px;
          color: #5a564b;
        }
      }
      .start-list {
        position: relative;
        width:100%;
        padding:15px;
        box-sizing: border-box;
        margin:0 auto 15px auto;
        background:#fff;
        border-radius:10px;
        box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
  /* 橫板 rwd mobile iPhone 5SE*/
  @media (min-width: 568px) {
    ${animeKeyframes.getIn(["StyledApp", "rwd", "mobileHorizontal"])}
    .container {
      padding:3%;
      .info-content {
        .part-of-regular {
          padding-bottom:${
            !textareaIsOpen ? EnvelopeData.get("mobileHorizontal") * 0.8 : 0
          }px;
        }
        .text-area {
          .title {
            font-size:30px;
          }
          .subtitle {
            font-size:16px;
          }
        }
        .start-list {
          padding:20px;
        }
        .error-area {
          margin-top:3vh;
          .error-img {
            width: 60%;
            padding-bottom: 50%;
          }
        }
      }
    }
  }
  @media (min-width: 569px) {
    .container {
      .info-content {
        .background {
          height:200px;
        }
      }
    }
  }
  @media (min-width: 768px) and (min-height: 1024px) {
    .container {
      bottom:10px;
      padding:2%;
      .info-content {
        .part-of-regular {
          padding:10% 5% 0 5%;
          padding-bottom:${
            !textareaIsOpen ? EnvelopeData.get("mobileHorizontal") * 0.8 : 0
          }px;
        }
        .error-area {
          .error-subtitle {
            font-size:18px;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    ${animeKeyframes.getIn(["StyledApp", "rwd", "ipadHorizontal"])}
    .container {
      .info-content {
        .part-of-regular {
          padding:10% 8% 0 8%;
          padding-bottom:${
            !textareaIsOpen ? EnvelopeData.get("ipadHorizontal") * 0.85 : 0
          }px;
        }
        .background {
          height:225px;
        }
      }
    }
  }
  @media (min-width: 1366px) {
    ${animeKeyframes.getIn(["StyledApp", "rwd", "ipadProHorizontal"])}
    .container {
      .info-content {
        .part-of-regular {
          padding-bottom:${
            !textareaIsOpen ? EnvelopeData.get("ipadProHorizontal") * 0.85 : 0
          }px;
        }
        .background {
          height:265px;
        }
      }
    }
  }
`
);
const StyledCharacter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  z-index: 99;
  transform: translateY(-62.5%);
  @media (min-width: 768px) {
    width: 22%;
  }
`;
export default () => {
  const scrolldom = useRef(null);
  const textareaEl = useRef(null);
  const [textareaLen, setTextareaLen] = useState(Number());
  const [rateList, setRateList] = useState(List());
  const [tagList, setTagList] = useState(List());
  const [rateScore, setRateScore] = useState(List());
  const [tagCheckd, setTagCheckd] = useState(List());
  const [runAnime, setRunAnime] = useState(false);
  const [netState] = useState(true);
  const [maintain] = useState(false);
  const [apiIsSend, setApiIsSend] = useState(false);
  const [textareaIsOpen] = useState(true);
  const [dailogStauts, setDailogStauts] = useState({
    run: false,
    delay: false,
  });
  const [netStatus, setNetStatus] = useState(false);
  // btn status
  const checkRateScore = (list = List(), compareList = List()) => {
    let result;
    const sizeCompare = list.size !== compareList.size;
    if (!!~list.indexOf(undefined) || sizeCompare) {
      result = false;
    } else result = true;
    return result;
  };
  const rateScoreCheck = checkRateScore(rateScore, rateList);
  const tagCheckdSize = !textareaIsOpen ? true : tagCheckd.size > 0;
  const textareaLenSize = !textareaIsOpen ? true : textareaLen > 0;
  const formStatus = !(
    rateScoreCheck &&
    textareaLenSize &&
    tagCheckdSize &&
    rateScore.size > 0
  );
  // const paramsToken = new URL(window.location).searchParams.get("token")
  //   ? new URL(window.location).searchParams.get("token")
  //   : "";
  // const getInitRes = (res) => {
  //   res.data.error_code === 1311006 ? setMaintain(true) : setMaintain(false);
  //   const resSize = Object.keys(res.data.result).length;
  //   const white = res.data.result.white;
  //   const rate = res.data.result.rate ? fromJS(res.data.result.rate) : List();
  //   const tag = res.data.result.tag ? res.data.result.tag : [];
  //   !(resSize > 0) ? setNetState(false) : setNetState(true);
  //   const tagMapCallback = (tag) => {
  //     const list = [];
  //     tag.map((v) => {
  //       return list.push({ ...v, status: false });
  //     });
  //     return fromJS(list);
  //   };
  //   setTextareaIsOpen(!white);
  //   setRateScore(List());
  //   setTagCheckd(List());
  //   setTextareaLen(Number());
  //   setRateList(rate);
  //   setTagList(tagMapCallback(tag));
  //   setNetStatus(true);
  // };
  // const initPromise = (otherFun = noop, prop) => {
  //   const params = { token: paramsToken };
  //   return apiInit(params).then(
  //     (res) => {
  //       return getInitRes(res), otherFun(prop);
  //     },
  //     (error) => setNetState(false)
  //   );
  // };
  // sendApi
  const sendSuccess = () => {
    const delaySecond = EnvelopeData.get("animeSecond") * 2 * 1000;
    setRunAnime(true);
    if (scrolldom.current !== null) {
      scrolldom.current.scrollTop = 0;
    }
    if (netState && textareaEl.current !== null) {
      textareaEl.current.value = "";
    }
    const timer = setTimeout(() => {
      setNetStatus(false);
      setRunAnime(false);
      // initPromise(setRunAnime(), false);
    }, delaySecond);
    return () => {
      clearTimeout(timer);
    };
  };
  const sendApi = () => {
    setApiIsSend(true);
    sendSuccess();
    // const textareaElValue =
    //   textareaEl.current === null ? "" : textareaEl.current.value;
    // const data = {
    //   content: textareaElValue.trim(),
    //   rate: rateScore.toJS(),
    //   tag: tagCheckd.toJS(),
    //   token: paramsToken,
    // };
    // apiCreate(data)
    //   .then((res) => {
    //     res.data.error_code === 1311006
    //       ? setMaintain(true)
    //       : setMaintain(false);
    //     const msg = res.data.error_msg;
    //     if (msg === "SUCCESS") {
    //       sendSuccess();
    //     } else {
    //       console.log(msg);
    //       setNetState(false);
    //     }
    //   })
    //   .catch((error) => {
    //     setNetState(false);
    //   });
  };
  // useEffect(() => {
  //   const params = { token: paramsToken };
  //   apiInit(params).then(
  //     (res) => getInitRes(res),
  //     (error) => setNetState(false)
  //   );
  // }, [paramsToken]);
  useEffect(() => {
    if (runAnime) {
      return;
    }
    setRateScore(List());
    setTagCheckd(List());
    setTextareaLen(Number());
    setRateList(
      fromJS([
        {
          id: 1,
          name: "反饋問題1",
        },
        {
          id: 2,
          name: "反饋問題2",
        },
        {
          id: 3,
          name: "反饋問題3",
        },
      ])
    );
    setTagList(
      fromJS([
        {
          id: 1,
          name: "標籤1",
          status: false,
        },
        {
          id: 2,
          name: "標籤2",
          status: false,
        },
        {
          id: 3,
          name: "標籤3",
          status: false,
        },
      ])
    );
    setNetStatus(true);
  }, [runAnime]);
  useEffect(() => {
    !runAnime && setApiIsSend(false);
  }, [runAnime]);
  useEffect(() => {
    const delay = (interval) => {
      return new Promise((res) => {
        setTimeout(res, interval);
      });
    };
    const asyncFun = async () => {
      await delay(1000);
      setDailogStauts({ run: true, delay: false });
      await delay(2600);
      setDailogStauts({ run: true, delay: true });
    };
    asyncFun();
  }, [setDailogStauts]);
  return (
    <StyledContent
      data-version={packageJson.version}
      mediaType={device.desktop()}
    >
      <EnvelopeCover runState={runAnime} EnvelopeData={EnvelopeData} />
      <EnvelopeTopCover runState={runAnime} EnvelopeData={EnvelopeData} />
      <StyledApp textareaIsOpen={textareaIsOpen} EnvelopeData={EnvelopeData}>
        <div className={cx("container", { animeForSendMsg: runAnime })}>
          {netState ? (
            <div className="info-content" ref={scrolldom}>
              {netStatus ? (
                <React.Fragment>
                  <div className="part-of-regular">
                    <div className="background">
                      <div className="bg-content">
                        <DialogRight status={dailogStauts.run} />
                        <DialogLeft
                          status={dailogStauts.run}
                          delay={dailogStauts.delay}
                        />
                      </div>
                    </div>
                    <div className="information">
                      <div className="text-area">
                        <div className="title">玩家反馈</div>
                        <div className="subtitle">为这款游戏评评分吧</div>
                      </div>
                      {rateList.map((v, key) => {
                        return (
                          <div key={key} className="start-list">
                            {key === 0 && (
                              <StyledCharacter>
                                <Character />
                              </StyledCharacter>
                            )}
                            <CreateStar
                              listKey={key}
                              id={v.get("id")}
                              title={v.get("name")}
                              rateScoreKey={rateScore.get(key)}
                              setRateScore={setRateScore}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {textareaIsOpen && (
                    <CreateTextInput
                      tagList={tagList}
                      textareaLen={textareaLen}
                      textareaEl={textareaEl}
                      setTagList={setTagList}
                      setTextareaLen={setTextareaLen}
                      setTagCheckd={setTagCheckd}
                    />
                  )}
                </React.Fragment>
              ) : (
                <div className="loading-area">
                  <div className="spinner">
                    <ClassicSpinner size={45} color={`#2bc57e`} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="info-content">
              {maintain ? (
                <Maintain />
              ) : (
                <div className="error-area">
                  <div className="error-title">哎呀! 出错啦!</div>
                  <div className="error-img" />
                  <div className="error-subtitle">
                    好像出了点问题，请再重新送出
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* {netState && <div className={cx("bg-falsh",{animeForSendMsg : runAnime})}/>} */}
        <EnvelopeBottom runState={runAnime} EnvelopeData={EnvelopeData} />
        <EnvelopeTop
          runState={runAnime}
          EnvelopeData={EnvelopeData}
          formStatus={formStatus}
          apiIsSend={apiIsSend}
          netState={netState}
          sendApi={sendApi}
          reInit={noop}
        />
      </StyledApp>
    </StyledContent>
  );
};
