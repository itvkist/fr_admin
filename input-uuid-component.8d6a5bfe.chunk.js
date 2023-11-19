"use strict";(self.webpackChunkfr_be=self.webpackChunkfr_be||[]).push([[7099],{69497:(w,h,r)=>{r.r(h),r.d(h,{FieldActionWrapper:()=>p,default:()=>P});var s=r(74081),m=r(27279),F=r(61020),R=r(72450),S=r(84352);const y={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const A=new Uint8Array(16);function E(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(A)}const e=[];for(let n=0;n<256;++n)e.push((n+256).toString(16).slice(1));function I(n,t=0){return e[n[t+0]]+e[n[t+1]]+e[n[t+2]]+e[n[t+3]]+"-"+e[n[t+4]]+e[n[t+5]]+"-"+e[n[t+6]]+e[n[t+7]]+"-"+e[n[t+8]]+e[n[t+9]]+"-"+e[n[t+10]]+e[n[t+11]]+e[n[t+12]]+e[n[t+13]]+e[n[t+14]]+e[n[t+15]]}function b(n,t=0){const o=I(n,t);if(!validate(o))throw TypeError("Stringified UUID is invalid");return o}const k=null;function M(n,t,o){if(y.randomUUID&&!t&&!n)return y.randomUUID();n=n||{};const d=n.random||(n.rng||E)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){o=o||0;for(let u=0;u<16;++u)t[o+u]=d[u];return t}return I(d)}const T=M,Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function $(n){return typeof n=="string"&&Z.test(n)}const H=$;var W=r(28040),B=r(93415),C=r(1821),G=r(26322),J=r(10701),K=r(2878),L=r(77804),N=r(67588),O=r(55911),f=r(96520);const p=(0,R.ZP)(W.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:n})=>n.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:n})=>n.colors.primary600};
    }
  }
`,P=({attribute:n,description:t,placeholder:o,disabled:d,error:u,intlLabel:Q,labelAction:z,name:a,onChange:U,value:l=""})=>{const{formatMessage:v}=(0,F.Z)(),[X,x]=(0,m.useState)(!1),g=(0,m.useRef)(""),D=()=>n.options&&n.options["uuid-format"]?n.options["uuid-format"]:null,j=()=>{const i=D();return i?(0,f.DO)(i):T()};return(0,m.useEffect)(()=>{const i=D();if(!l){const Y=j();U({target:{value:Y,name:a}})}if(l&&l!==g.current&&(g.current=l),!(i?(0,f.ni)(i,l):H(l)))return x(!0);x(!1)},[l,n]),(0,s.jsx)(B.x,{children:(0,s.jsx)(C.g,{id:a,name:a,hint:t&&v(t),error:u??(X?v({id:"uuid.form.field.error",defaultMessage:"The UUID format is invalid."}):null),children:(0,s.jsxs)(G.K,{spacing:1,children:[(0,s.jsx)(J.k,{children:(0,s.jsx)(K.Q,{children:v(Q)})}),(0,s.jsx)(L._,{onChange:U,labelAction:z,placeholder:o,disabled:d||!0,required:!0,value:l,ref:g,endAction:(0,s.jsx)(p,{onClick:()=>{const i=j();U({target:{value:i,name:a}})},label:v({id:"uuid.form.field.generate",defaultMessage:"Generate"}),children:(0,s.jsx)(S.Z,{})})}),(0,s.jsx)(N.J,{}),(0,s.jsx)(O.c,{})]})})})}}}]);
