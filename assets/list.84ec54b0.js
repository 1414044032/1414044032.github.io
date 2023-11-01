import{l as z,c as J,a as M,b as P,d as Q,e as W}from"./cache.c0286bed.js";import{B as X,r,d as c,G as Y,o as b,c as Z,e,f as t,p as f,H as R,n as S,g as n,j as k,v as ee}from"./index.8b4e0df5.js";const te={class:"app-container"},ae=k("span",{style:{"vertical-align":"middle"}},"\u7F13\u5B58\u5217\u8868",-1),le=k("span",{style:{"vertical-align":"middle"}},"\u952E\u540D\u5217\u8868",-1),ne=k("span",{style:{"vertical-align":"middle"}},"\u7F13\u5B58\u5185\u5BB9",-1),oe=X({name:"CacheList"}),re=Object.assign(oe,{setup(ce){const{proxy:u}=ee(),N=r([]),V=r([]),s=r({}),_=r(!0),g=r(!1),h=r(""),x=r(window.innerHeight-200);function K(){_.value=!0,z().then(l=>{N.value=l.data,_.value=!1})}function O(){K(),u.$modal.msgSuccess("\u5237\u65B0\u7F13\u5B58\u5217\u8868\u6210\u529F")}function F(l){J(l.cacheName).then(a=>{u.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u540D\u79F0["+l.cacheName+"]\u6210\u529F"),p()})}function p(l){const a=l!==void 0?l.cacheName:h.value;a!==""&&(g.value=!0,M(a).then(y=>{V.value=y.data,g.value=!1,h.value=a}))}function H(){p(),u.$modal.msgSuccess("\u5237\u65B0\u952E\u540D\u5217\u8868\u6210\u529F")}function U(l){P(l).then(a=>{u.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u952E\u540D["+l+"]\u6210\u529F"),p()})}function j(l){return l.cacheName.replace(":","")}function A(l){return l.replace(h.value,"")}function L(l){Q(h.value,l).then(a=>{s.value=a.data})}function E(){W().then(l=>{u.$modal.msgSuccess("\u6E05\u7406\u5168\u90E8\u7F13\u5B58\u6210\u529F")})}return K(),(l,a)=>{const y=c("Collection"),m=c("el-button"),i=c("el-table-column"),$=c("el-table"),v=c("el-card"),d=c("el-col"),G=c("Key"),I=c("Document"),C=c("el-input"),w=c("el-form-item"),D=c("el-row"),T=c("el-form"),B=Y("loading");return b(),Z("div",te,[e(D,{gutter:10},{default:t(()=>[e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(y,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ae,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[0]||(a[0]=o=>O())})]),default:t(()=>[R((b(),S($,{data:n(N),height:n(x),"highlight-current-row":"",onRowClick:p,style:{width:"100%"}},{default:t(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u540D\u79F0",align:"center",prop:"cacheName","show-overflow-tooltip":!0,formatter:j}),e(i,{label:"\u5907\u6CE8",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(m,{link:"",type:"primary",icon:"Delete",onClick:q=>F(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[B,n(_)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(G,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),le,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[1]||(a[1]=o=>H())})]),default:t(()=>[R((b(),S($,{data:n(V),height:n(x),"highlight-current-row":"",onRowClick:L,style:{width:"100%"}},{default:t(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u952E\u540D",align:"center","show-overflow-tooltip":!0,formatter:A}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(m,{link:"",type:"primary",icon:"Delete",onClick:q=>U(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[B,n(g)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{bordered:!1,style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(I,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ne,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[2]||(a[2]=o=>E())},{default:t(()=>[f("\u6E05\u7406\u5168\u90E8")]),_:1})]),default:t(()=>[e(T,{model:n(s)},{default:t(()=>[e(D,{gutter:32},{default:t(()=>[e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u540D\u79F0:",prop:"cacheName"},{default:t(()=>[e(C,{modelValue:n(s).cacheName,"onUpdate:modelValue":a[3]||(a[3]=o=>n(s).cacheName=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u952E\u540D:",prop:"cacheKey"},{default:t(()=>[e(C,{modelValue:n(s).cacheKey,"onUpdate:modelValue":a[4]||(a[4]=o=>n(s).cacheKey=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u5185\u5BB9:",prop:"cacheValue"},{default:t(()=>[e(C,{modelValue:n(s).cacheValue,"onUpdate:modelValue":a[5]||(a[5]=o=>n(s).cacheValue=o),type:"textarea",rows:8,readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{re as default};
