const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scratchPhaser-Dj2emjco.js","assets/index-Bl4tL-E1.js","assets/index-BT9G02eY.css","assets/vue-i18n.runtime-Cxl91UgH.js"])))=>i.map(i=>d[i]);
import{u as Ft,c as lt,g as ut,a as Ut,b as ge,h as De,e as Xt,f as Qt,r as ye,i as Gt,o as et,j as ht,n as Wt,k as Ce,l as pt,m as qt,p as Vt,q as Ot,s as Kt,t as He,w as Se,v as Yt,x as Jt,y as Zt,z as Ke,A as Ye,B as Te,C as ce,D as Ee,E as Be,F as Le,G as it,H as Je,I as Oe,J as $t,K as vt,L as Ge,M as Ze,N as er,O as tr,P as Ne,Q as We,R as rr,_ as nr,S as ar,T as ir}from"./index-Bl4tL-E1.js";import{u as Dt}from"./vue-i18n.runtime-Cxl91UgH.js";const or={...Ft,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function sr(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const ot=50,At=2*ot,Lt=At*Math.PI,lr=Math.round(Lt*1e3)/1e3,ur=lt({name:"QCircularProgress",props:{...or,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:o}){const{proxy:{$q:n}}=ut(),a=Ut(e),l=ge(()=>{const u=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-u}deg)`:`rotate3d(0, 0, 1, ${u-90}deg)`}}),t=ge(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),i=ge(()=>At/(1-e.thickness/2)),b=ge(()=>`${i.value/2} ${i.value/2} ${i.value} ${i.value}`),p=ge(()=>sr(e.value,e.min,e.max)),g=ge(()=>e.max-e.min),k=ge(()=>e.thickness/2*i.value),c=ge(()=>{const u=(e.max-p.value)/g.value,v=e.rounded===!0&&p.value<e.max&&u<.25?k.value/2*(1-u/.25):0;return Lt*u+v});function m({thickness:u,offset:v,color:h,cls:y,rounded:P}){return De("circle",{class:"q-circular-progress__"+y+(h!==void 0?` text-${h}`:""),style:t.value,fill:"transparent",stroke:"currentColor","stroke-width":u,"stroke-dasharray":lr,"stroke-dashoffset":v,"stroke-linecap":P,cx:i.value,cy:i.value,r:ot})}return()=>{const u=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&u.push(De("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ot-k.value/2,cx:i.value,cy:i.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&u.push(m({cls:"track",thickness:k.value,offset:0,color:e.trackColor})),u.push(m({cls:"circle",thickness:k.value,offset:c.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const v=[De("svg",{class:"q-circular-progress__svg",style:l.value,viewBox:b.value,"aria-hidden":"true"},u)];return e.showValue===!0&&v.push(De("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},o.default!==void 0?o.default():[De("div",p.value)])),De("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:a.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Xt(o.internal,v))}}}),cr={dark:{type:Boolean,default:null}};function dr(e,o){return ge(()=>e.dark===null?o.dark.isActive:e.dark)}const fr=lt({name:"QCard",props:{...cr,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:o}){const{proxy:{$q:n}}=ut(),a=dr(e,n),l=ge(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>De(e.tag,{class:l.value},Qt(o.default))}});function hr(){const e=ye(!Gt.value);return e.value===!1&&et(()=>{e.value=!0}),{isHydrated:e}}const Ct=typeof ResizeObserver<"u",mt=Ct===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},pr=lt({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,a,l={width:-1,height:-1};function t(p){p===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:p,offsetHeight:g}=a;(p!==l.width||g!==l.height)&&(l={width:p,height:g},o("resize",l))}}const{proxy:b}=ut();if(b.trigger=t,Ct===!0){let p;const g=k=>{a=b.$el.parentNode,a?(p=new ResizeObserver(t),p.observe(a),i()):k!==!0&&Ce(()=>{g(!0)})};return et(()=>{g()}),ht(()=>{n!==null&&clearTimeout(n),p!==void 0&&(p.disconnect!==void 0?p.disconnect():a&&p.unobserve(a))}),Wt}else{let p=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",t,pt.passive),c=void 0)},g=function(){p(),a?.contentDocument&&(c=a.contentDocument.defaultView,c.addEventListener("resize",t,pt.passive),i())};const{isHydrated:k}=hr();let c;return et(()=>{Ce(()=>{a=b.$el,a&&g()})}),ht(p),()=>{if(k.value===!0)return De("object",{class:"q--avoid-card-border",style:mt.style,tabindex:-1,type:"text/html",data:mt.url,"aria-hidden":"true",onLoad:g})}}}});let vr=0,qe;function bt(e,o){qe===void 0&&(qe=document.createElement("div"),qe.style.cssText="position: absolute; left: 0; top: 0",document.body.appendChild(qe));const n=e.getBoundingClientRect(),a=qe.getBoundingClientRect(),{marginLeft:l,marginRight:t,marginTop:i,marginBottom:b}=window.getComputedStyle(e),p=parseInt(l,10)+parseInt(t,10),g=parseInt(i,10)+parseInt(b,10);return{left:n.left-a.left,top:n.top-a.top,width:n.right-n.left,height:n.bottom-n.top,widthM:n.right-n.left+(o===!0?0:p),heightM:n.bottom-n.top+(o===!0?0:g),marginH:o===!0?p:0,marginV:o===!0?g:0}}function $e(e){return{width:e.scrollWidth,height:e.scrollHeight}}const gt=["Top","Right","Bottom","Left"],yt=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],mr=/-block|-inline|block-|inline-/,br=/(-block|-inline|block-|inline-).*:/;function wt(e,o){const n=window.getComputedStyle(e),a={};for(let l=0;l<o.length;l++){const t=o[l];if(n[t]==="")if(t==="cssText"){const i=n.length;let b="";for(let p=0;p<i;p++)mr.test(n[p])!==!0&&(b+=n[p]+": "+n[n[p]]+"; ");a[t]=b}else if(["borderWidth","borderStyle","borderColor"].indexOf(t)!==-1){const i=t.replace("border","");let b="";for(let p=0;p<gt.length;p++){const g="border"+gt[p]+i;b+=n[g]+" "}a[t]=b}else if(t==="borderRadius"){let i="",b="";for(let p=0;p<yt.length;p++){const g=n[yt[p]].split(" ");i+=g[0]+" ",b+=(g[1]===void 0?g[0]:g[1])+" "}a[t]=i+"/ "+b}else a[t]=n[t];else t==="cssText"?a[t]=n[t].split(";").filter(i=>br.test(i)!==!0).join(";"):a[t]=n[t]}return a}const gr=["absolute","fixed","relative","sticky"];function kt(e){let o=e,n=0;for(;o!==null&&o!==document;){const{position:a,zIndex:l}=window.getComputedStyle(o),t=Number(l);t>n&&(o===e||gr.includes(a)===!0)&&(n=t),o=o.parentNode}return n}function yr(e){return{from:e.from,to:e.to!==void 0?e.to:e.from}}function wr(e){return typeof e=="number"?e={duration:e}:typeof e=="function"&&(e={onEnd:e}),{...e,waitFor:e.waitFor===void 0?0:e.waitFor,duration:isNaN(e.duration)===!0?300:parseInt(e.duration,10),easing:typeof e.easing=="string"&&e.easing.length!==0?e.easing:"ease-in-out",delay:isNaN(e.delay)===!0?0:parseInt(e.delay,10),fill:typeof e.fill=="string"&&e.fill.length!==0?e.fill:"none",resize:e.resize===!0,useCSS:e.useCSS===!0||e.usecss===!0,hideFromClone:e.hideFromClone===!0||e.hidefromclone===!0,keepToClone:e.keepToClone===!0||e.keeptoclone===!0,tween:e.tween===!0,tweenFromOpacity:isNaN(e.tweenFromOpacity)===!0?.6:parseFloat(e.tweenFromOpacity),tweenToOpacity:isNaN(e.tweenToOpacity)===!0?.5:parseFloat(e.tweenToOpacity)}}function Pt(e){const o=typeof e;return o==="function"?e():o==="string"?document.querySelector(e):e}function xt(e){return e&&e.ownerDocument===document&&e.parentNode!==null}function kr(e){let o=()=>!1,n=!1,a=!0;const l=yr(e),t=wr(e),i=Pt(l.from);if(xt(i)!==!0)return o;typeof i.qMorphCancel=="function"&&i.qMorphCancel();let b,p,g,k;const c=i.parentNode,m=i.nextElementSibling,u=bt(i,t.resize),{width:v,height:h}=$e(c),{borderWidth:y,borderStyle:P,borderColor:D,borderRadius:z,backgroundColor:N,transform:S,position:U,cssText:j}=wt(i,["borderWidth","borderStyle","borderColor","borderRadius","backgroundColor","transform","position","cssText"]),Q=i.classList.toString(),Y=i.style.cssText,w=i.cloneNode(!0),A=t.tween===!0?i.cloneNode(!0):void 0;A!==void 0&&(A.className=A.classList.toString().split(" ").filter(_=>/^bg-/.test(_)===!1).join(" ")),t.hideFromClone===!0&&w.classList.add("q-morph--internal"),w.setAttribute("aria-hidden","true"),w.style.transition="none",w.style.animation="none",w.style.pointerEvents="none",c.insertBefore(w,m),i.qMorphCancel=()=>{n=!0,w.remove(),A?.remove(),t.hideFromClone===!0&&w.classList.remove("q-morph--internal"),i.qMorphCancel=void 0};const s=()=>{const _=Pt(l.to);if(n===!0||xt(_)!==!0){typeof i.qMorphCancel=="function"&&i.qMorphCancel();return}i!==_&&typeof _.qMorphCancel=="function"&&_.qMorphCancel(),t.keepToClone!==!0&&_.classList.add("q-morph--internal"),w.classList.add("q-morph--internal");const{width:Z,height:F}=$e(c),{width:ee,height:X}=$e(_.parentNode);t.hideFromClone!==!0&&w.classList.remove("q-morph--internal"),_.qMorphCancel=()=>{n=!0,w.remove(),A?.remove(),t.hideFromClone===!0&&w.classList.remove("q-morph--internal"),t.keepToClone!==!0&&_.classList.remove("q-morph--internal"),i.qMorphCancel=void 0,_.qMorphCancel=void 0};const J=()=>{if(n===!0){typeof _.qMorphCancel=="function"&&_.qMorphCancel();return}t.hideFromClone!==!0&&(w.classList.add("q-morph--internal"),w.innerHTML="",w.style.left=0,w.style.right="unset",w.style.top=0,w.style.bottom="unset",w.style.transform="none"),t.keepToClone!==!0&&_.classList.remove("q-morph--internal");const L=_.parentNode,{width:O,height:q}=$e(L),H=_.cloneNode(t.keepToClone);H.setAttribute("aria-hidden","true"),t.keepToClone!==!0&&(H.style.left=0,H.style.right="unset",H.style.top=0,H.style.bottom="unset",H.style.transform="none",H.style.pointerEvents="none"),H.classList.add("q-morph--internal");const G=_===i&&c===L?w:_.nextElementSibling;L.insertBefore(H,G);const{borderWidth:ne,borderStyle:le,borderColor:K,borderRadius:$,backgroundColor:se,transform:ie,position:he,cssText:pe}=wt(_,["borderWidth","borderStyle","borderColor","borderRadius","backgroundColor","transform","position","cssText"]),r=_.classList.toString(),E=_.style.cssText;_.style.cssText=pe,_.style.transform="none",_.style.animation="none",_.style.transition="none",_.className=r.split(" ").filter(ae=>/^bg-/.test(ae)===!1).join(" ");const C=bt(_,t.resize),d=u.left-C.left,f=u.top-C.top,x=u.width/(C.width>0?C.width:10),I=u.height/(C.height>0?C.height:100),B=v-Z,T=h-F,R=O-ee,W=q-X,M=Math.max(u.widthM,B),V=Math.max(u.heightM,T),re=Math.max(C.widthM,R),te=Math.max(C.heightM,W),de=i===_&&["absolute","fixed"].includes(he)===!1&&["absolute","fixed"].includes(U)===!1;let we=he==="fixed",ve=L;for(;we!==!0&&ve!==document;)we=window.getComputedStyle(ve).position==="fixed",ve=ve.parentNode;if(t.hideFromClone!==!0&&(w.style.display="block",w.style.flex="0 0 auto",w.style.opacity=0,w.style.minWidth="unset",w.style.maxWidth="unset",w.style.minHeight="unset",w.style.maxHeight="unset",w.classList.remove("q-morph--internal")),t.keepToClone!==!0&&(H.style.display="block",H.style.flex="0 0 auto",H.style.opacity=0,H.style.minWidth="unset",H.style.maxWidth="unset",H.style.minHeight="unset",H.style.maxHeight="unset"),H.classList.remove("q-morph--internal"),typeof t.classes=="string"&&(_.className+=" "+t.classes),typeof t.style=="string")_.style.cssText+=" "+t.style;else if(qt(t.style)===!0)for(const ae in t.style)_.style[ae]=t.style[ae];const ke=kt(w),oe=kt(_),_e=we===!0?document.documentElement:{scrollLeft:0,scrollTop:0};_.style.position=we===!0?"fixed":"absolute",_.style.left=`${C.left-_e.scrollLeft}px`,_.style.right="unset",_.style.top=`${C.top-_e.scrollTop}px`,_.style.margin=0,t.resize===!0&&(_.style.minWidth="unset",_.style.maxWidth="unset",_.style.minHeight="unset",_.style.maxHeight="unset",_.style.overflow="hidden",_.style.overflowX="hidden",_.style.overflowY="hidden"),document.body.appendChild(_),A!==void 0&&(A.style.cssText=j,A.style.transform="none",A.style.animation="none",A.style.transition="none",A.style.position=_.style.position,A.style.left=`${u.left-_e.scrollLeft}px`,A.style.right="unset",A.style.top=`${u.top-_e.scrollTop}px`,A.style.margin=0,A.style.pointerEvents="none",t.resize===!0&&(A.style.minWidth="unset",A.style.maxWidth="unset",A.style.minHeight="unset",A.style.maxHeight="unset",A.style.overflow="hidden",A.style.overflowX="hidden",A.style.overflowY="hidden"),document.body.appendChild(A));const je=ae=>{i===_&&a!==!0?(_.style.cssText=Y,_.className=Q):(_.style.cssText=E,_.className=r),H.parentNode===L&&L.insertBefore(_,H),w.remove(),H.remove(),A?.remove(),o=()=>!1,i.qMorphCancel=void 0,_.qMorphCancel=void 0,typeof t.onEnd=="function"&&t.onEnd(a===!0?"to":"from",ae===!0)};if(t.useCSS!==!0&&typeof _.animate=="function"){const ae=t.resize===!0?{transform:`translate(${d}px, ${f}px)`,width:`${M}px`,height:`${V}px`}:{transform:`translate(${d}px, ${f}px) scale(${x}, ${I})`},ze=t.resize===!0?{width:`${re}px`,height:`${te}px`}:{},Fe=t.resize===!0?{width:`${M}px`,height:`${V}px`}:{},Ue=t.resize===!0?{transform:`translate(${-1*d}px, ${-1*f}px)`,width:`${re}px`,height:`${te}px`}:{transform:`translate(${-1*d}px, ${-1*f}px) scale(${1/x}, ${1/I})`},Xe=A!==void 0?{opacity:t.tweenToOpacity}:{backgroundColor:N},Ie=A!==void 0?{opacity:1}:{backgroundColor:se};k=_.animate([{margin:0,borderWidth:y,borderStyle:P,borderColor:D,borderRadius:z,zIndex:ke,transformOrigin:"0 0",...ae,...Xe},{margin:0,borderWidth:ne,borderStyle:le,borderColor:K,borderRadius:$,zIndex:oe,transformOrigin:"0 0",transform:ie,...ze,...Ie}],{duration:t.duration,easing:t.easing,fill:t.fill,delay:t.delay}),p=A===void 0?void 0:A.animate([{opacity:t.tweenFromOpacity,margin:0,borderWidth:y,borderStyle:P,borderColor:D,borderRadius:z,zIndex:ke,transformOrigin:"0 0",transform:S,...Fe},{opacity:0,margin:0,borderWidth:ne,borderStyle:le,borderColor:K,borderRadius:$,zIndex:oe,transformOrigin:"0 0",...Ue}],{duration:t.duration,easing:t.easing,fill:t.fill,delay:t.delay}),b=t.hideFromClone===!0||de===!0?void 0:w.animate([{margin:`${T<0?T/2:0}px ${B<0?B/2:0}px`,width:`${M+u.marginH}px`,height:`${V+u.marginV}px`},{margin:0,width:0,height:0}],{duration:t.duration,easing:t.easing,fill:t.fill,delay:t.delay}),g=t.keepToClone===!0?void 0:H.animate([de===!0?{margin:`${T<0?T/2:0}px ${B<0?B/2:0}px`,width:`${M+u.marginH}px`,height:`${V+u.marginV}px`}:{margin:0,width:0,height:0},{margin:`${W<0?W/2:0}px ${R<0?R/2:0}px`,width:`${re+C.marginH}px`,height:`${te+C.marginV}px`}],{duration:t.duration,easing:t.easing,fill:t.fill,delay:t.delay});const me=Pe=>{b?.cancel(),p?.cancel(),g?.cancel(),k.cancel(),k.removeEventListener("finish",me),k.removeEventListener("cancel",me),je(Pe),b=void 0,p=void 0,g=void 0,k=void 0};i.qMorphCancel=()=>{i.qMorphCancel=void 0,n=!0,me()},_.qMorphCancel=()=>{_.qMorphCancel=void 0,n=!0,me()},k.addEventListener("finish",me),k.addEventListener("cancel",me),o=Pe=>n===!0||k===void 0?!1:Pe===!0?(me(!0),!0):(a=a!==!0,b?.reverse(),p?.reverse(),g?.reverse(),k.reverse(),!0)}else{const ae=`q-morph-anim-${++vr}`,ze=document.createElement("style"),Fe=t.resize===!0?`
            transform: translate(${d}px, ${f}px);
            width: ${M}px;
            height: ${V}px;
          `:`transform: translate(${d}px, ${f}px) scale(${x}, ${I});`,Ue=t.resize===!0?`
            width: ${re}px;
            height: ${te}px;
          `:"",Xe=t.resize===!0?`
            width: ${M}px;
            height: ${V}px;
          `:"",Ie=t.resize===!0?`
            transform: translate(${-1*d}px, ${-1*f}px);
            width: ${re}px;
            height: ${te}px;
          `:`transform: translate(${-1*d}px, ${-1*f}px) scale(${1/x}, ${1/I});`,me=A!==void 0?`opacity: ${t.tweenToOpacity};`:`background-color: ${N};`,Pe=A!==void 0?"opacity: 1;":`background-color: ${se};`,Nt=A===void 0?"":`
            @keyframes ${ae}-from-tween {
              0% {
                opacity: ${t.tweenFromOpacity};
                margin: 0;
                border-width: ${y};
                border-style: ${P};
                border-color: ${D};
                border-radius: ${z};
                z-index: ${ke};
                transform-origin: 0 0;
                transform: ${S};
                ${Xe}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${ne};
                border-style: ${le};
                border-color: ${K};
                border-radius: ${$};
                z-index: ${oe};
                transform-origin: 0 0;
                ${Ie}
              }
            }
          `,Rt=t.hideFromClone===!0||de===!0?"":`
            @keyframes ${ae}-from {
              0% {
                margin: ${T<0?T/2:0}px ${B<0?B/2:0}px;
                width: ${M+u.marginH}px;
                height: ${V+u.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `,Mt=de===!0?`
            margin: ${T<0?T/2:0}px ${B<0?B/2:0}px;
            width: ${M+u.marginH}px;
            height: ${V+u.marginV}px;
          `:`
            margin: 0;
            width: 0;
            height: 0;
          `,Ht=t.keepToClone===!0?"":`
            @keyframes ${ae}-to {
              0% {
                ${Mt}
              }

              100% {
                margin: ${W<0?W/2:0}px ${R<0?R/2:0}px;
                width: ${re+C.marginH}px;
                height: ${te+C.marginV}px;
              }
            }
          `;ze.innerHTML=`
          @keyframes ${ae} {
            0% {
              margin: 0;
              border-width: ${y};
              border-style: ${P};
              border-color: ${D};
              border-radius: ${z};
              background-color: ${N};
              z-index: ${ke};
              transform-origin: 0 0;
              ${Fe}
              ${me}
            }

            100% {
              margin: 0;
              border-width: ${ne};
              border-style: ${le};
              border-color: ${K};
              border-radius: ${$};
              background-color: ${se};
              z-index: ${oe};
              transform-origin: 0 0;
              transform: ${ie};
              ${Ue}
              ${Pe}
            }
          }

          ${Rt}

          ${Nt}

          ${Ht}
        `,document.head.appendChild(ze);let xe="normal";w.style.animation=`${t.duration}ms ${t.easing} ${t.delay}ms ${xe} ${t.fill} ${ae}-from`,A!==void 0&&(A.style.animation=`${t.duration}ms ${t.easing} ${t.delay}ms ${xe} ${t.fill} ${ae}-from-tween`),H.style.animation=`${t.duration}ms ${t.easing} ${t.delay}ms ${xe} ${t.fill} ${ae}-to`,_.style.animation=`${t.duration}ms ${t.easing} ${t.delay}ms ${xe} ${t.fill} ${ae}`;const Ae=Qe=>{Qe===Object(Qe)&&Qe.animationName!==ae||(_.removeEventListener("animationend",Ae),_.removeEventListener("animationcancel",Ae),je(),ze.remove())};i.qMorphCancel=()=>{i.qMorphCancel=void 0,n=!0,Ae()},_.qMorphCancel=()=>{_.qMorphCancel=void 0,n=!0,Ae()},_.addEventListener("animationend",Ae),_.addEventListener("animationcancel",Ae),o=Qe=>n===!0||!_||!w||!H?!1:Qe===!0?(Ae(),!0):(a=a!==!0,xe=xe==="normal"?"reverse":"normal",w.style.animationDirection=xe,A.style.animationDirection=xe,H.style.animationDirection=xe,_.style.animationDirection=xe,!0)}};t.waitFor>0||t.waitFor==="transitionend"||t.waitFor===Object(t.waitFor)&&typeof t.waitFor.then=="function"?(t.waitFor>0?new Promise(O=>setTimeout(O,t.waitFor)):t.waitFor==="transitionend"?new Promise(O=>{const q=()=>{H!==null&&(clearTimeout(H),H=null),_&&(_.removeEventListener("transitionend",q),_.removeEventListener("transitioncancel",q)),O()};let H=setTimeout(q,400);_.addEventListener("transitionend",q),_.addEventListener("transitioncancel",q)}):t.waitFor).then(J).catch(()=>{typeof _.qMorphCancel=="function"&&_.qMorphCancel()}):J()};return typeof e.onToggle=="function"&&e.onToggle(),requestAnimationFrame(s),_=>o(_)}const tt={},Pr=["duration","delay","easing","fill","classes","style","duration","resize","useCSS","hideFromClone","keepToClone","tween","tweenFromOpacity","tweenToOpacity","waitFor","onEnd"],xr=["resize","useCSS","hideFromClone","keepToClone","tween"];function Me(e,o){e.clsAction!==o&&(e.clsAction=o,e.el.classList[o]("q-morph--invisible"))}function jt(e){if(e.animating===!0||e.queue.length<2)return;const[o,n]=e.queue;e.animating=!0,o.animating=!0,n.animating=!0,Me(o,"remove"),Me(n,"remove");const a=kr({from:o.el,to:n.el,onToggle(){Me(o,"add"),Me(n,"remove")},...n.opts,onEnd(l,t){n.opts.onEnd?.(l,t),t!==!0&&(o.animating=!1,n.animating=!1,e.animating=!1,e.cancel=void 0,e.queue.shift(),jt(e))}});e.cancel=()=>{a(!0),e.cancel=void 0}}function It(e,o){const n=o.opts;xr.forEach(a=>{n[a]=e[a]===!0})}function _r(e,o){const n=typeof e=="string"&&e.length!==0?e.split(":"):[];o.name=n[0],o.group=n[1],Object.assign(o.opts,{duration:isNaN(n[2])===!0?300:parseFloat(n[2]),waitFor:n[3]})}function zr(e,o){e.group!==void 0&&(o.group=e.group),e.name!==void 0&&(o.name=e.name);const n=o.opts;Pr.forEach(a=>{e[a]!==void 0&&(n[a]=e[a])})}function Tr(e,o){if(o.name===e){const n=tt[o.group];n===void 0?(tt[o.group]={name:o.group,model:e,queue:[o],animating:!1},Me(o,"remove")):n.model!==e&&(n.model=e,n.queue.push(o),n.animating===!1&&n.queue.length===2&&jt(n));return}o.animating===!1&&Me(o,"add")}function _t(e,o){let n;Object(o)===o?(n=""+o.model,zr(o,e),It(o,e)):n=""+o,n!==e.model?(e.model=n,Tr(n,e)):e.animating===!1&&e.clsAction!==void 0&&e.el.classList[e.clsAction]("q-morph--invisible")}const zt=Vt({name:"morph",mounted(e,o){const n={el:e,animating:!1,opts:{}};It(o.modifiers,n),_r(o.arg,n),_t(n,o.value),e.__qmorph=n},updated(e,o){_t(e.__qmorph,o.value)},beforeUnmount(e){const o=e.__qmorph,n=tt[o.group];n!==void 0&&n.queue.indexOf(o)!==-1&&(n.queue=n.queue.filter(l=>l!==o),n.queue.length===0&&(n.cancel?.(),delete tt[o.group])),o.clsAction==="add"&&e.classList.remove("q-morph--invisible"),delete e.__qmorph}});/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define([],e):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=e()})(function(){return function e(o,n,a){function l(b,p){if(!n[b]){if(!o[b]){var g=typeof require=="function"&&require;if(!p&&g)return g(b,!0);if(t)return t(b,!0);var k=new Error("Cannot find module '"+b+"'");throw k.code="MODULE_NOT_FOUND",k}var c=n[b]={exports:{}};o[b][0].call(c.exports,function(m){var u=o[b][1][m];return l(u||m)},c,c.exports,e,o,n,a)}return n[b].exports}for(var t=typeof require=="function"&&require,i=0;i<a.length;i++)l(a[i]);return l}({1:[function(e,o,n){var a=e("./utils"),l=e("./support"),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(i){for(var b,p,g,k,c,m,u,v=[],h=0,y=i.length,P=y,D=a.getTypeOf(i)!=="string";h<i.length;)P=y-h,g=D?(b=i[h++],p=h<y?i[h++]:0,h<y?i[h++]:0):(b=i.charCodeAt(h++),p=h<y?i.charCodeAt(h++):0,h<y?i.charCodeAt(h++):0),k=b>>2,c=(3&b)<<4|p>>4,m=1<P?(15&p)<<2|g>>6:64,u=2<P?63&g:64,v.push(t.charAt(k)+t.charAt(c)+t.charAt(m)+t.charAt(u));return v.join("")},n.decode=function(i){var b,p,g,k,c,m,u=0,v=0,h="data:";if(i.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,P=3*(i=i.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(i.charAt(i.length-1)===t.charAt(64)&&P--,i.charAt(i.length-2)===t.charAt(64)&&P--,P%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=l.uint8array?new Uint8Array(0|P):new Array(0|P);u<i.length;)b=t.indexOf(i.charAt(u++))<<2|(k=t.indexOf(i.charAt(u++)))>>4,p=(15&k)<<4|(c=t.indexOf(i.charAt(u++)))>>2,g=(3&c)<<6|(m=t.indexOf(i.charAt(u++))),y[v++]=b,c!==64&&(y[v++]=p),m!==64&&(y[v++]=g);return y}},{"./support":30,"./utils":32}],2:[function(e,o,n){var a=e("./external"),l=e("./stream/DataWorker"),t=e("./stream/Crc32Probe"),i=e("./stream/DataLengthProbe");function b(p,g,k,c,m){this.compressedSize=p,this.uncompressedSize=g,this.crc32=k,this.compression=c,this.compressedContent=m}b.prototype={getContentWorker:function(){var p=new l(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new i("data_length")),g=this;return p.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new l(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(p,g,k){return p.pipe(new t).pipe(new i("uncompressedSize")).pipe(g.compressWorker(k)).pipe(new i("compressedSize")).withStreamInfo("compression",g)},o.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,o,n){var a=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,o,n){var a=e("./utils"),l=function(){for(var t,i=[],b=0;b<256;b++){t=b;for(var p=0;p<8;p++)t=1&t?3988292384^t>>>1:t>>>1;i[b]=t}return i}();o.exports=function(t,i){return t!==void 0&&t.length?a.getTypeOf(t)!=="string"?function(b,p,g,k){var c=l,m=k+g;b^=-1;for(var u=k;u<m;u++)b=b>>>8^c[255&(b^p[u])];return-1^b}(0|i,t,t.length,0):function(b,p,g,k){var c=l,m=k+g;b^=-1;for(var u=k;u<m;u++)b=b>>>8^c[255&(b^p.charCodeAt(u))];return-1^b}(0|i,t,t.length,0):0}},{"./utils":32}],5:[function(e,o,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,o,n){var a=null;a=typeof Promise<"u"?Promise:e("lie"),o.exports={Promise:a}},{lie:37}],7:[function(e,o,n){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=e("pako"),t=e("./utils"),i=e("./stream/GenericWorker"),b=a?"uint8array":"array";function p(g,k){i.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=k,this.meta={}}n.magic="\b\0",t.inherits(p,i),p.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(t.transformTo(b,g.data),!1)},p.prototype.flush=function(){i.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(k){g.push({data:k,meta:g.meta})}},n.compressWorker=function(g){return new p("Deflate",g)},n.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,o,n){function a(c,m){var u,v="";for(u=0;u<m;u++)v+=String.fromCharCode(255&c),c>>>=8;return v}function l(c,m,u,v,h,y){var P,D,z=c.file,N=c.compression,S=y!==b.utf8encode,U=t.transformTo("string",y(z.name)),j=t.transformTo("string",b.utf8encode(z.name)),Q=z.comment,Y=t.transformTo("string",y(Q)),w=t.transformTo("string",b.utf8encode(Q)),A=j.length!==z.name.length,s=w.length!==Q.length,_="",Z="",F="",ee=z.dir,X=z.date,J={crc32:0,compressedSize:0,uncompressedSize:0};m&&!u||(J.crc32=c.crc32,J.compressedSize=c.compressedSize,J.uncompressedSize=c.uncompressedSize);var L=0;m&&(L|=8),S||!A&&!s||(L|=2048);var O=0,q=0;ee&&(O|=16),h==="UNIX"?(q=798,O|=function(G,ne){var le=G;return G||(le=ne?16893:33204),(65535&le)<<16}(z.unixPermissions,ee)):(q=20,O|=function(G){return 63&(G||0)}(z.dosPermissions)),P=X.getUTCHours(),P<<=6,P|=X.getUTCMinutes(),P<<=5,P|=X.getUTCSeconds()/2,D=X.getUTCFullYear()-1980,D<<=4,D|=X.getUTCMonth()+1,D<<=5,D|=X.getUTCDate(),A&&(Z=a(1,1)+a(p(U),4)+j,_+="up"+a(Z.length,2)+Z),s&&(F=a(1,1)+a(p(Y),4)+w,_+="uc"+a(F.length,2)+F);var H="";return H+=`
\0`,H+=a(L,2),H+=N.magic,H+=a(P,2),H+=a(D,2),H+=a(J.crc32,4),H+=a(J.compressedSize,4),H+=a(J.uncompressedSize,4),H+=a(U.length,2),H+=a(_.length,2),{fileRecord:g.LOCAL_FILE_HEADER+H+U+_,dirRecord:g.CENTRAL_FILE_HEADER+a(q,2)+H+a(Y.length,2)+"\0\0\0\0"+a(O,4)+a(v,4)+U+_+Y}}var t=e("../utils"),i=e("../stream/GenericWorker"),b=e("../utf8"),p=e("../crc32"),g=e("../signature");function k(c,m,u,v){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=u,this.encodeFileName=v,this.streamFiles=c,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}t.inherits(k,i),k.prototype.push=function(c){var m=c.meta.percent||0,u=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(c):(this.bytesWritten+=c.data.length,i.prototype.push.call(this,{data:c.data,meta:{currentFile:this.currentFile,percent:u?(m+100*(u-v-1))/u:100}}))},k.prototype.openedSource=function(c){this.currentSourceOffset=this.bytesWritten,this.currentFile=c.file.name;var m=this.streamFiles&&!c.file.dir;if(m){var u=l(c,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},k.prototype.closedSource=function(c){this.accumulate=!1;var m=this.streamFiles&&!c.file.dir,u=l(c,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),m)this.push({data:function(v){return g.DATA_DESCRIPTOR+a(v.crc32,4)+a(v.compressedSize,4)+a(v.uncompressedSize,4)}(c),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},k.prototype.flush=function(){for(var c=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var u=this.bytesWritten-c,v=function(h,y,P,D,z){var N=t.transformTo("string",z(D));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(h,2)+a(h,2)+a(y,4)+a(P,4)+a(N.length,2)+N}(this.dirRecords.length,u,c,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},k.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},k.prototype.registerPrevious=function(c){this._sources.push(c);var m=this;return c.on("data",function(u){m.processChunk(u)}),c.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),c.on("error",function(u){m.error(u)}),this},k.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},k.prototype.error=function(c){var m=this._sources;if(!i.prototype.error.call(this,c))return!1;for(var u=0;u<m.length;u++)try{m[u].error(c)}catch{}return!0},k.prototype.lock=function(){i.prototype.lock.call(this);for(var c=this._sources,m=0;m<c.length;m++)c[m].lock()},o.exports=k},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,o,n){var a=e("../compressions"),l=e("./ZipFileWorker");n.generateWorker=function(t,i,b){var p=new l(i.streamFiles,b,i.platform,i.encodeFileName),g=0;try{t.forEach(function(k,c){g++;var m=function(y,P){var D=y||P,z=a[D];if(!z)throw new Error(D+" is not a valid compression method !");return z}(c.options.compression,i.compression),u=c.options.compressionOptions||i.compressionOptions||{},v=c.dir,h=c.date;c._compressWorker(m,u).withStreamInfo("file",{name:k,dir:v,date:h,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(p)}),p.entriesCount=g}catch(k){p.error(k)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,o,n){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new a;for(var t in this)typeof this[t]!="function"&&(l[t]=this[t]);return l}}(a.prototype=e("./object")).loadAsync=e("./load"),a.support=e("./support"),a.defaults=e("./defaults"),a.version="3.10.1",a.loadAsync=function(l,t){return new a().loadAsync(l,t)},a.external=e("./external"),o.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,o,n){var a=e("./utils"),l=e("./external"),t=e("./utf8"),i=e("./zipEntries"),b=e("./stream/Crc32Probe"),p=e("./nodejsUtils");function g(k){return new l.Promise(function(c,m){var u=k.decompressed.getContentWorker().pipe(new b);u.on("error",function(v){m(v)}).on("end",function(){u.streamInfo.crc32!==k.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):c()}).resume()})}o.exports=function(k,c){var m=this;return c=a.extend(c||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:t.utf8decode}),p.isNode&&p.isStream(k)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",k,!0,c.optimizedBinaryString,c.base64).then(function(u){var v=new i(c);return v.load(u),v}).then(function(u){var v=[l.Promise.resolve(u)],h=u.files;if(c.checkCRC32)for(var y=0;y<h.length;y++)v.push(g(h[y]));return l.Promise.all(v)}).then(function(u){for(var v=u.shift(),h=v.files,y=0;y<h.length;y++){var P=h[y],D=P.fileNameStr,z=a.resolve(P.fileNameStr);m.file(z,P.decompressed,{binary:!0,optimizedBinaryString:!0,date:P.date,dir:P.dir,comment:P.fileCommentStr.length?P.fileCommentStr:null,unixPermissions:P.unixPermissions,dosPermissions:P.dosPermissions,createFolders:c.createFolders}),P.dir||(m.file(z).unsafeOriginalName=D)}return v.zipComment.length&&(m.comment=v.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,o,n){var a=e("../utils"),l=e("../stream/GenericWorker");function t(i,b){l.call(this,"Nodejs stream input adapter for "+i),this._upstreamEnded=!1,this._bindStream(b)}a.inherits(t,l),t.prototype._bindStream=function(i){var b=this;(this._stream=i).pause(),i.on("data",function(p){b.push({data:p,meta:{percent:0}})}).on("error",function(p){b.isPaused?this.generatedError=p:b.error(p)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},t.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},t.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=t},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,o,n){var a=e("readable-stream").Readable;function l(t,i,b){a.call(this,i),this._helper=t;var p=this;t.on("data",function(g,k){p.push(g)||p._helper.pause(),b&&b(k)}).on("error",function(g){p.emit("error",g)}).on("end",function(){p.push(null)})}e("../utils").inherits(l,a),l.prototype._read=function(){this._helper.resume()},o.exports=l},{"../utils":32,"readable-stream":16}],14:[function(e,o,n){o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,l);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,l)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var l=new Buffer(a);return l.fill(0),l},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(e,o,n){function a(z,N,S){var U,j=t.getTypeOf(N),Q=t.extend(S||{},p);Q.date=Q.date||new Date,Q.compression!==null&&(Q.compression=Q.compression.toUpperCase()),typeof Q.unixPermissions=="string"&&(Q.unixPermissions=parseInt(Q.unixPermissions,8)),Q.unixPermissions&&16384&Q.unixPermissions&&(Q.dir=!0),Q.dosPermissions&&16&Q.dosPermissions&&(Q.dir=!0),Q.dir&&(z=h(z)),Q.createFolders&&(U=v(z))&&y.call(this,U,!0);var Y=j==="string"&&Q.binary===!1&&Q.base64===!1;S&&S.binary!==void 0||(Q.binary=!Y),(N instanceof g&&N.uncompressedSize===0||Q.dir||!N||N.length===0)&&(Q.base64=!1,Q.binary=!0,N="",Q.compression="STORE",j="string");var w=null;w=N instanceof g||N instanceof i?N:m.isNode&&m.isStream(N)?new u(z,N):t.prepareContent(z,N,Q.binary,Q.optimizedBinaryString,Q.base64);var A=new k(z,w,Q);this.files[z]=A}var l=e("./utf8"),t=e("./utils"),i=e("./stream/GenericWorker"),b=e("./stream/StreamHelper"),p=e("./defaults"),g=e("./compressedObject"),k=e("./zipObject"),c=e("./generate"),m=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),v=function(z){z.slice(-1)==="/"&&(z=z.substring(0,z.length-1));var N=z.lastIndexOf("/");return 0<N?z.substring(0,N):""},h=function(z){return z.slice(-1)!=="/"&&(z+="/"),z},y=function(z,N){return N=N!==void 0?N:p.createFolders,z=h(z),this.files[z]||a.call(this,z,null,{dir:!0,createFolders:N}),this.files[z]};function P(z){return Object.prototype.toString.call(z)==="[object RegExp]"}var D={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(z){var N,S,U;for(N in this.files)U=this.files[N],(S=N.slice(this.root.length,N.length))&&N.slice(0,this.root.length)===this.root&&z(S,U)},filter:function(z){var N=[];return this.forEach(function(S,U){z(S,U)&&N.push(U)}),N},file:function(z,N,S){if(arguments.length!==1)return z=this.root+z,a.call(this,z,N,S),this;if(P(z)){var U=z;return this.filter(function(Q,Y){return!Y.dir&&U.test(Q)})}var j=this.files[this.root+z];return j&&!j.dir?j:null},folder:function(z){if(!z)return this;if(P(z))return this.filter(function(j,Q){return Q.dir&&z.test(j)});var N=this.root+z,S=y.call(this,N),U=this.clone();return U.root=S.name,U},remove:function(z){z=this.root+z;var N=this.files[z];if(N||(z.slice(-1)!=="/"&&(z+="/"),N=this.files[z]),N&&!N.dir)delete this.files[z];else for(var S=this.filter(function(j,Q){return Q.name.slice(0,z.length)===z}),U=0;U<S.length;U++)delete this.files[S[U].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(z){var N,S={};try{if((S=t.extend(z||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=S.type.toLowerCase(),S.compression=S.compression.toUpperCase(),S.type==="binarystring"&&(S.type="string"),!S.type)throw new Error("No output type specified.");t.checkSupport(S.type),S.platform!=="darwin"&&S.platform!=="freebsd"&&S.platform!=="linux"&&S.platform!=="sunos"||(S.platform="UNIX"),S.platform==="win32"&&(S.platform="DOS");var U=S.comment||this.comment||"";N=c.generateWorker(this,S,U)}catch(j){(N=new i("error")).error(j)}return new b(N,S.type||"string",S.mimeType)},generateAsync:function(z,N){return this.generateInternalStream(z).accumulate(N)},generateNodeStream:function(z,N){return(z=z||{}).type||(z.type="nodebuffer"),this.generateInternalStream(z).toNodejsStream(N)}};o.exports=D},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,o,n){o.exports=e("stream")},{stream:void 0}],17:[function(e,o,n){var a=e("./DataReader");function l(t){a.call(this,t);for(var i=0;i<this.data.length;i++)t[i]=255&t[i]}e("../utils").inherits(l,a),l.prototype.byteAt=function(t){return this.data[this.zero+t]},l.prototype.lastIndexOfSignature=function(t){for(var i=t.charCodeAt(0),b=t.charCodeAt(1),p=t.charCodeAt(2),g=t.charCodeAt(3),k=this.length-4;0<=k;--k)if(this.data[k]===i&&this.data[k+1]===b&&this.data[k+2]===p&&this.data[k+3]===g)return k-this.zero;return-1},l.prototype.readAndCheckSignature=function(t){var i=t.charCodeAt(0),b=t.charCodeAt(1),p=t.charCodeAt(2),g=t.charCodeAt(3),k=this.readData(4);return i===k[0]&&b===k[1]&&p===k[2]&&g===k[3]},l.prototype.readData=function(t){if(this.checkOffset(t),t===0)return[];var i=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,i},o.exports=l},{"../utils":32,"./DataReader":18}],18:[function(e,o,n){var a=e("../utils");function l(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(){},readInt:function(t){var i,b=0;for(this.checkOffset(t),i=this.index+t-1;i>=this.index;i--)b=(b<<8)+this.byteAt(i);return this.index+=t,b},readString:function(t){return a.transformTo("string",this.readData(t))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},o.exports=l},{"../utils":32}],19:[function(e,o,n){var a=e("./Uint8ArrayReader");function l(t){a.call(this,t)}e("../utils").inherits(l,a),l.prototype.readData=function(t){this.checkOffset(t);var i=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,i},o.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,o,n){var a=e("./DataReader");function l(t){a.call(this,t)}e("../utils").inherits(l,a),l.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},l.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},l.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},l.prototype.readData=function(t){this.checkOffset(t);var i=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,i},o.exports=l},{"../utils":32,"./DataReader":18}],21:[function(e,o,n){var a=e("./ArrayReader");function l(t){a.call(this,t)}e("../utils").inherits(l,a),l.prototype.readData=function(t){if(this.checkOffset(t),t===0)return new Uint8Array(0);var i=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,i},o.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(e,o,n){var a=e("../utils"),l=e("../support"),t=e("./ArrayReader"),i=e("./StringReader"),b=e("./NodeBufferReader"),p=e("./Uint8ArrayReader");o.exports=function(g){var k=a.getTypeOf(g);return a.checkSupport(k),k!=="string"||l.uint8array?k==="nodebuffer"?new b(g):l.uint8array?new p(a.transformTo("uint8array",g)):new t(a.transformTo("array",g)):new i(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,o,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,o,n){var a=e("./GenericWorker"),l=e("../utils");function t(i){a.call(this,"ConvertWorker to "+i),this.destType=i}l.inherits(t,a),t.prototype.processChunk=function(i){this.push({data:l.transformTo(this.destType,i.data),meta:i.meta})},o.exports=t},{"../utils":32,"./GenericWorker":28}],25:[function(e,o,n){var a=e("./GenericWorker"),l=e("../crc32");function t(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(t,a),t.prototype.processChunk=function(i){this.streamInfo.crc32=l(i.data,this.streamInfo.crc32||0),this.push(i)},o.exports=t},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,o,n){var a=e("../utils"),l=e("./GenericWorker");function t(i){l.call(this,"DataLengthProbe for "+i),this.propName=i,this.withStreamInfo(i,0)}a.inherits(t,l),t.prototype.processChunk=function(i){if(i){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+i.data.length}l.prototype.processChunk.call(this,i)},o.exports=t},{"../utils":32,"./GenericWorker":28}],27:[function(e,o,n){var a=e("../utils"),l=e("./GenericWorker");function t(i){l.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,i.then(function(p){b.dataIsReady=!0,b.data=p,b.max=p&&p.length||0,b.type=a.getTypeOf(p),b.isPaused||b._tickAndRepeat()},function(p){b.error(p)})}a.inherits(t,l),t.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},t.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},t.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},t.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var i=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":i=this.data.substring(this.index,b);break;case"uint8array":i=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":i=this.data.slice(this.index,b)}return this.index=b,this.push({data:i,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=t},{"../utils":32,"./GenericWorker":28}],28:[function(e,o,n){function a(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,t){return this._listeners[l].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,t){if(this._listeners[l])for(var i=0;i<this._listeners[l].length;i++)this._listeners[l][i].call(this,t)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var t=this;return l.on("data",function(i){t.processChunk(i)}),l.on("end",function(){t.end()}),l.on("error",function(i){t.error(i)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,t){return this.extraStreamInfo[l]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},o.exports=a},{}],29:[function(e,o,n){var a=e("../utils"),l=e("./ConvertWorker"),t=e("./GenericWorker"),i=e("../base64"),b=e("../support"),p=e("../external"),g=null;if(b.nodestream)try{g=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function k(m,u){return new p.Promise(function(v,h){var y=[],P=m._internalType,D=m._outputType,z=m._mimeType;m.on("data",function(N,S){y.push(N),u&&u(S)}).on("error",function(N){y=[],h(N)}).on("end",function(){try{var N=function(S,U,j){switch(S){case"blob":return a.newBlob(a.transformTo("arraybuffer",U),j);case"base64":return i.encode(U);default:return a.transformTo(S,U)}}(D,function(S,U){var j,Q=0,Y=null,w=0;for(j=0;j<U.length;j++)w+=U[j].length;switch(S){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(Y=new Uint8Array(w),j=0;j<U.length;j++)Y.set(U[j],Q),Q+=U[j].length;return Y;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+S+"'")}}(P,y),z);v(N)}catch(S){h(S)}y=[]}).resume()})}function c(m,u,v){var h=u;switch(u){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=u,this._mimeType=v,a.checkSupport(h),this._worker=m.pipe(new l(h)),m.lock()}catch(y){this._worker=new t("error"),this._worker.error(y)}}c.prototype={accumulate:function(m){return k(this,m)},on:function(m,u){var v=this;return m==="data"?this._worker.on(m,function(h){u.call(v,h.data,h.meta)}):this._worker.on(m,function(){a.delay(u,arguments,v)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},m)}},o.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,o,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var a=new ArrayBuffer(0);try{n.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(a),n.blob=l.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,o,n){for(var a=e("./utils"),l=e("./support"),t=e("./nodejsUtils"),i=e("./stream/GenericWorker"),b=new Array(256),p=0;p<256;p++)b[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;b[254]=b[254]=1;function g(){i.call(this,"utf-8 decode"),this.leftOver=null}function k(){i.call(this,"utf-8 encode")}n.utf8encode=function(c){return l.nodebuffer?t.newBufferFrom(c,"utf-8"):function(m){var u,v,h,y,P,D=m.length,z=0;for(y=0;y<D;y++)(64512&(v=m.charCodeAt(y)))==55296&&y+1<D&&(64512&(h=m.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(h-56320),y++),z+=v<128?1:v<2048?2:v<65536?3:4;for(u=l.uint8array?new Uint8Array(z):new Array(z),y=P=0;P<z;y++)(64512&(v=m.charCodeAt(y)))==55296&&y+1<D&&(64512&(h=m.charCodeAt(y+1)))==56320&&(v=65536+(v-55296<<10)+(h-56320),y++),v<128?u[P++]=v:(v<2048?u[P++]=192|v>>>6:(v<65536?u[P++]=224|v>>>12:(u[P++]=240|v>>>18,u[P++]=128|v>>>12&63),u[P++]=128|v>>>6&63),u[P++]=128|63&v);return u}(c)},n.utf8decode=function(c){return l.nodebuffer?a.transformTo("nodebuffer",c).toString("utf-8"):function(m){var u,v,h,y,P=m.length,D=new Array(2*P);for(u=v=0;u<P;)if((h=m[u++])<128)D[v++]=h;else if(4<(y=b[h]))D[v++]=65533,u+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&u<P;)h=h<<6|63&m[u++],y--;1<y?D[v++]=65533:h<65536?D[v++]=h:(h-=65536,D[v++]=55296|h>>10&1023,D[v++]=56320|1023&h)}return D.length!==v&&(D.subarray?D=D.subarray(0,v):D.length=v),a.applyFromCharCode(D)}(c=a.transformTo(l.uint8array?"uint8array":"array",c))},a.inherits(g,i),g.prototype.processChunk=function(c){var m=a.transformTo(l.uint8array?"uint8array":"array",c.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var u=m;(m=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),m.set(u,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var v=function(y,P){var D;for((P=P||y.length)>y.length&&(P=y.length),D=P-1;0<=D&&(192&y[D])==128;)D--;return D<0||D===0?P:D+b[y[D]]>P?D:P}(m),h=m;v!==m.length&&(l.uint8array?(h=m.subarray(0,v),this.leftOver=m.subarray(v,m.length)):(h=m.slice(0,v),this.leftOver=m.slice(v,m.length))),this.push({data:n.utf8decode(h),meta:c.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=g,a.inherits(k,i),k.prototype.processChunk=function(c){this.push({data:n.utf8encode(c.data),meta:c.meta})},n.Utf8EncodeWorker=k},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,o,n){var a=e("./support"),l=e("./base64"),t=e("./nodejsUtils"),i=e("./external");function b(u){return u}function p(u,v){for(var h=0;h<u.length;++h)v[h]=255&u.charCodeAt(h);return v}e("setimmediate"),n.newBlob=function(u,v){n.checkSupport("blob");try{return new Blob([u],{type:v})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(u),h.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(u,v,h){var y=[],P=0,D=u.length;if(D<=h)return String.fromCharCode.apply(null,u);for(;P<D;)v==="array"||v==="nodebuffer"?y.push(String.fromCharCode.apply(null,u.slice(P,Math.min(P+h,D)))):y.push(String.fromCharCode.apply(null,u.subarray(P,Math.min(P+h,D)))),P+=h;return y.join("")},stringifyByChar:function(u){for(var v="",h=0;h<u.length;h++)v+=String.fromCharCode(u[h]);return v},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,t.allocBuffer(1)).length===1}catch{return!1}}()}};function k(u){var v=65536,h=n.getTypeOf(u),y=!0;if(h==="uint8array"?y=g.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=g.applyCanBeUsed.nodebuffer),y)for(;1<v;)try{return g.stringifyByChunk(u,h,v)}catch{v=Math.floor(v/2)}return g.stringifyByChar(u)}function c(u,v){for(var h=0;h<u.length;h++)v[h]=u[h];return v}n.applyFromCharCode=k;var m={};m.string={string:b,array:function(u){return p(u,new Array(u.length))},arraybuffer:function(u){return m.string.uint8array(u).buffer},uint8array:function(u){return p(u,new Uint8Array(u.length))},nodebuffer:function(u){return p(u,t.allocBuffer(u.length))}},m.array={string:k,array:b,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return t.newBufferFrom(u)}},m.arraybuffer={string:function(u){return k(new Uint8Array(u))},array:function(u){return c(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:b,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return t.newBufferFrom(new Uint8Array(u))}},m.uint8array={string:k,array:function(u){return c(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:b,nodebuffer:function(u){return t.newBufferFrom(u)}},m.nodebuffer={string:k,array:function(u){return c(u,new Array(u.length))},arraybuffer:function(u){return m.nodebuffer.uint8array(u).buffer},uint8array:function(u){return c(u,new Uint8Array(u.length))},nodebuffer:b},n.transformTo=function(u,v){if(v=v||"",!u)return v;n.checkSupport(u);var h=n.getTypeOf(v);return m[h][u](v)},n.resolve=function(u){for(var v=u.split("/"),h=[],y=0;y<v.length;y++){var P=v[y];P==="."||P===""&&y!==0&&y!==v.length-1||(P===".."?h.pop():h.push(P))}return h.join("/")},n.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":a.nodebuffer&&t.isBuffer(u)?"nodebuffer":a.uint8array&&u instanceof Uint8Array?"uint8array":a.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(u){if(!a[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(u){var v,h,y="";for(h=0;h<(u||"").length;h++)y+="\\x"+((v=u.charCodeAt(h))<16?"0":"")+v.toString(16).toUpperCase();return y},n.delay=function(u,v,h){setImmediate(function(){u.apply(h||null,v||[])})},n.inherits=function(u,v){function h(){}h.prototype=v.prototype,u.prototype=new h},n.extend=function(){var u,v,h={};for(u=0;u<arguments.length;u++)for(v in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],v)&&h[v]===void 0&&(h[v]=arguments[u][v]);return h},n.prepareContent=function(u,v,h,y,P){return i.Promise.resolve(v).then(function(D){return a.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new i.Promise(function(z,N){var S=new FileReader;S.onload=function(U){z(U.target.result)},S.onerror=function(U){N(U.target.error)},S.readAsArrayBuffer(D)}):D}).then(function(D){var z=n.getTypeOf(D);return z?(z==="arraybuffer"?D=n.transformTo("uint8array",D):z==="string"&&(P?D=l.decode(D):h&&y!==!0&&(D=function(N){return p(N,a.uint8array?new Uint8Array(N.length):new Array(N.length))}(D))),D):i.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,o,n){var a=e("./reader/readerFor"),l=e("./utils"),t=e("./signature"),i=e("./zipEntry"),b=e("./support");function p(g){this.files=[],this.loadOptions=g}p.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var k=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(k)+", expected "+l.pretty(g)+")")}},isSignature:function(g,k){var c=this.reader.index;this.reader.setIndex(g);var m=this.reader.readString(4)===k;return this.reader.setIndex(c),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),k=b.uint8array?"uint8array":"array",c=l.transformTo(k,g);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,k,c,m=this.zip64EndOfCentralSize-44;0<m;)g=this.reader.readInt(2),k=this.reader.readInt(4),c=this.reader.readData(k),this.zip64ExtensibleData[g]={id:g,length:k,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,k;for(g=0;g<this.files.length;g++)k=this.files[g],this.reader.setIndex(k.localHeaderOffset),this.checkSignature(t.LOCAL_FILE_HEADER),k.readLocalPart(this.reader),k.handleUTF8(),k.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(t.CENTRAL_FILE_HEADER);)(g=new i({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(t.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,t.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var k=g;if(this.checkSignature(t.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,t.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var c=this.centralDirOffset+this.centralDirSize;this.zip64&&(c+=20,c+=12+this.zip64EndOfCentralSize);var m=k-c;if(0<m)this.isSignature(k,t.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(g){this.reader=a(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,o,n){var a=e("./reader/readerFor"),l=e("./utils"),t=e("./compressedObject"),i=e("./crc32"),b=e("./utf8"),p=e("./compressions"),g=e("./support");function k(c,m){this.options=c,this.loadOptions=m}k.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(c){var m,u;if(c.skip(22),this.fileNameLength=c.readInt(2),u=c.readInt(2),this.fileName=c.readData(this.fileNameLength),c.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=function(v){for(var h in p)if(Object.prototype.hasOwnProperty.call(p,h)&&p[h].magic===v)return p[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new t(this.compressedSize,this.uncompressedSize,this.crc32,m,c.readData(this.compressedSize))},readCentralPart:function(c){this.versionMadeBy=c.readInt(2),c.skip(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4);var m=c.readInt(2);if(this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");c.skip(m),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var c=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),c==0&&(this.dosPermissions=63&this.externalFileAttributes),c==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=a(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))}},readExtraFields:function(c){var m,u,v,h=c.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});c.index+4<h;)m=c.readInt(2),u=c.readInt(2),v=c.readData(u),this.extraFields[m]={id:m,length:u,value:v};c.setIndex(h)},handleUTF8:function(){var c=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var u=l.transformTo(c,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var h=l.transformTo(c,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var c=this.extraFields[28789];if(c){var m=a(c.value);return m.readInt(1)!==1||i(this.fileName)!==m.readInt(4)?null:b.utf8decode(m.readData(c.length-5))}return null},findExtraFieldUnicodeComment:function(){var c=this.extraFields[25461];if(c){var m=a(c.value);return m.readInt(1)!==1||i(this.fileComment)!==m.readInt(4)?null:b.utf8decode(m.readData(c.length-5))}return null}},o.exports=k},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,o,n){function a(m,u,v){this.name=m,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=u,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var l=e("./stream/StreamHelper"),t=e("./stream/DataWorker"),i=e("./utf8"),b=e("./compressedObject"),p=e("./stream/GenericWorker");a.prototype={internalStream:function(m){var u=null,v="string";try{if(!m)throw new Error("No output type specified.");var h=(v=m.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),u=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(u=u.pipe(new i.Utf8EncodeWorker)),!y&&h&&(u=u.pipe(new i.Utf8DecodeWorker))}catch(P){(u=new p("error")).error(P)}return new l(u,v,"")},async:function(m,u){return this.internalStream(m).accumulate(u)},nodeStream:function(m,u){return this.internalStream(m||"nodebuffer").toNodejsStream(u)},_compressWorker:function(m,u){if(this._data instanceof b&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new i.Utf8EncodeWorker)),b.createWorkerFrom(v,m,u)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof p?this._data:new t(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],k=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},c=0;c<g.length;c++)a.prototype[g[c]]=k;o.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,o,n){(function(a){var l,t,i=a.MutationObserver||a.WebKitMutationObserver;if(i){var b=0,p=new i(m),g=a.document.createTextNode("");p.observe(g,{characterData:!0}),l=function(){g.data=b=++b%2}}else if(a.setImmediate||a.MessageChannel===void 0)l="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var u=a.document.createElement("script");u.onreadystatechange=function(){m(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},a.document.documentElement.appendChild(u)}:function(){setTimeout(m,0)};else{var k=new a.MessageChannel;k.port1.onmessage=m,l=function(){k.port2.postMessage(0)}}var c=[];function m(){var u,v;t=!0;for(var h=c.length;h;){for(v=c,c=[],u=-1;++u<h;)v[u]();h=c.length}t=!1}o.exports=function(u){c.push(u)!==1||t||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,o,n){var a=e("immediate");function l(){}var t={},i=["REJECTED"],b=["FULFILLED"],p=["PENDING"];function g(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,h!==l&&u(this,h)}function k(h,y,P){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof P=="function"&&(this.onRejected=P,this.callRejected=this.otherCallRejected)}function c(h,y,P){a(function(){var D;try{D=y(P)}catch(z){return t.reject(h,z)}D===h?t.reject(h,new TypeError("Cannot resolve promise with itself")):t.resolve(h,D)})}function m(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function u(h,y){var P=!1;function D(S){P||(P=!0,t.reject(h,S))}function z(S){P||(P=!0,t.resolve(h,S))}var N=v(function(){y(z,D)});N.status==="error"&&D(N.value)}function v(h,y){var P={};try{P.value=h(y),P.status="success"}catch(D){P.status="error",P.value=D}return P}(o.exports=g).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(P){return y.resolve(h()).then(function(){return P})},function(P){return y.resolve(h()).then(function(){throw P})})},g.prototype.catch=function(h){return this.then(null,h)},g.prototype.then=function(h,y){if(typeof h!="function"&&this.state===b||typeof y!="function"&&this.state===i)return this;var P=new this.constructor(l);return this.state!==p?c(P,this.state===b?h:y,this.outcome):this.queue.push(new k(P,h,y)),P},k.prototype.callFulfilled=function(h){t.resolve(this.promise,h)},k.prototype.otherCallFulfilled=function(h){c(this.promise,this.onFulfilled,h)},k.prototype.callRejected=function(h){t.reject(this.promise,h)},k.prototype.otherCallRejected=function(h){c(this.promise,this.onRejected,h)},t.resolve=function(h,y){var P=v(m,y);if(P.status==="error")return t.reject(h,P.value);var D=P.value;if(D)u(h,D);else{h.state=b,h.outcome=y;for(var z=-1,N=h.queue.length;++z<N;)h.queue[z].callFulfilled(y)}return h},t.reject=function(h,y){h.state=i,h.outcome=y;for(var P=-1,D=h.queue.length;++P<D;)h.queue[P].callRejected(y);return h},g.resolve=function(h){return h instanceof this?h:t.resolve(new this(l),h)},g.reject=function(h){var y=new this(l);return t.reject(y,h)},g.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var P=h.length,D=!1;if(!P)return this.resolve([]);for(var z=new Array(P),N=0,S=-1,U=new this(l);++S<P;)j(h[S],S);return U;function j(Q,Y){y.resolve(Q).then(function(w){z[Y]=w,++N!==P||D||(D=!0,t.resolve(U,z))},function(w){D||(D=!0,t.reject(U,w))})}},g.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var P=h.length,D=!1;if(!P)return this.resolve([]);for(var z=-1,N=new this(l);++z<P;)S=h[z],y.resolve(S).then(function(U){D||(D=!0,t.resolve(N,U))},function(U){D||(D=!0,t.reject(N,U))});var S;return N}},{immediate:36}],38:[function(e,o,n){var a={};(0,e("./lib/utils/common").assign)(a,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),o.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,o,n){var a=e("./zlib/deflate"),l=e("./utils/common"),t=e("./utils/strings"),i=e("./zlib/messages"),b=e("./zlib/zstream"),p=Object.prototype.toString,g=0,k=-1,c=0,m=8;function u(h){if(!(this instanceof u))return new u(h);this.options=l.assign({level:k,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var P=a.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(P!==g)throw new Error(i[P]);if(y.header&&a.deflateSetHeader(this.strm,y.header),y.dictionary){var D;if(D=typeof y.dictionary=="string"?t.string2buf(y.dictionary):p.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(P=a.deflateSetDictionary(this.strm,D))!==g)throw new Error(i[P]);this._dict_set=!0}}function v(h,y){var P=new u(y);if(P.push(h,!0),P.err)throw P.msg||i[P.err];return P.result}u.prototype.push=function(h,y){var P,D,z=this.strm,N=this.options.chunkSize;if(this.ended)return!1;D=y===~~y?y:y===!0?4:0,typeof h=="string"?z.input=t.string2buf(h):p.call(h)==="[object ArrayBuffer]"?z.input=new Uint8Array(h):z.input=h,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new l.Buf8(N),z.next_out=0,z.avail_out=N),(P=a.deflate(z,D))!==1&&P!==g)return this.onEnd(P),!(this.ended=!0);z.avail_out!==0&&(z.avail_in!==0||D!==4&&D!==2)||(this.options.to==="string"?this.onData(t.buf2binstring(l.shrinkBuf(z.output,z.next_out))):this.onData(l.shrinkBuf(z.output,z.next_out)))}while((0<z.avail_in||z.avail_out===0)&&P!==1);return D===4?(P=a.deflateEnd(this.strm),this.onEnd(P),this.ended=!0,P===g):D!==2||(this.onEnd(g),!(z.avail_out=0))},u.prototype.onData=function(h){this.chunks.push(h)},u.prototype.onEnd=function(h){h===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},n.Deflate=u,n.deflate=v,n.deflateRaw=function(h,y){return(y=y||{}).raw=!0,v(h,y)},n.gzip=function(h,y){return(y=y||{}).gzip=!0,v(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,o,n){var a=e("./zlib/inflate"),l=e("./utils/common"),t=e("./utils/strings"),i=e("./zlib/constants"),b=e("./zlib/messages"),p=e("./zlib/zstream"),g=e("./zlib/gzheader"),k=Object.prototype.toString;function c(u){if(!(this instanceof c))return new c(u);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},u||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||u&&u.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var h=a.inflateInit2(this.strm,v.windowBits);if(h!==i.Z_OK)throw new Error(b[h]);this.header=new g,a.inflateGetHeader(this.strm,this.header)}function m(u,v){var h=new c(v);if(h.push(u,!0),h.err)throw h.msg||b[h.err];return h.result}c.prototype.push=function(u,v){var h,y,P,D,z,N,S=this.strm,U=this.options.chunkSize,j=this.options.dictionary,Q=!1;if(this.ended)return!1;y=v===~~v?v:v===!0?i.Z_FINISH:i.Z_NO_FLUSH,typeof u=="string"?S.input=t.binstring2buf(u):k.call(u)==="[object ArrayBuffer]"?S.input=new Uint8Array(u):S.input=u,S.next_in=0,S.avail_in=S.input.length;do{if(S.avail_out===0&&(S.output=new l.Buf8(U),S.next_out=0,S.avail_out=U),(h=a.inflate(S,i.Z_NO_FLUSH))===i.Z_NEED_DICT&&j&&(N=typeof j=="string"?t.string2buf(j):k.call(j)==="[object ArrayBuffer]"?new Uint8Array(j):j,h=a.inflateSetDictionary(this.strm,N)),h===i.Z_BUF_ERROR&&Q===!0&&(h=i.Z_OK,Q=!1),h!==i.Z_STREAM_END&&h!==i.Z_OK)return this.onEnd(h),!(this.ended=!0);S.next_out&&(S.avail_out!==0&&h!==i.Z_STREAM_END&&(S.avail_in!==0||y!==i.Z_FINISH&&y!==i.Z_SYNC_FLUSH)||(this.options.to==="string"?(P=t.utf8border(S.output,S.next_out),D=S.next_out-P,z=t.buf2string(S.output,P),S.next_out=D,S.avail_out=U-D,D&&l.arraySet(S.output,S.output,P,D,0),this.onData(z)):this.onData(l.shrinkBuf(S.output,S.next_out)))),S.avail_in===0&&S.avail_out===0&&(Q=!0)}while((0<S.avail_in||S.avail_out===0)&&h!==i.Z_STREAM_END);return h===i.Z_STREAM_END&&(y=i.Z_FINISH),y===i.Z_FINISH?(h=a.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===i.Z_OK):y!==i.Z_SYNC_FLUSH||(this.onEnd(i.Z_OK),!(S.avail_out=0))},c.prototype.onData=function(u){this.chunks.push(u)},c.prototype.onEnd=function(u){u===i.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},n.Inflate=c,n.inflate=m,n.inflateRaw=function(u,v){return(v=v||{}).raw=!0,m(u,v)},n.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,o,n){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(i){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var p=b.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var g in p)p.hasOwnProperty(g)&&(i[g]=p[g])}}return i},n.shrinkBuf=function(i,b){return i.length===b?i:i.subarray?i.subarray(0,b):(i.length=b,i)};var l={arraySet:function(i,b,p,g,k){if(b.subarray&&i.subarray)i.set(b.subarray(p,p+g),k);else for(var c=0;c<g;c++)i[k+c]=b[p+c]},flattenChunks:function(i){var b,p,g,k,c,m;for(b=g=0,p=i.length;b<p;b++)g+=i[b].length;for(m=new Uint8Array(g),b=k=0,p=i.length;b<p;b++)c=i[b],m.set(c,k),k+=c.length;return m}},t={arraySet:function(i,b,p,g,k){for(var c=0;c<g;c++)i[k+c]=b[p+c]},flattenChunks:function(i){return[].concat.apply([],i)}};n.setTyped=function(i){i?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,l)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,t))},n.setTyped(a)},{}],42:[function(e,o,n){var a=e("./common"),l=!0,t=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{t=!1}for(var i=new a.Buf8(256),b=0;b<256;b++)i[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function p(g,k){if(k<65537&&(g.subarray&&t||!g.subarray&&l))return String.fromCharCode.apply(null,a.shrinkBuf(g,k));for(var c="",m=0;m<k;m++)c+=String.fromCharCode(g[m]);return c}i[254]=i[254]=1,n.string2buf=function(g){var k,c,m,u,v,h=g.length,y=0;for(u=0;u<h;u++)(64512&(c=g.charCodeAt(u)))==55296&&u+1<h&&(64512&(m=g.charCodeAt(u+1)))==56320&&(c=65536+(c-55296<<10)+(m-56320),u++),y+=c<128?1:c<2048?2:c<65536?3:4;for(k=new a.Buf8(y),u=v=0;v<y;u++)(64512&(c=g.charCodeAt(u)))==55296&&u+1<h&&(64512&(m=g.charCodeAt(u+1)))==56320&&(c=65536+(c-55296<<10)+(m-56320),u++),c<128?k[v++]=c:(c<2048?k[v++]=192|c>>>6:(c<65536?k[v++]=224|c>>>12:(k[v++]=240|c>>>18,k[v++]=128|c>>>12&63),k[v++]=128|c>>>6&63),k[v++]=128|63&c);return k},n.buf2binstring=function(g){return p(g,g.length)},n.binstring2buf=function(g){for(var k=new a.Buf8(g.length),c=0,m=k.length;c<m;c++)k[c]=g.charCodeAt(c);return k},n.buf2string=function(g,k){var c,m,u,v,h=k||g.length,y=new Array(2*h);for(c=m=0;c<h;)if((u=g[c++])<128)y[m++]=u;else if(4<(v=i[u]))y[m++]=65533,c+=v-1;else{for(u&=v===2?31:v===3?15:7;1<v&&c<h;)u=u<<6|63&g[c++],v--;1<v?y[m++]=65533:u<65536?y[m++]=u:(u-=65536,y[m++]=55296|u>>10&1023,y[m++]=56320|1023&u)}return p(y,m)},n.utf8border=function(g,k){var c;for((k=k||g.length)>g.length&&(k=g.length),c=k-1;0<=c&&(192&g[c])==128;)c--;return c<0||c===0?k:c+i[g[c]]>k?c:k}},{"./common":41}],43:[function(e,o,n){o.exports=function(a,l,t,i){for(var b=65535&a|0,p=a>>>16&65535|0,g=0;t!==0;){for(t-=g=2e3<t?2e3:t;p=p+(b=b+l[i++]|0)|0,--g;);b%=65521,p%=65521}return b|p<<16|0}},{}],44:[function(e,o,n){o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,o,n){var a=function(){for(var l,t=[],i=0;i<256;i++){l=i;for(var b=0;b<8;b++)l=1&l?3988292384^l>>>1:l>>>1;t[i]=l}return t}();o.exports=function(l,t,i,b){var p=a,g=b+i;l^=-1;for(var k=b;k<g;k++)l=l>>>8^p[255&(l^t[k])];return-1^l}},{}],46:[function(e,o,n){var a,l=e("../utils/common"),t=e("./trees"),i=e("./adler32"),b=e("./crc32"),p=e("./messages"),g=0,k=4,c=0,m=-2,u=-1,v=4,h=2,y=8,P=9,D=286,z=30,N=19,S=2*D+1,U=15,j=3,Q=258,Y=Q+j+1,w=42,A=113,s=1,_=2,Z=3,F=4;function ee(r,E){return r.msg=p[E],E}function X(r){return(r<<1)-(4<r?9:0)}function J(r){for(var E=r.length;0<=--E;)r[E]=0}function L(r){var E=r.state,C=E.pending;C>r.avail_out&&(C=r.avail_out),C!==0&&(l.arraySet(r.output,E.pending_buf,E.pending_out,C,r.next_out),r.next_out+=C,E.pending_out+=C,r.total_out+=C,r.avail_out-=C,E.pending-=C,E.pending===0&&(E.pending_out=0))}function O(r,E){t._tr_flush_block(r,0<=r.block_start?r.block_start:-1,r.strstart-r.block_start,E),r.block_start=r.strstart,L(r.strm)}function q(r,E){r.pending_buf[r.pending++]=E}function H(r,E){r.pending_buf[r.pending++]=E>>>8&255,r.pending_buf[r.pending++]=255&E}function G(r,E){var C,d,f=r.max_chain_length,x=r.strstart,I=r.prev_length,B=r.nice_match,T=r.strstart>r.w_size-Y?r.strstart-(r.w_size-Y):0,R=r.window,W=r.w_mask,M=r.prev,V=r.strstart+Q,re=R[x+I-1],te=R[x+I];r.prev_length>=r.good_match&&(f>>=2),B>r.lookahead&&(B=r.lookahead);do if(R[(C=E)+I]===te&&R[C+I-1]===re&&R[C]===R[x]&&R[++C]===R[x+1]){x+=2,C++;do;while(R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&R[++x]===R[++C]&&x<V);if(d=Q-(V-x),x=V-Q,I<d){if(r.match_start=E,B<=(I=d))break;re=R[x+I-1],te=R[x+I]}}while((E=M[E&W])>T&&--f!=0);return I<=r.lookahead?I:r.lookahead}function ne(r){var E,C,d,f,x,I,B,T,R,W,M=r.w_size;do{if(f=r.window_size-r.lookahead-r.strstart,r.strstart>=M+(M-Y)){for(l.arraySet(r.window,r.window,M,M,0),r.match_start-=M,r.strstart-=M,r.block_start-=M,E=C=r.hash_size;d=r.head[--E],r.head[E]=M<=d?d-M:0,--C;);for(E=C=M;d=r.prev[--E],r.prev[E]=M<=d?d-M:0,--C;);f+=M}if(r.strm.avail_in===0)break;if(I=r.strm,B=r.window,T=r.strstart+r.lookahead,R=f,W=void 0,W=I.avail_in,R<W&&(W=R),C=W===0?0:(I.avail_in-=W,l.arraySet(B,I.input,I.next_in,W,T),I.state.wrap===1?I.adler=i(I.adler,B,W,T):I.state.wrap===2&&(I.adler=b(I.adler,B,W,T)),I.next_in+=W,I.total_in+=W,W),r.lookahead+=C,r.lookahead+r.insert>=j)for(x=r.strstart-r.insert,r.ins_h=r.window[x],r.ins_h=(r.ins_h<<r.hash_shift^r.window[x+1])&r.hash_mask;r.insert&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[x+j-1])&r.hash_mask,r.prev[x&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=x,x++,r.insert--,!(r.lookahead+r.insert<j)););}while(r.lookahead<Y&&r.strm.avail_in!==0)}function le(r,E){for(var C,d;;){if(r.lookahead<Y){if(ne(r),r.lookahead<Y&&E===g)return s;if(r.lookahead===0)break}if(C=0,r.lookahead>=j&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+j-1])&r.hash_mask,C=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),C!==0&&r.strstart-C<=r.w_size-Y&&(r.match_length=G(r,C)),r.match_length>=j)if(d=t._tr_tally(r,r.strstart-r.match_start,r.match_length-j),r.lookahead-=r.match_length,r.match_length<=r.max_lazy_match&&r.lookahead>=j){for(r.match_length--;r.strstart++,r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+j-1])&r.hash_mask,C=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart,--r.match_length!=0;);r.strstart++}else r.strstart+=r.match_length,r.match_length=0,r.ins_h=r.window[r.strstart],r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+1])&r.hash_mask;else d=t._tr_tally(r,0,r.window[r.strstart]),r.lookahead--,r.strstart++;if(d&&(O(r,!1),r.strm.avail_out===0))return s}return r.insert=r.strstart<j-1?r.strstart:j-1,E===k?(O(r,!0),r.strm.avail_out===0?Z:F):r.last_lit&&(O(r,!1),r.strm.avail_out===0)?s:_}function K(r,E){for(var C,d,f;;){if(r.lookahead<Y){if(ne(r),r.lookahead<Y&&E===g)return s;if(r.lookahead===0)break}if(C=0,r.lookahead>=j&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+j-1])&r.hash_mask,C=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),r.prev_length=r.match_length,r.prev_match=r.match_start,r.match_length=j-1,C!==0&&r.prev_length<r.max_lazy_match&&r.strstart-C<=r.w_size-Y&&(r.match_length=G(r,C),r.match_length<=5&&(r.strategy===1||r.match_length===j&&4096<r.strstart-r.match_start)&&(r.match_length=j-1)),r.prev_length>=j&&r.match_length<=r.prev_length){for(f=r.strstart+r.lookahead-j,d=t._tr_tally(r,r.strstart-1-r.prev_match,r.prev_length-j),r.lookahead-=r.prev_length-1,r.prev_length-=2;++r.strstart<=f&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+j-1])&r.hash_mask,C=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),--r.prev_length!=0;);if(r.match_available=0,r.match_length=j-1,r.strstart++,d&&(O(r,!1),r.strm.avail_out===0))return s}else if(r.match_available){if((d=t._tr_tally(r,0,r.window[r.strstart-1]))&&O(r,!1),r.strstart++,r.lookahead--,r.strm.avail_out===0)return s}else r.match_available=1,r.strstart++,r.lookahead--}return r.match_available&&(d=t._tr_tally(r,0,r.window[r.strstart-1]),r.match_available=0),r.insert=r.strstart<j-1?r.strstart:j-1,E===k?(O(r,!0),r.strm.avail_out===0?Z:F):r.last_lit&&(O(r,!1),r.strm.avail_out===0)?s:_}function $(r,E,C,d,f){this.good_length=r,this.max_lazy=E,this.nice_length=C,this.max_chain=d,this.func=f}function se(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*S),this.dyn_dtree=new l.Buf16(2*(2*z+1)),this.bl_tree=new l.Buf16(2*(2*N+1)),J(this.dyn_ltree),J(this.dyn_dtree),J(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(U+1),this.heap=new l.Buf16(2*D+1),J(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*D+1),J(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ie(r){var E;return r&&r.state?(r.total_in=r.total_out=0,r.data_type=h,(E=r.state).pending=0,E.pending_out=0,E.wrap<0&&(E.wrap=-E.wrap),E.status=E.wrap?w:A,r.adler=E.wrap===2?0:1,E.last_flush=g,t._tr_init(E),c):ee(r,m)}function he(r){var E=ie(r);return E===c&&function(C){C.window_size=2*C.w_size,J(C.head),C.max_lazy_match=a[C.level].max_lazy,C.good_match=a[C.level].good_length,C.nice_match=a[C.level].nice_length,C.max_chain_length=a[C.level].max_chain,C.strstart=0,C.block_start=0,C.lookahead=0,C.insert=0,C.match_length=C.prev_length=j-1,C.match_available=0,C.ins_h=0}(r.state),E}function pe(r,E,C,d,f,x){if(!r)return m;var I=1;if(E===u&&(E=6),d<0?(I=0,d=-d):15<d&&(I=2,d-=16),f<1||P<f||C!==y||d<8||15<d||E<0||9<E||x<0||v<x)return ee(r,m);d===8&&(d=9);var B=new se;return(r.state=B).strm=r,B.wrap=I,B.gzhead=null,B.w_bits=d,B.w_size=1<<B.w_bits,B.w_mask=B.w_size-1,B.hash_bits=f+7,B.hash_size=1<<B.hash_bits,B.hash_mask=B.hash_size-1,B.hash_shift=~~((B.hash_bits+j-1)/j),B.window=new l.Buf8(2*B.w_size),B.head=new l.Buf16(B.hash_size),B.prev=new l.Buf16(B.w_size),B.lit_bufsize=1<<f+6,B.pending_buf_size=4*B.lit_bufsize,B.pending_buf=new l.Buf8(B.pending_buf_size),B.d_buf=1*B.lit_bufsize,B.l_buf=3*B.lit_bufsize,B.level=E,B.strategy=x,B.method=C,he(r)}a=[new $(0,0,0,0,function(r,E){var C=65535;for(C>r.pending_buf_size-5&&(C=r.pending_buf_size-5);;){if(r.lookahead<=1){if(ne(r),r.lookahead===0&&E===g)return s;if(r.lookahead===0)break}r.strstart+=r.lookahead,r.lookahead=0;var d=r.block_start+C;if((r.strstart===0||r.strstart>=d)&&(r.lookahead=r.strstart-d,r.strstart=d,O(r,!1),r.strm.avail_out===0)||r.strstart-r.block_start>=r.w_size-Y&&(O(r,!1),r.strm.avail_out===0))return s}return r.insert=0,E===k?(O(r,!0),r.strm.avail_out===0?Z:F):(r.strstart>r.block_start&&(O(r,!1),r.strm.avail_out),s)}),new $(4,4,8,4,le),new $(4,5,16,8,le),new $(4,6,32,32,le),new $(4,4,16,16,K),new $(8,16,32,32,K),new $(8,16,128,128,K),new $(8,32,128,256,K),new $(32,128,258,1024,K),new $(32,258,258,4096,K)],n.deflateInit=function(r,E){return pe(r,E,y,15,8,0)},n.deflateInit2=pe,n.deflateReset=he,n.deflateResetKeep=ie,n.deflateSetHeader=function(r,E){return r&&r.state?r.state.wrap!==2?m:(r.state.gzhead=E,c):m},n.deflate=function(r,E){var C,d,f,x;if(!r||!r.state||5<E||E<0)return r?ee(r,m):m;if(d=r.state,!r.output||!r.input&&r.avail_in!==0||d.status===666&&E!==k)return ee(r,r.avail_out===0?-5:m);if(d.strm=r,C=d.last_flush,d.last_flush=E,d.status===w)if(d.wrap===2)r.adler=0,q(d,31),q(d,139),q(d,8),d.gzhead?(q(d,(d.gzhead.text?1:0)+(d.gzhead.hcrc?2:0)+(d.gzhead.extra?4:0)+(d.gzhead.name?8:0)+(d.gzhead.comment?16:0)),q(d,255&d.gzhead.time),q(d,d.gzhead.time>>8&255),q(d,d.gzhead.time>>16&255),q(d,d.gzhead.time>>24&255),q(d,d.level===9?2:2<=d.strategy||d.level<2?4:0),q(d,255&d.gzhead.os),d.gzhead.extra&&d.gzhead.extra.length&&(q(d,255&d.gzhead.extra.length),q(d,d.gzhead.extra.length>>8&255)),d.gzhead.hcrc&&(r.adler=b(r.adler,d.pending_buf,d.pending,0)),d.gzindex=0,d.status=69):(q(d,0),q(d,0),q(d,0),q(d,0),q(d,0),q(d,d.level===9?2:2<=d.strategy||d.level<2?4:0),q(d,3),d.status=A);else{var I=y+(d.w_bits-8<<4)<<8;I|=(2<=d.strategy||d.level<2?0:d.level<6?1:d.level===6?2:3)<<6,d.strstart!==0&&(I|=32),I+=31-I%31,d.status=A,H(d,I),d.strstart!==0&&(H(d,r.adler>>>16),H(d,65535&r.adler)),r.adler=1}if(d.status===69)if(d.gzhead.extra){for(f=d.pending;d.gzindex<(65535&d.gzhead.extra.length)&&(d.pending!==d.pending_buf_size||(d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),L(r),f=d.pending,d.pending!==d.pending_buf_size));)q(d,255&d.gzhead.extra[d.gzindex]),d.gzindex++;d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),d.gzindex===d.gzhead.extra.length&&(d.gzindex=0,d.status=73)}else d.status=73;if(d.status===73)if(d.gzhead.name){f=d.pending;do{if(d.pending===d.pending_buf_size&&(d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),L(r),f=d.pending,d.pending===d.pending_buf_size)){x=1;break}x=d.gzindex<d.gzhead.name.length?255&d.gzhead.name.charCodeAt(d.gzindex++):0,q(d,x)}while(x!==0);d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),x===0&&(d.gzindex=0,d.status=91)}else d.status=91;if(d.status===91)if(d.gzhead.comment){f=d.pending;do{if(d.pending===d.pending_buf_size&&(d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),L(r),f=d.pending,d.pending===d.pending_buf_size)){x=1;break}x=d.gzindex<d.gzhead.comment.length?255&d.gzhead.comment.charCodeAt(d.gzindex++):0,q(d,x)}while(x!==0);d.gzhead.hcrc&&d.pending>f&&(r.adler=b(r.adler,d.pending_buf,d.pending-f,f)),x===0&&(d.status=103)}else d.status=103;if(d.status===103&&(d.gzhead.hcrc?(d.pending+2>d.pending_buf_size&&L(r),d.pending+2<=d.pending_buf_size&&(q(d,255&r.adler),q(d,r.adler>>8&255),r.adler=0,d.status=A)):d.status=A),d.pending!==0){if(L(r),r.avail_out===0)return d.last_flush=-1,c}else if(r.avail_in===0&&X(E)<=X(C)&&E!==k)return ee(r,-5);if(d.status===666&&r.avail_in!==0)return ee(r,-5);if(r.avail_in!==0||d.lookahead!==0||E!==g&&d.status!==666){var B=d.strategy===2?function(T,R){for(var W;;){if(T.lookahead===0&&(ne(T),T.lookahead===0)){if(R===g)return s;break}if(T.match_length=0,W=t._tr_tally(T,0,T.window[T.strstart]),T.lookahead--,T.strstart++,W&&(O(T,!1),T.strm.avail_out===0))return s}return T.insert=0,R===k?(O(T,!0),T.strm.avail_out===0?Z:F):T.last_lit&&(O(T,!1),T.strm.avail_out===0)?s:_}(d,E):d.strategy===3?function(T,R){for(var W,M,V,re,te=T.window;;){if(T.lookahead<=Q){if(ne(T),T.lookahead<=Q&&R===g)return s;if(T.lookahead===0)break}if(T.match_length=0,T.lookahead>=j&&0<T.strstart&&(M=te[V=T.strstart-1])===te[++V]&&M===te[++V]&&M===te[++V]){re=T.strstart+Q;do;while(M===te[++V]&&M===te[++V]&&M===te[++V]&&M===te[++V]&&M===te[++V]&&M===te[++V]&&M===te[++V]&&M===te[++V]&&V<re);T.match_length=Q-(re-V),T.match_length>T.lookahead&&(T.match_length=T.lookahead)}if(T.match_length>=j?(W=t._tr_tally(T,1,T.match_length-j),T.lookahead-=T.match_length,T.strstart+=T.match_length,T.match_length=0):(W=t._tr_tally(T,0,T.window[T.strstart]),T.lookahead--,T.strstart++),W&&(O(T,!1),T.strm.avail_out===0))return s}return T.insert=0,R===k?(O(T,!0),T.strm.avail_out===0?Z:F):T.last_lit&&(O(T,!1),T.strm.avail_out===0)?s:_}(d,E):a[d.level].func(d,E);if(B!==Z&&B!==F||(d.status=666),B===s||B===Z)return r.avail_out===0&&(d.last_flush=-1),c;if(B===_&&(E===1?t._tr_align(d):E!==5&&(t._tr_stored_block(d,0,0,!1),E===3&&(J(d.head),d.lookahead===0&&(d.strstart=0,d.block_start=0,d.insert=0))),L(r),r.avail_out===0))return d.last_flush=-1,c}return E!==k?c:d.wrap<=0?1:(d.wrap===2?(q(d,255&r.adler),q(d,r.adler>>8&255),q(d,r.adler>>16&255),q(d,r.adler>>24&255),q(d,255&r.total_in),q(d,r.total_in>>8&255),q(d,r.total_in>>16&255),q(d,r.total_in>>24&255)):(H(d,r.adler>>>16),H(d,65535&r.adler)),L(r),0<d.wrap&&(d.wrap=-d.wrap),d.pending!==0?c:1)},n.deflateEnd=function(r){var E;return r&&r.state?(E=r.state.status)!==w&&E!==69&&E!==73&&E!==91&&E!==103&&E!==A&&E!==666?ee(r,m):(r.state=null,E===A?ee(r,-3):c):m},n.deflateSetDictionary=function(r,E){var C,d,f,x,I,B,T,R,W=E.length;if(!r||!r.state||(x=(C=r.state).wrap)===2||x===1&&C.status!==w||C.lookahead)return m;for(x===1&&(r.adler=i(r.adler,E,W,0)),C.wrap=0,W>=C.w_size&&(x===0&&(J(C.head),C.strstart=0,C.block_start=0,C.insert=0),R=new l.Buf8(C.w_size),l.arraySet(R,E,W-C.w_size,C.w_size,0),E=R,W=C.w_size),I=r.avail_in,B=r.next_in,T=r.input,r.avail_in=W,r.next_in=0,r.input=E,ne(C);C.lookahead>=j;){for(d=C.strstart,f=C.lookahead-(j-1);C.ins_h=(C.ins_h<<C.hash_shift^C.window[d+j-1])&C.hash_mask,C.prev[d&C.w_mask]=C.head[C.ins_h],C.head[C.ins_h]=d,d++,--f;);C.strstart=d,C.lookahead=j-1,ne(C)}return C.strstart+=C.lookahead,C.block_start=C.strstart,C.insert=C.lookahead,C.lookahead=0,C.match_length=C.prev_length=j-1,C.match_available=0,r.next_in=B,r.input=T,r.avail_in=I,C.wrap=x,c},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,o,n){o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,o,n){o.exports=function(a,l){var t,i,b,p,g,k,c,m,u,v,h,y,P,D,z,N,S,U,j,Q,Y,w,A,s,_;t=a.state,i=a.next_in,s=a.input,b=i+(a.avail_in-5),p=a.next_out,_=a.output,g=p-(l-a.avail_out),k=p+(a.avail_out-257),c=t.dmax,m=t.wsize,u=t.whave,v=t.wnext,h=t.window,y=t.hold,P=t.bits,D=t.lencode,z=t.distcode,N=(1<<t.lenbits)-1,S=(1<<t.distbits)-1;e:do{P<15&&(y+=s[i++]<<P,P+=8,y+=s[i++]<<P,P+=8),U=D[y&N];t:for(;;){if(y>>>=j=U>>>24,P-=j,(j=U>>>16&255)===0)_[p++]=65535&U;else{if(!(16&j)){if((64&j)==0){U=D[(65535&U)+(y&(1<<j)-1)];continue t}if(32&j){t.mode=12;break e}a.msg="invalid literal/length code",t.mode=30;break e}Q=65535&U,(j&=15)&&(P<j&&(y+=s[i++]<<P,P+=8),Q+=y&(1<<j)-1,y>>>=j,P-=j),P<15&&(y+=s[i++]<<P,P+=8,y+=s[i++]<<P,P+=8),U=z[y&S];r:for(;;){if(y>>>=j=U>>>24,P-=j,!(16&(j=U>>>16&255))){if((64&j)==0){U=z[(65535&U)+(y&(1<<j)-1)];continue r}a.msg="invalid distance code",t.mode=30;break e}if(Y=65535&U,P<(j&=15)&&(y+=s[i++]<<P,(P+=8)<j&&(y+=s[i++]<<P,P+=8)),c<(Y+=y&(1<<j)-1)){a.msg="invalid distance too far back",t.mode=30;break e}if(y>>>=j,P-=j,(j=p-g)<Y){if(u<(j=Y-j)&&t.sane){a.msg="invalid distance too far back",t.mode=30;break e}if(A=h,(w=0)===v){if(w+=m-j,j<Q){for(Q-=j;_[p++]=h[w++],--j;);w=p-Y,A=_}}else if(v<j){if(w+=m+v-j,(j-=v)<Q){for(Q-=j;_[p++]=h[w++],--j;);if(w=0,v<Q){for(Q-=j=v;_[p++]=h[w++],--j;);w=p-Y,A=_}}}else if(w+=v-j,j<Q){for(Q-=j;_[p++]=h[w++],--j;);w=p-Y,A=_}for(;2<Q;)_[p++]=A[w++],_[p++]=A[w++],_[p++]=A[w++],Q-=3;Q&&(_[p++]=A[w++],1<Q&&(_[p++]=A[w++]))}else{for(w=p-Y;_[p++]=_[w++],_[p++]=_[w++],_[p++]=_[w++],2<(Q-=3););Q&&(_[p++]=_[w++],1<Q&&(_[p++]=_[w++]))}break}}break}}while(i<b&&p<k);i-=Q=P>>3,y&=(1<<(P-=Q<<3))-1,a.next_in=i,a.next_out=p,a.avail_in=i<b?b-i+5:5-(i-b),a.avail_out=p<k?k-p+257:257-(p-k),t.hold=y,t.bits=P}},{}],49:[function(e,o,n){var a=e("../utils/common"),l=e("./adler32"),t=e("./crc32"),i=e("./inffast"),b=e("./inftrees"),p=1,g=2,k=0,c=-2,m=1,u=852,v=592;function h(w){return(w>>>24&255)+(w>>>8&65280)+((65280&w)<<8)+((255&w)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function P(w){var A;return w&&w.state?(A=w.state,w.total_in=w.total_out=A.total=0,w.msg="",A.wrap&&(w.adler=1&A.wrap),A.mode=m,A.last=0,A.havedict=0,A.dmax=32768,A.head=null,A.hold=0,A.bits=0,A.lencode=A.lendyn=new a.Buf32(u),A.distcode=A.distdyn=new a.Buf32(v),A.sane=1,A.back=-1,k):c}function D(w){var A;return w&&w.state?((A=w.state).wsize=0,A.whave=0,A.wnext=0,P(w)):c}function z(w,A){var s,_;return w&&w.state?(_=w.state,A<0?(s=0,A=-A):(s=1+(A>>4),A<48&&(A&=15)),A&&(A<8||15<A)?c:(_.window!==null&&_.wbits!==A&&(_.window=null),_.wrap=s,_.wbits=A,D(w))):c}function N(w,A){var s,_;return w?(_=new y,(w.state=_).window=null,(s=z(w,A))!==k&&(w.state=null),s):c}var S,U,j=!0;function Q(w){if(j){var A;for(S=new a.Buf32(512),U=new a.Buf32(32),A=0;A<144;)w.lens[A++]=8;for(;A<256;)w.lens[A++]=9;for(;A<280;)w.lens[A++]=7;for(;A<288;)w.lens[A++]=8;for(b(p,w.lens,0,288,S,0,w.work,{bits:9}),A=0;A<32;)w.lens[A++]=5;b(g,w.lens,0,32,U,0,w.work,{bits:5}),j=!1}w.lencode=S,w.lenbits=9,w.distcode=U,w.distbits=5}function Y(w,A,s,_){var Z,F=w.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new a.Buf8(F.wsize)),_>=F.wsize?(a.arraySet(F.window,A,s-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(_<(Z=F.wsize-F.wnext)&&(Z=_),a.arraySet(F.window,A,s-_,Z,F.wnext),(_-=Z)?(a.arraySet(F.window,A,s-_,_,0),F.wnext=_,F.whave=F.wsize):(F.wnext+=Z,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=Z))),0}n.inflateReset=D,n.inflateReset2=z,n.inflateResetKeep=P,n.inflateInit=function(w){return N(w,15)},n.inflateInit2=N,n.inflate=function(w,A){var s,_,Z,F,ee,X,J,L,O,q,H,G,ne,le,K,$,se,ie,he,pe,r,E,C,d,f=0,x=new a.Buf8(4),I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!w||!w.state||!w.output||!w.input&&w.avail_in!==0)return c;(s=w.state).mode===12&&(s.mode=13),ee=w.next_out,Z=w.output,J=w.avail_out,F=w.next_in,_=w.input,X=w.avail_in,L=s.hold,O=s.bits,q=X,H=J,E=k;e:for(;;)switch(s.mode){case m:if(s.wrap===0){s.mode=13;break}for(;O<16;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(2&s.wrap&&L===35615){x[s.check=0]=255&L,x[1]=L>>>8&255,s.check=t(s.check,x,2,0),O=L=0,s.mode=2;break}if(s.flags=0,s.head&&(s.head.done=!1),!(1&s.wrap)||(((255&L)<<8)+(L>>8))%31){w.msg="incorrect header check",s.mode=30;break}if((15&L)!=8){w.msg="unknown compression method",s.mode=30;break}if(O-=4,r=8+(15&(L>>>=4)),s.wbits===0)s.wbits=r;else if(r>s.wbits){w.msg="invalid window size",s.mode=30;break}s.dmax=1<<r,w.adler=s.check=1,s.mode=512&L?10:12,O=L=0;break;case 2:for(;O<16;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(s.flags=L,(255&s.flags)!=8){w.msg="unknown compression method",s.mode=30;break}if(57344&s.flags){w.msg="unknown header flags set",s.mode=30;break}s.head&&(s.head.text=L>>8&1),512&s.flags&&(x[0]=255&L,x[1]=L>>>8&255,s.check=t(s.check,x,2,0)),O=L=0,s.mode=3;case 3:for(;O<32;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.head&&(s.head.time=L),512&s.flags&&(x[0]=255&L,x[1]=L>>>8&255,x[2]=L>>>16&255,x[3]=L>>>24&255,s.check=t(s.check,x,4,0)),O=L=0,s.mode=4;case 4:for(;O<16;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.head&&(s.head.xflags=255&L,s.head.os=L>>8),512&s.flags&&(x[0]=255&L,x[1]=L>>>8&255,s.check=t(s.check,x,2,0)),O=L=0,s.mode=5;case 5:if(1024&s.flags){for(;O<16;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.length=L,s.head&&(s.head.extra_len=L),512&s.flags&&(x[0]=255&L,x[1]=L>>>8&255,s.check=t(s.check,x,2,0)),O=L=0}else s.head&&(s.head.extra=null);s.mode=6;case 6:if(1024&s.flags&&(X<(G=s.length)&&(G=X),G&&(s.head&&(r=s.head.extra_len-s.length,s.head.extra||(s.head.extra=new Array(s.head.extra_len)),a.arraySet(s.head.extra,_,F,G,r)),512&s.flags&&(s.check=t(s.check,_,G,F)),X-=G,F+=G,s.length-=G),s.length))break e;s.length=0,s.mode=7;case 7:if(2048&s.flags){if(X===0)break e;for(G=0;r=_[F+G++],s.head&&r&&s.length<65536&&(s.head.name+=String.fromCharCode(r)),r&&G<X;);if(512&s.flags&&(s.check=t(s.check,_,G,F)),X-=G,F+=G,r)break e}else s.head&&(s.head.name=null);s.length=0,s.mode=8;case 8:if(4096&s.flags){if(X===0)break e;for(G=0;r=_[F+G++],s.head&&r&&s.length<65536&&(s.head.comment+=String.fromCharCode(r)),r&&G<X;);if(512&s.flags&&(s.check=t(s.check,_,G,F)),X-=G,F+=G,r)break e}else s.head&&(s.head.comment=null);s.mode=9;case 9:if(512&s.flags){for(;O<16;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(L!==(65535&s.check)){w.msg="header crc mismatch",s.mode=30;break}O=L=0}s.head&&(s.head.hcrc=s.flags>>9&1,s.head.done=!0),w.adler=s.check=0,s.mode=12;break;case 10:for(;O<32;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}w.adler=s.check=h(L),O=L=0,s.mode=11;case 11:if(s.havedict===0)return w.next_out=ee,w.avail_out=J,w.next_in=F,w.avail_in=X,s.hold=L,s.bits=O,2;w.adler=s.check=1,s.mode=12;case 12:if(A===5||A===6)break e;case 13:if(s.last){L>>>=7&O,O-=7&O,s.mode=27;break}for(;O<3;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}switch(s.last=1&L,O-=1,3&(L>>>=1)){case 0:s.mode=14;break;case 1:if(Q(s),s.mode=20,A!==6)break;L>>>=2,O-=2;break e;case 2:s.mode=17;break;case 3:w.msg="invalid block type",s.mode=30}L>>>=2,O-=2;break;case 14:for(L>>>=7&O,O-=7&O;O<32;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if((65535&L)!=(L>>>16^65535)){w.msg="invalid stored block lengths",s.mode=30;break}if(s.length=65535&L,O=L=0,s.mode=15,A===6)break e;case 15:s.mode=16;case 16:if(G=s.length){if(X<G&&(G=X),J<G&&(G=J),G===0)break e;a.arraySet(Z,_,F,G,ee),X-=G,F+=G,J-=G,ee+=G,s.length-=G;break}s.mode=12;break;case 17:for(;O<14;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(s.nlen=257+(31&L),L>>>=5,O-=5,s.ndist=1+(31&L),L>>>=5,O-=5,s.ncode=4+(15&L),L>>>=4,O-=4,286<s.nlen||30<s.ndist){w.msg="too many length or distance symbols",s.mode=30;break}s.have=0,s.mode=18;case 18:for(;s.have<s.ncode;){for(;O<3;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.lens[I[s.have++]]=7&L,L>>>=3,O-=3}for(;s.have<19;)s.lens[I[s.have++]]=0;if(s.lencode=s.lendyn,s.lenbits=7,C={bits:s.lenbits},E=b(0,s.lens,0,19,s.lencode,0,s.work,C),s.lenbits=C.bits,E){w.msg="invalid code lengths set",s.mode=30;break}s.have=0,s.mode=19;case 19:for(;s.have<s.nlen+s.ndist;){for(;$=(f=s.lencode[L&(1<<s.lenbits)-1])>>>16&255,se=65535&f,!((K=f>>>24)<=O);){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(se<16)L>>>=K,O-=K,s.lens[s.have++]=se;else{if(se===16){for(d=K+2;O<d;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(L>>>=K,O-=K,s.have===0){w.msg="invalid bit length repeat",s.mode=30;break}r=s.lens[s.have-1],G=3+(3&L),L>>>=2,O-=2}else if(se===17){for(d=K+3;O<d;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}O-=K,r=0,G=3+(7&(L>>>=K)),L>>>=3,O-=3}else{for(d=K+7;O<d;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}O-=K,r=0,G=11+(127&(L>>>=K)),L>>>=7,O-=7}if(s.have+G>s.nlen+s.ndist){w.msg="invalid bit length repeat",s.mode=30;break}for(;G--;)s.lens[s.have++]=r}}if(s.mode===30)break;if(s.lens[256]===0){w.msg="invalid code -- missing end-of-block",s.mode=30;break}if(s.lenbits=9,C={bits:s.lenbits},E=b(p,s.lens,0,s.nlen,s.lencode,0,s.work,C),s.lenbits=C.bits,E){w.msg="invalid literal/lengths set",s.mode=30;break}if(s.distbits=6,s.distcode=s.distdyn,C={bits:s.distbits},E=b(g,s.lens,s.nlen,s.ndist,s.distcode,0,s.work,C),s.distbits=C.bits,E){w.msg="invalid distances set",s.mode=30;break}if(s.mode=20,A===6)break e;case 20:s.mode=21;case 21:if(6<=X&&258<=J){w.next_out=ee,w.avail_out=J,w.next_in=F,w.avail_in=X,s.hold=L,s.bits=O,i(w,H),ee=w.next_out,Z=w.output,J=w.avail_out,F=w.next_in,_=w.input,X=w.avail_in,L=s.hold,O=s.bits,s.mode===12&&(s.back=-1);break}for(s.back=0;$=(f=s.lencode[L&(1<<s.lenbits)-1])>>>16&255,se=65535&f,!((K=f>>>24)<=O);){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if($&&(240&$)==0){for(ie=K,he=$,pe=se;$=(f=s.lencode[pe+((L&(1<<ie+he)-1)>>ie)])>>>16&255,se=65535&f,!(ie+(K=f>>>24)<=O);){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}L>>>=ie,O-=ie,s.back+=ie}if(L>>>=K,O-=K,s.back+=K,s.length=se,$===0){s.mode=26;break}if(32&$){s.back=-1,s.mode=12;break}if(64&$){w.msg="invalid literal/length code",s.mode=30;break}s.extra=15&$,s.mode=22;case 22:if(s.extra){for(d=s.extra;O<d;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.length+=L&(1<<s.extra)-1,L>>>=s.extra,O-=s.extra,s.back+=s.extra}s.was=s.length,s.mode=23;case 23:for(;$=(f=s.distcode[L&(1<<s.distbits)-1])>>>16&255,se=65535&f,!((K=f>>>24)<=O);){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if((240&$)==0){for(ie=K,he=$,pe=se;$=(f=s.distcode[pe+((L&(1<<ie+he)-1)>>ie)])>>>16&255,se=65535&f,!(ie+(K=f>>>24)<=O);){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}L>>>=ie,O-=ie,s.back+=ie}if(L>>>=K,O-=K,s.back+=K,64&$){w.msg="invalid distance code",s.mode=30;break}s.offset=se,s.extra=15&$,s.mode=24;case 24:if(s.extra){for(d=s.extra;O<d;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}s.offset+=L&(1<<s.extra)-1,L>>>=s.extra,O-=s.extra,s.back+=s.extra}if(s.offset>s.dmax){w.msg="invalid distance too far back",s.mode=30;break}s.mode=25;case 25:if(J===0)break e;if(G=H-J,s.offset>G){if((G=s.offset-G)>s.whave&&s.sane){w.msg="invalid distance too far back",s.mode=30;break}ne=G>s.wnext?(G-=s.wnext,s.wsize-G):s.wnext-G,G>s.length&&(G=s.length),le=s.window}else le=Z,ne=ee-s.offset,G=s.length;for(J<G&&(G=J),J-=G,s.length-=G;Z[ee++]=le[ne++],--G;);s.length===0&&(s.mode=21);break;case 26:if(J===0)break e;Z[ee++]=s.length,J--,s.mode=21;break;case 27:if(s.wrap){for(;O<32;){if(X===0)break e;X--,L|=_[F++]<<O,O+=8}if(H-=J,w.total_out+=H,s.total+=H,H&&(w.adler=s.check=s.flags?t(s.check,Z,H,ee-H):l(s.check,Z,H,ee-H)),H=J,(s.flags?L:h(L))!==s.check){w.msg="incorrect data check",s.mode=30;break}O=L=0}s.mode=28;case 28:if(s.wrap&&s.flags){for(;O<32;){if(X===0)break e;X--,L+=_[F++]<<O,O+=8}if(L!==(4294967295&s.total)){w.msg="incorrect length check",s.mode=30;break}O=L=0}s.mode=29;case 29:E=1;break e;case 30:E=-3;break e;case 31:return-4;case 32:default:return c}return w.next_out=ee,w.avail_out=J,w.next_in=F,w.avail_in=X,s.hold=L,s.bits=O,(s.wsize||H!==w.avail_out&&s.mode<30&&(s.mode<27||A!==4))&&Y(w,w.output,w.next_out,H-w.avail_out)?(s.mode=31,-4):(q-=w.avail_in,H-=w.avail_out,w.total_in+=q,w.total_out+=H,s.total+=H,s.wrap&&H&&(w.adler=s.check=s.flags?t(s.check,Z,H,w.next_out-H):l(s.check,Z,H,w.next_out-H)),w.data_type=s.bits+(s.last?64:0)+(s.mode===12?128:0)+(s.mode===20||s.mode===15?256:0),(q==0&&H===0||A===4)&&E===k&&(E=-5),E)},n.inflateEnd=function(w){if(!w||!w.state)return c;var A=w.state;return A.window&&(A.window=null),w.state=null,k},n.inflateGetHeader=function(w,A){var s;return w&&w.state?(2&(s=w.state).wrap)==0?c:((s.head=A).done=!1,k):c},n.inflateSetDictionary=function(w,A){var s,_=A.length;return w&&w.state?(s=w.state).wrap!==0&&s.mode!==11?c:s.mode===11&&l(1,A,_,0)!==s.check?-3:Y(w,A,_,_)?(s.mode=31,-4):(s.havedict=1,k):c},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,o,n){var a=e("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],t=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],i=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(p,g,k,c,m,u,v,h){var y,P,D,z,N,S,U,j,Q,Y=h.bits,w=0,A=0,s=0,_=0,Z=0,F=0,ee=0,X=0,J=0,L=0,O=null,q=0,H=new a.Buf16(16),G=new a.Buf16(16),ne=null,le=0;for(w=0;w<=15;w++)H[w]=0;for(A=0;A<c;A++)H[g[k+A]]++;for(Z=Y,_=15;1<=_&&H[_]===0;_--);if(_<Z&&(Z=_),_===0)return m[u++]=20971520,m[u++]=20971520,h.bits=1,0;for(s=1;s<_&&H[s]===0;s++);for(Z<s&&(Z=s),w=X=1;w<=15;w++)if(X<<=1,(X-=H[w])<0)return-1;if(0<X&&(p===0||_!==1))return-1;for(G[1]=0,w=1;w<15;w++)G[w+1]=G[w]+H[w];for(A=0;A<c;A++)g[k+A]!==0&&(v[G[g[k+A]]++]=A);if(S=p===0?(O=ne=v,19):p===1?(O=l,q-=257,ne=t,le-=257,256):(O=i,ne=b,-1),w=s,N=u,ee=A=L=0,D=-1,z=(J=1<<(F=Z))-1,p===1&&852<J||p===2&&592<J)return 1;for(;;){for(U=w-ee,Q=v[A]<S?(j=0,v[A]):v[A]>S?(j=ne[le+v[A]],O[q+v[A]]):(j=96,0),y=1<<w-ee,s=P=1<<F;m[N+(L>>ee)+(P-=y)]=U<<24|j<<16|Q|0,P!==0;);for(y=1<<w-1;L&y;)y>>=1;if(y!==0?(L&=y-1,L+=y):L=0,A++,--H[w]==0){if(w===_)break;w=g[k+v[A]]}if(Z<w&&(L&z)!==D){for(ee===0&&(ee=Z),N+=s,X=1<<(F=w-ee);F+ee<_&&!((X-=H[F+ee])<=0);)F++,X<<=1;if(J+=1<<F,p===1&&852<J||p===2&&592<J)return 1;m[D=L&z]=Z<<24|F<<16|N-u|0}}return L!==0&&(m[N+L]=w-ee<<24|64<<16|0),h.bits=Z,0}},{"../utils/common":41}],51:[function(e,o,n){o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,o,n){var a=e("../utils/common"),l=0,t=1;function i(f){for(var x=f.length;0<=--x;)f[x]=0}var b=0,p=29,g=256,k=g+1+p,c=30,m=19,u=2*k+1,v=15,h=16,y=7,P=256,D=16,z=17,N=18,S=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],U=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],j=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Y=new Array(2*(k+2));i(Y);var w=new Array(2*c);i(w);var A=new Array(512);i(A);var s=new Array(256);i(s);var _=new Array(p);i(_);var Z,F,ee,X=new Array(c);function J(f,x,I,B,T){this.static_tree=f,this.extra_bits=x,this.extra_base=I,this.elems=B,this.max_length=T,this.has_stree=f&&f.length}function L(f,x){this.dyn_tree=f,this.max_code=0,this.stat_desc=x}function O(f){return f<256?A[f]:A[256+(f>>>7)]}function q(f,x){f.pending_buf[f.pending++]=255&x,f.pending_buf[f.pending++]=x>>>8&255}function H(f,x,I){f.bi_valid>h-I?(f.bi_buf|=x<<f.bi_valid&65535,q(f,f.bi_buf),f.bi_buf=x>>h-f.bi_valid,f.bi_valid+=I-h):(f.bi_buf|=x<<f.bi_valid&65535,f.bi_valid+=I)}function G(f,x,I){H(f,I[2*x],I[2*x+1])}function ne(f,x){for(var I=0;I|=1&f,f>>>=1,I<<=1,0<--x;);return I>>>1}function le(f,x,I){var B,T,R=new Array(v+1),W=0;for(B=1;B<=v;B++)R[B]=W=W+I[B-1]<<1;for(T=0;T<=x;T++){var M=f[2*T+1];M!==0&&(f[2*T]=ne(R[M]++,M))}}function K(f){var x;for(x=0;x<k;x++)f.dyn_ltree[2*x]=0;for(x=0;x<c;x++)f.dyn_dtree[2*x]=0;for(x=0;x<m;x++)f.bl_tree[2*x]=0;f.dyn_ltree[2*P]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function $(f){8<f.bi_valid?q(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function se(f,x,I,B){var T=2*x,R=2*I;return f[T]<f[R]||f[T]===f[R]&&B[x]<=B[I]}function ie(f,x,I){for(var B=f.heap[I],T=I<<1;T<=f.heap_len&&(T<f.heap_len&&se(x,f.heap[T+1],f.heap[T],f.depth)&&T++,!se(x,B,f.heap[T],f.depth));)f.heap[I]=f.heap[T],I=T,T<<=1;f.heap[I]=B}function he(f,x,I){var B,T,R,W,M=0;if(f.last_lit!==0)for(;B=f.pending_buf[f.d_buf+2*M]<<8|f.pending_buf[f.d_buf+2*M+1],T=f.pending_buf[f.l_buf+M],M++,B===0?G(f,T,x):(G(f,(R=s[T])+g+1,x),(W=S[R])!==0&&H(f,T-=_[R],W),G(f,R=O(--B),I),(W=U[R])!==0&&H(f,B-=X[R],W)),M<f.last_lit;);G(f,P,x)}function pe(f,x){var I,B,T,R=x.dyn_tree,W=x.stat_desc.static_tree,M=x.stat_desc.has_stree,V=x.stat_desc.elems,re=-1;for(f.heap_len=0,f.heap_max=u,I=0;I<V;I++)R[2*I]!==0?(f.heap[++f.heap_len]=re=I,f.depth[I]=0):R[2*I+1]=0;for(;f.heap_len<2;)R[2*(T=f.heap[++f.heap_len]=re<2?++re:0)]=1,f.depth[T]=0,f.opt_len--,M&&(f.static_len-=W[2*T+1]);for(x.max_code=re,I=f.heap_len>>1;1<=I;I--)ie(f,R,I);for(T=V;I=f.heap[1],f.heap[1]=f.heap[f.heap_len--],ie(f,R,1),B=f.heap[1],f.heap[--f.heap_max]=I,f.heap[--f.heap_max]=B,R[2*T]=R[2*I]+R[2*B],f.depth[T]=(f.depth[I]>=f.depth[B]?f.depth[I]:f.depth[B])+1,R[2*I+1]=R[2*B+1]=T,f.heap[1]=T++,ie(f,R,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(te,de){var we,ve,ke,oe,_e,je,ae=de.dyn_tree,ze=de.max_code,Fe=de.stat_desc.static_tree,Ue=de.stat_desc.has_stree,Xe=de.stat_desc.extra_bits,Ie=de.stat_desc.extra_base,me=de.stat_desc.max_length,Pe=0;for(oe=0;oe<=v;oe++)te.bl_count[oe]=0;for(ae[2*te.heap[te.heap_max]+1]=0,we=te.heap_max+1;we<u;we++)me<(oe=ae[2*ae[2*(ve=te.heap[we])+1]+1]+1)&&(oe=me,Pe++),ae[2*ve+1]=oe,ze<ve||(te.bl_count[oe]++,_e=0,Ie<=ve&&(_e=Xe[ve-Ie]),je=ae[2*ve],te.opt_len+=je*(oe+_e),Ue&&(te.static_len+=je*(Fe[2*ve+1]+_e)));if(Pe!==0){do{for(oe=me-1;te.bl_count[oe]===0;)oe--;te.bl_count[oe]--,te.bl_count[oe+1]+=2,te.bl_count[me]--,Pe-=2}while(0<Pe);for(oe=me;oe!==0;oe--)for(ve=te.bl_count[oe];ve!==0;)ze<(ke=te.heap[--we])||(ae[2*ke+1]!==oe&&(te.opt_len+=(oe-ae[2*ke+1])*ae[2*ke],ae[2*ke+1]=oe),ve--)}}(f,x),le(R,re,f.bl_count)}function r(f,x,I){var B,T,R=-1,W=x[1],M=0,V=7,re=4;for(W===0&&(V=138,re=3),x[2*(I+1)+1]=65535,B=0;B<=I;B++)T=W,W=x[2*(B+1)+1],++M<V&&T===W||(M<re?f.bl_tree[2*T]+=M:T!==0?(T!==R&&f.bl_tree[2*T]++,f.bl_tree[2*D]++):M<=10?f.bl_tree[2*z]++:f.bl_tree[2*N]++,R=T,re=(M=0)===W?(V=138,3):T===W?(V=6,3):(V=7,4))}function E(f,x,I){var B,T,R=-1,W=x[1],M=0,V=7,re=4;for(W===0&&(V=138,re=3),B=0;B<=I;B++)if(T=W,W=x[2*(B+1)+1],!(++M<V&&T===W)){if(M<re)for(;G(f,T,f.bl_tree),--M!=0;);else T!==0?(T!==R&&(G(f,T,f.bl_tree),M--),G(f,D,f.bl_tree),H(f,M-3,2)):M<=10?(G(f,z,f.bl_tree),H(f,M-3,3)):(G(f,N,f.bl_tree),H(f,M-11,7));R=T,re=(M=0)===W?(V=138,3):T===W?(V=6,3):(V=7,4)}}i(X);var C=!1;function d(f,x,I,B){H(f,(b<<1)+(B?1:0),3),function(T,R,W,M){$(T),q(T,W),q(T,~W),a.arraySet(T.pending_buf,T.window,R,W,T.pending),T.pending+=W}(f,x,I)}n._tr_init=function(f){C||(function(){var x,I,B,T,R,W=new Array(v+1);for(T=B=0;T<p-1;T++)for(_[T]=B,x=0;x<1<<S[T];x++)s[B++]=T;for(s[B-1]=T,T=R=0;T<16;T++)for(X[T]=R,x=0;x<1<<U[T];x++)A[R++]=T;for(R>>=7;T<c;T++)for(X[T]=R<<7,x=0;x<1<<U[T]-7;x++)A[256+R++]=T;for(I=0;I<=v;I++)W[I]=0;for(x=0;x<=143;)Y[2*x+1]=8,x++,W[8]++;for(;x<=255;)Y[2*x+1]=9,x++,W[9]++;for(;x<=279;)Y[2*x+1]=7,x++,W[7]++;for(;x<=287;)Y[2*x+1]=8,x++,W[8]++;for(le(Y,k+1,W),x=0;x<c;x++)w[2*x+1]=5,w[2*x]=ne(x,5);Z=new J(Y,S,g+1,k,v),F=new J(w,U,0,c,v),ee=new J(new Array(0),j,0,m,y)}(),C=!0),f.l_desc=new L(f.dyn_ltree,Z),f.d_desc=new L(f.dyn_dtree,F),f.bl_desc=new L(f.bl_tree,ee),f.bi_buf=0,f.bi_valid=0,K(f)},n._tr_stored_block=d,n._tr_flush_block=function(f,x,I,B){var T,R,W=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(M){var V,re=4093624447;for(V=0;V<=31;V++,re>>>=1)if(1&re&&M.dyn_ltree[2*V]!==0)return l;if(M.dyn_ltree[18]!==0||M.dyn_ltree[20]!==0||M.dyn_ltree[26]!==0)return t;for(V=32;V<g;V++)if(M.dyn_ltree[2*V]!==0)return t;return l}(f)),pe(f,f.l_desc),pe(f,f.d_desc),W=function(M){var V;for(r(M,M.dyn_ltree,M.l_desc.max_code),r(M,M.dyn_dtree,M.d_desc.max_code),pe(M,M.bl_desc),V=m-1;3<=V&&M.bl_tree[2*Q[V]+1]===0;V--);return M.opt_len+=3*(V+1)+5+5+4,V}(f),T=f.opt_len+3+7>>>3,(R=f.static_len+3+7>>>3)<=T&&(T=R)):T=R=I+5,I+4<=T&&x!==-1?d(f,x,I,B):f.strategy===4||R===T?(H(f,2+(B?1:0),3),he(f,Y,w)):(H(f,4+(B?1:0),3),function(M,V,re,te){var de;for(H(M,V-257,5),H(M,re-1,5),H(M,te-4,4),de=0;de<te;de++)H(M,M.bl_tree[2*Q[de]+1],3);E(M,M.dyn_ltree,V-1),E(M,M.dyn_dtree,re-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,W+1),he(f,f.dyn_ltree,f.dyn_dtree)),K(f),B&&$(f)},n._tr_tally=function(f,x,I){return f.pending_buf[f.d_buf+2*f.last_lit]=x>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&x,f.pending_buf[f.l_buf+f.last_lit]=255&I,f.last_lit++,x===0?f.dyn_ltree[2*I]++:(f.matches++,x--,f.dyn_ltree[2*(s[I]+g+1)]++,f.dyn_dtree[2*O(x)]++),f.last_lit===f.lit_bufsize-1},n._tr_align=function(f){H(f,2,3),G(f,P,Y),function(x){x.bi_valid===16?(q(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,o,n){o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,o,n){(function(a){(function(l,t){if(!l.setImmediate){var i,b,p,g,k=1,c={},m=!1,u=l.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(l);v=v&&v.setTimeout?v:l,i={}.toString.call(l.process)==="[object process]"?function(D){process.nextTick(function(){y(D)})}:function(){if(l.postMessage&&!l.importScripts){var D=!0,z=l.onmessage;return l.onmessage=function(){D=!1},l.postMessage("","*"),l.onmessage=z,D}}()?(g="setImmediate$"+Math.random()+"$",l.addEventListener?l.addEventListener("message",P,!1):l.attachEvent("onmessage",P),function(D){l.postMessage(g+D,"*")}):l.MessageChannel?((p=new MessageChannel).port1.onmessage=function(D){y(D.data)},function(D){p.port2.postMessage(D)}):u&&"onreadystatechange"in u.createElement("script")?(b=u.documentElement,function(D){var z=u.createElement("script");z.onreadystatechange=function(){y(D),z.onreadystatechange=null,b.removeChild(z),z=null},b.appendChild(z)}):function(D){setTimeout(y,0,D)},v.setImmediate=function(D){typeof D!="function"&&(D=new Function(""+D));for(var z=new Array(arguments.length-1),N=0;N<z.length;N++)z[N]=arguments[N+1];var S={callback:D,args:z};return c[k]=S,i(k),k++},v.clearImmediate=h}function h(D){delete c[D]}function y(D){if(m)setTimeout(y,0,D);else{var z=c[D];if(z){m=!0;try{(function(N){var S=N.callback,U=N.args;switch(U.length){case 0:S();break;case 1:S(U[0]);break;case 2:S(U[0],U[1]);break;case 3:S(U[0],U[1],U[2]);break;default:S.apply(t,U)}})(z)}finally{h(D),m=!1}}}}function P(D){D.source===l&&typeof D.data=="string"&&D.data.indexOf(g)===0&&y(+D.data.slice(g.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)});function ct(){return Ot(Kt)}var dt=!0;dt=!1;const Or={jsonSTR:function(e){return dt?JSON.stringify(e,null,2):null}},ft=He("scratchPhaser",{state:()=>({event_phaser_loadImage:0,event_sceneUpdate:0,sceneSelected:0,sceneList:[],event_spriteUpdate:0,spriteSelected:0,spriteList:[],mainScene:null,debugUserIDList:[],debugInfoObj:{},oPhaserGameList:{},oStatusByFPS:{data:{},update:0},oOldStatusByFPS:{data:{},update:0},oServerStatusByFPS:{update:0},defaultSprite:{id:"sp0",name:"Sprite1",type:"sprite",globeSpriteVar:{__GlobalVar:!0},loadInit:{x:0,y:0,direction:90,visible:!0,depth:1,draggable:!1,physics_static:!1},spriteInitX:0,spriteInitY:0,direction:90,visible:!0,depth:1,draggable:!1,phaserJSCode:"",blocklyCode:`
 <xml>
      <block type="sprite_init" deletable="false" disable="false" x="200" y="60">
        <next>
          <block movable="false" type="physics_static">
            <value name="isStatic">
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block movable="false" type="init_goToXY" >
                <field name="value1">0</field>
                <field name="value2">0</field>
                <next>
                  <block movable="false" type="motion_pointindirection">
                    <value name="value1">
                      <shadow type="math_number">
                        <field name="NUM"> 90</field>
                      </shadow>
                    </value>
                    <next>
                      <block movable="false" type="this_visible">
                        <value name="visible">
                          <shadow type="logic_boolean">
                            <field name="BOOL">TRUE</field>
                          </shadow>
                        </value>
                        <next>
                          <block movable="false" type="looks_golayer">
                            <value name="value1">
                              <shadow type="math_number">
                                <field name="NUM"> 1</field>
                              </shadow>
                            </value>
                            <next>
                              <block movable="false" type="this_setInteractive">
                                <value name="dragMode">
                                  <shadow type="logic_boolean">
                                    <field name="BOOL">FALSE</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block movable="false" type="sprite_init_end"> </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
      <block type="control_start_after_ms" x="400" y="60">
        <value name="value1">
          <shadow type="math_number">
            <field name="NUM"> 0</field>
          </shadow>
        </value>
      </block>
    </xml>
    `,svgSelected:0,svgIdUnique:1,svgList:[{id:"svg0",name:"crab1",rotationCenterX:"39",rotationCenterY:"41",data:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77.23028" height="72.84093" viewBox="0,0,77.23028,72.84093"><defs><linearGradient x1="234.72759" y1="218.29353" x2="246.87612" y2="141.82623" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color="#ff0000"/><stop offset="1" stop-color="#750000"/></linearGradient></defs><g transform="translate(-201.38486,-143.57954)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="url(#color-1)" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M221.4776,157.24563c12.4348,-10.3597 27.0098,-14.99239 38.49576,-13.33846c5.92595,0.85333 -19.36315,29.09655 -15.79986,33.37357c3.3857,4.06388 34.49044,-6.0859 34.44158,-0.45105c-0.10221,11.79012 -6.46859,15.2986 -19.22314,25.92468c-18.85036,15.70465 -42.61899,18.24825 -53.08876,5.68138c-10.46975,-12.56691 -3.67594,-35.4855 15.17443,-51.19013z" data-paper-data="{&quot;index&quot;:null}"/></g></g></svg>',src:`data:image/svg+xml;base64,${btoa('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77.23028" height="72.84093" viewBox="0,0,77.23028,72.84093"><defs><linearGradient x1="234.72759" y1="218.29353" x2="246.87612" y2="141.82623" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color="#ff0000"/><stop offset="1" stop-color="#750000"/></linearGradient></defs><g transform="translate(-201.38486,-143.57954)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="url(#color-1)" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M221.4776,157.24563c12.4348,-10.3597 27.0098,-14.99239 38.49576,-13.33846c5.92595,0.85333 -19.36315,29.09655 -15.79986,33.37357c3.3857,4.06388 34.49044,-6.0859 34.44158,-0.45105c-0.10221,11.79012 -6.46859,15.2986 -19.22314,25.92468c-18.85036,15.70465 -42.61899,18.24825 -53.08876,5.68138c-10.46975,-12.56691 -3.67594,-35.4855 15.17443,-51.19013z" data-paper-data="{&quot;index&quot;:null}"/></g></g></svg>')}`,sizeObj:{width:78,height:73},hasReload:!0}],wavSelected:0,wavIdUnique:1,wavList:[{id:"wav0",name:"sound",duration:"1.14",src:"data:audio/wav;base64,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U9YH1HzeltyB9m4QRCE1Hm0b8x15+9XiZ9V52V/OvdHL1APSitTW1u3YCNdP1eHWmdJP0XzSbNE+2CDZJt1s3MXXYNhv08bSAdd21vbcFdx01rrVaNID09nWWte02B7Zf9Oz0uTUO9RK3ZbetNij14HcoNuw54sBR+C+5M7oHeV46IXrF9iT1XPcXdqv1PfSqdc91nnklOLd4G7iyfdAE9vb8tMk267hvdtX1ujuXvMR38LiHeYS4zXVsdIl3jrgVt6f3E/hvOIZ16nYFtrM2GrqAfc+2UzdnNn23AHgx+JE4Pvd5tsD2irfm90v3Hrd9tkG29HhsuJ724TapNnY2Mbjlev02+DZxNsO2rzeKOBK3B/b/ejh6vzXetXn4NTeKtl012Di9OCC2q7bR+WR5gTccN263ubfcdhp2ZDfXeBd2E7XBuDb3ojZkdg02wDcutwS3BHZh9j83+3eF9r42iza5trR5DzmOt0P3B7dFt644IThbtzG28bYPNiz3fvc7eIi4gzdtd2C2Q3ahN894IvjJOQm3lvdutkS2d7aadvn3Fndwt1j3RvhnOBd3sbeK9yB3DPc7dsp2mPab9ug22HZsNmj2+Pb0dmK2dfcZdws283az9uB263abto02gDaedwk3HPcLNzt3CfdSuDY33Dfz9/O3oDec+A04MLcQ9yC3uvex+Bx4Iffzt8G3WXdEN1f3XDgCODk4Y7ha98k3+XerN4h4FLgvN2g3PreSN/l3SXeX94r3n7fVN/63PrbvN4b3xvead4j3mPeP91z3Wbekd6I3EHci98a37LeVN7+3bHdFN/V3sXcDN1T36LfP94A3sbd+90R4Mvfi+DF4FHfgt8A3yffc96T3u3eB98X4DvgHOD+307gN+Dm3rbe4t4J33XfVt853x/fB9/x3t3e8N4B3xDfVd9L3/jf4N8j4A/g/d/s38Dfs99e32rfJN8b30TfPd+J35Pf6d/031rfRd+r35nfiN9634ffk9/N38Tfg9+L3+Hf1t+k367fG+AN4K3fuN834Ejgv9/S30fgVuD23+vfU+BH4Ljgx+C74LDgu+Cz4LzgteC94LjgveDD4MDgxODI4MXgyeDL4NPg0eDX4Nng3+De4ODg4uDo4Ojg8ODy4Pjg+OD+4P/gBOEF4Q3hDeEV4RfhH+Ef4SXhJeEt4S/hN+E54T/hP+FH4Unh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tN/F49UTYRqy8Bz2gt374cvVfdkh1hTT2tVV0zbaIdic4eTfY/fmDioeZBveGCgb5fuO5WDZEd0A0w3W09hO1pjYrdqT3NraS9m32tbWqtW81sXV9NvB3Gfgvt+G2xPcmNf/1tXaV9o84HDfVdqt2arWNtex2ibbYNzA3KfX7tbr2FLYieC14WDcadvS3wbf9elmAT7jS+f56qDnrOpv7dLbitnF3+LdvNgt12/bJNoM51XlxuMy5Y74cxE93xHYl96E5CHfPNqB8Iz0JuJ/5Ynox+U22e/WUOE0433h798v5Hnl7dpY3KPdeNxw7Nn339yM4DXdPuAA44TlPeMq4Ujfkt094tTgit+24Ibdfd6l5HHl594I3jzdg9xr5n/tVd9z3SnfnN3a4STjpN+U3ibr3Oy923fZ0uPw4c7cQdsn5d7jBt4X38jn8+hk367g2eHp4ijcCN2c4lXjFdwf2wbj9+Ek3UXcqN5h3wrgcd+53Dzc/uII4qbdct653WLeX+eo6H7gb99l4EXhqONh5MbfLt923Pnb7OBF4Knl8ORV4O7gId2e3ZLiOuM45sPmVeGc4FPdu9xc3treNOCb4PrgpeAD5JDjh+Hm4Yrf2N+S31Lfud3t3eDeDN8D3UvdD99J32ndKd0m4L/fo95N3jff8d4w3vfdw92U3dLfhN/M34zfOuBv4Ebj3+KB4tji7+Go4WzjM+MU4KHfquEJ4rjja+OW4tfiUuCo4FvgouBq4wvjuuRt5H3iPeIE4tDhIuNO4/jg9t8X4l7iHOFW4YvhXOGP4mniSOBg3+DhNuJO4ZXhVeGP4YbgtuCS4bnh4d+h35ziNeLX4YHhNOHu4DDi9+EZ4FngaeKw4m/hNuEC4TLhFePW4oTjuONo4pTiHuJC4p/hvOEN4iXiG+M84x/jBeNN4zjjCOLc4QPiJ+KJ4m3iUuI74iXiEeL/4RDiIOIu4mziY+L/4uriJ+MV4wTj9eLN4sLideJ/4kDiOOJd4lfinOKl4vLi/eJy4l7iu+Kq4pvijuKa4qXi2eLR4pfinuLr4uLiteK94iHjFOO94sfiOuNJ483i3uJJ41bj/+L24lTjSeOv473jsuOo47LjquOz463jtOOv47TjuuO347rjvuO747/jwePI48bjzOPO49Pj0uPU49bj2+Pc4+Pj5ePq4+rj8OPw4/Xj9uP94/3j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xONs3kjjsufpG8wUQxtiFUblvesc2nTfmdoD3wbjq+bMEasXRfIg9w7hEeUh2nLdb9qz1zDa7NcY3jrcvOQx40b4Xg0PG5MYTxZdGFH8Ruha3angotde2tvcmNqm3ITeOOCt3kfdjt4T2wba+9oe2qrfYuCo4xHjSN/G38LbONup3jjegePK4jben93s2mrbid7y3gzgYuDQ2yrb8txp3Mfj1OQM4C7fI+Ns4jvsQQE15tfpJO0k6t/sWe+N34LdGONn4cncY9s03wzen+kV6LDm9udT+aYPnuIw3AniWueG4iLeG/K79TvlO+j16nzoN90s23vkLeak5D/jDuc36MLeB+Av4SPgde6w+IDgzOPN4IbjAOZA6DbmWuSq4iHhUeUM5OXi8uMX4fTheecw6FTii+HU4C/gEOlp77biBuGP4ivh+eQg5v3iCeJO7dfufd903b3mDeVz4A/f7ufH5ovhf+JK6lbrxOLs4/jk7OXe36fgp+VN5s3f8d4H5hTlweD53xziwuJZ49HiYODw3//lI+U14ezhR+He4ezpE+vC48/irON15JjmPucd45XiJeC13ybkkONk6L/nnuMn5L/gL+Gf5Tbm5ehh6YPk3uPs4GTg2uFL4oHj3uMz5Obj6uaE5rHkBuXp4i/j8OK34kjhd+FR4njipuDm4Hvir+IB4cjgdeMZ4xvizuGf4mDitOGB4VLhKOEq4+XiJePs4ojjt+ND5uflkuXg5Q/l0ORl5jLmZuP/4tLkJ+Wp5mTmpuXg5Z7j6+Om4+bjY+YP5pHnTOeP5VblI+X15CTmS+Yz5EzjNOV05VTkiOS35I3koOV+5ZbjxuID5VHlgOTA5Ifku+TO4/njveTh5DrjAeOs5VDl/OSv5GrkK+RM5RnlbeOm43/lv+Wf5GzkPuRo5Brm4eV85qzmfuWm5TzlXOXL5OXkLeVD5R/mPOYj5gvmTOY55inlAuUl5UXlneWD5WvlV+VD5TLlIuUx5T/lS+WD5XvlB+b05SrmGuYM5v7l2+XQ5YvlleVc5VXlduVx5a/ltuX85QXmieV35crlvOWu5aPlruW35ebl3+Wq5bHl9uXu5cXlzeUm5hvmzeXW5T3mS+bc5evlSuZW5gnmAOZU5krmpuaz5qjmoOap5qLmquak5qvmpuar5rDmreax5rTmsea15rfmvea85sHmwubH5sbm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"}]},defaultCanvas:{id:"sp0",name:"Canvas1",type:"RT",globeSpriteVar:{__GlobalVar:!0},loadInit:{x:0,y:0,direction:90,visible:!0,depth:0,draggable:!1,width:300,height:300,color:"#ff00"},spriteInitX:0,spriteInitY:0,direction:90,visible:!0,depth:0,draggable:!1,phaserJSCode:"",blocklyCode:`
 <xml>
      <block type="sprite_init" deletable="false" disable="false" x="200" y="60">
        <next>
          <block movable="false" type="physics_static">
            <value name="isStatic">
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block movable="false" type="init_goToXY" >
                <field name="value1">0</field>
                <field name="value2">0</field>
                <next>
                  <block movable="false" type="motion_pointindirection">
                    <value name="value1">
                      <shadow type="math_number">
                        <field name="NUM"> 90</field>
                      </shadow>
                    </value>
                    <next>
                      <block movable="false" type="this_visible">
                        <value name="visible">
                          <shadow type="logic_boolean">
                            <field name="BOOL">TRUE</field>
                          </shadow>
                        </value>
                        <next>
                          <block movable="false" type="looks_golayer">
                            <value name="value1">
                              <shadow type="math_number">
                                <field name="NUM"> 0</field>
                              </shadow>
                            </value>
                            <next>
                              <block movable="false" type="this_setInteractive">
                                <value name="dragMode">
                                  <shadow type="logic_boolean">
                                    <field name="BOOL">FALSE</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="renderTexture_resize">
                                    <value name="value1">
                                      <shadow type="math_number">
                                        <field name="NUM">0</field>
                                      </shadow>
                                      <block type="math_number">
                                        <field name="NUM">300</field>
                                      </block>
                                    </value>
                                    <value name="value2">
                                      <shadow type="math_number">
                                        <field name="NUM">0</field>
                                      </shadow>
                                      <block type="math_number">
                                        <field name="NUM">300</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="renderTexture_fill">
                                        <value name="theColor">
                                          <shadow type="colour_picker">
                                            <field name="COLOUR">#00ff00</field>
                                          </shadow>
                                          <block type="colour_picker">
                                            <field name="COLOUR">#99ff99</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block movable="false" type="sprite_init_end"> </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
      <block type="control_start_after_ms" x="400" y="60">
        <value name="value1">
          <shadow type="math_number">
            <field name="NUM"> 0</field>
          </shadow>
        </value>
      </block>
    </xml>
    `,svgSelected:0,svgIdUnique:1,svgList:[{id:"svg0",name:"crab1",rotationCenterX:"50.125",rotationCenterY:"49.75000000000051",data:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="99.5" viewBox="0,0,100,99.5"><defs><linearGradient x1="512" y1="337.75" x2="512" y2="238.25" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color="#27ff56"/><stop offset="1" stop-color="#0090ff"/></linearGradient></defs><g transform="translate(-461.875,-238.25)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill-rule="nonzero" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M561.75,337.75l-99.5,0l0,-99.5l99.5,0z" fill="url(#color-1)" stroke="none" stroke-width="0" stroke-linecap="butt"/><path d="M462.375,313.75c0,0 8.97982,-23.26915 16.77759,-23.91897c6.69647,-0.55804 16.4968,19.47112 31.11858,22.45201c8.37546,1.70748 15.51516,-36.76351 23.71946,-38.03968c14.06715,-2.18812 27.38437,31.25664 27.38437,31.25664" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round"/></g></g></svg>',src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iOTkuNSIgdmlld0JveD0iMCwwLDEwMCw5OS41Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUxMiIgeTE9IjMzNy43NSIgeDI9IjUxMiIgeTI9IjIzOC4yNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyN2ZmNTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDkwZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDYxLjg3NSwtMjM4LjI1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik01NjEuNzUsMzM3Ljc1bC05OS41LDBsMCwtOTkuNWw5OS41LDB6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNNDYyLjM3NSwzMTMuNzVjMCwwIDguOTc5ODIsLTIzLjI2OTE1IDE2Ljc3NzU5LC0yMy45MTg5N2M2LjY5NjQ3LC0wLjU1ODA0IDE2LjQ5NjgsMTkuNDcxMTIgMzEuMTE4NTgsMjIuNDUyMDFjOC4zNzU0NiwxLjcwNzQ4IDE1LjUxNTE2LC0zNi43NjM1MSAyMy43MTk0NiwtMzguMDM5NjhjMTQuMDY3MTUsLTIuMTg4MTIgMjcuMzg0MzcsMzEuMjU2NjQgMjcuMzg0MzcsMzEuMjU2NjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==",sizeObj:{width:101,height:100},hasReload:!0}],wavSelected:0,wavIdUnique:1,wavList:[]},config:{physics:{isDebug:!1}},phaserGame:null,dev_multiTouchID:1}),getters:{},actions:{async do_loadTextureToSprite(e,o,n,a){n.loadInit==null&&(n.loadInit={x:0,y:0,direction:90,visible:!0,depth:1,draggable:!1,physics_static:!1}),await e.loadTextureToSprite(o.id,n.id,a.id,n.loadInit.x,parseInt(a.rotationCenterX*100/a.sizeObj.width)/100,-n.loadInit.y,parseInt(a.rotationCenterY*100/a.sizeObj.height)/100,a.src),e.point_direction(o.id,n.id,n.loadInit.direction),e.this_visible(o.id,n.id,n.loadInit.visible),e.looks_golayer(o.id,n.id,n.loadInit.depth),e.this_setInteractive(o.id,n.id,{draggable:n.loadInit.draggable}),e.physics_static(o.id,n.id,n.loadInit.physics_static)},async do_initRenderTexture(e,o,n){n.loadInit==null&&(n.loadInit={x:0,y:0,direction:90,visible:!0,depth:0,draggable:!1,width:300,height:300,color:"#ff00"}),await e.initRenderTexture(o.id,n.id,n.loadInit.x,-n.loadInit.y),e.point_direction(o.id,n.id,n.loadInit.direction),e.this_visible(o.id,n.id,n.loadInit.visible),e.looks_golayer(o.id,n.id,n.loadInit.depth),e.this_setInteractive(o.id,n.id,{draggable:n.loadInit.draggable}),e.renderTexture_resize(o.id,n.id,{width:n.loadInit.width,height:n.loadInit.height}),e.renderTexture_fill(o.id,n.id,{color:n.loadInit.color})},async theSceneUpdateSvgNameList(e){const o=this.mainScene;if(o)for(let n of e.spriteList){let a=[];for(let l=0;l<n.svgList.length;l++){let t=n.svgList[l];if(a.push(e.id+n.id+t.id),l==n.svgSelected){let i=n.svgList[n.svgSelected];switch(n.type){case"RT":this.do_initRenderTexture(o,e,n,i);break;default:this.do_loadTextureToSprite(o,e,n,i);break}}else await o.loadTexture(e.id,n.id,t.id,parseInt(t.rotationCenterX*100/t.sizeObj.width)/100,parseInt(t.rotationCenterY*100/t.sizeObj.height)/100,t.src)}for(let l=0;l<n.wavList.length;l++){let t=n.wavList[l];await o.loadWav(e.id+n.id+t.id,t.src)}o.updateSvgNameList(e.id,n.id,a)}},registerGame(e){this.oPhaserGameList[e.id]==null&&(this.oPhaserGameList[e.id]=e)},unRegisterGame(e){delete this.oPhaserGameList[e]},debugUpdate(e){if(e.userID!=null){this.debugInfoObj[e.userID]==null&&(this.debugInfoObj[e.userID]={},this.debugUserIDList.push(e.userID));let o=this.debugInfoObj[e.userID];for(const n in e)o[n]=e[n];o.updateTime=new Date().toLocaleString()}}}}),St=He("scratchJS",{state:()=>({event_mainLeftSelect:1,event_projectUpdate:0,spriteSelectedName:"",spriteSelectedX:0,spriteSelectedY:0,spriteSelectedDepth:0,spriteSelecteddirection:90,projectObj:{}}),getters:{},actions:{updateProject(e){this.projectObj=e,this.event_projectUpdate++},updateProjectDataFromPhaser(e){if(this.projectObj.sceneList!=null)for(let o of this.projectObj.sceneList)for(let n in o.spriteList){let a=o.spriteList[n],l=e[o.id][a.id];if(l!=null){a.spriteInitX=l.x,a.spriteInitY=l.y,a.depth=l.depth,a.direction=l.angle,n==o.spriteSelected&&(this.spriteSelectedName=a.name,this.spriteSelectedX=a.spriteInitX,this.spriteSelectedY=a.spriteInitY,this.spriteSelectedDepth=a.depth,this.spriteSelectedDirection=a.direction);let t=a.svgList;for(let i in a.svgList)if(t[i].id==l.svgId){a.svgSelected=i;break}}}}}}),Et=He("webWorkerStore",{state:()=>({bLoopMode:!0,bLoopMode_phServerChangeTime:{},jCallbackByGameIDorRoomID:{},hChatTextWorker:null,hUserWorker:null,hPhaserWorker:null,scratchPhaserPinia:ft()}),getters:{},actions:{init(){let e=this;this.hChatTextWorker==null&&(this.hChatTextWorker=new Worker(new URL("/scratchjsplayer/assets/sourceChatWroker-DXfsirbm.js",import.meta.url)),this.hChatTextWorker.onmessage=o=>{let n=o.data;switch(n.cmd){case"chat_2S_w2s":e.websocketPinia.wsSend(n.cmd,n.data);break}}),this.hUserWorker==null&&(this.hUserWorker=new Worker(new URL("/scratchjsplayer/assets/sourceUserWroker-DSK3V1jH.js",import.meta.url)),this.hUserWorker.onmessage=o=>{let n=o.data;switch(n.cmd){case"user_2S_w2s":this.websocketPinia.wsSend(n.cmd,n.data);break}}),this.hPhaserWorker==null&&(this.hPhaserWorker=new Worker(new URL("/scratchjsplayer/assets/sourcePhaserWroker-Ca1h_B2n.js",import.meta.url)),this.hPhaserWorker.onmessage=o=>{let n=o.data,a;switch(n.cmd){case"phaser_status_2C_w2s":this.bLoopMode?this.socket2worker_All_gameID(n.data,"phaser_status_2C_s2w"):this.websocketPinia.wsSend("pGByPass",{subCmd:"phaser_status_2C_s2w",data:n.data});break;case"phaser_2S_REQ_w2s":if(this.bLoopMode){let l=new Date().getTime();if(this.bLoopMode_phServerChangeTime[n.data.gameIDorRoomID]==null&&(this.bLoopMode_phServerChangeTime[n.data.gameIDorRoomID]=0),l-this.bLoopMode_phServerChangeTime[n.data.gameIDorRoomID]>5e3){this.bLoopMode_phServerChangeTime[n.data.gameIDorRoomID]=l;let t=[];for(let i=0;i<5;i++)t.push({userName:"local",level:5-i,score:(5-i)*100,startGameTime:0});n.data.update={subCmd:"beServerAsk",bBeServer:!0,serverTop5:t},this.socket2worker_PIDRID(n.data,"phaser_2S_RES_s2w")}}else this.websocketPinia.wsSend("phaserGame",n.data);break;case"phaser_allStatus_REQ_w2s":this.bLoopMode?this.socket2worker_All_gameID(n.data,"phaser_allStatus_REQ_s2w"):this.websocketPinia.wsSend("pGByPass",{subCmd:"phaser_allStatus_REQ_s2w",data:n.data});break;case"phaser_2PS_w2s":this.bLoopMode?this.sourcePhaserToWorkerAndReceive("phaser_2PS_s2w",n.data):this.websocketPinia.wsSend("pGByPass",{subCmd:"phaser_2PS_s2w",data:n.data});break;case"phaser_BroadCast_w2s":if(this.bLoopMode)for(let l in this.scratchPhaserPinia.oPhaserGameList)n.data.sPhaserID=l,this.sourcePhaserToWorkerAndReceive("phaser_BroadCast_s2w",n.data);else this.websocketPinia.wsSend("pGByPass",{subCmd:"phaser_BroadCast_s2w",data:n.data});break;case"phaser_Guest_w2s":if(this.bLoopMode)for(let l in this.scratchPhaserPinia.oPhaserGameList)n.data.sPhaserID=l,this.sourcePhaserToWorkerAndReceive("phaser_Guest_s2w",n.data);else console.warn("phaser_Guest_s2w:",n.data),this.websocketPinia.wsSend("pGGuest",{subCmd:"phaser_Guest_s2w",data:n.data});break;case"phaser_allStatus_RES_w2s":this.bLoopMode?this.socket2worker_All_gameID(n.data,"phaser_allStatus_RES_s2w"):this.websocketPinia.wsSend("pGByPass",{subCmd:"phaser_allStatus_RES_s2w",data:n.data});break;case"phaser_2S_RES_w2p":case"phaser_status_2C_w2p":case"phaser_allStatus_RES_w2p":case"phaser_BroadCast_w2p":if(this.bLoopMode){let l=this.jCallbackByGameIDorRoomID[n.data.sPhaserID];l!=null&&(a=l[n.data.gameIDorRoomID],a?.(n.cmd,n.data.update))}else this.worker2phaser_All_gameID(n);break;case"phaser_debug_w2p":this.scratchPhaserPinia.debugUpdate(n.data.update);break;case"phaser_debug_w2s":this.bLoopMode?this.scratchPhaserPinia.debugUpdate(n.data.update):this.websocketPinia.wsSend("phaserDebug",{subCmd:"phaser_debug_s2w",data:n.data});break;case"phaser_2PS_w2p":this.worker2phaser_All_gameID(n);break}})},socket2worker_PIDRID(e,o){for(let n in this.scratchPhaserPinia.oPhaserGameList){let a=this.scratchPhaserPinia.oPhaserGameList[n].init;if(e.gameIDorRoomID==a.gameIDorRoomID){this.sourcePhaserToWorkerAndReceive(o,e);break}}},socket2worker_All_gameID(e,o){for(let n in this.scratchPhaserPinia.oPhaserGameList){let a=this.scratchPhaserPinia.oPhaserGameList[n].init;e.gameIDorRoomID==a.gameIDorRoomID&&(e.sPhaserID=n,this.sourcePhaserToWorkerAndReceive(o,e))}},sourceChatToWorkerAndSend(e,o){this.hChatTextWorker.postMessage({cmd:e,data:o})},sourceChatToWorkerAndReceive(e,o){this.hChatTextWorker.postMessage({cmd:e,data:o})},sourcePhaserToWorkerAndSend(e,o){this.hPhaserWorker.postMessage({cmd:e,data:o})},sourcePhaserToWorkerAndReceive(e,o){this.hPhaserWorker.postMessage({cmd:e,data:o})},registerPhaserCBByGameIDorRoomID(e,o,n){n==null||n==null?this.jCallbackByGameIDorRoomID[e]!=null&&this.jCallbackByGameIDorRoomID[e][o]!=null&&(delete this.jCallbackByGameIDorRoomID[e][o],this.hPhaserWorker.postMessage({cmd:"destroy_vue2worker",data:{gameIDorRoomID:o,sPhaserID:e}})):(this.jCallbackByGameIDorRoomID[e]==null&&(this.jCallbackByGameIDorRoomID[e]={}),this.hPhaserWorker.postMessage({cmd:"init_vue2worker",data:{gameIDorRoomID:o,sPhaserID:e}}),this.jCallbackByGameIDorRoomID[e][o]=n),console.warn("registerPhaserCBByGameIDorRoomID:",e)},worker2phaser_All_gameID(e){for(let o in this.jCallbackByGameIDorRoomID)if(this.jCallbackByGameIDorRoomID[o]!=null){let n=this.jCallbackByGameIDorRoomID[o][e.data.gameIDorRoomID];n?.(e.cmd,e.data.update)}}}});var ue=null;let st=!1,rt=0,fe={eLinePerTime:15+rt,motion:{},exit:!1};async function nt(e){return new Promise(o=>setTimeout(o,e))}async function Dr(){for(;ue.isGamePause&&(await nt(10),!fe.exit););if(!(fe.eLinePerTime>0))for(;fe.eLinePerTime<1&&(await nt(10),!fe.exit););}function Ar(){st=!0,fe.eLinePerTime=1500+rt,fe.motion={up:1,down:1,throw:1},fe.exit=!1}async function Lr(){if(ue.gameConfigPhaser!=null)for(;ue.isGamePause&&(await nt(10),!fe.exit););}function Tt(e){return e<10&&(e="0"+e),e}function at(e){for(typeof e=="object"&&(e=`
`+JSON.stringify(e,null,2)),ue.debugLogArray.push(Tt(new Date().getMinutes())+":"+Tt(new Date().getSeconds())+">"+e);ue.debugLogArray.length>500;)ue.debugLogArray=ue.debugLogArray.slice(50)}async function Cr(){for(at("@Pause"),ue.pausePGame();ue.isGamePause&&(await nt(10),!fe.exit););}async function jr(){at("@Resume"),ue.resumePGame()}function Bt(e){ue.webWorkerPinia.sourcePhaserToWorkerAndSend(e.cmd,{update:e.update,gameIDorRoomID:ue.playerWindow.init.gameIDorRoomID,sPhaserID:ue.playerWindow.init.sPhaserID})}function Ir(e,o,n){fe.eLinePerTime--,Bt({cmd:"phaser_2PS_p2w",update:{subCmd:"blocklyAction",target:e,userID:ue.playerWindow.init.userID,blocklyCmd:o,blocklyData:n}})}function Sr(e){switch(e.fn){case"blocklyAction":Ir(e.target,e.cmd,e.data);break;case"blocklyToPhaser":fe.eLinePerTime--;const o=ue.scratchPhaserPinia.mainScene;if(o)switch(e.cmd){case"copySprite":return o.copySprite(e.target.sceneId,e.target.spriteId);case"sensing_overlap_group":return o.sensing_overlap_group(e.data.groupA_ID,e.data.groupB_ID);case"sensing_collider_group":return o.sensing_collider_group(e.data.groupA_ID,e.data.groupB_ID);case"looks_nextcostume":o.looks_nextcostume(e.target.sceneId,e.target.spriteId);break;case"event_deleteSprite":window.messager.toClientMessage(e.target.sceneId+e.target.spriteId,{cmd:"event_deleteSprite"});break;case"event_create_clone_of":window.messager.toClientMessage(e.target.sceneId+e.target.spriteId,{cmd:"event_create_clone_of"});break;case"broadcastEvent":window.messager.toClientAllMessage({cmd:"broadcastEvent",value:e.data,key:""});break;case"sound_start":o.sound_start(e.data);break;case"sound_stop":o.sound_stop(e.data);break;case"sound_volume":o.sound_volume(e.data.soundId,e.data.volume);break;case"sound_stopSprite":o.sound_stopSprite();break;case"physics_gravity":o.physics_gravity(e.data);break;case"motion_x_position":case"motion_y_position":case"motion_direction":case"deleteSprite":return o[e.cmd](e.target.sceneId,e.target.spriteId);default:return o[e.cmd](e.target.sceneId,e.target.spriteId,e.data)}break;default:e.cmd=="debugLog"&&at(e.value)}}function Er(e){for(let o in e.data)if(o.indexOf("__")==0)ue.syncVarJson[o]=e.data[o];else{let n=ue.syncVarSpriteName[e.spriteMessageID];if(n==null){let a=e.spriteMessageID.split("_");n=ue.syncVarSpriteName[a[0]]+"_"+a[2]}ue.syncVarJson[n]==null&&(ue.syncVarJson[n]={}),ue.syncVarJson[n][o]=e.data[o]}}async function Br(e){return new Promise(async o=>{switch(e.cmd){case"bRCheck":o(await Dr());break;case"pGamePause":o(await Cr());break;case"syncVars":Er(e),o();break;case"pGameResume":o(await jr());break;case"endOfWhilePauseCheck":o(await Lr());break;default:o("Error!");break}})}class Nr{constructor(){this.state="init",this.message="",this.clientOBJ={},this.serverCallback=null,this.serverCallbackAsync=null}setServerCallback(o){this.serverCallback=o}setServerCallbackAsync(o){this.serverCallbackAsync=o}async toServerMessageAsync(o){return new Promise(async n=>{this.serverCallbackAsync!=null?n(await this.serverCallbackAsync(o)):n("error!")})}toServerMessage(o){return this.serverCallback!=null?this.serverCallback(o):"error!"}toClientAllMessage(o){for(let n in window.messager.clientOBJ)window.messager.clientOBJ[n].toClientMessage(o)}toClientMessage(o,n){window.messager.clientOBJ[o]!=null&&window.messager.clientOBJ[o].toClientMessage(n)}}window.messager=new Nr;window.messager.setServerCallback(Sr);window.messager.setServerCallbackAsync(Br);const Rr=He("scratchBlockly",{state:()=>({$q:ct(),$t:Dt().t,workspaceId:null,webWorkerPinia:Et(),scratchPhaserPinia:ft(),scratchJSPinia:St(),blockIDClicked:null,blocklyFlyout:{drag:1,move:1},viewportChange:{},isFlyoutShow:0,isOldItemOnly:!0,isBlocklyInit:!1,runJSCode:"",prepareUpdateBlocks:!0,debugLogArray:[],isGamePause:!1,jsChangeCount:0,jsLinesCount:0,fromBlocklyCB:null,gameConfigPhaser:null,fuctionTimerH:null,playerWindow:{name:"snowmenAttack",showup:!0,init:{position:"absolute",maximizedMode:1,top:50,left:500,width:640,height:480,sPhaserID:"pBase"+Math.random().toFixed(8).slice(2),gameIDorRoomID:"guestRoom",bAskForJoinedRoom:!0,userID:"guestID",userName:"Guest",zIndex:"10",targetMirror:0,targetPhaserName:"guestPName",bPlayerUserIDJoin:!0,phaser:{width:1280,height:720}},moveWindowAble:!0,windowReStyle:0,watchKeyboard:!0},clickToDblClickCount:0,clickToDblClickTimer:null,ableSetReceiveEventList:!0,globeSpriteVar:{},toolboxData:"",whenIReceiveEvent_i18n:"when I receive %1",syncVarJson:{},syncVarSpriteName:{}}),getters:{},actions:{updateSyncVarSpriteName(){for(let e of this.scratchJSPinia.projectObj.sceneList)for(let o of e.spriteList)this.syncVarSpriteName[e.id+o.id]=o.name},pausePGame(){this.isGamePause=!0;const e=ue.scratchPhaserPinia.mainScene;e.scene.pause(),e.physics.world.isPaused=!0,e.tweens.pauseAll(),e.time.paused=!0,e.input.enabled=!1,e.sound.pauseAll(),e.anims.pauseAll(),at("Pause Game")},blockly_of_projectObj_to_workspace(){if(this.scratchJSPinia.projectObj.sceneSelected!=null){let e=Blockly.Workspace.getById(this.workspaceId);if(e!=null)try{let o=this.scratchJSPinia.projectObj.sceneList[this.scratchJSPinia.projectObj.sceneSelected],n=Blockly.utils.xml.textToDom(o.spriteList[o.spriteSelected].blocklyCode);e.clear(),Blockly.Xml.domToWorkspace(n,e),e.clearUndo();const a=this.scratchJSPinia.projectObj.globeVarList,l=e.getVariableMap().getVariablesOfType("");a.forEach(t=>{l.some(i=>i.name===t)||e.getVariableMap().createVariable(t)})}catch{}}},update_loadInit_of_sprite(e,o){javascriptGenerator.init(e);var n=this.find_rootBlock(e,"sprite_init"),a=javascriptGenerator.blockToCode(n);o.loadInit==null&&(o.type=="RT"?o.loadInit={x:0,y:0,direction:90,visible:!0,depth:0,width:300,height:300,color:"#ff00"}:o.loadInit={x:0,y:0,direction:90,visible:!0,depth:0,draggable:!1,physics_static:!1});try{let l=JSON.parse(a.split("motion_goToXY',")[1].split(")")[0]);o.loadInit.x=l.x,o.loadInit.y=0-l.y}catch{}try{let l=parseInt(a.split("point_direction',")[1].split(")")[0]);o.loadInit.direction=l}catch{}try{let l=a.split("this_visible',")[1].split(")")[0]=="true";o.loadInit.visible=l}catch{}try{let l=parseInt(a.split("looks_golayer',")[1].split(")")[0]);o.loadInit.depth=l}catch{}if(o.type=="RT")try{let l=JSON.parse(a.split("renderTexture_resize',")[1].split(")")[0]);o.loadInit.width=l.width,o.loadInit.height=l.height;let t=JSON.parse(a.split("renderTexture_fill',")[1].split(")")[0].split("'").join('"'));o.loadInit.color=t.color}catch{}else{try{let l=JSON.parse(a.split("this_setInteractive',")[1].split(")")[0]).draggable;o.loadInit.draggable=l}catch{}try{let l=a.split("physics_static',")[1].split(")")[0]=="true";o.loadInit.physics_static=l}catch{}}},workspace_to_blockly_of_projectObj(e){if(this.scratchJSPinia.projectObj.sceneSelected!=null){let a=this.scratchJSPinia.projectObj.sceneList[this.scratchJSPinia.projectObj.sceneSelected];a.spriteList[a.spriteSelected].phaserJSCode=this.getSpriteJScodeFromBlockly(),a.spriteList[a.spriteSelected].globeSpriteVar=this.globeSpriteVar;let l=Blockly.Workspace.getById(this.workspaceId);if(l!=null){this.update_loadInit_of_sprite(l,a.spriteList[a.spriteSelected]);var o=Blockly.Xml.workspaceToDom(l),n=Blockly.Xml.domToText(o);a.spriteList[a.spriteSelected].blocklyCode=n,e&&(l.clear(),l.clearUndo());let t={},i=this.scratchJSPinia.projectObj;for(let b of i.sceneList)for(let p of b.spriteList)for(let g in p.globeSpriteVar)t[g]=!0;i.globeVarList=Object.keys(t),i.globeVarList.length==0&&(i.globeVarList=["__GlobeVar"])}}},gameNameInit(){this.isBlocklyInit||(ue=this,this.isBlocklyInit=!0)},getMainWorkspace(e){return Blockly.Workspace.getById(e)},toolboxItemIsLabel(e){const o=e.getElement();return!!(e.getType()==="label"&&o instanceof Blockly.FlyoutButton&&o.isLabel())},menuFlyoutAutoClose(e,o,n){let a=o.getFlyout();if(e.type=="toolbox_item_select")if(e.newItem){this.isOldItemOnly=!1,this.isFlyoutShow=2,a.show(o.toolbox.getToolboxItems().flatMap(this.convertToolboxItemToFlyoutItems));for(let l of o.getFlyout().contents)if(this.toolboxItemIsLabel(l)&&l.getElement().getButtonText()==e.newItem){a.getWorkspace().scrollbar.setY(l.getElement().getPosition().y);break}}else e.oldItem&&(!this.isOldItemOnly&&this.isFlyoutShow==2&&e.oldItem=="Variables"||(this.isFlyoutShow=1,a.hide()),this.isOldItemOnly=!0);else{switch(e.type){case"create":this.isFlyoutShow==2&&(this.isFlyoutShow=3);break;case"click":this.isFlyoutShow=0;break;case"move":(this.isFlyoutShow==1||this.isFlyoutShow==3)&&(this.isFlyoutShow=2);break;case"var_create":a.show(o.toolbox.getToolboxItems().flatMap(this.convertToolboxItemToFlyoutItems)),(this.isFlyoutShow==1||this.isFlyoutShow==3)&&(this.isFlyoutShow=2);break}this.isFlyoutShow==2?a.setVisible(!0):(a.hide(),o.updateToolbox(this.toolboxData))}},blockVarSTR(e){let o={},n=e.split("var");for(let p=1;p<n.length;p++)n[p].split(";")[0].split(",").forEach(g=>{let k=g.split(",")[0].split("=")[0].split(" in ")[0].split(" of ")[0].replaceAll(" ","");k.indexOf(")")<0&&(o[k]=!0)});let a="{",l="{",t="",i="",b="";this.globeSpriteVar={};for(let p in o)p.indexOf("__")==0?this.globeSpriteVar[p]=!0:(a+=p+",",t+="let "+p+"=null;",i+=`blocklyVar["${p}"]=${p};`,b+=`${p}=syncObj["${p}"];`),l+=p+",";return{syncObj:l+"}",objStr:a+"}",init:t,letBackup:i,letRestore:b}},getSpriteJScodeFromBlockly(){},find_rootBlock(e,o){for(var n=e.getTopBlocks(!1),a=0,l;l=n[a];a++)if(l.type==o)return l;return null},rootJSCodeFN(e,o){let n="if(fnID<___workingFnID){ return; }await bRCheck(this);if (gameCR.exit) { return; }";window.LoopTrap=1e3,javascriptGenerator.INFINITE_LOOP_TRAP=n;var a=javascriptGenerator.workspaceToCode(e),l="";if(a.slice(0,4)=="var "){let m=a.indexOf(";");m>-1&&(l=a.slice(0,m+1)+l)}let t="",i="",b="",p=a.split("function "),g=[];javascriptGenerator.init(e);for(let m=p.length-1;m>0;m--){let u=p[m].split("(")[0],v=p[m].split(`

`)[0];if(u!="mathRandomInt"){let h=v.split("return ");if(h.length>1&&h.length==2){let P=h[1].replace(";",");");v=h[0]+"resolve("+P}h=v.split("{");let y="";if(h.length>1){y=`
async function `+h[0]+"{let fnID=___workingFnID; return new Promise(async function (resolve, reject) {"+h[1];let P=2;for(;P<h.length;)y=y+"{"+h[P],P++;for(h=y.split("}"),y=h[0],P=1;P<h.length-1;P++)y=y+"}"+h[P];i=i+y.split("window.alert").join("console.log")+`resolve();});}
`,y=y.split(`;
`).join(`;
await bRCheck(this);
`),y=y.split("window.alert").join("if(doDebug) debugLog"),t=t+y+`resolve();});}
`}g.push(u)}else b=b+`
 function `+v+`
`}javascriptGenerator.init(e);var k=this.find_rootBlock(e,"sprite_init"),c=javascriptGenerator.blockToCode(k);return c==""?this.isBlocklyJSEmpty=!0:this.isBlocklyJSEmpty=!1,o&&console.warn("--- rootBlock --->",c),this.jsWindowCode=`
`+l+`
`+i+`
`+t+`
function startFn(){`+c.split("window.alert").join("console.log")+`
}`,this.jsWindowCode=this.jsWindowCode.split(n).join(""),c=c.split(`;
`).join(`;
await bRCheck(this);
`),c=c.split("window.alert").join("if(doDebug) debugLog"),c=c.split(n).join(n+`await bRCheck(this);
if(gameCR.exit){break;}
`),o&&console.warn("--- rootBlock after --->",c),c=c.split("fnID==___workingFnID").join("true"),c=`
`+l+`
`+b+`
`+t+`
this.userFunction=async()=>{try{if(isDoinit){ `+c+`await sleep(30);init_beforeStartAfterMs();control_start_after_ms();}else{
          syncObj2Var();
          control_start_as_clone();
          }
          }
            catch(e)
            {
              debugLog(e);
              gameCR.exit=3;
              // console.log("error log:",e);
            }
          while(!gameCR.exit){
            await bRCheck(this);
            await endOfWhilePauseCheck();
            await sleep(300);
            window.LoopTrap =1000;
          }
          // console.log("End:",gameCR);
        }
      `,rt=c.split("--window.LoopTrap").length-1,g.forEach(m=>{c=c.split(m+"();").join("await "+m+"();").split(m+"());").join("await "+m+"());")}),{rootJSCode:c,fnNameList:g}},exitJSCode(){this.isGamePause=!1,fe.exit||(st=!1,fe.exit=!0,this.syncVarJson={},window.messager.toClientAllMessage({cmd:"gameCRexit",value:!0,key:""}),window.messager.clientOBJ={})},doGameCRInit(){Ar()},gameCRReflash(){st&&(fe.exit||(fe.eLinePerTime=1500+rt,fe.motion={up:1,down:1,throw:1},fe.exit=!1))},blockly2PGameEventType(e){Bt({cmd:"phaser_2PS_p2w",update:{subCmd:"blocklyEventType",eventType:e}})},whenIReceiveEventOptions(){let e=[];for(let o of this.scratchJSPinia.projectObj.whenIReceiveEventList)e.push([o.name,o.id]);return e},event_whenkeypressedOptions(){let e=[["space","Space"],["up arrow","ArrowUp"],["down arrow","ArrowDown"],["right arrow","ArrowRight"],["left arrow","ArrowLeft"],["any","any"]],o=this.scratchJSPinia.projectObj.whenkeypressedString;for(let n=0;n<o.length;n++)e.push([o[n],o[n]]);return e},updateWhenIReceiveEvent(){Blockly.defineBlocksWithJsonArray([{type:"whenIReceiveEvent",message0:this.whenIReceiveEvent_i18n,args0:[{type:"field_dropdown",name:"theEvent",options:()=>this.whenIReceiveEventOptions(),value:"message1"}],colour:"#FFBF00",inputsInline:!0,previousStatement:null,nextStatement:null,fields:{theEvent:"message1"}}])},blockChangeEvent(e){let o=this.getMainWorkspace(e.workspaceId);if(o!=null&&(this.menuFlyoutAutoClose(e,o,!1),e.type=="click")){if(this.clickToDblClickCount++,this.clickToDblClickCount===1)this.clickToDblClickTimer=setTimeout(()=>{this.clickToDblClickCount=0},300);else if(this.clickToDblClickCount===2){clearTimeout(this.clickToDblClickTimer),this.clickToDblClickCount=0,javascriptGenerator.init(o);const n=e.blockId,a=o.getBlockById(n);if(a){const l=Blockly.Xml.blockToDom(a);Blockly.Xml.domToText(l);let t="";switch(a.type){case"whenIReceiveEvent":t=prompt("Enter a value:"),t!==null&&this.scratchJSPinia.projectObj.whenIReceiveEventList.push({name:t,id:"value_"+this.scratchJSPinia.projectObj.whenIReceiveEvenUnique++});break;case"event_whenThisSpriteClicked":case"isMouseOver":break;case"event_whenkeypressed":case"isKeypressed":t=prompt("Enter key value:"),t!==null&&(this.scratchJSPinia.projectObj.whenkeypressedString+=t);break;default:const i=javascriptGenerator.blockToCode(a);if(i.indexOf("for ")>-1||i.indexOf("while ")>-1||i.indexOf("break")>-1||i.indexOf("continue")>-1){this.$q.notify({type:"warning",position:"center",message:this.$t("project.notExecute")});return}let b=this.scratchPhaserPinia.sceneList[this.scratchPhaserPinia.sceneSelected],p=this.scratchPhaserPinia.spriteList[this.scratchPhaserPinia.spriteSelected],g=JSON.stringify({sceneId:b.id,spriteId:p.id}),k=`
                let ___workingFnID=0;
                let gameCR={exit:false};
                let ___sound_play={};
                let ___abort_sleeps = [];
                let ___abort_sounds = [];
                let sceneId="${b.id}";
                let spriteId="${p.id}";
                let spriteMessageID = sceneId + spriteId;
                function ___sleepBlocks_abort(){
                  for (let index = ___abort_sleeps.length - 1; index > -1; index--) {
                    ___abort_sleeps[index]()
                  }
                  ___abort_sleeps = [];
                }
                function ___sleep_sounds_abort(){
                  for (let index = ___abort_sounds.length - 1; index > -1; index--) {
                    ___abort_sounds[index]()
                  }
                  ___abort_sounds = [];
                }
                function stopOtherScripts() {
                  ___workingFnID++
                  ___sleepBlocks_abort()
                  ___sleep_sounds_abort()
                  for (let eachKey in ___sound_play) {
                    if (___sound_play[eachKey]) {
                      blocklyToPhaser(true,'sound_stop', eachKey)
                      ___sound_play[eachKey] = false
                    }
                  }
                  blocklyToPhaser(true,'sprite_stop', {})
                  return ___workingFnID
                }
                async function soundStopSprite() {
                  blocklyToPhaser(true,'sound_stopSprite')
                  ___sleep_sounds_abort()
                  await wait(45)
                }
                function debugLog(theLog) {
                // console.log("debugLog:",theLog);
                  return window.messager.toServerMessage({
                    spriteMessageID: spriteMessageID,
                    cmd: "debugLog",
                    key: "",
                    value: theLog,
                  });
                }
                function blocklyAction(cmd,data) {
                  if(!gameCR.exit){
                    return window.messager.toServerMessage({
                      // who: "player1",
                      fn: "blocklyAction",
                      target:${g},
                      cmd: cmd,
                      data: data,
                    });
                  }
                }
                function blocklyToPhaser(isRun,cmd,data) {
                  if(!gameCR.exit&&isRun){
                    return window.messager.toServerMessage({
                      spriteMessageID: spriteMessageID,
                      fn: "blocklyToPhaser",
                      target:{"sceneId":sceneId,"spriteId":spriteId},
                      cmd: cmd,
                      data: data,
                    });
                  }
                }
                async function sleep_sound(ms) {
                  return new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, ms)
                  );
                }
                async function sleep(ms) {
                  return new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, ms)
                  );
                }
                async function wait(ms) {
                  return new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, ms)
                  );
                }
                function doDateTime(ms,locales,options){
                  let rtn = ''
                  if  (ms==0){
                    try {
                      rtn = new Date().toLocaleString(locales, options)
                    } catch (error) {
                      console.log('error:', error)
                      rtn = new Date().toLocaleString()
                    }
                  }else{
                    try {
                      rtn = new Date(ms).toLocaleString(locales, options)
                    } catch (error) {
                      console.log('error:', error)
                      rtn = new Date(ms).toLocaleString()
                    }
                  }
                  return rtn;
                }
                async function cloneEffects(isRun, config, toPhaser) {
                  if (isRun) {
                    try {
                      let newConf = JSON.parse(JSON.stringify(config))
                      if (newConf.index == undefined) {
                        newConf.index = 0
                      }
                      if (typeof newConf.y == 'number') {
                        newConf.y = -newConf.y
                      } else {
                        if (newConf.y) {
                          if (newConf.y.min) {
                            newConf.y.min = -newConf.y.min
                          }
                          if (newConf.y.max) {
                            newConf.y.max = -newConf.y.max
                          }
                          if (newConf.y.start) {
                            newConf.y.start = -newConf.y.start
                          }
                          if (newConf.y.end) {
                            newConf.y.end = -newConf.y.end
                          }
                        }
                      }
                      if (typeof newConf.speedY == 'number') {
                        newConf.speedY = -newConf.speedY
                      } else {
                        if (newConf.speedY) {
                          if (newConf.speedY.min) {
                            newConf.speedY.min = -newConf.speedY.min
                          }
                          if (newConf.speedY.max) {
                            newConf.speedY.max = -newConf.speedY.max
                          }
                        }
                      }
                      if (typeof newConf.gravityY == 'number') {
                        newConf.gravityY = -newConf.gravityY
                      }

                      toPhaser(true, 'particles_add', newConf)
                    } catch (error) {}
                  }
                }
                async function fetch_api(API){
                  // console.log("fetch_api:",API);
                  const response = await fetch(API);
                  return await response.json();
                }
                async function bRCheck(vm) {}
                (async()=>{
                  try {let fnID = ___workingFnID;
                  ${i.split("window.alert").join("debugLog")}
                  } catch (error) {
                    console.log("Simple command only");
                  }
                })()
                `;new Function(k)()}}}}},getJSCodeOfBlock(e,o,n){javascriptGenerator.init(e),window.LoopTrap=1e3,javascriptGenerator.INFINITE_LOOP_TRAP="if(fnID<___workingFnID){ return; }await bRCheck(this);if (gameCR.exit) { return; }";for(var a="",l=e.getTopBlocks(!1),t=0,i;i=l[t];t++)i.type==o&&(a+=`if(!setTimeoutObj["${o+t}"]){setTimeoutObj["${o+t}"]=true;let fnID=___workingFnID;setTimeout(async () => { try {${javascriptGenerator.blockToCode(i)}}finally {setTimeoutObj["${o+t}"]=null;}},0);}
`);let b=`async function ${o}(){
          ${a}
        }`.split("window.alert").join("console.log"),p=`async function ${o}(){
          ${a}
        }`.split(`;
`).join(`;
await bRCheck(this);
`);return p=p.split("window.alert").join("if(doDebug) debugLog"),n.forEach(g=>{p=p.split(g+"();").join("await "+g+"();").split(g+"());").join("await "+g+"());")}),{userCode:b,runCode:p}},getJSCodeOfBlock_if(e,o,n){javascriptGenerator.init(e),window.LoopTrap=1e3,javascriptGenerator.INFINITE_LOOP_TRAP="if(fnID<___workingFnID){ return; }await bRCheck(this);if (gameCR.exit) { return; }";for(var a=!1,l="",t=[],i=e.getTopBlocks(!1),b=0,p;p=i[b];b++)if(p.type==o){a=!0;let c=javascriptGenerator.blockToCode(p);l+=`if(!setTimeoutObj["${o+b}"]){setTimeoutObj["${o+b}"]=true;let fnID=___workingFnID;setTimeout(async () => { try {${c}}}finally {setTimeoutObj["${o+b}"]=null;}},0);}
`;let m=c.split("if (what =='");m.length>1&&t.push(m[1].split("')")[0])}let g=`async function ${o}(what){
          ${l}
        }`.split("window.alert").join("console.log"),k=`async function ${o}(what){
          ${l}
        }`.split(`;
`).join(`;
await bRCheck(this);
`);return k=k.split("window.alert").join("if(doDebug) debugLog"),n.forEach(c=>{k=k.split(c+"();").join("await "+c+"();").split(c+"());").join("await "+c+"());")}),{userCode:g,runCode:k,hasBlock:a,targetList:t}},getJSCodeOfBlock_if_key(e,o,n){javascriptGenerator.init(e),window.LoopTrap=1e3,javascriptGenerator.INFINITE_LOOP_TRAP="if(fnID<___workingFnID){ return; }await bRCheck(this);if (gameCR.exit) { return; }";for(var a=!1,l="",t=[],i=e.getTopBlocks(!1),b=0,p;p=i[b];b++)if(p.type==o){a=!0;let c=javascriptGenerator.blockToCode(p);l+=`if(!setTimeoutObj["${o+b}"]){setTimeoutObj["${o+b}"]=true;let fnID=___workingFnID;setTimeout(async () => { try {${c}}}finally {setTimeoutObj["${o+b}"]=null;}},0);}
`;let m=c.split("if (what.key =='");m.length>1&&t.push(m[1].split("')")[0])}let g=`async function ${o}(what){
          ${l}
        }`.split("window.alert").join("console.log"),k=`async function ${o}(what){
          ${l}
        }`.split(`;
`).join(`;
await bRCheck(this);
`);return k=k.split("window.alert").join("if(doDebug) debugLog"),n.forEach(c=>{k=k.split(c+"();").join("await "+c+"();").split(c+"());").join("await "+c+"());")}),{userCode:g,runCode:k,hasBlock:a,targetList:t}},convertToolboxItemToFlyoutItems(e){let o=[];if(e instanceof Blockly.ToolboxCategory){o.push({kind:"LABEL",text:e.getName()});let n=e.getContents();typeof n=="string"&&(n=[{custom:n,kind:"CATEGORY"}]),o=o.concat(n)}return o}}}),Mr=He("userStores",{state:()=>({$q:ct(),userSetting:{version:1.1,locale:{localeUI:"",localeBlockly:"en"},window:{toDoInit:!0,showDebugLogArea:!0,debugLogArea:{x:0,y:0,width:200,height:300,isActive:!1},showJsonVerArea:!0,jsonVerArea:{x:0,y:0,width:350,height:500,isActive:!1},showBackpackArea:!0,backpackArea:{x:0,y:0,width:450,height:300,isActive:!1}}},localUpdate:0}),getters:{},actions:{}}),Hr=He("scratchPaint",{state:()=>({svgShowUpdate_toScratPaint:0,event_svgUpdate_fromScratPaint:0,svgSelected:0,svgList:[]}),getters:{},actions:{reloadsvgList(){for(let e=0;e<this.svgList.length;e++)this.svgList[e].sizeObj=this.sizeXYfromSvgStr(this.svgList[e].data);this.event_svgUpdate_fromScratPaint++},sizeXYfromSvgStr(e){let o=this.getValueFromStr(e,'width="'),n=this.getValueFromStr(e,'height="');return{width:o,height:n}},getValueFromStr(e,o){let n="",a=e.split(o);return a.length>1&&(n=parseInt(a[1].split('"')[0])+1),n}}}),be={motion:{primary:"#4C97FF",tertiary:"#3373CC"},looks:{primary:"#9966FF",tertiary:"#774DCB"},sounds:{primary:"#CF63CF",tertiary:"#BD42BD"},event:{tertiary:"#CC9900"},sensing:{primary:"#5CB1D6",tertiary:"#2E8EB8"},pen:{primary:"#0fBD8C"}},Fr=(e,o)=>{const n=e.__vccOpts||e;for(const[a,l]of o)n[a]=l;return n},Ur=["title"],Xr={style:{position:"relative"}},Qr={style:{position:"absolute",bottom:"10px",left:"10px",width:"160px","font-size":"10px"}},Gr=["value"],Wr={for:"myCheckbox"},qr=["title"],Vr={style:{"font-size":"18px",color:"blue"}},Kr={class:"flex",style:{"margin-left":"30px",width:"200px"}},Yr={style:{width:"68px"}},Jr={id:"phaserScreenshot",alt:"Phaser Screenshot will appear here",class:"scratchPhaser"},Re=1024,Ve=576;window.SVG_ART_BOARD_WIDTH=Re;window.SVG_ART_BOARD_HEIGHT=Ve;const Zr={__name:"MainLayout",setup(e){const o=$t(()=>nr(()=>import("./scratchPhaser-Dj2emjco.js"),__vite__mapDeps([0,1,2,3])).then(d=>d)),n=Ot("axios"),{t:a,locale:l}=Dt(),t=Rr(),i=ft(),b=Hr(),p=St(),g=Et(),k=ye(),c=ct(),m=Jt(),u=ye(!0),v=ye(!0);let h=[0];const y=Mr(),P=ge(()=>y.userSetting.window),D={btn:"card1",card1:"btn"},z=ye("btn");function N(){z.value=="btn"&&(z.value=D[z.value])}function S(){z.value=D[z.value]}let U={name:"default",toolboxId:"P",version:"1.0",whenIReceiveEventList:[{name:"message1",id:"message1"}],whenkeypressedString:"",whenIReceiveEvenUnique:1,config:{backgroundColor:"#FFFFFF"},sceneSelected:0,spriteIdUnique:1,phaser:{width:Re,height:Ve},globeVarList:["__GlobalVar"],total_multiTouch:1,sceneList:[{id:"s0",name:"Scene1",spriteSelected:0,spriteIdUnique:1,spriteList:[i.defaultSprite]}]};const j=ge(()=>{let d=A.value.width*.8/t.playerWindow.init.phaser.width,f=A.value.height*.8/t.playerWindow.init.phaser.height;return d<f?d:f}),Q=ge(()=>{if($.value){console.warn("scalar80Rate:",j.value),console.warn("scalar80Rate:",j.value*t.playerWindow.init.phaser.width);let d=parseInt(j.value*t.playerWindow.init.phaser.width)+6,f=parseInt(j.value*t.playerWindow.init.phaser.height)+42;return`width:${d}px;height:${f}px`}else return""}),Y=ge(()=>{if($.value){let d=parseInt(j.value*t.playerWindow.init.phaser.width),f=parseInt(j.value*t.playerWindow.init.phaser.height);return`width:${d}px;height:${f}px`}else return""});function w(){if(O.value==1|O.value==2&&(O.value=2,!t.isGamePause)){const d=i.mainScene;X(d),t.isGamePause=!0,t.debugLogArray.push("Pause"),c.notify({type:"info",position:"center",message:a("blockly.pause")})}}const A=ye({});function s(d){A.value=d,P.value.toDoInit&&(P.value.toDoInit=!1,P.value.backpackArea.x=70,P.value.backpackArea.y=d.height-300,P.value.debugLogArea.x=521,P.value.debugLogArea.y=d.height-300,P.value.jsonVerArea.x=722,P.value.jsonVerArea.y=d.height-500)}let _=null;Se(()=>y.userSetting,d=>{_!=null&&clearTimeout(_),_=setTimeout(()=>{localStorage.setItem("userSetting",JSON.stringify(d))},3e3)},{deep:!0}),Se(()=>p.projectObj.total_multiTouch,d=>{i.mainScene!=null&&i.mainScene.set_total_multiTouch(d)},{immediate:!0});function Z(){return`
      <xml>
        <category name="${a("blockly.Motion")}"  colour="${be.motion.primary}" secondaryColour="${be.motion.tertiary}">
          <block type="motion_move_steps" >
            <value name="stepSize">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_changeX" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_changeY" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="tween_stop_glide" ></block>
          <block type="tween_wait_done" ></block>
          <block type="motion_trun_degrees" >
            <value name="degree">
              <shadow type="math_number">
                <field name="NUM">15</field>
              </shadow>
            </value>
          </block>
          <block type="motion_pointindirection_2">
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">90</field>
              </shadow>
            </value>
          </block>
          <block type="pointtowardsduration">
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_goToX" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_goToY" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_goToXY" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="value2">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="duration">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="motion_x_position" >
          </block>
          <block type="motion_y_position" >
          </block>
          <block type="motion_direction" >
          </block>
        </category>
        <category name="${a("blockly.Looks")}"   colour="${be.looks.primary}" secondaryColour="${be.looks.tertiary}" >
           <block type="looks_say_for_seconds">
            <value name="chatStr">
              <shadow type="text">
                <field name="TEXT">Hello!</field>
              </shadow>
            </value>
            <value name="seconds">
              <shadow type="math_number">
                <field name="NUM">2000</field>
              </shadow>
            </value>
          </block>
          <block type="looks_say">
            <value name="chatStr">
              <shadow type="text">
                <field name="TEXT">Hello!</field>
              </shadow>
            </value>
          </block>
          <block type="looks_say_dxdy" >
            <value name="dx">
              <shadow type="math_number">
                <field name="NUM">50</field>
              </shadow>
            </value>
            <value name="dy">
              <shadow type="math_number">
                <field name="NUM">50</field>
              </shadow>
            </value>
          </block>
          <block type="looks_say_sizecolor" >
            <value name="theColor">
              <shadow type="colour_picker">
                <field name="COLOUR">#000000</field>
              </shadow>
            </value>
            <value name="size">
              <shadow type="math_number">
                <field name="NUM">36</field>
              </shadow>
            </value>
          </block>
          <block type="renderTexture_draw_text">
          </block>
          <block type="looks_switch_costume_to">
          </block>
          <block type="looks_nextcostume">
          </block>
          <block type="looks_set_costume_to">
          </block>
          <block type="looks_change_size_by">
            <value name="size">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
          <block type="looks_set_size_to">
            <value name="size">
              <shadow type="math_number">
                <field name="NUM">100</field>
              </shadow>
            </value>
          </block>
          <block type="looks_color_hue">
            <value name="hue">
              <shadow type="math_number">
                <field name="NUM">180</field>
              </shadow>
            </value>
          </block>
          <block type="looks_setTransparent">
            <value name="transparent">
              <shadow type="math_number">
                <field name="NUM">50</field>
              </shadow>
            </value>
          </block>
          <block type="looks_setBrightness">
            <value name="brightness">
              <shadow type="math_number">
                <field name="NUM">50</field>
              </shadow>
            </value>
          </block>
          <block type="this_visible">
            <value name="visible">
              <shadow type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </shadow>
            </value>
          </block>
          <block type="looks_golayer">
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
        </category>
        <category name="${a("blockly.Sound")}" colour="${be.sounds.primary}" secondaryColour="${be.sounds.tertiary}">
          <block type="sound_play_until_done">
          </block>
          <block type="sound_start">
          </block>
          <block type="sound_volume">
            <value name="volume">
              <shadow type="math_number">
                <field name="NUM">100</field>
              </shadow>
            </value>
          </block>
          <block type="sound_stopSprite">
          </block>
        </category>
        <category name="${a("blockly.Events")}" colour="${be.event.tertiary}" secondaryColour="${be.event.tertiary}">
          <block type="event_whenkeypressed"></block>
          <block type="event_whenThisSpriteClicked"></block>
          <block type="control_start_after_ms">
             <value name="value1">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
          </block>
          <block type="control_start_as_clone"></block>
          <block type="control_create_clone_of">
          </block>
          <block type="control_stop_this_scripts"></block>
          <block type="control_stop_other_scripts"></block>
          <block type="control_delete_this_clone"></block>

          <block type="whenIReceiveEvent">
            <field name="theEvent">message1</field>
          </block>
          <block type="broadcastEvent">
            <field name="theEvent">message1</field>
          </block>
        </category>
         <category name="${a("blockly.Control")}" colour="%{BKY_LOGIC_HUE}">
          <block type="control_sleep">
             <value name="value1">
                <shadow type="math_number">
                    <field name="NUM">1000</field>
                </shadow>
            </value>
          </block>
          <block type="controls_if">
            <value name="IF0">
              <block type="logic_compare" >
                  <field name="OP">EQ</field>
                  <value name="B">
                      <shadow type="math_number">
                          <field name="NUM">123</field>
                      </shadow>
                  </value>
              </block>
            </value>
          </block>
          <block type="controls_if">
            <mutation else="1"></mutation>
            <value name="IF0">
              <block type="logic_compare" >
                  <field name="OP">EQ</field>
                  <value name="B">
                      <shadow type="math_number">
                          <field name="NUM">123</field>
                      </shadow>
                  </value>
              </block>
            </value>
          </block>
          <block type="logic_compare"></block>
          <block type="logic_operation"></block>
          <block type="logic_negate"></block>
          <block type="logic_boolean"></block>
          <block type="logic_null"></block>
          <block type="logic_ternary">
            <value name="IF">
              <block type="logic_compare" >
                  <field name="OP">EQ</field>
                  <value name="B">
                      <shadow type="math_number">
                          <field name="NUM">123</field>
                      </shadow>
                  </value>
              </block>
            </value>
          </block>
        </category>
        <category name="${a("blockly.Loops")}" categorystyle="loop_category">
          <block type="controls_repeat_ext">
            <value name="TIMES">
              <block type="math_number">
                <field name="NUM">10</field>
              </block>
            </value>
          </block>
          <block type="controls_whileUntil">
              <value name="BOOL">
                <shadow type="logic_boolean" >
                  <field name="BOOL">TRUE</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="control_sleep">
                  <value name="value1">
                    <shadow type="math_number">
                      <field name="NUM">1000</field>
                    </shadow>
                    <block type="math_number">
                      <field name="NUM">50</field>
                    </block>
                  </value>
                </block>
              </statement>
          </block>
          <block type="controls_for">
            <field name="VAR">i</field>
            <value name="FROM">
              <block type="math_number">
                <field name="NUM">1</field>
              </block>
            </value>
            <value name="TO">
              <block type="math_number">
                <field name="NUM">10</field>
              </block>
            </value>
            <value name="BY">
              <block type="math_number">
                <field name="NUM">1</field>
              </block>
            </value>
          </block>
          <block type="controls_forEach_of">
            <field name="VAR" variabletype="">eachOne</field>
          </block>
          <block type="controls_break"></block>
        </category>
        <category name="${a("blockly.Sensing")}" colour="${be.sensing.primary}" secondaryColour="${be.sensing.tertiary}">
          <block type="event_whenoverlapGroup"></block>
          <block type="isMouseOver"></block>
          <block type="ifTouchingSprite"></block>
          <block type="askSprite"></block>
          <block type="isPointerDown"></block>
          <block type="isKeypressed"></block>
          <block type="this_setInteractive">
            <value name="dragMode">
              <shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </shadow>
            </value>
          </block>
          <block type="timer_performance_now"></block>
          <block type="new_date_time_ms"></block>
        </category>
        <category name="${a("blockly.Operators")}" categorystyle="math_category">
          <block type="math_number" gap="32">
            <field name="NUM">123</field>
          </block>
          <block type="text_to_int">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">123</field>
              </shadow>
            </value>
          </block>
          <block type="text_to_float">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">0.123</field>
              </shadow>
            </value>
          </block>
          <block type="math_arithmetic">
            <value name="A">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="B">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
          </block>
          <block type="math_single">
            <value name="NUM">
              <shadow type="math_number">
                <field name="NUM">9</field>
              </shadow>
            </value>
          </block>
          <block type="math_trig">
            <value name="NUM">
              <shadow type="math_number">
                <field name="NUM">45</field>
              </shadow>
            </value>
          </block>
          <block type="math_constant"></block>
          <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="math_round">
            <value name="NUM">
              <shadow type="math_number">
                <field name="NUM">3.1</field>
              </shadow>
            </value>
          </block>
          <block type="math_on_list"></block>
          <block type="math_modulo">
            <value name="DIVIDEND">
              <shadow type="math_number">
                <field name="NUM">64</field>
              </shadow>
            </value>
            <value name="DIVISOR">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
          <block type="math_constrain">
            <value name="VALUE">
              <shadow type="math_number">
                <field name="NUM">50</field>
              </shadow>
            </value>
            <value name="LOW">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="HIGH">
              <shadow type="math_number">
                <field name="NUM">100</field>
              </shadow>
            </value>
          </block>
          <block type="math_random_int2">
            <value name="FROM">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="TO">
              <shadow type="math_number">
                <field name="NUM">100</field>
              </shadow>
            </value>
          </block>
          <block type="math_random_float"></block>
          <block type="math_atan2">
            <value name="X">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="Y">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
          </block>
        </category>
        <category name="${a("blockly.Text")}" categorystyle="text_category">
          <block type="text_print">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text"></block>
          <block type="int_to_text">
            <value name="NUMBER">
              <shadow type="math_number">
                <field name="NUM">123</field>
              </shadow>
            </value>
          </block>
          <block type="text_join"></block>
          <block type="text_append">
            <value name="TEXT">
              <shadow type="text"></shadow>
            </value>
          </block>
          <block type="text_length">
            <value name="VALUE">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text_isEmpty">
            <value name="VALUE">
              <shadow type="text">
                <field name="TEXT"></field>
              </shadow>
            </value>
          </block>
          <block type="text_indexOf">
            <value name="VALUE">
              <block type="variables_get">
                <field name="VAR">text</field>
              </block>
            </value>
            <value name="FIND">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text_charAt">
            <value name="VALUE">
              <block type="variables_get">
                <field name="VAR">text</field>
              </block>
            </value>
          </block>
          <block type="text_getSubstring">
            <value name="STRING">
              <block type="variables_get">
                <field name="VAR">text</field>
              </block>
            </value>
          </block>
          <block type="text_changeCase">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text_trim">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text_count">
            <value name="SUB">
              <shadow type="text"></shadow>
            </value>
            <value name="TEXT">
              <shadow type="text"></shadow>
            </value>
          </block>
          <block type="text_replace">
            <value name="FROM">
              <shadow type="text"></shadow>
            </value>
            <value name="TO">
              <shadow type="text"></shadow>
            </value>
            <value name="TEXT">
              <shadow type="text"></shadow>
            </value>
          </block>
          <block type="text_reverse">
            <value name="TEXT">
              <shadow type="text"></shadow>
            </value>
          </block>
          <label text="Input/Output:" web-class="ioLabel"></label>
          <block type="text_print">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="text_prompt_ext">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
        </category>
        <category name="${a("blockly.Lists")}" categorystyle="list_category">
          <block type="lists_create_with">
            <mutation items="0"></mutation>
          </block>
          <block type="lists_create_with"></block>
          <block type="lists_repeat">
            <value name="NUM">
              <shadow type="math_number">
                <field name="NUM">5</field>
              </shadow>
            </value>
          </block>
          <block type="lists_length"></block>
          <block type="lists_isEmpty"></block>
          <block type="lists_indexOf">
            <value name="VALUE">
              <block type="variables_get">
                <field name="VAR">list</field>
              </block>
            </value>
          </block>
          <block type="lists_getIndex">
            <value name="VALUE">
              <block type="variables_get">
                <field name="VAR">list</field>
              </block>
            </value>
          </block>
          <block type="lists_setIndex">
            <value name="LIST">
              <block type="variables_get">
                <field name="VAR">list</field>
              </block>
            </value>
          </block>
          <block type="lists_getSublist">
            <value name="LIST">
              <block type="variables_get">
                <field name="VAR">list</field>
              </block>
            </value>
          </block>
          <block type="lists_split">
            <value name="DELIM">
              <shadow type="text">
                <field name="TEXT">,</field>
              </shadow>
            </value>
          </block>
          <block type="lists_sort"></block>
          <block type="lists_reverse"></block>
        </category>
        <sep></sep>
        <category name="${a("blockly.Variables")}" categorystyle="variable_category" custom="VARIABLE">
          <block type="variables_get"></block>
          <block type="variables_set"></block>
        </category>
        <category
          name="${a("blockly.Functions")}"
          categorystyle="procedure_category"
          custom="PROCEDURE"
        ></category>
        <sep></sep>
        <category name="${a("blockly.Physics")}" colour="#DB6E00">
          <block type="physics_velocity_x">
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">200</field>
              </shadow>
            </value>
          </block>
          <block type="physics_velocity_y">
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">200</field>
              </shadow>
            </value>
          </block>
          <block type="physics_velocity_move">
            <value name="move">
              <shadow type="math_number">
                <field name="NUM">200</field>
              </shadow>
            </value>
          </block>
          <block type="physics_velocity">
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="physics_setBounce">
            <value name="bounce">
              <shadow type="math_number">
                <field name="NUM">0.25</field>
              </shadow>
            </value>
          </block>
          <block type="event_whencolliderGroup"></block>
          <block type="physics_collide_Bounds">
           <value name="isStatic">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
           <block type="physics_as_static">
           <value name="isStatic">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
          <block type="physics_gravity">
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">-380</field>
              </shadow>
            </value>
          </block>
        </category>
        <category name="🖌️"  colour="${be.pen.primary}" secondaryColour="${be.motion.tertiary}">
          <block type="graphics_clear"></block>
          <block type="graphics_pen_down"></block>
          <block type="graphics_pen_show"></block>
          <block type="graphics_pen_up"></block>
          <block type="graphics_pen_color">
            <value name="theColor">
              <shadow type="colour_picker">
                <field name="COLOUR">#000000</field>
              </shadow>
            </value>
            <value name="thickness">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
          <block type="graphics_pen_transparent">
            <value name="transparent">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="graphics_pen_drawOnCanvas"></block>
        </category>
        <category name="🖼️"  colour="${be.pen.primary}" secondaryColour="${be.motion.tertiary}">
          <block type="renderTexture_fill">
            <value name="theColor">
              <shadow type="colour_picker">
                <field name="COLOUR">#00ff00</field>
              </shadow>
            </value>
          </block>
          <block type="renderTexture_resize" >
            <value name="value1">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="value2">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="renderTexture_draw_sprite">
          </block>
          <block type="renderTexture_clear">
          </block>
        </category>
        <category name="${a("blockly.More")}" colour="#A2825C">
          <label text="Debug/Output:" web-class="ioLabel"></label>
          <block type="text_print">
            <value name="TEXT">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
            </value>
          </block>
          <block type="pGamePause"> </block>
        <label text="${a("blockly.event_scenePointer")}" web-class="ioLabel"></label>
          <block type="event_scenePointerDown"></block>
          <block type="event_scenePointerMove"></block>
          <block type="event_scenePointerUp"></block>
          <block type="text_print">
            <value name="TEXT">
              <block type="get_scenePointerObj"></block>
            </value>
          </block>
          <block type="text_print">
            <value name="TEXT">
              <block type="get_json_value">
                <value name="key">
                  <block type="text">
                    <field name="TEXT">direction</field>
                  </block>
                </value>
                <value name="object">
                  <block type="get_scenePointerObj"></block>
                </value>
              </block>
            </value>
          </block>
          <label text="${a("blockly.Looks")}" web-class="ioLabel"></label>
          <block type="looks_say_origin" >
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">0.5</field>
              </shadow>
            </value>
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">0.5</field>
              </shadow>
            </value>
          </block>
          <block type="Looks_say_setStroke">
            <value name="theColor">
              <shadow type="colour_picker">
                <field name="COLOUR">#ff0000</field>
              </shadow>
            </value>
            <value name="thickness">
              <shadow type="math_number">
                <field name="NUM">16</field>
              </shadow>
            </value>
          </block>
          <block type="Looks_say_setShadow">
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">3</field>
              </shadow>
            </value>
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">3</field>
              </shadow>
            </value>
            <value name="color">
              <shadow type="colour_picker">
                <field name="COLOUR">#777777</field>
              </shadow>
            </value>
            <value name="blur">
              <shadow type="math_number">
                <field name="NUM">3</field>
              </shadow>
            </value>
            <value name="shadowStroke">
              <shadow type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </shadow>
            </value>
            <value name="shadowFill">
              <shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </shadow>
            </value>
          </block>
          <block type="Looks_say_setFontFamily">
          </block>
          <label text="Text" web-class="ioLabel"></label>
          <block type="the_field_multilinetext">
            <field name="chatStr">some text 
 with newlines</field>
          </block>
          <label text="Time" web-class="ioLabel"></label>
          <block type="time_toLocaleDateString">
            <value name="ms">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="locales">
              <shadow type="text">
                <field name="TEXT"></field>
              </shadow>
            </value>
            <value name="options">
              <shadow type="object"></shadow>
            </value>
          </block>
          <block type="time_getTime">
          </block>
          <label text="Particles" web-class="ioLabel"></label>
          <block type="particles_start">
            <value name="index">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="x">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="y">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="count">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
          <block type="particles_stop">
            <value name="index">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <block type="particles_add">
            <value name="config">
              <shadow type="object"></shadow>
              <block type="object"></block>
            </value>
          </block>
          <block type="renderTexture_draw_cloneEffect">
             <value name="index">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
          </block>
          <label text="API" web-class="ioLabel"></label>
            <block type="fetch_api">
              <value name="API">
                <shadow type="text">
                  <field name="TEXT">https://</field>
                </shadow>
              </value>
            </block>
          <label text="JSON" web-class="ioLabel"></label>
          <block type="get_json_value">
            <value name="key">
              <block type="text">
                <field name="TEXT">KEY</field>
              </block>
            </value>
          </block>
          <block type="object">
          </block>
          <block type="member">
          </block>
          <block type="controls_forEach_in">
            <field name="VAR" variabletype="">eachKey</field>
          </block>
        </category>
      </xml>
        `}t.toolboxData=Z();function F(){i.config.physics.isDebug=!i.config.physics.isDebug,O.value>0?c.notify({type:"info",position:"center",message:a("enableAfterStop")}):(u.value=!1,Ce(()=>{u.value=!0}))}async function ee(d){O.value=3,t.exitJSCode(),i.mainScene!=null&&(i.mainScene.doDestroy(),v.value=!1,u.value=!1,Ce(()=>{r=d,r.phaser!=null&&(t.playerWindow.init.phaser.width=r.phaser.width,t.playerWindow.init.phaser.height=r.phaser.height,window.SVG_ART_BOARD_WIDTH=r.phaser.width,window.SVG_ART_BOARD_HEIGHT=r.phaser.height),i.sceneSelected=0,i.sceneList=[],i.spriteSelected=0,i.spriteList=[],p.projectObj={},v.value=!0,Ce(async()=>{u.value=!0})}))}function X(d){d.scene.pause(),d.physics.world.isPaused=!0,d.tweens.pauseAll(),d.time.paused=!0,d.input.enabled=!1,d.sound.pauseAll(),d.anims.pauseAll()}function J(d){d.scene.resume(),d.physics.world.isPaused=!1,d.tweens.resumeAll(),d.time.paused=!1,d.input.enabled=!0,d.sound.resumeAll(),d.anims.resumeAll()}let L=null;const O=ye(3);async function q(){if(p.event_mainLeftSelect!=1)c.notify({type:"warning",position:"center",message:"Code mode only"});else{O.value=1;let d=p.projectObj.sceneList[p.projectObj.sceneSelected],f="",x="";for(let M of d.spriteList)f+=M.phaserJSCode,x+=d.id+M.id+`("${d.id}", "${M.id}", true, {});`;let I="";dt&&(I=`
console.log('startScene');
`);let B="var ",T="";for(let M of p.projectObj.globeVarList)B+=T+M,T=",";B+=";",t.updateSyncVarSpriteName();let R=B+f+I+`
  (async () => {

var startScene=async()=>{
  //console.log('allSpriteFnString');
            `+x+`
            }
// debugger;
    startScene();
          })();
`;t.doGameCRInit(),L!=null&&clearInterval(L),L=setInterval(()=>{t.gameCRReflash()},1/60),new Function(R)()}}function H(){L!=null&&clearInterval(L),t.exitJSCode(),ee(p.projectObj)}function G(){if(O.value=2,t.isGamePause){const d=i.mainScene;J(d),t.isGamePause=!1,t.debugLogArray.push("Resume")}else{const d=i.mainScene;X(d),t.isGamePause=!0,t.debugLogArray.push("Pause")}}const ne=ye(!1),le=ye(!0),K=ye(!1),$=ye(!1);function se(){window.location.href=document.location.href.replace("scratchjsplayer","scratchjs")+"&edit=true"}async function ie(){if(b.svgList[b.svgSelected]==null&&(b.svgSelected=0),k.value&&b.svgList[b.svgSelected]!=null){const d=i.mainScene;if(d){let f=i.sceneList[i.sceneSelected],x=i.spriteList[i.spriteSelected],I=b.svgList[b.svgSelected];switch(x.type){case"RT":i.do_initRenderTexture(d,f,x,I);break;default:i.do_loadTextureToSprite(d,f,x,I);break}}}}Se(()=>i.event_phaser_loadImage,()=>{ie()}),Se(()=>b.event_svgUpdate_fromScratPaint,()=>{ie()},{immediate:!0}),Se(()=>p.event_mainLeftSelect,async d=>{switch(d){case 1:await i.theSceneUpdateSvgNameList(i.sceneList[i.sceneSelected]);break;case 2:ne.value||(ne.value=!0),O.value>0&&(t.workspace_to_blockly_of_projectObj(!0),ee(p.projectObj),c.notify({type:"warning",position:"center",message:"Stop playing"})),Ce(()=>{window.dispatchEvent(new Event("resize"))});break}},{immediate:!0}),Se(()=>i.event_spriteUpdate,()=>{if(p.event_mainLeftSelect!=1){let d=i.spriteList[i.spriteSelected];d&&d.type!=null&&d.type=="canvas"&&(p.event_mainLeftSelect=1)}t.blockly_of_projectObj_to_workspace()},{immediate:!0}),Yt(()=>{t.playerWindow.init.phaser.width=Re,t.playerWindow.init.phaser.height=Ve,g.init()});function he(d){switch(d.key){case"Escape":P.value.showBackpackArea==!1&&(P.value.showBackpackArea=h.length);break;case"i":case"I":d.ctrlKey&&(i.dev_multiTouchID++,i.dev_multiTouchID>p.projectObj.total_multiTouch&&(i.dev_multiTouchID=1));break}}ye(!1);function pe(){i.phaserGame.renderer.snapshot(d=>{const f=d.src,x=document.getElementById("phaserScreenshot");x.src=f,x.style.backgroundImage=`url(${f})`;const I=document.createElement("canvas"),B=I.getContext("2d");t.playerWindow.init.phaser.width==Re?(I.width=Re/2,I.height=Ve/2):(I.width=Ve/2,I.height=Re/2),B.drawImage(x,0,0,I.width,I.height);const T=I.toDataURL("image/jpeg"),R=document.createElement("a");R.href=T,R.download=p.projectObj.name+".jpg",R.click()})}et(async()=>{l.value=navigator.language,window.addEventListener("keydown",he,!1),window.addEventListener("blur",w,!1);let d=m.query.pj;m.query.startWait&&(E=parseInt(m.query.startWait)),d!=null&&(K.value=!0),K.value?(r=JSON.parse(JSON.stringify(U)),u.value=!1,m.query.edit!=null&&(K.value=!1),n.get("../scratchjs/"+d,{responseType:"arraybuffer"}).then(async f=>{const B=await(await new JSZip().loadAsync(f.data)).file("data.scratchjs");if(B){const T=await B.async("string");try{r=JSON.parse(T),r.phaser!=null&&(t.playerWindow.init.phaser.width=r.phaser.width,t.playerWindow.init.phaser.height=r.phaser.height,window.SVG_ART_BOARD_WIDTH=r.phaser.width,window.SVG_ART_BOARD_HEIGHT=r.phaser.height),i.sceneSelected=0,i.sceneList=[],i.spriteSelected=0,i.spriteList=[],p.projectObj={},u.value=!0}catch{c.notify({type:"warning",position:"center",message:"Data error"})}}}).catch(f=>{c.notify({type:"warning",position:"center",message:"Maybe Server Disconnected"})})):r=JSON.parse(JSON.stringify(U))}),Zt(()=>{window.removeEventListener("blur",w,!1),window.removeEventListener("keydown",he,!1),L!=null&&clearInterval(L)});let r=null,E=200;function C(){K.value&&Ce(async()=>{p.updateProject(r),i.mainScene.set_total_multiTouch(r.total_multiTouch),await i.theSceneUpdateSvgNameList(r.sceneList[r.sceneSelected]),t.gameNameInit(),O.value=0,setTimeout(()=>{q()},E)})}return(d,f)=>le.value?(Te(),Ke("div",{key:0,class:Be({maincss:!K.value}),title:Oe(Or).jsonSTR({file:"src/layouts/MainLayout.vue"})},[ce("div",{class:Be(["flex center",{mainDown:!K.value}])},[ce("div",{class:Be({mainDownRight:!K.value})},[ce("div",{class:Be(["flex flex-center",{scratchBarPhaser:!$.value&&!K.value,scratchPhaserFullscreen:$.value,style_phaserOnly_mode:K.value}])},[ce("div",{class:Be({scratchBarPhaser800:$.value}),style:it(Q.value)},[ce("div",Xr,[u.value?(Te(),Je(Oe(o),{key:0,ref_key:"phaserRef",ref:k,onMainScene_active:C,init:Oe(t).playerWindow.init,class:Be({scratchPhaser:!$.value&&!K.value,scratchPhaser800:$.value,scratchPhaser100vw:K.value}),style:it([{display:"flex","justify-content":"center","align-items":"center"},Y.value])},null,8,["init","class","style"])):K.value&&!u.value?(Te(),Ke("div",{key:1,class:"flex flex-center scratchPhaser800",style:it(Y.value)},[Ee(ur,{indeterminate:"",rounded:"",size:"50px",color:"lime",class:"q-ma-md"})],4)):Ye("",!0),!K.value&&!$.value?(Te(),Ke(vt,{key:2},[ce("div",Qr,[ce("input",{type:"checkbox",value:Oe(i).config.physics.isDebug,style:{"margin-right":"3px","font-size":"28px"},onClick:F},null,8,Gr),ce("label",Wr,Ge(d.$t("physicsDebug")),1)]),ce("div",{style:{position:"absolute",bottom:"6px",right:"10px",width:"130px","font-size":"10px"},title:d.$t("multiTouch.selectSource")},[ce("div",null,[Ze(Ge(d.$t("multiTouch.ID"))+" ",1),ce("span",Vr,Ge(Oe(i).dev_multiTouchID),1)]),ce("div",null,[Ze(" ,"+Ge(d.$t("total"))+" ",1),Le(ce("select",{"onUpdate:modelValue":f[0]||(f[0]=x=>Oe(p).projectObj.total_multiTouch=x)},f[3]||(f[3]=[tr("<option data-v-221f7662>1</option><option data-v-221f7662>2</option><option data-v-221f7662>3</option><option data-v-221f7662>4</option><option data-v-221f7662>5</option><option data-v-221f7662>6</option><option data-v-221f7662>7</option><option data-v-221f7662>8</option><option data-v-221f7662>9</option><option data-v-221f7662>10</option>",10)]),512),[[er,Oe(p).projectObj.total_multiTouch]]),Ze(" "+Ge(d.$t("multiTouch.touchPointers")),1)])],8,qr)],64)):Ye("",!0),Le(Ee(We,{fab:"",color:"primary",size:"32px",icon:"settings",style:{"z-index":"101",position:"absolute",top:"0px",right:"0px","border-radius":"12px","background-color":"#ffffff30"},onMouseover:N,name:"settings"},null,512),[[Ne,K.value],[zt,z.value,"btn:mygroup:100",{resize:!0}]]),Le((Te(),Je(fr,{style:{position:"absolute",top:"0px",right:"0px",width:"230px","border-bottom-left-radius":"2em","z-index":"101",color:"white","background-color":"rgb(230, 240, 250)"},onMouseleave:S},{default:rr(()=>[ce("div",Kr,[Le(ce("div",{onClick:q,class:"buttonCamera"}," ▶️ ",512),[[Ne,O.value==0]]),O.value==1|O.value==2?(Te(),Ke(vt,{key:0},[Oe(t).isGamePause?(Te(),Je(We,{key:0,onClick:G,name:"play_arrow",color:"green",class:"iMouseOverGray iconBtn"})):(Te(),Je(We,{key:1,onClick:G,name:"pause",color:"blue",class:"iMouseOverGray iconBtn"}))],64)):Ye("",!0),Le(Ee(We,{name:"stop",color:"red",class:"iMouseOverGray iconBtn",onClick:H},null,512),[[Ne,O.value==1|O.value==2]]),Le(ce("div",Yr,null,512),[[Ne,O.value==3]]),ce("div",{onClick:f[1]||(f[1]=x=>pe()),class:"buttonCamera"},"📷️"),f[4]||(f[4]=Ze("     ")),Ee(ar,{dense:"",color:"primary",label:d.$t("edit"),onClick:f[2]||(f[2]=x=>se()),style:{"font-size":"14px"}},null,8,["label"]),Ee(We,{fab:"",color:"primary",size:"24px",style:{"margin-top":"4px","border-radius":"12px","background-color":"#ffffff30"},name:"redo",onClick:ir(S,["prevent","stop"])})])]),_:1})),[[Ne,K.value],[zt,z.value,"card1:mygroup:500",{tween:!0}]])])],6),Le(ce("img",Jr,null,512),[[Ne,!1]])],2)],2)],2),Ee(pr,{onResize:s})],10,Ur)):Ye("",!0)}},$r=Fr(Zr,[["__scopeId","data-v-221f7662"]]),rn=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"}));export{rn as M,pr as Q,ft as a,St as s,Et as w};
