"use strict";(self["webpackChunkcom_hotboxtechnology_www"]=self["webpackChunkcom_hotboxtechnology_www"]||[]).push([[937],{1937:function(e,o,n){n.r(o),n.d(o,{default:function(){return g}});var s=n(6252),l=n(9963);const t={class:"d-flex flex-column justify-content-end",style:{"min-height":"90vh"}},a=(0,s._)("h2",{class:"mb-5"},"Welcome Jacky",-1),i=(0,s.Uk)("Password"),d={class:"d-flex justify-content-end ion-margin-bottom"},u=(0,s.Uk)("Forgot Password?"),r=(0,s.Uk)("Login"),c=(0,s.Uk)("Switch");function w(e,o,n,w,m,p){const h=(0,s.up)("ion-label"),f=(0,s.up)("ion-input"),k=(0,s.up)("ion-icon"),y=(0,s.up)("ion-button"),g=(0,s.up)("ion-item"),_=(0,s.up)("home-container");return(0,s.wg)(),(0,s.j4)(_,null,{default:(0,s.w5)((()=>[(0,s._)("div",t,[(0,s._)("div",null,[a,(0,s.Wm)(h,{position:"stacked"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(g,{class:"rounded border",lines:"none"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{type:e.showPassword?"text":"password",modelValue:e.password,"onUpdate:modelValue":o[0]||(o[0]=o=>e.password=o)},null,8,["type","modelValue"]),(0,s.Wm)(y,{onClick:o[1]||(o[1]=(0,l.iM)((o=>e.showPassword=!e.showPassword),["prevent"])),color:"dark",fill:"clear",slot:"end"},{default:(0,s.w5)((()=>[e.showPassword?((0,s.wg)(),(0,s.j4)(k,{key:1,slot:"icon-only",icon:e.eyeOutline},null,8,["icon"])):((0,s.wg)(),(0,s.j4)(k,{key:0,slot:"icon-only",icon:e.eyeOffOutline},null,8,["icon"]))])),_:1})])),_:1}),(0,s._)("div",d,[(0,s.Wm)(y,{fill:"clear",size:"small"},{default:(0,s.w5)((()=>[u])),_:1})]),(0,s.Wm)(y,{strong:"",disabled:!e.password||e.password.length<4,onClick:e.handleLogin,class:"mt-4",expand:"block"},{default:(0,s.w5)((()=>[r])),_:1},8,["disabled","onClick"]),(0,s.Wm)(y,{strong:"",onClick:o[2]||(o[2]=o=>e.router.push("/sign-in")),fill:"clear",expand:"block"},{default:(0,s.w5)((()=>[c])),_:1})])])])),_:1})}var m=n(8903),p=n(2119),h=n(6511),f=(0,s.aZ)({components:{},data(){return{password:null,showPassword:!1}},setup(){const e=(0,p.tv)();return{router:e,eyeOffOutline:m.qRO,eyeOutline:m.hII}},methods:{async handleLogin(){let e=await h.G0.create({message:"Please wait..."});e.present(),setTimeout((()=>{this.router.push("/home"),e.dismiss()}),1e3)}}}),k=n(3744);const y=(0,k.Z)(f,[["render",w]]);var g=y}}]);
//# sourceMappingURL=937.fbf37d24.js.map