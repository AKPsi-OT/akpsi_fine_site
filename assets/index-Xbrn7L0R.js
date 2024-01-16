(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function G_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var If={exports:{}},Ko={},Tf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),K_=Symbol.for("react.portal"),q_=Symbol.for("react.fragment"),Y_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),X_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),Z_=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),od=Symbol.iterator;function rv(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nf=Object.assign,Rf={};function br(t,e,n){this.props=t,this.context=e,this.refs=Rf,this.updater=n||kf}br.prototype.isReactComponent={};br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pf(){}Pf.prototype=br.prototype;function Eu(t,e,n){this.props=t,this.context=e,this.refs=Rf,this.updater=n||kf}var Su=Eu.prototype=new Pf;Su.constructor=Eu;Nf(Su,br.prototype);Su.isPureReactComponent=!0;var ld=Array.isArray,Af=Object.prototype.hasOwnProperty,Cu={current:null},xf={key:!0,ref:!0,__self:!0,__source:!0};function Of(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Af.call(e,r)&&!xf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:t,key:s,ref:o,props:i,_owner:Cu.current}}function iv(t,e){return{$$typeof:Zi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Iu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ad=/\/+/g;function Sl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function bs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zi:case K_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sl(o,0):r,ld(i)?(n="",t!=null&&(n=t.replace(ad,"$&/")+"/"),bs(i,e,n,"",function(u){return u})):i!=null&&(Iu(i)&&(i=iv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ad,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ld(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Sl(s,l);o+=bs(s,e,n,a,i)}else if(a=rv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Sl(s,l++),o+=bs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _s(t,e,n){if(t==null)return t;var r=[],i=0;return bs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Us={transition:null},lv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Us,ReactCurrentOwner:Cu};b.Children={map:_s,forEach:function(t,e,n){_s(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _s(t,function(){e++}),e},toArray:function(t){return _s(t,function(e){return e})||[]},only:function(t){if(!Iu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=br;b.Fragment=q_;b.Profiler=Q_;b.PureComponent=Eu;b.StrictMode=Y_;b.Suspense=ev;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Af.call(e,a)&&!xf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:t.type,key:i,ref:s,props:r,_owner:o}};b.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X_,_context:t},t.Consumer=t};b.createElement=Of;b.createFactory=function(t){var e=Of.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Z_,render:t}};b.isValidElement=Iu;b.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:ov}};b.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=Us.transition;Us.transition={};try{t()}finally{Us.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return Pe.current.useCallback(t,e)};b.useContext=function(t){return Pe.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};b.useEffect=function(t,e){return Pe.current.useEffect(t,e)};b.useId=function(){return Pe.current.useId()};b.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Pe.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};b.useRef=function(t){return Pe.current.useRef(t)};b.useState=function(t){return Pe.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Pe.current.useTransition()};b.version="18.2.0";Tf.exports=b;var te=Tf.exports;const Tu=G_(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=te,uv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,hv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Df(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dv.call(e,r)&&!fv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uv,type:t,key:s,ref:o,props:i,_owner:hv.current}}Ko.Fragment=cv;Ko.jsx=Df;Ko.jsxs=Df;If.exports=Ko;var R=If.exports,aa={},Lf={exports:{}},Ve={},Mf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var L=k.length;k.push(D);e:for(;0<L;){var re=L-1>>>1,ce=k[re];if(0<i(ce,D))k[re]=D,k[L]=ce,L=re;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],L=k.pop();if(L!==D){k[0]=L;e:for(var re=0,ce=k.length,ms=ce>>>1;re<ms;){var Sn=2*(re+1)-1,El=k[Sn],Cn=Sn+1,gs=k[Cn];if(0>i(El,L))Cn<ce&&0>i(gs,El)?(k[re]=gs,k[Cn]=L,re=Cn):(k[re]=El,k[Sn]=L,re=Sn);else if(Cn<ce&&0>i(gs,L))k[re]=gs,k[Cn]=L,re=Cn;else break e}}return D}function i(k,D){var L=k.sortIndex-D.sortIndex;return L!==0?L:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function v(k){if(y=!1,m(k),!_)if(n(a)!==null)_=!0,Et(S);else{var D=n(u);D!==null&&Gr(v,D.startTime-k)}}function S(k,D){_=!1,y&&(y=!1,p(N),N=-1),g=!0;var L=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||k&&!Te());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var ce=re(c.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var ms=!0;else{var Sn=n(u);Sn!==null&&Gr(v,Sn.startTime-D),ms=!1}return ms}finally{c=null,h=L,g=!1}}var I=!1,T=null,N=-1,W=5,O=-1;function Te(){return!(t.unstable_now()-O<W)}function vt(){if(T!==null){var k=t.unstable_now();O=k;var D=!0;try{D=T(!0,k)}finally{D?yt():(I=!1,T=null)}}else I=!1}var yt;if(typeof f=="function")yt=function(){f(vt)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,wt=$e.port2;$e.port1.onmessage=vt,yt=function(){wt.postMessage(null)}}else yt=function(){A(vt,0)};function Et(k){T=k,I||(I=!0,yt())}function Gr(k,D){N=A(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Et(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return k()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=h;h=k;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(k,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,k={id:d++,callback:D,priorityLevel:k,startTime:L,expirationTime:ce,sortIndex:-1},L>re?(k.sortIndex=L,e(u,k),n(a)===null&&k===n(u)&&(y?(p(N),N=-1):y=!0,Gr(v,L-re))):(k.sortIndex=ce,e(a,k),_||g||(_=!0,Et(S))),k},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(k){var D=h;return function(){var L=h;h=D;try{return k.apply(this,arguments)}finally{h=L}}}})(Ff);Mf.exports=Ff;var pv=Mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=te,Be=pv;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uf=new Set,Ii={};function Kn(t,e){Ir(t,e),Ir(t+"Capture",e)}function Ir(t,e){for(Ii[t]=e,t=0;t<e.length;t++)Uf.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ud={},cd={};function gv(t){return ua.call(cd,t)?!0:ua.call(ud,t)?!1:mv.test(t)?cd[t]=!0:(ud[t]=!0,!1)}function _v(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vv(t,e,n,r){if(e===null||typeof e>"u"||_v(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Nu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ku,Nu);ve[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ku,Nu);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ku,Nu);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ru(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,n,i,r)&&(n=null),r||i===null?gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),xu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Wf=Symbol.for("react.offscreen"),dd=Symbol.iterator;function Kr(t){return t===null||typeof t!="object"?null:(t=dd&&t[dd]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,Cl;function si(t){if(Cl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+t}var Il=!1;function Tl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?si(t):""}function yv(t){switch(t.tag){case 5:return si(t.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return t=Tl(t.type,!1),t;case 11:return t=Tl(t.type.render,!1),t;case 1:return t=Tl(t.type,!0),t;default:return""}}function fa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zn:return"Fragment";case Jn:return"Portal";case ca:return"Profiler";case Pu:return"StrictMode";case da:return"Suspense";case ha:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jf:return(t.displayName||"Context")+".Consumer";case zf:return(t._context.displayName||"Context")+".Provider";case Au:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xu:return e=t.displayName||null,e!==null?e:fa(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return fa(t(e))}catch{}}return null}function wv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(e);case 8:return e===Pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ev(t){var e=Bf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ys(t){t._valueTracker||(t._valueTracker=Ev(t))}function Vf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pa(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hf(t,e){e=e.checked,e!=null&&Ru(t,"checked",e,!1)}function ma(t,e){Hf(t,e);var n=hn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&ga(t,e.type,hn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ga(t,e,n){(e!=="number"||Zs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oi=Array.isArray;function fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(oi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hn(n)}}function $f(t,e){var n=hn(e.value),r=hn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ws,Kf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ti(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){Sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ci[e]=ci[t]})});function qf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ci.hasOwnProperty(t)&&ci[t]?(""+e).trim():e+"px"}function Yf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cv=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,pr=null,mr=null;function gd(t){if(t=ns(t)){if(typeof Sa!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Jo(e),Sa(t.stateNode,t.type,e))}}function Qf(t){pr?mr?mr.push(t):mr=[t]:pr=t}function Xf(){if(pr){var t=pr,e=mr;if(mr=pr=null,gd(t),e)for(t=0;t<e.length;t++)gd(e[t])}}function Jf(t,e){return t(e)}function Zf(){}var kl=!1;function ep(t,e,n){if(kl)return t(e,n);kl=!0;try{return Jf(t,e,n)}finally{kl=!1,(pr!==null||mr!==null)&&(Zf(),Xf())}}function ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Ca=!1;if(xt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Ca=!1}function Iv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var di=!1,eo=null,to=!1,Ia=null,Tv={onError:function(t){di=!0,eo=t}};function kv(t,e,n,r,i,s,o,l,a){di=!1,eo=null,Iv.apply(Tv,arguments)}function Nv(t,e,n,r,i,s,o,l,a){if(kv.apply(this,arguments),di){if(di){var u=eo;di=!1,eo=null}else throw Error(w(198));to||(to=!0,Ia=u)}}function qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _d(t){if(qn(t)!==t)throw Error(w(188))}function Rv(t){var e=t.alternate;if(!e){if(e=qn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _d(i),t;if(s===r)return _d(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function np(t){return t=Rv(t),t!==null?rp(t):null}function rp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rp(t);if(e!==null)return e;t=t.sibling}return null}var ip=Be.unstable_scheduleCallback,vd=Be.unstable_cancelCallback,Pv=Be.unstable_shouldYield,Av=Be.unstable_requestPaint,ie=Be.unstable_now,xv=Be.unstable_getCurrentPriorityLevel,Du=Be.unstable_ImmediatePriority,sp=Be.unstable_UserBlockingPriority,no=Be.unstable_NormalPriority,Ov=Be.unstable_LowPriority,op=Be.unstable_IdlePriority,qo=null,pt=null;function Dv(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Fv,Lv=Math.log,Mv=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Lv(t)/Mv|0)|0}var Es=64,Ss=4194304;function li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=li(l):(s&=o,s!==0&&(r=li(s)))}else o=n&~i,o!==0?r=li(o):s!==0&&(r=li(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function bv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=bv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lp(){var t=Es;return Es<<=1,!(Es&4194240)&&(Es=64),t}function Nl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function ap(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var up,Mu,cp,dp,hp,ka=!1,Cs=[],Jt=null,Zt=null,en=null,Ni=new Map,Ri=new Map,$t=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(t,e){switch(t){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(e.pointerId)}}function Yr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Mu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wv(t,e,n,r,i){switch(e){case"focusin":return Jt=Yr(Jt,t,e,n,r,i),!0;case"dragenter":return Zt=Yr(Zt,t,e,n,r,i),!0;case"mouseover":return en=Yr(en,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,Yr(Ni.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ri.set(s,Yr(Ri.get(s)||null,t,e,n,r,i)),!0}return!1}function fp(t){var e=Rn(t.target);if(e!==null){var n=qn(e);if(n!==null){if(e=n.tag,e===13){if(e=tp(n),e!==null){t.blockedOn=e,hp(t.priority,function(){cp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Na(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ea=r,n.target.dispatchEvent(r),Ea=null}else return e=ns(n),e!==null&&Mu(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){zs(t)&&n.delete(e)}function Bv(){ka=!1,Jt!==null&&zs(Jt)&&(Jt=null),Zt!==null&&zs(Zt)&&(Zt=null),en!==null&&zs(en)&&(en=null),Ni.forEach(wd),Ri.forEach(wd)}function Qr(t,e){t.blockedOn===e&&(t.blockedOn=null,ka||(ka=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Bv)))}function Pi(t){function e(i){return Qr(i,t)}if(0<Cs.length){Qr(Cs[0],t);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jt!==null&&Qr(Jt,t),Zt!==null&&Qr(Zt,t),en!==null&&Qr(en,t),Ni.forEach(e),Ri.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&$t.shift()}var gr=Ut.ReactCurrentBatchConfig,io=!0;function Vv(t,e,n,r){var i=B,s=gr.transition;gr.transition=null;try{B=1,Fu(t,e,n,r)}finally{B=i,gr.transition=s}}function Hv(t,e,n,r){var i=B,s=gr.transition;gr.transition=null;try{B=4,Fu(t,e,n,r)}finally{B=i,gr.transition=s}}function Fu(t,e,n,r){if(io){var i=Na(t,e,n,r);if(i===null)bl(t,e,r,so,n),yd(t,r);else if(Wv(i,t,e,n,r))r.stopPropagation();else if(yd(t,r),e&4&&-1<jv.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&up(s),s=Na(t,e,n,r),s===null&&bl(t,e,r,so,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bl(t,e,r,null,n)}}var so=null;function Na(t,e,n,r){if(so=null,t=Ou(r),t=Rn(t),t!==null)if(e=qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return so=t,null}function pp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xv()){case Du:return 1;case sp:return 4;case no:case Ov:return 16;case op:return 536870912;default:return 16}default:return 16}}var Qt=null,bu=null,js=null;function mp(){if(js)return js;var t,e=bu,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Ws(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Is(){return!0}function Ed(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Is:Ed,this.isPropagationStopped=Ed,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),e}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=He(Ur),ts=Z({},Ur,{view:0,detail:0}),$v=He(ts),Rl,Pl,Xr,Yo=Z({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Rl=t.screenX-Xr.screenX,Pl=t.screenY-Xr.screenY):Pl=Rl=0,Xr=t),Rl)},movementY:function(t){return"movementY"in t?t.movementY:Pl}}),Sd=He(Yo),Gv=Z({},Yo,{dataTransfer:0}),Kv=He(Gv),qv=Z({},ts,{relatedTarget:0}),Al=He(qv),Yv=Z({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=He(Yv),Xv=Z({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=He(Xv),Zv=Z({},Ur,{data:0}),Cd=He(Zv),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ny[t])?!!e[t]:!1}function zu(){return ry}var iy=Z({},ts,{key:function(t){if(t.key){var e=ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(t){return t.type==="keypress"?Ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=He(iy),oy=Z({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=He(oy),ly=Z({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),ay=He(ly),uy=Z({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=He(uy),dy=Z({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=He(dy),fy=[9,13,27,32],ju=xt&&"CompositionEvent"in window,hi=null;xt&&"documentMode"in document&&(hi=document.documentMode);var py=xt&&"TextEvent"in window&&!hi,gp=xt&&(!ju||hi&&8<hi&&11>=hi),Td=" ",kd=!1;function _p(t,e){switch(t){case"keyup":return fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function my(t,e){switch(t){case"compositionend":return vp(e);case"keypress":return e.which!==32?null:(kd=!0,Td);case"textInput":return t=e.data,t===Td&&kd?null:t;default:return null}}function gy(t,e){if(er)return t==="compositionend"||!ju&&_p(t,e)?(t=mp(),js=bu=Qt=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gp&&e.locale!=="ko"?null:e.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_y[t.type]:e==="textarea"}function yp(t,e,n,r){Qf(r),e=oo(e,"onChange"),0<e.length&&(n=new Uu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Ai=null;function vy(t){Ap(t,0)}function Qo(t){var e=rr(t);if(Vf(e))return t}function yy(t,e){if(t==="change")return e}var wp=!1;if(xt){var xl;if(xt){var Ol="oninput"in document;if(!Ol){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Ol=typeof Rd.oninput=="function"}xl=Ol}else xl=!1;wp=xl&&(!document.documentMode||9<document.documentMode)}function Pd(){fi&&(fi.detachEvent("onpropertychange",Ep),Ai=fi=null)}function Ep(t){if(t.propertyName==="value"&&Qo(Ai)){var e=[];yp(e,Ai,t,Ou(t)),ep(vy,e)}}function wy(t,e,n){t==="focusin"?(Pd(),fi=e,Ai=n,fi.attachEvent("onpropertychange",Ep)):t==="focusout"&&Pd()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Ai)}function Sy(t,e){if(t==="click")return Qo(e)}function Cy(t,e){if(t==="input"||t==="change")return Qo(e)}function Iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:Iy;function xi(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ua.call(e,i)||!ut(t[i],e[i]))return!1}return!0}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,e){var n=Ad(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Sp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cp(){for(var t=window,e=Zs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zs(t.document)}return e}function Wu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=Cp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(r!==null&&Wu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xd(n,s);var o=xd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ky=xt&&"documentMode"in document&&11>=document.documentMode,tr=null,Ra=null,pi=null,Pa=!1;function Od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pa||tr==null||tr!==Zs(r)||(r=tr,"selectionStart"in r&&Wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&xi(pi,r)||(pi=r,r=oo(Ra,"onSelect"),0<r.length&&(e=new Uu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=tr)))}function Ts(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var nr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Dl={},Ip={};xt&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Xo(t){if(Dl[t])return Dl[t];if(!nr[t])return t;var e=nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ip)return Dl[t]=e[n];return t}var Tp=Xo("animationend"),kp=Xo("animationiteration"),Np=Xo("animationstart"),Rp=Xo("transitionend"),Pp=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){Pp.set(t,e),Kn(e,[t])}for(var Ll=0;Ll<Dd.length;Ll++){var Ml=Dd[Ll],Ny=Ml.toLowerCase(),Ry=Ml[0].toUpperCase()+Ml.slice(1);_n(Ny,"on"+Ry)}_n(Tp,"onAnimationEnd");_n(kp,"onAnimationIteration");_n(Np,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Rp,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Ld(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Nv(r,e,void 0,t),t.currentTarget=null}function Ap(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ld(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ld(i,l,u),s=a}}}if(to)throw t=Ia,to=!1,Ia=null,t}function K(t,e){var n=e[La];n===void 0&&(n=e[La]=new Set);var r=t+"__bubble";n.has(r)||(xp(e,t,2,!1),n.add(r))}function Fl(t,e,n){var r=0;e&&(r|=4),xp(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Oi(t){if(!t[ks]){t[ks]=!0,Uf.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||Fl(n,!1,t),Fl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,Fl("selectionchange",!1,e))}}function xp(t,e,n,r){switch(pp(e)){case 1:var i=Vv;break;case 4:i=Hv;break;default:i=Fu}n=i.bind(null,e,n,t),i=void 0,!Ca||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ep(function(){var u=s,d=Ou(n),c=[];e:{var h=Pp.get(t);if(h!==void 0){var g=Uu,_=t;switch(t){case"keypress":if(Ws(n)===0)break e;case"keydown":case"keyup":g=sy;break;case"focusin":_="focus",g=Al;break;case"focusout":_="blur",g=Al;break;case"beforeblur":case"afterblur":g=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ay;break;case Tp:case kp:case Np:g=Qv;break;case Rp:g=cy;break;case"scroll":g=$v;break;case"wheel":g=hy;break;case"copy":case"cut":case"paste":g=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Id}var y=(e&4)!==0,A=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=ki(f,p),v!=null&&y.push(Di(f,v,m)))),A)break;f=f.return}0<y.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ea&&(_=n.relatedTarget||n.fromElement)&&(Rn(_)||_[Ot]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Rn(_):null,_!==null&&(A=qn(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Sd,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Id,v="onPointerLeave",p="onPointerEnter",f="pointer"),A=g==null?h:rr(g),m=_==null?h:rr(_),h=new y(v,f+"leave",g,n,d),h.target=A,h.relatedTarget=m,v=null,Rn(d)===u&&(y=new y(p,f+"enter",_,n,d),y.target=m,y.relatedTarget=A,v=y),A=v,g&&_)t:{for(y=g,p=_,f=0,m=y;m;m=Qn(m))f++;for(m=0,v=p;v;v=Qn(v))m++;for(;0<f-m;)y=Qn(y),f--;for(;0<m-f;)p=Qn(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Qn(y),p=Qn(p)}y=null}else y=null;g!==null&&Md(c,h,g,y,!1),_!==null&&A!==null&&Md(c,A,_,y,!0)}}e:{if(h=u?rr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=yy;else if(Nd(h))if(wp)S=Cy;else{S=Ey;var I=wy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Sy);if(S&&(S=S(t,u))){yp(c,S,n,d);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ga(h,"number",h.value)}switch(I=u?rr(u):window,t){case"focusin":(Nd(I)||I.contentEditable==="true")&&(tr=I,Ra=u,pi=null);break;case"focusout":pi=Ra=tr=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,Od(c,n,d);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Od(c,n,d)}var T;if(ju)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else er?_p(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(gp&&n.locale!=="ko"&&(er||N!=="onCompositionStart"?N==="onCompositionEnd"&&er&&(T=mp()):(Qt=d,bu="value"in Qt?Qt.value:Qt.textContent,er=!0)),I=oo(u,N),0<I.length&&(N=new Cd(N,t,null,n,d),c.push({event:N,listeners:I}),T?N.data=T:(T=vp(n),T!==null&&(N.data=T)))),(T=py?my(t,n):gy(t,n))&&(u=oo(u,"onBeforeInput"),0<u.length&&(d=new Cd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}Ap(c,e)})}function Di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ki(t,n),s!=null&&r.unshift(Di(t,s,i)),s=ki(t,e),s!=null&&r.push(Di(t,s,i))),t=t.return}return r}function Qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Md(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ki(n,s),a!=null&&o.unshift(Di(n,a,l))):i||(a=ki(n,s),a!=null&&o.push(Di(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ay=/\r\n?/g,xy=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(Ay,`
`).replace(xy,"")}function Ns(t,e,n){if(e=Fd(e),Fd(t)!==e&&n)throw Error(w(425))}function lo(){}var Aa=null,xa=null;function Oa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(t){return bd.resolve(null).then(t).catch(Ly)}:Da;function Ly(t){setTimeout(function(){throw t})}function Ul(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(e)}function tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),ht="__reactFiber$"+zr,Li="__reactProps$"+zr,Ot="__reactContainer$"+zr,La="__reactEvents$"+zr,My="__reactListeners$"+zr,Fy="__reactHandles$"+zr;function Rn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ud(t);t!==null;){if(n=t[ht])return n;t=Ud(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[ht]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Jo(t){return t[Li]||null}var Ma=[],ir=-1;function vn(t){return{current:t}}function Y(t){0>ir||(t.current=Ma[ir],Ma[ir]=null,ir--)}function G(t,e){ir++,Ma[ir]=t.current,t.current=e}var fn={},Ce=vn(fn),Le=vn(!1),Fn=fn;function Tr(t,e){var n=t.type.contextTypes;if(!n)return fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function ao(){Y(Le),Y(Ce)}function zd(t,e,n){if(Ce.current!==fn)throw Error(w(168));G(Ce,e),G(Le,n)}function Op(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,wv(t)||"Unknown",i));return Z({},n,r)}function uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fn,Fn=Ce.current,G(Ce,t),G(Le,Le.current),!0}function jd(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Op(t,e,Fn),r.__reactInternalMemoizedMergedChildContext=t,Y(Le),Y(Ce),G(Ce,t)):Y(Le),G(Le,n)}var Ct=null,Zo=!1,zl=!1;function Dp(t){Ct===null?Ct=[t]:Ct.push(t)}function by(t){Zo=!0,Dp(t)}function yn(){if(!zl&&Ct!==null){zl=!0;var t=0,e=B;try{var n=Ct;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ct=null,Zo=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(t+1)),ip(Du,yn),i}finally{B=e,zl=!1}}return null}var sr=[],or=0,co=null,ho=0,Ge=[],Ke=0,bn=null,It=1,Tt="";function In(t,e){sr[or++]=ho,sr[or++]=co,co=t,ho=e}function Lp(t,e,n){Ge[Ke++]=It,Ge[Ke++]=Tt,Ge[Ke++]=bn,bn=t;var r=It;t=Tt;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-ot(e)+i|n<<i|r,Tt=s+t}else It=1<<s|n<<i|r,Tt=t}function Bu(t){t.return!==null&&(In(t,1),Lp(t,1,0))}function Vu(t){for(;t===co;)co=sr[--or],sr[or]=null,ho=sr[--or],sr[or]=null;for(;t===bn;)bn=Ge[--Ke],Ge[Ke]=null,Tt=Ge[--Ke],Ge[Ke]=null,It=Ge[--Ke],Ge[Ke]=null}var je=null,ze=null,Q=!1,nt=null;function Mp(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,ze=tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bn!==null?{id:It,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,ze=null,!0):!1;default:return!1}}function Fa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ba(t){if(Q){var e=ze;if(e){var n=e;if(!Wd(t,e)){if(Fa(t))throw Error(w(418));e=tn(n.nextSibling);var r=je;e&&Wd(t,e)?Mp(r,n):(t.flags=t.flags&-4097|2,Q=!1,je=t)}}else{if(Fa(t))throw Error(w(418));t.flags=t.flags&-4097|2,Q=!1,je=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function Rs(t){if(t!==je)return!1;if(!Q)return Bd(t),Q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oa(t.type,t.memoizedProps)),e&&(e=ze)){if(Fa(t))throw Fp(),Error(w(418));for(;e;)Mp(t,e),e=tn(e.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=je?tn(t.stateNode.nextSibling):null;return!0}function Fp(){for(var t=ze;t;)t=tn(t.nextSibling)}function kr(){ze=je=null,Q=!1}function Hu(t){nt===null?nt=[t]:nt.push(t)}var Uy=Ut.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fo=vn(null),po=null,lr=null,$u=null;function Gu(){$u=lr=po=null}function Ku(t){var e=fo.current;Y(fo),t._currentValue=e}function Ua(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _r(t,e){po=t,$u=lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if($u!==t)if(t={context:t,memoizedValue:e,next:null},lr===null){if(po===null)throw Error(w(308));lr=t,po.dependencies={lanes:0,firstContext:t}}else lr=lr.next=t;return e}var Pn=null;function qu(t){Pn===null?Pn=[t]:Pn.push(t)}function bp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,qu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function Bs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lu(t,n)}}function Vd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mo(t,e,n,r){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=Z({},c,h);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=c}}function Hd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var zp=new bf.Component().refs;function za(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var el={isMounted:function(t){return(t=t._reactInternals)?qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=sn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(lt(e,t,i,r),Bs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=sn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nn(t,s,i),e!==null&&(lt(e,t,i,r),Bs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=sn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=nn(t,i,r),e!==null&&(lt(e,t,r,n),Bs(e,t,r))}};function $d(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xi(n,r)||!xi(i,s):!0}function jp(t,e,n){var r=!1,i=fn,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Me(e)?Fn:Ce.current,r=e.contextTypes,s=(r=r!=null)?Tr(t,i):fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=el,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&el.enqueueReplaceState(e,e.state,null)}function ja(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zp,Yu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Me(e)?Fn:Ce.current,i.context=Tr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(za(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&el.enqueueReplaceState(i,i.state,null),mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===zp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ps(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kd(t){var e=t._init;return e(t._payload)}function Wp(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=on(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,v){return f===null||f.tag!==6?(f=Gl(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,v){var S=m.type;return S===Zn?d(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&Kd(S)===f.type)?(v=i(f,m.props),v.ref=Jr(p,f,m),v.return=p,v):(v=qs(m.type,m.key,m.props,null,p.mode,v),v.ref=Jr(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Kl(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,v,S){return f===null||f.tag!==7?(f=Dn(m,p.mode,v,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gl(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vs:return m=qs(f.type,f.key,f.props,null,p.mode,m),m.ref=Jr(p,null,f),m.return=p,m;case Jn:return f=Kl(f,p.mode,m),f.return=p,f;case Vt:var v=f._init;return c(p,v(f._payload),m)}if(oi(f)||Kr(f))return f=Dn(f,p.mode,m,null),f.return=p,f;Ps(p,f)}return null}function h(p,f,m,v){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vs:return m.key===S?a(p,f,m,v):null;case Jn:return m.key===S?u(p,f,m,v):null;case Vt:return S=m._init,h(p,f,S(m._payload),v)}if(oi(m)||Kr(m))return S!==null?null:d(p,f,m,v,null);Ps(p,m)}return null}function g(p,f,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,l(f,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vs:return p=p.get(v.key===null?m:v.key)||null,a(f,p,v,S);case Jn:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,S);case Vt:var I=v._init;return g(p,f,m,I(v._payload),S)}if(oi(v)||Kr(v))return p=p.get(m)||null,d(f,p,v,S,null);Ps(f,v)}return null}function _(p,f,m,v){for(var S=null,I=null,T=f,N=f=0,W=null;T!==null&&N<m.length;N++){T.index>N?(W=T,T=null):W=T.sibling;var O=h(p,T,m[N],v);if(O===null){T===null&&(T=W);break}t&&T&&O.alternate===null&&e(p,T),f=s(O,f,N),I===null?S=O:I.sibling=O,I=O,T=W}if(N===m.length)return n(p,T),Q&&In(p,N),S;if(T===null){for(;N<m.length;N++)T=c(p,m[N],v),T!==null&&(f=s(T,f,N),I===null?S=T:I.sibling=T,I=T);return Q&&In(p,N),S}for(T=r(p,T);N<m.length;N++)W=g(T,p,N,m[N],v),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?N:W.key),f=s(W,f,N),I===null?S=W:I.sibling=W,I=W);return t&&T.forEach(function(Te){return e(p,Te)}),Q&&In(p,N),S}function y(p,f,m,v){var S=Kr(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var I=S=null,T=f,N=f=0,W=null,O=m.next();T!==null&&!O.done;N++,O=m.next()){T.index>N?(W=T,T=null):W=T.sibling;var Te=h(p,T,O.value,v);if(Te===null){T===null&&(T=W);break}t&&T&&Te.alternate===null&&e(p,T),f=s(Te,f,N),I===null?S=Te:I.sibling=Te,I=Te,T=W}if(O.done)return n(p,T),Q&&In(p,N),S;if(T===null){for(;!O.done;N++,O=m.next())O=c(p,O.value,v),O!==null&&(f=s(O,f,N),I===null?S=O:I.sibling=O,I=O);return Q&&In(p,N),S}for(T=r(p,T);!O.done;N++,O=m.next())O=g(T,p,N,O.value,v),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?N:O.key),f=s(O,f,N),I===null?S=O:I.sibling=O,I=O);return t&&T.forEach(function(vt){return e(p,vt)}),Q&&In(p,N),S}function A(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vs:e:{for(var S=m.key,I=f;I!==null;){if(I.key===S){if(S=m.type,S===Zn){if(I.tag===7){n(p,I.sibling),f=i(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&Kd(S)===I.type){n(p,I.sibling),f=i(I,m.props),f.ref=Jr(p,I,m),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===Zn?(f=Dn(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=qs(m.type,m.key,m.props,null,p.mode,v),v.ref=Jr(p,f,m),v.return=p,p=v)}return o(p);case Jn:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Kl(m,p.mode,v),f.return=p,p=f}return o(p);case Vt:return I=m._init,A(p,f,I(m._payload),v)}if(oi(m))return _(p,f,m,v);if(Kr(m))return y(p,f,m,v);Ps(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Gl(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return A}var Nr=Wp(!0),Bp=Wp(!1),rs={},mt=vn(rs),Mi=vn(rs),Fi=vn(rs);function An(t){if(t===rs)throw Error(w(174));return t}function Qu(t,e){switch(G(Fi,e),G(Mi,t),G(mt,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=va(e,t)}Y(mt),G(mt,e)}function Rr(){Y(mt),Y(Mi),Y(Fi)}function Vp(t){An(Fi.current);var e=An(mt.current),n=va(e,t.type);e!==n&&(G(Mi,t),G(mt,n))}function Xu(t){Mi.current===t&&(Y(mt),Y(Mi))}var X=vn(0);function go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function Ju(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var Vs=Ut.ReactCurrentDispatcher,Wl=Ut.ReactCurrentBatchConfig,Un=0,J=null,oe=null,he=null,_o=!1,mi=!1,bi=0,zy=0;function ye(){throw Error(w(321))}function Zu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function ec(t,e,n,r,i,s){if(Un=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vs.current=t===null||t.memoizedState===null?Vy:Hy,t=n(r,i),mi){s=0;do{if(mi=!1,bi=0,25<=s)throw Error(w(301));s+=1,he=oe=null,e.updateQueue=null,Vs.current=$y,t=n(r,i)}while(mi)}if(Vs.current=vo,e=oe!==null&&oe.next!==null,Un=0,he=oe=J=null,_o=!1,e)throw Error(w(300));return t}function tc(){var t=bi!==0;return bi=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?J.memoizedState=he=t:he=he.next=t,he}function Xe(){if(oe===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=he===null?J.memoizedState:he.next;if(e!==null)he=e,oe=t;else{if(t===null)throw Error(w(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},he===null?J.memoizedState=he=t:he=he.next=t}return he}function Ui(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Un&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,J.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ut(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hp(){}function $p(t,e){var n=J,r=Xe(),i=e(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,nc(qp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,zi(9,Kp.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(w(349));Un&30||Gp(n,e,i)}return i}function Gp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kp(t,e,n,r){e.value=n,e.getSnapshot=r,Yp(e)&&Qp(t)}function qp(t,e,n){return n(function(){Yp(e)&&Qp(t)})}function Yp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function Qp(t){var e=Dt(t,1);e!==null&&lt(e,t,1,-1)}function qd(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},e.queue=t,t=t.dispatch=By.bind(null,J,t),[e.memoizedState,t]}function zi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xp(){return Xe().memoizedState}function Hs(t,e,n,r){var i=dt();J.flags|=t,i.memoizedState=zi(1|e,n,void 0,r===void 0?null:r)}function tl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&Zu(r,o.deps)){i.memoizedState=zi(e,n,s,r);return}}J.flags|=t,i.memoizedState=zi(1|e,n,s,r)}function Yd(t,e){return Hs(8390656,8,t,e)}function nc(t,e){return tl(2048,8,t,e)}function Jp(t,e){return tl(4,2,t,e)}function Zp(t,e){return tl(4,4,t,e)}function em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tm(t,e,n){return n=n!=null?n.concat([t]):null,tl(4,4,em.bind(null,e,t),n)}function rc(){}function nm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function im(t,e,n){return Un&21?(ut(n,e)||(n=lp(),J.lanes|=n,zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function jy(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Wl.transition;Wl.transition={};try{t(!1),e()}finally{B=n,Wl.transition=r}}function sm(){return Xe().memoizedState}function Wy(t,e,n){var r=sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},om(t))lm(e,n);else if(n=bp(t,e,n,r),n!==null){var i=Re();lt(n,t,r,i),am(n,e,r)}}function By(t,e,n){var r=sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(t))lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=e.interleaved;a===null?(i.next=i,qu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=bp(t,e,i,r),n!==null&&(i=Re(),lt(n,t,r,i),am(n,e,r))}}function om(t){var e=t.alternate;return t===J||e!==null&&e===J}function lm(t,e){mi=_o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function am(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lu(t,n)}}var vo={readContext:Qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Vy={readContext:Qe,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:Yd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wy.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:qd,useDebugValue:rc,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=qd(!1),e=t[0];return t=jy.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=dt();if(Q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),pe===null)throw Error(w(349));Un&30||Gp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yd(qp.bind(null,r,s,t),[t]),r.flags|=2048,zi(9,Kp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dt(),e=pe.identifierPrefix;if(Q){var n=Tt,r=It;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hy={readContext:Qe,useCallback:nm,useContext:Qe,useEffect:nc,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rm,useReducer:Bl,useRef:Xp,useState:function(){return Bl(Ui)},useDebugValue:rc,useDeferredValue:function(t){var e=Xe();return im(e,oe.memoizedState,t)},useTransition:function(){var t=Bl(Ui)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Hp,useSyncExternalStore:$p,useId:sm,unstable_isNewReconciler:!1},$y={readContext:Qe,useCallback:nm,useContext:Qe,useEffect:nc,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rm,useReducer:Vl,useRef:Xp,useState:function(){return Vl(Ui)},useDebugValue:rc,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:im(e,oe.memoizedState,t)},useTransition:function(){var t=Vl(Ui)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Hp,useSyncExternalStore:$p,useId:sm,unstable_isNewReconciler:!1};function Pr(t,e){try{var n="",r=e;do n+=yv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function um(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wo||(wo=!0,Xa=r),Wa(t,e)},n}function cm(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wa(t,e),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Gy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=o0.bind(null,t,e,n),e.then(t,t))}function Xd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,nn(n,e,1))),n.lanes|=1),t)}var Ky=Ut.ReactCurrentOwner,Oe=!1;function ke(t,e,n,r){e.child=t===null?Bp(e,null,n,r):Nr(e,t.child,n,r)}function Zd(t,e,n,r,i){n=n.render;var s=e.ref;return _r(e,i),r=ec(t,e,n,r,s,i),n=tc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(Q&&n&&Bu(e),e.flags|=1,ke(t,e,r,i),e.child)}function eh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dm(t,e,s,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=on(s,r),t.ref=e.ref,t.return=e,e.child=t}function dm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Ba(t,e,n,r,i)}function hm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ur,Ue),Ue|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(ur,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(ur,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(ur,Ue),Ue|=r;return ke(t,e,i,n),e.child}function fm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ba(t,e,n,r,i){var s=Me(n)?Fn:Ce.current;return s=Tr(e,s),_r(e,i),n=ec(t,e,n,r,s,i),r=tc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(Q&&r&&Bu(e),e.flags|=1,ke(t,e,n,i),e.child)}function th(t,e,n,r,i){if(Me(n)){var s=!0;uo(e)}else s=!1;if(_r(e,i),e.stateNode===null)$s(t,e),jp(e,n,r),ja(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Me(n)?Fn:Ce.current,u=Tr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Gd(e,o,r,u),Ht=!1;var h=e.memoizedState;o.state=h,mo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Le.current||Ht?(typeof d=="function"&&(za(e,n,d,r),a=e.memoizedState),(l=Ht||$d(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Up(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Me(n)?Fn:Ce.current,a=Tr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Gd(e,o,r,a),Ht=!1,h=e.memoizedState,o.state=h,mo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Le.current||Ht?(typeof g=="function"&&(za(e,n,g,r),_=e.memoizedState),(u=Ht||$d(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Va(t,e,n,r,s,i)}function Va(t,e,n,r,i,s){fm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jd(e,n,!1),Lt(t,e,s);r=e.stateNode,Ky.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&jd(e,n,!0),e.child}function pm(t){var e=t.stateNode;e.pendingContext?zd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zd(t,e.context,!1),Qu(t,e.containerInfo)}function nh(t,e,n,r,i){return kr(),Hu(i),e.flags|=256,ke(t,e,n,r),e.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function $a(t){return{baseLanes:t,cachePool:null,transitions:null}}function mm(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return ba(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=il(o,r,0,null),t=Dn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$a(n),e.memoizedState=Ha,t):ic(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=on(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=on(l,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$a(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ha,r}return s=t.child,t=s.sibling,r=on(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ic(t,e){return e=il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function As(t,e,n,r){return r!==null&&Hu(r),Nr(e,t.child,null,n),t=ic(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(w(422))),As(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=il({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Nr(e,t.child,null,o),e.child.memoizedState=$a(o),e.memoizedState=Ha,s);if(!(e.mode&1))return As(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Hl(s,r,void 0),As(t,e,o,r)}if(l=(o&t.childLanes)!==0,Oe||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),lt(r,t,i,-1))}return cc(),r=Hl(Error(w(421))),As(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=l0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=tn(i.nextSibling),je=e,Q=!0,nt=null,t!==null&&(Ge[Ke++]=It,Ge[Ke++]=Tt,Ge[Ke++]=bn,It=t.id,Tt=t.overflow,bn=e),e=ic(e,r.children),e.flags|=4096,e)}function rh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ua(t.return,e,n)}function $l(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rh(t,n,e);else if(t.tag===19)rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=on(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=on(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yy(t,e,n){switch(e.tag){case 3:pm(e),kr();break;case 5:Vp(e);break;case 1:Me(e.type)&&uo(e);break;case 4:Qu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?mm(t,e,n):(G(X,X.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,hm(t,e,n)}return Lt(t,e,n)}var _m,Ga,vm,ym;_m=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};vm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(mt.current);var s=null;switch(n){case"input":i=pa(t,i),r=pa(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=_a(t,i),r=_a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lo)}ya(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ym=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zr(t,e){if(!Q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qy(t,e,n){var r=e.pendingProps;switch(Vu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Me(e.type)&&ao(),we(e),null;case 3:return r=e.stateNode,Rr(),Y(Le),Y(Ce),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(eu(nt),nt=null))),Ga(t,e),we(e),null;case 5:Xu(e);var i=An(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)vm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return we(e),null}if(t=An(mt.current),Rs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[Li]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)K(ai[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":hd(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":pd(r,s),K("invalid",r)}ya(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",""+l]):Ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":ys(r),fd(r,s,!0);break;case"textarea":ys(r),md(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[Li]=r,_m(t,e,!1,!1),e.stateNode=t;e:{switch(o=wa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)K(ai[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":hd(t,r),i=pa(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),K("invalid",t);break;case"textarea":pd(t,r),i=_a(t,r),K("invalid",t);break;default:i=r}ya(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Yf(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kf(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ti(t,a):typeof a=="number"&&Ti(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ii.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&Ru(t,s,a,o))}switch(n){case"input":ys(t),fd(t,r,!1);break;case"textarea":ys(t),md(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)ym(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=An(Fi.current),An(mt.current),Rs(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:Ns(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ns(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return we(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Q&&ze!==null&&e.mode&1&&!(e.flags&128))Fp(),kr(),e.flags|=98560,s=!1;else if(s=Rs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[ht]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else nt!==null&&(eu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):cc())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return Rr(),Ga(t,e),t===null&&Oi(e.stateNode.containerInfo),we(e),null;case 10:return Ku(e.type._context),we(e),null;case 17:return Me(e.type)&&ao(),we(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zr(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=go(t),o!==null){for(e.flags|=128,Zr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Ar&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304)}else{if(!r)if(t=go(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Q)return we(e),null}else 2*ie()-s.renderingStartTime>Ar&&n!==1073741824&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return uc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Xy(t,e){switch(Vu(e),e.tag){case 1:return Me(e.type)&&ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rr(),Y(Le),Y(Ce),Ju(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xu(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return Rr(),null;case 10:return Ku(e.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var xs=!1,Ee=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,C=null;function ar(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function Ka(t,e,n){try{n()}catch(r){ee(t,e,r)}}var ih=!1;function Zy(t,e){if(Aa=io,t=Cp(),Wu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xa={focusedElem:t,selectionRange:n},io=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,A=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){ee(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=ih,ih=!1,_}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ka(e,n,s)}i=i.next}while(i!==r)}}function nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wm(t){var e=t.alternate;e!==null&&(t.alternate=null,wm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[Li],delete e[La],delete e[My],delete e[Fy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Em(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Em(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lo));else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}function Qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qa(t,e,n),t=t.sibling;t!==null;)Qa(t,e,n),t=t.sibling}var me=null,tt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Sm(t,e,n),n=n.sibling}function Sm(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:Ee||ar(n,e);case 6:var r=me,i=tt;me=null,Wt(t,e,n),me=r,tt=i,me!==null&&(tt?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(tt?(t=me,n=n.stateNode,t.nodeType===8?Ul(t.parentNode,n):t.nodeType===1&&Ul(t,n),Pi(t)):Ul(me,n.stateNode));break;case 4:r=me,i=tt,me=n.stateNode.containerInfo,tt=!0,Wt(t,e,n),me=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ka(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!Ee&&(ar(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Wt(t,e,n),Ee=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jy),e.forEach(function(r){var i=a0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,tt=!1;break e;case 3:me=l.stateNode.containerInfo,tt=!0;break e;case 4:me=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(me===null)throw Error(w(160));Sm(s,o,i),me=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cm(e,t),e=e.sibling}function Cm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),ct(t),r&4){try{gi(3,t,t.return),nl(3,t)}catch(y){ee(t,t.return,y)}try{gi(5,t,t.return)}catch(y){ee(t,t.return,y)}}break;case 1:Ze(e,t),ct(t),r&512&&n!==null&&ar(n,n.return);break;case 5:if(Ze(e,t),ct(t),r&512&&n!==null&&ar(n,n.return),t.flags&32){var i=t.stateNode;try{Ti(i,"")}catch(y){ee(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hf(i,s),wa(l,o);var u=wa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Yf(i,c):d==="dangerouslySetInnerHTML"?Kf(i,c):d==="children"?Ti(i,c):Ru(i,d,c,u)}switch(l){case"input":ma(i,s);break;case"textarea":$f(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?fr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?fr(i,!!s.multiple,s.defaultValue,!0):fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Li]=s}catch(y){ee(t,t.return,y)}}break;case 6:if(Ze(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ee(t,t.return,y)}}break;case 3:if(Ze(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(e.containerInfo)}catch(y){ee(t,t.return,y)}break;case 4:Ze(e,t),ct(t);break;case 13:Ze(e,t),ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=ie())),r&4&&oh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||d,Ze(e,t),Ee=u):Ze(e,t),ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(C=t,d=t.child;d!==null;){for(c=C=d;C!==null;){switch(h=C,g=h.child,h.tag){case 0:case 11:case 14:case 15:gi(4,h,h.return);break;case 1:ar(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:ar(h,h.return);break;case 22:if(h.memoizedState!==null){ah(c);continue}}g!==null?(g.return=h,C=g):ah(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=qf("display",o))}catch(y){ee(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ee(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),ct(t),r&4&&oh(t);break;case 21:break;default:Ze(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Em(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var s=sh(t);Qa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sh(t);Ya(t,l,o);break;default:throw Error(w(161))}}catch(a){ee(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e0(t,e,n){C=t,Im(t)}function Im(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=xs;var u=Ee;if(xs=o,(Ee=a)&&!u)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?uh(i):a!==null?(a.return=o,C=a):uh(i);for(;s!==null;)C=s,Im(s),s=s.sibling;C=i,xs=l,Ee=u}lh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):lh(t)}}function lh(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Pi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||e.flags&512&&qa(e)}catch(h){ee(e,e.return,h)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function ah(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function uh(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nl(4,e)}catch(a){ee(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ee(e,i,a)}}var s=e.return;try{qa(e)}catch(a){ee(e,s,a)}break;case 5:var o=e.return;try{qa(e)}catch(a){ee(e,o,a)}}}catch(a){ee(e,e.return,a)}if(e===t){C=null;break}var l=e.sibling;if(l!==null){l.return=e.return,C=l;break}C=e.return}}var t0=Math.ceil,yo=Ut.ReactCurrentDispatcher,sc=Ut.ReactCurrentOwner,Ye=Ut.ReactCurrentBatchConfig,z=0,pe=null,se=null,_e=0,Ue=0,ur=vn(0),ue=0,ji=null,zn=0,rl=0,oc=0,_i=null,xe=null,lc=0,Ar=1/0,St=null,wo=!1,Xa=null,rn=null,Os=!1,Xt=null,Eo=0,vi=0,Ja=null,Gs=-1,Ks=0;function Re(){return z&6?ie():Gs!==-1?Gs:Gs=ie()}function sn(t){return t.mode&1?z&2&&_e!==0?_e&-_e:Uy.transition!==null?(Ks===0&&(Ks=lp()),Ks):(t=B,t!==0||(t=window.event,t=t===void 0?16:pp(t.type)),t):1}function lt(t,e,n,r){if(50<vi)throw vi=0,Ja=null,Error(w(185));es(t,n,r),(!(z&2)||t!==pe)&&(t===pe&&(!(z&2)&&(rl|=n),ue===4&&Gt(t,_e)),Fe(t,r),n===1&&z===0&&!(e.mode&1)&&(Ar=ie()+500,Zo&&yn()))}function Fe(t,e){var n=t.callbackNode;Uv(t,e);var r=ro(t,t===pe?_e:0);if(r===0)n!==null&&vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vd(n),e===1)t.tag===0?by(ch.bind(null,t)):Dp(ch.bind(null,t)),Dy(function(){!(z&6)&&yn()}),n=null;else{switch(ap(r)){case 1:n=Du;break;case 4:n=sp;break;case 16:n=no;break;case 536870912:n=op;break;default:n=no}n=Om(n,Tm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tm(t,e){if(Gs=-1,Ks=0,z&6)throw Error(w(327));var n=t.callbackNode;if(vr()&&t.callbackNode!==n)return null;var r=ro(t,t===pe?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=So(t,r);else{e=r;var i=z;z|=2;var s=Nm();(pe!==t||_e!==e)&&(St=null,Ar=ie()+500,On(t,e));do try{i0();break}catch(l){km(t,l)}while(!0);Gu(),yo.current=s,z=i,se!==null?e=0:(pe=null,_e=0,e=ue)}if(e!==0){if(e===2&&(i=Ta(t),i!==0&&(r=i,e=Za(t,i))),e===1)throw n=ji,On(t,0),Gt(t,r),Fe(t,ie()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!n0(i)&&(e=So(t,r),e===2&&(s=Ta(t),s!==0&&(r=s,e=Za(t,s))),e===1))throw n=ji,On(t,0),Gt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Tn(t,xe,St);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=lc+500-ie(),10<e)){if(ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(Tn.bind(null,t,xe,St),e);break}Tn(t,xe,St);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t0(r/1960))-r,10<r){t.timeoutHandle=Da(Tn.bind(null,t,xe,St),r);break}Tn(t,xe,St);break;case 5:Tn(t,xe,St);break;default:throw Error(w(329))}}}return Fe(t,ie()),t.callbackNode===n?Tm.bind(null,t):null}function Za(t,e){var n=_i;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=So(t,e),t!==2&&(e=xe,xe=n,e!==null&&eu(e)),t}function eu(t){xe===null?xe=t:xe.push.apply(xe,t)}function n0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~oc,e&=~rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function ch(t){if(z&6)throw Error(w(327));vr();var e=ro(t,0);if(!(e&1))return Fe(t,ie()),null;var n=So(t,e);if(t.tag!==0&&n===2){var r=Ta(t);r!==0&&(e=r,n=Za(t,r))}if(n===1)throw n=ji,On(t,0),Gt(t,e),Fe(t,ie()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tn(t,xe,St),Fe(t,ie()),null}function ac(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Ar=ie()+500,Zo&&yn())}}function jn(t){Xt!==null&&Xt.tag===0&&!(z&6)&&vr();var e=z;z|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,t)return t()}finally{B=r,Ye.transition=n,z=e,!(z&6)&&yn()}}function uc(){Ue=ur.current,Y(ur)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Oy(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Rr(),Y(Le),Y(Ce),Ju();break;case 5:Xu(r);break;case 4:Rr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Ku(r.type._context);break;case 22:case 23:uc()}n=n.return}if(pe=t,se=t=on(t.current,null),_e=Ue=e,ue=0,ji=null,oc=rl=zn=0,xe=_i=null,Pn!==null){for(e=0;e<Pn.length;e++)if(n=Pn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pn=null}return t}function km(t,e){do{var n=se;try{if(Gu(),Vs.current=vo,_o){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(Un=0,he=oe=J=null,mi=!1,bi=0,sc.current=null,n===null||n.return===null){ue=1,ji=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Xd(o);if(g!==null){g.flags&=-257,Jd(g,o,l,s,e),g.mode&1&&Qd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Qd(s,u,e),cc();break e}a=Error(w(426))}}else if(Q&&l.mode&1){var A=Xd(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Jd(A,o,l,s,e),Hu(Pr(a,l));break e}}s=a=Pr(a,l),ue!==4&&(ue=2),_i===null?_i=[s]:_i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=um(s,a,e);Vd(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rn===null||!rn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=cm(s,l,e);Vd(s,v);break e}}s=s.return}while(s!==null)}Pm(n)}catch(S){e=S,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Nm(){var t=yo.current;return yo.current=vo,t===null?vo:t}function cc(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(zn&268435455)&&!(rl&268435455)||Gt(pe,_e)}function So(t,e){var n=z;z|=2;var r=Nm();(pe!==t||_e!==e)&&(St=null,On(t,e));do try{r0();break}catch(i){km(t,i)}while(!0);if(Gu(),z=n,yo.current=r,se!==null)throw Error(w(261));return pe=null,_e=0,ue}function r0(){for(;se!==null;)Rm(se)}function i0(){for(;se!==null&&!Pv();)Rm(se)}function Rm(t){var e=xm(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?Pm(t):se=e,sc.current=null}function Pm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xy(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=Qy(n,e,Ue),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function Tn(t,e,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,s0(t,e,n,r)}finally{Ye.transition=i,B=r}return null}function s0(t,e,n,r){do vr();while(Xt!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zv(t,s),t===pe&&(se=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Om(no,function(){return vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=B;B=1;var l=z;z|=4,sc.current=null,Zy(t,n),Cm(n,t),Ty(xa),io=!!Aa,xa=Aa=null,t.current=n,e0(n),Av(),z=l,B=o,Ye.transition=s}else t.current=n;if(Os&&(Os=!1,Xt=t,Eo=i),s=t.pendingLanes,s===0&&(rn=null),Dv(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,t=Xa,Xa=null,t;return Eo&1&&t.tag!==0&&vr(),s=t.pendingLanes,s&1?t===Ja?vi++:(vi=0,Ja=t):vi=0,yn(),null}function vr(){if(Xt!==null){var t=ap(Eo),e=Ye.transition,n=B;try{if(Ye.transition=null,B=16>t?16:t,Xt===null)var r=!1;else{if(t=Xt,Xt=null,Eo=0,z&6)throw Error(w(331));var i=z;for(z|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(C=u;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:gi(8,d,s)}var c=d.child;if(c!==null)c.return=d,C=c;else for(;C!==null;){d=C;var h=d.sibling,g=d.return;if(wm(d),d===u){C=null;break}if(h!==null){h.return=g,C=h;break}C=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var f=t.current;for(C=f;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=f;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(S){ee(l,l.return,S)}if(l===o){C=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,C=v;break e}C=l.return}}if(z=i,yn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(qo,t)}catch{}r=!0}return r}finally{B=n,Ye.transition=e}}return!1}function dh(t,e,n){e=Pr(n,e),e=um(t,e,1),t=nn(t,e,1),e=Re(),t!==null&&(es(t,1,e),Fe(t,e))}function ee(t,e,n){if(t.tag===3)dh(t,t,n);else for(;e!==null;){if(e.tag===3){dh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){t=Pr(n,t),t=cm(e,t,1),e=nn(e,t,1),t=Re(),e!==null&&(es(e,1,t),Fe(e,t));break}}e=e.return}}function o0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(_e&n)===n&&(ue===4||ue===3&&(_e&130023424)===_e&&500>ie()-lc?On(t,0):oc|=n),Fe(t,e)}function Am(t,e){e===0&&(t.mode&1?(e=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):e=1);var n=Re();t=Dt(t,e),t!==null&&(es(t,e,n),Fe(t,n))}function l0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Am(t,n)}function a0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Am(t,n)}var xm;xm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,Yy(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,Q&&e.flags&1048576&&Lp(e,ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Tr(e,Ce.current);_r(e,n),i=ec(null,e,r,t,i,n);var s=tc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,uo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yu(e),i.updater=el,e.stateNode=i,i._reactInternals=e,ja(e,r,t,n),e=Va(null,e,r,!0,s,n)):(e.tag=0,Q&&s&&Bu(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=c0(r),t=et(r,t),i){case 0:e=Ba(null,e,r,t,n);break e;case 1:e=th(null,e,r,t,n);break e;case 11:e=Zd(null,e,r,t,n);break e;case 14:e=eh(null,e,r,et(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ba(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),th(t,e,r,i,n);case 3:e:{if(pm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Up(t,e),mo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pr(Error(w(423)),e),e=nh(t,e,r,n,i);break e}else if(r!==i){i=Pr(Error(w(424)),e),e=nh(t,e,r,n,i);break e}else for(ze=tn(e.stateNode.containerInfo.firstChild),je=e,Q=!0,nt=null,n=Bp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){e=Lt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Vp(e),t===null&&ba(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(e.flags|=32),fm(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&ba(e),null;case 13:return mm(t,e,n);case 4:return Qu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Nr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Zd(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(fo,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Le.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ua(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ua(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_r(e,n),i=Qe(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),eh(t,e,r,i,n);case 15:return dm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),$s(t,e),e.tag=1,Me(r)?(t=!0,uo(e)):t=!1,_r(e,n),jp(e,r,i),ja(e,r,i,n),Va(null,e,r,!0,t,n);case 19:return gm(t,e,n);case 22:return hm(t,e,n)}throw Error(w(156,e.tag))};function Om(t,e){return ip(t,e)}function u0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new u0(t,e,n,r)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c0(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Au)return 11;if(t===xu)return 14}return 2}function on(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zn:return Dn(n.children,i,s,e);case Pu:o=8,i|=8;break;case ca:return t=qe(12,n,e,i|2),t.elementType=ca,t.lanes=s,t;case da:return t=qe(13,n,e,i),t.elementType=da,t.lanes=s,t;case ha:return t=qe(19,n,e,i),t.elementType=ha,t.lanes=s,t;case Wf:return il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zf:o=10;break e;case jf:o=9;break e;case Au:o=11;break e;case xu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function il(t,e,n,r){return t=qe(22,t,r,e),t.elementType=Wf,t.lanes=n,t.stateNode={isHidden:!1},t}function Gl(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Kl(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hc(t,e,n,r,i,s,o,l,a){return t=new d0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(s),t}function h0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dm(t){if(!t)return fn;t=t._reactInternals;e:{if(qn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Me(n))return Op(t,n,e)}return e}function Lm(t,e,n,r,i,s,o,l,a){return t=hc(n,r,!0,t,i,s,o,l,a),t.context=Dm(null),n=t.current,r=Re(),i=sn(n),s=Pt(r,i),s.callback=e??null,nn(n,s,i),t.current.lanes=i,es(t,i,r),Fe(t,r),t}function sl(t,e,n,r){var i=e.current,s=Re(),o=sn(i);return n=Dm(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nn(i,e,o),t!==null&&(lt(t,i,o,s),Bs(t,i,o)),o}function Co(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fc(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function f0(){return null}var Mm=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}ol.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));sl(t,e,null,null)};ol.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){sl(null,t,null,null)}),e[Ot]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&fp(t)}};function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fh(){}function p0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Co(o);s.call(u)}}var o=Lm(e,r,t,0,null,!1,!1,"",fh);return t._reactRootContainer=o,t[Ot]=o.current,Oi(t.nodeType===8?t.parentNode:t),jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Co(a);l.call(u)}}var a=hc(t,0,!1,null,null,!1,!1,"",fh);return t._reactRootContainer=a,t[Ot]=a.current,Oi(t.nodeType===8?t.parentNode:t),jn(function(){sl(e,a,n,r)}),a}function al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Co(o);l.call(a)}}sl(e,o,t,i)}else o=p0(n,e,t,i,r);return Co(o)}up=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=li(e.pendingLanes);n!==0&&(Lu(e,n|1),Fe(e,ie()),!(z&6)&&(Ar=ie()+500,yn()))}break;case 13:jn(function(){var r=Dt(t,1);if(r!==null){var i=Re();lt(r,t,1,i)}}),fc(t,1)}};Mu=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=Re();lt(e,t,134217728,n)}fc(t,134217728)}};cp=function(t){if(t.tag===13){var e=sn(t),n=Dt(t,e);if(n!==null){var r=Re();lt(n,t,e,r)}fc(t,e)}};dp=function(){return B};hp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Sa=function(t,e,n){switch(e){case"input":if(ma(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jo(r);if(!i)throw Error(w(90));Vf(r),ma(r,i)}}}break;case"textarea":$f(t,n);break;case"select":e=n.value,e!=null&&fr(t,!!n.multiple,e,!1)}};Jf=ac;Zf=jn;var m0={usingClientEntryPoint:!1,Events:[ns,rr,Jo,Qf,Xf,ac]},ei={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g0={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=np(t),t===null?null:t.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||f0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{qo=Ds.inject(g0),pt=Ds}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(e))throw Error(w(200));return h0(t,e,null,n)};Ve.createRoot=function(t,e){if(!mc(t))throw Error(w(299));var n=!1,r="",i=Mm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Oi(t.nodeType===8?t.parentNode:t),new pc(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=np(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return jn(t)};Ve.hydrate=function(t,e,n){if(!ll(e))throw Error(w(200));return al(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!mc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lm(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Oi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ol(e)};Ve.render=function(t,e,n){if(!ll(e))throw Error(w(200));return al(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!ll(t))throw Error(w(40));return t._reactRootContainer?(jn(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Ve.unstable_batchedUpdates=ac;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return al(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function Fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm)}catch(t){console.error(t)}}Fm(),Lf.exports=Ve;var _0=Lf.exports,ph=_0;aa.createRoot=ph.createRoot,aa.hydrateRoot=ph.hydrateRoot;function v0(t={}){const{nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r}=t,[i,s]=te.useState(!1),o=te.useRef(n);o.current=n;const l=te.useRef(r);return l.current=r,te.useEffect(()=>{const a=document.createElement("script");return a.src="https://accounts.google.com/gsi/client",a.async=!0,a.defer=!0,a.nonce=e,a.onload=()=>{var u;s(!0),(u=o.current)===null||u===void 0||u.call(o)},a.onerror=()=>{var u;s(!1),(u=l.current)===null||u===void 0||u.call(l)},document.body.appendChild(a),()=>{document.body.removeChild(a)}},[e]),i}const bm=te.createContext(null);function y0({clientId:t,nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r,children:i}){const s=v0({nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r}),o=te.useMemo(()=>({clientId:t,scriptLoadedSuccessfully:s}),[t,s]);return Tu.createElement(bm.Provider,{value:o},i)}function w0(){const t=te.useContext(bm);if(!t)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return t}function E0(t){var e;return(e=t==null?void 0:t.clientId)!==null&&e!==void 0?e:t==null?void 0:t.client_id}const S0={large:40,medium:32,small:20};function C0({onSuccess:t,onError:e,useOneTap:n,promptMomentNotification:r,type:i="standard",theme:s="outline",size:o="large",text:l,shape:a,logo_alignment:u,width:d,locale:c,click_listener:h,containerProps:g,..._}){const y=te.useRef(null),{clientId:A,scriptLoadedSuccessfully:p}=w0(),f=te.useRef(t);f.current=t;const m=te.useRef(e);m.current=e;const v=te.useRef(r);return v.current=r,te.useEffect(()=>{var S,I,T,N,W,O,Te,vt,yt;if(p)return(T=(I=(S=window==null?void 0:window.google)===null||S===void 0?void 0:S.accounts)===null||I===void 0?void 0:I.id)===null||T===void 0||T.initialize({client_id:A,callback:$e=>{var wt;if(!($e!=null&&$e.credential))return(wt=m.current)===null||wt===void 0?void 0:wt.call(m);const{credential:Et,select_by:Gr}=$e;f.current({credential:Et,clientId:E0($e),select_by:Gr})},..._}),(O=(W=(N=window==null?void 0:window.google)===null||N===void 0?void 0:N.accounts)===null||W===void 0?void 0:W.id)===null||O===void 0||O.renderButton(y.current,{type:i,theme:s,size:o,text:l,shape:a,logo_alignment:u,width:d,locale:c,click_listener:h}),n&&((yt=(vt=(Te=window==null?void 0:window.google)===null||Te===void 0?void 0:Te.accounts)===null||vt===void 0?void 0:vt.id)===null||yt===void 0||yt.prompt(v.current)),()=>{var $e,wt,Et;n&&((Et=(wt=($e=window==null?void 0:window.google)===null||$e===void 0?void 0:$e.accounts)===null||wt===void 0?void 0:wt.id)===null||Et===void 0||Et.cancel())}},[A,p,n,i,s,o,l,a,u,d,c]),Tu.createElement("div",{...g,ref:y,style:{height:S0[o],...g==null?void 0:g.style}})}class ui extends Error{}ui.prototype.name="InvalidTokenError";function I0(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,n)=>{let r=n.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function T0(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return I0(e)}catch{return atob(e)}}function k0(t,e){if(typeof t!="string")throw new ui("Invalid token specified: must be a string");e||(e={});const n=e.header===!0?0:1,r=t.split(".")[n];if(typeof r!="string")throw new ui(`Invalid token specified: missing part #${n+1}`);let i;try{i=T0(r)}catch(s){throw new ui(`Invalid token specified: invalid base64 for part #${n+1} (${s.message})`)}try{return JSON.parse(i)}catch(s){throw new ui(`Invalid token specified: invalid json for part #${n+1} (${s.message})`)}}var mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw jr(e)},jr=function(t){return new Error("Firebase Database ("+Um.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new R0;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jm=function(t){const e=zm(t);return gc.encodeByteArray(e,!0)},Io=function(t){return jm(t).replace(/\./g,"")},To=function(t){try{return gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){return Wm(void 0,t)}function Wm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!A0(n)||(t[n]=Wm(t[n],e[n]));return t}function A0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=()=>x0().__FIREBASE_DEFAULTS__,D0=()=>{if(typeof process>"u"||typeof mh>"u")return;const t=mh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&To(t[1]);return e&&JSON.parse(e)},_c=()=>{try{return O0()||D0()||L0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bm=t=>{var e,n;return(n=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M0=t=>{const e=Bm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vm=()=>{var t;return(t=_c())===null||t===void 0?void 0:t.config},Hm=t=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function b0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U0(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gm(){return Um.NODE_ADMIN===!0}function z0(){try{return typeof indexedDB=="object"}catch{return!1}}function j0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W0,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?B0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function B0(t,e){return t.replace(V0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(To(s[0])||""),n=Wi(To(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},H0=function(t){const e=Km(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$0=function(t){const e=Km(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function tu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gh(s)&&gh(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function K0(t,e){const n=new q0(t,e);return n.subscribe.bind(n)}class q0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ql),i.error===void 0&&(i.error=ql),i.complete===void 0&&(i.complete=ql);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}function qm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===kn?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const tw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},nw=V.INFO,rw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},iw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=nw,this._logHandler=iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const sw=(t,e)=>e.some(n=>t instanceof n);let _h,vh;function ow(){return _h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lw(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,nu=new WeakMap,Qm=new WeakMap,Yl=new WeakMap,Ec=new WeakMap;function aw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),Ec.set(e,t),e}function uw(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cw(t){ru=t(ru)}function dw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return Qm.set(r,e.sort?e.sort():[e]),ln(r)}:lw().includes(t)?function(...e){return t.apply(Ql(this),e),ln(Ym.get(this))}:function(...e){return ln(t.apply(Ql(this),e))}}function hw(t){return typeof t=="function"?dw(t):(t instanceof IDBTransaction&&uw(t),sw(t,ow())?new Proxy(t,ru):t)}function ln(t){if(t instanceof IDBRequest)return aw(t);if(Yl.has(t))return Yl.get(t);const e=hw(t);return e!==t&&(Yl.set(t,e),Ec.set(e,t)),e}const Ql=t=>Ec.get(t);function fw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ln(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ln(o.result),a.oldVersion,a.newVersion,ln(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const pw=["get","getKey","getAll","getAllKeys","count"],mw=["put","add","delete","clear"],Xl=new Map;function yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xl.get(e))return Xl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xl.set(e,s),s}cw(t=>({...t,get:(e,n,r)=>yh(e,n)||t.get(e,n,r),has:(e,n)=>!!yh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_w(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _w(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",wh="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new wc("@firebase/app"),vw="@firebase/app-compat",yw="@firebase/analytics-compat",ww="@firebase/analytics",Ew="@firebase/app-check-compat",Sw="@firebase/app-check",Cw="@firebase/auth",Iw="@firebase/auth-compat",Tw="@firebase/database",kw="@firebase/database-compat",Nw="@firebase/functions",Rw="@firebase/functions-compat",Pw="@firebase/installations",Aw="@firebase/installations-compat",xw="@firebase/messaging",Ow="@firebase/messaging-compat",Dw="@firebase/performance",Lw="@firebase/performance-compat",Mw="@firebase/remote-config",Fw="@firebase/remote-config-compat",bw="@firebase/storage",Uw="@firebase/storage-compat",zw="@firebase/firestore",jw="@firebase/firestore-compat",Ww="firebase",Bw="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="[DEFAULT]",Vw={[iu]:"fire-core",[vw]:"fire-core-compat",[ww]:"fire-analytics",[yw]:"fire-analytics-compat",[Sw]:"fire-app-check",[Ew]:"fire-app-check-compat",[Cw]:"fire-auth",[Iw]:"fire-auth-compat",[Tw]:"fire-rtdb",[kw]:"fire-rtdb-compat",[Nw]:"fire-fn",[Rw]:"fire-fn-compat",[Pw]:"fire-iid",[Aw]:"fire-iid-compat",[xw]:"fire-fcm",[Ow]:"fire-fcm-compat",[Dw]:"fire-perf",[Lw]:"fire-perf-compat",[Mw]:"fire-rc",[Fw]:"fire-rc-compat",[bw]:"fire-gcs",[Uw]:"fire-gcs-compat",[zw]:"fire-fst",[jw]:"fire-fst-compat","fire-js":"fire-js",[Ww]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map,ou=new Map;function Hw(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(ou.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of Ro.values())Hw(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new is("app","Firebase",$w);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=Bw;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:su,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Vm()),!n)throw an.create("no-options");const s=Ro.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new ew(i);for(const a of ou.values())o.addComponent(a);const l=new Gw(n,r,o);return Ro.set(i,l),l}function Jm(t=su){const e=Ro.get(t);if(!e&&t===su&&Vm())return Xm();if(!e)throw an.create("no-app",{appName:t});return e}function un(t,e,n){var r;let i=(r=Vw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Or(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firebase-heartbeat-database",qw=1,Bi="firebase-heartbeat-store";let Jl=null;function Zm(){return Jl||(Jl=fw(Kw,qw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bi)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function Yw(t){try{return await(await Zm()).transaction(Bi).objectStore(Bi).get(eg(t))}catch(e){if(e instanceof wn)Bn.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Eh(t,e){try{const r=(await Zm()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,eg(t)),await r.done}catch(n){if(n instanceof wn)Bn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Xw=30*24*60*60*1e3;class Jw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Xw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sh(),{heartbeatsToSend:r,unsentEntries:i}=Zw(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sh(){return new Date().toISOString().substring(0,10)}function Zw(t,e=Qw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ch(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ch(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z0()?j0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ch(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){Or(new Wn("platform-logger",e=>new gw(e),"PRIVATE")),Or(new Wn("heartbeat",e=>new Jw(e),"PRIVATE")),un(iu,wh,t),un(iu,wh,"esm2017"),un("fire-js","")}tE("");var nE="firebase",rE="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(nE,rE,"app");var Ih={};const Th="@firebase/database",kh="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg="";function iE(t){tg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sE(e)}}catch{}return new oE},xn=ng("localStorage"),lu=ng("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new wc("@firebase/database"),lE=function(){let t=1;return function(){return t++}}(),rg=function(t){const e=Q0(t),n=new G0;n.update(e);const r=n.digest();return gc.encodeByteArray(r)},ss=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ss.apply(null,r):typeof r=="object"?e+=le(r):e+=r,e+=" "}return e};let Ln=null,Nh=!0;const aE=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(yr.logLevel=V.VERBOSE,Ln=yr.log.bind(yr),e&&lu.set("logging_enabled",!0)):typeof t=="function"?Ln=t:(Ln=null,lu.remove("logging_enabled"))},Se=function(...t){if(Nh===!0&&(Nh=!1,Ln===null&&lu.get("logging_enabled")===!0&&aE(!0)),Ln){const e=ss.apply(null,t);Ln(e)}},os=function(t){return function(...e){Se(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+ss(...t);yr.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${ss(...t)}`;throw yr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+ss(...t);yr.warn(e)},uE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ig=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dr="[MIN_NAME]",Vn="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===Dr||e===Vn)return-1;if(e===Dr||t===Vn)return 1;{const n=Rh(t),r=Rh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dE=function(t,e){return t===e?0:t<e?-1:1},ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},Cc=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=le(e[r]),n+=":",n+=Cc(t[e[r]]);return n+="}",n},sg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const og=function(t){E(!ig(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},hE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mE=new RegExp("^-?(0*)\\d{1,10}$"),gE=-2147483648,_E=2147483647,Rh=function(t){if(mE.test(t)){const e=Number(t);if(e>=gE&&e<=_E)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},vE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class wr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="5",lg="v",ag="s",ug="r",cg="f",dg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hg="ls",fg="p",uu="ac",pg="websocket",mg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _g(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===pg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EE(t)&&(n.ns=t.namespace);const i=[];return be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return P0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={},ea={};function Tc(t){const e=t.toString();return Zl[e]||(Zl[e]=new SE),Zl[e]}function CE(t,e){const n=t.toString();return ea[n]||(ea[n]=e()),ea[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="start",TE="close",kE="pLPCommand",NE="pRTLPCB",vg="id",yg="pw",wg="ser",RE="cb",PE="seg",AE="ts",xE="d",OE="dframe",Eg=1870,Sg=30,DE=Eg-Sg,LE=25e3,ME=3e4;class cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=os(e),this.stats_=Tc(n),this.urlFn=a=>(this.appCheckToken&&(a[uu]=this.appCheckToken),_g(n,mg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ME)),cE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ph)this.id=l,this.password=a;else if(o===TE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ph]="t",r[wg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lg]=Ic,this.transportSessionId&&(r[ag]=this.transportSessionId),this.lastSessionId&&(r[hg]=this.lastSessionId),this.applicationId&&(r[fg]=this.applicationId),this.appCheckToken&&(r[uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&dg.test(location.hostname)&&(r[ug]=cg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cr.forceAllow_=!0}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){return cr.forceAllow_?!0:!cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hE()&&!fE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jm(n),i=sg(r,DE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OE]="t",r[vg]=e,r[yg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lE(),window[kE+this.uniqueCallbackIdentifier]=e,window[NE+this.uniqueCallbackIdentifier]=n,this.myIFrame=kc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vg]=this.myID,e[yg]=this.myPW,e[wg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sg+r.length<=Eg;){const o=this.pendingSegs.shift();r=r+"&"+PE+i+"="+o.seg+"&"+AE+i+"="+o.ts+"&"+xE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=16384,bE=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=os(this.connId),this.stats_=Tc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lg]=Ic,typeof location<"u"&&location.hostname&&dg.test(location.hostname)&&(o[ug]=cg),n&&(o[ag]=n),r&&(o[hg]=r),i&&(o[uu]=i),s&&(o[fg]=s),_g(e,pg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let r;Gm(),this.mySock=new Po(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Po!==null&&!rt.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sg(n,FE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of Vi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=6e4,zE=5e3,jE=10*1024,WE=100*1024,ta="t",Ah="d",BE="s",xh="r",VE="e",Oh="o",Dh="a",Lh="n",Mh="p",HE="h";class $E{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=os("c:"+this.id+":"),this.transportManager_=new Vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ta in e){const n=e[ta];n===Dh?this.upgradeIfSecondaryHealthy_():n===xh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Oh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ti(ta,e);if(Ah in e){const r=e[Ah];if(n===HE){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BE?this.onConnectionShutdown_(r):n===xh?this.onReset_(r):n===VE?au("Server Error: "+r):n===Oh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ic!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Ig{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ao}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=32,bh=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new H("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Tg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ng(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ne($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rg(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KE{constructor(e,n){this.errorPrefix_=n,this.parts_=kg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);Pg(this)}}function qE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),Pg(t)}function YE(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pg(t){if(t.byteLength_>bh)throw new Error(t.errorPrefix_+"has a key path longer than "+bh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fh+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Ig{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Nc}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=1e3,QE=60*5*1e3,Uh=30*1e3,XE=1.3,JE=3e4,ZE="server_kill",zh=3;class At extends Cg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=At.nextPersistentConnectionId_++,this.log_=os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ni,this.maxReconnectDelay_=QE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Gm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(le(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new vc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;At.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=xr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=H0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JE&&(this.reconnectDelay_=ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new $E(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZE)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tu(this.interruptReasons_)&&(this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Cc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zh&&(this.reconnectDelay_=Uh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tg.replace(/\./g,"-")]=1,yc()?e["framework.cordova"]=1:$m()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ao.getInstance().currentlyOnline();return tu(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Dr,e),i=new M(Dr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class Ag extends cl{static get __EMPTY_NODE(){return Ls}static set __EMPTY_NODE(e){Ls=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Vn,Ls)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Ls)}toString(){return".key"}}const Er=new Ag;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class eS{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new eS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){return Vr(t.name,e.name)}function Rc(t,e){return Vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;function nS(t){cu=t}const xg=function(t){return typeof t=="number"?"number:"+og(t):"string:"+t},Og=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else E(t===cu||t.isEmpty(),"priority of unexpected type.");E(t===cu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Og(this.priorityNode_)}static set __childrenNodeConstructor(e){jh=e}static get __childrenNodeConstructor(){return jh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:U(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=og(this.value_):e+=this.value_,this.lazyHash_=rg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg,Lg;function rS(t){Dg=t}function iS(t){Lg=t}class sS extends cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Vn,new de("[PRIORITY-POST]",Lg))}makePost(e,n){const r=Dg(e);return new M(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new sS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=Math.log(2);class lS{constructor(e){const n=s=>parseInt(Math.log(s)/oS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new fe(h,c.node,fe.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const A=c-_,p=c;c-=_;const f=i(A+1,p),m=t[A],v=n?n(m):m;g(new fe(v,m.node,y,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),A=Math.pow(2,a.count-(_+1));y?h(A,fe.BLACK):(h(A,fe.BLACK),h(A,fe.RED))}return d},o=new lS(t.length),l=s(o);return new De(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const Xn={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Xn&&ne,"ChildrenNode.ts has not been loaded"),na=na||new kt({".priority":Xn},{".priority":ne}),na}get(e){const n=xr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=xo(r,e.getCompare()):l=Xn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new kt(d,u)}addToIndexes(e,n){const r=ko(this.indexes_,(i,s)=>{const o=xr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Xn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),xo(l,o.getCompare())}else return Xn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ko(this.indexes_,i=>{if(i===Xn)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new kt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Og(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ri||(ri=new P(new De(Rc),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ri}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ri:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ri:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{E(U(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xg(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===Er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Er?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aS extends P{constructor(){super(new De(Rc),P.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const as=new aS;Object.defineProperties(M,{MIN:{value:new M(Dr,P.EMPTY_NODE)},MAX:{value:new M(Vn,as)}});Ag.__EMPTY_NODE=P.EMPTY_NODE;de.__childrenNodeConstructor=P;nS(as);iS(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ge(e))}if(!(t instanceof Array)&&uS){const n=[];let r=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return P.EMPTY_NODE;const s=xo(n,tS,o=>o.name,Rc);if(r){const o=xo(n,ne.getCompare());return new P(s,ge(e),new kt({".priority":o},{".priority":ne}))}else return new P(s,ge(e),kt.Default)}else{let n=P.EMPTY_NODE;return be(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}rS(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends cl{constructor(e){super(),this.indexPath_=e,E(!F(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}makePost(e,n){const r=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,as);return new M(Vn,e)}toString(){return kg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=ge(e);return new M(n,r)}toString(){return".value"}}const hS=new dS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return{type:"value",snapshotNode:t}}function Lr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $i(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Hi(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Lr(n,r)):o.trackChildChange($i(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(Hi(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($i(i,s,o))}else r.trackChildChange(Lr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.indexedFilter_=new Pc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gi.getStartPost_(e),this.endPost_=Gi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange($i(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Hi(n,c));const y=l.updateImmediateChild(n,P.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Lr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Hi(u.name,u.node)),s.trackChildChange(Lr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mS(t){return t.loadsAllData()?new Pc(t.getIndex()):t.hasLimit()?new pS(t):new Gi(t)}function Wh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===hS?n="$value":t.index_===Er?n="$key":(E(t.index_ instanceof cS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=le(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+le(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=le(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Cg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Oo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Wh(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),xr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Oo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wh(e._queryParams),r=e._path.toString(),i=new vc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wi(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(){return{value:null,children:new Map}}function Fg(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Do());const i=t.children.get(r);e=$(e),Fg(i,e,n)}}function du(t,e,n){t.value!==null?n(e,t.value):_S(t,(r,i)=>{const s=new H(e.toString()+"/"+r);du(i,s,n)})}function _S(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=10*1e3,yS=30*1e3,wS=5*60*1e3;class ES{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vS(e);const r=Vh+(yS-Vh)*Math.random();yi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;be(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*wS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function bg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=bg()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Lo(j(),n,this.revert)}}else return E(U(this.path)===e,"operationForChild called for unrelated child."),new Lo($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Ki(this.source,j()):new Ki(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return F(this.path)?new Hn(this.source,j(),this.snap.getImmediateChild(e)):new Hn(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Hn(this.source,j(),n.value):new qi(this.source,j(),n)}else return E(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function CS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fS(o.childName,o.snapshotNode))}),ii(t,i,"child_removed",e,r,n),ii(t,i,"child_added",e,r,n),ii(t,i,"child_moved",s,r,n),ii(t,i,"child_changed",e,r,n),ii(t,i,"value",e,r,n),i}function ii(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>TS(t,l,a)),o.forEach(l=>{const a=IS(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function IS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function TS(t,e,n){if(e.childName==null||n.childName==null)throw jr("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e){return{eventCache:t,serverCache:e}}function wi(t,e,n,r){return dl(new mn(e,n,r),t.serverCache)}function Ug(t,e,n,r){return dl(t.eventCache,new mn(e,n,r))}function Mo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const kS=()=>(ra||(ra=new De(dE)),ra);class q{constructor(e,n=kS()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return be(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(F(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:ae(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const r=U(e),s=(this.children.get(r)||new q(null)).set($(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(F(e))return n;{const r=U(e),s=(this.children.get(r)||new q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_($(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),ae(n,i),r):new q(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new q(null))}}function Ei(t,e,n){if(F(e))return new at(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ne(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function Hh(t,e,n){let r=t;return be(n,(i,s)=>{r=Ei(r,ae(e,i),s)}),r}function $h(t,e){if(F(e))return at.empty();{const n=t.writeTree_.setTree(e,new q(null));return new at(n)}}function hu(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function Gh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function cn(t,e){if(F(e))return t;{const n=Yn(t,e);return n!=null?new at(new q(n)):new at(t.writeTree_.subtree(e))}}function fu(t){return t.writeTree_.isEmpty()}function Mr(t,e){return zg(j(),t.writeTree_,e)}function zg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=zg(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e){return Vg(e,t)}function NS(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ei(t.visibleWrites,e,n)),t.lastWriteId=r}function RS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function PS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&AS(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return xS(t),!0;if(r.snap)t.visibleWrites=$h(t.visibleWrites,r.path);else{const l=r.children;be(l,a=>{t.visibleWrites=$h(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function AS(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ae(t.path,n),e))return!0;return!1}function xS(t){t.visibleWrites=jg(t.allWrites,OS,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function OS(t){return t.visible}function jg(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ne(n,o),r=Ei(r,l,s.snap)):it(o,n)&&(l=Ne(o,n),r=Ei(r,j(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ne(n,o),r=Hh(r,l,s.children);else if(it(o,n))if(l=Ne(o,n),F(l))r=Hh(r,j(),s.children);else{const a=xr(s.children,U(l));if(a){const u=a.getChild($(l));r=Ei(r,j(),u)}}}else throw jr("WriteRecord should have .snap or .children")}}return r}function Wg(t,e,n,r,i){if(!r&&!i){const s=Yn(t.visibleWrites,e);if(s!=null)return s;{const o=cn(t.visibleWrites,e);if(fu(o))return n;if(n==null&&!hu(o,j()))return null;{const l=n||P.EMPTY_NODE;return Mr(o,l)}}}else{const s=cn(t.visibleWrites,e);if(!i&&fu(s))return n;if(!i&&n==null&&!hu(s,j()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=jg(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Mr(l,a)}}}function DS(t,e,n){let r=P.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=cn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Mr(cn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),Gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=cn(t.visibleWrites,e);return Gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LS(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(hu(t.visibleWrites,s))return null;{const o=cn(t.visibleWrites,s);return fu(o)?i.getChild(n):Mr(o,i.getChild(n))}}function MS(t,e,n,r){const i=ae(e,n),s=Yn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return Mr(o,r.getNode().getImmediateChild(n))}else return null}function FS(t,e){return Yn(t.visibleWrites,e)}function bS(t,e,n,r,i,s,o){let l;const a=cn(t.visibleWrites,e),u=Yn(a,j());if(u!=null)l=u;else if(n!=null)l=Mr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function US(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Fo(t,e,n,r){return Wg(t.writeTree,t.treePath,e,n,r)}function Dc(t,e){return DS(t.writeTree,t.treePath,e)}function Kh(t,e,n,r){return LS(t.writeTree,t.treePath,e,n,r)}function bo(t,e){return FS(t.writeTree,ae(t.treePath,e))}function zS(t,e,n,r,i,s){return bS(t.writeTree,t.treePath,e,n,r,i,s)}function Lc(t,e,n){return MS(t.writeTree,t.treePath,e,n)}function Bg(t,e){return Vg(ae(t.treePath,e),t.writeTree)}function Vg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$i(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Hi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Lr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$i(r,e.snapshotNode,i.oldSnap));else throw jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Hg=new WS;class Mc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$n(this.viewCache_),s=zS(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){return{filter:t}}function VS(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HS(t,e,n,r,i){const s=new jS;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=pu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Uo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=GS(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=YS(t,e,u.path,r,i,s):o=KS(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=qS(t,e,n.path,r,s);else throw jr("Unknown operation type: "+n.type);const a=s.getChanges();return $S(e,o,a),{viewCache:o,changes:a}}function $S(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Mg(Mo(e)))}}function $g(t,e,n,r,i,s){const o=e.eventCache;if(bo(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=$n(e),d=u instanceof P?u:P.EMPTY_NODE,c=Dc(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Fo(r,$n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){E(pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Kh(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=$(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Kh(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Lc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return wi(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Uo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=U(n);if(!a.isCompleteForPath(n)&&pn(n)>1)return e;const _=$(n),A=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),A):u=d.updateChild(a.getNode(),g,A,_,Hg,null)}const c=Ug(e,u,a.isFullyInitialized()||F(n),d.filtersNodes()),h=new Mc(i,c,s);return $g(t,c,n,i,h,l)}function pu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Mc(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=wi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=wi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),g=l.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const y=d.getCompleteChild(c);y!=null?Tg(h)===".priority"&&y.getChild(Ng(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=P.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=wi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function qh(t,e){return t.eventCache.isCompleteForChild(e)}function GS(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ae(n,a);qh(e,U(d))&&(l=pu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ae(n,a);qh(e,U(d))||(l=pu(t,l,d,u,i,s,o))}),l}function Yh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=Yh(t,g,h);a=Uo(t,a,new H(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),y=Yh(t,_,h);a=Uo(t,a,new H(c),y,i,s,o,l)}}),a}function KS(t,e,n,r,i,s,o){if(bo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Uo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new q(null);return a.getNode().forEachChild(Er,(d,c)=>{u=u.set(new H(d),c)}),mu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=ae(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),mu(t,e,n,u,i,s,l,o)}}function qS(t,e,n,r,i){const s=e.serverCache,o=Ug(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return $g(t,o,n,r,Hg,i)}function YS(t,e,n,r,i,s){let o;if(bo(r,n)!=null)return e;{const l=new Mc(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Fo(r,$n(e));else{const c=e.serverCache.getNode();E(c instanceof P,"serverChildren would be complete if leaf node"),d=Dc(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=Lc(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,$(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,P.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fo(r,$n(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||bo(r,j())!=null,wi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pc(r.getIndex()),s=mS(r);this.processor_=BS(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(P.EMPTY_NODE,l.getNode(),null),d=new mn(a,o.isFullyInitialized(),i.filtersNodes()),c=new mn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=dl(c,d),this.eventGenerator_=new SS(this.query_)}get query(){return this.query_}}function XS(t){return t.viewCache_.serverCache.getNode()}function JS(t){return Mo(t.viewCache_)}function ZS(t,e){const n=$n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Qh(t){return t.eventRegistrations_.length===0}function eC(t,e){t.eventRegistrations_.push(e)}function Xh(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Jh(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(E($n(t.viewCache_),"We should always have a full cache before handling merges"),E(Mo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=HS(t.processor_,i,e,n,r);return VS(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Gg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function tC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Lr(s,o))}),n.isFullyInitialized()&&r.push(Mg(n.getNode())),Gg(t,r,n.getNode(),e)}function Gg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return CS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;class Kg{constructor(){this.views=new Map}}function nC(t){E(!zo,"__referenceConstructor has already been defined"),zo=t}function rC(){return E(zo,"Reference.ts has not been loaded"),zo}function iC(t){return t.views.size===0}function Fc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),Jh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Jh(o,e,n,r));return s}}function qg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Fo(n,i?r:null),a=!1;l?a=!0:r instanceof P?(l=Dc(n,r),a=!1):(l=P.EMPTY_NODE,a=!1);const u=dl(new mn(l,a,!1),new mn(r,i,!1));return new QS(e,u)}return o}function sC(t,e,n,r,i,s){const o=qg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),eC(o,n),tC(o,n)}function oC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=gn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Xh(u,n,r)),Qh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Xh(a,n,r)),Qh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!gn(t)&&s.push(new(rC())(e._repo,e._path)),{removed:s,events:o}}function Yg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dn(t,e){let n=null;for(const r of t.views.values())n=n||ZS(r,e);return n}function Qg(t,e){if(e._queryParams.loadsAllData())return fl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xg(t,e){return Qg(t,e)!=null}function gn(t){return fl(t)!=null}function fl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;function lC(t){E(!jo,"__referenceConstructor has already been defined"),jo=t}function aC(){return E(jo,"Reference.ts has not been loaded"),jo}let uC=1;class Zh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=US(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cC(t,e,n,r,i){return NS(t.pendingWriteTree_,e,n,r,i),i?cs(t,new Hn(bg(),e,n)):[]}function dr(t,e,n=!1){const r=RS(t.pendingWriteTree_,e);if(PS(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(j(),!0):be(r.children,o=>{s=s.set(new H(o),!0)}),cs(t,new Lo(r.path,s,n))}else return[]}function us(t,e,n){return cs(t,new Hn(xc(),e,n))}function dC(t,e,n){const r=q.fromObject(n);return cs(t,new qi(xc(),e,r))}function hC(t,e){return cs(t,new Ki(xc(),e))}function fC(t,e,n){const r=bc(t,n);if(r){const i=Uc(r),s=i.path,o=i.queryId,l=Ne(s,e),a=new Ki(Oc(o),l);return zc(t,s,a)}else return[]}function Jg(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Xg(o,e))){const a=oC(o,e,n,r);iC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>gn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=_C(h);for(let _=0;_<g.length;++_){const y=g[_],A=y.query,p=r_(t,y);t.listenProvider_.startListening(Si(A),Yi(t,A),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Si(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(pl(h));t.listenProvider_.stopListening(Si(h),g)}))}vC(t,u)}return l}function Zg(t,e,n,r){const i=bc(t,r);if(i!=null){const s=Uc(i),o=s.path,l=s.queryId,a=Ne(o,e),u=new Hn(Oc(l),a,n);return zc(t,o,u)}else return[]}function pC(t,e,n,r){const i=bc(t,r);if(i){const s=Uc(i),o=s.path,l=s.queryId,a=Ne(o,e),u=q.fromObject(n),d=new qi(Oc(l),a,u);return zc(t,o,d)}else return[]}function mC(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Ne(h,i);s=s||dn(g,_),o=o||gn(g)});let l=t.syncPointTree_.get(i);l?(o=o||gn(l),s=s||dn(l,j())):(l=new Kg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=dn(_,j());y&&(s=s.updateImmediateChild(g,y))}));const u=Xg(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=pl(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=yC();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=hl(t.pendingWriteTree_,i);let c=sC(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Qg(l,e);c=c.concat(wC(t,e,h))}return c}function e_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),u=dn(l,a);if(u)return u});return Wg(i,e,s,n,!0)}function gC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ne(u,n);r=r||dn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||dn(i,j()):(i=new Kg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new mn(r,!0,!1):null,l=hl(t.pendingWriteTree_,e._path),a=qg(i,e,l,s?o.getNode():P.EMPTY_NODE,s);return JS(a)}function cs(t,e){return t_(e,t.syncPointTree_,null,hl(t.pendingWriteTree_,j()))}function t_(t,e,n,r){if(F(t.path))return n_(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=dn(i,j()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Bg(r,o);s=s.concat(t_(l,a,u,d))}return i&&(s=s.concat(Fc(i,t,r,n))),s}}function n_(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=dn(i,j()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Bg(r,o),d=t.operationForChild(o);d&&(s=s.concat(n_(d,l,a,u)))}),i&&(s=s.concat(Fc(i,t,r,n))),s}function r_(t,e){const n=e.query,r=Yi(t,n);return{hashFn:()=>(XS(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?fC(t,n._path,r):hC(t,n._path);{const s=pE(i,n);return Jg(t,n,null,s)}}}}function Yi(t,e){const n=pl(e);return t.queryToTagMap.get(n)}function pl(t){return t._path.toString()+"$"+t._queryIdentifier}function bc(t,e){return t.tagToQueryMap.get(e)}function Uc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function zc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=hl(t.pendingWriteTree_,e);return Fc(r,n,i,null)}function _C(t){return t.fold((e,n,r)=>{if(n&&gn(n))return[fl(n)];{let i=[];return n&&(i=Yg(n)),be(r,(s,o)=>{i=i.concat(o)}),i}})}function Si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aC())(t._repo,t._path):t}function vC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function yC(){return uC++}function wC(t,e,n){const r=e._path,i=Yi(t,e),s=r_(t,n),o=t.listenProvider_.startListening(Si(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!F(u)&&d&&gn(d))return[fl(d).query];{let h=[];return d&&(h=h.concat(Yg(d).map(g=>g.query))),be(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Si(d),Yi(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jc(n)}node(){return this.node_}}class Wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Wc(this.syncTree_,n)}node(){return e_(this.syncTree_,this.path_)}}const EC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ef=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CC(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},CC=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},IC=function(t,e,n,r){return Bc(e,new Wc(n,t),r)},TC=function(t,e,n){return Bc(t,new jc(e),n)};function Bc(t,e,n){const r=t.getPriority().val(),i=ef(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ef(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=Bc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hc(t,e){let n=e instanceof H?e:new H(e),r=t,i=U(n);for(;i!==null;){const s=xr(r.node.children,i)||{children:{},childCount:0};r=new Vc(i,r,s),n=$(n),i=U(n)}return r}function Hr(t){return t.node.value}function i_(t,e){t.node.value=e,gu(t)}function s_(t){return t.node.childCount>0}function kC(t){return Hr(t)===void 0&&!s_(t)}function ml(t,e){be(t.node.children,(n,r)=>{e(new Vc(n,t,r))})}function o_(t,e,n,r){n&&!r&&e(t),ml(t,i=>{o_(i,e,!0,r)}),n&&r&&e(t)}function NC(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ds(t){return new H(t.parent===null?t.name:ds(t.parent)+"/"+t.name)}function gu(t){t.parent!==null&&RC(t.parent,t.name,t)}function RC(t,e,n){const r=kC(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=/[\[\].#$\/\u0000-\u001F\u007F]/,AC=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,l_=function(t){return typeof t=="string"&&t.length!==0&&!PC.test(t)},a_=function(t){return typeof t=="string"&&t.length!==0&&!AC.test(t)},xC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),a_(t)},u_=function(t,e,n){const r=n instanceof H?new KE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(r)+" with contents = "+e.toString());if(ig(e))throw new Error(t+"contains "+e.toString()+" "+Nn(r));if(typeof e=="string"&&e.length>ia/3&&ul(e)>ia)throw new Error(t+"contains a string greater than "+ia+" utf8 bytes "+Nn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!l_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qE(r,o),u_(t,l,r),YE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nn(r)+" in addition to actual children.")}},c_=function(t,e,n,r){if(!(r&&n===void 0)&&!a_(n))throw new Error(qm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),c_(t,e,n,r)},DC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!l_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xC(n))throw new Error(qm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function MC(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Rg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function En(t,e,n){MC(t,n),FC(t,r=>it(r,e)||it(e,r))}function FC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(bC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ln&&Se("event: "+n.toString()),ls(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="repo_interrupt",zC=25;class jC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Do(),this.transactionQueueTree_=new Vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WC(t,e,n){if(t.stats_=Tc(t.repoInfo_),t.forceRestClient_||vE())t.server_=new Oo(t.repoInfo_,(r,i,s,o)=>{tf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new At(t.repoInfo_,e,(r,i,s,o)=>{tf(t,r,i,s,o)},r=>{nf(t,r)},r=>{VC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CE(t.repoInfo_,()=>new ES(t.stats_,t.server_)),t.infoData_=new gS,t.infoSyncTree_=new Zh({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=us(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$c(t,"connected",!1),t.serverSyncTree_=new Zh({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);En(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function BC(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function d_(t){return EC({timestamp:BC(t)})}function tf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=ko(n,u=>ge(u));o=pC(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=Zg(t.serverSyncTree_,s,a,i)}else if(r){const a=ko(n,u=>ge(u));o=dC(t.serverSyncTree_,s,a)}else{const a=ge(n);o=us(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=qc(t,s)),En(t.eventQueue_,l,o)}function nf(t,e){$c(t,"connected",e),e===!1&&GC(t)}function VC(t,e){be(e,(n,r)=>{$c(t,n,r)})}function $c(t,e,n){const r=new H("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=us(t.infoSyncTree_,r,i);En(t.eventQueue_,r,s)}function HC(t){return t.nextWriteId_++}function $C(t,e,n){const r=gC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ge(i).withIndex(e._queryParams.getIndex());mC(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=us(t.serverSyncTree_,e._path,s);else{const l=Yi(t.serverSyncTree_,e);o=Zg(t.serverSyncTree_,e._path,s,l)}return En(t.eventQueue_,e._path,o),Jg(t.serverSyncTree_,e,n,null,!0),s},i=>(Gc(t,"get for query "+le(e)+" failed: "+i),Promise.reject(new Error(i))))}function GC(t){Gc(t,"onDisconnectEvents");const e=d_(t),n=Do();du(t.onDisconnect_,j(),(i,s)=>{const o=IC(i,s,t.serverSyncTree_,e);Fg(n,i,o)});let r=[];du(n,j(),(i,s)=>{r=r.concat(us(t.serverSyncTree_,i,s));const o=QC(t,i);qc(t,o)}),t.onDisconnect_=Do(),En(t.eventQueue_,j(),r)}function KC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(UC)}function Gc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function h_(t,e,n){return e_(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Kc(t,e=t.transactionQueueTree_){if(e||gl(t,e),Hr(e)){const n=p_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qC(t,ds(e),n)}else s_(e)&&ml(e,n=>{Kc(t,n)})}function qC(t,e,n){const r=n.map(u=>u.currentWriteId),i=h_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ne(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Gc(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(dr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();gl(t,Hc(t.transactionQueueTree_,e)),Kc(t,t.transactionQueueTree_),En(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ls(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}qc(t,e)}},o)}function qc(t,e){const n=f_(t,e),r=ds(n),i=p_(t,n);return YC(t,i,r),r}function YC(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ne(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=zC)d=!0,c="maxretry",i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=h_(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){u_("transaction failed: Data returned ",g,a.path);let _=ge(g);typeof g=="object"&&g!=null&&zt(g,".priority")||(_=_.updatePriority(h.getPriority()));const A=a.currentWriteId,p=d_(t),f=TC(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=HC(t),o.splice(o.indexOf(A),1),i=i.concat(cC(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(dr(t.serverSyncTree_,A,!0))}else d=!0,c="nodata",i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0))}En(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}gl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ls(r[l]);Kc(t,t.transactionQueueTree_)}function f_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Hr(r)===void 0;)r=Hc(r,n),e=$(e),n=U(e);return r}function p_(t,e){const n=[];return m_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function m_(t,e,n){const r=Hr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{m_(t,i,n)})}function gl(t,e){const n=Hr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,i_(e,n.length>0?n:void 0)}ml(e,r=>{gl(t,r)})}function QC(t,e){const n=ds(f_(t,e)),r=Hc(t.transactionQueueTree_,e);return NC(r,i=>{sa(t,i)}),sa(t,r),o_(r,i=>{sa(t,i)}),n}function sa(t,e){const n=Hr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?i_(e,void 0):n.length=s+1,En(t.eventQueue_,ds(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function JC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const rf=function(t,e){const n=ZC(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},ZC=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=XC(t.substring(d,c)));const h=JC(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class tI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:Tg(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Bh(this._queryParams),n=Cc(e);return n==="{}"?"default":n}get _queryObject(){return Bh(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof Yc))return!1;const n=this._repo===e._repo,r=Rg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GE(this._path)}}class jt extends Yc{constructor(e,n){super(e,n,new Ac,!1)}get parent(){const e=Ng(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=_u(this.ref,e);return new Qi(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Qi(i,_u(this.ref,r),ne)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sf(t,e){return t=Je(t),t._checkNotDeleted("ref"),e!==void 0?_u(t._root,e):t._root}function _u(t,e){return t=Je(t),U(t._path)===null?OC("child","path",e,!1):c_("child","path",e,!1),new jt(t._repo,ae(t._path,e))}function of(t){t=Je(t);const e=new nI(()=>{}),n=new Qc(e);return $C(t._repo,t,n).then(r=>new Qi(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class Qc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new eI("value",this,new Qi(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tI(this,e,n):null}matches(e){return e instanceof Qc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}nC(jt);lC(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="FIREBASE_DATABASE_EMULATOR_HOST",vu={};let iI=!1;function sI(t,e,n,r){t.repoInfo_=new gg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function oI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&Ih&&(u=Ih[rI]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=rf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new wr(wr.OWNER):new wE(t.name,t.options,e);DC("Invalid Firebase Database URL",o),F(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=aI(l,t,d,new yE(t.name,n));return new uI(c,t)}function lI(t,e){const n=vu[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KC(t),delete n[t.key]}function aI(t,e,n,r){let i=vu[e.name];i||(i={},vu[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jC(t,iI,n,r),i[t.toURLString()]=s,s}class uI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function cI(t=Jm(),e){const n=Sc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=M0("database");r&&dI(n,...r)}return n}function dI(t,e,n,r={}){t=Je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new wr(wr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:F0(r.mockUserToken,t.app.options.projectId);s=new wr(o)}sI(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){iE(Br),Or(new Wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return oI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),un(Th,kh,t),un(Th,kh,"esm2017")}At.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};At.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hI();function Xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fI=g_,__=new is("auth","Firebase",g_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new wc("@firebase/auth");function pI(t,...e){Wo.logLevel<=V.WARN&&Wo.warn(`Auth (${Br}): ${t}`,...e)}function Ys(t,...e){Wo.logLevel<=V.ERROR&&Wo.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw Jc(t,...e)}function gt(t,...e){return Jc(t,...e)}function mI(t,e,n){const r=Object.assign(Object.assign({},fI()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function Jc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return __.create(t,...e)}function x(t,e,...n){if(!t)throw Jc(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function bt(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gI(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gI()||b0()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=yc()||$m()}get(){return _I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new hs(3e4,6e4);function ed(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return y_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Wr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),v_.fetch()(w_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yI),e);try{const i=new SI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mI(t,d,u);Ft(t,d)}}catch(i){if(i instanceof wn)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function EI(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function w_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zc(t.config,i):`${t.config.apiScheme}://${i}`}class SI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),wI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function II(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=td(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ci(oa(i.auth_time)),issuedAtTime:Ci(oa(i.iat)),expirationTime:Ci(oa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oa(t){return Number(t)*1e3}function td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=To(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kI(t){const e=td(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&NI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,II(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xI(s.providerUserInfo):[],l=AI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new E_(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function PI(t){const e=Je(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xI(t){return t.map(e=>{var{providerId:n}=e,r=Xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){const n=await y_(t,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=w_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",v_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DI(t,e){return $r(t,"POST","/v2/accounts:revokeToken",ed(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new E_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TI(this,e)}reload(){return PI(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xi(this,CI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:v,isAnonymous:S,providerData:I,stsTokenManager:T}=n;x(m&&T,e,"internal-error");const N=Ji.fromJSON(this.name,T);x(typeof m=="string",e,"internal-error"),Bt(c,e.name),Bt(h,e.name),x(typeof v=="boolean",e,"internal-error"),x(typeof S=="boolean",e,"internal-error"),Bt(g,e.name),Bt(_,e.name),Bt(y,e.name),Bt(A,e.name),Bt(p,e.name),Bt(f,e.name);const W=new Mn({uid:m,auth:e,email:h,emailVerified:v,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(W.providerData=I.map(O=>Object.assign({},O))),A&&(W._redirectEventId=A),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function Rt(t){bt(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S_.type="NONE";const uf=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Sr(Rt(uf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(uf);const o=Qs(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Mn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Sr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Sr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(C_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N_(e))return"Blackberry";if(R_(e))return"Webos";if(nd(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(k_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function C_(t=Ie()){return/firefox\//i.test(t)}function nd(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(t=Ie()){return/crios\//i.test(t)}function T_(t=Ie()){return/iemobile/i.test(t)}function k_(t=Ie()){return/android/i.test(t)}function N_(t=Ie()){return/blackberry/i.test(t)}function R_(t=Ie()){return/webos/i.test(t)}function _l(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LI(t=Ie()){var e;return _l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MI(){return U0()&&document.documentMode===10}function P_(t=Ie()){return _l(t)||k_(t)||R_(t)||N_(t)||/windows phone/i.test(t)||T_(t)}function FI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=cf(Ie());break;case"Worker":n=`${cf(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e={}){return $r(t,"GET","/v2/passwordPolicy",ed(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=6;class jI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new bI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UI(this),n=new jI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vl(t){return Je(t)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BI().appendChild(r)})}function HI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(No(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function GI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KI(t,e,n){const r=vl(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=x_(e),{host:o,port:l}=qI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||YI()}function x_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qI(t){const e=x_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hf(o)}}}function hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e){return EI(t,"POST","/v1/accounts:signInWithIdp",ed(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="http://localhost";class Gn extends O_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:QI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends fs{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends fs{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends fs{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=ff(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ff(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vo(e,n,r,i)}}function L_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,s,e,r):s})}async function XI(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xi(t,L_(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=td(s.idToken);x(o,r,"internal-error");const{sub:l}=o;return x(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t,e,n=!1){const r="signIn",i=await L_(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ZI(t,e){return M_(vl(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){return Je(t).setPersistence(e)}function tT(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function nT(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){const t=Ie();return nd(t)||_l(t)}const iT=1e3,sT=10;class b_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rT()&&FI(),this.fallbackToPolling=P_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b_.type="LOCAL";const oT=b_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U_.type="SESSION";const rd=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await lT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=id("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function uT(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function cT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hT(){return z_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firebaseLocalStorageDb",fT=1,$o="firebaseLocalStorage",W_="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wl(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function pT(){const t=indexedDB.deleteDatabase(j_);return new ps(t).toPromise()}function wu(){const t=indexedDB.open(j_,fT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:W_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await pT(),e(await wu()))})})}async function pf(t,e,n){const r=wl(t,!0).put({[W_]:e,value:n});return new ps(r).toPromise()}async function mT(t,e){const n=wl(t,!1).get(e),r=await new ps(n).toPromise();return r===void 0?null:r.value}function mf(t,e){const n=wl(t,!0).delete(e);return new ps(n).toPromise()}const gT=800,_T=3;class B_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yl._getInstance(hT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cT(),!this.activeServiceWorker)return;this.sender=new aT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wu();return await pf(e,Ho,"1"),await mf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wl(i,!1).getAll();return new ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B_.type="LOCAL";const vT=B_;new hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){return e?Rt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends O_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wT(t){return M_(t.auth,new sd(t),t.bypassAuthState)}function ET(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),JI(n,new sd(t),t.bypassAuthState)}async function ST(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),XI(n,new sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wT;case"linkViaPopup":case"linkViaRedirect":return ST;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:Ft(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new hs(2e3,1e4);class hr extends V_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CT.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="pendingRedirect",Xs=new Map;class TT extends V_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xs.get(this.auth._key());if(!e){try{const r=await kT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xs.set(this.auth._key(),e)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kT(t,e){const n=PT(e),r=RT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NT(t,e){Xs.set(t._key(),e)}function RT(t){return Rt(t._redirectPersistence)}function PT(t){return Qs(IT,t.config.apiKey,t.name)}async function AT(t,e,n=!1){const r=vl(t),i=yT(r,e),o=await new TT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=10*60*1e3;class OT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(e))}saveEventToCache(e){this.cachedEventUids.add(gf(e)),this.lastProcessedEventTime=Date.now()}}function gf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FT=/^https?/;async function bT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LT(t);for(const n of e)try{if(UT(n))return}catch{}Ft(t,"unauthorized-domain")}function UT(t){const e=yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FT.test(n))return!1;if(MT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=new hs(3e4,6e4);function _f(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jT(t){return new Promise((e,n)=>{var r,i,s;function o(){_f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(gt(t,"network-request-failed"))},timeout:zT.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=HI("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},VI(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Js=null,e})}let Js=null;function WT(t){return Js=Js||jT(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new hs(5e3,15e3),VT="__/auth/iframe",HT="emulator/auth/iframe",$T={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KT(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,HT):`https://${t.config.authDomain}/${VT}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=GT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wr(r).slice(1)}`}async function qT(t){const e=await WT(t),n=_t().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:KT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$T,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},BT.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QT=500,XT=600,JT="_blank",ZT="http://localhost";class vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ek(t,e,n,r=QT,i=XT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},YT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(l=I_(u)?JT:n),C_(u)&&(e=e||ZT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(LI(u)&&l!=="_self")return tk(e||"",l),new vf(null);const c=window.open(e||"",l,d);x(c,t,"popup-blocked");try{c.focus()}catch{}return new vf(c)}function tk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="__/auth/handler",rk="emulator/auth/handler",ik=encodeURIComponent("fac");async function yf(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof D_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof fs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${ik}=${encodeURIComponent(a)}`:"";return`${sk(t)}?${Wr(l).slice(1)}${u}`}function sk({config:t}){return t.emulator?Zc(t,rk):`https://${t.authDomain}/${nk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="webStorageSupport";class ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rd,this._completeRedirectFn=AT,this._overrideRedirectResult=NT}async _openPopup(e,n,r,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yf(e,n,r,yu(),i);return ek(e,o,id())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yf(e,n,r,yu(),i);return uT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qT(e),r=new OT(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[la];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return P_()||nd()||_l()}}const lk=ok;var wf="@firebase/auth",Ef="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ck(t){Or(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},u=new WI(r,i,s,a);return GI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Wn("auth-internal",e=>{const n=vl(e.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(wf,Ef,uk(t)),un(wf,Ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=5*60,hk=Hm("authIdTokenMaxAge")||dk;let Sf=null;const fk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hk)return;const i=n==null?void 0:n.token;Sf!==i&&(Sf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pk(t=Jm()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$I(t,{popupRedirectResolver:lk,persistence:[vT,oT,rd]}),r=Hm("authTokenSyncURL");if(r){const s=fk(r);nT(n,s,()=>s(n.currentUser)),tT(n,o=>s(o))}const i=Bm("auth");return i&&KI(n,`http://${i}`),n}ck("Browser");const mk={apiKey:"AIzaSyB3SDmK7HJnAvPpNUGoHMPSJPZedeNpj0o",authDomain:"akspi-fine-site.firebaseapp.com",databaseURL:"https://akspi-fine-site-default-rtdb.firebaseio.com",projectId:"akspi-fine-site",storageBucket:"akspi-fine-site.appspot.com",messagingSenderId:"151974152748",appId:"1:151974152748:web:59f8714e9e6c5ac8739f89",measurementId:"G-ZG86R4EYJG"},$_=Xm(mk),Cf=cI($_),Go=pk($_);new ft;function gk({setUser:t,updateDbData:e,dbData:n}){const[r,i]=te.useState(!1),s=async o=>{await eT(Go,rd);const l=ft.credential(o.credential);try{const a=await ZI(Go,l),d=k0(o.credential).email.replace(/\./g,"_");n||await e(),d in n?t(d):(t(null),alert("This email is not on our roster :/"))}catch(a){console.error("Error signing in with Google OAuth:",a.message)}};return R.jsxs("main",{children:[R.jsx("h1",{children:" AKPsi Fine Portal"}),r&&R.jsx("h1",{children:" invalid user :/"}),R.jsx("img",{style:{margin:"25px 0px 50px 0px"},src:"https://upload.wikimedia.org/wikipedia/en/0/0d/Akpsi-coa.png"}),R.jsx(C0,{onSuccess:s,onError:()=>{console.log("Login Failed")}})]})}function _k({name:t,amount:e,expanded:n,toggleExpand:r,details:i,reducedRequirements:s}){let o,l,a=5;switch(t){case"Brotherhood Meetings":l="brotherhoods",a=5;break;case"Rituals":l="rituals",a=10;break;case"Rush Events":l="rush events",a=5;break;case"Checkpoints":l="checkpoints",a=5;break;case"Requirement Fines":l="requirements",a=5;break}return i&&(i.events?o=R.jsxs("div",{children:[" ",R.jsxs("p",{children:["You have missed these ",l," :("]}),R.jsxs("p",{children:["each event is a $",a," fine"]}),i.events.join(", ")]}):i.requirements?o=R.jsxs("div",{children:[R.jsxs("p",{children:["You have ",i.requirements["Total Points"]," total points. You need ",s?6:9," !"]}),R.jsxs("p",{children:[" each missing point is a $",a," fine"]}),R.jsxs("ul",{children:[R.jsxs("li",{children:["You have ",i.requirements.Brotherhood," ","Brotherhood points"]}),R.jsxs("li",{children:["You have ",i.requirements.Professional," ","Professional points"]}),R.jsxs("li",{children:["You have ",i.requirements.DEI," DEI points"]}),R.jsxs("li",{children:["You have ",i.requirements["Community Service"]," Community Service points"]}),R.jsxs("li",{children:["You have ",i.requirements.Fundraising,"  Fundraising points"]})]})]}):i.creditHours&&(o=R.jsxs("div",{children:[" ",R.jsxs("p",{children:["You have ",i.creditHours," credit hours"]}),R.jsx("p",{children:" Each credit hour is worth $5"})]}))),R.jsx(R.Fragment,{children:R.jsxs("div",{className:"fine",children:[R.jsxs("button",{className:"expandButton",onClick:i?r:()=>{},style:i&&{cursor:"pointer"},children:[R.jsxs("p",{className:"fine-category",children:[t,":"," ",R.jsx("span",{style:{color:t!=="Fine Reduction Amount"?"red":"green"},children:e})]}),i&&R.jsx("span",{style:{padding:"5px",transform:n?"rotate(0deg)":"rotate(90deg)"},className:"material-icons",children:"expand_more"})]}),n&&R.jsx("div",{className:"detail-container",children:o})]})})}function vk({userData:t,signOut:e}){const n=["Brotherhood Meetings","Checkpoints","Rituals","Rush Events"],[r,i]=te.useState(Object.keys(t).filter(a=>a!="name"&&a!="Fines").map(a=>{const u={name:a,amount:t.Fines[a],reducedRequirements:t.Fines.RR==="TRUE"};if(a==="Fine Reduction Amount")return{...u,details:{creditHours:t[a]["Credit Hours"]}};if(n.includes(a))return{...u,details:{events:t[a].events}};if(a==="Requirements")return{...u,details:{requirements:t[a]}}})),s=r.filter(a=>parseInt(a.amount.substring(1))>0).map(a=>R.jsx(_k,{name:a.name,amount:a.amount,expanded:a.expanded,details:a.details,toggleExpand:()=>o(a.name),reducedRequirements:a.reducedRequirements}));function o(a){i(u=>u.map(d=>d.name===a?{...d,expanded:!d.expanded}:d))}function l(a){const u=a.split(",");return u[1][1].toUpperCase()+u[1].substring(2)+" "+u[0][0].toUpperCase()+u[0].substring(1)}return R.jsx(R.Fragment,{children:R.jsxs("main",{children:[R.jsxs("h1",{className:"greeting",children:["What's good ",l(t.name)]}),R.jsx("h2",{children:" You have fines :) "}),R.jsxs("div",{className:"total-fine-card",children:[R.jsxs("h1",{className:"fine-amount",children:[" ",t.Fines["Final fine"]]}),r.reducedRequirements&&R.jsx("p",{className:"reduced-tag",children:"reduced requirements"})]}),R.jsx("div",{className:"fine-container",children:s}),R.jsx("button",{className:"sign-out",onClick:e,children:"Sign Out"})]})})}function yk(){const[t,e]=te.useState(null),[n,r]=te.useState(!0),[i,s]=te.useState(null);te.useEffect(()=>{const a=Go.onAuthStateChanged(async u=>{if(u)try{const d=sf(Cf,"/users/"),c=await of(d);s(c.val());const h=u.email.replace(/\./g,"_");h in c.val()&&e(h)}catch(d){console.error("Error updating dbData:",d)}else e(null)});return()=>{e(null),a()}},[]),te.useEffect(()=>{r(!1)},[i,t]);async function o(){try{const a=sf(Cf,"/users/"),u=await of(a);s(u.val())}catch(a){console.error("Error updating dbData:",a)}}const l=async()=>{try{await Go.signOut(),localStorage.removeItem("dbData")}catch(a){console.error("Error signing out:",a.message)}};return R.jsx(R.Fragment,{children:n?R.jsx("p",{children:"loading "}):R.jsxs(R.Fragment,{children:[!t&&R.jsx(gk,{setUser:e,updateDbData:o,dbData:i}),t&&R.jsx(vk,{userData:i[t],signOut:l})]})})}aa.createRoot(document.getElementById("root")).render(R.jsx(Tu.StrictMode,{children:R.jsx(y0,{clientId:"151974152748-9j40vpkhoearm72vj17qv7kir79om716.apps.googleusercontent.com",children:R.jsx(yk,{})})}));
