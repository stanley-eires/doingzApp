"use strict";(self["webpackChunkcom_hotboxtechnology_www"]=self["webpackChunkcom_hotboxtechnology_www"]||[]).push([[541],{3541:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return i},KEYBOARD_DID_OPEN:function(){return o},copyVisualViewport:function(){return k},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return w},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return h},trackViewportChanges:function(){return D}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ionKeyboardDidShow",i="ionKeyboardDidHide",r=150;let s={},a={},u=!1;const d=()=>{s={},a={},u=!1},h=e=>{c(e),e.visualViewport&&(a=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),w()||b(e)?f(e):g(e)&&p(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>f(e,t))),e.addEventListener("keyboardDidHide",(()=>p(e)))},f=(e,t)=>{l(e,t),u=!0},p=e=>{y(e),u=!1},w=()=>{const e=(s.height-a.height)*a.scale;return!u&&s.width===a.width&&e>r},b=e=>u&&!g(e),g=e=>u&&a.height===e.innerHeight,l=(e,t)=>{const n=t?t.keyboardHeight:e.innerHeight-a.height,i=new CustomEvent(o,{detail:{keyboardHeight:n}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(i);e.dispatchEvent(t)},D=e=>{s=Object.assign({},a),a=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.0d67a221.js.map