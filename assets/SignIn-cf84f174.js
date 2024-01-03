import{z as m,B as a,u as d,a as p,O as _,R as g,a2 as h,j as s,S as b,a0 as x,K as j,L as i}from"./index-feebf4e0.js";import{u as w}from"./useAuthResetError-5608fad8.js";const f=()=>m({email:a().email("Invalid email address").required("Required field"),password:a().min(8).required("Required field")}),S="_wrapper_1oeub_2",q="_img_1oeub_9",B="_title_1oeub_15",N="_subtitle_1oeub_23",v="_form_1oeub_31",y="_error_1oeub_37",k="_signinBtn_1oeub_42",E="_forgotPassword_1oeub_63",I="_question_1oeub_76",F="_signupBtn_1oeub_83",R="_content_1oeub_107",P="_questionTrumb_1oeub_153",e={wrapper:S,img:q,title:B,subtitle:N,form:v,error:y,signinBtn:k,forgotPassword:E,question:I,signupBtn:F,content:R,questionTrumb:P},T=()=>{const c=d(),t=p(_),l=[{name:"email",placeholder:"E-mail",type:"text"},{name:"password",placeholder:"Password",type:"password"}],{resetAuthError:n}=w(),r=g({initialValues:{email:"",password:""},validationSchema:f(),onSubmit:o=>{try{c(h(o))}catch(u){console.error("Registration failed:",u.message)}}});return s.jsxs("div",{className:"container",children:[t&&t.type==="login"&&s.jsx(b,{children:t.message}),s.jsxs("div",{className:e.wrapper,children:[s.jsx("img",{className:e.img,src:x,alt:"illustration-sport-and-fitness-tracker"}),s.jsxs("div",{className:e.content,children:[s.jsx("h1",{className:e.title,children:"Sign in"}),s.jsx("h2",{className:e.subtitle,children:"You need to login to use the service"}),s.jsxs("form",{className:e.form,onSubmit:r.handleSubmit,children:[l.map(o=>s.jsx(j,{formik:r,id:o.name.toLowerCase(),type:o.type,placeholder:o.placeholder,label:o.label,onBlur:()=>r.handleBlur({target:{name:o.name}}),showError:!0},o.name)),s.jsx("button",{className:e.signinBtn,type:"submit",children:"Sign in"}),s.jsx(i,{className:e.forgotPassword,to:"/forgot-password",onClick:n,children:"Forgot your password?"})]}),s.jsxs("div",{className:e.questionTrumb,children:[s.jsx("p",{className:e.question,children:" If you don't have an account yet? "}),s.jsx(i,{className:e.signupBtn,to:"/signup",onClick:n,children:"Sign up"})]})]})]})]})},L=()=>s.jsx("div",{children:s.jsx(T,{})});export{L as default};
