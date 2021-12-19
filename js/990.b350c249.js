"use strict";(self["webpackChunkcom_hotboxtechnology_www"]=self["webpackChunkcom_hotboxtechnology_www"]||[]).push([[990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return c}});var o=n(6587),r=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,a)=>{const s=t.ownerDocument.defaultView,i=t=>t.startX<=50&&e(),u=t=>{const e=t.deltaX,n=e/s.innerWidth;c(n)},h=t=>{const e=t.deltaX,n=s.innerWidth,r=e/n,c=t.velocityX,i=n/2,u=c>=0&&(c>.2||t.deltaX>i),h=u?1-r:r,l=h*n;let w=0;if(l>5){const t=l/Math.abs(c);w=Math.min(t,540)}a(u,r<=0?.01:(0,o.d)(0,r,.9999),w)};return(0,r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:n,onMove:u,onEnd:h})}}}]);
//# sourceMappingURL=990.b350c249.js.map