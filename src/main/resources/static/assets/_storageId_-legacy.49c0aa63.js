!function(){var e=document.createElement("style");e.innerHTML=".expression-item[data-v-0ec8e962] .el-input__wrapper{width:100%}@media (min-width: 640px){.expression-item[data-v-0ec8e962] .el-input__wrapper{width:9rem}}@media (min-width: 768px){.expression-item[data-v-0ec8e962] .el-input__wrapper{width:12rem}}@media (min-width: 1024px){.expression-item[data-v-0ec8e962] .el-input__wrapper{width:16rem}}@media (min-width: 1280px){.expression-item[data-v-0ec8e962] .el-input__wrapper{width:20rem}}.zfile-admin-password-form[data-v-0ec8e962] .z-form-sub-title{max-width:100%}.zfile-admin-password-form .rules-tips[data-v-0ec8e962]{padding:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:700}.zfile-admin-password-form .rules-tips-link[data-v-0ec8e962]{margin-top:.5rem}.zfile-admin-password-form .rules-tips-link[data-v-0ec8e962]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.zfile-admin-password-form .rules-tips-link svg[data-v-0ec8e962]{height:1rem;line-height:1.25rem;vertical-align:text-bottom}\n",document.head.appendChild(e),System.register(["./index-legacy.2de5676a.js","./base-legacy.f53a0713.js","./loading-legacy.36861a78.js","./button-legacy.9af9d3a6.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.606262a9.js","./input-legacy.1469b40d.js","./alert-legacy.9053bd89.js","./SvgIcon-legacy.ed92c0b9.js","./ZFormItem-legacy.ee097f08.js","./admin-storage-legacy.72800729.js","./common-legacy.ded915fb.js","./sortable.esm-legacy.a574004a.js","./request-legacy.e2497089.js","./index-legacy.c7b26f61.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./BadgeCheckIcon-legacy.0ba87333.js","./index-legacy.bb28c642.js","./directive-legacy.1ac5dcca.js","./focus-trap-legacy.e6bab6c4.js","./event-legacy.0bfbd831.js","./index-legacy.61ab75a6.js","./index-legacy.b9e82fd1.js","./scroll-legacy.20579f08.js","./validator-legacy.21431d38.js","./index-legacy.66af6ab6.js","./event-legacy.39ad8904.js"],(function(e){"use strict";var a,t,n,s,l,i,o,r,c,d,u,p,m,f,g,v,w,b,h,y,x,j,k,_,I,V,z,E,C,P,U,L,B,D,H,S,q,T,F,G,M,Z;return{setters:[function(e){a=e.a,t=e.b,n=e.h,s=e.r,l=e.L,i=e.P,o=e.o,r=e.ai,c=e.Q,d=e.u,u=e.e,p=e.p,m=e.t,f=e.f,g=e.y,v=e.F,w=e.U,b=e.V,h=e.J},function(e){y=e.b3,x=e.b4,j=e.m,k=e.aR,_=e.r},function(){},function(){},function(){},function(e){I=e.E},function(){},function(e){V=e.E},function(e){z=e._},function(e){E=e.Z,C=e.a},function(e){P=e.m,U=e.n,L=e.e},function(e){B=e.u,D=e.r},function(e){H=e.S},function(e){S=e.E},function(e){q=e.E},function(e){T=e.b},function(e){F=e._},function(e){G=e.r},function(e){M=e.E},function(e){Z=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function A(e,s){return a(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}let J=s([]),Q=s(!1);function R(e,a){let t=a.params.storageId;const n=()=>{const e=document.querySelector(".z-form-body");H.create(e,{draggable:".expression-item",onEnd:e=>{if(e.oldIndex===e.newIndex)return;const a=J.value.splice(e.oldIndex-1,1)[0];J.value.splice(e.newIndex-1,0,a)}})},s=()=>{J.value.push({description:"表达式 - "+(J.value.length+1),expression:"",password:"",storageId:t})};return{loading:Q,loadPasswordData:()=>{P(t).then((e=>{J.value=e.data,0===J.value.length&&s(),n()}))},passwordList:J,addPasswordItem:s,deletePasswordItem:e=>{J.value.splice(e,1)},savePasswordData:()=>{if(!J.value.find((e=>{if(B.isEmpty(e.description)||B.isEmpty(e.expression)||B.isEmpty(e.password))return S.warning("请检查数据填写是否完整"),!0}))){Q.value=!0;for(let e=0;e<J.value.length;e++){J.value[e].id=e+1}U(t,J.value).then((()=>{q.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:a=>{"confirm"===a&&e.push("/admin/storage-list")}})})).finally((()=>{Q.value=!1}))}}}}const W=e=>(w("data-v-0ec8e962"),e=e(),b(),e),K={class:"flex justify-items-center"},N=W((()=>p("div",{class:"rules-tips"},"Glob 表达式规则：",-1))),O=W((()=>p("div",{class:"rules-tips"},[p("b",null,"单层根目录加密"),h(": 如 "),p("span",{class:"select-all code"},"/"),h(" 表示根路径下需要密码访问.")],-1))),X=W((()=>p("div",{class:"rules-tips"},[p("b",null,"单层子目录加密"),h(": 如 "),p("span",{class:"select-all code"},"/music/*"),h(" 表示根目录下的 music 文件夹需要密码访问, 子文件夹不加密.")],-1))),Y=W((()=>p("div",{class:"rules-tips"},[p("b",null,"嵌套子目录加密"),h(": 如 "),p("span",{class:"select-all code"},"/music/**"),h(" 表示根目录下的 music 文件夹及其所有子文件夹都需要密码访问.")],-1))),$=W((()=>p("div",{class:"rules-tips"},"注：系统匹配到第一个符合的规则就会取密码进行校验，并返回结果，所以请调整好规则顺序，下方规则可进行拖拽排序。",-1))),ee={class:"rules-tips-link"},ae={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},te=W((()=>p("span",null,"参考文章 (Wikipedia)",-1))),ne={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},se=h("参考文章 (阮一峰)"),le={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},ie=h("参考文章 (Github)"),oe={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},re=h("添加更多"),ce=h("保存设置"),de={__name:"[storageId]",setup(e){let w=l(),b=i(),h=w.params.storageId;const P=R(b,w),U=P.loading,B=P.loadPasswordData,H=P.passwordList,S=P.addPasswordItem,q=P.deletePasswordItem,T=P.savePasswordData;o((()=>{B(),J()}));const F=s(),J=()=>{L(h).then((e=>{e.data.type=e.data.type.key,F.value=e.data}))};return(e,s)=>{const l=z,i=r("router-link"),o=V,w=M,b=I,h=_,P=Z;return c((a(),t(C,{model:d(H),class:"zfile-admin-password-form"},{"form-title":u((()=>{var e;return[p("div",K,[n(i,{to:"/admin/storage-list"},{default:u((()=>[n(l,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})])),_:1}),p("span",null,"密码文件夹（"+m(null===(e=F.value)||void 0===e?void 0:e.name)+"）",1)])]})),"form-sub-title":u((()=>[n(o,{closable:!1,type:"info"},{default:u((()=>[N,O,X,Y,$,p("div",ee,[p("a",ae,[n(d(y),{class:"inline mr-1"}),te]),p("a",ne,[n(d(y),{class:"inline mr-1"}),se]),p("a",le,[n(d(y),{class:"inline mr-1"}),ie])])])),_:1})])),footer:u((()=>[n(h,{type:"primary",size:"default",icon:d(G),onClick:d(T)},{default:u((()=>[ce])),_:1},8,["icon","onClick"])])),default:u((()=>[(a(!0),f(v,null,g(d(H),((e,s)=>(a(),t(E,{required:!0,key:e,class:"expression-item"},{default:u((()=>[p("div",oe,[n(b,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:u((()=>[n(w,{"prefix-icon":d(x),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":a=>e.description=a},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])])),_:2},1024),n(w,{"prefix-icon":d(D),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":a=>e.expression=a},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),n(w,{"prefix-icon":d(A),placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":a=>e.password=a},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),n(h,{type:"danger",onClick:e=>d(q)(s),icon:d(j)},null,8,["onClick","icon"])])])),_:2},1024)))),128)),n(E,null,{default:u((()=>[n(h,{type:"primary",size:"default",icon:d(k),onClick:d(S)},{default:u((()=>[re])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])),[[P,d(U)]])}}};"function"==typeof T&&T(de);e("default",F(de,[["__scopeId","data-v-0ec8e962"]]))}}}))}();