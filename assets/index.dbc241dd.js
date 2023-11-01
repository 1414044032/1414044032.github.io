import{A as s,a as U,m as $}from"./interface.dd4c3312.js";import{B as z,C as I,r as m,F as L,D,d as i,o as S,c as N,j as g,e,f as u,I as C,g as o,J,K as R,n as G,p as F,E as q,_ as K}from"./index.8b4e0df5.js";import{f as O,d as h}from"./processCard.34166e83.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang.45ca6477.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.666c15f8.js";import Q from"./index.fc2c2d08.js";import"./interface.7e30e7ed.js";import"./index.vue_vue_type_script_setup_true_lang.0f2a16a1.js";import"./part.601bb279.js";import"./material.8e51136a.js";import"./index.vue_vue_type_script_setup_true_lang.71a764b5.js";import"./interface.b519aa86.js";import"./user.517568cb.js";import"./index.vue_vue_type_script_setup_true_lang.2ae15ae8.js";const X={class:"app-container"},Y={class:"handle-btn-area"},Z=z({__name:"index",setup(ee){const A={projectName:"",projectCode:"",partName:"",auditState:s.ALL,state:-1,isPage:!0,pageNumber:1,pageSize:10},{cloned:p,sync:w}=I(A),B=m([{productionNo:"",projectCode:"",projectName:"",partCode:"",partName:"",unit:"",count:0,materialName:"",auditState:s.PASS}]),y=m(!1),V=m(0),b=async()=>{y.value=!0;try{const n=await O(p.value),{data:t,msg:r}=n;console.log(t),B.value=t.data,V.value=t.total}catch(n){C.error(n)}finally{y.value=!1}};L(()=>{b()});const v=m({}),k=n=>{v.value=n,d.id=n.id,d.auditState=s.PASS,d.auditComment="",c.value=!0},c=m(!1),d=D({auditState:s.PASS,auditComment:""}),x=async n=>{if(n.auditState===s.REJECT){q.prompt("\u8BF7\u8F93\u5165\u9A73\u56DE\u7406\u7531","\u9A73\u56DE\u786E\u8BA4",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",inputPattern:/\S/,inputErrorMessage:"\u8BF7\u8F93\u5165\u9A73\u56DE\u7406\u7531"}).then(({value:t})=>{h({id:d.id,auditState:d.auditState,auditComment:t}).then(r=>{const{data:_,msg:E}=r;if(_===1){C.success("\u5BA1\u6838\u6210\u529F"),c.value=!1,b();return}C.error(E)})}).catch(()=>{});return}h({id:d.id,auditState:d.auditState,auditComment:d.auditComment}).then(t=>{const{data:r,msg:_}=t;if(r===1){C.success("\u5BA1\u6838\u6210\u529F"),c.value=!1,b();return}C.error(_)})};return m(null),D({auditComment:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BA1\u6838\u610F\u89C1",trigger:"blur"}]}),(n,t)=>{const r=i("el-form-item"),_=i("el-input"),E=i("el-option"),j=i("el-select"),f=i("el-button"),P=i("el-form"),l=i("el-table-column"),T=i("el-table"),M=i("el-popconfirm");return S(),N("div",X,[g("div",null,[e(P,{model:A,inline:!0,"label-width":"68px"},{default:u(()=>[e(r,{label:"\u9879\u76EE\u540D\u79F0"},{default:u(()=>[e(H,{modelValue:o(p).projectCode,"onUpdate:modelValue":t[0]||(t[0]=a=>o(p).projectCode=a),style:{width:"240px"},valueTag:"code"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u96F6\u4EF6\u540D\u79F0"},{default:u(()=>[e(_,{modelValue:o(p).partName,"onUpdate:modelValue":t[1]||(t[1]=a=>o(p).partName=a),style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"\u72B6\u6001"},{default:u(()=>[e(j,{modelValue:o(p).auditState,"onUpdate:modelValue":t[2]||(t[2]=a=>o(p).auditState=a),style:{width:"240px"},placeholder:"\u8BF7\u9009\u62E9"},{default:u(()=>[(S(!0),N(J,null,R(o(U),a=>(S(),G(E,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:u(()=>[e(f,{type:"primary",icon:"Search",onClick:b},{default:u(()=>[F("\u67E5\u8BE2")]),_:1}),e(f,{icon:"Refresh",onClick:o(w)},{default:u(()=>[F("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1})]),g("div",null,[e(T,{data:B.value,border:"",style:{width:"100%"}},{default:u(()=>[e(l,{prop:"productionNo",label:"\u751F\u4EA7\u7F16\u53F7"}),e(l,{prop:"projectCode",label:"\u9879\u76EE\u4EE3\u53F7"}),e(l,{prop:"projectName",label:"\u9879\u76EE\u540D\u79F0"}),e(l,{prop:"partCode",label:"\u96F6\u4EF6\u56FE\u53F7"}),e(l,{prop:"partName",label:"\u96F6\u4EF6\u540D\u79F0"}),e(l,{prop:"unit",label:"\u5355\u4F4D"}),e(l,{prop:"count",label:"\u6570\u91CF"}),e(l,{prop:"materialName",label:"\u6750\u6599\u540D\u79F0"}),e(l,{prop:"auditState",label:"\u72B6\u6001"},{default:u(a=>[e(W,{value:a.row.auditState,mapConfig:o($)},null,8,["value","mapConfig"])]),_:1}),e(l,{prop:"auditComment",label:"\u5BA1\u6838\u610F\u89C1"}),e(l,{label:"\u64CD\u4F5C",fixed:"right",width:"250px"},{default:u(a=>[e(f,{size:"small",type:"primary",onClick:te=>k(a.row),disabled:a.row.auditState!==o(s).WAITING},{default:u(()=>[F("\u5BA1\u6838")]),_:2},1032,["onClick","disabled"])]),_:1})]),_:1},8,["data"])]),e(Q,{visible:c.value,"onUpdate:visible":t[5]||(t[5]=a=>c.value=a),data:v.value,action:"show"},{outSideFooter:u(()=>[g("div",Y,[e(M,{title:"\u786E\u8BA4\u540C\u610F\u5417\uFF1F",onConfirm:t[3]||(t[3]=a=>x({id:v.value.id,auditState:o(s).PASS}))},{reference:u(()=>[e(f,{size:"large",type:"primary"},{default:u(()=>[F("\u540C \u610F")]),_:1})]),_:1}),e(f,{size:"large",onClick:t[4]||(t[4]=a=>x({id:v.value.id,auditState:o(s).REJECT})),type:"danger"},{default:u(()=>[F("\u9A73 \u56DE")]),_:1})])]),_:1},8,["visible","data"])])}}});const Ce=K(Z,[["__scopeId","data-v-41b36463"]]);export{Ce as default};
