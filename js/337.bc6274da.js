"use strict";(globalThis["webpackChunkcircleworld"]=globalThis["webpackChunkcircleworld"]||[]).push([[337],{37337:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});a(69665);var t=a(59835),i=a(86970),n=a(61957),o=a(19302),u=a(54313),d=a(60499);const r=e=>((0,t.dD)("data-v-470b7ddb"),e=e(),(0,t.Cn)(),e),s={key:0,class:"flex",style:{"font-size":"64px",color:"white",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100vh","z-index":"+1","background-color":"rgba(0, 0, 0, 0.8)"}},c=r((()=>(0,t._)("div",{style:{margin:"auto"}},"Waiting",-1))),v=[c],m={class:"flex"},p={class:"flex"},g=r((()=>(0,t._)("br",null,null,-1))),f={style:{width:"100%",height:"200px",overflow:"auto",border:"1px solid blue"}},w=["innerHTML"],b={style:{width:"100%",height:"500px",overflow:"auto",border:"1px solid yellow"}},_={style:{width:"100%","margin-top":"3px",border:"1px solid lightblue"}},h=["onClick"],y=["innerHTML"],x={__name:"showFirebase",setup(e){var l=a(42049);const r=(0,d.iH)("{}"),c=(0,u.R)(),x=(0,d.iH)([]),k=(0,d.iH)({}),D=(0,d.iH)([]),q=(0,d.iH)(!1),T=(0,d.iH)({}),C=(0,d.iH)(!1);(0,o.Z)();function L(){k.value=JSON.parse(r.value),x.value.forEach((e=>{let l=e.data;void 0==k.value[l.randomID]&&(k.value[l.randomID]={nameList:[],latestTime:0,datatimeList:[],randomID:l.randomID,count:0});let a=k.value[l.randomID];a.count++,a.latestTime<l.datatime&&(a.latestTime=l.datatime),a.datatimeList.push(l.datatime),l.name&&a.nameList.indexOf(l.name)<0&&a.nameList.push(l.name),l.q_platform&&(a.q_platform=l.q_platform)})),D.value=[];for(const e in k.value){const l=k.value[e];D.value.push({id:l.randomID,dateTime:l.latestTime})}D.value.sort(((e,l)=>e.dateTime>l.dateTime?-1:1))}function H(){document.getElementById("sFFileUpload").click()}function I(e){const l=new FileReader;l.onload=e=>{try{JSON.parse(e.target.result);r.value=e.target.result,L()}catch(l){r.value="{}"}document.getElementById("sFFileUpload").value=""},l.onerror=e=>{},l.readAsText(e.target.files[0])}function z(){var e=new Blob([JSON.stringify(k.value)]);l.saveAs(e,"firebaseLog.txt")}async function F(){q.value=!0,x.value=await c.get(),q.value=!1}async function O(){q.value=!0,await c.deleteAll(x.value),x.value=await c.get(),q.value=!1}return(0,t.YP)(x,(e=>{L()})),(0,t.bv)((async()=>{})),(e,l)=>{const a=(0,t.up)("q-btn"),o=(0,t.up)("q-icon"),u=(0,t.up)("q-card"),d=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.iD)("div",null,[q.value?((0,t.wg)(),(0,t.iD)("div",s,v)):(0,t.kq)("",!0),(0,t._)("div",m,[(0,t.Wm)(a,{dense:"","no-caps":"",color:"negative",label:"Clear FireBase (Dobule Click)",onDblclick:O,class:"btnStyle"}),(0,t.Uk)(" ("+(0,i.zw)(x.value.length)+") ",1),(0,t.Wm)(a,{dense:"","no-caps":"",color:"accent",label:"Reload Firebase",onClick:F,class:"btnStyle"}),(0,t.Wm)(a,{dense:"","no-caps":"",color:"primary",label:"Clear PreLoad ("+r.value.length+")",onClick:l[0]||(l[0]=()=>{r.value="{}",L()}),class:"btnStyle"},null,8,["label"]),(0,t._)("div",p,[(0,t._)("input",{id:"sFFileUpload",type:"file",hidden:"",accept:".txt",name:"file",onChange:I,style:{cursor:"pointer"}},null,32),(0,t.Wm)(o,{name:"cloud_upload",onClick:H,size:"38px",style:{cursor:"pointer",margin:"3px"},class:"qicon iMouseOverGray"}),(0,t.Wm)(o,{title:"cloud download",name:"cloud_download",onClick:z,size:"38px",style:{cursor:"pointer",margin:"3px"},class:"qicon iMouseOverGray"})])]),g,(0,t._)("div",f,[(0,t._)("pre",{innerHTML:JSON.stringify(x.value,null,2)},null,8,w)]),(0,t._)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(D.value,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{key:"doingDataObj"+l},[(0,t._)("div",_,[(0,t._)("div",null,"Name list:"+(0,i.zw)(k.value[e.id].nameList),1),(0,t._)("div",null," latestTime:"+(0,i.zw)(new Date(k.value[e.id].latestTime).toLocaleString()),1),(0,t._)("div",null,"Count:"+(0,i.zw)(k.value[e.id].count),1),(0,t._)("div",{onClick:(0,n.iM)((()=>{k.value[e.id].q_platform&&(T.value=k.value[e.id].q_platform,C.value=!0)}),["stop","prevent"]),style:{cursor:"pointer"}}," q_platform:"+(0,i.zw)(k.value[e.id].q_platform?k.value[e.id].q_platform.is.platform+"-"+k.value[e.id].q_platform.is.name:""),9,h),(0,t._)("div",null,"randomID:"+(0,i.zw)(k.value[e.id].randomID),1),(0,t._)("div",null,"datatimeList:"+(0,i.zw)(k.value[e.id].datatimeList),1)])])))),128))]),(0,t.Wm)(d,{modelValue:C.value,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{style:{"min-width":"80vw","min-height":"80vh"}},{default:(0,t.w5)((()=>[(0,t._)("pre",{innerHTML:JSON.stringify(T.value,null,2)},null,8,y)])),_:1})])),_:1},8,["modelValue"])])}}};var k=a(11639),D=a(24455),q=a(22857),T=a(87743),C=a(44458),L=a(69984),H=a.n(L);const I=(0,k.Z)(x,[["__scopeId","data-v-470b7ddb"]]),z=I;H()(x,"components",{QBtn:D.Z,QIcon:q.Z,QDialog:T.Z,QCard:C.Z})}}]);