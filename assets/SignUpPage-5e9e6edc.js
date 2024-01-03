import{s as d,z as K,B as v,C as g,j as t,K as B,u as G,a as T,O as C,r as y,Q as N,R as L,S as q,T as E,U as F,V as P,W,X as D,Y as R,Z as V,$ as Y}from"./index-da2af9c7.js";import{s as j,g as r,i as x,e as U}from"./Buttons.styled-326a5c58.js";import{u as z}from"./useAuthResetError-156278f0.js";const Q=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${e=>e.$hasBackButton?"24px":"40px"};
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 328px;
  }
`,X=d.div.attrs(e=>({row:e.row?"true":void 0}))`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${e=>e.theme.mq.tabMin}) {
    flex-direction: ${e=>e.row?"column":"row"};
  }

  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 444px;
    flex-direction: column;
  }
`,Z=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${e=>e.theme.mq.deskMin}) {
    max-width: 212px;
  }
`,J=d.span`
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: -8px;
`,I={main:[{name:"Name",typeInput:"text",placeholder:"Name"},{name:"Email",typeInput:"email",placeholder:"Email"},{name:"Password",typeInput:"password",placeholder:"Password"}],parameters:[{name:"height",typeInput:"number",label:"Height",placeholder:"Enter your height"},{name:"weight",typeInput:"number",label:"Weight",placeholder:"Enter your weight"}],age:[{name:"age",typeInput:"number",label:"Your age",placeholder:"Enter your age"}]},p={goal:["Lose fat","Maintain","Gain Muscle"],gender:["Male","Female"],activity:["1.2 - If you do not have physical activity and sedentary work","1.375 - If you do short runs or light gymnastics 1-3 times a week","1.55 - If you play sports with average loads 3-5 times a week","1.725 - If you train fully 6-7 times a week","1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]},ee=e=>K({name:v().required("Name is required field"),email:v().email("Invalid email address").required("Email is required field"),password:v().min(8,"Password must be at least 8 characters").required("Password is required field"),age:e===2?g().required("Age is required field").positive("Age must be a positive number").integer("Age must be an integer").min(1,"Age must be at least 12 years old").max(150,"Age must be at most 150 years old"):g(),weight:e===3?g().required("Weight is required field").positive("Weight must be a positive number").min(5,"Weight must be at least 30").max(400,"Weight must be at most 500"):g(),height:e===3?g().required("Height is required field").positive("Height must be a positive number").min(50,"Height must be at least 60").max(300,"Height must be at most 300"):g()}),te=d.button`
  ${j}
  width: 100%;
  background: ${e=>e.theme.colors.primaryGreenLite};
  border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  &:hover {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
    color: ${e=>e.theme.colors.primaryGray};
  }
`,se=({btnName:e})=>t.jsx(te,{children:e}),oe=d.button`
  ${j}
  color: ${e=>e.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin: auto;
  &:hover {
    border-color: ${e=>e.theme.colors.primaryGreenLite};
    width: 100%;
  }
`,ae=d.label`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`,re=d.input`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid ${e=>e.theme.colors.primaryGray};
  border-radius: 50%;
  margin-right: 8px;
  transition: ${e=>e.theme.transition.customTrans};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 2px;
    transition: ${e=>e.theme.transition.customTrans};
  }
  &:checked::after {
    background-color: ${e=>e.theme.colors.primaryGreenLite};
  }
  &:hover {
    border: 1px solid ${e=>e.theme.colors.primaryGreenLite};
  }
  &:focus {
    outline: none;
  }
`,ie=({name:e,value:o,onChange:i,onBlur:n,checked:a,label:c})=>t.jsx(t.Fragment,{children:t.jsxs(ae,{children:[t.jsx(re,{type:"radio",name:e,value:o,onChange:i,onBlur:n,checked:a}),c]})}),S=(e,o,i,n=!1)=>t.jsx(X,{row:n,children:o.map((a,c)=>t.jsx(ie,{name:e,value:a.toLowerCase(),onChange:i.handleChange,onBlur:()=>i.handleBlur({target:{name:e}}),checked:typeof i.values[e]=="string"&&i.values[e].toLowerCase()===a.toLowerCase(),label:a},c))}),w=(e,o,i=!1)=>e.map(({name:n,typeInput:a,label:c,placeholder:b})=>t.jsx("div",{children:t.jsx(B,{formik:o,id:n.toLowerCase(),type:a,placeholder:b,label:c,onBlur:()=>o.handleBlur({target:{name:n}}),showError:()=>i(!0)})},n)),ne=e=>{const o=parseFloat(e);return isNaN(o)?0:o},ce=({currentStep:e,setCurrentStep:o,onError:i})=>{const n=G(),a=T(C),[c,b]=y.useState({name:"",email:"",password:"",goal:p.goal[0].toLowerCase(),gender:p.gender[0].toLowerCase(),age:"",weight:"",height:"",activity:p.activity[0].toLowerCase()}),l={initialValues:c,validationSchema:ee(e),onSubmit:async m=>{if(e===4){const u=s.values.activity;m.activity=ne(m.activity);try{await n(N(m)),m.activity=u}catch{i(a||"An unexpected error occurred.")}}else o(u=>u+1),b(u=>({...u,...m}))}};(e===2||e===3)&&(l.validateOnChange=!1,l.validateOnBlur=!1);const s=L(l);y.useEffect(()=>{a&&i(a)},[a,i]);const h=()=>{e>0&&o(m=>m-1)};return t.jsxs("form",{onSubmit:s.handleSubmit,children:[t.jsxs(Q,{$hasBackButton:e>0,children:[e===0&&t.jsx(t.Fragment,{children:w(I.main,s)}),e===1&&t.jsx(t.Fragment,{children:S("goal",p.goal,s)}),e===2&&t.jsxs(t.Fragment,{children:[t.jsx(J,{children:"Gender"}),S("gender",p.gender,s),w(I.age,s)]}),e===3&&t.jsx(t.Fragment,{children:w(I.parameters,s)}),e===4&&t.jsx(t.Fragment,{children:S("activity",p.activity,s,!0)})]}),t.jsxs(Z,{children:[t.jsx(se,{type:"submit",btnName:e===4?"Submit":"Next"}),e>0&&t.jsx(oe,{type:"button",onClick:h,children:"Back"})]})]})},A="/fs-84-react-node-OKoHop/assets/body_parameters_desk@1x-1c715572.png",de="/fs-84-react-node-OKoHop/assets/body_parameters_desk@2x-28117c28.png",me="/fs-84-react-node-OKoHop/assets/body_parameters_tab@1x-c695adc6.png",le="/fs-84-react-node-OKoHop/assets/body_parameters_tab@2x-90001dc8.png",ge="/fs-84-react-node-OKoHop/assets/body_parameters_mob@1x-98e56b9f.png",pe="/fs-84-react-node-OKoHop/assets/body_parameters_mob@2x-0f8a4fd8.png",f={desk:{png:[`${A}`,`${de}`]},tab:{png:[`${me}`,`${le}`]},mob:{png:[`${ge}`,`${pe}`]}},be=A.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),he=r(f,"desk"),ue=r(f,"tab"),xe=r(f,"mob"),ye=`${f.desk.png[0]}`,fe=be,H="/fs-84-react-node-OKoHop/assets/gender_and_age_desk@1x-20ef5e41.png",_e="/fs-84-react-node-OKoHop/assets/gender_and_age_desk@2x-45c6a53e.png",ke="/fs-84-react-node-OKoHop/assets/gender_and_age_tab@1x-77482e77.png",$e="/fs-84-react-node-OKoHop/assets/gender_and_age_tab@2x-10e03a0d.png",ve="/fs-84-react-node-OKoHop/assets/gender_and_age_mob@1x-8a050d10.png",Ie="/fs-84-react-node-OKoHop/assets/gender_and_age_mob@2x-bfdf5d0b.png",_={desk:{png:[`${H}`,`${_e}`]},tab:{png:[`${ke}`,`${$e}`]},mob:{png:[`${ve}`,`${Ie}`]}},Se=H.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),we=r(_,"desk"),je=r(_,"tab"),Ae=r(_,"mob"),He=`${_.desk.png[0]}`,Me=Se,M="/fs-84-react-node-OKoHop/assets/activity_desk@1x-3938b1bf.png",Oe="/fs-84-react-node-OKoHop/assets/activity_desk@2x-f0e9f5cb.png",Ke="/fs-84-react-node-OKoHop/assets/activity_tab@1x-b19b7244.png",Be="/fs-84-react-node-OKoHop/assets/activity_tab@2x-2d24ebb8.png",Ge="/fs-84-react-node-OKoHop/assets/activity_mob@1x-6e9825c8.png",Te="/fs-84-react-node-OKoHop/assets/activity_mob@2x-8945770f.png",k={desk:{png:[`${M}`,`${Oe}`]},tab:{png:[`${Ke}`,`${Be}`]},mob:{png:[`${Ge}`,`${Te}`]}},Ce=M.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ne=r(k,"desk"),Le=r(k,"tab"),qe=r(k,"mob"),Ee=`${k.desk.png[0]}`,Fe=Ce,O="/fs-84-react-node-OKoHop/assets/summer_hiking_desk@1x-a71ef474.png",Pe="/fs-84-react-node-OKoHop/assets/summer_hiking_desk@2x-10ca5519.png",We="/fs-84-react-node-OKoHop/assets/summer_hiking_tab@1x-31b23b5f.png",De="/fs-84-react-node-OKoHop/assets/summer_hiking_tab@2x-fa3fa793.png",Re="/fs-84-react-node-OKoHop/assets/summer_hiking_mob@1x-91b8a54a.png",Ve="/fs-84-react-node-OKoHop/assets/summer_hiking_mob@2x-2eda95f6.png",$={desk:{png:[`${O}`,`${Pe}`]},tab:{png:[`${We}`,`${De}`]},mob:{png:[`${Re}`,`${Ve}`]}},Ye=O.replace("/healthy_hub/src/images/Illustrations/Welcome/","").split("_d")[0].split(".")[0].replace(/_/g," "),Ue=r($,"desk"),ze=r($,"tab"),Qe=r($,"mob"),Xe=`${$.desk.png[0]}`,Ze=Ye,Je={0:{media:{srcDesk:r(x,"desk"),srcTab:r(x,"tab"),srcMob:r(x,"mob"),imgSrc:`${x.desk.png[0]}`,alt:U},info:{title:"Sign up",text:"You need to register to use the service"}},1:{media:{srcDesk:Ue,srcTab:ze,srcMob:Qe,imgSrc:Xe,alt:Ze},info:{title:"Your goal",text:"Choose a goal so that we can help you effectively"}},2:{media:{srcDesk:we,srcTab:je,srcMob:Ae,imgSrc:He,alt:Me},info:{title:"Select gender, Age",text:"Choose a goal so that we can help you effectively"}},3:{media:{srcDesk:he,srcTab:ue,srcMob:xe,imgSrc:ye,alt:fe},info:{title:"Body parameters",text:"Enter your parameters for correct performance tracking"}},4:{media:{srcDesk:Ne,srcTab:Le,srcMob:qe,imgSrc:Ee,alt:Fe},info:{title:"Your Activity",text:"To correctly calculate calorie and water intake"}}},rt=()=>{const{resetAuthError:e}=z(),[o,i]=y.useState(0),[n,a]=y.useState(null),c=h=>{i(h),a(null)},b=h=>{a(h)},l=o===0,s=Je[o];return t.jsxs("div",{className:"container",children:[n&&n.type==="register"&&t.jsx(q,{children:n.message}),t.jsxs(E,{children:[t.jsx(F,{children:t.jsxs("picture",{children:[s==null?void 0:s.media.srcDesk,s==null?void 0:s.media.srcTab,s==null?void 0:s.media.srcMob,t.jsx("img",{src:s==null?void 0:s.media.imgSrc,alt:s==null?void 0:s.media.alt})]})}),t.jsxs(P,{children:[t.jsx(W,{children:s==null?void 0:s.info.title}),t.jsx(D,{children:s==null?void 0:s.info.text}),t.jsx(R,{$isSigninVisible:l,children:t.jsx(ce,{onError:b,currentStep:o,setCurrentStep:c})}),l&&t.jsxs(V,{children:[t.jsx("p",{children:"Do you already have an account?"}),t.jsx(Y,{to:"/signin",onClick:e,children:"Sign in"})]})]})]})]})};export{rt as default};
