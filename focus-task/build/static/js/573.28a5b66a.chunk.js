/*! For license information please see 573.28a5b66a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfocus_task=self.webpackChunkfocus_task||[]).push([[573],{5573:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>y,keyboardDidClose:()=>u,keyboardDidOpen:()=>f,keyboardDidResize:()=>g,resetKeyboardAssist:()=>n,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>l});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const n=()=>{a={},d={},r=!1},h=e=>{p(e),e.visualViewport&&(d=y(e.visualViewport),e.visualViewport.onresize=()=>{l(e),f()||g(e)?c(e):u(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>c(e,t))),e.addEventListener("keyboardDidHide",(()=>b(e)))},c=(e,t)=>{w(e,t),r=!0},b=e=>{k(e),r=!1},f=()=>{const e=(a.height-d.height)*d.scale;return!r&&a.width===d.width&&e>150},g=e=>r&&!u(e),u=e=>r&&d.height===e.innerHeight,w=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-d.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},k=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},l=e=>{a=Object.assign({},d),d=y(e.visualViewport)},y=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=573.28a5b66a.chunk.js.map