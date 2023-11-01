import{B as Q,C as X,r as d,F as Y,I as p,D as B,d as n,G as Z,o as D,c as k,j as V,e as o,f as a,g as s,H as S,n as T,Q as ee,J as oe,K as te,p as f}from"./index.8b4e0df5.js";import{b as ae,P as le,p as ue}from"./interface.dd4c3312.js";import{u as ne,f as se,_ as P,a as re,b as ie,c as pe}from"./index.vue_vue_type_script_setup_true_lang.71a764b5.js";import{F as y}from"./interface.b519aa86.js";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang.45ca6477.js";import"./user.517568cb.js";import"./index.vue_vue_type_script_setup_true_lang.2ae15ae8.js";import"./index.vue_vue_type_script_setup_true_lang.666c15f8.js";import"./interface.7e30e7ed.js";const me={class:"app-container"},Fe=Q({__name:"index",setup(de){const x=ne(),h={workType:"",state:-1,pageNumber:1,pageSize:10},{cloned:r,sync:U}=X(h),E=d([]),C=d(0),I=async l=>{const e=await re(l),{data:i,msg:u}=e;if(i===1){p.success("\u5DE5\u79CD\u65B0\u589E\u6210\u529F"),_.value=!1,c();return}p.error(u)},N=l=>{F.form={...l},g.value=!0};Y(()=>{c()});const z=async l=>{const e=await pe({id:l}),{data:i,msg:u}=e;if(i===1){p.success("\u5DE5\u79CD\u5220\u9664\u6210\u529F"),c();return}p.error(u)},j=async l=>{const e=await ie(l),{data:i,msg:u}=e;if(i===1){p.success("\u5DE5\u79CD\u4FEE\u6539\u6210\u529F"),g.value=!1,c();return}p.error(u)},v=d(!1),c=async()=>{v.value=!0;try{const l=await se(r.value),{data:e,msg:i}=l;E.value=e.data,C.value=e.total,x.updateWorkTypeManage(e.data.map(u=>({id:u.id,name:u.workType})))}catch(l){p.error(l)}finally{v.value=!1}},_=d(!1),g=d(!1),L=()=>{_.value=!0},M=B({form:{workType:""},rules:{},formLabelConfig:[{label:"\u5DE5\u79CD\u540D\u79F0",prop:"workType",type:y.Input,placeholder:"\u8BF7\u8F93\u5165\u5DE5\u79CD\u540D\u79F0"}]}),F=B({form:{},rules:{},formLabelConfig:[{label:"\u5DE5\u79CD\u540D\u79F0",prop:"workType",type:y.Input,placeholder:"\u8BF7\u8F93\u5165\u5DE5\u79CD\u540D\u79F0"},{label:"\u72B6\u6001",prop:"state",type:y.Radio,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",options:ae}]});return(l,e)=>{const i=n("el-input"),u=n("el-form-item"),$=n("el-option"),A=n("el-select"),m=n("el-button"),G=n("el-form"),O=n("el-col"),R=n("el-row"),b=n("el-table-column"),W=n("el-popconfirm"),q=n("el-table"),H=n("pagination"),J=Z("loading");return D(),k("div",me,[V("div",null,[o(G,{model:s(r),inline:!0,"label-width":"68px"},{default:a(()=>[o(u,{label:"\u5DE5\u79CD\u540D\u79F0"},{default:a(()=>[o(i,{modelValue:s(r).workType,"onUpdate:modelValue":e[0]||(e[0]=t=>s(r).workType=t),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),o(u,{label:"\u72B6\u6001"},{default:a(()=>[o(A,{modelValue:s(r).state,"onUpdate:modelValue":e[1]||(e[1]=t=>s(r).state=t),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(D(!0),k(oe,null,te(s(le),t=>(D(),T($,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,null,{default:a(()=>[o(m,{type:"primary",icon:"Search",onClick:c},{default:a(()=>[f("\u67E5\u8BE2")]),_:1}),o(m,{icon:"Refresh",onClick:s(U)},{default:a(()=>[f("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),o(R,{gutter:10,class:"mb8"},{default:a(()=>[o(O,{span:1.5},{default:a(()=>[o(m,{type:"primary",plain:"",icon:"Plus",onClick:L},{default:a(()=>[f("\u65B0\u589E")]),_:1})]),_:1},8,["span"])]),_:1}),V("div",null,[S((D(),T(q,{data:E.value,border:"",style:{width:"100%"}},{default:a(()=>[o(b,{prop:"workType",label:"\u5DE5\u79CD\u540D\u79F0"}),o(b,{prop:"state",label:"\u72B6\u6001"},{default:a(t=>[o(ce,{value:t.row.state,mapConfig:s(ue)},null,8,["value","mapConfig"])]),_:1}),o(b,{label:"\u64CD\u4F5C"},{default:a(t=>[o(m,{size:"small",type:"warning",onClick:K=>N(t.row)},{default:a(()=>[f("\u4FEE\u6539")]),_:2},1032,["onClick"]),o(W,{title:"\u786E\u5B9A\u5220\u9664\u8BE5\u5DE5\u79CD\u5417\uFF1F",confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",icon:"el-icon-question",onConfirm:K=>{var w;return z((w=t.row)==null?void 0:w.id)}},{reference:a(()=>[o(m,{size:"small",type:"danger"},{default:a(()=>[f("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[J,v.value]]),S(o(H,{total:C.value,page:s(r).pageNumber,"onUpdate:page":e[2]||(e[2]=t=>s(r).pageNumber=t),limit:s(r).pageSize,"onUpdate:limit":e[3]||(e[3]=t=>s(r).pageSize=t),onPagination:c},null,8,["total","page","limit"]),[[ee,C.value>0]])]),o(P,{modelValue:_.value,"onUpdate:modelValue":e[4]||(e[4]=t=>_.value=t),title:"\u65B0\u589E\u5DE5\u79CD",formConfig:M,onSubmit:I},null,8,["modelValue","formConfig"]),o(P,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=t=>g.value=t),title:"\u4FEE\u6539\u5DE5\u79CD",formConfig:F,onSubmit:j},null,8,["modelValue","formConfig"])])}}});export{Fe as default};
