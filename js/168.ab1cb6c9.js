"use strict";(self["webpackChunkcom_hotboxtechnology_www"]=self["webpackChunkcom_hotboxtechnology_www"]||[]).push([[168],{3168:function(e,t,o){o.r(t),o.d(t,{startTapClick:function(){return s}});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,o,s,v,f=10*-u,p=0;const h=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,L=()=>void 0!==t&&null!==t.parentElement,w=e=>{f=(0,n.q)(e),T(e)},E=e=>{f=(0,n.q)(e),y(e)},g=e=>{const t=(0,n.q)(e)-u;f<t&&T(e)},b=e=>{const t=(0,n.q)(e)-u;f<t&&y(e)},k=e=>{y(e)},q=()=>{clearTimeout(v),v=void 0,o&&(R(!1),o=void 0)},T=e=>{o||L()||(t=void 0,S(i(e),e))},y=e=>{S(void 0,e)},S=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:s,y:i}=(0,n.p)(t);if(o){if(m.has(o))throw new Error("internal error");o.classList.contains(r)||x(o,s,i),R(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const o=a(e)?0:d;e.classList.remove(r),v=setTimeout((()=>{x(e,s,i),v=void 0}),o)}o=e},x=(e,t,o)=>{p=Date.now(),e.classList.add(r);const n=h&&c(e);n&&n.addRipple&&(C(),s=n.addRipple(t,o))},C=()=>{void 0!==s&&(s.then((e=>e())),s=void 0)},R=e=>{C();const t=o;if(!t)return;const n=l-Date.now()+p;if(e&&n>0&&!a(t)){const e=setTimeout((()=>{t.classList.remove(r),m.delete(t)}),l);m.set(t,e)}else t.classList.remove(r)},_=document;_.addEventListener("ionScrollStart",(e=>{t=e.target,q()})),_.addEventListener("ionScrollEnd",(()=>{t=void 0})),_.addEventListener("ionGestureCaptured",q),_.addEventListener("touchstart",w,!0),_.addEventListener("touchcancel",E,!0),_.addEventListener("touchend",E,!0),_.addEventListener("mousedown",g,!0),_.addEventListener("mouseup",b,!0),_.addEventListener("contextmenu",k,!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.ab1cb6c9.js.map