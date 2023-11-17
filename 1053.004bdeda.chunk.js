"use strict";(self.webpackChunkfr_be=self.webpackChunkfr_be||[]).push([[1053],{90114:(Y,p,t)=>{t.d(p,{A:()=>e,T:()=>n});const e="api-token",n="transfer-token"},31053:(Y,p,t)=>{t.r(p),t.d(p,{default:()=>f});var e=t(74081),n=t(87006),I=t(59461),U=t(44328),C=t(27279),P=t(73354),g=t(27875),K=t(74758),i=t(36938),s=t(29206),R=t(61020),u=t(40464),k=t(51447),A=t(90114),S=t(8114),H=t(64797),b=t(85811),N=t(47599),J=t(15816),z=t(97442),h=t(13576),Z=t(87830),Q=t(47184),v=t(364),B=t(71563),a=t(49204),r=t(47853),c=t(75719),D=t(74919),M=t(98934),_=t(43433),l=t(8175);const m=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],T=()=>{(0,n.go)();const L=(0,u.useQueryClient)(),{formatMessage:O}=(0,R.Z)(),x=(0,n.lm)(),$=(0,I.v9)(U.s),{allowedActions:{canCreate:y,canDelete:o,canUpdate:F,canRead:E}}=(0,n.ss)($.settings["api-tokens"]),{push:G}=(0,k.k6)(),{trackUsage:j}=(0,n.rS)(),{startSection:tt}=(0,n.c1)(),X=C.useRef(tt),{get:et,del:st}=(0,n.kY)(),{formatAPIError:w}=(0,n.So)();C.useEffect(()=>{X.current&&X.current("apiTokens")},[]),C.useEffect(()=>{G({search:s.stringify({sort:"name:ASC"},{encode:!1})})},[G]);const nt=m.map(d=>({...d,metadatas:{...d.metadatas,label:O(d.metadatas.label)}})),{data:W,isLoading:at}=(0,u.useQuery)(["api-tokens"],async()=>{j("willAccessTokenList",{tokenType:A.A});const{data:{data:d}}=await et("/admin/api-tokens");return j("didAccessTokenList",{number:d.length,tokenType:A.A}),d},{cacheTime:0,enabled:E,onError(d){x({type:"warning",message:w(d)})}}),q=at,ot=(0,u.useMutation)(async d=>{await st(`/admin/api-tokens/${d}`)},{async onSuccess(){await L.invalidateQueries(["api-tokens"]),j("didDeleteToken")},onError(d){x({type:"warning",message:w(d)})}}),V=W&&W.length>0,it=E&&V,dt=E&&!V&&!y,rt=E&&!V&&y;return(0,e.jsxs)(P.o,{"aria-busy":q,children:[(0,e.jsx)(n.SL,{name:"API Tokens"}),(0,e.jsx)(g.T,{title:O({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:O({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:y&&(0,e.jsx)(n.Qj,{"data-testid":"create-api-token-button",startIcon:(0,e.jsx)(i.Z,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:A.A}),to:"/settings/api-tokens/create",children:O({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,e.jsxs)(K.D,{children:[!E&&(0,e.jsx)(n.ZF,{}),it&&(0,e.jsx)(S.T,{permissions:{canRead:E,canDelete:o,canUpdate:F},headers:nt,contentType:"api-tokens",rows:W,isLoading:q,onConfirmDelete:d=>ot.mutateAsync(d),tokens:W,tokenType:A.A}),rt&&(0,e.jsx)(n.dJ,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,e.jsx)(n.Qj,{variant:"secondary",startIcon:(0,e.jsx)(i.Z,{}),to:"/settings/api-tokens/create",children:O({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),dt&&(0,e.jsx)(n.dJ,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},f=()=>{const L=(0,I.v9)(U.s);return(0,e.jsx)(n.O4,{permissions:L.settings["api-tokens"].main,children:(0,e.jsx)(T,{})})}},8114:(Y,p,t)=>{t.d(p,{T:()=>v});var e=t(74081),n=t(93415),I=t(4987),U=t(86967),C=t(93153),P=t(50086),g=t(32370),K=t(10701),i=t(87006),s=t(70627),R=t(61020),u=t(51447),k=t(27279),A=t(78665),S=t(98264),H=t(26784),b=t(72450);const N=({tokenName:a,onClickDelete:r,tokenType:c})=>{const{formatMessage:D}=(0,R.Z)(),{trackUsage:M}=(0,i.rS)(),[_,l]=(0,k.useState)(!1),m=()=>{l(!1),M("willDeleteToken",{tokenType:c}),r()};return(0,e.jsxs)(n.x,{paddingLeft:1,onClick:T=>T.stopPropagation(),children:[(0,e.jsx)(I.h,{onClick:()=>{l(!0)},label:D({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",noBorder:!0,icon:(0,e.jsx)(A.Z,{})}),(0,e.jsx)(i.QH,{onToggleDialog:()=>l(!1),onConfirm:m,isOpen:_})]})};N.propTypes={tokenName:s.string.isRequired,onClickDelete:s.func.isRequired,tokenType:s.string.isRequired};const J={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},z=(0,b.ZP)(i.rU)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,h=({tokenName:a,tokenId:r,buttonType:c,children:D})=>{const{formatMessage:M}=(0,R.Z)(),{location:{pathname:_}}=(0,u.k6)();return(0,e.jsx)(z,{to:`${_}/${r}`,title:M(J[c],{target:a}),children:D})};h.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired,buttonType:s.string,children:s.node.isRequired},h.defaultProps={buttonType:"edit"};const Z=({tokenName:a,tokenId:r})=>(0,e.jsx)(h,{tokenName:a,tokenId:r,buttonType:"read",children:(0,e.jsx)(S.Z,{})});Z.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired};const Q=({tokenName:a,tokenId:r})=>(0,e.jsx)(h,{tokenName:a,tokenId:r,children:(0,e.jsx)(H.Z,{})});Q.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired};const v=({permissions:a,headers:r,contentType:c,isLoading:D,tokens:M,onConfirmDelete:_,tokenType:l})=>{const{canDelete:m,canUpdate:T,canRead:f}=a;return(0,e.jsx)(i.tM,{headers:r,contentType:c,rows:M,withBulkActions:m||T||f,isLoading:D,onConfirmDelete:_,children:(0,e.jsx)(B,{tokenType:l,permissions:a,onConfirmDelete:_})})};v.propTypes={tokens:s.array,permissions:s.shape({canRead:s.bool,canDelete:s.bool,canUpdate:s.bool}).isRequired,headers:s.arrayOf(s.shape({cellFormatter:s.func,key:s.string.isRequired,metadatas:s.shape({label:s.string.isRequired,sortable:s.bool}).isRequired,name:s.string.isRequired})),contentType:s.string.isRequired,isLoading:s.bool,onConfirmDelete:s.func,tokenType:s.string.isRequired},v.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const B=({tokenType:a,permissions:r,rows:c,withBulkActions:D,onConfirmDelete:M})=>{const{canDelete:_,canUpdate:l,canRead:m}=r,[{query:T}]=(0,i.Kx)(),{formatMessage:f}=(0,R.Z)(),[,L]=T?T.sort.split(":"):"ASC",{push:O,location:{pathname:x}}=(0,u.k6)(),{trackUsage:$}=(0,i.rS)(),y=c.sort((o,F)=>{const E=o.name.localeCompare(F.name);return L==="DESC"?-E:E});return(0,e.jsx)(U.p,{children:y.map(o=>(0,e.jsxs)(C.Tr,{...(0,i.X7)({fn(){$("willEditTokenFromList",{tokenType:a}),O(`${x}/${o.id}`)},condition:l}),children:[(0,e.jsx)(P.Td,{maxWidth:(0,i.Q1)(250),children:(0,e.jsx)(g.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:o.name})}),(0,e.jsx)(P.Td,{maxWidth:(0,i.Q1)(250),children:(0,e.jsx)(g.Z,{textColor:"neutral800",ellipsis:!0,children:o.description})}),(0,e.jsx)(P.Td,{children:(0,e.jsx)(g.Z,{textColor:"neutral800",children:(0,e.jsx)(i.ij,{timestamp:new Date(o.createdAt)})})}),(0,e.jsx)(P.Td,{children:o.lastUsedAt&&(0,e.jsx)(g.Z,{textColor:"neutral800",children:(0,e.jsx)(i.ij,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:f({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),D&&(0,e.jsx)(P.Td,{children:(0,e.jsxs)(K.k,{justifyContent:"end",children:[l&&(0,e.jsx)(Q,{tokenName:o.name,tokenId:o.id}),!l&&m&&(0,e.jsx)(Z,{tokenName:o.name,tokenId:o.id}),_&&(0,e.jsx)(N,{tokenName:o.name,onClickDelete:()=>M(o.id),tokenType:a})]})})]},o.id))})};B.defaultProps={rows:[],withBulkActions:!1},B.propTypes={rows:s.array,permissions:s.shape({canRead:s.bool,canDelete:s.bool,canUpdate:s.bool}).isRequired,onConfirmDelete:s.func.isRequired,tokenType:s.string.isRequired,withBulkActions:s.bool}}}]);
