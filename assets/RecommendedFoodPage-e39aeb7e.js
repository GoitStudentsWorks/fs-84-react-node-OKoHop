import{s as n,N as l,r as d,u as g,p as f,j as e,i as w}from"./index-feebf4e0.js";import{g as u,r as j,R}from"./randomizeFood-311ab53c.js";const y="/fs-84-react-node-OKoHop/assets/Ketogenic-f362ff99.png",k=n.main`
  background-color: ${t=>t.theme.colors.primaryBlack};
  color: ${t=>t.theme.colors.primaryWhite};
  font-family: 'Poppins', sans-serif;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 320px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,F=n.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px;
  }
`,L=n.header`
  display: flex;
  margin-bottom: 16px;
`,b=n(l)`
  display: flex;
  margin-right: 8px;

  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`,v=n.img`
  width: 16px;
  @media screen and (min-width: 834px) {
    width: 24px;
  }
`,B=n.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,C=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
    align-items: start;
    justify-content: flex-end;
  }
`,z=n.img`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
  }
`,E=n.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,H="/fs-84-react-node-OKoHop/assets/arrow-right-246ec13a.svg";function A(){var a;const[t,o]=d.useState([]),r=g(),s=f(),c=d.useRef(((a=s.state)==null?void 0:a.from)??"/main");return d.useEffect(()=>{u().then(i=>{o(j(i,10))}).catch(i=>console.error(i))},[]),e.jsx(k,{children:e.jsxs(F,{children:[e.jsxs(L,{children:[e.jsx(b,{to:c.current,onClick:()=>r(w("today")),children:e.jsx(v,{src:H,alt:"arrow right"})}),e.jsx(B,{children:"Recommended food"})]}),e.jsxs(C,{children:[e.jsx(z,{src:y,alt:"Banner recommended food"}),e.jsx(E,{children:t.map(({_id:i,img:p,name:m,amount:x,calories:h})=>e.jsx(R,{id:i,img:p,name:m,amount:x,calories:h},i))})]})]})})}export{A as default};
