import{j as b,a0 as i,q as p,v as s,s as u}from"./index-da2af9c7.js";const c=(e,t)=>{const r=t==="mob"?"(max-width: 833px)":`(min-width: ${_(t)})`;return Object.keys(e[t]).map((o,n)=>b.jsx("source",{media:r,srcSet:`${e[t][o][0]} 1x, ${e[t][o][1]} 2x`,type:`image/${o}`},n))},_=e=>{switch(e){case"desk":return"1440px";case"tab":return"834px";case"mob":return"833px";default:return"1440px"}},h="/fs-84-react-node-OKoHop/assets/sport_fit_tracker_desk@2x-a4191530.png",w="/fs-84-react-node-OKoHop/assets/sport_fit_tracker_tab@1x-e660733f.png",f="/fs-84-react-node-OKoHop/assets/sport_fit_tracker_tab@2x-66eecfd8.png",k="/fs-84-react-node-OKoHop/assets/sport_fit_tracker_mob@1x-52c9f1ea.png",S="/fs-84-react-node-OKoHop/assets/sport_fit_tracker_mob@2x-0a0612c8.png",a={desk:{png:[`${i}`,`${h}`]},tab:{png:[`${w}`,`${f}`]},mob:{png:[`${k}`,`${S}`]}},I=i.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),O=c(a,"desk"),T=c(a,"tab"),q=c(a,"mob"),H=`${a.desk.png[0]}`,K=I,M=p`
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  transition: ${s.transition.customTrans};
`,j=u.button`
  ${M}
  ${({width:e,textColor:t,backGrColor:r,borderColor:o,widthTab:n,widthDesk:d,backGrColorHov:m,borderColorHov:l,textColorHov:x,widthTabHov:g,widthDeskHov:$})=>p`
    width: ${e};
    color: ${t};
    background-color: ${r};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${o};

    @media (${s.mq.tabMin}) {
      width: ${n};
    }

    @media (${s.mq.deskMin}) {
      width: ${d};
    }

    &&:hover,
    &&:focus {
      background-color: ${m};
      border: 1px solid ${l};
      color: ${x};
      animation: ${s.transition.customTrans};
    }

    @media (${s.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${g};
      }
    }

    @media (${s.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${$};
      }
    }
  `}
`;export{j as S,T as a,O as b,H as c,K as d,I as e,c as g,a as i,M as s,q as w};
