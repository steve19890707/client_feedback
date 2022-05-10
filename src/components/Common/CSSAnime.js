import { Map } from "immutable";
export const EnvelopeData = Map({
  mobileStraight: 110,
  mobileStraightCover: 110 * 1.1,
  mobileHorizontal: 120,
  mobileHorizontalCover: 120 * 1.15,
  ipadHorizontal: 150,
  ipadHorizontalCover: 150 * 1.2,
  ipadProHorizontal: 175,
  ipadProHorizontalCover: 175 * 1.2,
  animeSecond: 2.5,
});
// other common data & num
const StyledAppContainerHeightNum = 1.45;

export const animeKeyframes = Map({
  StyledApp: {
    keyframes: `
      @keyframes keepFlash {
        0% { opacity:0; }
        50% { opacity:1; }
        100% { opacity:0; }
      };
      @keyframes containerAnimeForSendMsg {
        35% {
          height:${EnvelopeData.get("mobileStraight")*StyledAppContainerHeightNum}px; 
          transform:translateX(-50%)translateY(${EnvelopeData.get("mobileStraight")*StyledAppContainerHeightNum/2}px);
          bottom:50%; 
        }
        50% {
          height:${EnvelopeData.get("mobileStraight")*StyledAppContainerHeightNum}px; 
          transform:translateX(-50%)translateY(${EnvelopeData.get("mobileStraight")*StyledAppContainerHeightNum/2}px);
          bottom:50%; 
        }
        100% { 
          height:0px;
          transform:translateX(-50%)translateY(${EnvelopeData.get("mobileStraight")*StyledAppContainerHeightNum/2}px); 
          bottom:50%; 
        }
      };
    `,
    rwd: {
      mobileHorizontal:`
        @keyframes containerAnimeForSendMsg {
          35% {
            height:${EnvelopeData.get("mobileHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("mobileHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          50% {
            height:${EnvelopeData.get("mobileHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("mobileHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          100% { 
            height:0px;
            transform:translateX(-50%)translateY(${EnvelopeData.get("mobileHorizontal")*StyledAppContainerHeightNum/2}px); 
            bottom:50%; 
          }
        };
      `,
      ipadHorizontal:`
        @keyframes containerAnimeForSendMsg {
          35% {
            height:${EnvelopeData.get("ipadHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          50% {
            height:${EnvelopeData.get("ipadHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          100% { 
            height:0px;
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadHorizontal")*StyledAppContainerHeightNum/2}px); 
            bottom:50%; 
          }
        };
      `,
      ipadProHorizontal:`
        @keyframes containerAnimeForSendMsg {
          35% {
            height:${EnvelopeData.get("ipadProHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadProHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          50% {
            height:${EnvelopeData.get("ipadProHorizontal")*StyledAppContainerHeightNum}px; 
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadProHorizontal")*StyledAppContainerHeightNum/2}px);
            bottom:50%; 
          }
          100% { 
            height:0px;
            transform:translateX(-50%)translateY(${EnvelopeData.get("ipadProHorizontal")*StyledAppContainerHeightNum/2}px); 
            bottom:50%; 
          }
        };
      `
    },
    name: {
      keepFlash:`keepFlash`,
      container:`containerAnimeForSendMsg`
    }
  },
  EnvelopeTop: {
    keyframes: `
      @keyframes EnvelopeTopAnimeForSendMsg {
        50% { transform:translateY(100%);bottom:50%; }
        100% { transform:translateY(100%);bottom:50%; }
      };
      @keyframes TickAnimeForSendMsg {
        75% { opacity:0 }
        100% { opacity:1 } 
      };
      @keyframes shadowAAnimeForSendMsg {
        75% { opacity:0 }
        100% { opacity:1 }
      };
      @keyframes shadowBAnimeForSendMsg {
        0% { opacity:0 }
        50% { opacity:1 }
        100% { opacity:1 }
      };
    `,
    name: {
      main:`EnvelopeTopAnimeForSendMsg`,
      Tick:`TickAnimeForSendMsg`,
      shadowA: `shadowAAnimeForSendMsg`,
      shadowB: `shadowBAnimeForSendMsg`,
    }
  },
  EnvelopeBottom: {
    keyframes: `
      @keyframes EnvelopeBottomAnimeForSendMsg {
        0% { transform:translateY(0%); bottom:0; }
        50% {  transform:translateY(50%); bottom:50%; }
        100% { transform:translateY(50%); bottom:50%; }
      };
    `,
    name: {
      main:`EnvelopeBottomAnimeForSendMsg`
    }
  },
  EnvelopeCover: {
    keyframes: `
      @keyframes EnvelopeCoverAnimeForSendMsg {
        50% { 
          border-radius: 0 0 0 0;
          transform:translateY(${EnvelopeData.get("mobileStraightCover") - (EnvelopeData.get("mobileStraight")*1.68)/2}px)rotateX(180deg); 
          bottom:50%; 
          z-index:1;
        }
        100% { 
          border-radius: 0 0 0 0;
          transform:translateY(${EnvelopeData.get("mobileStraightCover") - (EnvelopeData.get("mobileStraight")*1.68)/2}px)rotateX(0deg); 
          bottom:50%;
          z-index:5;
        }
      };
      @keyframes EnvelopeCoverTextAnimeForSendMsg {
        75% { opacity:0; }
        100% { opacity:1; }
      };
      // RWD
    `,
    rwd: {
      mobileHorizontal:`
        @keyframes EnvelopeCoverAnimeForSendMsg {
          50% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("mobileHorizontalCover") - (EnvelopeData.get("mobileHorizontal")*1.68)/2}px)rotateX(180deg); 
            bottom:50%;
            z-index:1
          }
          100% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("mobileHorizontalCover") - (EnvelopeData.get("mobileHorizontal")*1.68)/2}px)rotateX(0deg); 
            bottom:50%;
            z-index:5;
          }
        };
      `,
      ipadHorizontal:`
        @keyframes EnvelopeCoverAnimeForSendMsg {
          50% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("ipadHorizontalCover") - (EnvelopeData.get("ipadHorizontal")*1.68)/2}px)rotateX(180deg); 
            bottom:50%;
            z-index:1
          }
          100% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("ipadHorizontalCover") - (EnvelopeData.get("ipadHorizontal")*1.68)/2}px)rotateX(0deg); 
            bottom:50%;
            z-index:5;
          }
        };
      `,
      ipadProHorizontal:`
        @keyframes EnvelopeCoverAnimeForSendMsg {
          50% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("ipadProHorizontalCover") - (EnvelopeData.get("ipadProHorizontal")*1.68)/2}px)rotateX(180deg); 
            bottom:50%;
            z-index:1
          }
          100% { 
            border-radius: 0 0 0 0;
            transform:translateY(${EnvelopeData.get("ipadProHorizontalCover") - (EnvelopeData.get("ipadProHorizontal")*1.68)/2}px)rotateX(0deg); 
            bottom:50%;
            z-index:5;
          }
        };
      `
    },
    name: {
      main:`EnvelopeCoverAnimeForSendMsg`,
      text:`EnvelopeCoverTextAnimeForSendMsg`
    }
  }
});