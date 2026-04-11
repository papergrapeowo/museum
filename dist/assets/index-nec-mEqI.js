function jy(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(i,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Xy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kd={exports:{}},Ro={},Zd={exports:{}},Ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function $y(){if(Bg)return Ut;Bg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function m(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(F,J,we){this.props=F,this.context=J,this.refs=w,this.updater=we||_}y.prototype.isReactComponent={},y.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(F,J,we){this.props=F,this.context=J,this.refs=w,this.updater=we||_}var C=T.prototype=new S;C.constructor=T,E(C,y.prototype),C.isPureReactComponent=!0;var P=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function M(F,J,we){var Be,Ye={},ue=null,_e=null;if(J!=null)for(Be in J.ref!==void 0&&(_e=J.ref),J.key!==void 0&&(ue=""+J.key),J)D.call(J,Be)&&!k.hasOwnProperty(Be)&&(Ye[Be]=J[Be]);var xe=arguments.length-2;if(xe===1)Ye.children=we;else if(1<xe){for(var We=Array(xe),Qe=0;Qe<xe;Qe++)We[Qe]=arguments[Qe+2];Ye.children=We}if(F&&F.defaultProps)for(Be in xe=F.defaultProps,xe)Ye[Be]===void 0&&(Ye[Be]=xe[Be]);return{$$typeof:i,type:F,key:ue,ref:_e,props:Ye,_owner:L.current}}function N(F,J){return{$$typeof:i,type:F.type,key:J,ref:F.ref,props:F.props,_owner:F._owner}}function re(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function B(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(we){return J[we]})}var q=/\/+/g;function Q(F,J){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):J.toString(36)}function ee(F,J,we,Be,Ye){var ue=typeof F;(ue==="undefined"||ue==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(ue){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case i:case e:_e=!0}}if(_e)return _e=F,Ye=Ye(_e),F=Be===""?"."+Q(_e,0):Be,P(Ye)?(we="",F!=null&&(we=F.replace(q,"$&/")+"/"),ee(Ye,J,we,"",function(Qe){return Qe})):Ye!=null&&(re(Ye)&&(Ye=N(Ye,we+(!Ye.key||_e&&_e.key===Ye.key?"":(""+Ye.key).replace(q,"$&/")+"/")+F)),J.push(Ye)),1;if(_e=0,Be=Be===""?".":Be+":",P(F))for(var xe=0;xe<F.length;xe++){ue=F[xe];var We=Be+Q(ue,xe);_e+=ee(ue,J,we,We,Ye)}else if(We=m(F),typeof We=="function")for(F=We.call(F),xe=0;!(ue=F.next()).done;)ue=ue.value,We=Be+Q(ue,xe++),_e+=ee(ue,J,we,We,Ye);else if(ue==="object")throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return _e}function ie(F,J,we){if(F==null)return F;var Be=[],Ye=0;return ee(F,Be,"","",function(ue){return J.call(we,ue,Ye++)}),Be}function G(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(we){(F._status===0||F._status===-1)&&(F._status=1,F._result=we)},function(we){(F._status===0||F._status===-1)&&(F._status=2,F._result=we)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var W={current:null},K={transition:null},te={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:K,ReactCurrentOwner:L};function de(){throw Error("act(...) is not supported in production builds of React.")}return Ut.Children={map:ie,forEach:function(F,J,we){ie(F,function(){J.apply(this,arguments)},we)},count:function(F){var J=0;return ie(F,function(){J++}),J},toArray:function(F){return ie(F,function(J){return J})||[]},only:function(F){if(!re(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ut.Component=y,Ut.Fragment=t,Ut.Profiler=a,Ut.PureComponent=T,Ut.StrictMode=r,Ut.Suspense=h,Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Ut.act=de,Ut.cloneElement=function(F,J,we){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Be=E({},F.props),Ye=F.key,ue=F.ref,_e=F._owner;if(J!=null){if(J.ref!==void 0&&(ue=J.ref,_e=L.current),J.key!==void 0&&(Ye=""+J.key),F.type&&F.type.defaultProps)var xe=F.type.defaultProps;for(We in J)D.call(J,We)&&!k.hasOwnProperty(We)&&(Be[We]=J[We]===void 0&&xe!==void 0?xe[We]:J[We])}var We=arguments.length-2;if(We===1)Be.children=we;else if(1<We){xe=Array(We);for(var Qe=0;Qe<We;Qe++)xe[Qe]=arguments[Qe+2];Be.children=xe}return{$$typeof:i,type:F.type,key:Ye,ref:ue,props:Be,_owner:_e}},Ut.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},Ut.createElement=M,Ut.createFactory=function(F){var J=M.bind(null,F);return J.type=F,J},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(F){return{$$typeof:c,render:F}},Ut.isValidElement=re,Ut.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:G}},Ut.memo=function(F,J){return{$$typeof:f,type:F,compare:J===void 0?null:J}},Ut.startTransition=function(F){var J=K.transition;K.transition={};try{F()}finally{K.transition=J}},Ut.unstable_act=de,Ut.useCallback=function(F,J){return W.current.useCallback(F,J)},Ut.useContext=function(F){return W.current.useContext(F)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(F){return W.current.useDeferredValue(F)},Ut.useEffect=function(F,J){return W.current.useEffect(F,J)},Ut.useId=function(){return W.current.useId()},Ut.useImperativeHandle=function(F,J,we){return W.current.useImperativeHandle(F,J,we)},Ut.useInsertionEffect=function(F,J){return W.current.useInsertionEffect(F,J)},Ut.useLayoutEffect=function(F,J){return W.current.useLayoutEffect(F,J)},Ut.useMemo=function(F,J){return W.current.useMemo(F,J)},Ut.useReducer=function(F,J,we){return W.current.useReducer(F,J,we)},Ut.useRef=function(F){return W.current.useRef(F)},Ut.useState=function(F){return W.current.useState(F)},Ut.useSyncExternalStore=function(F,J,we){return W.current.useSyncExternalStore(F,J,we)},Ut.useTransition=function(){return W.current.useTransition()},Ut.version="18.3.1",Ut}var zg;function Hh(){return zg||(zg=1,Zd.exports=$y()),Zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Yy(){if(Vg)return Ro;Vg=1;var i=Hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var v,g={},m=null,_=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(_=h.ref);for(v in h)r.call(h,v)&&!o.hasOwnProperty(v)&&(g[v]=h[v]);if(c&&c.defaultProps)for(v in h=c.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:c,key:m,ref:_,props:g,_owner:a.current}}return Ro.Fragment=t,Ro.jsx=u,Ro.jsxs=u,Ro}var Hg;function qy(){return Hg||(Hg=1,Kd.exports=Yy()),Kd.exports}var U=qy(),du={},Jd={exports:{}},ri={},Qd={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Ky(){return Gg||(Gg=1,(function(i){function e(K,te){var de=K.length;K.push(te);e:for(;0<de;){var F=de-1>>>1,J=K[F];if(0<a(J,te))K[F]=te,K[de]=J,de=F;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var te=K[0],de=K.pop();if(de!==te){K[0]=de;e:for(var F=0,J=K.length,we=J>>>1;F<we;){var Be=2*(F+1)-1,Ye=K[Be],ue=Be+1,_e=K[ue];if(0>a(Ye,de))ue<J&&0>a(_e,Ye)?(K[F]=_e,K[ue]=de,F=ue):(K[F]=Ye,K[Be]=de,F=Be);else if(ue<J&&0>a(_e,de))K[F]=_e,K[ue]=de,F=ue;else break e}}return te}function a(K,te){var de=K.sortIndex-te.sortIndex;return de!==0?de:K.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;i.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();i.unstable_now=function(){return u.now()-c}}var h=[],f=[],v=1,g=null,m=3,_=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(K){for(var te=t(f);te!==null;){if(te.callback===null)r(f);else if(te.startTime<=K)r(f),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(f)}}function P(K){if(w=!1,C(K),!E)if(t(h)!==null)E=!0,G(D);else{var te=t(f);te!==null&&W(P,te.startTime-K)}}function D(K,te){E=!1,w&&(w=!1,S(M),M=-1),_=!0;var de=m;try{for(C(te),g=t(h);g!==null&&(!(g.expirationTime>te)||K&&!B());){var F=g.callback;if(typeof F=="function"){g.callback=null,m=g.priorityLevel;var J=F(g.expirationTime<=te);te=i.unstable_now(),typeof J=="function"?g.callback=J:g===t(h)&&r(h),C(te)}else r(h);g=t(h)}if(g!==null)var we=!0;else{var Be=t(f);Be!==null&&W(P,Be.startTime-te),we=!1}return we}finally{g=null,m=de,_=!1}}var L=!1,k=null,M=-1,N=5,re=-1;function B(){return!(i.unstable_now()-re<N)}function q(){if(k!==null){var K=i.unstable_now();re=K;var te=!0;try{te=k(!0,K)}finally{te?Q():(L=!1,k=null)}}else L=!1}var Q;if(typeof T=="function")Q=function(){T(q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ie=ee.port2;ee.port1.onmessage=q,Q=function(){ie.postMessage(null)}}else Q=function(){y(q,0)};function G(K){k=K,L||(L=!0,Q())}function W(K,te){M=y(function(){K(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(K){K.callback=null},i.unstable_continueExecution=function(){E||_||(E=!0,G(D))},i.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<K?Math.floor(1e3/K):5},i.unstable_getCurrentPriorityLevel=function(){return m},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(K){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var de=m;m=te;try{return K()}finally{m=de}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(K,te){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var de=m;m=K;try{return te()}finally{m=de}},i.unstable_scheduleCallback=function(K,te,de){var F=i.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?F+de:F):de=F,K){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=de+J,K={id:v++,callback:te,priorityLevel:K,startTime:de,expirationTime:J,sortIndex:-1},de>F?(K.sortIndex=de,e(f,K),t(h)===null&&K===t(f)&&(w?(S(M),M=-1):w=!0,W(P,de-F))):(K.sortIndex=J,e(h,K),E||_||(E=!0,G(D))),K},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(K){var te=m;return function(){var de=m;m=te;try{return K.apply(this,arguments)}finally{m=de}}}})(ef)),ef}var Wg;function Zy(){return Wg||(Wg=1,Qd.exports=Ky()),Qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Jy(){if(jg)return ri;jg=1;var i=Hh(),e=Zy();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function o(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(a[n]=s,n=0;n<s.length;n++)r.add(s[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function m(n){return h.call(g,n)?!0:h.call(v,n)?!1:f.test(n)?g[n]=!0:(v[n]=!0,!1)}function _(n,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,l,d){if(s===null||typeof s>"u"||_(n,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(n,s,l,d,p,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];y[s]=new w(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new w(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(S,T);y[s]=new w(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(S,T);y[s]=new w(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,s,l,d){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,d)&&(l=null),d||p===null?m(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,s,l):n.setAttribute(s,l))))}var P=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),B=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),K=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,F;function J(n){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+n}var we=!1;function Be(n,s){if(!n||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(pe){var d=pe}Reflect.construct(n,[],s)}else{try{s.call()}catch(pe){d=pe}n.call(s.prototype)}else{try{throw Error()}catch(pe){d=pe}n()}}catch(pe){if(pe&&d&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),x=d.stack.split(`
`),A=p.length-1,O=x.length-1;1<=A&&0<=O&&p[A]!==x[O];)O--;for(;1<=A&&0<=O;A--,O--)if(p[A]!==x[O]){if(A!==1||O!==1)do if(A--,O--,0>O||p[A]!==x[O]){var H=`
`+p[A].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=A&&0<=O);break}}}finally{we=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Ye(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case N:return"Profiler";case M:return"StrictMode";case Q:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case re:return(n._context.displayName||"Context")+".Provider";case q:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return s=n.displayName||null,s!==null?s:ue(n.type)||"Memo";case G:s=n._payload,n=n._init;try{return ue(n(s))}catch{}}return null}function _e(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(s);case 8:return s===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(n){var s=We(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),d=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){d=""+A,x.call(this,A)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function gt(n){n._valueTracker||(n._valueTracker=Qe(n))}function dn(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return n&&(d=We(n)?n.checked?"true":"false":n.value),n=d,n!==l?(s.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ct(n,s){var l=s.checked;return de({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Gt(n,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=xe(s.value!=null?s.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Tt(n,s){s=s.checked,s!=null&&C(n,"checked",s,!1)}function Wt(n,s){Tt(n,s);var l=xe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?rn(n,s.type,l):s.hasOwnProperty("defaultValue")&&rn(n,s.type,xe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function V(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function rn(n,s,l){(s!=="number"||pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Nt=Array.isArray;function Ht(n,s,l,d){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+xe(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function et(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Nt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:xe(l)}}function b(n,s){var l=xe(s.value),d=xe(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function $(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var me,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,d,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=me.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Ae(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vt=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){vt.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),rt[s]=rt[n]})});function be(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||rt.hasOwnProperty(n)&&rt[n]?(""+s).trim():s+"px"}function Ne(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=be(l,s[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var Xe=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,s){if(s){if(Xe[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ze(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Re=null,Ve=null;function Te(n){if(n=ho(n)){if(typeof De!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Tl(s),De(n.stateNode,n.type,s))}}function ge(n){Re?Ve?Ve.push(n):Ve=[n]:Re=n}function Ze(){if(Re){var n=Re,s=Ve;if(Ve=Re=null,Te(n),s)for(n=0;n<s.length;n++)Te(s[n])}}function yt(n,s){return n(s)}function $t(){}var Dt=!1;function Dn(n,s,l){if(Dt)return n(s,l);Dt=!0;try{return yt(n,s,l)}finally{Dt=!1,(Re!==null||Ve!==null)&&($t(),Ze())}}function Rn(n,s){var l=n.stateNode;if(l===null)return null;var d=Tl(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Vr=!1;if(c)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Vr=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Vr=!1}function z(n,s,l,d,p,x,A,O,H){var pe=Array.prototype.slice.call(arguments,3);try{s.apply(l,pe)}catch(Ee){this.onError(Ee)}}var X=!1,ce=null,Se=!1,Pe=null,ut={onError:function(n){X=!0,ce=n}};function st(n,s,l,d,p,x,A,O,H){X=!1,ce=null,z.apply(ut,arguments)}function ft(n,s,l,d,p,x,A,O,H){if(st.apply(this,arguments),X){if(X){var pe=ce;X=!1,ce=null}else throw Error(t(198));Se||(Se=!0,Pe=pe)}}function $e(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Fe(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function mt(n){if($e(n)!==n)throw Error(t(188))}function at(n){var s=n.alternate;if(!s){if(s=$e(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,d=s;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return mt(p),n;if(x===d)return mt(p),s;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=x;else{for(var A=!1,O=p.child;O;){if(O===l){A=!0,l=p,d=x;break}if(O===d){A=!0,d=p,l=x;break}O=O.sibling}if(!A){for(O=x.child;O;){if(O===l){A=!0,l=x,d=p;break}if(O===d){A=!0,d=x,l=p;break}O=O.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function At(n){return n=at(n),n!==null?Lt(n):null}function Lt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Lt(n);if(s!==null)return s;n=n.sibling}return null}var tn=e.unstable_scheduleCallback,fn=e.unstable_cancelCallback,En=e.unstable_shouldYield,Yt=e.unstable_requestPaint,R=e.unstable_now,Z=e.unstable_getCurrentPriorityLevel,he=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,se=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,He=e.unstable_IdlePriority,Ue=null,ke=null;function nt(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Ue,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:It,dt=Math.log,tt=Math.LN2;function It(n){return n>>>=0,n===0?32:31-(dt(n)/tt|0)|0}var St=64,qt=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hn(n,s){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,x=n.pingedLanes,A=l&268435455;if(A!==0){var O=A&~p;O!==0?d=Ot(O):(x&=A,x!==0&&(d=Ot(x)))}else A=l&~p,A!==0?d=Ot(A):x!==0&&(d=Ot(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=d;0<s;)l=31-Ie(s),p=1<<l,d|=n[l],s&=~p;return d}function lt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xn(n,s){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-Ie(x),O=1<<A,H=p[A];H===-1?((O&l)===0||(O&d)!==0)&&(p[A]=lt(O,s)):H<=s&&(n.expiredLanes|=O),x&=~O}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Zn(){var n=St;return St<<=1,(St&4194240)===0&&(St=64),n}function Jn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function li(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ie(s),n[s]=l}function Hr(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ie(l),x=1<<p;s[p]=0,d[p]=-1,n[p]=-1,l&=~x}}function Jt(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var d=31-Ie(l),p=1<<d;p&s|n[d]&s&&(n[d]|=s),l&=~p}}var Et=0;function Ui(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vn,_i,pr,qa,Sp,Sc=!1,dl=[],Gr=null,Wr=null,jr=null,Ka=new Map,Za=new Map,Xr=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(n,s){switch(n){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Ka.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(s.pointerId)}}function Ja(n,s,l,d,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[p]},s!==null&&(s=ho(s),s!==null&&_i(s)),n):(n.eventSystemFlags|=d,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function px(n,s,l,d,p){switch(s){case"focusin":return Gr=Ja(Gr,n,s,l,d,p),!0;case"dragenter":return Wr=Ja(Wr,n,s,l,d,p),!0;case"mouseover":return jr=Ja(jr,n,s,l,d,p),!0;case"pointerover":var x=p.pointerId;return Ka.set(x,Ja(Ka.get(x)||null,n,s,l,d,p)),!0;case"gotpointercapture":return x=p.pointerId,Za.set(x,Ja(Za.get(x)||null,n,s,l,d,p)),!0}return!1}function Ep(n){var s=ys(n.target);if(s!==null){var l=$e(s);if(l!==null){if(s=l.tag,s===13){if(s=Fe(l),s!==null){n.blockedOn=s,Sp(n.priority,function(){pr(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fl(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=Ec(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);bt=d,l.target.dispatchEvent(d),bt=null}else return s=ho(l),s!==null&&_i(s),n.blockedOn=l,!1;s.shift()}return!0}function wp(n,s,l){fl(n)&&l.delete(s)}function mx(){Sc=!1,Gr!==null&&fl(Gr)&&(Gr=null),Wr!==null&&fl(Wr)&&(Wr=null),jr!==null&&fl(jr)&&(jr=null),Ka.forEach(wp),Za.forEach(wp)}function Qa(n,s){n.blockedOn===s&&(n.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mx)))}function eo(n){function s(p){return Qa(p,n)}if(0<dl.length){Qa(dl[0],n);for(var l=1;l<dl.length;l++){var d=dl[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Gr!==null&&Qa(Gr,n),Wr!==null&&Qa(Wr,n),jr!==null&&Qa(jr,n),Ka.forEach(s),Za.forEach(s),l=0;l<Xr.length;l++)d=Xr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Xr.length&&(l=Xr[0],l.blockedOn===null);)Ep(l),l.blockedOn===null&&Xr.shift()}var Ys=P.ReactCurrentBatchConfig,hl=!0;function gx(n,s,l,d){var p=Et,x=Ys.transition;Ys.transition=null;try{Et=1,Mc(n,s,l,d)}finally{Et=p,Ys.transition=x}}function vx(n,s,l,d){var p=Et,x=Ys.transition;Ys.transition=null;try{Et=4,Mc(n,s,l,d)}finally{Et=p,Ys.transition=x}}function Mc(n,s,l,d){if(hl){var p=Ec(n,s,l,d);if(p===null)zc(n,s,d,pl,l),Mp(n,d);else if(px(p,n,s,l,d))d.stopPropagation();else if(Mp(n,d),s&4&&-1<hx.indexOf(n)){for(;p!==null;){var x=ho(p);if(x!==null&&vn(x),x=Ec(n,s,l,d),x===null&&zc(n,s,d,pl,l),x===p)break;p=x}p!==null&&d.stopPropagation()}else zc(n,s,d,null,l)}}var pl=null;function Ec(n,s,l,d){if(pl=null,n=j(d),n=ys(n),n!==null)if(s=$e(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Fe(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return pl=n,null}function bp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case he:return 1;case oe:return 4;case se:case Oe:return 16;case He:return 536870912;default:return 16}default:return 16}}var $r=null,wc=null,ml=null;function Tp(){if(ml)return ml;var n,s=wc,l=s.length,d,p="value"in $r?$r.value:$r.textContent,x=p.length;for(n=0;n<l&&s[n]===p[n];n++);var A=l-n;for(d=1;d<=A&&s[l-d]===p[x-d];d++);return ml=p.slice(n,1<d?1-d:void 0)}function gl(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function vl(){return!0}function Ap(){return!1}function ui(n){function s(l,d,p,x,A){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(x):x[O]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vl:Ap,this.isPropagationStopped=Ap,this}return de(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),s}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=ui(qs),to=de({},qs,{view:0,detail:0}),_x=ui(to),Tc,Ac,no,_l=de({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==no&&(no&&n.type==="mousemove"?(Tc=n.screenX-no.screenX,Ac=n.screenY-no.screenY):Ac=Tc=0,no=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),Rp=ui(_l),xx=de({},_l,{dataTransfer:0}),yx=ui(xx),Sx=de({},to,{relatedTarget:0}),Rc=ui(Sx),Mx=de({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=ui(Mx),wx=de({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bx=ui(wx),Tx=de({},qs,{data:0}),Cp=ui(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Cx[n])?!!s[n]:!1}function Cc(){return Px}var Nx=de({},to,{key:function(n){if(n.key){var s=Ax[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lx=ui(Nx),Dx=de({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=ui(Dx),Ix=de({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Ux=ui(Ix),Fx=de({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=ui(Fx),kx=de({},_l,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bx=ui(kx),zx=[9,13,27,32],Pc=c&&"CompositionEvent"in window,io=null;c&&"documentMode"in document&&(io=document.documentMode);var Vx=c&&"TextEvent"in window&&!io,Np=c&&(!Pc||io&&8<io&&11>=io),Lp=" ",Dp=!1;function Ip(n,s){switch(n){case"keyup":return zx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Hx(n,s){switch(n){case"compositionend":return Up(s);case"keypress":return s.which!==32?null:(Dp=!0,Lp);case"textInput":return n=s.data,n===Lp&&Dp?null:n;default:return null}}function Gx(n,s){if(Ks)return n==="compositionend"||!Pc&&Ip(n,s)?(n=Tp(),ml=wc=$r=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Np&&s.locale!=="ko"?null:s.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Wx[n.type]:s==="textarea"}function Op(n,s,l,d){ge(d),s=El(s,"onChange"),0<s.length&&(l=new bc("onChange","change",null,l,d),n.push({event:l,listeners:s}))}var ro=null,so=null;function jx(n){tm(n,0)}function xl(n){var s=ta(n);if(dn(s))return n}function Xx(n,s){if(n==="change")return s}var kp=!1;if(c){var Nc;if(c){var Lc="oninput"in document;if(!Lc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Lc=typeof Bp.oninput=="function"}Nc=Lc}else Nc=!1;kp=Nc&&(!document.documentMode||9<document.documentMode)}function zp(){ro&&(ro.detachEvent("onpropertychange",Vp),so=ro=null)}function Vp(n){if(n.propertyName==="value"&&xl(so)){var s=[];Op(s,so,n,j(n)),Dn(jx,s)}}function $x(n,s,l){n==="focusin"?(zp(),ro=s,so=l,ro.attachEvent("onpropertychange",Vp)):n==="focusout"&&zp()}function Yx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(so)}function qx(n,s){if(n==="click")return xl(s)}function Kx(n,s){if(n==="input"||n==="change")return xl(s)}function Zx(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Fi=typeof Object.is=="function"?Object.is:Zx;function ao(n,s){if(Fi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!Fi(n[p],s[p]))return!1}return!0}function Hp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gp(n,s){var l=Hp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=s&&d>=s)return{node:l,offset:s-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hp(l)}}function Wp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Wp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function jp(){for(var n=window,s=pt();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=pt(n.document)}return s}function Dc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Jx(n){var s=jp(),l=n.focusedElem,d=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Wp(l.ownerDocument.documentElement,l)){if(d!==null&&Dc(l)){if(s=d.start,n=d.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,x=Math.min(d.start,p);d=d.end===void 0?x:Math.min(d.end,p),!n.extend&&x>d&&(p=d,d=x,x=p),p=Gp(l,x);var A=Gp(l,d);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),x>d?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qx=c&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ic=null,oo=null,Uc=!1;function Xp(n,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Uc||Zs==null||Zs!==pt(d)||(d=Zs,"selectionStart"in d&&Dc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),oo&&ao(oo,d)||(oo=d,d=El(Ic,"onSelect"),0<d.length&&(s=new bc("onSelect","select",null,s,l),n.push({event:s,listeners:d}),s.target=Zs)))}function yl(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Js={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Fc={},$p={};c&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Sl(n){if(Fc[n])return Fc[n];if(!Js[n])return n;var s=Js[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in $p)return Fc[n]=s[l];return n}var Yp=Sl("animationend"),qp=Sl("animationiteration"),Kp=Sl("animationstart"),Zp=Sl("transitionend"),Jp=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,s){Jp.set(n,s),o(s,[n])}for(var Oc=0;Oc<Qp.length;Oc++){var kc=Qp[Oc],ey=kc.toLowerCase(),ty=kc[0].toUpperCase()+kc.slice(1);Yr(ey,"on"+ty)}Yr(Yp,"onAnimationEnd"),Yr(qp,"onAnimationIteration"),Yr(Kp,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Zp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function em(n,s,l){var d=n.type||"unknown-event";n.currentTarget=l,ft(d,s,void 0,n),n.currentTarget=null}function tm(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var A=d.length-1;0<=A;A--){var O=d[A],H=O.instance,pe=O.currentTarget;if(O=O.listener,H!==x&&p.isPropagationStopped())break e;em(p,O,pe),x=H}else for(A=0;A<d.length;A++){if(O=d[A],H=O.instance,pe=O.currentTarget,O=O.listener,H!==x&&p.isPropagationStopped())break e;em(p,O,pe),x=H}}}if(Se)throw n=Pe,Se=!1,Pe=null,n}function an(n,s){var l=s[Xc];l===void 0&&(l=s[Xc]=new Set);var d=n+"__bubble";l.has(d)||(nm(s,n,2,!1),l.add(d))}function Bc(n,s,l){var d=0;s&&(d|=4),nm(l,n,d,s)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function uo(n){if(!n[Ml]){n[Ml]=!0,r.forEach(function(l){l!=="selectionchange"&&(ny.has(l)||Bc(l,!1,n),Bc(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ml]||(s[Ml]=!0,Bc("selectionchange",!1,s))}}function nm(n,s,l,d){switch(bp(s)){case 1:var p=gx;break;case 4:p=vx;break;default:p=Mc}l=p.bind(null,s,l,n),p=void 0,!Vr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function zc(n,s,l,d,p){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var O=d.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(A===4)for(A=d.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;A=A.return}for(;O!==null;){if(A=ys(O),A===null)return;if(H=A.tag,H===5||H===6){d=x=A;continue e}O=O.parentNode}}d=d.return}Dn(function(){var pe=x,Ee=j(l),Ce=[];e:{var Me=Jp.get(n);if(Me!==void 0){var qe=bc,it=n;switch(n){case"keypress":if(gl(l)===0)break e;case"keydown":case"keyup":qe=Lx;break;case"focusin":it="focus",qe=Rc;break;case"focusout":it="blur",qe=Rc;break;case"beforeblur":case"afterblur":qe=Rc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Ux;break;case Yp:case qp:case Kp:qe=Ex;break;case Zp:qe=Ox;break;case"scroll":qe=_x;break;case"wheel":qe=Bx;break;case"copy":case"cut":case"paste":qe=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Pp}var ot=(s&4)!==0,_n=!ot&&n==="scroll",ae=ot?Me!==null?Me+"Capture":null:Me;ot=[];for(var Y=pe,fe;Y!==null;){fe=Y;var Le=fe.stateNode;if(fe.tag===5&&Le!==null&&(fe=Le,ae!==null&&(Le=Rn(Y,ae),Le!=null&&ot.push(co(Y,Le,fe)))),_n)break;Y=Y.return}0<ot.length&&(Me=new qe(Me,it,null,l,Ee),Ce.push({event:Me,listeners:ot}))}}if((s&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Me&&l!==bt&&(it=l.relatedTarget||l.fromElement)&&(ys(it)||it[mr]))break e;if((qe||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,qe?(it=l.relatedTarget||l.toElement,qe=pe,it=it?ys(it):null,it!==null&&(_n=$e(it),it!==_n||it.tag!==5&&it.tag!==6)&&(it=null)):(qe=null,it=pe),qe!==it)){if(ot=Rp,Le="onMouseLeave",ae="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Pp,Le="onPointerLeave",ae="onPointerEnter",Y="pointer"),_n=qe==null?Me:ta(qe),fe=it==null?Me:ta(it),Me=new ot(Le,Y+"leave",qe,l,Ee),Me.target=_n,Me.relatedTarget=fe,Le=null,ys(Ee)===pe&&(ot=new ot(ae,Y+"enter",it,l,Ee),ot.target=fe,ot.relatedTarget=_n,Le=ot),_n=Le,qe&&it)t:{for(ot=qe,ae=it,Y=0,fe=ot;fe;fe=Qs(fe))Y++;for(fe=0,Le=ae;Le;Le=Qs(Le))fe++;for(;0<Y-fe;)ot=Qs(ot),Y--;for(;0<fe-Y;)ae=Qs(ae),fe--;for(;Y--;){if(ot===ae||ae!==null&&ot===ae.alternate)break t;ot=Qs(ot),ae=Qs(ae)}ot=null}else ot=null;qe!==null&&im(Ce,Me,qe,ot,!1),it!==null&&_n!==null&&im(Ce,_n,it,ot,!0)}}e:{if(Me=pe?ta(pe):window,qe=Me.nodeName&&Me.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Me.type==="file")var ct=Xx;else if(Fp(Me))if(kp)ct=Kx;else{ct=Yx;var _t=$x}else(qe=Me.nodeName)&&qe.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(ct=qx);if(ct&&(ct=ct(n,pe))){Op(Ce,ct,l,Ee);break e}_t&&_t(n,Me,pe),n==="focusout"&&(_t=Me._wrapperState)&&_t.controlled&&Me.type==="number"&&rn(Me,"number",Me.value)}switch(_t=pe?ta(pe):window,n){case"focusin":(Fp(_t)||_t.contentEditable==="true")&&(Zs=_t,Ic=pe,oo=null);break;case"focusout":oo=Ic=Zs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Xp(Ce,l,Ee);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Xp(Ce,l,Ee)}var xt;if(Pc)e:{switch(n){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Ks?Ip(n,l)&&(wt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(wt="onCompositionStart");wt&&(Np&&l.locale!=="ko"&&(Ks||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Ks&&(xt=Tp()):($r=Ee,wc="value"in $r?$r.value:$r.textContent,Ks=!0)),_t=El(pe,wt),0<_t.length&&(wt=new Cp(wt,n,null,l,Ee),Ce.push({event:wt,listeners:_t}),xt?wt.data=xt:(xt=Up(l),xt!==null&&(wt.data=xt)))),(xt=Vx?Hx(n,l):Gx(n,l))&&(pe=El(pe,"onBeforeInput"),0<pe.length&&(Ee=new Cp("onBeforeInput","beforeinput",null,l,Ee),Ce.push({event:Ee,listeners:pe}),Ee.data=xt))}tm(Ce,s)})}function co(n,s,l){return{instance:n,listener:s,currentTarget:l}}function El(n,s){for(var l=s+"Capture",d=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Rn(n,l),x!=null&&d.unshift(co(n,x,p)),x=Rn(n,s),x!=null&&d.push(co(n,x,p))),n=n.return}return d}function Qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function im(n,s,l,d,p){for(var x=s._reactName,A=[];l!==null&&l!==d;){var O=l,H=O.alternate,pe=O.stateNode;if(H!==null&&H===d)break;O.tag===5&&pe!==null&&(O=pe,p?(H=Rn(l,x),H!=null&&A.unshift(co(l,H,O))):p||(H=Rn(l,x),H!=null&&A.push(co(l,H,O)))),l=l.return}A.length!==0&&n.push({event:s,listeners:A})}var iy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function rm(n){return(typeof n=="string"?n:""+n).replace(iy,`
`).replace(ry,"")}function wl(n,s,l){if(s=rm(s),rm(n)!==s&&l)throw Error(t(425))}function bl(){}var Vc=null,Hc=null;function Gc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(n){return sm.resolve(null).then(n).catch(oy)}:Wc;function oy(n){setTimeout(function(){throw n})}function jc(n,s){var l=s,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),eo(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);eo(s)}function qr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function am(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Ji="__reactFiber$"+ea,fo="__reactProps$"+ea,mr="__reactContainer$"+ea,Xc="__reactEvents$"+ea,ly="__reactListeners$"+ea,uy="__reactHandles$"+ea;function ys(n){var s=n[Ji];if(s)return s;for(var l=n.parentNode;l;){if(s=l[mr]||l[Ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=am(n);n!==null;){if(l=n[Ji])return l;n=am(n)}return s}n=l,l=n.parentNode}return null}function ho(n){return n=n[Ji]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Tl(n){return n[fo]||null}var $c=[],na=-1;function Kr(n){return{current:n}}function on(n){0>na||(n.current=$c[na],$c[na]=null,na--)}function sn(n,s){na++,$c[na]=n.current,n.current=s}var Zr={},On=Kr(Zr),Qn=Kr(!1),Ss=Zr;function ia(n,s){var l=n.type.contextTypes;if(!l)return Zr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=s[x];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function ei(n){return n=n.childContextTypes,n!=null}function Al(){on(Qn),on(On)}function om(n,s,l){if(On.current!==Zr)throw Error(t(168));sn(On,s),sn(Qn,l)}function lm(n,s,l){var d=n.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,_e(n)||"Unknown",p));return de({},l,d)}function Rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Ss=On.current,sn(On,n),sn(Qn,Qn.current),!0}function um(n,s,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=lm(n,s,Ss),d.__reactInternalMemoizedMergedChildContext=n,on(Qn),on(On),sn(On,n)):on(Qn),sn(Qn,l)}var gr=null,Cl=!1,Yc=!1;function cm(n){gr===null?gr=[n]:gr.push(n)}function cy(n){Cl=!0,cm(n)}function Jr(){if(!Yc&&gr!==null){Yc=!0;var n=0,s=Et;try{var l=gr;for(Et=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}gr=null,Cl=!1}catch(p){throw gr!==null&&(gr=gr.slice(n+1)),tn(he,Jr),p}finally{Et=s,Yc=!1}}return null}var ra=[],sa=0,Pl=null,Nl=0,xi=[],yi=0,Ms=null,vr=1,_r="";function Es(n,s){ra[sa++]=Nl,ra[sa++]=Pl,Pl=n,Nl=s}function dm(n,s,l){xi[yi++]=vr,xi[yi++]=_r,xi[yi++]=Ms,Ms=n;var d=vr;n=_r;var p=32-Ie(d)-1;d&=~(1<<p),l+=1;var x=32-Ie(s)+p;if(30<x){var A=p-p%5;x=(d&(1<<A)-1).toString(32),d>>=A,p-=A,vr=1<<32-Ie(s)+p|l<<p|d,_r=x+n}else vr=1<<x|l<<p|d,_r=n}function qc(n){n.return!==null&&(Es(n,1),dm(n,1,0))}function Kc(n){for(;n===Pl;)Pl=ra[--sa],ra[sa]=null,Nl=ra[--sa],ra[sa]=null;for(;n===Ms;)Ms=xi[--yi],xi[yi]=null,_r=xi[--yi],xi[yi]=null,vr=xi[--yi],xi[yi]=null}var ci=null,di=null,un=!1,Oi=null;function fm(n,s){var l=wi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function hm(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,ci=n,di=qr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,ci=n,di=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Ms!==null?{id:vr,overflow:_r}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=wi(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,ci=n,di=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(un){var s=di;if(s){var l=s;if(!hm(n,s)){if(Zc(n))throw Error(t(418));s=qr(l.nextSibling);var d=ci;s&&hm(n,s)?fm(d,l):(n.flags=n.flags&-4097|2,un=!1,ci=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,un=!1,ci=n}}}function pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ci=n}function Ll(n){if(n!==ci)return!1;if(!un)return pm(n),un=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Gc(n.type,n.memoizedProps)),s&&(s=di)){if(Zc(n))throw mm(),Error(t(418));for(;s;)fm(n,s),s=qr(s.nextSibling)}if(pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){di=qr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}di=null}}else di=ci?qr(n.stateNode.nextSibling):null;return!0}function mm(){for(var n=di;n;)n=qr(n.nextSibling)}function aa(){di=ci=null,un=!1}function Qc(n){Oi===null?Oi=[n]:Oi.push(n)}var dy=P.ReactCurrentBatchConfig;function po(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,x=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var O=p.refs;A===null?delete O[x]:O[x]=A},s._stringRef=x,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Dl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function gm(n){var s=n._init;return s(n._payload)}function vm(n){function s(ae,Y){if(n){var fe=ae.deletions;fe===null?(ae.deletions=[Y],ae.flags|=16):fe.push(Y)}}function l(ae,Y){if(!n)return null;for(;Y!==null;)s(ae,Y),Y=Y.sibling;return null}function d(ae,Y){for(ae=new Map;Y!==null;)Y.key!==null?ae.set(Y.key,Y):ae.set(Y.index,Y),Y=Y.sibling;return ae}function p(ae,Y){return ae=as(ae,Y),ae.index=0,ae.sibling=null,ae}function x(ae,Y,fe){return ae.index=fe,n?(fe=ae.alternate,fe!==null?(fe=fe.index,fe<Y?(ae.flags|=2,Y):fe):(ae.flags|=2,Y)):(ae.flags|=1048576,Y)}function A(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function O(ae,Y,fe,Le){return Y===null||Y.tag!==6?(Y=Wd(fe,ae.mode,Le),Y.return=ae,Y):(Y=p(Y,fe),Y.return=ae,Y)}function H(ae,Y,fe,Le){var ct=fe.type;return ct===k?Ee(ae,Y,fe.props.children,Le,fe.key):Y!==null&&(Y.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===G&&gm(ct)===Y.type)?(Le=p(Y,fe.props),Le.ref=po(ae,Y,fe),Le.return=ae,Le):(Le=iu(fe.type,fe.key,fe.props,null,ae.mode,Le),Le.ref=po(ae,Y,fe),Le.return=ae,Le)}function pe(ae,Y,fe,Le){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==fe.containerInfo||Y.stateNode.implementation!==fe.implementation?(Y=jd(fe,ae.mode,Le),Y.return=ae,Y):(Y=p(Y,fe.children||[]),Y.return=ae,Y)}function Ee(ae,Y,fe,Le,ct){return Y===null||Y.tag!==7?(Y=Ns(fe,ae.mode,Le,ct),Y.return=ae,Y):(Y=p(Y,fe),Y.return=ae,Y)}function Ce(ae,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Wd(""+Y,ae.mode,fe),Y.return=ae,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return fe=iu(Y.type,Y.key,Y.props,null,ae.mode,fe),fe.ref=po(ae,null,Y),fe.return=ae,fe;case L:return Y=jd(Y,ae.mode,fe),Y.return=ae,Y;case G:var Le=Y._init;return Ce(ae,Le(Y._payload),fe)}if(Nt(Y)||te(Y))return Y=Ns(Y,ae.mode,fe,null),Y.return=ae,Y;Dl(ae,Y)}return null}function Me(ae,Y,fe,Le){var ct=Y!==null?Y.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ct!==null?null:O(ae,Y,""+fe,Le);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case D:return fe.key===ct?H(ae,Y,fe,Le):null;case L:return fe.key===ct?pe(ae,Y,fe,Le):null;case G:return ct=fe._init,Me(ae,Y,ct(fe._payload),Le)}if(Nt(fe)||te(fe))return ct!==null?null:Ee(ae,Y,fe,Le,null);Dl(ae,fe)}return null}function qe(ae,Y,fe,Le,ct){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return ae=ae.get(fe)||null,O(Y,ae,""+Le,ct);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case D:return ae=ae.get(Le.key===null?fe:Le.key)||null,H(Y,ae,Le,ct);case L:return ae=ae.get(Le.key===null?fe:Le.key)||null,pe(Y,ae,Le,ct);case G:var _t=Le._init;return qe(ae,Y,fe,_t(Le._payload),ct)}if(Nt(Le)||te(Le))return ae=ae.get(fe)||null,Ee(Y,ae,Le,ct,null);Dl(Y,Le)}return null}function it(ae,Y,fe,Le){for(var ct=null,_t=null,xt=Y,wt=Y=0,Nn=null;xt!==null&&wt<fe.length;wt++){xt.index>wt?(Nn=xt,xt=null):Nn=xt.sibling;var Kt=Me(ae,xt,fe[wt],Le);if(Kt===null){xt===null&&(xt=Nn);break}n&&xt&&Kt.alternate===null&&s(ae,xt),Y=x(Kt,Y,wt),_t===null?ct=Kt:_t.sibling=Kt,_t=Kt,xt=Nn}if(wt===fe.length)return l(ae,xt),un&&Es(ae,wt),ct;if(xt===null){for(;wt<fe.length;wt++)xt=Ce(ae,fe[wt],Le),xt!==null&&(Y=x(xt,Y,wt),_t===null?ct=xt:_t.sibling=xt,_t=xt);return un&&Es(ae,wt),ct}for(xt=d(ae,xt);wt<fe.length;wt++)Nn=qe(xt,ae,wt,fe[wt],Le),Nn!==null&&(n&&Nn.alternate!==null&&xt.delete(Nn.key===null?wt:Nn.key),Y=x(Nn,Y,wt),_t===null?ct=Nn:_t.sibling=Nn,_t=Nn);return n&&xt.forEach(function(os){return s(ae,os)}),un&&Es(ae,wt),ct}function ot(ae,Y,fe,Le){var ct=te(fe);if(typeof ct!="function")throw Error(t(150));if(fe=ct.call(fe),fe==null)throw Error(t(151));for(var _t=ct=null,xt=Y,wt=Y=0,Nn=null,Kt=fe.next();xt!==null&&!Kt.done;wt++,Kt=fe.next()){xt.index>wt?(Nn=xt,xt=null):Nn=xt.sibling;var os=Me(ae,xt,Kt.value,Le);if(os===null){xt===null&&(xt=Nn);break}n&&xt&&os.alternate===null&&s(ae,xt),Y=x(os,Y,wt),_t===null?ct=os:_t.sibling=os,_t=os,xt=Nn}if(Kt.done)return l(ae,xt),un&&Es(ae,wt),ct;if(xt===null){for(;!Kt.done;wt++,Kt=fe.next())Kt=Ce(ae,Kt.value,Le),Kt!==null&&(Y=x(Kt,Y,wt),_t===null?ct=Kt:_t.sibling=Kt,_t=Kt);return un&&Es(ae,wt),ct}for(xt=d(ae,xt);!Kt.done;wt++,Kt=fe.next())Kt=qe(xt,ae,wt,Kt.value,Le),Kt!==null&&(n&&Kt.alternate!==null&&xt.delete(Kt.key===null?wt:Kt.key),Y=x(Kt,Y,wt),_t===null?ct=Kt:_t.sibling=Kt,_t=Kt);return n&&xt.forEach(function(Wy){return s(ae,Wy)}),un&&Es(ae,wt),ct}function _n(ae,Y,fe,Le){if(typeof fe=="object"&&fe!==null&&fe.type===k&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case D:e:{for(var ct=fe.key,_t=Y;_t!==null;){if(_t.key===ct){if(ct=fe.type,ct===k){if(_t.tag===7){l(ae,_t.sibling),Y=p(_t,fe.props.children),Y.return=ae,ae=Y;break e}}else if(_t.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===G&&gm(ct)===_t.type){l(ae,_t.sibling),Y=p(_t,fe.props),Y.ref=po(ae,_t,fe),Y.return=ae,ae=Y;break e}l(ae,_t);break}else s(ae,_t);_t=_t.sibling}fe.type===k?(Y=Ns(fe.props.children,ae.mode,Le,fe.key),Y.return=ae,ae=Y):(Le=iu(fe.type,fe.key,fe.props,null,ae.mode,Le),Le.ref=po(ae,Y,fe),Le.return=ae,ae=Le)}return A(ae);case L:e:{for(_t=fe.key;Y!==null;){if(Y.key===_t)if(Y.tag===4&&Y.stateNode.containerInfo===fe.containerInfo&&Y.stateNode.implementation===fe.implementation){l(ae,Y.sibling),Y=p(Y,fe.children||[]),Y.return=ae,ae=Y;break e}else{l(ae,Y);break}else s(ae,Y);Y=Y.sibling}Y=jd(fe,ae.mode,Le),Y.return=ae,ae=Y}return A(ae);case G:return _t=fe._init,_n(ae,Y,_t(fe._payload),Le)}if(Nt(fe))return it(ae,Y,fe,Le);if(te(fe))return ot(ae,Y,fe,Le);Dl(ae,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,Y!==null&&Y.tag===6?(l(ae,Y.sibling),Y=p(Y,fe),Y.return=ae,ae=Y):(l(ae,Y),Y=Wd(fe,ae.mode,Le),Y.return=ae,ae=Y),A(ae)):l(ae,Y)}return _n}var oa=vm(!0),_m=vm(!1),Il=Kr(null),Ul=null,la=null,ed=null;function td(){ed=la=Ul=null}function nd(n){var s=Il.current;on(Il),n._currentValue=s}function id(n,s,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),n===l)break;n=n.return}}function ua(n,s){Ul=n,ed=la=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(ti=!0),n.firstContext=null)}function Si(n){var s=n._currentValue;if(ed!==n)if(n={context:n,memoizedValue:s,next:null},la===null){if(Ul===null)throw Error(t(308));la=n,Ul.dependencies={lanes:0,firstContext:n}}else la=la.next=n;return s}var ws=null;function rd(n){ws===null?ws=[n]:ws.push(n)}function xm(n,s,l,d){var p=s.interleaved;return p===null?(l.next=l,rd(s)):(l.next=p.next,p.next=l),s.interleaved=l,xr(n,d)}function xr(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Qr=!1;function sd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function es(n,s,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(jt&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,xr(n,l)}return p=d.interleaved,p===null?(s.next=s,rd(d)):(s.next=p.next,p.next=s),d.interleaved=s,xr(n,l)}function Fl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,Jt(n,l)}}function Sm(n,s){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?p=x=s:x=x.next=s}else p=x=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function Ol(n,s,l,d){var p=n.updateQueue;Qr=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var H=O,pe=H.next;H.next=null,A===null?x=pe:A.next=pe,A=H;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,O=Ee.lastBaseUpdate,O!==A&&(O===null?Ee.firstBaseUpdate=pe:O.next=pe,Ee.lastBaseUpdate=H))}if(x!==null){var Ce=p.baseState;A=0,Ee=pe=H=null,O=x;do{var Me=O.lane,qe=O.eventTime;if((d&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:qe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var it=n,ot=O;switch(Me=s,qe=l,ot.tag){case 1:if(it=ot.payload,typeof it=="function"){Ce=it.call(qe,Ce,Me);break e}Ce=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ot.payload,Me=typeof it=="function"?it.call(qe,Ce,Me):it,Me==null)break e;Ce=de({},Ce,Me);break e;case 2:Qr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Me=p.effects,Me===null?p.effects=[O]:Me.push(O))}else qe={eventTime:qe,lane:Me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ee===null?(pe=Ee=qe,H=Ce):Ee=Ee.next=qe,A|=Me;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Me=O,O=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(Ee===null&&(H=Ce),p.baseState=H,p.firstBaseUpdate=pe,p.lastBaseUpdate=Ee,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);As|=A,n.lanes=A,n.memoizedState=Ce}}function Mm(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var d=n[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var mo={},Qi=Kr(mo),go=Kr(mo),vo=Kr(mo);function bs(n){if(n===mo)throw Error(t(174));return n}function ad(n,s){switch(sn(vo,s),sn(go,n),sn(Qi,mo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ye(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=ye(s,n)}on(Qi),sn(Qi,s)}function ca(){on(Qi),on(go),on(vo)}function Em(n){bs(vo.current);var s=bs(Qi.current),l=ye(s,n.type);s!==l&&(sn(go,n),sn(Qi,l))}function od(n){go.current===n&&(on(Qi),on(go))}var pn=Kr(0);function kl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ld=[];function ud(){for(var n=0;n<ld.length;n++)ld[n]._workInProgressVersionPrimary=null;ld.length=0}var Bl=P.ReactCurrentDispatcher,cd=P.ReactCurrentBatchConfig,Ts=0,mn=null,wn=null,Cn=null,zl=!1,_o=!1,xo=0,fy=0;function kn(){throw Error(t(321))}function dd(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!Fi(n[l],s[l]))return!1;return!0}function fd(n,s,l,d,p,x){if(Ts=x,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Bl.current=n===null||n.memoizedState===null?gy:vy,n=l(d,p),_o){x=0;do{if(_o=!1,xo=0,25<=x)throw Error(t(301));x+=1,Cn=wn=null,s.updateQueue=null,Bl.current=_y,n=l(d,p)}while(_o)}if(Bl.current=Gl,s=wn!==null&&wn.next!==null,Ts=0,Cn=wn=mn=null,zl=!1,s)throw Error(t(300));return n}function hd(){var n=xo!==0;return xo=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?mn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Mi(){if(wn===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var s=Cn===null?mn.memoizedState:Cn.next;if(s!==null)Cn=s,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Cn===null?mn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function yo(n,s){return typeof s=="function"?s(n):s}function pd(n){var s=Mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=wn,p=d.baseQueue,x=l.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}d.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,d=d.baseState;var O=A=null,H=null,pe=x;do{var Ee=pe.lane;if((Ts&Ee)===Ee)H!==null&&(H=H.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),d=pe.hasEagerState?pe.eagerState:n(d,pe.action);else{var Ce={lane:Ee,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};H===null?(O=H=Ce,A=d):H=H.next=Ce,mn.lanes|=Ee,As|=Ee}pe=pe.next}while(pe!==null&&pe!==x);H===null?A=d:H.next=O,Fi(d,s.memoizedState)||(ti=!0),s.memoizedState=d,s.baseState=A,s.baseQueue=H,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do x=p.lane,mn.lanes|=x,As|=x,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function md(n){var s=Mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,x=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do x=n(x,A.action),A=A.next;while(A!==p);Fi(x,s.memoizedState)||(ti=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,d]}function wm(){}function bm(n,s){var l=mn,d=Mi(),p=s(),x=!Fi(d.memoizedState,p);if(x&&(d.memoizedState=p,ti=!0),d=d.queue,gd(Rm.bind(null,l,d,n),[n]),d.getSnapshot!==s||x||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,So(9,Am.bind(null,l,d,p,s),void 0,null),Pn===null)throw Error(t(349));(Ts&30)!==0||Tm(l,s,p)}return p}function Tm(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function Am(n,s,l,d){s.value=l,s.getSnapshot=d,Cm(s)&&Pm(n)}function Rm(n,s,l){return l(function(){Cm(s)&&Pm(n)})}function Cm(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!Fi(n,l)}catch{return!0}}function Pm(n){var s=xr(n,1);s!==null&&Vi(s,n,1,-1)}function Nm(n){var s=er();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:n},s.queue=n,n=n.dispatch=my.bind(null,mn,n),[s.memoizedState,n]}function So(n,s,l,d){return n={tag:n,create:s,destroy:l,deps:d,next:null},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,s.lastEffect=n)),n}function Lm(){return Mi().memoizedState}function Vl(n,s,l,d){var p=er();mn.flags|=n,p.memoizedState=So(1|s,l,void 0,d===void 0?null:d)}function Hl(n,s,l,d){var p=Mi();d=d===void 0?null:d;var x=void 0;if(wn!==null){var A=wn.memoizedState;if(x=A.destroy,d!==null&&dd(d,A.deps)){p.memoizedState=So(s,l,x,d);return}}mn.flags|=n,p.memoizedState=So(1|s,l,x,d)}function Dm(n,s){return Vl(8390656,8,n,s)}function gd(n,s){return Hl(2048,8,n,s)}function Im(n,s){return Hl(4,2,n,s)}function Um(n,s){return Hl(4,4,n,s)}function Fm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Om(n,s,l){return l=l!=null?l.concat([n]):null,Hl(4,4,Fm.bind(null,s,n),l)}function vd(){}function km(n,s){var l=Mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&dd(s,d[1])?d[0]:(l.memoizedState=[n,s],n)}function Bm(n,s){var l=Mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&dd(s,d[1])?d[0]:(n=n(),l.memoizedState=[n,s],n)}function zm(n,s,l){return(Ts&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=l):(Fi(l,s)||(l=Zn(),mn.lanes|=l,As|=l,n.baseState=!0),s)}function hy(n,s){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var d=cd.transition;cd.transition={};try{n(!1),s()}finally{Et=l,cd.transition=d}}function Vm(){return Mi().memoizedState}function py(n,s,l){var d=rs(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Hm(n))Gm(s,l);else if(l=xm(n,s,l,d),l!==null){var p=Yn();Vi(l,n,d,p),Wm(l,s,d)}}function my(n,s,l){var d=rs(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hm(n))Gm(s,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,O=x(A,l);if(p.hasEagerState=!0,p.eagerState=O,Fi(O,A)){var H=s.interleaved;H===null?(p.next=p,rd(s)):(p.next=H.next,H.next=p),s.interleaved=p;return}}catch{}finally{}l=xm(n,s,p,d),l!==null&&(p=Yn(),Vi(l,n,d,p),Wm(l,s,d))}}function Hm(n){var s=n.alternate;return n===mn||s!==null&&s===mn}function Gm(n,s){_o=zl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Wm(n,s,l){if((l&4194240)!==0){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,Jt(n,l)}}var Gl={readContext:Si,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},gy={readContext:Si,useCallback:function(n,s){return er().memoizedState=[n,s===void 0?null:s],n},useContext:Si,useEffect:Dm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,Vl(4194308,4,Fm.bind(null,s,n),l)},useLayoutEffect:function(n,s){return Vl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Vl(4,2,n,s)},useMemo:function(n,s){var l=er();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var d=er();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},d.queue=n,n=n.dispatch=py.bind(null,mn,n),[d.memoizedState,n]},useRef:function(n){var s=er();return n={current:n},s.memoizedState=n},useState:Nm,useDebugValue:vd,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Nm(!1),s=n[0];return n=hy.bind(null,n[1]),er().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var d=mn,p=er();if(un){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Pn===null)throw Error(t(349));(Ts&30)!==0||Tm(d,s,l)}p.memoizedState=l;var x={value:l,getSnapshot:s};return p.queue=x,Dm(Rm.bind(null,d,x,n),[n]),d.flags|=2048,So(9,Am.bind(null,d,x,l,s),void 0,null),l},useId:function(){var n=er(),s=Pn.identifierPrefix;if(un){var l=_r,d=vr;l=(d&~(1<<32-Ie(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=xo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=fy++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},vy={readContext:Si,useCallback:km,useContext:Si,useEffect:gd,useImperativeHandle:Om,useInsertionEffect:Im,useLayoutEffect:Um,useMemo:Bm,useReducer:pd,useRef:Lm,useState:function(){return pd(yo)},useDebugValue:vd,useDeferredValue:function(n){var s=Mi();return zm(s,wn.memoizedState,n)},useTransition:function(){var n=pd(yo)[0],s=Mi().memoizedState;return[n,s]},useMutableSource:wm,useSyncExternalStore:bm,useId:Vm,unstable_isNewReconciler:!1},_y={readContext:Si,useCallback:km,useContext:Si,useEffect:gd,useImperativeHandle:Om,useInsertionEffect:Im,useLayoutEffect:Um,useMemo:Bm,useReducer:md,useRef:Lm,useState:function(){return md(yo)},useDebugValue:vd,useDeferredValue:function(n){var s=Mi();return wn===null?s.memoizedState=n:zm(s,wn.memoizedState,n)},useTransition:function(){var n=md(yo)[0],s=Mi().memoizedState;return[n,s]},useMutableSource:wm,useSyncExternalStore:bm,useId:Vm,unstable_isNewReconciler:!1};function ki(n,s){if(n&&n.defaultProps){s=de({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function _d(n,s,l,d){s=n.memoizedState,l=l(d,s),l=l==null?s:de({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Wl={isMounted:function(n){return(n=n._reactInternals)?$e(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var d=Yn(),p=rs(n),x=yr(d,p);x.payload=s,l!=null&&(x.callback=l),s=es(n,x,p),s!==null&&(Vi(s,n,p,d),Fl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var d=Yn(),p=rs(n),x=yr(d,p);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=es(n,x,p),s!==null&&(Vi(s,n,p,d),Fl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Yn(),d=rs(n),p=yr(l,d);p.tag=2,s!=null&&(p.callback=s),s=es(n,p,d),s!==null&&(Vi(s,n,d,l),Fl(s,n,d))}};function jm(n,s,l,d,p,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,x,A):s.prototype&&s.prototype.isPureReactComponent?!ao(l,d)||!ao(p,x):!0}function Xm(n,s,l){var d=!1,p=Zr,x=s.contextType;return typeof x=="object"&&x!==null?x=Si(x):(p=ei(s)?Ss:On.current,d=s.contextTypes,x=(d=d!=null)?ia(n,p):Zr),s=new s(l,x),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wl,n.stateNode=s,s._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),s}function $m(n,s,l,d){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==n&&Wl.enqueueReplaceState(s,s.state,null)}function xd(n,s,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},sd(n);var x=s.contextType;typeof x=="object"&&x!==null?p.context=Si(x):(x=ei(s)?Ss:On.current,p.context=ia(n,x)),p.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(_d(n,s,x,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Wl.enqueueReplaceState(p,p.state,null),Ol(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function da(n,s){try{var l="",d=s;do l+=Ye(d),d=d.return;while(d);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:s,stack:p,digest:null}}function yd(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Sd(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function Ym(n,s,l){l=yr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Zl||(Zl=!0,Fd=d),Sd(n,s)},l}function qm(n,s,l){l=yr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Sd(n,s)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Sd(n,s),typeof d!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Km(n,s,l){var d=n.pingCache;if(d===null){d=n.pingCache=new xy;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),n=Dy.bind(null,n,s,l),s.then(n,n))}function Zm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Jm(n,s,l,d,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=yr(-1,1),s.tag=2,es(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var yy=P.ReactCurrentOwner,ti=!1;function $n(n,s,l,d){s.child=n===null?_m(s,null,l,d):oa(s,n.child,l,d)}function Qm(n,s,l,d,p){l=l.render;var x=s.ref;return ua(s,p),d=fd(n,s,l,d,x,p),l=hd(),n!==null&&!ti?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Sr(n,s,p)):(un&&l&&qc(s),s.flags|=1,$n(n,s,d,p),s.child)}function eg(n,s,l,d,p){if(n===null){var x=l.type;return typeof x=="function"&&!Gd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,tg(n,s,x,d,p)):(n=iu(l.type,null,d,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(x=n.child,(n.lanes&p)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ao,l(A,d)&&n.ref===s.ref)return Sr(n,s,p)}return s.flags|=1,n=as(x,d),n.ref=s.ref,n.return=s,s.child=n}function tg(n,s,l,d,p){if(n!==null){var x=n.memoizedProps;if(ao(x,d)&&n.ref===s.ref)if(ti=!1,s.pendingProps=d=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ti=!0);else return s.lanes=n.lanes,Sr(n,s,p)}return Md(n,s,l,d,p)}function ng(n,s,l){var d=s.pendingProps,p=d.children,x=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},sn(ha,fi),fi|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,sn(ha,fi),fi|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,sn(ha,fi),fi|=d}else x!==null?(d=x.baseLanes|l,s.memoizedState=null):d=l,sn(ha,fi),fi|=d;return $n(n,s,p,l),s.child}function ig(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Md(n,s,l,d,p){var x=ei(l)?Ss:On.current;return x=ia(s,x),ua(s,p),l=fd(n,s,l,d,x,p),d=hd(),n!==null&&!ti?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Sr(n,s,p)):(un&&d&&qc(s),s.flags|=1,$n(n,s,l,p),s.child)}function rg(n,s,l,d,p){if(ei(l)){var x=!0;Rl(s)}else x=!1;if(ua(s,p),s.stateNode===null)Xl(n,s),Xm(s,l,d),xd(s,l,d,p),d=!0;else if(n===null){var A=s.stateNode,O=s.memoizedProps;A.props=O;var H=A.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=Si(pe):(pe=ei(l)?Ss:On.current,pe=ia(s,pe));var Ee=l.getDerivedStateFromProps,Ce=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ce||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==d||H!==pe)&&$m(s,A,d,pe),Qr=!1;var Me=s.memoizedState;A.state=Me,Ol(s,d,A,p),H=s.memoizedState,O!==d||Me!==H||Qn.current||Qr?(typeof Ee=="function"&&(_d(s,l,Ee,d),H=s.memoizedState),(O=Qr||jm(s,l,O,d,Me,H,pe))?(Ce||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=H),A.props=d,A.state=H,A.context=pe,d=O):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{A=s.stateNode,ym(n,s),O=s.memoizedProps,pe=s.type===s.elementType?O:ki(s.type,O),A.props=pe,Ce=s.pendingProps,Me=A.context,H=l.contextType,typeof H=="object"&&H!==null?H=Si(H):(H=ei(l)?Ss:On.current,H=ia(s,H));var qe=l.getDerivedStateFromProps;(Ee=typeof qe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Ce||Me!==H)&&$m(s,A,d,H),Qr=!1,Me=s.memoizedState,A.state=Me,Ol(s,d,A,p);var it=s.memoizedState;O!==Ce||Me!==it||Qn.current||Qr?(typeof qe=="function"&&(_d(s,l,qe,d),it=s.memoizedState),(pe=Qr||jm(s,l,pe,d,Me,it,H)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,it,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,it,H)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=it),A.props=d,A.state=it,A.context=H,d=pe):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(s.flags|=1024),d=!1)}return Ed(n,s,l,d,x,p)}function Ed(n,s,l,d,p,x){ig(n,s);var A=(s.flags&128)!==0;if(!d&&!A)return p&&um(s,l,!1),Sr(n,s,x);d=s.stateNode,yy.current=s;var O=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,n!==null&&A?(s.child=oa(s,n.child,null,x),s.child=oa(s,null,O,x)):$n(n,s,O,x),s.memoizedState=d.state,p&&um(s,l,!0),s.child}function sg(n){var s=n.stateNode;s.pendingContext?om(n,s.pendingContext,s.pendingContext!==s.context):s.context&&om(n,s.context,!1),ad(n,s.containerInfo)}function ag(n,s,l,d,p){return aa(),Qc(p),s.flags|=256,$n(n,s,l,d),s.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:null,transitions:null}}function og(n,s,l){var d=s.pendingProps,p=pn.current,x=!1,A=(s.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(x=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),sn(pn,p&1),n===null)return Jc(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=d.children,n=d.fallback,x?(d=s.mode,x=s.child,A={mode:"hidden",children:A},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=ru(A,d,0,null),n=Ns(n,d,l,null),x.return=s,n.return=s,x.sibling=n,s.child=x,s.child.memoizedState=bd(l),s.memoizedState=wd,n):Td(s,A));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return Sy(n,s,A,d,O,p,l);if(x){x=d.fallback,A=s.mode,p=n.child,O=p.sibling;var H={mode:"hidden",children:d.children};return(A&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=H,s.deletions=null):(d=as(p,H),d.subtreeFlags=p.subtreeFlags&14680064),O!==null?x=as(O,x):(x=Ns(x,A,l,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,A=n.child.memoizedState,A=A===null?bd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~l,s.memoizedState=wd,d}return x=n.child,n=x.sibling,d=as(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=d,s.memoizedState=null,d}function Td(n,s){return s=ru({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function jl(n,s,l,d){return d!==null&&Qc(d),oa(s,n.child,null,l),n=Td(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Sy(n,s,l,d,p,x,A){if(l)return s.flags&256?(s.flags&=-257,d=yd(Error(t(422))),jl(n,s,A,d)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(x=d.fallback,p=s.mode,d=ru({mode:"visible",children:d.children},p,0,null),x=Ns(x,p,A,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&oa(s,n.child,null,A),s.child.memoizedState=bd(A),s.memoizedState=wd,x);if((s.mode&1)===0)return jl(n,s,A,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var O=d.dgst;return d=O,x=Error(t(419)),d=yd(x,d,void 0),jl(n,s,A,d)}if(O=(A&n.childLanes)!==0,ti||O){if(d=Pn,d!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,xr(n,p),Vi(d,n,p,-1))}return Hd(),d=yd(Error(t(421))),jl(n,s,A,d)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=Iy.bind(null,n),p._reactRetry=s,null):(n=x.treeContext,di=qr(p.nextSibling),ci=s,un=!0,Oi=null,n!==null&&(xi[yi++]=vr,xi[yi++]=_r,xi[yi++]=Ms,vr=n.id,_r=n.overflow,Ms=s),s=Td(s,d.children),s.flags|=4096,s)}function lg(n,s,l){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s),id(n.return,s,l)}function Ad(n,s,l,d,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=p)}function ug(n,s,l){var d=s.pendingProps,p=d.revealOrder,x=d.tail;if($n(n,s,d.children,l),d=pn.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lg(n,l,s);else if(n.tag===19)lg(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(sn(pn,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&kl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Ad(s,!1,p,l,x);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&kl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Ad(s,!0,l,null,x);break;case"together":Ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Sr(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),As|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=as(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=as(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function My(n,s,l){switch(s.tag){case 3:sg(s),aa();break;case 5:Em(s);break;case 1:ei(s.type)&&Rl(s);break;case 4:ad(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;sn(Il,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(sn(pn,pn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?og(n,s,l):(sn(pn,pn.current&1),n=Sr(n,s,l),n!==null?n.sibling:null);sn(pn,pn.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(n.flags&128)!==0){if(d)return ug(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),sn(pn,pn.current),d)break;return null;case 22:case 23:return s.lanes=0,ng(n,s,l)}return Sr(n,s,l)}var cg,Rd,dg,fg;cg=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Rd=function(){},dg=function(n,s,l,d){var p=n.memoizedProps;if(p!==d){n=s.stateNode,bs(Qi.current);var x=null;switch(l){case"input":p=Ct(n,p),d=Ct(n,d),x=[];break;case"select":p=de({},p,{value:void 0}),d=de({},d,{value:void 0}),x=[];break;case"textarea":p=et(n,p),d=et(n,d),x=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=bl)}Ke(l,d);var A;l=null;for(pe in p)if(!d.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var O=p[pe];for(A in O)O.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in d){var H=d[pe];if(O=p!=null?p[pe]:void 0,d.hasOwnProperty(pe)&&H!==O&&(H!=null||O!=null))if(pe==="style")if(O){for(A in O)!O.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in H)H.hasOwnProperty(A)&&O[A]!==H[A]&&(l||(l={}),l[A]=H[A])}else l||(x||(x=[]),x.push(pe,l)),l=H;else pe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(x=x||[]).push(pe,H)):pe==="children"?typeof H!="string"&&typeof H!="number"||(x=x||[]).push(pe,""+H):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(H!=null&&pe==="onScroll"&&an("scroll",n),x||O===H||(x=[])):(x=x||[]).push(pe,H))}l&&(x=x||[]).push("style",l);var pe=x;(s.updateQueue=pe)&&(s.flags|=4)}},fg=function(n,s,l,d){l!==d&&(s.flags|=4)};function Mo(n,s){if(!un)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Bn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,s}function Ey(n,s,l){var d=s.pendingProps;switch(Kc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(s),null;case 1:return ei(s.type)&&Al(),Bn(s),null;case 3:return d=s.stateNode,ca(),on(Qn),on(On),ud(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Ll(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Oi!==null&&(Bd(Oi),Oi=null))),Rd(n,s),Bn(s),null;case 5:od(s);var p=bs(vo.current);if(l=s.type,n!==null&&s.stateNode!=null)dg(n,s,l,d,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Bn(s),null}if(n=bs(Qi.current),Ll(s)){d=s.stateNode,l=s.type;var x=s.memoizedProps;switch(d[Ji]=s,d[fo]=x,n=(s.mode&1)!==0,l){case"dialog":an("cancel",d),an("close",d);break;case"iframe":case"object":case"embed":an("load",d);break;case"video":case"audio":for(p=0;p<lo.length;p++)an(lo[p],d);break;case"source":an("error",d);break;case"img":case"image":case"link":an("error",d),an("load",d);break;case"details":an("toggle",d);break;case"input":Gt(d,x),an("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},an("invalid",d);break;case"textarea":I(d,x),an("invalid",d)}Ke(l,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var O=x[A];A==="children"?typeof O=="string"?d.textContent!==O&&(x.suppressHydrationWarning!==!0&&wl(d.textContent,O,n),p=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(x.suppressHydrationWarning!==!0&&wl(d.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&an("scroll",d)}switch(l){case"input":gt(d),V(d,x,!0);break;case"textarea":gt(d),$(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=bl)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=A.createElement(l,{is:d.is}):(n=A.createElement(l),l==="select"&&(A=n,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):n=A.createElementNS(n,l),n[Ji]=s,n[fo]=d,cg(n,s,!1,!1),s.stateNode=n;e:{switch(A=ze(l,d),l){case"dialog":an("cancel",n),an("close",n),p=d;break;case"iframe":case"object":case"embed":an("load",n),p=d;break;case"video":case"audio":for(p=0;p<lo.length;p++)an(lo[p],n);p=d;break;case"source":an("error",n),p=d;break;case"img":case"image":case"link":an("error",n),an("load",n),p=d;break;case"details":an("toggle",n),p=d;break;case"input":Gt(n,d),p=Ct(n,d),an("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=de({},d,{value:void 0}),an("invalid",n);break;case"textarea":I(n,d),p=et(n,d),an("invalid",n);break;default:p=d}Ke(l,p),O=p;for(x in O)if(O.hasOwnProperty(x)){var H=O[x];x==="style"?Ne(n,H):x==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&je(n,H)):x==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Ae(n,H):typeof H=="number"&&Ae(n,""+H):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?H!=null&&x==="onScroll"&&an("scroll",n):H!=null&&C(n,x,H,A))}switch(l){case"input":gt(n),V(n,d,!1);break;case"textarea":gt(n),$(n);break;case"option":d.value!=null&&n.setAttribute("value",""+xe(d.value));break;case"select":n.multiple=!!d.multiple,x=d.value,x!=null?Ht(n,!!d.multiple,x,!1):d.defaultValue!=null&&Ht(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=bl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bn(s),null;case 6:if(n&&s.stateNode!=null)fg(n,s,n.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=bs(vo.current),bs(Qi.current),Ll(s)){if(d=s.stateNode,l=s.memoizedProps,d[Ji]=s,(x=d.nodeValue!==l)&&(n=ci,n!==null))switch(n.tag){case 3:wl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wl(d.nodeValue,l,(n.mode&1)!==0)}x&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Ji]=s,s.stateNode=d}return Bn(s),null;case 13:if(on(pn),d=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&di!==null&&(s.mode&1)!==0&&(s.flags&128)===0)mm(),aa(),s.flags|=98560,x=!1;else if(x=Ll(s),d!==null&&d.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ji]=s}else aa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bn(s),x=!1}else Oi!==null&&(Bd(Oi),Oi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(pn.current&1)!==0?bn===0&&(bn=3):Hd())),s.updateQueue!==null&&(s.flags|=4),Bn(s),null);case 4:return ca(),Rd(n,s),n===null&&uo(s.stateNode.containerInfo),Bn(s),null;case 10:return nd(s.type._context),Bn(s),null;case 17:return ei(s.type)&&Al(),Bn(s),null;case 19:if(on(pn),x=s.memoizedState,x===null)return Bn(s),null;if(d=(s.flags&128)!==0,A=x.rendering,A===null)if(d)Mo(x,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=kl(n),A!==null){for(s.flags|=128,Mo(x,!1),d=A.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)x=l,n=d,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return sn(pn,pn.current&1|2),s.child}n=n.sibling}x.tail!==null&&R()>pa&&(s.flags|=128,d=!0,Mo(x,!1),s.lanes=4194304)}else{if(!d)if(n=kl(A),n!==null){if(s.flags|=128,d=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Mo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!un)return Bn(s),null}else 2*R()-x.renderingStartTime>pa&&l!==1073741824&&(s.flags|=128,d=!0,Mo(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=R(),s.sibling=null,l=pn.current,sn(pn,d?l&1|2:l&1),s):(Bn(s),null);case 22:case 23:return Vd(),d=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(fi&1073741824)!==0&&(Bn(s),s.subtreeFlags&6&&(s.flags|=8192)):Bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function wy(n,s){switch(Kc(s),s.tag){case 1:return ei(s.type)&&Al(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ca(),on(Qn),on(On),ud(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return od(s),null;case 13:if(on(pn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));aa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return on(pn),null;case 4:return ca(),null;case 10:return nd(s.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var $l=!1,zn=!1,by=typeof WeakSet=="function"?WeakSet:Set,Je=null;function fa(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){gn(n,s,d)}else l.current=null}function Cd(n,s,l){try{l()}catch(d){gn(n,s,d)}}var hg=!1;function Ty(n,s){if(Vc=hl,n=jp(),Dc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,O=-1,H=-1,pe=0,Ee=0,Ce=n,Me=null;t:for(;;){for(var qe;Ce!==l||p!==0&&Ce.nodeType!==3||(O=A+p),Ce!==x||d!==0&&Ce.nodeType!==3||(H=A+d),Ce.nodeType===3&&(A+=Ce.nodeValue.length),(qe=Ce.firstChild)!==null;)Me=Ce,Ce=qe;for(;;){if(Ce===n)break t;if(Me===l&&++pe===p&&(O=A),Me===x&&++Ee===d&&(H=A),(qe=Ce.nextSibling)!==null)break;Ce=Me,Me=Ce.parentNode}Ce=qe}l=O===-1||H===-1?null:{start:O,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hc={focusedElem:n,selectionRange:l},hl=!1,Je=s;Je!==null;)if(s=Je,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Je=n;else for(;Je!==null;){s=Je;try{var it=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var ot=it.memoizedProps,_n=it.memoizedState,ae=s.stateNode,Y=ae.getSnapshotBeforeUpdate(s.elementType===s.type?ot:ki(s.type,ot),_n);ae.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var fe=s.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){gn(s,s.return,Le)}if(n=s.sibling,n!==null){n.return=s.return,Je=n;break}Je=s.return}return it=hg,hg=!1,it}function Eo(n,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Cd(s,l,x)}p=p.next}while(p!==d)}}function Yl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Pd(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function pg(n){var s=n.alternate;s!==null&&(n.alternate=null,pg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ji],delete s[fo],delete s[Xc],delete s[ly],delete s[uy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mg(n){return n.tag===5||n.tag===3||n.tag===4}function gg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nd(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=bl));else if(d!==4&&(n=n.child,n!==null))for(Nd(n,s,l),n=n.sibling;n!==null;)Nd(n,s,l),n=n.sibling}function Ld(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Ld(n,s,l),n=n.sibling;n!==null;)Ld(n,s,l),n=n.sibling}var In=null,Bi=!1;function ts(n,s,l){for(l=l.child;l!==null;)vg(n,s,l),l=l.sibling}function vg(n,s,l){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Ue,l)}catch{}switch(l.tag){case 5:zn||fa(l,s);case 6:var d=In,p=Bi;In=null,ts(n,s,l),In=d,Bi=p,In!==null&&(Bi?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Bi?(n=In,l=l.stateNode,n.nodeType===8?jc(n.parentNode,l):n.nodeType===1&&jc(n,l),eo(n)):jc(In,l.stateNode));break;case 4:d=In,p=Bi,In=l.stateNode.containerInfo,Bi=!0,ts(n,s,l),In=d,Bi=p;break;case 0:case 11:case 14:case 15:if(!zn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Cd(l,s,A),p=p.next}while(p!==d)}ts(n,s,l);break;case 1:if(!zn&&(fa(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(O){gn(l,s,O)}ts(n,s,l);break;case 21:ts(n,s,l);break;case 22:l.mode&1?(zn=(d=zn)||l.memoizedState!==null,ts(n,s,l),zn=d):ts(n,s,l);break;default:ts(n,s,l)}}function _g(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new by),s.forEach(function(d){var p=Uy.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function zi(n,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var x=n,A=s,O=A;e:for(;O!==null;){switch(O.tag){case 5:In=O.stateNode,Bi=!1;break e;case 3:In=O.stateNode.containerInfo,Bi=!0;break e;case 4:In=O.stateNode.containerInfo,Bi=!0;break e}O=O.return}if(In===null)throw Error(t(160));vg(x,A,p),In=null,Bi=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(pe){gn(p,s,pe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)xg(s,n),s=s.sibling}function xg(n,s){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(s,n),tr(n),d&4){try{Eo(3,n,n.return),Yl(3,n)}catch(ot){gn(n,n.return,ot)}try{Eo(5,n,n.return)}catch(ot){gn(n,n.return,ot)}}break;case 1:zi(s,n),tr(n),d&512&&l!==null&&fa(l,l.return);break;case 5:if(zi(s,n),tr(n),d&512&&l!==null&&fa(l,l.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(ot){gn(n,n.return,ot)}}if(d&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,A=l!==null?l.memoizedProps:x,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&x.type==="radio"&&x.name!=null&&Tt(p,x),ze(O,A);var pe=ze(O,x);for(A=0;A<H.length;A+=2){var Ee=H[A],Ce=H[A+1];Ee==="style"?Ne(p,Ce):Ee==="dangerouslySetInnerHTML"?je(p,Ce):Ee==="children"?Ae(p,Ce):C(p,Ee,Ce,pe)}switch(O){case"input":Wt(p,x);break;case"textarea":b(p,x);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var qe=x.value;qe!=null?Ht(p,!!x.multiple,qe,!1):Me!==!!x.multiple&&(x.defaultValue!=null?Ht(p,!!x.multiple,x.defaultValue,!0):Ht(p,!!x.multiple,x.multiple?[]:"",!1))}p[fo]=x}catch(ot){gn(n,n.return,ot)}}break;case 6:if(zi(s,n),tr(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ot){gn(n,n.return,ot)}}break;case 3:if(zi(s,n),tr(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{eo(s.containerInfo)}catch(ot){gn(n,n.return,ot)}break;case 4:zi(s,n),tr(n);break;case 13:zi(s,n),tr(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Ud=R())),d&4&&_g(n);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,n.mode&1?(zn=(pe=zn)||Ee,zi(s,n),zn=pe):zi(s,n),tr(n),d&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Ee&&(n.mode&1)!==0)for(Je=n,Ee=n.child;Ee!==null;){for(Ce=Je=Ee;Je!==null;){switch(Me=Je,qe=Me.child,Me.tag){case 0:case 11:case 14:case 15:Eo(4,Me,Me.return);break;case 1:fa(Me,Me.return);var it=Me.stateNode;if(typeof it.componentWillUnmount=="function"){d=Me,l=Me.return;try{s=d,it.props=s.memoizedProps,it.state=s.memoizedState,it.componentWillUnmount()}catch(ot){gn(d,l,ot)}}break;case 5:fa(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Mg(Ce);continue}}qe!==null?(qe.return=Me,Je=qe):Mg(Ce)}Ee=Ee.sibling}e:for(Ee=null,Ce=n;;){if(Ce.tag===5){if(Ee===null){Ee=Ce;try{p=Ce.stateNode,pe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(O=Ce.stateNode,H=Ce.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=be("display",A))}catch(ot){gn(n,n.return,ot)}}}else if(Ce.tag===6){if(Ee===null)try{Ce.stateNode.nodeValue=pe?"":Ce.memoizedProps}catch(ot){gn(n,n.return,ot)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ee===Ce&&(Ee=null),Ce=Ce.return}Ee===Ce&&(Ee=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:zi(s,n),tr(n),d&4&&_g(n);break;case 21:break;default:zi(s,n),tr(n)}}function tr(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(mg(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Ae(p,""),d.flags&=-33);var x=gg(n);Ld(n,x,p);break;case 3:case 4:var A=d.stateNode.containerInfo,O=gg(n);Nd(n,O,A);break;default:throw Error(t(161))}}catch(H){gn(n,n.return,H)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Ay(n,s,l){Je=n,yg(n)}function yg(n,s,l){for(var d=(n.mode&1)!==0;Je!==null;){var p=Je,x=p.child;if(p.tag===22&&d){var A=p.memoizedState!==null||$l;if(!A){var O=p.alternate,H=O!==null&&O.memoizedState!==null||zn;O=$l;var pe=zn;if($l=A,(zn=H)&&!pe)for(Je=p;Je!==null;)A=Je,H=A.child,A.tag===22&&A.memoizedState!==null?Eg(p):H!==null?(H.return=A,Je=H):Eg(p);for(;x!==null;)Je=x,yg(x),x=x.sibling;Je=p,$l=O,zn=pe}Sg(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Je=x):Sg(n)}}function Sg(n){for(;Je!==null;){var s=Je;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zn||Yl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!zn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:ki(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Mm(s,x,d);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Mm(s,A,l)}break;case 5:var O=s.stateNode;if(l===null&&s.flags&4){l=O;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var pe=s.alternate;if(pe!==null){var Ee=pe.memoizedState;if(Ee!==null){var Ce=Ee.dehydrated;Ce!==null&&eo(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||s.flags&512&&Pd(s)}catch(Me){gn(s,s.return,Me)}}if(s===n){Je=null;break}if(l=s.sibling,l!==null){l.return=s.return,Je=l;break}Je=s.return}}function Mg(n){for(;Je!==null;){var s=Je;if(s===n){Je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Je=l;break}Je=s.return}}function Eg(n){for(;Je!==null;){var s=Je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Yl(4,s)}catch(H){gn(s,l,H)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(H){gn(s,p,H)}}var x=s.return;try{Pd(s)}catch(H){gn(s,x,H)}break;case 5:var A=s.return;try{Pd(s)}catch(H){gn(s,A,H)}}}catch(H){gn(s,s.return,H)}if(s===n){Je=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Je=O;break}Je=s.return}}var Ry=Math.ceil,ql=P.ReactCurrentDispatcher,Dd=P.ReactCurrentOwner,Ei=P.ReactCurrentBatchConfig,jt=0,Pn=null,yn=null,Un=0,fi=0,ha=Kr(0),bn=0,wo=null,As=0,Kl=0,Id=0,bo=null,ni=null,Ud=0,pa=1/0,Mr=null,Zl=!1,Fd=null,ns=null,Jl=!1,is=null,Ql=0,To=0,Od=null,eu=-1,tu=0;function Yn(){return(jt&6)!==0?R():eu!==-1?eu:eu=R()}function rs(n){return(n.mode&1)===0?1:(jt&2)!==0&&Un!==0?Un&-Un:dy.transition!==null?(tu===0&&(tu=Zn()),tu):(n=Et,n!==0||(n=window.event,n=n===void 0?16:bp(n.type)),n)}function Vi(n,s,l,d){if(50<To)throw To=0,Od=null,Error(t(185));li(n,l,d),((jt&2)===0||n!==Pn)&&(n===Pn&&((jt&2)===0&&(Kl|=l),bn===4&&ss(n,Un)),ii(n,d),l===1&&jt===0&&(s.mode&1)===0&&(pa=R()+500,Cl&&Jr()))}function ii(n,s){var l=n.callbackNode;Xn(n,s);var d=hn(n,n===Pn?Un:0);if(d===0)l!==null&&fn(l),n.callbackNode=null,n.callbackPriority=0;else if(s=d&-d,n.callbackPriority!==s){if(l!=null&&fn(l),s===1)n.tag===0?cy(bg.bind(null,n)):cm(bg.bind(null,n)),ay(function(){(jt&6)===0&&Jr()}),l=null;else{switch(Ui(d)){case 1:l=he;break;case 4:l=oe;break;case 16:l=se;break;case 536870912:l=He;break;default:l=se}l=Dg(l,wg.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function wg(n,s){if(eu=-1,tu=0,(jt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ma()&&n.callbackNode!==l)return null;var d=hn(n,n===Pn?Un:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||s)s=nu(n,d);else{s=d;var p=jt;jt|=2;var x=Ag();(Pn!==n||Un!==s)&&(Mr=null,pa=R()+500,Cs(n,s));do try{Ny();break}catch(O){Tg(n,O)}while(!0);td(),ql.current=x,jt=p,yn!==null?s=0:(Pn=null,Un=0,s=bn)}if(s!==0){if(s===2&&(p=zt(n),p!==0&&(d=p,s=kd(n,p))),s===1)throw l=wo,Cs(n,0),ss(n,d),ii(n,R()),l;if(s===6)ss(n,d);else{if(p=n.current.alternate,(d&30)===0&&!Cy(p)&&(s=nu(n,d),s===2&&(x=zt(n),x!==0&&(d=x,s=kd(n,x))),s===1))throw l=wo,Cs(n,0),ss(n,d),ii(n,R()),l;switch(n.finishedWork=p,n.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ps(n,ni,Mr);break;case 3:if(ss(n,d),(d&130023424)===d&&(s=Ud+500-R(),10<s)){if(hn(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){Yn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Wc(Ps.bind(null,n,ni,Mr),s);break}Ps(n,ni,Mr);break;case 4:if(ss(n,d),(d&4194240)===d)break;for(s=n.eventTimes,p=-1;0<d;){var A=31-Ie(d);x=1<<A,A=s[A],A>p&&(p=A),d&=~x}if(d=p,d=R()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ry(d/1960))-d,10<d){n.timeoutHandle=Wc(Ps.bind(null,n,ni,Mr),d);break}Ps(n,ni,Mr);break;case 5:Ps(n,ni,Mr);break;default:throw Error(t(329))}}}return ii(n,R()),n.callbackNode===l?wg.bind(null,n):null}function kd(n,s){var l=bo;return n.current.memoizedState.isDehydrated&&(Cs(n,s).flags|=256),n=nu(n,s),n!==2&&(s=ni,ni=l,s!==null&&Bd(s)),n}function Bd(n){ni===null?ni=n:ni.push.apply(ni,n)}function Cy(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],x=p.getSnapshot;p=p.value;try{if(!Fi(x(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ss(n,s){for(s&=~Id,s&=~Kl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-Ie(s),d=1<<l;n[l]=-1,s&=~d}}function bg(n){if((jt&6)!==0)throw Error(t(327));ma();var s=hn(n,0);if((s&1)===0)return ii(n,R()),null;var l=nu(n,s);if(n.tag!==0&&l===2){var d=zt(n);d!==0&&(s=d,l=kd(n,d))}if(l===1)throw l=wo,Cs(n,0),ss(n,s),ii(n,R()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Ps(n,ni,Mr),ii(n,R()),null}function zd(n,s){var l=jt;jt|=1;try{return n(s)}finally{jt=l,jt===0&&(pa=R()+500,Cl&&Jr())}}function Rs(n){is!==null&&is.tag===0&&(jt&6)===0&&ma();var s=jt;jt|=1;var l=Ei.transition,d=Et;try{if(Ei.transition=null,Et=1,n)return n()}finally{Et=d,Ei.transition=l,jt=s,(jt&6)===0&&Jr()}}function Vd(){fi=ha.current,on(ha)}function Cs(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,sy(l)),yn!==null)for(l=yn.return;l!==null;){var d=l;switch(Kc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Al();break;case 3:ca(),on(Qn),on(On),ud();break;case 5:od(d);break;case 4:ca();break;case 13:on(pn);break;case 19:on(pn);break;case 10:nd(d.type._context);break;case 22:case 23:Vd()}l=l.return}if(Pn=n,yn=n=as(n.current,null),Un=fi=s,bn=0,wo=null,Id=Kl=As=0,ni=bo=null,ws!==null){for(s=0;s<ws.length;s++)if(l=ws[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,x=l.pending;if(x!==null){var A=x.next;x.next=p,d.next=A}l.pending=d}ws=null}return n}function Tg(n,s){do{var l=yn;try{if(td(),Bl.current=Gl,zl){for(var d=mn.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}zl=!1}if(Ts=0,Cn=wn=mn=null,_o=!1,xo=0,Dd.current=null,l===null||l.return===null){bn=1,wo=s,yn=null;break}e:{var x=n,A=l.return,O=l,H=s;if(s=Un,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=H,Ee=O,Ce=Ee.tag;if((Ee.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var qe=Zm(A);if(qe!==null){qe.flags&=-257,Jm(qe,A,O,x,s),qe.mode&1&&Km(x,pe,s),s=qe,H=pe;var it=s.updateQueue;if(it===null){var ot=new Set;ot.add(H),s.updateQueue=ot}else it.add(H);break e}else{if((s&1)===0){Km(x,pe,s),Hd();break e}H=Error(t(426))}}else if(un&&O.mode&1){var _n=Zm(A);if(_n!==null){(_n.flags&65536)===0&&(_n.flags|=256),Jm(_n,A,O,x,s),Qc(da(H,O));break e}}x=H=da(H,O),bn!==4&&(bn=2),bo===null?bo=[x]:bo.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ae=Ym(x,H,s);Sm(x,ae);break e;case 1:O=H;var Y=x.type,fe=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(ns===null||!ns.has(fe)))){x.flags|=65536,s&=-s,x.lanes|=s;var Le=qm(x,O,s);Sm(x,Le);break e}}x=x.return}while(x!==null)}Cg(l)}catch(ct){s=ct,yn===l&&l!==null&&(yn=l=l.return);continue}break}while(!0)}function Ag(){var n=ql.current;return ql.current=Gl,n===null?Gl:n}function Hd(){(bn===0||bn===3||bn===2)&&(bn=4),Pn===null||(As&268435455)===0&&(Kl&268435455)===0||ss(Pn,Un)}function nu(n,s){var l=jt;jt|=2;var d=Ag();(Pn!==n||Un!==s)&&(Mr=null,Cs(n,s));do try{Py();break}catch(p){Tg(n,p)}while(!0);if(td(),jt=l,ql.current=d,yn!==null)throw Error(t(261));return Pn=null,Un=0,bn}function Py(){for(;yn!==null;)Rg(yn)}function Ny(){for(;yn!==null&&!En();)Rg(yn)}function Rg(n){var s=Lg(n.alternate,n,fi);n.memoizedProps=n.pendingProps,s===null?Cg(n):yn=s,Dd.current=null}function Cg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=Ey(l,s,fi),l!==null){yn=l;return}}else{if(l=wy(l,s),l!==null){l.flags&=32767,yn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,yn=null;return}}if(s=s.sibling,s!==null){yn=s;return}yn=s=n}while(s!==null);bn===0&&(bn=5)}function Ps(n,s,l){var d=Et,p=Ei.transition;try{Ei.transition=null,Et=1,Ly(n,s,l,d)}finally{Ei.transition=p,Et=d}return null}function Ly(n,s,l,d){do ma();while(is!==null);if((jt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(Hr(n,x),n===Pn&&(yn=Pn=null,Un=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Jl||(Jl=!0,Dg(se,function(){return ma(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Ei.transition,Ei.transition=null;var A=Et;Et=1;var O=jt;jt|=4,Dd.current=null,Ty(n,l),xg(l,n),Jx(Hc),hl=!!Vc,Hc=Vc=null,n.current=l,Ay(l),Yt(),jt=O,Et=A,Ei.transition=x}else n.current=l;if(Jl&&(Jl=!1,is=n,Ql=p),x=n.pendingLanes,x===0&&(ns=null),nt(l.stateNode),ii(n,R()),s!==null)for(d=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Zl)throw Zl=!1,n=Fd,Fd=null,n;return(Ql&1)!==0&&n.tag!==0&&ma(),x=n.pendingLanes,(x&1)!==0?n===Od?To++:(To=0,Od=n):To=0,Jr(),null}function ma(){if(is!==null){var n=Ui(Ql),s=Ei.transition,l=Et;try{if(Ei.transition=null,Et=16>n?16:n,is===null)var d=!1;else{if(n=is,is=null,Ql=0,(jt&6)!==0)throw Error(t(331));var p=jt;for(jt|=4,Je=n.current;Je!==null;){var x=Je,A=x.child;if((Je.flags&16)!==0){var O=x.deletions;if(O!==null){for(var H=0;H<O.length;H++){var pe=O[H];for(Je=pe;Je!==null;){var Ee=Je;switch(Ee.tag){case 0:case 11:case 15:Eo(8,Ee,x)}var Ce=Ee.child;if(Ce!==null)Ce.return=Ee,Je=Ce;else for(;Je!==null;){Ee=Je;var Me=Ee.sibling,qe=Ee.return;if(pg(Ee),Ee===pe){Je=null;break}if(Me!==null){Me.return=qe,Je=Me;break}Je=qe}}}var it=x.alternate;if(it!==null){var ot=it.child;if(ot!==null){it.child=null;do{var _n=ot.sibling;ot.sibling=null,ot=_n}while(ot!==null)}}Je=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,Je=A;else e:for(;Je!==null;){if(x=Je,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Eo(9,x,x.return)}var ae=x.sibling;if(ae!==null){ae.return=x.return,Je=ae;break e}Je=x.return}}var Y=n.current;for(Je=Y;Je!==null;){A=Je;var fe=A.child;if((A.subtreeFlags&2064)!==0&&fe!==null)fe.return=A,Je=fe;else e:for(A=Y;Je!==null;){if(O=Je,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Yl(9,O)}}catch(ct){gn(O,O.return,ct)}if(O===A){Je=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,Je=Le;break e}Je=O.return}}if(jt=p,Jr(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Ue,n)}catch{}d=!0}return d}finally{Et=l,Ei.transition=s}}return!1}function Pg(n,s,l){s=da(l,s),s=Ym(n,s,1),n=es(n,s,1),s=Yn(),n!==null&&(li(n,1,s),ii(n,s))}function gn(n,s,l){if(n.tag===3)Pg(n,n,l);else for(;s!==null;){if(s.tag===3){Pg(s,n,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))){n=da(l,n),n=qm(s,n,1),s=es(s,n,1),n=Yn(),s!==null&&(li(s,1,n),ii(s,n));break}}s=s.return}}function Dy(n,s,l){var d=n.pingCache;d!==null&&d.delete(s),s=Yn(),n.pingedLanes|=n.suspendedLanes&l,Pn===n&&(Un&l)===l&&(bn===4||bn===3&&(Un&130023424)===Un&&500>R()-Ud?Cs(n,0):Id|=l),ii(n,s)}function Ng(n,s){s===0&&((n.mode&1)===0?s=1:(s=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var l=Yn();n=xr(n,s),n!==null&&(li(n,s,l),ii(n,l))}function Iy(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),Ng(n,l)}function Uy(n,s){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Ng(n,l)}var Lg;Lg=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||Qn.current)ti=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return ti=!1,My(n,s,l);ti=(n.flags&131072)!==0}else ti=!1,un&&(s.flags&1048576)!==0&&dm(s,Nl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Xl(n,s),n=s.pendingProps;var p=ia(s,On.current);ua(s,l),p=fd(null,s,d,n,p,l);var x=hd();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ei(d)?(x=!0,Rl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,sd(s),p.updater=Wl,s.stateNode=p,p._reactInternals=s,xd(s,d,n,l),s=Ed(null,s,d,!0,x,l)):(s.tag=0,un&&x&&qc(s),$n(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(Xl(n,s),n=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=Oy(d),n=ki(d,n),p){case 0:s=Md(null,s,d,n,l);break e;case 1:s=rg(null,s,d,n,l);break e;case 11:s=Qm(null,s,d,n,l);break e;case 14:s=eg(null,s,d,ki(d.type,n),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:ki(d,p),Md(n,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:ki(d,p),rg(n,s,d,p,l);case 3:e:{if(sg(s),n===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,p=x.element,ym(n,s),Ol(s,d,null,l);var A=s.memoizedState;if(d=A.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=da(Error(t(423)),s),s=ag(n,s,d,l,p);break e}else if(d!==p){p=da(Error(t(424)),s),s=ag(n,s,d,l,p);break e}else for(di=qr(s.stateNode.containerInfo.firstChild),ci=s,un=!0,Oi=null,l=_m(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(aa(),d===p){s=Sr(n,s,l);break e}$n(n,s,d,l)}s=s.child}return s;case 5:return Em(s),n===null&&Jc(s),d=s.type,p=s.pendingProps,x=n!==null?n.memoizedProps:null,A=p.children,Gc(d,p)?A=null:x!==null&&Gc(d,x)&&(s.flags|=32),ig(n,s),$n(n,s,A,l),s.child;case 6:return n===null&&Jc(s),null;case 13:return og(n,s,l);case 4:return ad(s,s.stateNode.containerInfo),d=s.pendingProps,n===null?s.child=oa(s,null,d,l):$n(n,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:ki(d,p),Qm(n,s,d,p,l);case 7:return $n(n,s,s.pendingProps,l),s.child;case 8:return $n(n,s,s.pendingProps.children,l),s.child;case 12:return $n(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,x=s.memoizedProps,A=p.value,sn(Il,d._currentValue),d._currentValue=A,x!==null)if(Fi(x.value,A)){if(x.children===p.children&&!Qn.current){s=Sr(n,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var O=x.dependencies;if(O!==null){A=x.child;for(var H=O.firstContext;H!==null;){if(H.context===d){if(x.tag===1){H=yr(-1,l&-l),H.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var Ee=pe.pending;Ee===null?H.next=H:(H.next=Ee.next,Ee.next=H),pe.pending=H}}x.lanes|=l,H=x.alternate,H!==null&&(H.lanes|=l),id(x.return,l,s),O.lanes|=l;break}H=H.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,O=A.alternate,O!==null&&(O.lanes|=l),id(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}$n(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,ua(s,l),p=Si(p),d=d(p),s.flags|=1,$n(n,s,d,l),s.child;case 14:return d=s.type,p=ki(d,s.pendingProps),p=ki(d.type,p),eg(n,s,d,p,l);case 15:return tg(n,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:ki(d,p),Xl(n,s),s.tag=1,ei(d)?(n=!0,Rl(s)):n=!1,ua(s,l),Xm(s,d,p),xd(s,d,p,l),Ed(null,s,d,!0,n,l);case 19:return ug(n,s,l);case 22:return ng(n,s,l)}throw Error(t(156,s.tag))};function Dg(n,s){return tn(n,s)}function Fy(n,s,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,s,l,d){return new Fy(n,s,l,d)}function Gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Oy(n){if(typeof n=="function")return Gd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===ie)return 14}return 2}function as(n,s){var l=n.alternate;return l===null?(l=wi(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function iu(n,s,l,d,p,x){var A=2;if(d=n,typeof n=="function")Gd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return Ns(l.children,p,x,s);case M:A=8,p|=8;break;case N:return n=wi(12,l,s,p|2),n.elementType=N,n.lanes=x,n;case Q:return n=wi(13,l,s,p),n.elementType=Q,n.lanes=x,n;case ee:return n=wi(19,l,s,p),n.elementType=ee,n.lanes=x,n;case W:return ru(l,p,x,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case re:A=10;break e;case B:A=9;break e;case q:A=11;break e;case ie:A=14;break e;case G:A=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=wi(A,l,s,p),s.elementType=n,s.type=d,s.lanes=x,s}function Ns(n,s,l,d){return n=wi(7,n,d,s),n.lanes=l,n}function ru(n,s,l,d){return n=wi(22,n,d,s),n.elementType=W,n.lanes=l,n.stateNode={isHidden:!1},n}function Wd(n,s,l){return n=wi(6,n,null,s),n.lanes=l,n}function jd(n,s,l){return s=wi(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function ky(n,s,l,d,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jn(0),this.expirationTimes=Jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Xd(n,s,l,d,p,x,A,O,H){return n=new ky(n,s,l,O,H),s===1?(s=1,x===!0&&(s|=8)):s=0,x=wi(3,null,null,s),n.current=x,x.stateNode=n,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(x),n}function By(n,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:n,containerInfo:s,implementation:l}}function Ig(n){if(!n)return Zr;n=n._reactInternals;e:{if($e(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ei(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ei(l))return lm(n,l,s)}return s}function Ug(n,s,l,d,p,x,A,O,H){return n=Xd(l,d,!0,n,p,x,A,O,H),n.context=Ig(null),l=n.current,d=Yn(),p=rs(l),x=yr(d,p),x.callback=s??null,es(l,x,p),n.current.lanes=p,li(n,p,d),ii(n,d),n}function su(n,s,l,d){var p=s.current,x=Yn(),A=rs(p);return l=Ig(l),s.context===null?s.context=l:s.pendingContext=l,s=yr(x,A),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=es(p,s,A),n!==null&&(Vi(n,p,A,x),Fl(n,p,A)),A}function au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function $d(n,s){Fg(n,s),(n=n.alternate)&&Fg(n,s)}function zy(){return null}var Og=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yd(n){this._internalRoot=n}ou.prototype.render=Yd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));su(n,s,null,null)},ou.prototype.unmount=Yd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Rs(function(){su(null,n,null,null)}),s[mr]=null}};function ou(n){this._internalRoot=n}ou.prototype.unstable_scheduleHydration=function(n){if(n){var s=qa();n={blockedOn:null,target:n,priority:s};for(var l=0;l<Xr.length&&s!==0&&s<Xr[l].priority;l++);Xr.splice(l,0,n),l===0&&Ep(n)}};function qd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kg(){}function Vy(n,s,l,d,p){if(p){if(typeof d=="function"){var x=d;d=function(){var pe=au(A);x.call(pe)}}var A=Ug(s,d,n,0,null,!1,!1,"",kg);return n._reactRootContainer=A,n[mr]=A.current,uo(n.nodeType===8?n.parentNode:n),Rs(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var O=d;d=function(){var pe=au(H);O.call(pe)}}var H=Xd(n,0,!1,null,null,!1,!1,"",kg);return n._reactRootContainer=H,n[mr]=H.current,uo(n.nodeType===8?n.parentNode:n),Rs(function(){su(s,H,l,d)}),H}function uu(n,s,l,d,p){var x=l._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var O=p;p=function(){var H=au(A);O.call(H)}}su(s,A,n,p)}else A=Vy(l,s,n,p,d);return au(A)}vn=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ot(s.pendingLanes);l!==0&&(Jt(s,l|1),ii(s,R()),(jt&6)===0&&(pa=R()+500,Jr()))}break;case 13:Rs(function(){var d=xr(n,1);if(d!==null){var p=Yn();Vi(d,n,1,p)}}),$d(n,1)}},_i=function(n){if(n.tag===13){var s=xr(n,134217728);if(s!==null){var l=Yn();Vi(s,n,134217728,l)}$d(n,134217728)}},pr=function(n){if(n.tag===13){var s=rs(n),l=xr(n,s);if(l!==null){var d=Yn();Vi(l,n,s,d)}$d(n,s)}},qa=function(){return Et},Sp=function(n,s){var l=Et;try{return Et=n,s()}finally{Et=l}},De=function(n,s,l){switch(s){case"input":if(Wt(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==n&&d.form===n.form){var p=Tl(d);if(!p)throw Error(t(90));dn(d),Wt(d,p)}}}break;case"textarea":b(n,l);break;case"select":s=l.value,s!=null&&Ht(n,!!l.multiple,s,!1)}},yt=zd,$t=Rs;var Hy={usingClientEntryPoint:!1,Events:[ho,ta,Tl,ge,Ze,zd]},Ao={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gy={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=At(n),n===null?null:n.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Ue=cu.inject(Gy),ke=cu}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy,ri.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(s))throw Error(t(200));return By(n,s,null,l)},ri.createRoot=function(n,s){if(!qd(n))throw Error(t(299));var l=!1,d="",p=Og;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Xd(n,1,!1,null,null,l,!1,d,p),n[mr]=s.current,uo(n.nodeType===8?n.parentNode:n),new Yd(s)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=At(s),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return Rs(n)},ri.hydrate=function(n,s,l){if(!lu(s))throw Error(t(200));return uu(null,n,s,!0,l)},ri.hydrateRoot=function(n,s,l){if(!qd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,x="",A=Og;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Ug(s,null,n,1,l??null,p,!1,x,A),n[mr]=s.current,uo(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new ou(s)},ri.render=function(n,s,l){if(!lu(s))throw Error(t(200));return uu(null,n,s,!1,l)},ri.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?(Rs(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},ri.unstable_batchedUpdates=zd,ri.unstable_renderSubtreeIntoContainer=function(n,s,l,d){if(!lu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,s,l,!1,d)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var Xg;function Qy(){if(Xg)return Jd.exports;Xg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Jd.exports=Jy(),Jd.exports}var $g;function eS(){if($g)return du;$g=1;var i=Qy();return du.createRoot=i.createRoot,du.hydrateRoot=i.hydrateRoot,du}var tS=eS(),ne=Hh();const nS=Xy(ne),jv=jy({__proto__:null,default:nS},[ne]);/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xv=i=>{throw TypeError(i)},iS=(i,e,t)=>e.has(i)||Xv("Cannot "+t),tf=(i,e,t)=>(iS(i,e,"read from private field"),t?t.call(i):e.get(i)),rS=(i,e,t)=>e.has(i)?Xv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Yg="popstate";function qg(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function sS(i={}){function e(r,a){var f;let o=(f=a.state)==null?void 0:f.masked,{pathname:u,search:c,hash:h}=o||r.location;return Yo("",{pathname:u,search:c,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function t(r,a){return typeof a=="string"?a:ur(a)}return oS(e,t,null,i)}function Ft(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Mn(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aS(){return Math.random().toString(36).substring(2,10)}function Kg(i,e){return{usr:i.state,key:i.key,idx:e,masked:i.unstable_mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Yo(i,e,t=null,r,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?hr(e):e,state:t,key:e&&e.key||r||aS(),unstable_mask:a}}function ur({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function hr(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function oS(i,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,c="POP",h=null,f=v();f==null&&(f=0,u.replaceState({...u.state,idx:f},""));function v(){return(u.state||{idx:null}).idx}function g(){c="POP";let y=v(),S=y==null?null:y-f;f=y,h&&h({action:c,location:w.location,delta:S})}function m(y,S){c="PUSH";let T=qg(y)?y:Yo(w.location,y,S);f=v()+1;let C=Kg(T,f),P=w.createHref(T.unstable_mask||T);try{u.pushState(C,"",P)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(P)}o&&h&&h({action:c,location:w.location,delta:1})}function _(y,S){c="REPLACE";let T=qg(y)?y:Yo(w.location,y,S);f=v();let C=Kg(T,f),P=w.createHref(T.unstable_mask||T);u.replaceState(C,"",P),o&&h&&h({action:c,location:w.location,delta:0})}function E(y){return $v(y)}let w={get action(){return c},get location(){return i(a,u)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(Yg,g),h=y,()=>{a.removeEventListener(Yg,g),h=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:_,go(y){return u.go(y)}};return w}function $v(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Ft(t,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:ur(i);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}var Vo,Zg=class{constructor(i){if(rS(this,Vo,new Map),i)for(let[e,t]of i)this.set(e,t)}get(i){if(tf(this,Vo).has(i))return tf(this,Vo).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,e){tf(this,Vo).set(i,e)}};Vo=new WeakMap;var lS=new Set(["lazy","caseSensitive","path","id","index","children"]);function uS(i){return lS.has(i)}var cS=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function dS(i){return cS.has(i)}function fS(i){return i.index===!0}function qo(i,e,t=[],r={},a=!1){return i.map((o,u)=>{let c=[...t,String(u)],h=typeof o.id=="string"?o.id:c.join("-");if(Ft(o.index!==!0||!o.children,"Cannot specify children on an index route"),Ft(a||!r[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),fS(o)){let f={...o,id:h};return r[h]=Jg(f,e(f)),f}else{let f={...o,id:h,children:void 0};return r[h]=Jg(f,e(f)),o.children&&(f.children=qo(o.children,e,c,r,a)),f}})}function Jg(i,e){return Object.assign(i,{...e,...typeof e.lazy=="object"&&e.lazy!=null?{lazy:{...i.lazy,...e.lazy}}:{}})}function ps(i,e,t="/"){return Ho(i,e,t,!1)}function Ho(i,e,t,r){let a=typeof e=="string"?hr(e):e,o=Ni(a.pathname||"/",t);if(o==null)return null;let u=Yv(i);pS(u);let c=null;for(let h=0;c==null&&h<u.length;++h){let f=bS(o);c=ES(u[h],f,r)}return c}function hS(i,e){let{route:t,pathname:r,params:a}=i;return{id:t.id,pathname:r,params:a,data:e[t.id],loaderData:e[t.id],handle:t.handle}}function Yv(i,e=[],t=[],r="",a=!1){let o=(u,c,h=a,f)=>{let v={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&h)return;Ft(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=$i([r,v.relativePath]),m=t.concat(v);u.children&&u.children.length>0&&(Ft(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Yv(u.children,e,m,g,h)),!(u.path==null&&!u.index)&&e.push({path:g,score:SS(g,u.index),routesMeta:m})};return i.forEach((u,c)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))o(u,c);else for(let f of qv(u.path))o(u,c,!0,f)}),e}function qv(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=qv(r.join("/")),c=[];return c.push(...u.map(h=>h===""?o:[o,h].join("/"))),a&&c.push(...u),c.map(h=>i.startsWith("/")&&h===""?"/":h)}function pS(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:MS(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var mS=/^:[\w-]+$/,gS=3,vS=2,_S=1,xS=10,yS=-2,Qg=i=>i==="*";function SS(i,e){let t=i.split("/"),r=t.length;return t.some(Qg)&&(r+=yS),e&&(r+=vS),t.filter(a=>!Qg(a)).reduce((a,o)=>a+(mS.test(o)?gS:o===""?_S:xS),r)}function MS(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function ES(i,e,t=!1){let{routesMeta:r}=i,a={},o="/",u=[];for(let c=0;c<r.length;++c){let h=r[c],f=c===r.length-1,v=o==="/"?e:e.slice(o.length)||"/",g=tc({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},v),m=h.route;if(!g&&f&&t&&!r[r.length-1].route.index&&(g=tc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!g)return null;Object.assign(a,g.params),u.push({params:a,pathname:$i([o,g.pathname]),pathnameBase:RS($i([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=$i([o,g.pathnameBase]))}return u}function tc(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=wS(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((f,{paramName:v,isOptional:g},m)=>{if(v==="*"){let E=c[m]||"";u=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const _=c[m];return g&&!_?f[v]=void 0:f[v]=(_||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:u,pattern:i}}function wS(i,e=!1,t=!0){Mn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,h,f,v)=>{if(r.push({paramName:c,isOptional:h!=null}),h){let g=v.charAt(f+u.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function bS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ni(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function TS({basename:i,pathname:e}){return e==="/"?i:$i([i,e])}var Kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gh=i=>Kv.test(i);function AS(i,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?hr(i):i,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=e0(t.substring(1),"/"):o=e0(t,e)):o=e,{pathname:o,search:CS(r),hash:PS(a)}}function e0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function nf(i,e,t,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zv(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Wh(i){let e=Zv(i);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function cc(i,e,t,r=!1){let a;typeof i=="string"?a=hr(i):(a={...i},Ft(!a.pathname||!a.pathname.includes("?"),nf("?","pathname","search",a)),Ft(!a.pathname||!a.pathname.includes("#"),nf("#","pathname","hash",a)),Ft(!a.search||!a.search.includes("#"),nf("#","search","hash",a)));let o=i===""||a.pathname==="",u=o?"/":a.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!r&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),g-=1;a.pathname=m.join("/")}c=g>=0?e[g]:"/"}let h=AS(a,c),f=u&&u!=="/"&&u.endsWith("/"),v=(o||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(f||v)&&(h.pathname+="/"),h}var $i=i=>i.join("/").replace(/\/\/+/g,"/"),RS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),CS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,PS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,nl=class{constructor(i,e,t,r=!1){this.status=i,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Ko(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function il(i){return i.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qv(i,e){let t=i;if(typeof t!="string"||!Kv.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,a=!1;if(Jv)try{let o=new URL(window.location.href),u=t.startsWith("//")?new URL(o.protocol+t):new URL(t),c=Ni(u.pathname,e);u.origin===o.origin&&c!=null?t=c+u.search+u.hash:a=!0}catch{Mn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:t}}var vs=Symbol("Uninstrumented");function NS(i,e){let t={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};i.forEach(a=>a({id:e.id,index:e.index,path:e.path,instrument(o){let u=Object.keys(t);for(let c of u)o[c]&&t[c].push(o[c])}}));let r={};if(typeof e.lazy=="function"&&t.lazy.length>0){let a=Ia(t.lazy,e.lazy,()=>{});a&&(r.lazy=a)}if(typeof e.lazy=="object"){let a=e.lazy;["middleware","loader","action"].forEach(o=>{let u=a[o],c=t[`lazy.${o}`];if(typeof u=="function"&&c.length>0){let h=Ia(c,u,()=>{});h&&(r.lazy=Object.assign(r.lazy||{},{[o]:h}))}})}return["loader","action"].forEach(a=>{let o=e[a];if(typeof o=="function"&&t[a].length>0){let u=o[vs]??o,c=Ia(t[a],u,(...h)=>t0(h[0]));c&&(a==="loader"&&u.hydrate===!0&&(c.hydrate=!0),c[vs]=u,r[a]=c)}}),e.middleware&&e.middleware.length>0&&t.middleware.length>0&&(r.middleware=e.middleware.map(a=>{let o=a[vs]??a,u=Ia(t.middleware,o,(...c)=>t0(c[0]));return u?(u[vs]=o,u):a})),r}function LS(i,e){let t={navigate:[],fetch:[]};if(e.forEach(r=>r({instrument(a){let o=Object.keys(a);for(let u of o)a[u]&&t[u].push(a[u])}})),t.navigate.length>0){let r=i.navigate[vs]??i.navigate,a=Ia(t.navigate,r,(...o)=>{let[u,c]=o;return{to:typeof u=="number"||typeof u=="string"?u:u?ur(u):".",...n0(i,c??{})}});a&&(a[vs]=r,i.navigate=a)}if(t.fetch.length>0){let r=i.fetch[vs]??i.fetch,a=Ia(t.fetch,r,(...o)=>{let[u,,c,h]=o;return{href:c??".",fetcherKey:u,...n0(i,h??{})}});a&&(a[vs]=r,i.fetch=a)}return i}function Ia(i,e,t){return i.length===0?null:async(...r)=>{let a=await e_(i,t(...r),()=>e(...r),i.length-1);if(a.type==="error")throw a.value;return a.value}}async function e_(i,e,t,r){let a=i[r],o;if(a){let u,c=async()=>(u?console.error("You cannot call instrumented handlers more than once"):u=e_(i,e,t,r-1),o=await u,Ft(o,"Expected a result"),o.type==="error"&&o.value instanceof Error?{status:"error",error:o.value}:{status:"success",error:void 0});try{await a(c,e)}catch(h){console.error("An instrumentation function threw an error:",h)}u||await c(),await u}else try{o={type:"success",value:await t()}}catch(u){o={type:"error",value:u}}return o||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function t0(i){let{request:e,context:t,params:r,unstable_pattern:a}=i;return{request:DS(e),params:{...r},unstable_pattern:a,context:IS(t)}}function n0(i,e){return{currentUrl:ur(i.state.location),..."formMethod"in e?{formMethod:e.formMethod}:{},..."formEncType"in e?{formEncType:e.formEncType}:{},..."formData"in e?{formData:e.formData}:{},..."body"in e?{body:e.body}:{}}}function DS(i){return{method:i.method,url:i.url,headers:{get:(...e)=>i.headers.get(...e)}}}function IS(i){if(FS(i)){let e={...i};return Object.freeze(e),e}else return{get:e=>i.get(e)}}var US=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function FS(i){if(i===null||typeof i!="object")return!1;const e=Object.getPrototypeOf(i);return e===Object.prototype||e===null||Object.getOwnPropertyNames(e).sort().join("\0")===US}var t_=["POST","PUT","PATCH","DELETE"],OS=new Set(t_),kS=["GET",...t_],BS=new Set(kS),n_=new Set([301,302,303,307,308]),zS=new Set([307,308]),rf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},VS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Co={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},HS=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),i_="remix-router-transitions",r_=Symbol("ResetLoaderData");function GS(i){const e=i.window?i.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Ft(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=i.hydrationRouteProperties||[],a=i.mapRouteProperties||HS,o=a;if(i.unstable_instrumentations){let z=i.unstable_instrumentations;o=X=>({...a(X),...NS(z.map(ce=>ce.route).filter(Boolean),X)})}let u={},c=qo(i.routes,o,void 0,u),h,f=i.basename||"/";f.startsWith("/")||(f=`/${f}`);let v=i.dataStrategy||YS,g={unstable_passThroughRequests:!1,...i.future},m=null,_=new Set,E=null,w=null,y=null,S=i.hydrationData!=null,T=ps(c,i.history.location,f),C=!1,P=null,D,L;if(T==null&&!i.patchRoutesOnNavigation){let z=Ti(404,{pathname:i.history.location.pathname}),{matches:X,route:ce}=fu(c);D=!0,L=!D,T=X,P={[ce.id]:z}}else if(T&&!i.hydrationData&&Dt(T,c,i.history.location.pathname).active&&(T=null),T)if(T.some(z=>z.route.lazy))D=!1,L=!D;else if(!T.some(z=>jh(z.route)))D=!0,L=!D;else{let z=i.hydrationData?i.hydrationData.loaderData:null,X=i.hydrationData?i.hydrationData.errors:null,ce=T;if(X){let Se=T.findIndex(Pe=>X[Pe.route.id]!==void 0);ce=ce.slice(0,Se+1)}L=!1,D=!0,ce.forEach(Se=>{let Pe=s_(Se.route,z,X);L=L||Pe.renderFallback,D=D&&!Pe.shouldLoad})}else{D=!1,L=!D,T=[];let z=Dt(null,c,i.history.location.pathname);z.active&&z.matches&&(C=!0,T=z.matches)}let k,M={historyAction:i.history.action,location:i.history.location,matches:T,initialized:D,renderFallback:L,navigation:rf,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||P,fetchers:new Map,blockers:new Map},N="POP",re=null,B=!1,q,Q=!1,ee=new Map,ie=null,G=!1,W=!1,K=new Set,te=new Map,de=0,F=-1,J=new Map,we=new Set,Be=new Map,Ye=new Map,ue=new Set,_e=new Map,xe,We=null;function Qe(){if(m=i.history.listen(({action:z,location:X,delta:ce})=>{if(xe){xe(),xe=void 0;return}Mn(_e.size===0||ce!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Se=Ve({currentLocation:M.location,nextLocation:X,historyAction:z});if(Se&&ce!=null){let Pe=new Promise(ut=>{xe=ut});i.history.go(ce*-1),Re(Se,{state:"blocked",location:X,proceed(){Re(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Pe.then(()=>i.history.go(ce))},reset(){let ut=new Map(M.blockers);ut.set(Se,Co),pt({blockers:ut})}}),re==null||re.resolve(),re=null;return}return Wt(z,X)}),t){fM(e,ee);let z=()=>hM(e,ee);e.addEventListener("pagehide",z),ie=()=>e.removeEventListener("pagehide",z)}return M.initialized||Wt("POP",M.location,{initialHydration:!0}),k}function gt(){m&&m(),ie&&ie(),_.clear(),q&&q.abort(),M.fetchers.forEach((z,X)=>be(X)),M.blockers.forEach((z,X)=>De(X))}function dn(z){return _.add(z),()=>_.delete(z)}function pt(z,X={}){z.matches&&(z.matches=z.matches.map(Pe=>{let ut=u[Pe.route.id],st=Pe.route;return st.element!==ut.element||st.errorElement!==ut.errorElement||st.hydrateFallbackElement!==ut.hydrateFallbackElement?{...Pe,route:ut}:Pe})),M={...M,...z};let ce=[],Se=[];M.fetchers.forEach((Pe,ut)=>{Pe.state==="idle"&&(ue.has(ut)?ce.push(ut):Se.push(ut))}),ue.forEach(Pe=>{!M.fetchers.has(Pe)&&!te.has(Pe)&&ce.push(Pe)}),[..._].forEach(Pe=>Pe(M,{deletedFetchers:ce,newErrors:z.errors??null,viewTransitionOpts:X.viewTransitionOpts,flushSync:X.flushSync===!0})),ce.forEach(Pe=>be(Pe)),Se.forEach(Pe=>M.fetchers.delete(Pe))}function Ct(z,X,{flushSync:ce}={}){var mt,at;let Se=M.actionData!=null&&M.navigation.formMethod!=null&&Gn(M.navigation.formMethod)&&M.navigation.state==="loading"&&((mt=z.state)==null?void 0:mt._isRedirect)!==!0,Pe;X.actionData?Object.keys(X.actionData).length>0?Pe=X.actionData:Pe=null:Se?Pe=M.actionData:Pe=null;let ut=X.loaderData?h0(M.loaderData,X.loaderData,X.matches||[],X.errors):M.loaderData,st=M.blockers;st.size>0&&(st=new Map(st),st.forEach((At,Lt)=>st.set(Lt,Co)));let ft=G?!1:$t(z,X.matches||M.matches),$e=B===!0||M.navigation.formMethod!=null&&Gn(M.navigation.formMethod)&&((at=z.state)==null?void 0:at._isRedirect)!==!0;h&&(c=h,h=void 0),G||N==="POP"||(N==="PUSH"?i.history.push(z,z.state):N==="REPLACE"&&i.history.replace(z,z.state));let Fe;if(N==="POP"){let At=ee.get(M.location.pathname);At&&At.has(z.pathname)?Fe={currentLocation:M.location,nextLocation:z}:ee.has(z.pathname)&&(Fe={currentLocation:z,nextLocation:M.location})}else if(Q){let At=ee.get(M.location.pathname);At?At.add(z.pathname):(At=new Set([z.pathname]),ee.set(M.location.pathname,At)),Fe={currentLocation:M.location,nextLocation:z}}pt({...X,actionData:Pe,loaderData:ut,historyAction:N,location:z,initialized:!0,renderFallback:!1,navigation:rf,revalidation:"idle",restoreScrollPosition:ft,preventScrollReset:$e,blockers:st},{viewTransitionOpts:Fe,flushSync:ce===!0}),N="POP",B=!1,Q=!1,G=!1,W=!1,re==null||re.resolve(),re=null,We==null||We.resolve(),We=null}async function Gt(z,X){if(re==null||re.resolve(),re=null,typeof z=="number"){re||(re=v0());let tn=re.promise;return i.history.go(z),tn}let ce=jf(M.location,M.matches,f,z,X==null?void 0:X.fromRouteId,X==null?void 0:X.relative),{path:Se,submission:Pe,error:ut}=i0(!1,ce,X),st;X!=null&&X.unstable_mask&&(st={pathname:"",search:"",hash:"",...typeof X.unstable_mask=="string"?hr(X.unstable_mask):{...M.location.unstable_mask,...X.unstable_mask}});let ft=M.location,$e=Yo(ft,Se,X&&X.state,void 0,st);$e={...$e,...i.history.encodeLocation($e)};let Fe=X&&X.replace!=null?X.replace:void 0,mt="PUSH";Fe===!0?mt="REPLACE":Fe===!1||Pe!=null&&Gn(Pe.formMethod)&&Pe.formAction===M.location.pathname+M.location.search&&(mt="REPLACE");let at=X&&"preventScrollReset"in X?X.preventScrollReset===!0:void 0,At=(X&&X.flushSync)===!0,Lt=Ve({currentLocation:ft,nextLocation:$e,historyAction:mt});if(Lt){Re(Lt,{state:"blocked",location:$e,proceed(){Re(Lt,{state:"proceeding",proceed:void 0,reset:void 0,location:$e}),Gt(z,X)},reset(){let tn=new Map(M.blockers);tn.set(Lt,Co),pt({blockers:tn})}});return}await Wt(mt,$e,{submission:Pe,pendingError:ut,preventScrollReset:at,replace:X&&X.replace,enableViewTransition:X&&X.viewTransition,flushSync:At,callSiteDefaultShouldRevalidate:X&&X.unstable_defaultShouldRevalidate})}function Tt(){We||(We=v0()),me(),pt({revalidation:"loading"});let z=We.promise;return M.navigation.state==="submitting"?z:M.navigation.state==="idle"?(Wt(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),z):(Wt(N||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:Q===!0}),z)}async function Wt(z,X,ce){q&&q.abort(),q=null,N=z,G=(ce&&ce.startUninterruptedRevalidation)===!0,yt(M.location,M.matches),B=(ce&&ce.preventScrollReset)===!0,Q=(ce&&ce.enableViewTransition)===!0;let Se=h||c,Pe=ce&&ce.overrideNavigation,ut=ce!=null&&ce.initialHydration&&M.matches&&M.matches.length>0&&!C?M.matches:ps(Se,X,f),st=(ce&&ce.flushSync)===!0;if(ut&&M.initialized&&!W&&nM(M.location,X)&&!(ce&&ce.submission&&Gn(ce.submission.formMethod))){Ct(X,{matches:ut},{flushSync:st});return}let ft=Dt(ut,Se,X.pathname);if(ft.active&&ft.matches&&(ut=ft.matches),!ut){let{error:fn,notFoundMatches:En,route:Yt}=Te(X.pathname);Ct(X,{matches:En,loaderData:{},errors:{[Yt.id]:fn}},{flushSync:st});return}q=new AbortController;let $e=Da(i.history,X,q.signal,ce&&ce.submission),Fe=i.getContext?await i.getContext():new Zg,mt;if(ce&&ce.pendingError)mt=[ms(ut).route.id,{type:"error",error:ce.pendingError}];else if(ce&&ce.submission&&Gn(ce.submission.formMethod)){let fn=await V($e,X,ce.submission,ut,Fe,ft.active,ce&&ce.initialHydration===!0,{replace:ce.replace,flushSync:st});if(fn.shortCircuited)return;if(fn.pendingActionResult){let[En,Yt]=fn.pendingActionResult;if(mi(Yt)&&Ko(Yt.error)&&Yt.error.status===404){q=null,Ct(X,{matches:fn.matches,loaderData:{},errors:{[En]:Yt.error}});return}}ut=fn.matches||ut,mt=fn.pendingActionResult,Pe=sf(X,ce.submission),st=!1,ft.active=!1,$e=Da(i.history,$e.url,$e.signal)}let{shortCircuited:at,matches:At,loaderData:Lt,errors:tn}=await rn($e,X,ut,Fe,ft.active,Pe,ce&&ce.submission,ce&&ce.fetcherSubmission,ce&&ce.replace,ce&&ce.initialHydration===!0,st,mt,ce&&ce.callSiteDefaultShouldRevalidate);at||(q=null,Ct(X,{matches:At||ut,...p0(mt),loaderData:Lt,errors:tn}))}async function V(z,X,ce,Se,Pe,ut,st,ft={}){me();let $e=cM(X,ce);if(pt({navigation:$e},{flushSync:ft.flushSync===!0}),ut){let at=await Dn(Se,X.pathname,z.signal);if(at.type==="aborted")return{shortCircuited:!0};if(at.type==="error"){if(at.partialMatches.length===0){let{matches:Lt,route:tn}=fu(c);return{matches:Lt,pendingActionResult:[tn.id,{type:"error",error:at.error}]}}let At=ms(at.partialMatches).route.id;return{matches:at.partialMatches,pendingActionResult:[At,{type:"error",error:at.error}]}}else if(at.matches)Se=at.matches;else{let{notFoundMatches:At,error:Lt,route:tn}=Te(X.pathname);return{matches:At,pendingActionResult:[tn.id,{type:"error",error:Lt}]}}}let Fe,mt=Xu(Se,X);if(!mt.route.action&&!mt.route.lazy)Fe={type:"error",error:Ti(405,{method:z.method,pathname:X.pathname,routeId:mt.route.id})};else{let at=Ua(o,u,z,X,Se,mt,st?[]:r,Pe),At=await ve(z,X,at,Pe,null);if(Fe=At[mt.route.id],!Fe){for(let Lt of Se)if(At[Lt.route.id]){Fe=At[Lt.route.id];break}}if(z.signal.aborted)return{shortCircuited:!0}}if(Vs(Fe)){let at;return ft&&ft.replace!=null?at=ft.replace:at=c0(Fe.response.headers.get("Location"),new URL(z.url),f,i.history)===M.location.pathname+M.location.search,await $(z,Fe,!0,{submission:ce,replace:at}),{shortCircuited:!0}}if(mi(Fe)){let at=ms(Se,mt.route.id);return(ft&&ft.replace)!==!0&&(N="PUSH"),{matches:Se,pendingActionResult:[at.route.id,Fe,mt.route.id]}}return{matches:Se,pendingActionResult:[mt.route.id,Fe]}}async function rn(z,X,ce,Se,Pe,ut,st,ft,$e,Fe,mt,at,At){let Lt=ut||sf(X,st),tn=st||ft||g0(Lt),fn=!G&&!Fe;if(Pe){if(fn){let dt=Nt(at);pt({navigation:Lt,...dt!==void 0?{actionData:dt}:{}},{flushSync:mt})}let Ie=await Dn(ce,X.pathname,z.signal);if(Ie.type==="aborted")return{shortCircuited:!0};if(Ie.type==="error"){if(Ie.partialMatches.length===0){let{matches:tt,route:It}=fu(c);return{matches:tt,loaderData:{},errors:{[It.id]:Ie.error}}}let dt=ms(Ie.partialMatches).route.id;return{matches:Ie.partialMatches,loaderData:{},errors:{[dt]:Ie.error}}}else if(Ie.matches)ce=Ie.matches;else{let{error:dt,notFoundMatches:tt,route:It}=Te(X.pathname);return{matches:tt,loaderData:{},errors:{[It.id]:dt}}}}let En=h||c,{dsMatches:Yt,revalidatingFetchers:R}=r0(z,Se,o,u,i.history,M,ce,tn,X,Fe?[]:r,Fe===!0,W,K,ue,Be,we,En,f,i.patchRoutesOnNavigation!=null,at,At);if(F=++de,!i.dataStrategy&&!Yt.some(Ie=>Ie.shouldLoad)&&!Yt.some(Ie=>Ie.route.middleware&&Ie.route.middleware.length>0)&&R.length===0){let Ie=ze();return Ct(X,{matches:ce,loaderData:{},errors:at&&mi(at[1])?{[at[0]]:at[1].error}:null,...p0(at),...Ie?{fetchers:new Map(M.fetchers)}:{}},{flushSync:mt}),{shortCircuited:!0}}if(fn){let Ie={};if(!Pe){Ie.navigation=Lt;let dt=Nt(at);dt!==void 0&&(Ie.actionData=dt)}R.length>0&&(Ie.fetchers=Ht(R)),pt(Ie,{flushSync:mt})}R.forEach(Ie=>{Xe(Ie.key),Ie.controller&&te.set(Ie.key,Ie.controller)});let Z=()=>R.forEach(Ie=>Xe(Ie.key));q&&q.signal.addEventListener("abort",Z);let{loaderResults:he,fetcherResults:oe}=await ye(Yt,R,z,X,Se);if(z.signal.aborted)return{shortCircuited:!0};q&&q.signal.removeEventListener("abort",Z),R.forEach(Ie=>te.delete(Ie.key));let se=hu(he);if(se)return await $(z,se.result,!0,{replace:$e}),{shortCircuited:!0};if(se=hu(oe),se)return we.add(se.key),await $(z,se.result,!0,{replace:$e}),{shortCircuited:!0};let{loaderData:Oe,errors:He}=f0(M,ce,he,at,R,oe);Fe&&M.errors&&(He={...M.errors,...He});let Ue=ze(),ke=bt(F),nt=Ue||ke||R.length>0;return{matches:ce,loaderData:Oe,errors:He,...nt?{fetchers:new Map(M.fetchers)}:{}}}function Nt(z){if(z&&!mi(z[1]))return{[z[0]]:z[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function Ht(z){return z.forEach(X=>{let ce=M.fetchers.get(X.key),Se=Po(void 0,ce?ce.data:void 0);M.fetchers.set(X.key,Se)}),new Map(M.fetchers)}async function et(z,X,ce,Se){Xe(z);let Pe=(Se&&Se.flushSync)===!0,ut=h||c,st=jf(M.location,M.matches,f,ce,X,Se==null?void 0:Se.relative),ft=ps(ut,st,f),$e=Dt(ft,ut,st);if($e.active&&$e.matches&&(ft=$e.matches),!ft){Ae(z,X,Ti(404,{pathname:st}),{flushSync:Pe});return}let{path:Fe,submission:mt,error:at}=i0(!0,st,Se);if(at){Ae(z,X,at,{flushSync:Pe});return}let At=i.getContext?await i.getContext():new Zg,Lt=(Se&&Se.preventScrollReset)===!0;if(mt&&Gn(mt.formMethod)){await I(z,X,Fe,ft,At,$e.active,Pe,Lt,mt,Se&&Se.unstable_defaultShouldRevalidate);return}Be.set(z,{routeId:X,path:Fe}),await b(z,X,Fe,ft,At,$e.active,Pe,Lt,mt)}async function I(z,X,ce,Se,Pe,ut,st,ft,$e,Fe){me(),Be.delete(z);let mt=M.fetchers.get(z);je(z,dM($e,mt),{flushSync:st});let at=new AbortController,At=Da(i.history,ce,at.signal,$e);if(ut){let St=await Dn(Se,new URL(At.url).pathname,At.signal,z);if(St.type==="aborted")return;if(St.type==="error"){Ae(z,X,St.error,{flushSync:st});return}else if(St.matches)Se=St.matches;else{Ae(z,X,Ti(404,{pathname:ce}),{flushSync:st});return}}let Lt=Xu(Se,ce);if(!Lt.route.action&&!Lt.route.lazy){let St=Ti(405,{method:$e.formMethod,pathname:ce,routeId:X});Ae(z,X,St,{flushSync:st});return}te.set(z,at);let tn=de,fn=Ua(o,u,At,ce,Se,Lt,r,Pe),En=await ve(At,ce,fn,Pe,z),Yt=En[Lt.route.id];if(!Yt){for(let St of fn)if(En[St.route.id]){Yt=En[St.route.id];break}}if(At.signal.aborted){te.get(z)===at&&te.delete(z);return}if(ue.has(z)){if(Vs(Yt)||mi(Yt)){je(z,Cr(void 0));return}}else{if(Vs(Yt))if(te.delete(z),F>tn){je(z,Cr(void 0));return}else return we.add(z),je(z,Po($e)),$(At,Yt,!1,{fetcherSubmission:$e,preventScrollReset:ft});if(mi(Yt)){Ae(z,X,Yt.error);return}}let R=M.navigation.location||M.location,Z=Da(i.history,R,at.signal),he=h||c,oe=M.navigation.state!=="idle"?ps(he,M.navigation.location,f):M.matches;Ft(oe,"Didn't find any matches after fetcher action");let se=++de;J.set(z,se);let Oe=Po($e,Yt.data);M.fetchers.set(z,Oe);let{dsMatches:He,revalidatingFetchers:Ue}=r0(Z,Pe,o,u,i.history,M,oe,$e,R,r,!1,W,K,ue,Be,we,he,f,i.patchRoutesOnNavigation!=null,[Lt.route.id,Yt],Fe);Ue.filter(St=>St.key!==z).forEach(St=>{let qt=St.key,Ot=M.fetchers.get(qt),hn=Po(void 0,Ot?Ot.data:void 0);M.fetchers.set(qt,hn),Xe(qt),St.controller&&te.set(qt,St.controller)}),pt({fetchers:new Map(M.fetchers)});let ke=()=>Ue.forEach(St=>Xe(St.key));at.signal.addEventListener("abort",ke);let{loaderResults:nt,fetcherResults:Ie}=await ye(He,Ue,Z,R,Pe);if(at.signal.aborted)return;if(at.signal.removeEventListener("abort",ke),J.delete(z),te.delete(z),Ue.forEach(St=>te.delete(St.key)),M.fetchers.has(z)){let St=Cr(Yt.data);M.fetchers.set(z,St)}let dt=hu(nt);if(dt)return $(Z,dt.result,!1,{preventScrollReset:ft});if(dt=hu(Ie),dt)return we.add(dt.key),$(Z,dt.result,!1,{preventScrollReset:ft});let{loaderData:tt,errors:It}=f0(M,oe,nt,void 0,Ue,Ie);bt(se),M.navigation.state==="loading"&&se>F?(Ft(N,"Expected pending action"),q&&q.abort(),Ct(M.navigation.location,{matches:oe,loaderData:tt,errors:It,fetchers:new Map(M.fetchers)})):(pt({errors:It,loaderData:h0(M.loaderData,tt,oe,It),fetchers:new Map(M.fetchers)}),W=!1)}async function b(z,X,ce,Se,Pe,ut,st,ft,$e){let Fe=M.fetchers.get(z);je(z,Po($e,Fe?Fe.data:void 0),{flushSync:st});let mt=new AbortController,at=Da(i.history,ce,mt.signal);if(ut){let Yt=await Dn(Se,new URL(at.url).pathname,at.signal,z);if(Yt.type==="aborted")return;if(Yt.type==="error"){Ae(z,X,Yt.error,{flushSync:st});return}else if(Yt.matches)Se=Yt.matches;else{Ae(z,X,Ti(404,{pathname:ce}),{flushSync:st});return}}let At=Xu(Se,ce);te.set(z,mt);let Lt=de,tn=Ua(o,u,at,ce,Se,At,r,Pe),En=(await ve(at,ce,tn,Pe,z))[At.route.id];if(te.get(z)===mt&&te.delete(z),!at.signal.aborted){if(ue.has(z)){je(z,Cr(void 0));return}if(Vs(En))if(F>Lt){je(z,Cr(void 0));return}else{we.add(z),await $(at,En,!1,{preventScrollReset:ft});return}if(mi(En)){Ae(z,X,En.error);return}je(z,Cr(En.data))}}async function $(z,X,ce,{submission:Se,fetcherSubmission:Pe,preventScrollReset:ut,replace:st}={}){ce||(re==null||re.resolve(),re=null),X.response.headers.has("X-Remix-Revalidate")&&(W=!0);let ft=X.response.headers.get("Location");Ft(ft,"Expected a Location header on the redirect Response"),ft=c0(ft,new URL(z.url),f,i.history);let $e=Yo(M.location,ft,{_isRedirect:!0});if(t){let tn=!1;if(X.response.headers.has("X-Remix-Reload-Document"))tn=!0;else if(Gh(ft)){const fn=$v(ft,!0);tn=fn.origin!==e.location.origin||Ni(fn.pathname,f)==null}if(tn){st?e.location.replace(ft):e.location.assign(ft);return}}q=null;let Fe=st===!0||X.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:mt,formAction:at,formEncType:At}=M.navigation;!Se&&!Pe&&mt&&at&&At&&(Se=g0(M.navigation));let Lt=Se||Pe;if(zS.has(X.response.status)&&Lt&&Gn(Lt.formMethod))await Wt(Fe,$e,{submission:{...Lt,formAction:ft},preventScrollReset:ut||B,enableViewTransition:ce?Q:void 0});else{let tn=sf($e,Se);await Wt(Fe,$e,{overrideNavigation:tn,fetcherSubmission:Pe,preventScrollReset:ut||B,enableViewTransition:ce?Q:void 0})}}async function ve(z,X,ce,Se,Pe){var ft;let ut,st={};try{ut=await KS(v,z,X,ce,Pe,Se,!1)}catch($e){return ce.filter(Fe=>Fe.shouldLoad).forEach(Fe=>{st[Fe.route.id]={type:"error",error:$e}}),st}if(z.signal.aborted)return st;if(!Gn(z.method))for(let $e of ce){if(((ft=ut[$e.route.id])==null?void 0:ft.type)==="error")break;!ut.hasOwnProperty($e.route.id)&&!M.loaderData.hasOwnProperty($e.route.id)&&(!M.errors||!M.errors.hasOwnProperty($e.route.id))&&$e.shouldCallHandler()&&(ut[$e.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${$e.route.id}`)})}for(let[$e,Fe]of Object.entries(ut))if(aM(Fe)){let mt=Fe.result;st[$e]={type:"redirect",response:eM(mt,z,$e,ce,f)}}else st[$e]=await QS(Fe);return st}async function ye(z,X,ce,Se,Pe){let ut=ve(ce,Se,z,Pe,null),st=Promise.all(X.map(async Fe=>{if(Fe.matches&&Fe.match&&Fe.request&&Fe.controller){let at=(await ve(Fe.request,Fe.path,Fe.matches,Pe,Fe.key))[Fe.match.route.id];return{[Fe.key]:at}}else return Promise.resolve({[Fe.key]:{type:"error",error:Ti(404,{pathname:Fe.path})}})})),ft=await ut,$e=(await st).reduce((Fe,mt)=>Object.assign(Fe,mt),{});return{loaderResults:ft,fetcherResults:$e}}function me(){W=!0,Be.forEach((z,X)=>{te.has(X)&&K.add(X),Xe(X)})}function je(z,X,ce={}){M.fetchers.set(z,X),pt({fetchers:new Map(M.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function Ae(z,X,ce,Se={}){let Pe=ms(M.matches,X);be(z),pt({errors:{[Pe.route.id]:ce},fetchers:new Map(M.fetchers)},{flushSync:(Se&&Se.flushSync)===!0})}function rt(z){return Ye.set(z,(Ye.get(z)||0)+1),ue.has(z)&&ue.delete(z),M.fetchers.get(z)||VS}function vt(z,X){Xe(z,X==null?void 0:X.reason),je(z,Cr(null))}function be(z){let X=M.fetchers.get(z);te.has(z)&&!(X&&X.state==="loading"&&J.has(z))&&Xe(z),Be.delete(z),J.delete(z),we.delete(z),ue.delete(z),K.delete(z),M.fetchers.delete(z)}function Ne(z){let X=(Ye.get(z)||0)-1;X<=0?(Ye.delete(z),ue.add(z)):Ye.set(z,X),pt({fetchers:new Map(M.fetchers)})}function Xe(z,X){let ce=te.get(z);ce&&(ce.abort(X),te.delete(z))}function Ke(z){for(let X of z){let ce=rt(X),Se=Cr(ce.data);M.fetchers.set(X,Se)}}function ze(){let z=[],X=!1;for(let ce of we){let Se=M.fetchers.get(ce);Ft(Se,`Expected fetcher: ${ce}`),Se.state==="loading"&&(we.delete(ce),z.push(ce),X=!0)}return Ke(z),X}function bt(z){let X=[];for(let[ce,Se]of J)if(Se<z){let Pe=M.fetchers.get(ce);Ft(Pe,`Expected fetcher: ${ce}`),Pe.state==="loading"&&(Xe(ce),J.delete(ce),X.push(ce))}return Ke(X),X.length>0}function j(z,X){let ce=M.blockers.get(z)||Co;return _e.get(z)!==X&&_e.set(z,X),ce}function De(z){M.blockers.delete(z),_e.delete(z)}function Re(z,X){let ce=M.blockers.get(z)||Co;Ft(ce.state==="unblocked"&&X.state==="blocked"||ce.state==="blocked"&&X.state==="blocked"||ce.state==="blocked"&&X.state==="proceeding"||ce.state==="blocked"&&X.state==="unblocked"||ce.state==="proceeding"&&X.state==="unblocked",`Invalid blocker state transition: ${ce.state} -> ${X.state}`);let Se=new Map(M.blockers);Se.set(z,X),pt({blockers:Se})}function Ve({currentLocation:z,nextLocation:X,historyAction:ce}){if(_e.size===0)return;_e.size>1&&Mn(!1,"A router only supports one blocker at a time");let Se=Array.from(_e.entries()),[Pe,ut]=Se[Se.length-1],st=M.blockers.get(Pe);if(!(st&&st.state==="proceeding")&&ut({currentLocation:z,nextLocation:X,historyAction:ce}))return Pe}function Te(z){let X=Ti(404,{pathname:z}),ce=h||c,{matches:Se,route:Pe}=fu(ce);return{notFoundMatches:Se,route:Pe,error:X}}function ge(z,X,ce){if(E=z,y=X,w=ce||null,!S&&M.navigation===rf){S=!0;let Se=$t(M.location,M.matches);Se!=null&&pt({restoreScrollPosition:Se})}return()=>{E=null,y=null,w=null}}function Ze(z,X){return w&&w(z,X.map(Se=>hS(Se,M.loaderData)))||z.key}function yt(z,X){if(E&&y){let ce=Ze(z,X);E[ce]=y()}}function $t(z,X){if(E){let ce=Ze(z,X),Se=E[ce];if(typeof Se=="number")return Se}return null}function Dt(z,X,ce){if(i.patchRoutesOnNavigation)if(z){if(Object.keys(z[0].params).length>0)return{active:!0,matches:Ho(X,ce,f,!0)}}else return{active:!0,matches:Ho(X,ce,f,!0)||[]};return{active:!1,matches:null}}async function Dn(z,X,ce,Se){if(!i.patchRoutesOnNavigation)return{type:"success",matches:z};let Pe=z;for(;;){let ut=h==null,st=h||c,ft=u;try{await i.patchRoutesOnNavigation({signal:ce,path:X,matches:Pe,fetcherKey:Se,patch:(mt,at)=>{ce.aborted||s0(mt,at,st,ft,o,!1)}})}catch(mt){return{type:"error",error:mt,partialMatches:Pe}}finally{ut&&!ce.aborted&&(c=[...c])}if(ce.aborted)return{type:"aborted"};let $e=ps(st,X,f),Fe=null;if($e){if(Object.keys($e[0].params).length===0)return{type:"success",matches:$e};if(Fe=Ho(st,X,f,!0),!(Fe&&Pe.length<Fe.length&&Rn(Pe,Fe.slice(0,Pe.length))))return{type:"success",matches:$e}}if(Fe||(Fe=Ho(st,X,f,!0)),!Fe||Rn(Pe,Fe))return{type:"success",matches:null};Pe=Fe}}function Rn(z,X){return z.length===X.length&&z.every((ce,Se)=>ce.route.id===X[Se].route.id)}function Vr(z){u={},h=qo(z,o,void 0,u)}function Ii(z,X,ce=!1){let Se=h==null;s0(z,X,h||c,u,o,ce),Se&&(c=[...c],pt({}))}return k={get basename(){return f},get future(){return g},get state(){return M},get routes(){return c},get window(){return e},initialize:Qe,subscribe:dn,enableScrollRestoration:ge,navigate:Gt,fetch:et,revalidate:Tt,createHref:z=>i.history.createHref(z),encodeLocation:z=>i.history.encodeLocation(z),getFetcher:rt,resetFetcher:vt,deleteFetcher:Ne,dispose:gt,getBlocker:j,deleteBlocker:De,patchRoutes:Ii,_internalFetchControllers:te,_internalSetRoutes:Vr,_internalSetStateDoNotUseOrYouWillBreakYourApp(z){pt(z)}},i.unstable_instrumentations&&(k=LS(k,i.unstable_instrumentations.map(z=>z.router).filter(Boolean))),k}function WS(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function jf(i,e,t,r,a,o){let u,c;if(a){u=[];for(let f of e)if(u.push(f),f.route.id===a){c=f;break}}else u=e,c=e[e.length-1];let h=cc(r||".",Wh(u),Ni(i.pathname,t)||i.pathname,o==="path");if(r==null&&(h.search=i.search,h.hash=i.hash),(r==null||r===""||r===".")&&c){let f=$h(h.search);if(c.route.index&&!f)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let v=new URLSearchParams(h.search),g=v.getAll("index");v.delete("index"),g.filter(_=>_).forEach(_=>v.append("index",_));let m=v.toString();h.search=m?`?${m}`:""}}return t!=="/"&&(h.pathname=TS({basename:t,pathname:h.pathname})),ur(h)}function i0(i,e,t){if(!t||!WS(t))return{path:e};if(t.formMethod&&!uM(t.formMethod))return{path:e,error:Ti(405,{method:t.formMethod})};let r=()=>({path:e,error:Ti(400,{type:"invalid-body"})}),o=(t.formMethod||"get").toUpperCase(),u=f_(e);if(t.body!==void 0){if(t.formEncType==="text/plain"){if(!Gn(o))return r();let g=typeof t.body=="string"?t.body:t.body instanceof FormData||t.body instanceof URLSearchParams?Array.from(t.body.entries()).reduce((m,[_,E])=>`${m}${_}=${E}
`,""):String(t.body);return{path:e,submission:{formMethod:o,formAction:u,formEncType:t.formEncType,formData:void 0,json:void 0,text:g}}}else if(t.formEncType==="application/json"){if(!Gn(o))return r();try{let g=typeof t.body=="string"?JSON.parse(t.body):t.body;return{path:e,submission:{formMethod:o,formAction:u,formEncType:t.formEncType,formData:void 0,json:g,text:void 0}}}catch{return r()}}}Ft(typeof FormData=="function","FormData is not available in this environment");let c,h;if(t.formData)c=$f(t.formData),h=t.formData;else if(t.body instanceof FormData)c=$f(t.body),h=t.body;else if(t.body instanceof URLSearchParams)c=t.body,h=d0(c);else if(t.body==null)c=new URLSearchParams,h=new FormData;else try{c=new URLSearchParams(t.body),h=d0(c)}catch{return r()}let f={formMethod:o,formAction:u,formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(Gn(f.formMethod))return{path:e,submission:f};let v=hr(e);return i&&v.search&&$h(v.search)&&c.append("index",""),v.search=`?${c}`,{path:ur(v),submission:f}}function r0(i,e,t,r,a,o,u,c,h,f,v,g,m,_,E,w,y,S,T,C,P){var ie;let D=C?mi(C[1])?C[1].error:C[1].data:void 0,L=a.createURL(o.location),k=a.createURL(h),M;if(v&&o.errors){let G=Object.keys(o.errors)[0];M=u.findIndex(W=>W.route.id===G)}else if(C&&mi(C[1])){let G=C[0];M=u.findIndex(W=>W.route.id===G)-1}let N=C?C[1].statusCode:void 0,re=N&&N>=400,B={currentUrl:L,currentParams:((ie=o.matches[0])==null?void 0:ie.params)||{},nextUrl:k,nextParams:u[0].params,...c,actionResult:D,actionStatus:N},q=il(u),Q=u.map((G,W)=>{let{route:K}=G,te=null;if(M!=null&&W>M)te=!1;else if(K.lazy)te=!0;else if(!jh(K))te=!1;else if(v){let{shouldLoad:we}=s_(K,o.loaderData,o.errors);te=we}else jS(o.loaderData,o.matches[W],G)&&(te=!0);if(te!==null)return Xf(t,r,i,h,q,G,f,e,te);let de=!1;typeof P=="boolean"?de=P:re?de=!1:(g||L.pathname+L.search===k.pathname+k.search||L.search!==k.search||XS(o.matches[W],G))&&(de=!0);let F={...B,defaultShouldRevalidate:de},J=jo(G,F);return Xf(t,r,i,h,q,G,f,e,J,F,P)}),ee=[];return E.forEach((G,W)=>{if(v||!u.some(Ye=>Ye.route.id===G.routeId)||_.has(W))return;let K=o.fetchers.get(W),te=K&&K.state!=="idle"&&K.data===void 0,de=ps(y,G.path,S);if(!de){if(T&&te)return;ee.push({key:W,routeId:G.routeId,path:G.path,matches:null,match:null,request:null,controller:null});return}if(w.has(W))return;let F=Xu(de,G.path),J=new AbortController,we=Da(a,G.path,J.signal),Be=null;if(m.has(W))m.delete(W),Be=Ua(t,r,we,G.path,de,F,f,e);else if(te)g&&(Be=Ua(t,r,we,G.path,de,F,f,e));else{let Ye;typeof P=="boolean"?Ye=P:re?Ye=!1:Ye=g;let ue={...B,defaultShouldRevalidate:Ye};jo(F,ue)&&(Be=Ua(t,r,we,G.path,de,F,f,e,ue))}Be&&ee.push({key:W,routeId:G.routeId,path:G.path,matches:Be,match:F,request:we,controller:J})}),{dsMatches:Q,revalidatingFetchers:ee}}function jh(i){return i.loader!=null||i.middleware!=null&&i.middleware.length>0}function s_(i,e,t){if(i.lazy)return{shouldLoad:!0,renderFallback:!0};if(!jh(i))return{shouldLoad:!1,renderFallback:!1};let r=e!=null&&i.id in e,a=t!=null&&t[i.id]!==void 0;if(!r&&a)return{shouldLoad:!1,renderFallback:!1};if(typeof i.loader=="function"&&i.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let o=!r&&!a;return{shouldLoad:o,renderFallback:o}}function jS(i,e,t){let r=!e||t.route.id!==e.route.id,a=!i.hasOwnProperty(t.route.id);return r||a}function XS(i,e){let t=i.route.path;return i.pathname!==e.pathname||t!=null&&t.endsWith("*")&&i.params["*"]!==e.params["*"]}function jo(i,e){if(i.route.shouldRevalidate){let t=i.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}function s0(i,e,t,r,a,o){let u;if(i){let f=r[i];Ft(f,`No route found to patch children into: routeId = ${i}`),f.children||(f.children=[]),u=f.children}else u=t;let c=[],h=[];if(e.forEach(f=>{let v=u.find(g=>a_(f,g));v?h.push({existingRoute:v,newRoute:f}):c.push(f)}),c.length>0){let f=qo(c,a,[i||"_","patch",String((u==null?void 0:u.length)||"0")],r);u.push(...f)}if(o&&h.length>0)for(let f=0;f<h.length;f++){let{existingRoute:v,newRoute:g}=h[f],m=v,[_]=qo([g],a,[],{},!0);Object.assign(m,{element:_.element?_.element:m.element,errorElement:_.errorElement?_.errorElement:m.errorElement,hydrateFallbackElement:_.hydrateFallbackElement?_.hydrateFallbackElement:m.hydrateFallbackElement})}}function a_(i,e){var t;return"id"in i&&"id"in e&&i.id===e.id?!0:i.index===e.index&&i.path===e.path&&i.caseSensitive===e.caseSensitive?(!i.children||i.children.length===0)&&(!e.children||e.children.length===0)?!0:((t=i.children)==null?void 0:t.every((r,a)=>{var o;return(o=e.children)==null?void 0:o.some(u=>a_(r,u))}))??!1:!1}var a0=new WeakMap,o_=({key:i,route:e,manifest:t,mapRouteProperties:r})=>{let a=t[e.id];if(Ft(a,"No route found in manifest"),!a.lazy||typeof a.lazy!="object")return;let o=a.lazy[i];if(!o)return;let u=a0.get(a);u||(u={},a0.set(a,u));let c=u[i];if(c)return c;let h=(async()=>{let f=uS(i),g=a[i]!==void 0&&i!=="hasErrorBoundary";if(f)Mn(!f,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),u[i]=Promise.resolve();else if(g)Mn(!1,`Route "${a.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let m=await o();m!=null&&(Object.assign(a,{[i]:m}),Object.assign(a,r(a)))}typeof a.lazy=="object"&&(a.lazy[i]=void 0,Object.values(a.lazy).every(m=>m===void 0)&&(a.lazy=void 0))})();return u[i]=h,h},o0=new WeakMap;function $S(i,e,t,r,a){let o=t[i.id];if(Ft(o,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let v=o0.get(o);if(v)return{lazyRoutePromise:v,lazyHandlerPromise:v};let g=(async()=>{Ft(typeof i.lazy=="function","No lazy route function found");let m=await i.lazy(),_={};for(let E in m){let w=m[E];if(w===void 0)continue;let y=dS(E),T=o[E]!==void 0&&E!=="hasErrorBoundary";y?Mn(!y,"Route property "+E+" is not a supported property to be returned from a lazy route function. This property will be ignored."):T?Mn(!T,`Route "${o.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`):_[E]=w}Object.assign(o,_),Object.assign(o,{...r(o),lazy:void 0})})();return o0.set(o,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let u=Object.keys(i.lazy),c=[],h;for(let v of u){if(a&&a.includes(v))continue;let g=o_({key:v,route:i,manifest:t,mapRouteProperties:r});g&&(c.push(g),v===e&&(h=g))}let f=c.length>0?Promise.all(c).then(()=>{}):void 0;return f==null||f.catch(()=>{}),h==null||h.catch(()=>{}),{lazyRoutePromise:f,lazyHandlerPromise:h}}async function l0(i){let e=i.matches.filter(a=>a.shouldLoad),t={};return(await Promise.all(e.map(a=>a.resolve()))).forEach((a,o)=>{t[e[o].route.id]=a}),t}async function YS(i){return i.matches.some(e=>e.route.middleware)?l_(i,()=>l0(i)):l0(i)}function l_(i,e){return qS(i,e,r=>{if(lM(r))throw r;return r},rM,t);function t(r,a,o){if(o)return Promise.resolve(Object.assign(o.value,{[a]:{type:"error",result:r}}));{let{matches:u}=i,c=Math.min(Math.max(u.findIndex(f=>f.route.id===a),0),Math.max(u.findIndex(f=>f.shouldCallHandler()),0)),h=ms(u,u[c].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:r}})}}}async function qS(i,e,t,r,a){let{matches:o,...u}=i,c=o.flatMap(f=>f.route.middleware?f.route.middleware.map(v=>[f.route.id,v]):[]);return await u_(u,c,e,t,r,a)}async function u_(i,e,t,r,a,o,u=0){let{request:c}=i;if(c.signal.aborted)throw c.signal.reason??new Error(`Request aborted: ${c.method} ${c.url}`);let h=e[u];if(!h)return await t();let[f,v]=h,g,m=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");try{return g={value:await u_(i,e,t,r,a,o,u+1)},g.value}catch(_){return g={value:await o(_,f,g)},g.value}};try{let _=await v(i,m),E=_!=null?r(_):void 0;return a(E)?E:g?E??g.value:(g={value:await m()},g.value)}catch(_){return await o(_,f,g)}}function c_(i,e,t,r,a){let o=o_({key:"middleware",route:r.route,manifest:e,mapRouteProperties:i}),u=$S(r.route,Gn(t.method)?"action":"loader",e,i,a);return{middleware:o,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Xf(i,e,t,r,a,o,u,c,h,f=null,v){let g=!1,m=c_(i,e,t,o,u);return{...o,_lazyPromises:m,shouldLoad:h,shouldRevalidateArgs:f,shouldCallHandler(_){return g=!0,f?typeof v=="boolean"?jo(o,{...f,defaultShouldRevalidate:v}):typeof _=="boolean"?jo(o,{...f,defaultShouldRevalidate:_}):jo(o,f):h},resolve(_){let{lazy:E,loader:w,middleware:y}=o.route,S=g||h||_&&!Gn(t.method)&&(E||w),T=y&&y.length>0&&!w&&!E;return S&&(Gn(t.method)||!T)?ZS({request:t,path:r,unstable_pattern:a,match:o,lazyHandlerPromise:m==null?void 0:m.handler,lazyRoutePromise:m==null?void 0:m.route,handlerOverride:_,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function Ua(i,e,t,r,a,o,u,c,h=null){return a.map(f=>f.route.id!==o.route.id?{...f,shouldLoad:!1,shouldRevalidateArgs:h,shouldCallHandler:()=>!1,_lazyPromises:c_(i,e,t,f,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Xf(i,e,t,r,il(a),f,u,c,!0,h))}async function KS(i,e,t,r,a,o,u){r.some(v=>{var g;return(g=v._lazyPromises)==null?void 0:g.middleware})&&await Promise.all(r.map(v=>{var g;return(g=v._lazyPromises)==null?void 0:g.middleware}));let c={request:e,unstable_url:d_(e,t),unstable_pattern:il(r),params:r[0].params,context:o,matches:r},f=await i({...c,fetcherKey:a,runClientMiddleware:v=>{let g=c;return l_(g,()=>v({...g,fetcherKey:a,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(v=>{var g,m;return[(g=v._lazyPromises)==null?void 0:g.handler,(m=v._lazyPromises)==null?void 0:m.route]}))}catch{}return f}async function ZS({request:i,path:e,unstable_pattern:t,match:r,lazyHandlerPromise:a,lazyRoutePromise:o,handlerOverride:u,scopedContext:c}){let h,f,v=Gn(i.method),g=v?"action":"loader",m=_=>{let E,w=new Promise((T,C)=>E=C);f=()=>E(),i.signal.addEventListener("abort",f);let y=T=>typeof _!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${r.route.id}]`)):_({request:i,unstable_url:d_(i,e),unstable_pattern:t,params:r.params,context:c},...T!==void 0?[T]:[]),S=(async()=>{try{return{type:"data",result:await(u?u(C=>y(C)):y())}}catch(T){return{type:"error",result:T}}})();return Promise.race([S,w])};try{let _=v?r.route.action:r.route.loader;if(a||o)if(_){let E,[w]=await Promise.all([m(_).catch(y=>{E=y}),a,o]);if(E!==void 0)throw E;h=w}else{await a;let E=v?r.route.action:r.route.loader;if(E)[h]=await Promise.all([m(E),o]);else if(g==="action"){let w=new URL(i.url),y=w.pathname+w.search;throw Ti(405,{method:i.method,pathname:y,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(_)h=await m(_);else{let E=new URL(i.url),w=E.pathname+E.search;throw Ti(404,{pathname:w})}}catch(_){return{type:"error",result:_}}finally{f&&i.signal.removeEventListener("abort",f)}return h}async function JS(i){let e=i.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?i.body==null?null:i.json():i.text()}async function QS(i){var r,a,o,u,c;let{result:e,type:t}=i;if(Xh(e)){let h;try{h=await JS(e)}catch(f){return{type:"error",error:f}}return t==="error"?{type:"error",error:new nl(e.status,e.statusText,h),statusCode:e.status,headers:e.headers}:{type:"data",data:h,statusCode:e.status,headers:e.headers}}return t==="error"?m0(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:(r=e.init)==null?void 0:r.status,headers:(a=e.init)!=null&&a.headers?new Headers(e.init.headers):void 0}:{type:"error",error:iM(e),statusCode:Ko(e)?e.status:void 0,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Ko(e)?e.status:void 0}:m0(e)?{type:"data",data:e.data,statusCode:(u=e.init)==null?void 0:u.status,headers:(c=e.init)!=null&&c.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function eM(i,e,t,r,a){let o=i.headers.get("Location");if(Ft(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Gh(o)){let u=r.slice(0,r.findIndex(c=>c.route.id===t)+1);o=jf(new URL(e.url),u,a,o),i.headers.set("Location",o)}return i}var u0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function c0(i,e,t,r){if(Gh(i)){let a=i,o=a.startsWith("//")?new URL(e.protocol+a):new URL(a);if(u0.includes(o.protocol))throw new Error("Invalid redirect location");let u=Ni(o.pathname,t)!=null;if(o.origin===e.origin&&u)return o.pathname+o.search+o.hash}try{let a=r.createURL(i);if(u0.includes(a.protocol))throw new Error("Invalid redirect location")}catch{}return i}function Da(i,e,t,r){let a=i.createURL(f_(e)).toString(),o={signal:t};if(r&&Gn(r.formMethod)){let{formMethod:u,formEncType:c}=r;o.method=u.toUpperCase(),c==="application/json"?(o.headers=new Headers({"Content-Type":c}),o.body=JSON.stringify(r.json)):c==="text/plain"?o.body=r.text:c==="application/x-www-form-urlencoded"&&r.formData?o.body=$f(r.formData):o.body=r.formData}return new Request(a,o)}function d_(i,e){let t=new URL(i.url),r=typeof e=="string"?hr(e):e;if(t.pathname=r.pathname||"/",r.search){let a=new URLSearchParams(r.search),o=a.getAll("index");a.delete("index");for(let u of o.filter(Boolean))a.append("index",u);t.search=a.size?`?${a.toString()}`:""}else t.search="";return t.hash=r.hash||"",t}function $f(i){let e=new URLSearchParams;for(let[t,r]of i.entries())e.append(t,typeof r=="string"?r:r.name);return e}function d0(i){let e=new FormData;for(let[t,r]of i.entries())e.append(t,r);return e}function tM(i,e,t,r=!1,a=!1){let o={},u=null,c,h=!1,f={},v=t&&mi(t[1])?t[1].error:void 0;return i.forEach(g=>{if(!(g.route.id in e))return;let m=g.route.id,_=e[m];if(Ft(!Vs(_),"Cannot handle redirect results in processLoaderData"),mi(_)){let E=_.error;if(v!==void 0&&(E=v,v=void 0),u=u||{},a)u[m]=E;else{let w=ms(i,m);u[w.route.id]==null&&(u[w.route.id]=E)}r||(o[m]=r_),h||(h=!0,c=Ko(_.error)?_.error.status:500),_.headers&&(f[m]=_.headers)}else o[m]=_.data,_.statusCode&&_.statusCode!==200&&!h&&(c=_.statusCode),_.headers&&(f[m]=_.headers)}),v!==void 0&&t&&(u={[t[0]]:v},t[2]&&(o[t[2]]=void 0)),{loaderData:o,errors:u,statusCode:c||200,loaderHeaders:f}}function f0(i,e,t,r,a,o){let{loaderData:u,errors:c}=tM(e,t,r);return a.filter(h=>!h.matches||h.matches.some(f=>f.shouldLoad)).forEach(h=>{let{key:f,match:v,controller:g}=h;if(g&&g.signal.aborted)return;let m=o[f];if(Ft(m,"Did not find corresponding fetcher result"),mi(m)){let _=ms(i.matches,v==null?void 0:v.route.id);c&&c[_.route.id]||(c={...c,[_.route.id]:m.error}),i.fetchers.delete(f)}else if(Vs(m))Ft(!1,"Unhandled fetcher revalidation redirect");else{let _=Cr(m.data);i.fetchers.set(f,_)}}),{loaderData:u,errors:c}}function h0(i,e,t,r){let a=Object.entries(e).filter(([,o])=>o!==r_).reduce((o,[u,c])=>(o[u]=c,o),{});for(let o of t){let u=o.route.id;if(!e.hasOwnProperty(u)&&i.hasOwnProperty(u)&&o.route.loader&&(a[u]=i[u]),r&&r.hasOwnProperty(u))break}return a}function p0(i){return i?mi(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function ms(i,e){return(e?i.slice(0,i.findIndex(r=>r.route.id===e)+1):[...i]).reverse().find(r=>r.route.hasErrorBoundary===!0)||i[0]}function fu(i){let e=i.length===1?i[0]:i.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ti(i,{pathname:e,routeId:t,method:r,type:a,message:o}={}){let u="Unknown Server Error",c="Unknown @remix-run/router error";return i===400?(u="Bad Request",r&&e&&t?c=`You made a ${r} request to "${e}" but did not provide a \`loader\` for route "${t}", so there is no way to handle the request.`:a==="invalid-body"&&(c="Unable to encode submission body")):i===403?(u="Forbidden",c=`Route "${t}" does not match URL "${e}"`):i===404?(u="Not Found",c=`No route matches URL "${e}"`):i===405&&(u="Method Not Allowed",r&&e&&t?c=`You made a ${r.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${t}", so there is no way to handle the request.`:r&&(c=`Invalid request method "${r.toUpperCase()}"`)),new nl(i||500,u,new Error(c),!0)}function hu(i){let e=Object.entries(i);for(let t=e.length-1;t>=0;t--){let[r,a]=e[t];if(Vs(a))return{key:r,result:a}}}function f_(i){let e=typeof i=="string"?hr(i):i;return ur({...e,hash:""})}function nM(i,e){return i.pathname!==e.pathname||i.search!==e.search?!1:i.hash===""?e.hash!=="":i.hash===e.hash?!0:e.hash!==""}function iM(i){var e,t;return new nl(((e=i.init)==null?void 0:e.status)??500,((t=i.init)==null?void 0:t.statusText)??"Internal Server Error",i.data)}function rM(i){return i!=null&&typeof i=="object"&&Object.entries(i).every(([e,t])=>typeof e=="string"&&sM(t))}function sM(i){return i!=null&&typeof i=="object"&&"type"in i&&"result"in i&&(i.type==="data"||i.type==="error")}function aM(i){return Xh(i.result)&&n_.has(i.result.status)}function mi(i){return i.type==="error"}function Vs(i){return(i&&i.type)==="redirect"}function m0(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Xh(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function oM(i){return n_.has(i)}function lM(i){return Xh(i)&&oM(i.status)&&i.headers.has("Location")}function uM(i){return BS.has(i.toUpperCase())}function Gn(i){return OS.has(i.toUpperCase())}function $h(i){return new URLSearchParams(i).getAll("index").some(e=>e==="")}function Xu(i,e){let t=typeof e=="string"?hr(e).search:e.search;if(i[i.length-1].route.index&&$h(t||""))return i[i.length-1];let r=Zv(i);return r[r.length-1]}function g0(i){let{formMethod:e,formAction:t,formEncType:r,text:a,formData:o,json:u}=i;if(!(!e||!t||!r)){if(a!=null)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:void 0,text:a};if(o!=null)return{formMethod:e,formAction:t,formEncType:r,formData:o,json:void 0,text:void 0};if(u!==void 0)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:u,text:void 0}}}function sf(i,e){return e?{state:"loading",location:i,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function cM(i,e){return{state:"submitting",location:i,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Po(i,e){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dM(i,e){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:e?e.data:void 0}}function Cr(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function fM(i,e){try{let t=i.sessionStorage.getItem(i_);if(t){let r=JSON.parse(t);for(let[a,o]of Object.entries(r||{}))o&&Array.isArray(o)&&e.set(a,new Set(o||[]))}}catch{}}function hM(i,e){if(e.size>0){let t={};for(let[r,a]of e)t[r]=[...a];try{i.sessionStorage.setItem(i_,JSON.stringify(t))}catch(r){Mn(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function v0(){let i,e,t=new Promise((r,a)=>{i=async o=>{r(o);try{await t}catch{}},e=async o=>{a(o);try{await t}catch{}}});return{promise:t,resolve:i,reject:e}}var js=ne.createContext(null);js.displayName="DataRouter";var rl=ne.createContext(null);rl.displayName="DataRouterState";var h_=ne.createContext(!1);function p_(){return ne.useContext(h_)}var Yh=ne.createContext({isTransitioning:!1});Yh.displayName="ViewTransition";var m_=ne.createContext(new Map);m_.displayName="Fetchers";var pM=ne.createContext(null);pM.displayName="Await";var Li=ne.createContext(null);Li.displayName="Navigation";var dc=ne.createContext(null);dc.displayName="Location";var qi=ne.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var qh=ne.createContext(null);qh.displayName="RouteError";var g_="REACT_ROUTER_ERROR",mM="REDIRECT",gM="ROUTE_ERROR_RESPONSE";function vM(i){if(i.startsWith(`${g_}:${mM}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function _M(i){if(i.startsWith(`${g_}:${gM}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new nl(e.status,e.statusText,e.data)}catch{}}function xM(i,{relative:e}={}){Ft(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=ne.useContext(Li),{hash:a,pathname:o,search:u}=ol(i,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:$i([t,o])),r.createHref({pathname:c,search:u,hash:a})}function sl(){return ne.useContext(dc)!=null}function Ki(){return Ft(sl(),"useLocation() may be used only in the context of a <Router> component."),ne.useContext(dc).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function __(i){ne.useContext(Li).static||ne.useLayoutEffect(i)}function al(){let{isDataRoute:i}=ne.useContext(qi);return i?UM():yM()}function yM(){Ft(sl(),"useNavigate() may be used only in the context of a <Router> component.");let i=ne.useContext(js),{basename:e,navigator:t}=ne.useContext(Li),{matches:r}=ne.useContext(qi),{pathname:a}=Ki(),o=JSON.stringify(Wh(r)),u=ne.useRef(!1);return __(()=>{u.current=!0}),ne.useCallback((h,f={})=>{if(Mn(u.current,v_),!u.current)return;if(typeof h=="number"){t.go(h);return}let v=cc(h,JSON.parse(o),a,f.relative==="path");i==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:$i([e,v.pathname])),(f.replace?t.replace:t.push)(v,f.state,f)},[e,t,o,a,i])}var SM=ne.createContext(null);function MM(i){let e=ne.useContext(qi).outlet;return ne.useMemo(()=>e&&ne.createElement(SM.Provider,{value:i},e),[e,i])}function EM(){let{matches:i}=ne.useContext(qi),e=i[i.length-1];return e?e.params:{}}function ol(i,{relative:e}={}){let{matches:t}=ne.useContext(qi),{pathname:r}=Ki(),a=JSON.stringify(Wh(t));return ne.useMemo(()=>cc(i,JSON.parse(a),r,e==="path"),[i,a,r,e])}function wM(i,e,t){Ft(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ne.useContext(Li),{matches:a}=ne.useContext(qi),o=a[a.length-1],u=o?o.params:{},c=o?o.pathname:"/",h=o?o.pathnameBase:"/",f=o&&o.route;{let y=f&&f.path||"";y_(c,!f||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=Ki(),g;g=v;let m=g.pathname||"/",_=m;if(h!=="/"){let y=h.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=ps(i,{pathname:_});return Mn(f||E!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Mn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),CM(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:$i([h,r.encodeLocation?r.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:$i([h,r.encodeLocation?r.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),a,t)}function bM(){let i=IM(),e=Ko(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=ne.createElement(ne.Fragment,null,ne.createElement("p",null,"💿 Hey developer 👋"),ne.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ne.createElement("code",{style:o},"ErrorBoundary")," or"," ",ne.createElement("code",{style:o},"errorElement")," prop on your route.")),ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?ne.createElement("pre",{style:a},t):null,u)}var TM=ne.createElement(bM,null),x_=class extends ne.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=_M(i.digest);t&&(i=t)}let e=i!==void 0?ne.createElement(qi.Provider,{value:this.props.routeContext},ne.createElement(qh.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?ne.createElement(AM,{error:i},e):e}};x_.contextType=h_;var af=new WeakMap;function AM({children:i,error:e}){let{basename:t}=ne.useContext(Li);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=vM(e.digest);if(r){let a=af.get(e);if(a)throw a;let o=Qv(r.location,t);if(Jv&&!af.get(e))if(o.isExternal||r.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:r.replace}));throw af.set(e,u),u}return ne.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return i}function RM({routeContext:i,match:e,children:t}){let r=ne.useContext(js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ne.createElement(qi.Provider,{value:i},t)}function CM(i,e=[],t){let r=t==null?void 0:t.state;if(i==null){if(!r)return null;if(r.errors)i=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)i=r.matches;else return null}let a=i,o=r==null?void 0:r.errors;if(o!=null){let v=a.findIndex(g=>g.route.id&&(o==null?void 0:o[g.route.id])!==void 0);Ft(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,v+1))}let u=!1,c=-1;if(t&&r){u=r.renderFallback;for(let v=0;v<a.length;v++){let g=a[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=v),g.route.id){let{loaderData:m,errors:_}=r,E=g.route.loader&&!m.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||E){t.isStatic&&(u=!0),c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}}let h=t==null?void 0:t.onError,f=r&&h?(v,g)=>{var m,_;h(v,{location:r.location,params:((_=(m=r.matches)==null?void 0:m[0])==null?void 0:_.params)??{},unstable_pattern:il(r.matches),errorInfo:g})}:void 0;return a.reduceRight((v,g,m)=>{let _,E=!1,w=null,y=null;r&&(_=o&&g.route.id?o[g.route.id]:void 0,w=g.route.errorElement||TM,u&&(c<0&&m===0?(y_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):c===m&&(E=!0,y=g.route.hydrateFallbackElement||null)));let S=e.concat(a.slice(0,m+1)),T=()=>{let C;return _?C=w:E?C=y:g.route.Component?C=ne.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=v,ne.createElement(RM,{match:g,routeContext:{outlet:v,matches:S,isDataRoute:r!=null},children:C})};return r&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?ne.createElement(x_,{location:r.location,revalidation:r.revalidation,component:w,error:_,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:f}):T()},null)}function Kh(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PM(i){let e=ne.useContext(js);return Ft(e,Kh(i)),e}function NM(i){let e=ne.useContext(rl);return Ft(e,Kh(i)),e}function LM(i){let e=ne.useContext(qi);return Ft(e,Kh(i)),e}function Zh(i){let e=LM(i),t=e.matches[e.matches.length-1];return Ft(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function DM(){return Zh("useRouteId")}function IM(){var r;let i=ne.useContext(qh),e=NM("useRouteError"),t=Zh("useRouteError");return i!==void 0?i:(r=e.errors)==null?void 0:r[t]}function UM(){let{router:i}=PM("useNavigate"),e=Zh("useNavigate"),t=ne.useRef(!1);return __(()=>{t.current=!0}),ne.useCallback(async(a,o={})=>{Mn(t.current,v_),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...o}))},[i,e])}var _0={};function y_(i,e,t){!e&&!_0[i]&&(_0[i]=!0,Mn(!1,t))}var x0={};function y0(i,e){!i&&!x0[e]&&(x0[e]=!0,console.warn(e))}var FM="useOptimistic",S0=jv[FM],OM=()=>{};function kM(i){return S0?S0(i):[i,OM]}function BM(i){let e={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&Mn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:ne.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&Mn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:ne.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&Mn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:ne.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),e}var zM=["HydrateFallback","hydrateFallbackElement"],VM=class{constructor(){this.status="pending",this.promise=new Promise((i,e)=>{this.resolve=t=>{this.status==="pending"&&(this.status="resolved",i(t))},this.reject=t=>{this.status==="pending"&&(this.status="rejected",e(t))}})}};function HM({router:i,flushSync:e,onError:t,unstable_useTransitions:r}){r=p_()||r;let[o,u]=ne.useState(i.state),[c,h]=kM(o),[f,v]=ne.useState(),[g,m]=ne.useState({isTransitioning:!1}),[_,E]=ne.useState(),[w,y]=ne.useState(),[S,T]=ne.useState(),C=ne.useRef(new Map),P=ne.useCallback((M,{deletedFetchers:N,newErrors:re,flushSync:B,viewTransitionOpts:q})=>{re&&t&&Object.values(re).forEach(ee=>{var ie;return t(ee,{location:M.location,params:((ie=M.matches[0])==null?void 0:ie.params)??{},unstable_pattern:il(M.matches)})}),M.fetchers.forEach((ee,ie)=>{ee.data!==void 0&&C.current.set(ie,ee.data)}),N.forEach(ee=>C.current.delete(ee)),y0(B===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Q=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(y0(q==null||Q,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!q||!Q){e&&B?e(()=>u(M)):r===!1?u(M):ne.startTransition(()=>{r===!0&&h(ee=>M0(ee,M)),u(M)});return}if(e&&B){e(()=>{w&&(_==null||_.resolve(),w.skipTransition()),m({isTransitioning:!0,flushSync:!0,currentLocation:q.currentLocation,nextLocation:q.nextLocation})});let ee=i.window.document.startViewTransition(()=>{e(()=>u(M))});ee.finished.finally(()=>{e(()=>{E(void 0),y(void 0),v(void 0),m({isTransitioning:!1})})}),e(()=>y(ee));return}w?(_==null||_.resolve(),w.skipTransition(),T({state:M,currentLocation:q.currentLocation,nextLocation:q.nextLocation})):(v(M),m({isTransitioning:!0,flushSync:!1,currentLocation:q.currentLocation,nextLocation:q.nextLocation}))},[i.window,e,w,_,r,h,t]);ne.useLayoutEffect(()=>i.subscribe(P),[i,P]),ne.useEffect(()=>{g.isTransitioning&&!g.flushSync&&E(new VM)},[g]),ne.useEffect(()=>{if(_&&f&&i.window){let M=f,N=_.promise,re=i.window.document.startViewTransition(async()=>{r===!1?u(M):ne.startTransition(()=>{r===!0&&h(B=>M0(B,M)),u(M)}),await N});re.finished.finally(()=>{E(void 0),y(void 0),v(void 0),m({isTransitioning:!1})}),y(re)}},[f,_,i.window,r,h]),ne.useEffect(()=>{_&&f&&c.location.key===f.location.key&&_.resolve()},[_,w,c.location,f]),ne.useEffect(()=>{!g.isTransitioning&&S&&(v(S.state),m({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),T(void 0))},[g.isTransitioning,S]);let D=ne.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:M=>i.navigate(M),push:(M,N,re)=>i.navigate(M,{state:N,preventScrollReset:re==null?void 0:re.preventScrollReset}),replace:(M,N,re)=>i.navigate(M,{replace:!0,state:N,preventScrollReset:re==null?void 0:re.preventScrollReset})}),[i]),L=i.basename||"/",k=ne.useMemo(()=>({router:i,navigator:D,static:!1,basename:L,onError:t}),[i,D,L,t]);return ne.createElement(ne.Fragment,null,ne.createElement(js.Provider,{value:k},ne.createElement(rl.Provider,{value:c},ne.createElement(m_.Provider,{value:C.current},ne.createElement(Yh.Provider,{value:g},ne.createElement(XM,{basename:L,location:c.location,navigationType:c.historyAction,navigator:D,unstable_useTransitions:r},ne.createElement(GM,{routes:i.routes,future:i.future,state:c,isStatic:!1,onError:t})))))),null)}function M0(i,e){return{...i,navigation:e.navigation.state!=="idle"?e.navigation:i.navigation,revalidation:e.revalidation!=="idle"?e.revalidation:i.revalidation,actionData:e.navigation.state!=="submitting"?e.actionData:i.actionData,fetchers:e.fetchers}}var GM=ne.memo(WM);function WM({routes:i,future:e,state:t,isStatic:r,onError:a}){return wM(i,void 0,{state:t,isStatic:r,onError:a})}function jM(i){return MM(i.context)}function XM({basename:i="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1,unstable_useTransitions:u}){Ft(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=i.replace(/^\/*/,"/"),h=ne.useMemo(()=>({basename:c,navigator:a,static:o,unstable_useTransitions:u,future:{}}),[c,a,o,u]);typeof t=="string"&&(t=hr(t));let{pathname:f="/",search:v="",hash:g="",state:m=null,key:_="default",unstable_mask:E}=t,w=ne.useMemo(()=>{let y=Ni(f,c);return y==null?null:{location:{pathname:y,search:v,hash:g,state:m,key:_,unstable_mask:E},navigationType:r}},[c,f,v,g,m,_,r,E]);return Mn(w!=null,`<Router basename="${c}"> is not able to match the URL "${f}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:ne.createElement(Li.Provider,{value:h},ne.createElement(dc.Provider,{children:e,value:w}))}var $u="get",Yu="application/x-www-form-urlencoded";function fc(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function $M(i){return fc(i)&&i.tagName.toLowerCase()==="button"}function YM(i){return fc(i)&&i.tagName.toLowerCase()==="form"}function qM(i){return fc(i)&&i.tagName.toLowerCase()==="input"}function KM(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ZM(i,e){return i.button===0&&(!e||e==="_self")&&!KM(i)}var pu=null;function JM(){if(pu===null)try{new FormData(document.createElement("form"),0),pu=!1}catch{pu=!0}return pu}var QM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function of(i){return i!=null&&!QM.has(i)?(Mn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`),null):i}function eE(i,e){let t,r,a,o,u;if(YM(i)){let c=i.getAttribute("action");r=c?Ni(c,e):null,t=i.getAttribute("method")||$u,a=of(i.getAttribute("enctype"))||Yu,o=new FormData(i)}else if($M(i)||qM(i)&&(i.type==="submit"||i.type==="image")){let c=i.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=i.getAttribute("formaction")||c.getAttribute("action");if(r=h?Ni(h,e):null,t=i.getAttribute("formmethod")||c.getAttribute("method")||$u,a=of(i.getAttribute("formenctype"))||of(c.getAttribute("enctype"))||Yu,o=new FormData(c,i),!JM()){let{name:f,type:v,value:g}=i;if(v==="image"){let m=f?`${f}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else f&&o.append(f,g)}}else{if(fc(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=$u,r=null,a=Yu,u=i}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jh(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function S_(i,e,t,r){let a=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:a.pathname==="/"?a.pathname=`_root.${r}`:e&&Ni(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function tE(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nE(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function iE(i,e,t){let r=await Promise.all(i.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await tE(o,t);return u.links?u.links():[]}return[]}));return oE(r.flat(1).filter(nE).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function E0(i,e,t,r,a,o){let u=(h,f)=>t[f]?h.route.id!==t[f].route.id:!0,c=(h,f)=>{var v;return t[f].pathname!==h.pathname||((v=t[f].route.path)==null?void 0:v.endsWith("*"))&&t[f].params["*"]!==h.params["*"]};return o==="assets"?e.filter((h,f)=>u(h,f)||c(h,f)):o==="data"?e.filter((h,f)=>{var g;let v=r.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(u(h,f)||c(h,f))return!0;if(h.route.shouldRevalidate){let m=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(i,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function rE(i,e,{includeHydrateFallback:t}={}){return sE(i.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function sE(i){return[...new Set(i)]}function aE(i){let e={},t=Object.keys(i).sort();for(let r of t)e[r]=i[r];return e}function oE(i,e){let t=new Set;return new Set(e),i.reduce((r,a)=>{let o=JSON.stringify(aE(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function Qh(){let i=ne.useContext(js);return Jh(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function lE(){let i=ne.useContext(rl);return Jh(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ep=ne.createContext(void 0);ep.displayName="FrameworkContext";function tp(){let i=ne.useContext(ep);return Jh(i,"You must render this element inside a <HydratedRouter> element"),i}function uE(i,e){let t=ne.useContext(ep),[r,a]=ne.useState(!1),[o,u]=ne.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:f,onMouseLeave:v,onTouchStart:g}=e,m=ne.useRef(null);ne.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let w=S=>{S.forEach(T=>{u(T.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return m.current&&y.observe(m.current),()=>{y.disconnect()}}},[i]),ne.useEffect(()=>{if(r){let w=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(w)}}},[r]);let _=()=>{a(!0)},E=()=>{a(!1),u(!1)};return t?i!=="intent"?[o,m,{}]:[o,m,{onFocus:No(c,_),onBlur:No(h,E),onMouseEnter:No(f,_),onMouseLeave:No(v,E),onTouchStart:No(g,_)}]:[!1,m,{}]}function No(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function cE({page:i,...e}){let t=p_(),{router:r}=Qh(),a=ne.useMemo(()=>ps(r.routes,i,r.basename),[r.routes,i,r.basename]);return a?t?ne.createElement(fE,{page:i,matches:a,...e}):ne.createElement(hE,{page:i,matches:a,...e}):null}function dE(i){let{manifest:e,routeModules:t}=tp(),[r,a]=ne.useState([]);return ne.useEffect(()=>{let o=!1;return iE(i,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[i,e,t]),r}function fE({page:i,matches:e,...t}){let r=Ki(),{future:a}=tp(),{basename:o}=Qh(),u=ne.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let c=S_(i,o,a.unstable_trailingSlashAwareDataRequests,"rsc"),h=!1,f=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?h=!0:f.push(v.route.id);return h&&f.length>0&&c.searchParams.set("_routes",f.join(",")),[c.pathname+c.search]},[o,a.unstable_trailingSlashAwareDataRequests,i,r,e]);return ne.createElement(ne.Fragment,null,u.map(c=>ne.createElement("link",{key:c,rel:"prefetch",as:"fetch",href:c,...t})))}function hE({page:i,matches:e,...t}){let r=Ki(),{future:a,manifest:o,routeModules:u}=tp(),{basename:c}=Qh(),{loaderData:h,matches:f}=lE(),v=ne.useMemo(()=>E0(i,e,f,o,r,"data"),[i,e,f,o,r]),g=ne.useMemo(()=>E0(i,e,f,o,r,"assets"),[i,e,f,o,r]),m=ne.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let w=new Set,y=!1;if(e.forEach(T=>{var P;let C=o.routes[T.route.id];!C||!C.hasLoader||(!v.some(D=>D.route.id===T.route.id)&&T.route.id in h&&((P=u[T.route.id])!=null&&P.shouldRevalidate)||C.hasClientLoader?y=!0:w.add(T.route.id))}),w.size===0)return[];let S=S_(i,c,a.unstable_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&S.searchParams.set("_routes",e.filter(T=>w.has(T.route.id)).map(T=>T.route.id).join(",")),[S.pathname+S.search]},[c,a.unstable_trailingSlashAwareDataRequests,h,r,o,v,e,i,u]),_=ne.useMemo(()=>rE(g,o),[g,o]),E=dE(g);return ne.createElement(ne.Fragment,null,m.map(w=>ne.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),_.map(w=>ne.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),E.map(({key:w,link:y})=>ne.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function pE(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var mE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mE&&(window.__reactRouterVersion="7.14.0")}catch{}function gE(i,e){return GS({basename:e==null?void 0:e.basename,getContext:e==null?void 0:e.getContext,future:e==null?void 0:e.future,history:sS({window:e==null?void 0:e.window}),hydrationData:vE(),routes:i,mapRouteProperties:BM,hydrationRouteProperties:zM,dataStrategy:e==null?void 0:e.dataStrategy,patchRoutesOnNavigation:e==null?void 0:e.patchRoutesOnNavigation,window:e==null?void 0:e.window,unstable_instrumentations:e==null?void 0:e.unstable_instrumentations}).initialize()}function vE(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:_E(i.errors)}),i}function _E(i){if(!i)return null;let e=Object.entries(i),t={};for(let[r,a]of e)if(a&&a.__type==="RouteErrorResponse")t[r]=new nl(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let o=window[a.__subType];if(typeof o=="function")try{let u=new o(a.message);u.stack="",t[r]=u}catch{}}if(t[r]==null){let o=new Error(a.message);o.stack="",t[r]=o}}else t[r]=a;return t}var M_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dr=ne.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,unstable_mask:c,state:h,target:f,to:v,preventScrollReset:g,viewTransition:m,unstable_defaultShouldRevalidate:_,...E},w){let{basename:y,navigator:S,unstable_useTransitions:T}=ne.useContext(Li),C=typeof v=="string"&&M_.test(v),P=Qv(v,y);v=P.to;let D=xM(v,{relative:a}),L=Ki(),k=null;if(c){let ie=cc(c,[],L.unstable_mask?L.unstable_mask.pathname:"/",!0);y!=="/"&&(ie.pathname=ie.pathname==="/"?y:$i([y,ie.pathname])),k=S.createHref(ie)}let[M,N,re]=uE(r,E),B=ME(v,{replace:u,unstable_mask:c,state:h,target:f,preventScrollReset:g,relative:a,viewTransition:m,unstable_defaultShouldRevalidate:_,unstable_useTransitions:T});function q(ie){e&&e(ie),ie.defaultPrevented||B(ie)}let Q=!(P.isExternal||o),ee=ne.createElement("a",{...E,...re,href:(Q?k:void 0)||P.absoluteURL||D,onClick:Q?q:e,ref:pE(w,N),target:f,"data-discover":!C&&t==="render"?"true":void 0});return M&&!C?ne.createElement(ne.Fragment,null,ee,ne.createElement(cE,{page:D})):ee});Dr.displayName="Link";var xE=ne.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:c,children:h,...f},v){let g=ol(u,{relative:f.relative}),m=Ki(),_=ne.useContext(rl),{navigator:E,basename:w}=ne.useContext(Li),y=_!=null&&AE(g)&&c===!0,S=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,T=m.pathname,C=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(T=T.toLowerCase(),C=C?C.toLowerCase():null,S=S.toLowerCase()),C&&w&&(C=Ni(C,w)||C);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let D=T===S||!a&&T.startsWith(S)&&T.charAt(P)==="/",L=C!=null&&(C===S||!a&&C.startsWith(S)&&C.charAt(S.length)==="/"),k={isActive:D,isPending:L,isTransitioning:y},M=D?e:void 0,N;typeof r=="function"?N=r(k):N=[r,D?"active":null,L?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let re=typeof o=="function"?o(k):o;return ne.createElement(Dr,{...f,"aria-current":M,className:N,ref:v,style:re,to:u,viewTransition:c},typeof h=="function"?h(k):h)});xE.displayName="NavLink";var yE=ne.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=$u,action:c,onSubmit:h,relative:f,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:m,..._},E)=>{let{unstable_useTransitions:w}=ne.useContext(Li),y=bE(),S=TE(c,{relative:f}),T=u.toLowerCase()==="get"?"get":"post",C=typeof c=="string"&&M_.test(c),P=D=>{if(h&&h(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,k=(L==null?void 0:L.getAttribute("formmethod"))||u,M=()=>y(L||D.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:a,state:o,relative:f,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:m});w&&t!==!1?ne.startTransition(()=>M()):M()};return ne.createElement("form",{ref:E,method:T,action:S,onSubmit:r?h:P,..._,"data-discover":!C&&i==="render"?"true":void 0})});yE.displayName="Form";function SE(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E_(i){let e=ne.useContext(js);return Ft(e,SE(i)),e}function ME(i,{target:e,replace:t,unstable_mask:r,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let v=al(),g=Ki(),m=ol(i,{relative:u});return ne.useCallback(_=>{if(ZM(_,e)){_.preventDefault();let E=t!==void 0?t:ur(g)===ur(m),w=()=>v(i,{replace:E,unstable_mask:r,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h});f?ne.startTransition(()=>w()):w()}},[g,v,m,t,r,a,e,i,o,u,c,h,f])}var EE=0,wE=()=>`__${String(++EE)}__`;function bE(){let{router:i}=E_("useSubmit"),{basename:e}=ne.useContext(Li),t=DM(),r=i.fetch,a=i.navigate;return ne.useCallback(async(o,u={})=>{let{action:c,method:h,encType:f,formData:v,body:g}=eE(o,e);if(u.navigate===!1){let m=u.fetcherKey||wE();await r(m,t,u.action||c,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||h,formEncType:u.encType||f,flushSync:u.flushSync})}else await a(u.action||c,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||h,formEncType:u.encType||f,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,a,e,t])}function TE(i,{relative:e}={}){let{basename:t}=ne.useContext(Li),r=ne.useContext(qi);Ft(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...ol(i||".",{relative:e})},u=Ki();if(i==null){o.search=u.search;let c=new URLSearchParams(o.search),h=c.getAll("index");if(h.some(v=>v==="")){c.delete("index"),h.filter(g=>g).forEach(g=>c.append("index",g));let v=c.toString();o.search=v?`?${v}`:""}}return(!i||i===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),ur(o)}function AE(i,{relative:e}={}){let t=ne.useContext(Yh);Ft(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=E_("useViewTransitionState"),a=ol(i,{relative:e});if(!t.isTransitioning)return!1;let o=Ni(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Ni(t.nextLocation.pathname,r)||t.nextLocation.pathname;return tc(a.pathname,u)!=null||tc(a.pathname,o)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CE=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),w0=i=>{const e=CE(i);return e.charAt(0).toUpperCase()+e.slice(1)},w_=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=ne.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:u,...c},h)=>ne.createElement("svg",{ref:h,...PE,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:w_("lucide",a),...c},[...u.map(([f,v])=>ne.createElement(f,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=(i,e)=>{const t=ne.forwardRef(({className:r,...a},o)=>ne.createElement(NE,{ref:o,iconNode:e,className:w_(`lucide-${RE(w0(i))}`,`lucide-${i}`,r),...a}));return t.displayName=w0(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hc=cn("arrow-left",LE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],IE=cn("box",DE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],FE=cn("check",UE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],kE=cn("circle-help",OE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],zE=cn("clock",BE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],HE=cn("gamepad-2",VE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],WE=cn("globe",GE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],XE=cn("house",jE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],YE=cn("image",$E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],KE=cn("lightbulb",qE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],JE=cn("loader-circle",ZE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],e1=cn("map-pin",QE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],n1=cn("maximize-2",t1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],b_=cn("message-circle",i1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],s1=cn("phone",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],o1=cn("puzzle",a1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],u1=cn("rotate-ccw",l1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],d1=cn("rotate-cw",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],h1=cn("send",f1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],m1=cn("sparkles",p1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],T_=cn("trophy",g1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_1=cn("x",v1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],y1=cn("zoom-in",x1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],M1=cn("zoom-out",S1),A_=ne.createContext(void 0),E1={zh:{首页:"首页",文物:"文物",对话:"对话",游戏:"游戏",跨越千年的对话:"跨越千年的对话","AI 生成内容仅供参考，请以官方历史记载为准":"AI 生成内容仅供参考，请以官方历史记载为准","向{{name}}提问...":"向{{name}}提问...",灵识觉醒中:"灵识觉醒中","3D模型展示":"3D模型展示","加载中...":"加载中...","3D模型加载失败":"3D模型加载失败",显示默认模型:"显示默认模型",猜文物:"猜文物",拼图游戏:"拼图游戏",开始游戏:"开始游戏",重新开始:"重新开始",提示:"提示","恭喜你猜对了！":"恭喜你猜对了！","再接再厉！":"再接再厉！",查看文物详情:"查看文物详情",文物详情:"文物详情",返回:"返回",历史背景:"历史背景",文物特点:"文物特点",保存状态:"保存状态",苏州博物馆:"苏州博物馆","贝聿铭的建筑杰作 · 吴文化的殿堂":"贝聿铭的建筑杰作 · 吴文化的殿堂",关于博物馆:"关于博物馆",'苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。':'苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。',"博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。":"博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。",'贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。':'贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。',参观信息:"参观信息",开放时间:"开放时间","周二至周日 9:00-17:00（16:00停止入馆）":"周二至周日 9:00-17:00（16:00停止入馆）","周一闭馆（国家法定节假日除外）":"周一闭馆（国家法定节假日除外）",地址:"地址",江苏省苏州市姑苏区东北街204号:"江苏省苏州市姑苏区东北街204号","（紧邻拙政园、狮子林）":"（紧邻拙政园、狮子林）",咨询电话:"咨询电话","0512-67575666":"0512-67575666",快速入口:"快速入口",精品文物:"精品文物","3D观赏珍藏":"3D观赏珍藏",AI对话:"AI对话",与文物互动:"与文物互动",互动游戏:"互动游戏",趣味学习吴文化:"趣味学习吴文化","共收录 {count} 件珍贵文物":"共收录 {count} 件珍贵文物",在游戏中学习吴文化知识:"在游戏中学习吴文化知识",文物拼图:"文物拼图",将打乱的文物图片拼回完整:"将打乱的文物图片拼回完整",猜猜文物:"猜猜文物",根据线索猜测文物名称:"根据线索猜测文物名称","💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！":"💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！",文物不存在:"文物不存在",返回文物列表:"返回文物列表",与TA对话:"与TA对话","📷 图片":"📷 图片","3D":"3D",朝代:"朝代",年代:"年代",文物介绍:"文物介绍",文物自述:"文物自述","得分: ":"得分: "," / ":" / ","这是什么文物？":"这是什么文物？","🔍 显示线索 (3次)":"🔍 显示线索 (3次)","🔍 再清晰一点 (2次)":"🔍 再清晰一点 (2次)","🔍 最后一次提示 (1次)":"🔍 最后一次提示 (1次)","✓ 已显示完整图片":"✓ 已显示完整图片","💡 朝代：":"💡 朝代：","💡 年代：":"💡 年代：","💡 提示：":"💡 提示：","🎉 回答正确！":"🎉 回答正确！","❌ 正确答案是：":"❌ 正确答案是：","游戏结束！":"游戏结束！","完美！你是文物专家！":"完美！你是文物专家！","不错！继续加油！":"不错！继续加油！","多看看文物介绍吧~":"多看看文物介绍吧~",再玩一次:"再玩一次",文物修复计划:"文物修复计划","Puzzle Challenge":"Puzzle Challenge",正在修复:"正在修复",移动步数:"移动步数",隐藏原图:"隐藏原图",查看原图:"查看原图","修复成功！":"修复成功！","你只用了 {moves} 步就让 {artifactName} 焕发新生。":"你只用了 {moves} 步就让 {artifactName} 焕发新生。",挑战下一关:"挑战下一关",回到大厅:"回到大厅",欢迎语前缀:"(整理了一下衣角) 游客你好，我是",欢迎语中缀1:"。在这博物馆的橱窗里待久了，甚是寂寞。你是想听听",欢迎语中缀2:"的故事，还是想了解我的来历？",真珠舍利宝幢:"真珠舍利宝幢",北宋:"北宋","公元960-1127年":"公元960-1127年","苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。":"苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。","我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。":"我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。",五代秘色瓷莲花碗:"五代秘色瓷莲花碗",五代:"五代","公元907-960年":"公元907-960年","秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。":"秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。","我来自越窑，那个出产'秘色瓷'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。":"我来自越窑，那个出产'秘色瓷'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。",明代虎丘塔出土玉器:"明代虎丘塔出土玉器",明代:"明代","公元1368-1644年":"公元1368-1644年","从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。":"从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。","我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着'良玉虽集京师，工巧则推苏郡'的美誉。":"我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着'良玉虽集京师，工巧则推苏郡'的美誉。","文徵明《拙政园图》":"文徵明《拙政园图》",公元1533年:"公元1533年","明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。":"明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。","我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着'虽由人作，宛自天开'的造园哲学。":"我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着'虽由人作，宛自天开'的造园哲学。","清代苏绣《仕女图》":"清代苏绣《仕女图》",清代:"清代","公元1644-1911年":"公元1644-1911年","苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣'平、齐、细、密、匀、顺、和、光'的八字诀。":"苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣'平、齐、细、密、匀、顺、和、光'的八字诀。","我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着'苏州刺绣甲天下'的美誉。":"我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着'苏州刺绣甲天下'的美誉。"},en:{首页:"Home",文物:"Artifacts",对话:"Chat",游戏:"Games",跨越千年的对话:"Cross-millennium Dialogue","AI 生成内容仅供参考，请以官方历史记载为准":"AI-generated content is for reference only, please refer to official historical records","向{{name}}提问...":"Ask {{name}}...",灵识觉醒中:"Spirit Awakening","3D模型展示":"3D Model Display","加载中...":"Loading...","3D模型加载失败":"3D model loading failed",显示默认模型:"Show default model",猜文物:"Guess Artifact",拼图游戏:"Puzzle Game",开始游戏:"Start Game",重新开始:"Restart",提示:"Hint","恭喜你猜对了！":"Congratulations, you guessed it right!","再接再厉！":"Keep it up!",查看文物详情:"View Artifact Details",文物详情:"Artifact Details",返回:"Back",历史背景:"Historical Background",文物特点:"Artifact Features",保存状态:"Save State",苏州博物馆:"Suzhou Museum","贝聿铭的建筑杰作 · 吴文化的殿堂":"I.M. Pei's Architectural Masterpiece · Palace of Wu Culture",关于博物馆:"About the Museum",'苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。':`Suzhou Museum was founded in 1960 and is located on Dongbei Street in the ancient city of Suzhou. In October 2006, the new Suzhou Museum designed by world-renowned architect I.M. Pei was completed and opened. The new museum building integrates tradition and modernity, complementing the surrounding classical gardens such as the Humble Administrator's Garden and Lion Grove, becoming an architectural model of "Chinese yet new, Suzhou yet new".`,"博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。":"The museum's main exhibitions are divided into four series: Wu region history, Wu tower national treasures, Wu style elegance, and Wu school calligraphy and painting. It houses over 40,000 cultural relics, including nearly 100 national first-class cultural relics, showcasing Suzhou's long and splendid historical culture.",'贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。':'Mr. I.M. Pei once said: "The design of Suzhou Museum is my last work in China and my favorite work in my heart." This museum, which perfectly combines the spatial artistic conception of Suzhou classical gardens with modern architecture, has become a new cultural landmark of Suzhou.',参观信息:"Visitor Information",开放时间:"Opening Hours","周二至周日 9:00-17:00（16:00停止入馆）":"Tuesday to Sunday 9:00-17:00 (last entry at 16:00)","周一闭馆（国家法定节假日除外）":"Closed on Mondays (except national statutory holidays)",地址:"Address",江苏省苏州市姑苏区东北街204号:"204 Dongbei Street, Gusu District, Suzhou, Jiangsu Province","（紧邻拙政园、狮子林）":"(Adjacent to Humble Administrator's Garden and Lion Grove)",咨询电话:"Inquiry Phone","0512-67575666":"0512-67575666",快速入口:"Quick Access",精品文物:"Exquisite Artifacts","3D观赏珍藏":"3D Viewing of Treasures",AI对话:"AI Chat",与文物互动:"Interact with Artifacts",互动游戏:"Interactive Games",趣味学习吴文化:"Fun Learning of Wu Culture","共收录 {count} 件珍贵文物":"A total of {count} precious artifacts",在游戏中学习吴文化知识:"Learn Wu culture knowledge through games",文物拼图:"Artifact Puzzle",将打乱的文物图片拼回完整:"Put the scrambled artifact images back together",猜猜文物:"Guess the Artifact",根据线索猜测文物名称:"Guess the artifact name based on clues","💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！":"💡 Tip: Games can help you better remember the characteristics and historical background of artifacts!",文物不存在:"Artifact does not exist",返回文物列表:"Return to artifacts list",与TA对话:"Chat with TA","📷 图片":"📷 Image","3D":"3D",朝代:"Dynasty",年代:"Year",文物介绍:"Artifact Introduction",文物自述:"Artifact Story","得分: ":"Score: "," / ":" / ","这是什么文物？":"What artifact is this?","🔍 显示线索 (3次)":"🔍 Show clue (3 times)","🔍 再清晰一点 (2次)":"🔍 A bit clearer (2 times)","🔍 最后一次提示 (1次)":"🔍 Final hint (1 time)","✓ 已显示完整图片":"✓ Full image displayed","💡 朝代：":"💡 Dynasty: ","💡 年代：":"💡 Year: ","💡 提示：":"💡 Hint: ","🎉 回答正确！":"🎉 Correct answer!","❌ 正确答案是：":"❌ Correct answer is: ","游戏结束！":"Game over!","完美！你是文物专家！":"Perfect! You are an artifact expert!","不错！继续加油！":"Good! Keep it up!","多看看文物介绍吧~":"Check out the artifact introductions more~",再玩一次:"Play again",文物修复计划:"Artifact Restoration Plan",正在修复:"Restoring",移动步数:"Moves",隐藏原图:"Hide original",查看原图:"View original","修复成功！":"Restoration successful!","你只用了 {moves} 步就让 {artifactName} 焕发新生。":"You restored {artifactName} in just {moves} moves.",挑战下一关:"Next challenge",回到大厅:"Back to lobby",欢迎语前缀:"(adjusts clothes) Hello visitor, I am",欢迎语中缀1:". I have been in this museum showcase for a long time and feel quite lonely. Would you like to hear stories about the",欢迎语中缀2:"or learn about my origin?",真珠舍利宝幢:"Pearl Sarira Pagoda",北宋:"Northern Song Dynasty","公元960-1127年":"960-1127 AD","苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。":"The treasure of Suzhou Museum, it is a Buddhist relic from the Northern Song Dynasty. The pagoda is 122.6 cm tall, made of wood, gold, silver, pearls, gemstones and other materials, with exquisite craftsmanship, and is a treasure among Chinese Buddhist cultural relics.","我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。":"I was born in the second year of Taiping Xingguo in the Northern Song Dynasty, built by King Qian Chu of Wuyue to pray for national peace and prosperity. After thousands of years of wind and frost, I have witnessed the rise and fall of Suzhou, carrying devout faith and exquisite craftsmanship. Every pearl and every gold leaf embodies the wisdom and piety of the ancients.",五代秘色瓷莲花碗:"Five Dynasties Secret Color Porcelain Lotus Bowl",五代:"Five Dynasties","公元907-960年":"907-960 AD","秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。":"Secret color porcelain is the finest of Yue kiln celadon,专供 the royal family. This lotus bowl has a青翠 glaze color and beautiful shape, representing the highest level of porcelain-making technology in the Five Dynasties period.","我来自越窑，那个出产'秘色瓷'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。":"I come from Yue Kiln, the mysterious place that produces 'secret color porcelain'. My glaze color is like the green of a thousand peaks, like the blue waves of a lake. In the chaotic times of the Five Dynasties and Ten Kingdoms, I was once a treasure of the royal nobility. Now I lie quietly in Suzhou Museum, continuing to tell the story of the prosperity a thousand years ago.",明代虎丘塔出土玉器:"Jade Articles Unearthed from Tiger Hill Pagoda in Ming Dynasty",明代:"Ming Dynasty","公元1368-1644年":"1368-1644 AD","从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。":"Jade articles unearthed from the famous Tiger Hill Pagoda in Suzhou, with fine carving and温润 jade quality. Including jade bi, jade pendants and other artifacts, reflecting the high level of jade carving craftsmanship in Suzhou during the Ming Dynasty.","我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着'良玉虽集京师，工巧则推苏郡'的美誉。":"I was once hidden under Tiger Hill Pagoda, guarding this ancient pagoda together with Buddhist scriptures and relics. I witnessed the prosperity of Suzhou during the Ming Dynasty, when Suzhou was the largest city in the Jiangnan region, with merchants gathering and scholars assembling. Every carving of mine embodies the painstaking efforts of craftsmen, demonstrating the reputation that 'although fine jade gathers in the capital, craftsmanship is best in Suzhou'.","文徵明《拙政园图》":`Wen Zhengming's "Humble Administrator's Garden''`,公元1533年:"1533 AD","明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。":"A panoramic view of the Humble Administrator's Garden painted by the famous Ming Dynasty painter Wen Zhengming, which detailedly depicts the scenery of this famous Suzhou garden. This painting is not only an artistic treasure, but also an important historical material for studying Suzhou gardens.","我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着'虽由人作，宛自天开'的造园哲学。":"I was created by Wen Zhengming, a master of the Wu School of painting, depicting the private garden of his friend Wang Xianchen - the Humble Administrator's Garden. I used delicate brushwork to record the peerless elegance of Suzhou gardens in that era. Every stroke is imbued with the poetry of Jiangnan, and every scene embodies the gardening philosophy of 'although made by man, it seems like nature'.","清代苏绣《仕女图》":'Qing Dynasty Su Embroidery "Lady Portrait"',清代:"Qing Dynasty","公元1644-1911年":"1644-1911 AD","苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣'平、齐、细、密、匀、顺、和、光'的八字诀。":"Suzhou embroidery is one of the four famous embroidery styles in China, known for its fine stitching and beautiful patterns. This lady portrait embroidery has elegant colors and lifelike figures, demonstrating the eight-character formula of Su embroidery: 'flat, neat, fine, dense, even, smooth, harmonious, and bright'.","我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着'苏州刺绣甲天下'的美誉。":"I was embroidered by Suzhou needlewomen using the finest silk threads and the most exquisite techniques. Every stitch was carefully designed, and every thread was just right. I witnessed the journey of Su embroidery from the court to the people, from practical use to art. My existence proves the reputation that 'Suzhou embroidery is the best in the world'."}};function w1({children:i}){const[e,t]=ne.useState("zh"),r=(a,o)=>{let u=E1[e][a]||a;return o&&Object.entries(o).forEach(([c,h])=>{u=u.replace(`{${c}}`,String(h)),u=u.replace(`{{${c}}}`,String(h))}),u};return U.jsx(A_.Provider,{value:{language:e,setLanguage:t,t:r},children:i})}function kr(){const i=ne.useContext(A_);if(i===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return i}function b1(){const i=Ki(),{language:e,setLanguage:t,t:r}=kr(),a=[{path:"/",icon:XE,label:r("首页")},{path:"/artifacts",icon:YE,label:r("文物")},{path:"/chat",icon:b_,label:r("对话")},{path:"/games",icon:HE,label:r("游戏")}],o=u=>u==="/"?i.pathname==="/":i.pathname.startsWith(u);return U.jsxs("div",{className:"flex flex-col h-screen max-w-md mx-auto bg-gray-50 relative",children:[U.jsx("main",{className:"flex-1 overflow-auto pb-16",children:U.jsx(jM,{})}),U.jsxs("button",{onClick:()=>t(e==="zh"?"en":"zh"),className:"fixed right-12 bottom-16 z-20 bg-white rounded-full p-3 shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors","aria-label":"切换语言",children:[U.jsx(WE,{className:"w-5 h-5 text-blue-600"}),U.jsx("span",{className:"ml-2 text-sm font-medium text-blue-600",children:e==="zh"?"EN":"中文"})]}),U.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto",children:U.jsx("div",{className:"flex justify-around items-center h-16",children:a.map(u=>{const c=u.icon,h=o(u.path);return U.jsxs(Dr,{to:u.path,className:`flex flex-col items-center justify-center flex-1 h-full transition-colors ${h?"text-blue-600":"text-gray-600"}`,children:[U.jsx(c,{className:"w-6 h-6 mb-1"}),U.jsx("span",{className:"text-xs",children:u.label})]},u.path)})})})]})}const T1="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function ka(i){const[e,t]=ne.useState(!1),r=()=>{t(!0)},{src:a,alt:o,style:u,className:c,...h}=i;return e?U.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${c??""}`,style:u,children:U.jsx("div",{className:"flex items-center justify-center w-full h-full",children:U.jsx("img",{src:T1,alt:"Error loading image",...h,"data-original-url":a})})}):U.jsx("img",{src:a,alt:o,className:c,style:u,...h,onError:r})}function A1(){const{t:i}=kr();return U.jsxs("div",{className:"min-h-full bg-white",children:[U.jsxs("div",{className:"relative h-64",children:[U.jsx(ka,{src:"https://images.unsplash.com/photo-1712565237021-030e3a216a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXpob3UlMjBtdXNldW0lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1ODAyMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",alt:"苏州博物馆",className:"w-full h-full object-cover"}),U.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),U.jsxs("div",{className:"absolute bottom-6 left-6 text-white",children:[U.jsx("h1",{className:"text-3xl mb-2",children:i("苏州博物馆")}),U.jsx("p",{className:"text-sm opacity-90",children:i("贝聿铭的建筑杰作 · 吴文化的殿堂")})]})]}),U.jsxs("div",{className:"p-6",children:[U.jsxs("section",{className:"mb-8",children:[U.jsx("h2",{className:"text-xl mb-4",children:i("关于博物馆")}),U.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:i('苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。')}),U.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:i("博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。")}),U.jsx("p",{className:"text-gray-700 leading-relaxed",children:i('贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。')})]}),U.jsxs("section",{className:"mb-8",children:[U.jsx("h2",{className:"text-xl mb-4",children:i("参观信息")}),U.jsxs("div",{className:"space-y-4",children:[U.jsxs("div",{className:"flex items-start gap-3",children:[U.jsx(zE,{className:"w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"}),U.jsxs("div",{children:[U.jsx("p",{className:"mb-1",children:i("开放时间")}),U.jsx("p",{className:"text-sm text-gray-600",children:i("周二至周日 9:00-17:00（16:00停止入馆）")}),U.jsx("p",{className:"text-sm text-gray-600",children:i("周一闭馆（国家法定节假日除外）")})]})]}),U.jsxs("div",{className:"flex items-start gap-3",children:[U.jsx(e1,{className:"w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"}),U.jsxs("div",{children:[U.jsx("p",{className:"mb-1",children:i("地址")}),U.jsx("p",{className:"text-sm text-gray-600",children:i("江苏省苏州市姑苏区东北街204号")}),U.jsx("p",{className:"text-sm text-gray-500 mt-1",children:i("（紧邻拙政园、狮子林）")})]})]}),U.jsxs("div",{className:"flex items-start gap-3",children:[U.jsx(s1,{className:"w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"}),U.jsxs("div",{children:[U.jsx("p",{className:"mb-1",children:i("咨询电话")}),U.jsx("p",{className:"text-sm text-gray-600",children:i("0512-67575666")})]})]})]})]}),U.jsxs("section",{children:[U.jsx("h2",{className:"text-xl mb-4",children:i("快速入口")}),U.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[U.jsxs(Dr,{to:"/artifacts",className:"bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow",children:[U.jsx("h3",{className:"text-lg mb-2",children:i("精品文物")}),U.jsx("p",{className:"text-sm opacity-90",children:i("3D观赏珍藏")})]}),U.jsxs(Dr,{to:"/chat",className:"bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow",children:[U.jsx("h3",{className:"text-lg mb-2",children:i("AI对话")}),U.jsx("p",{className:"text-sm opacity-90",children:i("与文物互动")})]}),U.jsxs(Dr,{to:"/games",className:"bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow col-span-2",children:[U.jsx("h3",{className:"text-lg mb-2",children:i("互动游戏")}),U.jsx("p",{className:"text-sm opacity-90",children:i("趣味学习吴文化")})]})]})]})]})]})}const ar=[{id:1,name:"真珠舍利宝幢",dynasty:"北宋",year:"公元960-1127年",description:"苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。",story:"我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。",image:"https://images.unsplash.com/photo-1746889028661-94f251df190c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2hpbmVzZSUyMGphZGUlMjBjYXJ2aW5nfGVufDF8fHx8MTc3NTgwMjM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",personality:"庄严神圣，充满佛性智慧，语气平和宁静",modelType:"jade",modelPath:"/assets/models/glbfile.glb"},{id:2,name:"五代秘色瓷莲花碗",dynasty:"五代",year:"公元907-960年",description:"秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。",story:"我来自越窑，那个出产'秘色瓷'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。",image:"https://images.unsplash.com/photo-1770354227649-059bbfc475db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcG9yY2VsYWluJTIwdmFzZXxlbnwxfHx8fDE3NzU4MDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",personality:"优雅细腻，如水般温润，富有诗意",modelType:"vase",modelPath:"/assets/models/glbfile.glb"},{id:3,name:"明代虎丘塔出土玉器",dynasty:"明代",year:"公元1368-1644年",description:"从苏州著名的虎丘塔中出土的玉器，雕工精细，玉质温润。包括玉璧、玉佩等多种器物，反映了明代苏州地区玉雕工艺的高超水平。",story:"我曾深藏于虎丘塔下，与佛经、舍利共同守护着这座古塔。我见证了明朝苏州的繁荣，那时的苏州是江南第一大城，商贾云集，文人荟萃。我的每一处雕刻都凝聚着工匠的心血，展现着'良玉虽集京师，工巧则推苏郡'的美誉。",image:"https://images.unsplash.com/photo-1703857537577-18f768266ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2hpbmVzZSUyMGphZGV8ZW58MXx8fHwxNzc1ODAyMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",personality:"温润如玉，儒雅博学，喜欢讲述苏州的人文历史",modelType:"jade",modelPath:"/assets/models/glbfile.glb"},{id:4,name:"文徵明《拙政园图》",dynasty:"明代",year:"公元1533年",description:"明代著名画家文徵明所绘的拙政园全景图，详细描绘了苏州名园拙政园的景致。这幅画不仅是艺术珍品，也是研究苏州园林的重要史料。",story:"我出自吴门画派大师文徵明之手，描绘的是他好友王献臣的私家园林——拙政园。我用细腻的笔墨记录了那个年代苏州园林的绝代风华。每一笔一划都浸润着江南的诗意，每一处景致都体现着'虽由人作，宛自天开'的造园哲学。",image:"https://images.unsplash.com/photo-1684871430852-3413cb17e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBwYWludGluZ3xlbnwxfHx8fDE3NzU3MzY5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",personality:"文雅风流，擅长诗词歌赋，充满江南韵味",modelType:"painting",modelPath:"/assets/models/glbfile.glb"},{id:5,name:"清代苏绣《仕女图》",dynasty:"清代",year:"公元1644-1911年",description:"苏州刺绣是中国四大名绣之一，以针法精细、图案秀丽著称。这件仕女图刺绣色彩淡雅，人物栩栩如生，展现了苏绣'平、齐、细、密、匀、顺、和、光'的八字诀。",story:"我是苏州绣娘用最细的丝线，最精湛的技艺绣制而成。每一针都经过精心设计，每一线都要恰到好处。我见证了苏绣从宫廷走向民间，从实用走向艺术的历程。我的存在，证明着'苏州刺绣甲天下'的美誉。",image:"https://images.unsplash.com/photo-1763400234383-8b9ecbb9c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwc2lsayUyMGVtYnJvaWRlcnl8ZW58MXx8fHwxNzc1ODAyMzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",personality:"细腻柔美，如同江南女子般温婉，讲述着绣娘的故事",modelType:"embroidery",modelPath:"/assets/models/glbfile.glb"}];function R1(){const{t:i}=kr();return U.jsxs("div",{className:"min-h-full bg-gray-50",children:[U.jsxs("div",{className:"bg-white border-b border-gray-200 p-6",children:[U.jsx("h1",{className:"text-2xl",children:i("精品文物")}),U.jsx("p",{className:"text-sm text-gray-600 mt-1",children:i("共收录 {count} 件珍贵文物",{count:ar.length})})]}),U.jsx("div",{className:"p-4 space-y-4",children:ar.map(e=>U.jsx(Dr,{to:`/artifacts/${e.id}`,className:"block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:U.jsxs("div",{className:"flex gap-4",children:[U.jsx("div",{className:"w-32 h-32 flex-shrink-0",children:U.jsx(ka,{src:e.image,alt:e.name,className:"w-full h-full object-cover"})}),U.jsxs("div",{className:"flex-1 py-3 pr-4",children:[U.jsx("h3",{className:"text-lg mb-1",children:i(e.name)}),U.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:[i(e.dynasty)," · ",i(e.year)]}),U.jsx("p",{className:"text-sm text-gray-700 line-clamp-2",children:i(e.description)})]})]})},e.id))})]})}const C1="modulepreload",P1=function(i){return"/"+i},b0={},N1=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let u=function(f){return Promise.all(f.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=u(t.map(f=>{if(f=P1(f),f in b0)return;b0[f]=!0;const v=f.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const m=document.createElement("link");if(m.rel=v?"stylesheet":C1,v||(m.as="script"),m.crossOrigin="",m.href=f,h&&m.setAttribute("nonce",h),document.head.appendChild(m),v)return new Promise((_,E)=>{m.addEventListener("load",_),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return a.then(u=>{for(const c of u||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="183",L1=0,T0=1,D1=2,qu=1,I1=2,Go=3,xs=0,ai=1,Pr=2,Ir=0,Fa=1,A0=2,R0=3,C0=4,U1=5,Bs=100,F1=101,O1=102,k1=103,B1=104,z1=200,V1=201,H1=202,G1=203,Yf=204,qf=205,W1=206,j1=207,X1=208,$1=209,Y1=210,q1=211,K1=212,Z1=213,J1=214,Kf=0,Zf=1,Jf=2,Ba=3,Qf=4,eh=5,th=6,nh=7,R_=0,Q1=1,ew=2,or=0,C_=1,P_=2,N_=3,L_=4,D_=5,I_=6,U_=7,P0="attached",tw="detached",F_=300,Ws=301,za=302,lf=303,uf=304,pc=306,ih=1e3,Nr=1001,rh=1002,Fn=1003,nw=1004,mu=1005,Wn=1006,cf=1007,Hs=1008,gi=1009,O_=1010,k_=1011,Zo=1012,ip=1013,cr=1014,Ri=1015,Fr=1016,rp=1017,sp=1018,Jo=1020,B_=35902,z_=35899,V_=1021,H_=1022,Ci=1023,Or=1026,Gs=1027,ap=1028,op=1029,Va=1030,lp=1031,up=1033,Ku=33776,Zu=33777,Ju=33778,Qu=33779,sh=35840,ah=35841,oh=35842,lh=35843,uh=36196,ch=37492,dh=37496,fh=37488,hh=37489,ph=37490,mh=37491,gh=37808,vh=37809,_h=37810,xh=37811,yh=37812,Sh=37813,Mh=37814,Eh=37815,wh=37816,bh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Ph=36492,Nh=36494,Lh=36495,Dh=36283,Ih=36284,Uh=36285,Fh=36286,nc=2300,Oh=2301,df=2302,N0=2303,L0=2400,D0=2401,I0=2402,iw=2500,$2=0,Y2=1,q2=2,rw=3200,G_=0,sw=1,gs="",Ai="srgb",Ha="srgb-linear",ic="linear",Qt="srgb",ga=7680,U0=519,aw=512,ow=513,lw=514,cp=515,uw=516,cw=517,dp=518,dw=519,kh=35044,F0="300 es",sr=2e3,Qo=2001;function fw(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function el(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pw(){const i=el("canvas");return i.style.display="block",i}const O0={};function rc(...i){const e="THREE."+i.shift();console.log(e,...i)}function W_(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ht(...i){i=W_(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Mt(...i){i=W_(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sc(...i){const e=i.join(" ");e in O0||(O0[e]=!0,ht(...i))}function mw(i,e,t){return new Promise(function(r,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const gw={[Kf]:Zf,[Jf]:th,[Qf]:nh,[Ba]:eh,[Zf]:Kf,[th]:Jf,[nh]:Qf,[eh]:Ba};class ja{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let k0=1234567;const Xo=Math.PI/180,Ga=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function fp(i,e){return(i%e+e)%e}function vw(i,e,t,r,a){return r+(i-e)*(a-r)/(t-e)}function _w(i,e,t){return i!==e?(t-i)/(e-i):0}function $o(i,e,t){return(1-t)*i+t*e}function xw(i,e,t,r){return $o(i,e,1-Math.exp(-t*r))}function yw(i,e=1){return e-Math.abs(fp(i,e*2)-e)}function Sw(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mw(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ew(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ww(i,e){return i+Math.random()*(e-i)}function bw(i){return i*(.5-Math.random())}function Tw(i){i!==void 0&&(k0=i);let e=k0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Aw(i){return i*Xo}function Rw(i){return i*Ga}function Cw(i){return(i&i-1)===0&&i!==0}function Pw(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nw(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lw(i,e,t,r,a){const o=Math.cos,u=Math.sin,c=o(t/2),h=u(t/2),f=o((e+r)/2),v=u((e+r)/2),g=o((e-r)/2),m=u((e-r)/2),_=o((r-e)/2),E=u((r-e)/2);switch(a){case"XYX":i.set(c*v,h*g,h*m,c*f);break;case"YZY":i.set(h*m,c*v,h*g,c*f);break;case"ZXZ":i.set(h*g,h*m,c*v,c*f);break;case"XZX":i.set(c*v,h*E,h*_,c*f);break;case"YXY":i.set(h*_,c*v,h*E,c*f);break;case"ZYZ":i.set(h*E,h*_,c*v,c*f);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const K2={DEG2RAD:Xo,RAD2DEG:Ga,generateUUID:Yi,clamp:kt,euclideanModulo:fp,mapLinear:vw,inverseLerp:_w,lerp:$o,damp:xw,pingpong:yw,smoothstep:Sw,smootherstep:Mw,randInt:Ew,randFloat:ww,randFloatSpread:bw,seededRandom:Tw,degToRad:Aw,radToDeg:Rw,isPowerOfTwo:Cw,ceilPowerOfTwo:Pw,floorPowerOfTwo:Nw,setQuaternionFromProperEuler:Lw,normalize:en,denormalize:ji};class Zt{constructor(e=0,t=0){Zt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*r-u*a+e.x,this.y=o*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,o,u,c){let h=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3],m=o[u+0],_=o[u+1],E=o[u+2],w=o[u+3];if(g!==w||h!==m||f!==_||v!==E){let y=h*m+f*_+v*E+g*w;y<0&&(m=-m,_=-_,E=-E,w=-w,y=-y);let S=1-c;if(y<.9995){const T=Math.acos(y),C=Math.sin(T);S=Math.sin(S*T)/C,c=Math.sin(c*T)/C,h=h*S+m*c,f=f*S+_*c,v=v*S+E*c,g=g*S+w*c}else{h=h*S+m*c,f=f*S+_*c,v=v*S+E*c,g=g*S+w*c;const T=1/Math.sqrt(h*h+f*f+v*v+g*g);h*=T,f*=T,v*=T,g*=T}}e[t]=h,e[t+1]=f,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,o,u){const c=r[a],h=r[a+1],f=r[a+2],v=r[a+3],g=o[u],m=o[u+1],_=o[u+2],E=o[u+3];return e[t]=c*E+v*g+h*_-f*m,e[t+1]=h*E+v*m+f*g-c*_,e[t+2]=f*E+v*_+c*m-h*g,e[t+3]=v*E-c*g-h*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(r/2),v=c(a/2),g=c(o/2),m=h(r/2),_=h(a/2),E=h(o/2);switch(u){case"XYZ":this._x=m*v*g+f*_*E,this._y=f*_*g-m*v*E,this._z=f*v*E+m*_*g,this._w=f*v*g-m*_*E;break;case"YXZ":this._x=m*v*g+f*_*E,this._y=f*_*g-m*v*E,this._z=f*v*E-m*_*g,this._w=f*v*g+m*_*E;break;case"ZXY":this._x=m*v*g-f*_*E,this._y=f*_*g+m*v*E,this._z=f*v*E+m*_*g,this._w=f*v*g-m*_*E;break;case"ZYX":this._x=m*v*g-f*_*E,this._y=f*_*g+m*v*E,this._z=f*v*E-m*_*g,this._w=f*v*g+m*_*E;break;case"YZX":this._x=m*v*g+f*_*E,this._y=f*_*g+m*v*E,this._z=f*v*E-m*_*g,this._w=f*v*g-m*_*E;break;case"XZY":this._x=m*v*g-f*_*E,this._y=f*_*g-m*v*E,this._z=f*v*E+m*_*g,this._w=f*v*g+m*_*E;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],o=t[8],u=t[1],c=t[5],h=t[9],f=t[2],v=t[6],g=t[10],m=r+c+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(v-h)*_,this._y=(o-f)*_,this._z=(u-a)*_}else if(r>c&&r>g){const _=2*Math.sqrt(1+r-c-g);this._w=(v-h)/_,this._x=.25*_,this._y=(a+u)/_,this._z=(o+f)/_}else if(c>g){const _=2*Math.sqrt(1+c-r-g);this._w=(o-f)/_,this._x=(a+u)/_,this._y=.25*_,this._z=(h+v)/_}else{const _=2*Math.sqrt(1+g-r-c);this._w=(u-a)/_,this._x=(o+f)/_,this._y=(h+v)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,o=e._z,u=e._w,c=t._x,h=t._y,f=t._z,v=t._w;return this._x=r*v+u*c+a*f-o*h,this._y=a*v+u*h+o*c-r*f,this._z=o*v+u*f+r*h-a*c,this._w=u*v-r*c-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(r=-r,a=-a,o=-o,u=-u,c=-c);let h=1-t;if(c<.9995){const f=Math.acos(c),v=Math.sin(f);h=Math.sin(h*f)/v,t=Math.sin(t*f)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(B0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*a,this.y=o[1]*t+o[4]*r+o[7]*a,this.z=o[2]*t+o[5]*r+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*r+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*r+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,o=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*a-c*r),v=2*(c*t-o*a),g=2*(o*r-u*t);return this.x=t+h*f+u*g-c*v,this.y=r+h*v+c*f-o*g,this.z=a+h*g+o*v-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*a,this.y=o[1]*t+o[5]*r+o[9]*a,this.z=o[2]*t+o[6]*r+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-o*c,this.y=o*u-r*h,this.z=r*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new le,B0=new Xs;class Rt{constructor(e,t,r,a,o,u,c,h,f){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,u,c,h,f)}set(e,t,r,a,o,u,c,h,f){const v=this.elements;return v[0]=e,v[1]=a,v[2]=c,v[3]=t,v[4]=o,v[5]=h,v[6]=r,v[7]=u,v[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,u=r[0],c=r[3],h=r[6],f=r[1],v=r[4],g=r[7],m=r[2],_=r[5],E=r[8],w=a[0],y=a[3],S=a[6],T=a[1],C=a[4],P=a[7],D=a[2],L=a[5],k=a[8];return o[0]=u*w+c*T+h*D,o[3]=u*y+c*C+h*L,o[6]=u*S+c*P+h*k,o[1]=f*w+v*T+g*D,o[4]=f*y+v*C+g*L,o[7]=f*S+v*P+g*k,o[2]=m*w+_*T+E*D,o[5]=m*y+_*C+E*L,o[8]=m*S+_*P+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],v=e[8];return t*u*v-t*c*f-r*o*v+r*c*h+a*o*f-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],v=e[8],g=v*u-c*f,m=c*h-v*o,_=f*o-u*h,E=t*g+r*m+a*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(a*f-v*r)*w,e[2]=(c*r-a*u)*w,e[3]=m*w,e[4]=(v*t-a*h)*w,e[5]=(a*o-c*t)*w,e[6]=_*w,e[7]=(r*h-f*t)*w,e[8]=(u*t-r*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,o,u,c){const h=Math.cos(o),f=Math.sin(o);return this.set(r*h,r*f,-r*(h*u+f*c)+u+e,-a*f,a*h,-a*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(hf.makeScale(e,t)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hf=new Rt,z0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dw(){const i={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Qt&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(a.r=Oa(a.r),a.g=Oa(a.g),a.b=Oa(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gs?ic:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Ha]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:r,transfer:Qt,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}const Xt=Dw();function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let va;class Iw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{va===void 0&&(va=el("canvas")),va.width=e.width,va.height=e.height;const a=va.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=va}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=Ur(o[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ur(t[r]/255)*255):t[r]=Ur(t[r]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uw=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(pf(a[u].image)):o.push(pf(a[u]))}else o=pf(a);r.url=o}return t||(e.images[this.uuid]=r),r}}function pf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let Fw=0;const mf=new le;class jn extends ja{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,r=Nr,a=Nr,o=Wn,u=Hs,c=Ci,h=gi,f=jn.DEFAULT_ANISOTROPY,v=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=Yi(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mf).x}get height(){return this.source.getSize(mf).y}get depth(){return this.source.getSize(mf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=F_;jn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,t=0,r=0,a=1){ln.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,o;const h=e.elements,f=h[0],v=h[4],g=h[8],m=h[1],_=h[5],E=h[9],w=h[2],y=h[6],S=h[10];if(Math.abs(v-m)<.01&&Math.abs(g-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+m)<.1&&Math.abs(g+w)<.1&&Math.abs(E+y)<.1&&Math.abs(f+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(f+1)/2,P=(_+1)/2,D=(S+1)/2,L=(v+m)/4,k=(g+w)/4,M=(E+y)/4;return C>P&&C>D?C<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(C),a=L/r,o=k/r):P>D?P<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),r=L/a,o=M/a):D<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(D),r=k/o,a=M/o),this.set(r,a,o,t),this}let T=Math.sqrt((y-E)*(y-E)+(g-w)*(g-w)+(m-v)*(m-v));return Math.abs(T)<.001&&(T=1),this.x=(y-E)/T,this.y=(g-w)/T,this.z=(m-v)/T,this.w=Math.acos((f+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ow extends ja{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},o=new jn(a),u=r.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new hp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends Ow{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class j_ extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kw extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e,t,r,a,o,u,c,h,f,v,g,m,_,E,w,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,u,c,h,f,v,g,m,_,E,w,y)}set(e,t,r,a,o,u,c,h,f,v,g,m,_,E,w,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=a,S[1]=o,S[5]=u,S[9]=c,S[13]=h,S[2]=f,S[6]=v,S[10]=g,S[14]=m,S[3]=_,S[7]=E,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/_a.setFromMatrixColumn(e,0).length(),o=1/_a.setFromMatrixColumn(e,1).length(),u=1/_a.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,o=e.z,u=Math.cos(r),c=Math.sin(r),h=Math.cos(a),f=Math.sin(a),v=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=u*v,_=u*g,E=c*v,w=c*g;t[0]=h*v,t[4]=-h*g,t[8]=f,t[1]=_+E*f,t[5]=m-w*f,t[9]=-c*h,t[2]=w-m*f,t[6]=E+_*f,t[10]=u*h}else if(e.order==="YXZ"){const m=h*v,_=h*g,E=f*v,w=f*g;t[0]=m+w*c,t[4]=E*c-_,t[8]=u*f,t[1]=u*g,t[5]=u*v,t[9]=-c,t[2]=_*c-E,t[6]=w+m*c,t[10]=u*h}else if(e.order==="ZXY"){const m=h*v,_=h*g,E=f*v,w=f*g;t[0]=m-w*c,t[4]=-u*g,t[8]=E+_*c,t[1]=_+E*c,t[5]=u*v,t[9]=w-m*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const m=u*v,_=u*g,E=c*v,w=c*g;t[0]=h*v,t[4]=E*f-_,t[8]=m*f+w,t[1]=h*g,t[5]=w*f+m,t[9]=_*f-E,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const m=u*h,_=u*f,E=c*h,w=c*f;t[0]=h*v,t[4]=w-m*g,t[8]=E*g+_,t[1]=g,t[5]=u*v,t[9]=-c*v,t[2]=-f*v,t[6]=_*g+E,t[10]=m-w*g}else if(e.order==="XZY"){const m=u*h,_=u*f,E=c*h,w=c*f;t[0]=h*v,t[4]=-g,t[8]=f*v,t[1]=m*g+w,t[5]=u*v,t[9]=_*g-E,t[2]=E*g-_,t[6]=c*v,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bw,e,zw)}lookAt(e,t,r){const a=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ls.crossVectors(r,hi),ls.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ls.crossVectors(r,hi)),ls.normalize(),gu.crossVectors(hi,ls),a[0]=ls.x,a[4]=gu.x,a[8]=hi.x,a[1]=ls.y,a[5]=gu.y,a[9]=hi.y,a[2]=ls.z,a[6]=gu.z,a[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,u=r[0],c=r[4],h=r[8],f=r[12],v=r[1],g=r[5],m=r[9],_=r[13],E=r[2],w=r[6],y=r[10],S=r[14],T=r[3],C=r[7],P=r[11],D=r[15],L=a[0],k=a[4],M=a[8],N=a[12],re=a[1],B=a[5],q=a[9],Q=a[13],ee=a[2],ie=a[6],G=a[10],W=a[14],K=a[3],te=a[7],de=a[11],F=a[15];return o[0]=u*L+c*re+h*ee+f*K,o[4]=u*k+c*B+h*ie+f*te,o[8]=u*M+c*q+h*G+f*de,o[12]=u*N+c*Q+h*W+f*F,o[1]=v*L+g*re+m*ee+_*K,o[5]=v*k+g*B+m*ie+_*te,o[9]=v*M+g*q+m*G+_*de,o[13]=v*N+g*Q+m*W+_*F,o[2]=E*L+w*re+y*ee+S*K,o[6]=E*k+w*B+y*ie+S*te,o[10]=E*M+w*q+y*G+S*de,o[14]=E*N+w*Q+y*W+S*F,o[3]=T*L+C*re+P*ee+D*K,o[7]=T*k+C*B+P*ie+D*te,o[11]=T*M+C*q+P*G+D*de,o[15]=T*N+C*Q+P*W+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],o=e[12],u=e[1],c=e[5],h=e[9],f=e[13],v=e[2],g=e[6],m=e[10],_=e[14],E=e[3],w=e[7],y=e[11],S=e[15],T=h*_-f*m,C=c*_-f*g,P=c*m-h*g,D=u*_-f*v,L=u*m-h*v,k=u*g-c*v;return t*(w*T-y*C+S*P)-r*(E*T-y*D+S*L)+a*(E*C-w*D+S*k)-o*(E*P-w*L+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],v=e[8],g=e[9],m=e[10],_=e[11],E=e[12],w=e[13],y=e[14],S=e[15],T=t*c-r*u,C=t*h-a*u,P=t*f-o*u,D=r*h-a*c,L=r*f-o*c,k=a*f-o*h,M=v*w-g*E,N=v*y-m*E,re=v*S-_*E,B=g*y-m*w,q=g*S-_*w,Q=m*S-_*y,ee=T*Q-C*q+P*B+D*re-L*N+k*M;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/ee;return e[0]=(c*Q-h*q+f*B)*ie,e[1]=(a*q-r*Q-o*B)*ie,e[2]=(w*k-y*L+S*D)*ie,e[3]=(m*L-g*k-_*D)*ie,e[4]=(h*re-u*Q-f*N)*ie,e[5]=(t*Q-a*re+o*N)*ie,e[6]=(y*P-E*k-S*C)*ie,e[7]=(v*k-m*P+_*C)*ie,e[8]=(u*q-c*re+f*M)*ie,e[9]=(r*re-t*q-o*M)*ie,e[10]=(E*L-w*P+S*T)*ie,e[11]=(g*P-v*L-_*T)*ie,e[12]=(c*N-u*B-h*M)*ie,e[13]=(t*B-r*N+a*M)*ie,e[14]=(w*C-E*D-y*T)*ie,e[15]=(v*D-g*C+m*T)*ie,this}scale(e){const t=this.elements,r=e.x,a=e.y,o=e.z;return t[0]*=r,t[4]*=a,t[8]*=o,t[1]*=r,t[5]*=a,t[9]*=o,t[2]*=r,t[6]*=a,t[10]*=o,t[3]*=r,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),o=1-r,u=e.x,c=e.y,h=e.z,f=o*u,v=o*c;return this.set(f*u+r,f*c-a*h,f*h+a*c,0,f*c+a*h,v*c+r,v*h-a*u,0,f*h-a*c,v*h+a*u,o*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,o,u){return this.set(1,r,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,f=o+o,v=u+u,g=c+c,m=o*f,_=o*v,E=o*g,w=u*v,y=u*g,S=c*g,T=h*f,C=h*v,P=h*g,D=r.x,L=r.y,k=r.z;return a[0]=(1-(w+S))*D,a[1]=(_+P)*D,a[2]=(E-C)*D,a[3]=0,a[4]=(_-P)*L,a[5]=(1-(m+S))*L,a[6]=(y+T)*L,a[7]=0,a[8]=(E+C)*k,a[9]=(y-T)*k,a[10]=(1-(m+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return r.set(1,1,1),t.identity(),this;let u=_a.set(a[0],a[1],a[2]).length();const c=_a.set(a[4],a[5],a[6]).length(),h=_a.set(a[8],a[9],a[10]).length();o<0&&(u=-u),Hi.copy(this);const f=1/u,v=1/c,g=1/h;return Hi.elements[0]*=f,Hi.elements[1]*=f,Hi.elements[2]*=f,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,t.setFromRotationMatrix(Hi),r.x=u,r.y=c,r.z=h,this}makePerspective(e,t,r,a,o,u,c=sr,h=!1){const f=this.elements,v=2*o/(t-e),g=2*o/(r-a),m=(t+e)/(t-e),_=(r+a)/(r-a);let E,w;if(h)E=o/(u-o),w=u*o/(u-o);else if(c===sr)E=-(u+o)/(u-o),w=-2*u*o/(u-o);else if(c===Qo)E=-u/(u-o),w=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=v,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,a,o,u,c=sr,h=!1){const f=this.elements,v=2/(t-e),g=2/(r-a),m=-(t+e)/(t-e),_=-(r+a)/(r-a);let E,w;if(h)E=1/(u-o),w=u/(u-o);else if(c===sr)E=-2/(u-o),w=-(u+o)/(u-o);else if(c===Qo)E=-1/(u-o),w=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=v,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=E,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _a=new le,Hi=new Vt,Bw=new le(0,0,0),zw=new le(1,1,1),ls=new le,gu=new le,hi=new le,H0=new Vt,G0=new Xs;class dr{constructor(e=0,t=0,r=0,a=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],h=a[1],f=a[5],v=a[9],g=a[2],m=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-v,_),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-kt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-v,_),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return H0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return G0.setFromEuler(this),this.setFromQuaternion(G0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vw=0;const W0=new le,xa=new Xs,Er=new Vt,vu=new le,Lo=new le,Hw=new le,Gw=new Xs,j0=new le(1,0,0),X0=new le(0,1,0),$0=new le(0,0,1),Y0={type:"added"},Ww={type:"removed"},ya={type:"childadded",child:null},gf={type:"childremoved",child:null};class xn extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new le,t=new dr,r=new Xs,a=new le(1,1,1);function o(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Rt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(X0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,t){return W0.copy(e).applyQuaternion(this.quaternion),this.position.add(W0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(X0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vu.copy(e):vu.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Lo,vu,this.up):Er.lookAt(vu,Lo,this.up),this.quaternion.setFromRotationMatrix(Er),a&&(Er.extractRotation(a.matrixWorld),xa.setFromRotationMatrix(Er),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Y0),ya.child=e,this.dispatchEvent(ya),ya.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ww),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Y0),ya.child=e,this.dispatchEvent(ya),ya.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Hw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Gw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*a,o[13]+=r-o[1]*t-o[5]*r-o[9]*a,o[14]+=a-o[2]*t-o[6]*r-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,v=h.length;f<v;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(o(e.materials,this.material[h]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),v=u(e.images),g=u(e.shapes),m=u(e.skeletons),_=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(c){const h=[];for(const f in c){const v=c[f];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}xn.DEFAULT_UP=new le(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _u extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),S=this._getHandJoint(f,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=v.position.distanceTo(g.position),_=.02,E=.005;f.inputState.pinching&&m>_+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _u;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},xu={h:0,s:0,l:0};function _f(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Xt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Xt.workingColorSpace){if(e=fp(e,1),t=kt(t,0,1),r=kt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,u=2*r-o;this.r=_f(u,o,e+1/3),this.g=_f(u,o,e),this.b=_f(u,o,e-1/3)}return Xt.colorSpaceToWorking(this,a),this}setStyle(e,t=Ai){function r(o){o!==void 0&&parseFloat(o)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const r=$_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Xt.workingToColorSpace(Hn.copy(this),e),Math.round(kt(Hn.r*255,0,255))*65536+Math.round(kt(Hn.g*255,0,255))*256+Math.round(kt(Hn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(Hn.copy(this),t);const r=Hn.r,a=Hn.g,o=Hn.b,u=Math.max(r,a,o),c=Math.min(r,a,o);let h,f;const v=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=v<=.5?g/(u+c):g/(2-u-c),u){case r:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-r)/g+2;break;case o:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=v,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ai){Xt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,r=Hn.g,a=Hn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(xu);const r=$o(us.h,xu.h,t),a=$o(us.s,xu.s,t),o=$o(us.l,xu.l,t);return this.setHSL(r,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*a,this.g=o[1]*t+o[4]*r+o[7]*a,this.b=o[2]*t+o[5]*r+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Bt;Bt.NAMES=$_;class Xw extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new le,wr=new le,xf=new le,br=new le,Sa=new le,Ma=new le,q0=new le,yf=new le,Sf=new le,Mf=new le,Ef=new ln,wf=new ln,bf=new ln;class Xi{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Gi.subVectors(e,t),a.cross(Gi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,r,a,o){Gi.subVectors(a,t),wr.subVectors(r,t),xf.subVectors(e,t);const u=Gi.dot(Gi),c=Gi.dot(wr),h=Gi.dot(xf),f=wr.dot(wr),v=wr.dot(xf),g=u*f-c*c;if(g===0)return o.set(0,0,0),null;const m=1/g,_=(f*h-c*v)*m,E=(u*v-c*h)*m;return o.set(1-_-E,E,_)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,r,a,o,u,c,h){return this.getBarycoord(e,t,r,a,br)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,br.x),h.addScaledVector(u,br.y),h.addScaledVector(c,br.z),h)}static getInterpolatedAttribute(e,t,r,a,o,u){return Ef.setScalar(0),wf.setScalar(0),bf.setScalar(0),Ef.fromBufferAttribute(e,t),wf.fromBufferAttribute(e,r),bf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ef,o.x),u.addScaledVector(wf,o.y),u.addScaledVector(bf,o.z),u}static isFrontFacing(e,t,r,a){return Gi.subVectors(r,t),wr.subVectors(e,t),Gi.cross(wr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Gi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,o){return Xi.getInterpolation(e,this.a,this.b,this.c,t,r,a,o)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,o=this.c;let u,c;Sa.subVectors(a,r),Ma.subVectors(o,r),yf.subVectors(e,r);const h=Sa.dot(yf),f=Ma.dot(yf);if(h<=0&&f<=0)return t.copy(r);Sf.subVectors(e,a);const v=Sa.dot(Sf),g=Ma.dot(Sf);if(v>=0&&g<=v)return t.copy(a);const m=h*g-v*f;if(m<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Sa,u);Mf.subVectors(e,o);const _=Sa.dot(Mf),E=Ma.dot(Mf);if(E>=0&&_<=E)return t.copy(o);const w=_*f-h*E;if(w<=0&&f>=0&&E<=0)return c=f/(f-E),t.copy(r).addScaledVector(Ma,c);const y=v*E-_*g;if(y<=0&&g-v>=0&&_-E>=0)return q0.subVectors(o,a),c=(g-v)/(g-v+(_-E)),t.copy(a).addScaledVector(q0,c);const S=1/(y+w+m);return u=w*S,c=m*S,t.copy(r).addScaledVector(Sa,u).addScaledVector(Ma,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Wi):Wi.fromBufferAttribute(o,u),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yu.copy(r.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Su.subVectors(this.max,Do),Ea.subVectors(e.a,Do),wa.subVectors(e.b,Do),ba.subVectors(e.c,Do),cs.subVectors(wa,Ea),ds.subVectors(ba,wa),Ls.subVectors(Ea,ba);let t=[0,-cs.z,cs.y,0,-ds.z,ds.y,0,-Ls.z,Ls.y,cs.z,0,-cs.x,ds.z,0,-ds.x,Ls.z,0,-Ls.x,-cs.y,cs.x,0,-ds.y,ds.x,0,-Ls.y,Ls.x,0];return!Tf(t,Ea,wa,ba,Su)||(t=[1,0,0,0,1,0,0,0,1],!Tf(t,Ea,wa,ba,Su))?!1:(Mu.crossVectors(cs,ds),t=[Mu.x,Mu.y,Mu.z],Tf(t,Ea,wa,ba,Su))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new le,new le,new le,new le,new le,new le,new le,new le],Wi=new le,yu=new Br,Ea=new le,wa=new le,ba=new le,cs=new le,ds=new le,Ls=new le,Do=new le,Su=new le,Mu=new le,Ds=new le;function Tf(i,e,t,r,a){for(let o=0,u=i.length-3;o<=u;o+=3){Ds.fromArray(i,o);const c=a.x*Math.abs(Ds.x)+a.y*Math.abs(Ds.y)+a.z*Math.abs(Ds.z),h=e.dot(Ds),f=t.dot(Ds),v=r.dot(Ds);if(Math.max(-Math.max(h,f,v),Math.min(h,f,v))>c)return!1}return!0}const Sn=new le,Eu=new Zt;let $w=0;class Pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$w++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=kh,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Eu.fromBufferAttribute(this,t),Eu.applyMatrix3(e),this.setXY(t,Eu.x,Eu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ji(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=en(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array),a=en(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array),a=en(a,this.array),o=en(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class Y_ extends Pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class q_ extends Pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class oi extends Pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Yw=new Br,Io=new le,Af=new le;class zr{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Yw.setFromPoints(e).getCenter(r);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Af)),this.expandByPoint(Io.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qw=0;const bi=new Vt,Rf=new xn,Ta=new le,pi=new Br,Uo=new Br,Ln=new le;class Di extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fw(e)?q_:Y_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Rt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,r){return bi.makeTranslation(e,t,r),this.applyMatrix4(bi),this}scale(e,t,r){return bi.makeScale(e,t,r),this.applyMatrix4(bi),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Uo.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(pi.min,Uo.min),pi.expandByPoint(Ln),Ln.addVectors(pi.max,Uo.max),pi.expandByPoint(Ln)):(pi.expandByPoint(Uo.min),pi.expandByPoint(Uo.max))}pi.getCenter(r);let a=0;for(let o=0,u=e.count;o<u;o++)Ln.fromBufferAttribute(e,o),a=Math.max(a,r.distanceToSquared(Ln));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let f=0,v=c.count;f<v;f++)Ln.fromBufferAttribute(c,f),h&&(Ta.fromBufferAttribute(e,f),Ln.add(Ta)),a=Math.max(a,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let M=0;M<r.count;M++)c[M]=new le,h[M]=new le;const f=new le,v=new le,g=new le,m=new Zt,_=new Zt,E=new Zt,w=new le,y=new le;function S(M,N,re){f.fromBufferAttribute(r,M),v.fromBufferAttribute(r,N),g.fromBufferAttribute(r,re),m.fromBufferAttribute(o,M),_.fromBufferAttribute(o,N),E.fromBufferAttribute(o,re),v.sub(f),g.sub(f),_.sub(m),E.sub(m);const B=1/(_.x*E.y-E.x*_.y);isFinite(B)&&(w.copy(v).multiplyScalar(E.y).addScaledVector(g,-_.y).multiplyScalar(B),y.copy(g).multiplyScalar(_.x).addScaledVector(v,-E.x).multiplyScalar(B),c[M].add(w),c[N].add(w),c[re].add(w),h[M].add(y),h[N].add(y),h[re].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,N=T.length;M<N;++M){const re=T[M],B=re.start,q=re.count;for(let Q=B,ee=B+q;Q<ee;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const C=new le,P=new le,D=new le,L=new le;function k(M){D.fromBufferAttribute(a,M),L.copy(D);const N=c[M];C.copy(N),C.sub(D.multiplyScalar(D.dot(N))).normalize(),P.crossVectors(L,N);const B=P.dot(h[M])<0?-1:1;u.setXYZW(M,C.x,C.y,C.z,B)}for(let M=0,N=T.length;M<N;++M){const re=T[M],B=re.start,q=re.count;for(let Q=B,ee=B+q;Q<ee;Q+=3)k(e.getX(Q+0)),k(e.getX(Q+1)),k(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const a=new le,o=new le,u=new le,c=new le,h=new le,f=new le,v=new le,g=new le;if(e)for(let m=0,_=e.count;m<_;m+=3){const E=e.getX(m+0),w=e.getX(m+1),y=e.getX(m+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,y),v.subVectors(u,o),g.subVectors(a,o),v.cross(g),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,y),c.add(v),h.add(v),f.add(v),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),v.subVectors(u,o),g.subVectors(a,o),v.cross(g),r.setXYZ(m+0,v.x,v.y,v.z),r.setXYZ(m+1,v.x,v.y,v.z),r.setXYZ(m+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(c,h){const f=c.array,v=c.itemSize,g=c.normalized,m=new f.constructor(h.length*v);let _=0,E=0;for(let w=0,y=h.length;w<y;w++){c.isInterleavedBufferAttribute?_=h[w]*c.data.stride+c.offset:_=h[w]*v;for(let S=0;S<v;S++)m[E++]=f[_++]}return new Pi(m,v,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],f=e(h,r);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const h=[],f=o[c];for(let v=0,g=f.length;v<g;v++){const m=f[v],_=e(m,r);h.push(_)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const f=r[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],v=[];for(let g=0,m=f.length;g<m;g++){const _=f[g];v.push(_.toJSON(e.data))}v.length>0&&(a[h]=v,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const f in a){const v=a[f];this.setAttribute(f,v.clone(t))}const o=e.morphAttributes;for(const f in o){const v=[],g=o[f];for(let m=0,_=g.length;m<_;m++)v.push(g[m].clone(t));this.morphAttributes[f]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,v=u.length;f<v;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kh,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new le;class K_{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=ji(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=en(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),r=en(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),r=en(r,this.array),a=en(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=en(t,this.array),r=en(r,this.array),a=en(a,this.array),o=en(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){rc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new K_(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Kw=0;class $s extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Fa,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(r.blending=this.blending),this.side!==xs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yf&&(r.blendSrc=this.blendSrc),this.blendDst!==qf&&(r.blendDst=this.blendDst),this.blendEquation!==Bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ga&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ga&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ga&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(r.textures=o),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ar=new le,Cf=new le,wu=new le,fs=new le,Pf=new le,bu=new le,Nf=new le;class mc{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Cf.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Cf);const o=e.distanceTo(t)*.5,u=-this.direction.dot(wu),c=fs.dot(this.direction),h=-fs.dot(wu),f=fs.lengthSq(),v=Math.abs(1-u*u);let g,m,_,E;if(v>0)if(g=u*h-c,m=u*c-h,E=o*v,g>=0)if(m>=-E)if(m<=E){const w=1/v;g*=w,m*=w,_=g*(g+u*m+2*c)+m*(u*g+m+2*h)+f}else m=o,g=Math.max(0,-(u*m+c)),_=-g*g+m*(m+2*h)+f;else m=-o,g=Math.max(0,-(u*m+c)),_=-g*g+m*(m+2*h)+f;else m<=-E?(g=Math.max(0,-(-u*o+c)),m=g>0?-o:Math.min(Math.max(-o,-h),o),_=-g*g+m*(m+2*h)+f):m<=E?(g=0,m=Math.min(Math.max(-o,-h),o),_=m*(m+2*h)+f):(g=Math.max(0,-(u*o+c)),m=g>0?o:Math.min(Math.max(-o,-h),o),_=-g*g+m*(m+2*h)+f);else m=u>0?-o:o,g=Math.max(0,-(u*m+c)),_=-g*g+m*(m+2*h)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Cf).addScaledVector(wu,m),_}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const r=Ar.dot(this.direction),a=Ar.dot(Ar)-r*r,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=r-u,h=r+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,o,u,c,h;const f=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(r=(e.min.x-m.x)*f,a=(e.max.x-m.x)*f):(r=(e.max.x-m.x)*f,a=(e.min.x-m.x)*f),v>=0?(o=(e.min.y-m.y)*v,u=(e.max.y-m.y)*v):(o=(e.max.y-m.y)*v,u=(e.min.y-m.y)*v),r>u||o>a||((o>r||isNaN(r))&&(r=o),(u<a||isNaN(a))&&(a=u),g>=0?(c=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(c=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,r,a,o){Pf.subVectors(t,e),bu.subVectors(r,e),Nf.crossVectors(Pf,bu);let u=this.direction.dot(Nf),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;fs.subVectors(this.origin,e);const h=c*this.direction.dot(bu.crossVectors(fs,bu));if(h<0)return null;const f=c*this.direction.dot(Pf.cross(fs));if(f<0||h+f>u)return null;const v=-c*fs.dot(Nf);return v<0?null:this.at(v/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Z_ extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const K0=new Vt,Is=new mc,Tu=new zr,Z0=new le,Au=new le,Ru=new le,Cu=new le,Lf=new le,Pu=new le,J0=new le,Nu=new le;class vi extends xn{constructor(e=new Di,t=new Z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){Pu.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const v=c[h],g=o[h];v!==0&&(Lf.fromBufferAttribute(g,e),u?Pu.addScaledVector(Lf,v):Pu.addScaledVector(Lf.sub(t),v))}t.add(Pu)}return t}raycast(e,t){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(o),Is.copy(e.ray).recast(e.near),!(Tu.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Tu,Z0)===null||Is.origin.distanceToSquared(Z0)>(e.far-e.near)**2))&&(K0.copy(o).invert(),Is.copy(e.ray).applyMatrix4(K0),!(r.boundingBox!==null&&Is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,r){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,f=o.attributes.uv,v=o.attributes.uv1,g=o.attributes.normal,m=o.groups,_=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,w=m.length;E<w;E++){const y=m[E],S=u[y.materialIndex],T=Math.max(y.start,_.start),C=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let P=T,D=C;P<D;P+=3){const L=c.getX(P),k=c.getX(P+1),M=c.getX(P+2);a=Lu(this,S,e,r,f,v,g,L,k,M),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,_.start),w=Math.min(c.count,_.start+_.count);for(let y=E,S=w;y<S;y+=3){const T=c.getX(y),C=c.getX(y+1),P=c.getX(y+2);a=Lu(this,u,e,r,f,v,g,T,C,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,w=m.length;E<w;E++){const y=m[E],S=u[y.materialIndex],T=Math.max(y.start,_.start),C=Math.min(h.count,Math.min(y.start+y.count,_.start+_.count));for(let P=T,D=C;P<D;P+=3){const L=P,k=P+1,M=P+2;a=Lu(this,S,e,r,f,v,g,L,k,M),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,_.start),w=Math.min(h.count,_.start+_.count);for(let y=E,S=w;y<S;y+=3){const T=y,C=y+1,P=y+2;a=Lu(this,u,e,r,f,v,g,T,C,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Zw(i,e,t,r,a,o,u,c){let h;if(e.side===ai?h=r.intersectTriangle(u,o,a,!0,c):h=r.intersectTriangle(a,o,u,e.side===xs,c),h===null)return null;Nu.copy(c),Nu.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Nu);return f<t.near||f>t.far?null:{distance:f,point:Nu.clone(),object:i}}function Lu(i,e,t,r,a,o,u,c,h,f){i.getVertexPosition(c,Au),i.getVertexPosition(h,Ru),i.getVertexPosition(f,Cu);const v=Zw(i,e,t,r,Au,Ru,Cu,J0);if(v){const g=new le;Xi.getBarycoord(J0,Au,Ru,Cu,g),a&&(v.uv=Xi.getInterpolatedAttribute(a,c,h,f,g,new Zt)),o&&(v.uv1=Xi.getInterpolatedAttribute(o,c,h,f,g,new Zt)),u&&(v.normal=Xi.getInterpolatedAttribute(u,c,h,f,g,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const m={a:c,b:h,c:f,normal:new le,materialIndex:0};Xi.getNormal(Au,Ru,Cu,m.normal),v.face=m,v.barycoord=g}return v}const Q0=new le,ev=new ln,tv=new ln,Jw=new le,nv=new Vt,Du=new le,Df=new zr,iv=new Vt,If=new mc;class J2 extends vi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=P0,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Br),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Du),this.boundingBox.expandByPoint(Du)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Du),this.boundingSphere.expandByPoint(Du)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,a=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Df.copy(this.boundingSphere),Df.applyMatrix4(a),e.ray.intersectsSphere(Df)!==!1&&(iv.copy(a).invert(),If.copy(e.ray).applyMatrix4(iv),!(this.boundingBox!==null&&If.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,If)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ln,t=this.geometry.attributes.skinWeight;for(let r=0,a=t.count;r<a;r++){e.fromBufferAttribute(t,r);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===P0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tw?this.bindMatrixInverse.copy(this.bindMatrix).invert():ht("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,a=this.geometry;ev.fromBufferAttribute(a.attributes.skinIndex,e),tv.fromBufferAttribute(a.attributes.skinWeight,e),Q0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const u=tv.getComponent(o);if(u!==0){const c=ev.getComponent(o);nv.multiplyMatrices(r.bones[c].matrixWorld,r.boneInverses[c]),t.addScaledVector(Jw.copy(Q0).applyMatrix4(nv),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qw extends xn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pp extends jn{constructor(e=null,t=1,r=1,a,o,u,c,h,f=Fn,v=Fn,g,m){super(null,u,c,h,f,v,a,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rv=new Vt,eb=new Vt;class J_{constructor(e=[],t=[]){this.uuid=Yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ht("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new Vt;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let o=0,u=e.length;o<u;o++){const c=e[o]?e[o].matrixWorld:eb;rv.multiplyMatrices(c,t[o]),rv.toArray(r,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new J_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new pp(t,e,e,Ci,Ri);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,a=e.bones.length;r<a;r++){const o=e.bones[r];let u=t[o];u===void 0&&(ht("Skeleton: No bone found with UUID:",o),u=new Qw),this.bones.push(u),this.boneInverses.push(new Vt().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const u=t[a];e.bones.push(u.uuid);const c=r[a];e.boneInverses.push(c.toArray())}return e}}class sv extends Pi{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Aa=new Vt,av=new Vt,Iu=[],ov=new Br,tb=new Vt,Fo=new vi,Oo=new zr;class Q2 extends vi{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sv(new Float32Array(r*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,tb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Aa),ov.copy(e.boundingBox).applyMatrix4(Aa),this.boundingBox.union(ov)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Aa),Oo.copy(e.boundingSphere).applyMatrix4(Aa),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=r.length+1,u=e*o+1;for(let c=0;c<r.length;c++)r[c]=a[u+c]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(r),e.ray.intersectsSphere(Oo)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,Aa),av.multiplyMatrices(r,Aa),Fo.matrixWorld=av,Fo.raycast(e,Iu);for(let u=0,c=Iu.length;u<c;u++){const h=Iu[u];h.instanceId=o,h.object=this,t.push(h)}Iu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new pp(new Float32Array(a*this.count),a,this.count,ap,Ri));const o=this.morphTexture.source.data.data;let u=0;for(let f=0;f<r.length;f++)u+=r[f];const c=this.geometry.morphTargetsRelative?1:1-u,h=a*e;o[h]=c,o.set(r,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uf=new le,nb=new le,ib=new Rt;class ks{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Uf.subVectors(r,t).cross(nb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Uf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ib.getNormalMatrix(e),a=this.coplanarPoint(Uf).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new zr,rb=new Zt(.5,.5),Uu=new le;class mp{constructor(e=new ks,t=new ks,r=new ks,a=new ks,o=new ks,u=new ks){this.planes=[e,t,r,a,o,u]}set(e,t,r,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr,r=!1){const a=this.planes,o=e.elements,u=o[0],c=o[1],h=o[2],f=o[3],v=o[4],g=o[5],m=o[6],_=o[7],E=o[8],w=o[9],y=o[10],S=o[11],T=o[12],C=o[13],P=o[14],D=o[15];if(a[0].setComponents(f-u,_-v,S-E,D-T).normalize(),a[1].setComponents(f+u,_+v,S+E,D+T).normalize(),a[2].setComponents(f+c,_+g,S+w,D+C).normalize(),a[3].setComponents(f-c,_-g,S-w,D-C).normalize(),r)a[4].setComponents(h,m,y,P).normalize(),a[5].setComponents(f-h,_-m,S-y,D-P).normalize();else if(a[4].setComponents(f-h,_-m,S-y,D-P).normalize(),t===sr)a[5].setComponents(f+h,_+m,S+y,D+P).normalize();else if(t===Qo)a[5].setComponents(h,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);const t=rb.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Uu.x=a.normal.x>0?e.max.x:e.min.x,Uu.y=a.normal.y>0?e.max.y:e.min.y,Uu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sb extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new le,oc=new le,lv=new Vt,ko=new mc,Fu=new zr,Ff=new le,uv=new le;class Q_ extends xn{constructor(e=new Di,t=new sb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,o=t.count;a<o;a++)ac.fromBufferAttribute(t,a-1),oc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new oi(r,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fu.copy(r.boundingSphere),Fu.applyMatrix4(a),Fu.radius+=o,e.ray.intersectsSphere(Fu)===!1)return;lv.copy(a).invert(),ko.copy(e.ray).applyMatrix4(lv);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,v=r.index,m=r.attributes.position;if(v!==null){const _=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let w=_,y=E-1;w<y;w+=f){const S=v.getX(w),T=v.getX(w+1),C=Ou(this,e,ko,h,S,T,w);C&&t.push(C)}if(this.isLineLoop){const w=v.getX(E-1),y=v.getX(_),S=Ou(this,e,ko,h,w,y,E-1);S&&t.push(S)}}else{const _=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let w=_,y=E-1;w<y;w+=f){const S=Ou(this,e,ko,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=Ou(this,e,ko,h,E-1,_,E-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Ou(i,e,t,r,a,o,u){const c=i.geometry.attributes.position;if(ac.fromBufferAttribute(c,a),oc.fromBufferAttribute(c,o),t.distanceSqToSegment(ac,oc,Ff,uv)>r)return;Ff.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Ff);if(!(f<e.near||f>e.far))return{distance:f,point:uv.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const cv=new le,dv=new le;class eP extends Q_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,o=t.count;a<o;a+=2)cv.fromBufferAttribute(t,a),dv.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+cv.distanceTo(dv);e.setAttribute("lineDistance",new oi(r,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tP extends Q_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ab extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fv=new Vt,Bh=new mc,ku=new zr,Bu=new le;class nP extends xn{constructor(e=new Di,t=new ab){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ku.copy(r.boundingSphere),ku.applyMatrix4(a),ku.radius+=o,e.ray.intersectsSphere(ku)===!1)return;fv.copy(a).invert(),Bh.copy(e.ray).applyMatrix4(fv);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=r.index,g=r.attributes.position;if(f!==null){const m=Math.max(0,u.start),_=Math.min(f.count,u.start+u.count);for(let E=m,w=_;E<w;E++){const y=f.getX(E);Bu.fromBufferAttribute(g,y),hv(Bu,y,h,a,e,t,this)}}else{const m=Math.max(0,u.start),_=Math.min(g.count,u.start+u.count);for(let E=m,w=_;E<w;E++)Bu.fromBufferAttribute(g,E),hv(Bu,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function hv(i,e,t,r,a,o,u){const c=Bh.distanceSqToPoint(i);if(c<t){const h=new le;Bh.closestPointToPoint(i,h),h.applyMatrix4(r);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ex extends jn{constructor(e=[],t=Ws,r,a,o,u,c,h,f,v){super(e,t,r,a,o,u,c,h,f,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tl extends jn{constructor(e,t,r=cr,a,o,u,c=Fn,h=Fn,f,v=Or,g=1){if(v!==Or&&v!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,a,o,u,c,h,v,r,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ob extends tl{constructor(e,t=cr,r=Ws,a,o,u=Fn,c=Fn,h,f=Or){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,t,r,a,o,u,c,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tx extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Di{constructor(e=1,t=1,r=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],f=[],v=[],g=[];let m=0,_=0;E("z","y","x",-1,-1,r,t,e,u,o,0),E("z","y","x",1,-1,r,t,-e,u,o,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,o,4),E("x","y","z",-1,-1,e,t,-r,a,o,5),this.setIndex(h),this.setAttribute("position",new oi(f,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(g,2));function E(w,y,S,T,C,P,D,L,k,M,N){const re=P/k,B=D/M,q=P/2,Q=D/2,ee=L/2,ie=k+1,G=M+1;let W=0,K=0;const te=new le;for(let de=0;de<G;de++){const F=de*B-Q;for(let J=0;J<ie;J++){const we=J*re-q;te[w]=we*T,te[y]=F*C,te[S]=ee,f.push(te.x,te.y,te.z),te[w]=0,te[y]=0,te[S]=L>0?1:-1,v.push(te.x,te.y,te.z),g.push(J/k),g.push(1-de/M),W+=1}}for(let de=0;de<M;de++)for(let F=0;F<k;F++){const J=m+F+ie*de,we=m+F+ie*(de+1),Be=m+(F+1)+ie*(de+1),Ye=m+(F+1)+ie*de;h.push(J,we,Ye),h.push(we,Be,Ye),K+=6}c.addGroup(_,K,N),_+=K,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gc extends Di{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(r),h=Math.floor(a),f=c+1,v=h+1,g=e/c,m=t/h,_=[],E=[],w=[],y=[];for(let S=0;S<v;S++){const T=S*m-u;for(let C=0;C<f;C++){const P=C*g-o;E.push(P,-T,0),w.push(0,0,1),y.push(C/c),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let T=0;T<c;T++){const C=T+f*S,P=T+f*(S+1),D=T+1+f*(S+1),L=T+1+f*S;_.push(C,P,L),_.push(P,D,L)}this.setIndex(_),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class gp extends Di{constructor(e=1,t=32,r=16,a=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+c,Math.PI);let f=0;const v=[],g=new le,m=new le,_=[],E=[],w=[],y=[];for(let S=0;S<=r;S++){const T=[],C=S/r;let P=0;S===0&&u===0?P=.5/t:S===r&&h===Math.PI&&(P=-.5/t);for(let D=0;D<=t;D++){const L=D/t;g.x=-e*Math.cos(a+L*o)*Math.sin(u+C*c),g.y=e*Math.cos(u+C*c),g.z=e*Math.sin(a+L*o)*Math.sin(u+C*c),E.push(g.x,g.y,g.z),m.copy(g).normalize(),w.push(m.x,m.y,m.z),y.push(L+P,1-C),T.push(f++)}v.push(T)}for(let S=0;S<r;S++)for(let T=0;T<t;T++){const C=v[S][T+1],P=v[S][T],D=v[S+1][T],L=v[S+1][T+1];(S!==0||u>0)&&_.push(C,P,L),(S!==r-1||h<Math.PI)&&_.push(P,D,L)}this.setIndex(_),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Wa(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Kn(i){const e={};for(let t=0;t<i.length;t++){const r=Wa(i[t]);for(const a in r)e[a]=r[a]}return e}function lb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const ub={clone:Wa,merge:Kn};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class fb extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ix extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G_,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iP extends ix{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hb extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zu(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mb(i){function e(a,o){return i[a]-i[o]}const t=i.length,r=new Array(t);for(let a=0;a!==t;++a)r[a]=a;return r.sort(e),r}function pv(i,e,t){const r=i.length,a=new i.constructor(r);for(let o=0,u=0;u!==r;++o){const c=t[o]*e;for(let h=0;h!==e;++h)a[u++]=i[c+h]}return a}function rx(i,e,t,r){let a=1,o=i[0];for(;o!==void 0&&o[r]===void 0;)o=i[a++];if(o===void 0)return;let u=o[r];if(u!==void 0)if(Array.isArray(u))do u=o[r],u!==void 0&&(e.push(o.time),t.push(...u)),o=i[a++];while(o!==void 0);else if(u.toArray!==void 0)do u=o[r],u!==void 0&&(e.push(o.time),u.toArray(t,t.length)),o=i[a++];while(o!==void 0);else do u=o[r],u!==void 0&&(e.push(o.time),t.push(u)),o=i[a++];while(o!==void 0)}class ul{constructor(e,t,r,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,a=t[r],o=t[r-1];e:{t:{let u;n:{i:if(!(e<a)){for(let c=r+2;;){if(a===void 0){if(e<o)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===c)break;if(o=a,a=t[++r],e<a)break t}u=t.length;break n}if(!(e>=o)){const c=t[1];e<c&&(r=2,o=c);for(let h=r-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===h)break;if(a=o,o=t[--r-1],e>=o)break t}u=r,r=0;break n}break e}for(;r<u;){const c=r+u>>>1;e<t[c]?u=c:r=c+1}if(a=t[r],o=t[r-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,o,a)}return this.interpolate_(r,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a;for(let u=0;u!==a;++u)t[u]=r[o+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gb extends ul{constructor(e,t,r,a){super(e,t,r,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L0,endingEnd:L0}}intervalChanged_(e,t,r){const a=this.parameterPositions;let o=e-2,u=e+1,c=a[o],h=a[u];if(c===void 0)switch(this.getSettings_().endingStart){case D0:o=e,c=2*t-r;break;case I0:o=a.length-2,c=t+a[o]-a[o+1];break;default:o=e,c=r}if(h===void 0)switch(this.getSettings_().endingEnd){case D0:u=e,h=2*r-t;break;case I0:u=1,h=r+a[1]-a[0];break;default:u=e-1,h=t}const f=(r-t)*.5,v=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(h-r),this._offsetPrev=o*v,this._offsetNext=u*v}interpolate_(e,t,r,a){const o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,h=e*c,f=h-c,v=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,_=this._weightNext,E=(r-t)/(a-t),w=E*E,y=w*E,S=-m*y+2*m*w-m*E,T=(1+m)*y+(-1.5-2*m)*w+(-.5+m)*E+1,C=(-1-_)*y+(1.5+_)*w+.5*E,P=_*y-_*w;for(let D=0;D!==c;++D)o[D]=S*u[v+D]+T*u[f+D]+C*u[h+D]+P*u[g+D];return o}}class vb extends ul{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,h=e*c,f=h-c,v=(r-t)/(a-t),g=1-v;for(let m=0;m!==c;++m)o[m]=u[f+m]*g+u[h+m]*v;return o}}class _b extends ul{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class xb extends ul{interpolate_(e,t,r,a){const o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,h=e*c,f=h-c,v=this.settings||this.DefaultSettings_,g=v.inTangents,m=v.outTangents;if(!g||!m){const w=(r-t)/(a-t),y=1-w;for(let S=0;S!==c;++S)o[S]=u[f+S]*y+u[h+S]*w;return o}const _=c*2,E=e-1;for(let w=0;w!==c;++w){const y=u[f+w],S=u[h+w],T=E*_+w*2,C=m[T],P=m[T+1],D=e*_+w*2,L=g[D],k=g[D+1];let M=(r-t)/(a-t),N,re,B,q,Q;for(let ee=0;ee<8;ee++){N=M*M,re=N*M,B=1-M,q=B*B,Q=q*B;const G=Q*t+3*q*M*C+3*B*N*L+re*a-r;if(Math.abs(G)<1e-10)break;const W=3*q*(C-t)+6*B*M*(L-C)+3*N*(a-L);if(Math.abs(W)<1e-10)break;M=M-G/W,M=Math.max(0,Math.min(1,M))}o[w]=Q*y+3*q*M*P+3*B*N*k+re*S}return o}}class Zi{constructor(e,t,r,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zu(t,this.TimeBufferType),this.values=zu(r,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:zu(e.times,Array),values:zu(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(r.interpolation=a)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new _b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new xb(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case nc:t=this.InterpolantFactoryMethodDiscrete;break;case Oh:t=this.InterpolantFactoryMethodLinear;break;case df:t=this.InterpolantFactoryMethodSmooth;break;case N0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return ht("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nc;case this.InterpolantFactoryMethodLinear:return Oh;case this.InterpolantFactoryMethodSmooth:return df;case this.InterpolantFactoryMethodBezier:return N0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]*=e}return this}trim(e,t){const r=this.times,a=r.length;let o=0,u=a-1;for(;o!==a&&r[o]<e;)++o;for(;u!==-1&&r[u]>t;)--u;if(++u,o!==0||u!==a){o>=u&&(u=Math.max(u,1),o=u-1);const c=this.getValueSize();this.times=r.slice(o,u),this.values=this.values.slice(o*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Mt("KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,a=this.values,o=r.length;o===0&&(Mt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==o;c++){const h=r[c];if(typeof h=="number"&&isNaN(h)){Mt("KeyframeTrack: Time is not a valid number.",this,c,h),e=!1;break}if(u!==null&&u>h){Mt("KeyframeTrack: Out of order keys.",this,c,h,u),e=!1;break}u=h}if(a!==void 0&&hw(a))for(let c=0,h=a.length;c!==h;++c){const f=a[c];if(isNaN(f)){Mt("KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),a=this.getInterpolation()===df,o=e.length-1;let u=1;for(let c=1;c<o;++c){let h=!1;const f=e[c],v=e[c+1];if(f!==v&&(c!==1||f!==e[0]))if(a)h=!0;else{const g=c*r,m=g-r,_=g+r;for(let E=0;E!==r;++E){const w=t[g+E];if(w!==t[m+E]||w!==t[_+E]){h=!0;break}}}if(h){if(c!==u){e[u]=e[c];const g=c*r,m=u*r;for(let _=0;_!==r;++_)t[m+_]=t[g+_]}++u}}if(o>0){e[u]=e[o];for(let c=o*r,h=u*r,f=0;f!==r;++f)t[h+f]=t[c+f];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,a=new r(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Zi.prototype.ValueTypeName="";Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=Oh;class Xa extends Zi{constructor(e,t,r){super(e,t,r)}}Xa.prototype.ValueTypeName="bool";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=nc;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;class sx extends Zi{constructor(e,t,r,a){super(e,t,r,a)}}sx.prototype.ValueTypeName="color";class lc extends Zi{constructor(e,t,r,a){super(e,t,r,a)}}lc.prototype.ValueTypeName="number";class yb extends ul{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const o=this.resultBuffer,u=this.sampleValues,c=this.valueSize,h=(r-t)/(a-t);let f=e*c;for(let v=f+c;f!==v;f+=4)Xs.slerpFlat(o,0,u,f-c,u,f,h);return o}}class vc extends Zi{constructor(e,t,r,a){super(e,t,r,a)}InterpolantFactoryMethodLinear(e){return new yb(this.times,this.values,this.getValueSize(),e)}}vc.prototype.ValueTypeName="quaternion";vc.prototype.InterpolantFactoryMethodSmooth=void 0;class $a extends Zi{constructor(e,t,r){super(e,t,r)}}$a.prototype.ValueTypeName="string";$a.prototype.ValueBufferType=Array;$a.prototype.DefaultInterpolation=nc;$a.prototype.InterpolantFactoryMethodLinear=void 0;$a.prototype.InterpolantFactoryMethodSmooth=void 0;class uc extends Zi{constructor(e,t,r,a){super(e,t,r,a)}}uc.prototype.ValueTypeName="vector";class rP{constructor(e="",t=-1,r=[],a=iw){this.name=e,this.tracks=r,this.duration=t,this.blendMode=a,this.uuid=Yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,a=1/(e.fps||1);for(let u=0,c=r.length;u!==c;++u)t.push(Mb(r[u]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],r=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,u=r.length;o!==u;++o)t.push(Zi.toJSON(r[o]));return a}static CreateFromMorphTargetSequence(e,t,r,a){const o=t.length,u=[];for(let c=0;c<o;c++){let h=[],f=[];h.push((c+o-1)%o,c,(c+1)%o),f.push(0,1,0);const v=mb(h);h=pv(h,1,v),f=pv(f,1,v),!a&&h[0]===0&&(h.push(o),f.push(f[0])),u.push(new lc(".morphTargetInfluences["+t[c].name+"]",h,f).scale(1/r))}return new this(e,-1,u)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const a=e;r=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<r.length;a++)if(r[a].name===t)return r[a];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const a={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,h=e.length;c<h;c++){const f=e[c],v=f.name.match(o);if(v&&v.length>1){const g=v[1];let m=a[g];m||(a[g]=m=[]),m.push(f)}}const u=[];for(const c in a)u.push(this.CreateFromMorphTargetSequence(c,a[c],t,r));return u}static parseAnimation(e,t){if(ht("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Mt("AnimationClip: No animation in JSONLoader data."),null;const r=function(g,m,_,E,w){if(_.length!==0){const y=[],S=[];rx(_,y,S,E),y.length!==0&&w.push(new g(m,y,S))}},a=[],o=e.name||"default",u=e.fps||30,c=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const m=f[g].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let E;for(E=0;E<m.length;E++)if(m[E].morphTargets)for(let w=0;w<m[E].morphTargets.length;w++)_[m[E].morphTargets[w]]=-1;for(const w in _){const y=[],S=[];for(let T=0;T!==m[E].morphTargets.length;++T){const C=m[E];y.push(C.time),S.push(C.morphTarget===w?1:0)}a.push(new lc(".morphTargetInfluence["+w+"]",y,S))}h=_.length*u}else{const _=".bones["+t[g].name+"]";r(uc,_+".position",m,"pos",a),r(vc,_+".quaternion",m,"rot",a),r(uc,_+".scale",m,"scl",a)}}return a.length===0?null:new this(o,h,a,c)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,a=e.length;r!==a;++r){const o=this.tracks[r];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let r=0;r<this.tracks.length;r++)e.push(this.tracks[r].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lc;case"vector":case"vector2":case"vector3":case"vector4":return uc;case"color":return sx;case"quaternion":return vc;case"bool":case"boolean":return Xa;case"string":return $a}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sb(i.type);if(i.times===void 0){const t=[],r=[];rx(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Lr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(mv(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!mv(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function mv(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Eb{constructor(e,t,r){const a=this;let o=!1,u=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){c++,o===!1&&a.onStart!==void 0&&a.onStart(v,u,c),o=!0},this.itemEnd=function(v){u++,a.onProgress!==void 0&&a.onProgress(v,u,c),u===c&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(v){a.onError!==void 0&&a.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,g){return f.push(v,g),this},this.removeHandler=function(v){const g=f.indexOf(v);return g!==-1&&f.splice(g,2),this},this.getHandler=function(v){for(let g=0,m=f.length;g<m;g+=2){const _=f[g],E=f[g+1];if(_.global&&(_.lastIndex=0),_.test(v))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wb=new Eb;class cl{constructor(e){this.manager=e!==void 0?e:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,o){r.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr={};class bb extends Error{constructor(e,t){super(e),this.response=t}}class sP extends cl{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Lr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Rr[e]!==void 0){Rr[e].push({onLoad:t,onProgress:r,onError:a});return}Rr[e]=[],Rr[e].push({onLoad:t,onProgress:r,onError:a});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,h=this.responseType;fetch(u).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const v=Rr[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),_=m?parseInt(m):0,E=_!==0;let w=0;const y=new ReadableStream({start(S){T();function T(){g.read().then(({done:C,value:P})=>{if(C)S.close();else{w+=P.byteLength;const D=new ProgressEvent("progress",{lengthComputable:E,loaded:w,total:_});for(let L=0,k=v.length;L<k;L++){const M=v[L];M.onProgress&&M.onProgress(D)}S.enqueue(P),T()}},C=>{S.error(C)})}}});return new Response(y)}else throw new bb(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(v=>new DOMParser().parseFromString(v,c));case"json":return f.json();default:if(c==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),m=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(m);return f.arrayBuffer().then(E=>_.decode(E))}}}).then(f=>{Lr.add(`file:${e}`,f);const v=Rr[e];delete Rr[e];for(let g=0,m=v.length;g<m;g++){const _=v[g];_.onLoad&&_.onLoad(f)}}).catch(f=>{const v=Rr[e];if(v===void 0)throw this.manager.itemError(e),f;delete Rr[e];for(let g=0,m=v.length;g<m;g++){const _=v[g];_.onError&&_.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ra=new WeakMap;class Tb extends cl{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Lr.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);else{let g=Ra.get(u);g===void 0&&(g=[],Ra.set(u,g)),g.push({onLoad:t,onError:a})}return u}const c=el("img");function h(){v(),t&&t(this);const g=Ra.get(this)||[];for(let m=0;m<g.length;m++){const _=g[m];_.onLoad&&_.onLoad(this)}Ra.delete(this),o.manager.itemEnd(e)}function f(g){v(),a&&a(g),Lr.remove(`image:${e}`);const m=Ra.get(this)||[];for(let _=0;_<m.length;_++){const E=m[_];E.onError&&E.onError(g)}Ra.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function v(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Lr.add(`image:${e}`,c),o.manager.itemStart(e),c.src=e,c}}class aP extends cl{constructor(e){super(e)}load(e,t,r,a){const o=new jn,u=new Tb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},r,a),o}}class _c extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Of=new Vt,gv=new le,vv=new le;class vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;gv.setFromMatrixPosition(e.matrixWorld),t.position.copy(gv),vv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vv),t.updateMatrixWorld(),Of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vu=new le,Hu=new Xs,nr=new le;class ax extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vu,Hu,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,Hu,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vu,Hu,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,Hu,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hs=new le,_v=new Zt,xv=new Zt;class si extends ax{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,_v,xv),t.subVectors(xv,_v)}setViewOffset(e,t,r,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;o+=u.offsetX*a/h,t-=u.offsetY*r/f,a*=u.width/h,r*=u.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ab extends vp{constructor(){super(new si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Ga*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(r!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=r,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oP extends _c{constructor(e,t,r=0,a=Math.PI/3,o=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.distance=r,this.angle=a,this.penumbra=o,this.decay=u,this.map=null,this.shadow=new Ab}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rb extends vp{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class Cb extends _c{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Rb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _p extends ax{constructor(e=-1,t=1,r=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-e,u=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,c-=v*this.view.offsetY,h=c-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pb extends vp{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nb extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Pb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Lb extends _c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lP{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const kf=new WeakMap;class uP extends cl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ht("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ht("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Lr.get(`image-bitmap:${e}`);if(u!==void 0){if(o.manager.itemStart(e),u.then){u.then(f=>{if(kf.has(u)===!0)a&&a(kf.get(u)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(f),o.manager.itemEnd(e),f});return}return setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){return Lr.add(`image-bitmap:${e}`,f),t&&t(f),o.manager.itemEnd(e),f}).catch(function(f){a&&a(f),kf.set(h,f),Lr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Lr.add(`image-bitmap:${e}`,h),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ca=-90,Pa=1;class Db extends xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new si(Ca,Pa,e,t);a.layers=this.layers,this.add(a);const o=new si(Ca,Pa,e,t);o.layers=this.layers,this.add(o);const u=new si(Ca,Pa,e,t);u.layers=this.layers,this.add(u);const c=new si(Ca,Pa,e,t);c.layers=this.layers,this.add(c);const h=new si(Ca,Pa,e,t);h.layers=this.layers,this.add(h);const f=new si(Ca,Pa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,o,u,c,h]=t;for(const f of t)this.remove(f);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Qo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,f,v]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(g,m,_),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ib extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xp="\\[\\]\\.:\\/",Ub=new RegExp("["+xp+"]","g"),yp="[^"+xp+"]",Fb="[^"+xp.replace("\\.","")+"]",Ob=/((?:WC+[\/:])*)/.source.replace("WC",yp),kb=/(WCOD+)?/.source.replace("WCOD",Fb),Bb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yp),zb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yp),Vb=new RegExp("^"+Ob+kb+Bb+zb+"$"),Hb=["material","materials","bones","map"];class Gb{constructor(e,t,r){const a=r||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,a=this._bindings[r];a!==void 0&&a.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=r.length;a!==o;++a)r[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class nn{constructor(e,t,r){this.path=t,this.parsedPath=r||nn.parseTrackName(t),this.node=nn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new nn.Composite(e,t,r):new nn(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(e){const t=Vb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=r.nodeName.substring(a+1);Hb.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(o){for(let u=0;u<o.length;u++){const c=o[u];if(c.name===t||c.uuid===t)return c;const h=r(c.children);if(h)return h}return null},a=r(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)e[t++]=r[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=nn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let f=t.objectIndex;switch(r){case"materials":if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let v=0;v<e.length;v++)if(e[v].name===f){f=v;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){Mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(f!==void 0){if(e[f]===void 0){Mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const u=e[a];if(u===void 0){const f=t.nodeName;Mt("PropertyBinding: Trying to update property for track: "+f+"."+a+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=o}else u.fromArray!==void 0&&u.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(h=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nn.Composite=Gb;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function yv(i,e,t,r){const a=Wb(r);switch(t){case V_:return i*e;case ap:return i*e/a.components*a.byteLength;case op:return i*e/a.components*a.byteLength;case Va:return i*e*2/a.components*a.byteLength;case lp:return i*e*2/a.components*a.byteLength;case H_:return i*e*3/a.components*a.byteLength;case Ci:return i*e*4/a.components*a.byteLength;case up:return i*e*4/a.components*a.byteLength;case Ku:case Zu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ju:case Qu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ah:case lh:return Math.max(i,16)*Math.max(e,8)/4;case sh:case oh:return Math.max(i,8)*Math.max(e,8)/2;case uh:case ch:case fh:case hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dh:case ph:case mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Nh:case Lh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dh:case Ih:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uh:case Fh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wb(i){switch(i){case gi:case O_:return{byteLength:1,components:1};case Zo:case k_:case Fr:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case cr:case ip:case Ri:return{byteLength:4,components:1};case B_:case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let i=null,e=!1,t=null,r=null;function a(o,u){t(o,u),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function jb(i){const e=new WeakMap;function t(c,h){const f=c.array,v=c.usage,g=f.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,v),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=i.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,f){const v=h.array,g=h.updateRanges;if(i.bindBuffer(f,c),g.length===0)i.bufferSubData(f,0,v);else{g.sort((_,E)=>_.start-E.start);let m=0;for(let _=1;_<g.length;_++){const E=g[m],w=g[_];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++m,g[m]=w)}g.length=m+1;for(let _=0,E=g.length;_<E;_++){const w=g[_];i.bufferSubData(f,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const v=e.get(c);(!v||v.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:u}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ET=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ER=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:Xb,alphahash_pars_fragment:$b,alphamap_fragment:Yb,alphamap_pars_fragment:qb,alphatest_fragment:Kb,alphatest_pars_fragment:Zb,aomap_fragment:Jb,aomap_pars_fragment:Qb,batching_pars_vertex:eT,batching_vertex:tT,begin_vertex:nT,beginnormal_vertex:iT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:aT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:lT,clipping_planes_pars_vertex:uT,clipping_planes_vertex:cT,color_fragment:dT,color_pars_fragment:fT,color_pars_vertex:hT,color_vertex:pT,common:mT,cube_uv_reflection_fragment:gT,defaultnormal_vertex:vT,displacementmap_pars_vertex:_T,displacementmap_vertex:xT,emissivemap_fragment:yT,emissivemap_pars_fragment:ST,colorspace_fragment:MT,colorspace_pars_fragment:ET,envmap_fragment:wT,envmap_common_pars_fragment:bT,envmap_pars_fragment:TT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:kT,envmap_vertex:RT,fog_vertex:CT,fog_pars_vertex:PT,fog_fragment:NT,fog_pars_fragment:LT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:IT,lights_lambert_fragment:UT,lights_lambert_pars_fragment:FT,lights_pars_begin:OT,lights_toon_fragment:BT,lights_toon_pars_fragment:zT,lights_phong_fragment:VT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:WT,lights_fragment_begin:jT,lights_fragment_maps:XT,lights_fragment_end:$T,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:ZT,map_fragment:JT,map_pars_fragment:QT,map_particle_fragment:eA,map_particle_pars_fragment:tA,metalnessmap_fragment:nA,metalnessmap_pars_fragment:iA,morphinstance_vertex:rA,morphcolor_vertex:sA,morphnormal_vertex:aA,morphtarget_pars_vertex:oA,morphtarget_vertex:lA,normal_fragment_begin:uA,normal_fragment_maps:cA,normal_pars_fragment:dA,normal_pars_vertex:fA,normal_vertex:hA,normalmap_pars_fragment:pA,clearcoat_normal_fragment_begin:mA,clearcoat_normal_fragment_maps:gA,clearcoat_pars_fragment:vA,iridescence_pars_fragment:_A,opaque_fragment:xA,packing:yA,premultiplied_alpha_fragment:SA,project_vertex:MA,dithering_fragment:EA,dithering_pars_fragment:wA,roughnessmap_fragment:bA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:RA,shadowmap_vertex:CA,shadowmask_pars_fragment:PA,skinbase_vertex:NA,skinning_pars_vertex:LA,skinning_vertex:DA,skinnormal_vertex:IA,specularmap_fragment:UA,specularmap_pars_fragment:FA,tonemapping_fragment:OA,tonemapping_pars_fragment:kA,transmission_fragment:BA,transmission_pars_fragment:zA,uv_pars_fragment:VA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:WA,background_vert:jA,background_frag:XA,backgroundCube_vert:$A,backgroundCube_frag:YA,cube_vert:qA,cube_frag:KA,depth_vert:ZA,depth_frag:JA,distance_vert:QA,distance_frag:eR,equirect_vert:tR,equirect_frag:nR,linedashed_vert:iR,linedashed_frag:rR,meshbasic_vert:sR,meshbasic_frag:aR,meshlambert_vert:oR,meshlambert_frag:lR,meshmatcap_vert:uR,meshmatcap_frag:cR,meshnormal_vert:dR,meshnormal_frag:fR,meshphong_vert:hR,meshphong_frag:pR,meshphysical_vert:mR,meshphysical_frag:gR,meshtoon_vert:vR,meshtoon_frag:_R,points_vert:xR,points_frag:yR,shadow_vert:SR,shadow_frag:MR,sprite_vert:ER,sprite_frag:wR},Ge={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},rr={basic:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Kn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Kn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Kn([Ge.points,Ge.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Kn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Kn([Ge.common,Ge.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Kn([Ge.sprite,Ge.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Kn([Ge.common,Ge.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Kn([Ge.lights,Ge.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};rr.physical={uniforms:Kn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Gu={r:0,b:0,g:0},Fs=new dr,bR=new Vt;function TR(i,e,t,r,a,o){const u=new Bt(0);let c=a===!0?0:1,h,f,v=null,g=0,m=null;function _(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const P=T.backgroundBlurriness>0;C=e.get(C,P)}return C}function E(T){let C=!1;const P=_(T);P===null?y(u,c):P&&P.isColor&&(y(P,1),C=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(T,C){const P=_(C);P&&(P.isCubeTexture||P.mapping===pc)?(f===void 0&&(f=new vi(new ll(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Wa(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Fs.copy(C.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(bR.makeRotationFromEuler(Fs)),f.material.toneMapped=Xt.getTransfer(P.colorSpace)!==Qt,(v!==P||g!==P.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,v=P,g=P.version,m=i.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new vi(new gc(2,2),new fr({name:"BackgroundMaterial",uniforms:Wa(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(P.colorSpace)!==Qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||g!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,v=P,g=P.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function y(T,C){T.getRGB(Gu,nx(i)),t.buffers.color.setClear(Gu.r,Gu.g,Gu.b,C,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(T,C=1){u.set(T),c=C,y(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,y(u,c)},render:E,addToRenderList:w,dispose:S}}function AR(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=m(null);let o=a,u=!1;function c(B,q,Q,ee,ie){let G=!1;const W=g(B,ee,Q,q);o!==W&&(o=W,f(o.object)),G=_(B,ee,Q,ie),G&&E(B,ee,Q,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,P(B,q,Q,ee),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return i.createVertexArray()}function f(B){return i.bindVertexArray(B)}function v(B){return i.deleteVertexArray(B)}function g(B,q,Q,ee){const ie=ee.wireframe===!0;let G=r[q.id];G===void 0&&(G={},r[q.id]=G);const W=B.isInstancedMesh===!0?B.id:0;let K=G[W];K===void 0&&(K={},G[W]=K);let te=K[Q.id];te===void 0&&(te={},K[Q.id]=te);let de=te[ie];return de===void 0&&(de=m(h()),te[ie]=de),de}function m(B){const q=[],Q=[],ee=[];for(let ie=0;ie<t;ie++)q[ie]=0,Q[ie]=0,ee[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Q,attributeDivisors:ee,object:B,attributes:{},index:null}}function _(B,q,Q,ee){const ie=o.attributes,G=q.attributes;let W=0;const K=Q.getAttributes();for(const te in K)if(K[te].location>=0){const F=ie[te];let J=G[te];if(J===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;W++}return o.attributesNum!==W||o.index!==ee}function E(B,q,Q,ee){const ie={},G=q.attributes;let W=0;const K=Q.getAttributes();for(const te in K)if(K[te].location>=0){let F=G[te];F===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),ie[te]=J,W++}o.attributes=ie,o.attributesNum=W,o.index=ee}function w(){const B=o.newAttributes;for(let q=0,Q=B.length;q<Q;q++)B[q]=0}function y(B){S(B,0)}function S(B,q){const Q=o.newAttributes,ee=o.enabledAttributes,ie=o.attributeDivisors;Q[B]=1,ee[B]===0&&(i.enableVertexAttribArray(B),ee[B]=1),ie[B]!==q&&(i.vertexAttribDivisor(B,q),ie[B]=q)}function T(){const B=o.newAttributes,q=o.enabledAttributes;for(let Q=0,ee=q.length;Q<ee;Q++)q[Q]!==B[Q]&&(i.disableVertexAttribArray(Q),q[Q]=0)}function C(B,q,Q,ee,ie,G,W){W===!0?i.vertexAttribIPointer(B,q,Q,ie,G):i.vertexAttribPointer(B,q,Q,ee,ie,G)}function P(B,q,Q,ee){w();const ie=ee.attributes,G=Q.getAttributes(),W=q.defaultAttributeValues;for(const K in G){const te=G[K];if(te.location>=0){let de=ie[K];if(de===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),de!==void 0){const F=de.normalized,J=de.itemSize,we=e.get(de);if(we===void 0)continue;const Be=we.buffer,Ye=we.type,ue=we.bytesPerElement,_e=Ye===i.INT||Ye===i.UNSIGNED_INT||de.gpuType===ip;if(de.isInterleavedBufferAttribute){const xe=de.data,We=xe.stride,Qe=de.offset;if(xe.isInstancedInterleavedBuffer){for(let gt=0;gt<te.locationSize;gt++)S(te.location+gt,xe.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let gt=0;gt<te.locationSize;gt++)y(te.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let gt=0;gt<te.locationSize;gt++)C(te.location+gt,J/te.locationSize,Ye,F,We*ue,(Qe+J/te.locationSize*gt)*ue,_e)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<te.locationSize;xe++)S(te.location+xe,de.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<te.locationSize;xe++)y(te.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let xe=0;xe<te.locationSize;xe++)C(te.location+xe,J/te.locationSize,Ye,F,J*ue,J/te.locationSize*xe*ue,_e)}}else if(W!==void 0){const F=W[K];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(te.location,F);break;case 3:i.vertexAttrib3fv(te.location,F);break;case 4:i.vertexAttrib4fv(te.location,F);break;default:i.vertexAttrib1fv(te.location,F)}}}}T()}function D(){N();for(const B in r){const q=r[B];for(const Q in q){const ee=q[Q];for(const ie in ee){const G=ee[ie];for(const W in G)v(G[W].object),delete G[W];delete ee[ie]}}delete r[B]}}function L(B){if(r[B.id]===void 0)return;const q=r[B.id];for(const Q in q){const ee=q[Q];for(const ie in ee){const G=ee[ie];for(const W in G)v(G[W].object),delete G[W];delete ee[ie]}}delete r[B.id]}function k(B){for(const q in r){const Q=r[q];for(const ee in Q){const ie=Q[ee];if(ie[B.id]===void 0)continue;const G=ie[B.id];for(const W in G)v(G[W].object),delete G[W];delete ie[B.id]}}}function M(B){for(const q in r){const Q=r[q],ee=B.isInstancedMesh===!0?B.id:0,ie=Q[ee];if(ie!==void 0){for(const G in ie){const W=ie[G];for(const K in W)v(W[K].object),delete W[K];delete ie[G]}delete Q[ee],Object.keys(Q).length===0&&delete r[q]}}}function N(){re(),u=!0,o!==a&&(o=a,f(o.object))}function re(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:N,resetDefaultState:re,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:y,disableUnusedAttributes:T}}function RR(i,e,t){let r;function a(f){r=f}function o(f,v){i.drawArrays(r,f,v),t.update(v,r,1)}function u(f,v,g){g!==0&&(i.drawArraysInstanced(r,f,v,g),t.update(v,r,g))}function c(f,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,v,0,g);let _=0;for(let E=0;E<g;E++)_+=v[E];t.update(_,r,1)}function h(f,v,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let E=0;E<f.length;E++)u(f[E],v[E],m[E]);else{_.multiDrawArraysInstancedWEBGL(r,f,0,v,0,m,0,g);let E=0;for(let w=0;w<g;w++)E+=v[w]*m[w];t.update(E,r,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function CR(i,e,t,r){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Ci&&r.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(k){const M=k===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==gi&&r.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ri&&!M)}function h(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const v=h(f);v!==f&&(ht("WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:P,maxSamples:D,samples:L}}function PR(i){const e=this;let t=null,r=0,a=!1,o=!1;const u=new ks,c=new Rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||r!==0||a;return a=m,r=g.length,_},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=v(g,m,0)},this.setState=function(g,m,_){const E=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,S=i.get(g);if(!a||E===null||E.length===0||o&&!y)o?v(null):f();else{const T=o?0:r,C=T*4;let P=S.clippingState||null;h.value=P,P=v(E,m,C,_);for(let D=0;D!==C;++D)P[D]=t[D];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,m,_,E){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const S=_+w*4,T=m.matrixWorldInverse;c.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,P=_;C!==w;++C,P+=4)u.copy(g[C]).applyMatrix4(T,c),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const _s=4,Sv=[.125,.215,.35,.446,.526,.582],zs=20,NR=256,Bo=new _p,Mv=new Bt;let Bf=null,zf=0,Vf=0,Hf=!1;const LR=new le;class Ev{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,o={}){const{size:u=256,position:c=LR}=o;Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Vf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Fr,format:Ci,colorSpace:Ha,depthBuffer:!1},a=wv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(e,t,r);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DR(o)),this._blurMaterial=UR(o,e,t),this._ggxMaterial=IR(o,e,t)}return a}_compileMaterial(e){const t=new vi(new Di,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,r,a,o){const h=new si(90,1,t,r),f=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(Mv),g.toneMapping=or,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new ll,new Z_({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,S=!0):(y.color.copy(Mv),S=!0);for(let C=0;C<6;C++){const P=C%3;P===0?(h.up.set(0,f[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+v[C],o.y,o.z)):P===1?(h.up.set(0,0,f[C]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+v[C],o.z)):(h.up.set(0,f[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+v[C]));const D=this._cubeSize;Na(a,P*D,C>2?D:0,D,D),g.setRenderTarget(a),S&&g.render(w,h),g.render(e,h)}g.toneMapping=_,g.autoClear=m,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ws||e.mapping===za;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;Na(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Bo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[r];c.material=u;const h=u.uniforms,f=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-v*v),m=0+f*1.25,_=g*m,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-_s?r-E+_s:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=E-t,Na(o,y,S,3*w,2*w),a.setRenderTarget(o),a.render(c,Bo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=E-r,Na(e,y,S,3*w,2*w),a.setRenderTarget(e),a.render(c,Bo)}_blur(e,t,r,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",o),this._halfBlur(u,e,r,r,a,"longitudinal",o)}_halfBlur(e,t,r,a,o,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[a];g.material=f;const m=f.uniforms,_=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*zs-1),w=o/E,y=isFinite(o)?1+Math.floor(v*w):zs;y>zs&&ht(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zs}`);const S=[];let T=0;for(let k=0;k<zs;++k){const M=k/w,N=Math.exp(-M*M/2);S.push(N),k===0?T+=N:k<y&&(T+=2*N)}for(let k=0;k<S.length;k++)S[k]=S[k]/T;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=u==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:C}=this;m.dTheta.value=E,m.mipInt.value=C-r;const P=this._sizeLods[a],D=3*P*(a>C-_s?a-C+_s:0),L=4*(this._cubeSize-P);Na(t,D,L,3*P,2*P),h.setRenderTarget(t),h.render(g,Bo)}}function DR(i){const e=[],t=[],r=[];let a=i;const o=i-_s+1+Sv.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);e.push(c);let h=1/c;u>i-_s?h=Sv[u-i+_s-1]:u===0&&(h=0),t.push(h);const f=1/(c-2),v=-f,g=1+f,m=[v,v,g,v,g,g,v,v,g,g,v,g],_=6,E=6,w=3,y=2,S=1,T=new Float32Array(w*E*_),C=new Float32Array(y*E*_),P=new Float32Array(S*E*_);for(let L=0;L<_;L++){const k=L%3*2/3-1,M=L>2?0:-1,N=[k,M,0,k+2/3,M,0,k+2/3,M+1,0,k,M,0,k+2/3,M+1,0,k,M+1,0];T.set(N,w*E*L),C.set(m,y*E*L);const re=[L,L,L,L,L,L];P.set(re,S*E*L)}const D=new Di;D.setAttribute("position",new Pi(T,w)),D.setAttribute("uv",new Pi(C,y)),D.setAttribute("faceIndex",new Pi(P,S)),r.push(new vi(D,null)),a>_s&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function wv(i,e,t){const r=new lr(i,e,t);return r.texture.mapping=pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Na(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function IR(i,e,t){return new fr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function UR(i,e,t){const r=new Float32Array(zs),a=new le(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function bv(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Tv(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lx extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ex(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ll(5,5,5),o=new fr({name:"CubemapFromEquirect",uniforms:Wa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Ir});o.uniforms.tEquirect.value=t;const u=new vi(a,o),c=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Wn),new Db(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(o)}}function FR(i){let e=new WeakMap,t=new WeakMap,r=null;function a(m,_=!1){return m==null?null:_?u(m):o(m)}function o(m){if(m&&m.isTexture){const _=m.mapping;if(_===lf||_===uf)if(e.has(m)){const E=e.get(m).texture;return c(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const w=new lx(E.height);return w.fromEquirectangularTexture(i,m),e.set(m,w),m.addEventListener("dispose",f),c(w.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const _=m.mapping,E=_===lf||_===uf,w=_===Ws||_===za;if(E||w){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return r===null&&(r=new Ev(i)),y=E?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const T=m.image;return E&&T&&T.height>0||w&&T&&h(T)?(r===null&&(r=new Ev(i)),y=E?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",v),y.texture):null}}}return m}function c(m,_){return _===lf?m.mapping=Ws:_===uf&&(m.mapping=za),m}function h(m){let _=0;const E=6;for(let w=0;w<E;w++)m[w]!==void 0&&_++;return _===E}function f(m){const _=m.target;_.removeEventListener("dispose",f);const E=e.get(_);E!==void 0&&(e.delete(_),E.dispose())}function v(m){const _=m.target;_.removeEventListener("dispose",v);const E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:g}}function OR(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&sc("WebGLRenderer: "+r+" extension not supported."),a}}}function kR(i,e,t,r){const a={},o=new WeakMap;function u(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",u),delete a[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(g,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function f(g){const m=[],_=g.index,E=g.attributes.position;let w=0;if(E===void 0)return;if(_!==null){const T=_.array;w=_.version;for(let C=0,P=T.length;C<P;C+=3){const D=T[C+0],L=T[C+1],k=T[C+2];m.push(D,L,L,k,k,D)}}else{const T=E.array;w=E.version;for(let C=0,P=T.length/3-1;C<P;C+=3){const D=C+0,L=C+1,k=C+2;m.push(D,L,L,k,k,D)}}const y=new(E.count>=65535?q_:Y_)(m,1);y.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,y)}function v(g){const m=o.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&f(g)}else f(g);return o.get(g)}return{get:c,update:h,getWireframeAttribute:v}}function BR(i,e,t){let r;function a(m){r=m}let o,u;function c(m){o=m.type,u=m.bytesPerElement}function h(m,_){i.drawElements(r,_,o,m*u),t.update(_,r,1)}function f(m,_,E){E!==0&&(i.drawElementsInstanced(r,_,o,m*u,E),t.update(_,r,E))}function v(m,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,o,m,0,E);let y=0;for(let S=0;S<E;S++)y+=_[S];t.update(y,r,1)}function g(m,_,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<m.length;S++)f(m[S]/u,_[S],w[S]);else{y.multiDrawElementsInstancedWEBGL(r,_,0,o,m,0,w,0,E);let S=0;for(let T=0;T<E;T++)S+=_[T]*w[T];t.update(S,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function zR(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:Mt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function VR(i,e,t){const r=new WeakMap,a=new ln;function o(u,c,h){const f=u.morphTargetInfluences,v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(c);if(m===void 0||m.count!==g){let N=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let C=0;_===!0&&(C=1),E===!0&&(C=2),w===!0&&(C=3);let P=c.attributes.position.count*C,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*D*4*g),k=new j_(L,P,D,g);k.type=Ri,k.needsUpdate=!0;const M=C*4;for(let re=0;re<g;re++){const B=y[re],q=S[re],Q=T[re],ee=P*D*4*re;for(let ie=0;ie<B.count;ie++){const G=ie*M;_===!0&&(a.fromBufferAttribute(B,ie),L[ee+G+0]=a.x,L[ee+G+1]=a.y,L[ee+G+2]=a.z,L[ee+G+3]=0),E===!0&&(a.fromBufferAttribute(q,ie),L[ee+G+4]=a.x,L[ee+G+5]=a.y,L[ee+G+6]=a.z,L[ee+G+7]=0),w===!0&&(a.fromBufferAttribute(Q,ie),L[ee+G+8]=a.x,L[ee+G+9]=a.y,L[ee+G+10]=a.z,L[ee+G+11]=Q.itemSize===4?a.w:1)}}m={count:g,texture:k,size:new Zt(P,D)},r.set(c,m),c.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let _=0;for(let w=0;w<f.length;w++)_+=f[w];const E=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function HR(i,e,t,r,a){let o=new WeakMap;function u(f){const v=a.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==v&&(e.update(m),o.set(m,v)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==v&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,v))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==v&&(_.update(),o.set(_,v))}return m}function c(){o=new WeakMap}function h(f){const v=f.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:c}}const GR={[C_]:"LINEAR_TONE_MAPPING",[P_]:"REINHARD_TONE_MAPPING",[N_]:"CINEON_TONE_MAPPING",[L_]:"ACES_FILMIC_TONE_MAPPING",[I_]:"AGX_TONE_MAPPING",[U_]:"NEUTRAL_TONE_MAPPING",[D_]:"CUSTOM_TONE_MAPPING"};function WR(i,e,t,r,a){const o=new lr(e,t,{type:i,depthBuffer:r,stencilBuffer:a}),u=new lr(e,t,{type:Fr,depthBuffer:!1,stencilBuffer:!1}),c=new Di;c.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oi([0,2,0,0,2,0],2));const h=new fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vi(c,h),v=new _p(-1,1,1,-1,0,1);let g=null,m=null,_=!1,E,w=null,y=[],S=!1;this.setSize=function(T,C){o.setSize(T,C),u.setSize(T,C);for(let P=0;P<y.length;P++){const D=y[P];D.setSize&&D.setSize(T,C)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const C=o.width,P=o.height;for(let D=0;D<y.length;D++){const L=y[D];L.setSize&&L.setSize(C,P)}},this.begin=function(T,C){if(_||T.toneMapping===or&&y.length===0)return!1;if(w=C,C!==null){const P=C.width,D=C.height;(o.width!==P||o.height!==D)&&this.setSize(P,D)}return S===!1&&T.setRenderTarget(o),E=T.toneMapping,T.toneMapping=or,!0},this.hasRenderPass=function(){return S},this.end=function(T,C){T.toneMapping=E,_=!0;let P=o,D=u;for(let L=0;L<y.length;L++){const k=y[L];if(k.enabled!==!1&&(k.render(T,D,P,C),k.needsSwap!==!1)){const M=P;P=D,D=M}}if(g!==T.outputColorSpace||m!==T.toneMapping){g=T.outputColorSpace,m=T.toneMapping,h.defines={},Xt.getTransfer(g)===Qt&&(h.defines.SRGB_TRANSFER="");const L=GR[m];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,T.setRenderTarget(w),T.render(f,v),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),u.dispose(),c.dispose(),h.dispose()}}const ux=new jn,zh=new tl(1,1),cx=new j_,dx=new kw,fx=new ex,Av=[],Rv=[],Cv=new Float32Array(16),Pv=new Float32Array(9),Nv=new Float32Array(4);function Ya(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let o=Av[a];if(o===void 0&&(o=new Float32Array(a),Av[a]=o),e!==0){r.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(o,c)}return o}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function yc(i,e){let t=Rv[e];t===void 0&&(t=new Int32Array(e),Rv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function jR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function XR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function $R(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function YR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function qR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;Nv.set(r),i.uniformMatrix2fv(this.addr,!1,Nv),An(t,r)}}function KR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;Pv.set(r),i.uniformMatrix3fv(this.addr,!1,Pv),An(t,r)}}function ZR(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,r))return;Cv.set(r),i.uniformMatrix4fv(this.addr,!1,Cv),An(t,r)}}function JR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function QR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function eC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function tC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function nC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function rC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function sC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function aC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(zh.compareFunction=t.isReversedDepthBuffer()?dp:cp,o=zh):o=ux,t.setTexture2D(e||o,a)}function oC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||dx,a)}function lC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||fx,a)}function uC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||cx,a)}function cC(i){switch(i){case 5126:return jR;case 35664:return XR;case 35665:return $R;case 35666:return YR;case 35674:return qR;case 35675:return KR;case 35676:return ZR;case 5124:case 35670:return JR;case 35667:case 35671:return QR;case 35668:case 35672:return eC;case 35669:case 35673:return tC;case 5125:return nC;case 36294:return iC;case 36295:return rC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return uC}}function dC(i,e){i.uniform1fv(this.addr,e)}function fC(i,e){const t=Ya(e,this.size,2);i.uniform2fv(this.addr,t)}function hC(i,e){const t=Ya(e,this.size,3);i.uniform3fv(this.addr,t)}function pC(i,e){const t=Ya(e,this.size,4);i.uniform4fv(this.addr,t)}function mC(i,e){const t=Ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gC(i,e){const t=Ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vC(i,e){const t=Ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _C(i,e){i.uniform1iv(this.addr,e)}function xC(i,e){i.uniform2iv(this.addr,e)}function yC(i,e){i.uniform3iv(this.addr,e)}function SC(i,e){i.uniform4iv(this.addr,e)}function MC(i,e){i.uniform1uiv(this.addr,e)}function EC(i,e){i.uniform2uiv(this.addr,e)}function wC(i,e){i.uniform3uiv(this.addr,e)}function bC(i,e){i.uniform4uiv(this.addr,e)}function TC(i,e,t){const r=this.cache,a=e.length,o=yc(t,a);Tn(r,o)||(i.uniform1iv(this.addr,o),An(r,o));let u;this.type===i.SAMPLER_2D_SHADOW?u=zh:u=ux;for(let c=0;c!==a;++c)t.setTexture2D(e[c]||u,o[c])}function AC(i,e,t){const r=this.cache,a=e.length,o=yc(t,a);Tn(r,o)||(i.uniform1iv(this.addr,o),An(r,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||dx,o[u])}function RC(i,e,t){const r=this.cache,a=e.length,o=yc(t,a);Tn(r,o)||(i.uniform1iv(this.addr,o),An(r,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||fx,o[u])}function CC(i,e,t){const r=this.cache,a=e.length,o=yc(t,a);Tn(r,o)||(i.uniform1iv(this.addr,o),An(r,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||cx,o[u])}function PC(i){switch(i){case 5126:return dC;case 35664:return fC;case 35665:return hC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return _C;case 35667:case 35671:return xC;case 35668:case 35672:return yC;case 35669:case 35673:return SC;case 5125:return MC;case 36294:return EC;case 36295:return wC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return CC}}class NC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cC(t.type)}}class LC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PC(t.type)}}class DC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],r)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function Lv(i,e){i.seq.push(e),i.map[e.id]=e}function IC(i,e,t){const r=i.name,a=r.length;for(Gf.lastIndex=0;;){const o=Gf.exec(r),u=Gf.lastIndex;let c=o[1];const h=o[2]==="]",f=o[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===a){Lv(t,f===void 0?new NC(c,i,e):new LC(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new DC(c),Lv(t,g)),t=g}}}class ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const c=e.getActiveUniform(t,u),h=e.getUniformLocation(t,c.name);IC(c,h,this)}const a=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):o.push(u);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,r,a){const o=this.map[t];o!==void 0&&o.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Dv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const UC=37297;let FC=0;function OC(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const Iv=new Rt;function kC(i){Xt._getMatrix(Iv,Xt.workingColorSpace,i);const e=`mat3( ${Iv.elements.map(t=>t.toFixed(4))} )`;switch(Xt.getTransfer(i)){case ic:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uv(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+OC(i.getShaderSource(e),c)}else return o}function BC(i,e){const t=kC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zC={[C_]:"Linear",[P_]:"Reinhard",[N_]:"Cineon",[L_]:"ACESFilmic",[I_]:"AgX",[U_]:"Neutral",[D_]:"Custom"};function VC(i,e){const t=zC[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wu=new le;function HC(){Xt.getLuminanceCoefficients(Wu);const i=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function WC(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jC(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=i.getActiveAttrib(e,a),u=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function Wo(i){return i!==""}function Fv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ov(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(XC,YC)}const $C=new Map;function YC(i,e){let t=Pt[e];if(t===void 0){const r=$C.get(e);if(r!==void 0)t=Pt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vh(t)}const qC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(i){return i.replace(qC,KC)}function KC(i,e,t,r){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Bv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZC={[qu]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function JC(i){return ZC[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QC={[Ws]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function e2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":QC[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const t2={[za]:"ENVMAP_MODE_REFRACTION"};function n2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i2={[R_]:"ENVMAP_BLENDING_MULTIPLY",[Q1]:"ENVMAP_BLENDING_MIX",[ew]:"ENVMAP_BLENDING_ADD"};function r2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":i2[i.combine]||"ENVMAP_BLENDING_NONE"}function s2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function a2(i,e,t,r){const a=i.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=JC(t),f=e2(t),v=n2(t),g=r2(t),m=s2(t),_=GC(t),E=WC(o),w=a.createProgram();let y,S,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wo).join(`
`),S.length>0&&(S+=`
`)):(y=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),S=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Pt.tonemapping_pars_fragment:"",t.toneMapping!==or?VC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,BC("linearToOutputTexel",t.outputColorSpace),HC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),u=Vh(u),u=Fv(u,t),u=Ov(u,t),c=Vh(c),c=Fv(c,t),c=Ov(c,t),u=kv(u),c=kv(c),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=T+y+u,P=T+S+c,D=Dv(a,a.VERTEX_SHADER,C),L=Dv(a,a.FRAGMENT_SHADER,P);a.attachShader(w,D),a.attachShader(w,L),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(B){if(i.debug.checkShaderErrors){const q=a.getProgramInfoLog(w)||"",Q=a.getShaderInfoLog(D)||"",ee=a.getShaderInfoLog(L)||"",ie=q.trim(),G=Q.trim(),W=ee.trim();let K=!0,te=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,D,L);else{const de=Uv(a,D,"vertex"),F=Uv(a,L,"fragment");Mt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+de+`
`+F)}else ie!==""?ht("WebGLProgram: Program Info Log:",ie):(G===""||W==="")&&(te=!1);te&&(B.diagnostics={runnable:K,programLog:ie,vertexShader:{log:G,prefix:y},fragmentShader:{log:W,prefix:S}})}a.deleteShader(D),a.deleteShader(L),M=new ec(a,w),N=jC(a,w)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let re=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return re===!1&&(re=a.getProgramParameter(w,UC)),re},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FC++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=L,this}let o2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new u2(e),t.set(e,r)),r}}class u2{constructor(e){this.id=o2++,this.code=e,this.usedTimes=0}}function c2(i,e,t,r,a,o){const u=new X_,c=new l2,h=new Set,f=[],v=new Map,g=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return h.add(M),M===0?"uv":`uv${M}`}function w(M,N,re,B,q){const Q=B.fog,ee=q.geometry,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=e.get(M.envMap||ie,G),K=W&&W.mapping===pc?W.image.height:null,te=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&ht("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const de=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,F=de!==void 0?de.length:0;let J=0;ee.morphAttributes.position!==void 0&&(J=1),ee.morphAttributes.normal!==void 0&&(J=2),ee.morphAttributes.color!==void 0&&(J=3);let we,Be,Ye,ue;if(te){const Dt=rr[te];we=Dt.vertexShader,Be=Dt.fragmentShader}else we=M.vertexShader,Be=M.fragmentShader,c.update(M),Ye=c.getVertexShaderID(M),ue=c.getFragmentShaderID(M);const _e=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),We=q.isInstancedMesh===!0,Qe=q.isBatchedMesh===!0,gt=!!M.map,dn=!!M.matcap,pt=!!W,Ct=!!M.aoMap,Gt=!!M.lightMap,Tt=!!M.bumpMap,Wt=!!M.normalMap,V=!!M.displacementMap,rn=!!M.emissiveMap,Nt=!!M.metalnessMap,Ht=!!M.roughnessMap,et=M.anisotropy>0,I=M.clearcoat>0,b=M.dispersion>0,$=M.iridescence>0,ve=M.sheen>0,ye=M.transmission>0,me=et&&!!M.anisotropyMap,je=I&&!!M.clearcoatMap,Ae=I&&!!M.clearcoatNormalMap,rt=I&&!!M.clearcoatRoughnessMap,vt=$&&!!M.iridescenceMap,be=$&&!!M.iridescenceThicknessMap,Ne=ve&&!!M.sheenColorMap,Xe=ve&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,ze=!!M.specularColorMap,bt=!!M.specularIntensityMap,j=ye&&!!M.transmissionMap,De=ye&&!!M.thicknessMap,Re=!!M.gradientMap,Ve=!!M.alphaMap,Te=M.alphaTest>0,ge=!!M.alphaHash,Ze=!!M.extensions;let yt=or;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(yt=i.toneMapping);const $t={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:Be,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&q._colorsTexture!==null,instancing:We,instancingColor:We&&q.instanceColor!==null,instancingMorph:We&&q.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ha,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:dn,envMap:pt,envMapMode:pt&&W.mapping,envMapCubeUVHeight:K,aoMap:Ct,lightMap:Gt,bumpMap:Tt,normalMap:Wt,displacementMap:V,emissiveMap:rn,normalMapObjectSpace:Wt&&M.normalMapType===sw,normalMapTangentSpace:Wt&&M.normalMapType===G_,metalnessMap:Nt,roughnessMap:Ht,anisotropy:et,anisotropyMap:me,clearcoat:I,clearcoatMap:je,clearcoatNormalMap:Ae,clearcoatRoughnessMap:rt,dispersion:b,iridescence:$,iridescenceMap:vt,iridescenceThicknessMap:be,sheen:ve,sheenColorMap:Ne,sheenRoughnessMap:Xe,specularMap:Ke,specularColorMap:ze,specularIntensityMap:bt,transmission:ye,transmissionMap:j,thicknessMap:De,gradientMap:Re,opaque:M.transparent===!1&&M.blending===Fa&&M.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Te,alphaHash:ge,combine:M.combine,mapUv:gt&&E(M.map.channel),aoMapUv:Ct&&E(M.aoMap.channel),lightMapUv:Gt&&E(M.lightMap.channel),bumpMapUv:Tt&&E(M.bumpMap.channel),normalMapUv:Wt&&E(M.normalMap.channel),displacementMapUv:V&&E(M.displacementMap.channel),emissiveMapUv:rn&&E(M.emissiveMap.channel),metalnessMapUv:Nt&&E(M.metalnessMap.channel),roughnessMapUv:Ht&&E(M.roughnessMap.channel),anisotropyMapUv:me&&E(M.anisotropyMap.channel),clearcoatMapUv:je&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&E(M.sheenRoughnessMap.channel),specularMapUv:Ke&&E(M.specularMap.channel),specularColorMapUv:ze&&E(M.specularColorMap.channel),specularIntensityMapUv:bt&&E(M.specularIntensityMap.channel),transmissionMapUv:j&&E(M.transmissionMap.channel),thicknessMapUv:De&&E(M.thicknessMap.channel),alphaMapUv:Ve&&E(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Wt||et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(gt||Ve),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||ee.attributes.normal===void 0&&Wt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xe,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&re.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:rn&&M.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pr,flipSided:M.side===ai,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $t.vertexUv1s=h.has(1),$t.vertexUv2s=h.has(2),$t.vertexUv3s=h.has(3),h.clear(),$t}function y(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const re in M.defines)N.push(re),N.push(M.defines[re]);return M.isRawShaderMaterial===!1&&(S(N,M),T(N,M),N.push(i.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function S(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function T(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),M.push(u.mask)}function C(M){const N=_[M.type];let re;if(N){const B=rr[N];re=ub.clone(B.uniforms)}else re=M.uniforms;return re}function P(M,N){let re=v.get(N);return re!==void 0?++re.usedTimes:(re=new a2(i,N,M,a),f.push(re),v.set(N,re)),re}function D(M){if(--M.usedTimes===0){const N=f.indexOf(M);f[N]=f[f.length-1],f.pop(),v.delete(M.cacheKey),M.destroy()}}function L(M){c.remove(M)}function k(){c.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:C,acquireProgram:P,releaseProgram:D,releaseShaderCache:L,programs:f,dispose:k}}function d2(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function r(u){i.delete(u)}function a(u,c,h){i.get(u)[c]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:o}}function f2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vv(){const i=[];let e=0;const t=[],r=[],a=[];function o(){e=0,t.length=0,r.length=0,a.length=0}function u(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function c(m,_,E,w,y,S){let T=i[e];return T===void 0?(T={id:m.id,object:m,geometry:_,material:E,materialVariant:u(m),groupOrder:w,renderOrder:m.renderOrder,z:y,group:S},i[e]=T):(T.id=m.id,T.object=m,T.geometry=_,T.material=E,T.materialVariant=u(m),T.groupOrder=w,T.renderOrder=m.renderOrder,T.z=y,T.group=S),e++,T}function h(m,_,E,w,y,S){const T=c(m,_,E,w,y,S);E.transmission>0?r.push(T):E.transparent===!0?a.push(T):t.push(T)}function f(m,_,E,w,y,S){const T=c(m,_,E,w,y,S);E.transmission>0?r.unshift(T):E.transparent===!0?a.unshift(T):t.unshift(T)}function v(m,_){t.length>1&&t.sort(m||f2),r.length>1&&r.sort(_||zv),a.length>1&&a.sort(_||zv)}function g(){for(let m=e,_=i.length;m<_;m++){const E=i[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:o,push:h,unshift:f,finish:g,sort:v}}function h2(){let i=new WeakMap;function e(r,a){const o=i.get(r);let u;return o===void 0?(u=new Vv,i.set(r,[u])):a>=o.length?(u=new Vv,o.push(u)):u=o[a],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function p2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Bt};break;case"SpotLight":t={position:new le,direction:new le,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new le,halfWidth:new le,halfHeight:new le};break}return i[e.id]=t,t}}}function m2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g2=0;function v2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _2(i){const e=new p2,t=m2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new le);const a=new le,o=new Vt,u=new Vt;function c(f){let v=0,g=0,m=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,E=0,w=0,y=0,S=0,T=0,C=0,P=0,D=0,L=0,k=0;f.sort(v2);for(let N=0,re=f.length;N<re;N++){const B=f[N],q=B.color,Q=B.intensity,ee=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Va?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=q.r*Q,g+=q.g*Q,m+=q.b*Q;else if(B.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],Q);k++}else if(B.isDirectionalLight){const G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,K=t.get(B);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=ie,r.directionalShadowMatrix[_]=B.shadow.matrix,T++}r.directional[_]=G,_++}else if(B.isSpotLight){const G=e.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(q).multiplyScalar(Q),G.distance=ee,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,r.spot[w]=G;const W=B.shadow;if(B.map&&(r.spotLightMap[D]=B.map,D++,W.updateMatrices(B),B.castShadow&&L++),r.spotLightMatrix[w]=W.matrix,B.castShadow){const K=t.get(B);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.spotShadow[w]=K,r.spotShadowMap[w]=ie,P++}w++}else if(B.isRectAreaLight){const G=e.get(B);G.color.copy(q).multiplyScalar(Q),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=G,y++}else if(B.isPointLight){const G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){const W=B.shadow,K=t.get(B);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=ie,r.pointShadowMatrix[E]=B.shadow.matrix,C++}r.point[E]=G,E++}else if(B.isHemisphereLight){const G=e.get(B);G.skyColor.copy(B.color).multiplyScalar(Q),G.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[S]=G,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=m;const M=r.hash;(M.directionalLength!==_||M.pointLength!==E||M.spotLength!==w||M.rectAreaLength!==y||M.hemiLength!==S||M.numDirectionalShadows!==T||M.numPointShadows!==C||M.numSpotShadows!==P||M.numSpotMaps!==D||M.numLightProbes!==k)&&(r.directional.length=_,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+D-L,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,M.directionalLength=_,M.pointLength=E,M.spotLength=w,M.rectAreaLength=y,M.hemiLength=S,M.numDirectionalShadows=T,M.numPointShadows=C,M.numSpotShadows=P,M.numSpotMaps=D,M.numLightProbes=k,r.version=g2++)}function h(f,v){let g=0,m=0,_=0,E=0,w=0;const y=v.matrixWorldInverse;for(let S=0,T=f.length;S<T;S++){const C=f[S];if(C.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),g++}else if(C.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),_++}else if(C.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),u.identity(),o.copy(C.matrixWorld),o.premultiply(y),u.extractRotation(o),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),m++}else if(C.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:c,setupView:h,state:r}}function Hv(i){const e=new _2(i),t=[],r=[];function a(v){f.camera=v,t.length=0,r.length=0}function o(v){t.push(v)}function u(v){r.push(v)}function c(){e.setup(t)}function h(v){e.setupView(t,v)}const f={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:u}}function x2(i){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let c;return u===void 0?(c=new Hv(i),e.set(a,[c])):o>=u.length?(c=new Hv(i),u.push(c)):c=u[o],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M2=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],E2=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Gv=new Vt,zo=new le,Wf=new le;function w2(i,e,t){let r=new mp;const a=new Zt,o=new Zt,u=new ln,c=new hb,h=new pb,f={},v=t.maxTextureSize,g={[xs]:ai,[ai]:xs,[Pr]:Pr},m=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:y2,fragmentShader:S2}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(E,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let S=this.type;this.render=function(L,k,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===I1&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qu);const N=i.getRenderTarget(),re=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ir),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=S!==this.type;Q&&k.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(ie=>ie.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,ie=L.length;ee<ie;ee++){const G=L[ee],W=G.shadow;if(W===void 0){ht("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const K=W.getFrameExtents();a.multiply(K),o.copy(W.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(o.x=Math.floor(v/K.x),a.x=o.x*K.x,W.mapSize.x=o.x),a.y>v&&(o.y=Math.floor(v/K.y),a.y=o.y*K.y,W.mapSize.y=o.y));const te=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||Q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Go){if(G.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new lr(a.x,a.y,{format:Va,type:Fr,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new tl(a.x,a.y,Ri),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=Or,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn}else G.isPointLight?(W.map=new lx(a.x),W.map.depthTexture=new ob(a.x,cr)):(W.map=new lr(a.x,a.y),W.map.depthTexture=new tl(a.x,a.y,cr)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=Or,this.type===qu?(W.map.depthTexture.compareFunction=te?dp:cp,W.map.depthTexture.minFilter=Wn,W.map.depthTexture.magFilter=Wn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn);W.camera.updateProjectionMatrix()}const de=W.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<de;F++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,F),i.clear();else{F===0&&(i.setRenderTarget(W.map),i.clear());const J=W.getViewport(F);u.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),q.viewport(u)}if(G.isPointLight){const J=W.camera,we=W.matrix,Be=G.distance||J.far;Be!==J.far&&(J.far=Be,J.updateProjectionMatrix()),zo.setFromMatrixPosition(G.matrixWorld),J.position.copy(zo),Wf.copy(J.position),Wf.add(M2[F]),J.up.copy(E2[F]),J.lookAt(Wf),J.updateMatrixWorld(),we.makeTranslation(-zo.x,-zo.y,-zo.z),Gv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Gv,J.coordinateSystem,J.reversedDepth)}else W.updateMatrices(G);r=W.getFrustum(),P(k,M,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===Go&&T(W,M),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(N,re,B)};function T(L,k){const M=e.update(w);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new lr(a.x,a.y,{format:Va,type:Fr})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,M,m,w,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,M,_,w,null)}function C(L,k,M,N){let re=null;const B=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)re=B;else if(re=M.isPointLight===!0?h:c,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=re.uuid,Q=k.uuid;let ee=f[q];ee===void 0&&(ee={},f[q]=ee);let ie=ee[Q];ie===void 0&&(ie=re.clone(),ee[Q]=ie,k.addEventListener("dispose",D)),re=ie}if(re.visible=k.visible,re.wireframe=k.wireframe,N===Go?re.side=k.shadowSide!==null?k.shadowSide:k.side:re.side=k.shadowSide!==null?k.shadowSide:g[k.side],re.alphaMap=k.alphaMap,re.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,re.map=k.map,re.clipShadows=k.clipShadows,re.clippingPlanes=k.clippingPlanes,re.clipIntersection=k.clipIntersection,re.displacementMap=k.displacementMap,re.displacementScale=k.displacementScale,re.displacementBias=k.displacementBias,re.wireframeLinewidth=k.wireframeLinewidth,re.linewidth=k.linewidth,M.isPointLight===!0&&re.isMeshDistanceMaterial===!0){const q=i.properties.get(re);q.light=M}return re}function P(L,k,M,N,re){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&re===Go)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const Q=e.update(L),ee=L.material;if(Array.isArray(ee)){const ie=Q.groups;for(let G=0,W=ie.length;G<W;G++){const K=ie[G],te=ee[K.materialIndex];if(te&&te.visible){const de=C(L,te,N,re);L.onBeforeShadow(i,L,k,M,Q,de,K),i.renderBufferDirect(M,null,Q,de,L,K),L.onAfterShadow(i,L,k,M,Q,de,K)}}}else if(ee.visible){const ie=C(L,ee,N,re);L.onBeforeShadow(i,L,k,M,Q,ie,null),i.renderBufferDirect(M,null,Q,ie,L,null),L.onAfterShadow(i,L,k,M,Q,ie,null)}}const q=L.children;for(let Q=0,ee=q.length;Q<ee;Q++)P(q[Q],k,M,N,re)}function D(L){L.target.removeEventListener("dispose",D);for(const M in f){const N=f[M],re=L.target.uuid;re in N&&(N[re].dispose(),delete N[re])}}}function b2(i,e){function t(){let j=!1;const De=new ln;let Re=null;const Ve=new ln(0,0,0,0);return{setMask:function(Te){Re!==Te&&!j&&(i.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){j=Te},setClear:function(Te,ge,Ze,yt,$t){$t===!0&&(Te*=yt,ge*=yt,Ze*=yt),De.set(Te,ge,Ze,yt),Ve.equals(De)===!1&&(i.clearColor(Te,ge,Ze,yt),Ve.copy(De))},reset:function(){j=!1,Re=null,Ve.set(-1,0,0,0)}}}function r(){let j=!1,De=!1,Re=null,Ve=null,Te=null;return{setReversed:function(ge){if(De!==ge){const Ze=e.get("EXT_clip_control");ge?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const yt=Te;Te=null,this.setClear(yt)}},getReversed:function(){return De},setTest:function(ge){ge?_e(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!j&&(i.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=gw[ge]),Ve!==ge){switch(ge){case Kf:i.depthFunc(i.NEVER);break;case Zf:i.depthFunc(i.ALWAYS);break;case Jf:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case Qf:i.depthFunc(i.EQUAL);break;case eh:i.depthFunc(i.GEQUAL);break;case th:i.depthFunc(i.GREATER);break;case nh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ve=ge}},setLocked:function(ge){j=ge},setClear:function(ge){Te!==ge&&(Te=ge,De&&(ge=1-ge),i.clearDepth(ge))},reset:function(){j=!1,Re=null,Ve=null,Te=null,De=!1}}}function a(){let j=!1,De=null,Re=null,Ve=null,Te=null,ge=null,Ze=null,yt=null,$t=null;return{setTest:function(Dt){j||(Dt?_e(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Dt){De!==Dt&&!j&&(i.stencilMask(Dt),De=Dt)},setFunc:function(Dt,Dn,Rn){(Re!==Dt||Ve!==Dn||Te!==Rn)&&(i.stencilFunc(Dt,Dn,Rn),Re=Dt,Ve=Dn,Te=Rn)},setOp:function(Dt,Dn,Rn){(ge!==Dt||Ze!==Dn||yt!==Rn)&&(i.stencilOp(Dt,Dn,Rn),ge=Dt,Ze=Dn,yt=Rn)},setLocked:function(Dt){j=Dt},setClear:function(Dt){$t!==Dt&&(i.clearStencil(Dt),$t=Dt)},reset:function(){j=!1,De=null,Re=null,Ve=null,Te=null,ge=null,Ze=null,yt=null,$t=null}}}const o=new t,u=new r,c=new a,h=new WeakMap,f=new WeakMap;let v={},g={},m=new WeakMap,_=[],E=null,w=!1,y=null,S=null,T=null,C=null,P=null,D=null,L=null,k=new Bt(0,0,0),M=0,N=!1,re=null,B=null,q=null,Q=null,ee=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=W>=2);let te=null,de={};const F=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),we=new ln().fromArray(F),Be=new ln().fromArray(J);function Ye(j,De,Re,Ve){const Te=new Uint8Array(4),ge=i.createTexture();i.bindTexture(j,ge),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Re;Ze++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(De+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ge}const ue={};ue[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),_e(i.DEPTH_TEST),u.setFunc(Ba),Tt(!1),Wt(T0),_e(i.CULL_FACE),Ct(Ir);function _e(j){v[j]!==!0&&(i.enable(j),v[j]=!0)}function xe(j){v[j]!==!1&&(i.disable(j),v[j]=!1)}function We(j,De){return g[j]!==De?(i.bindFramebuffer(j,De),g[j]=De,j===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=De),j===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Qe(j,De){let Re=_,Ve=!1;if(j){Re=m.get(De),Re===void 0&&(Re=[],m.set(De,Re));const Te=j.textures;if(Re.length!==Te.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ze=Te.length;ge<Ze;ge++)Re[ge]=i.COLOR_ATTACHMENT0+ge;Re.length=Te.length,Ve=!0}}else Re[0]!==i.BACK&&(Re[0]=i.BACK,Ve=!0);Ve&&i.drawBuffers(Re)}function gt(j){return E!==j?(i.useProgram(j),E=j,!0):!1}const dn={[Bs]:i.FUNC_ADD,[F1]:i.FUNC_SUBTRACT,[O1]:i.FUNC_REVERSE_SUBTRACT};dn[k1]=i.MIN,dn[B1]=i.MAX;const pt={[z1]:i.ZERO,[V1]:i.ONE,[H1]:i.SRC_COLOR,[Yf]:i.SRC_ALPHA,[Y1]:i.SRC_ALPHA_SATURATE,[X1]:i.DST_COLOR,[W1]:i.DST_ALPHA,[G1]:i.ONE_MINUS_SRC_COLOR,[qf]:i.ONE_MINUS_SRC_ALPHA,[$1]:i.ONE_MINUS_DST_COLOR,[j1]:i.ONE_MINUS_DST_ALPHA,[q1]:i.CONSTANT_COLOR,[K1]:i.ONE_MINUS_CONSTANT_COLOR,[Z1]:i.CONSTANT_ALPHA,[J1]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(j,De,Re,Ve,Te,ge,Ze,yt,$t,Dt){if(j===Ir){w===!0&&(xe(i.BLEND),w=!1);return}if(w===!1&&(_e(i.BLEND),w=!0),j!==U1){if(j!==y||Dt!==N){if((S!==Bs||P!==Bs)&&(i.blendEquation(i.FUNC_ADD),S=Bs,P=Bs),Dt)switch(j){case Fa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case A0:i.blendFunc(i.ONE,i.ONE);break;case R0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case C0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Mt("WebGLState: Invalid blending: ",j);break}else switch(j){case Fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case A0:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case R0:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",j);break}T=null,C=null,D=null,L=null,k.set(0,0,0),M=0,y=j,N=Dt}return}Te=Te||De,ge=ge||Re,Ze=Ze||Ve,(De!==S||Te!==P)&&(i.blendEquationSeparate(dn[De],dn[Te]),S=De,P=Te),(Re!==T||Ve!==C||ge!==D||Ze!==L)&&(i.blendFuncSeparate(pt[Re],pt[Ve],pt[ge],pt[Ze]),T=Re,C=Ve,D=ge,L=Ze),(yt.equals(k)===!1||$t!==M)&&(i.blendColor(yt.r,yt.g,yt.b,$t),k.copy(yt),M=$t),y=j,N=!1}function Gt(j,De){j.side===Pr?xe(i.CULL_FACE):_e(i.CULL_FACE);let Re=j.side===ai;De&&(Re=!Re),Tt(Re),j.blending===Fa&&j.transparent===!1?Ct(Ir):Ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),o.setMask(j.colorWrite);const Ve=j.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),rn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(j){re!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),re=j)}function Wt(j){j!==L1?(_e(i.CULL_FACE),j!==B&&(j===T0?i.cullFace(i.BACK):j===D1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),B=j}function V(j){j!==q&&(G&&i.lineWidth(j),q=j)}function rn(j,De,Re){j?(_e(i.POLYGON_OFFSET_FILL),(Q!==De||ee!==Re)&&(Q=De,ee=Re,u.getReversed()&&(De=-De),i.polygonOffset(De,Re))):xe(i.POLYGON_OFFSET_FILL)}function Nt(j){j?_e(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ht(j){j===void 0&&(j=i.TEXTURE0+ie-1),te!==j&&(i.activeTexture(j),te=j)}function et(j,De,Re){Re===void 0&&(te===null?Re=i.TEXTURE0+ie-1:Re=te);let Ve=de[Re];Ve===void 0&&(Ve={type:void 0,texture:void 0},de[Re]=Ve),(Ve.type!==j||Ve.texture!==De)&&(te!==Re&&(i.activeTexture(Re),te=Re),i.bindTexture(j,De||ue[j]),Ve.type=j,Ve.texture=De)}function I(){const j=de[te];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function ve(){try{i.texSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function ye(){try{i.texSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function je(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ae(){try{i.texStorage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function rt(){try{i.texStorage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function vt(){try{i.texImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function be(){try{i.texImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ne(j){we.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),we.copy(j))}function Xe(j){Be.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Be.copy(j))}function Ke(j,De){let Re=f.get(De);Re===void 0&&(Re=new WeakMap,f.set(De,Re));let Ve=Re.get(j);Ve===void 0&&(Ve=i.getUniformBlockIndex(De,j.name),Re.set(j,Ve))}function ze(j,De){const Ve=f.get(De).get(j);h.get(De)!==Ve&&(i.uniformBlockBinding(De,Ve,j.__bindingPointIndex),h.set(De,Ve))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},te=null,de={},g={},m=new WeakMap,_=[],E=null,w=!1,y=null,S=null,T=null,C=null,P=null,D=null,L=null,k=new Bt(0,0,0),M=0,N=!1,re=null,B=null,q=null,Q=null,ee=null,we.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:_e,disable:xe,bindFramebuffer:We,drawBuffers:Qe,useProgram:gt,setBlending:Ct,setMaterial:Gt,setFlipSided:Tt,setCullFace:Wt,setLineWidth:V,setPolygonOffset:rn,setScissorTest:Nt,activeTexture:Ht,bindTexture:et,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:vt,texImage3D:be,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:rt,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:me,compressedTexSubImage3D:je,scissor:Ne,viewport:Xe,reset:bt}}function T2(i,e,t,r,a,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Zt,v=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,b){return _?new OffscreenCanvas(I,b):el("canvas")}function w(I,b,$){let ve=1;const ye=et(I);if((ye.width>$||ye.height>$)&&(ve=$/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const me=Math.floor(ve*ye.width),je=Math.floor(ve*ye.height);g===void 0&&(g=E(me,je));const Ae=b?E(me,je):g;return Ae.width=me,Ae.height=je,Ae.getContext("2d").drawImage(I,0,0,me,je),ht("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+je+")."),Ae}else return"data"in I&&ht("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function y(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(I,b,$,ve,ye=!1){if(I!==null){if(i[I]!==void 0)return i[I];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=b;if(b===i.RED&&($===i.FLOAT&&(me=i.R32F),$===i.HALF_FLOAT&&(me=i.R16F),$===i.UNSIGNED_BYTE&&(me=i.R8)),b===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(me=i.R8UI),$===i.UNSIGNED_SHORT&&(me=i.R16UI),$===i.UNSIGNED_INT&&(me=i.R32UI),$===i.BYTE&&(me=i.R8I),$===i.SHORT&&(me=i.R16I),$===i.INT&&(me=i.R32I)),b===i.RG&&($===i.FLOAT&&(me=i.RG32F),$===i.HALF_FLOAT&&(me=i.RG16F),$===i.UNSIGNED_BYTE&&(me=i.RG8)),b===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(me=i.RG8UI),$===i.UNSIGNED_SHORT&&(me=i.RG16UI),$===i.UNSIGNED_INT&&(me=i.RG32UI),$===i.BYTE&&(me=i.RG8I),$===i.SHORT&&(me=i.RG16I),$===i.INT&&(me=i.RG32I)),b===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(me=i.RGB8UI),$===i.UNSIGNED_SHORT&&(me=i.RGB16UI),$===i.UNSIGNED_INT&&(me=i.RGB32UI),$===i.BYTE&&(me=i.RGB8I),$===i.SHORT&&(me=i.RGB16I),$===i.INT&&(me=i.RGB32I)),b===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),$===i.UNSIGNED_INT&&(me=i.RGBA32UI),$===i.BYTE&&(me=i.RGBA8I),$===i.SHORT&&(me=i.RGBA16I),$===i.INT&&(me=i.RGBA32I)),b===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),b===i.RGBA){const je=ye?ic:Xt.getTransfer(ve);$===i.FLOAT&&(me=i.RGBA32F),$===i.HALF_FLOAT&&(me=i.RGBA16F),$===i.UNSIGNED_BYTE&&(me=je===Qt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(I,b){let $;return I?b===null||b===cr||b===Jo?$=i.DEPTH24_STENCIL8:b===Ri?$=i.DEPTH32F_STENCIL8:b===Zo&&($=i.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===cr||b===Jo?$=i.DEPTH_COMPONENT24:b===Ri?$=i.DEPTH_COMPONENT32F:b===Zo&&($=i.DEPTH_COMPONENT16),$}function D(I,b){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function L(I){const b=I.target;b.removeEventListener("dispose",L),M(b),b.isVideoTexture&&v.delete(b)}function k(I){const b=I.target;b.removeEventListener("dispose",k),re(b)}function M(I){const b=r.get(I);if(b.__webglInit===void 0)return;const $=I.source,ve=m.get($);if(ve){const ye=ve[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&N(I),Object.keys(ve).length===0&&m.delete($)}r.remove(I)}function N(I){const b=r.get(I);i.deleteTexture(b.__webglTexture);const $=I.source,ve=m.get($);delete ve[b.__cacheKey],u.memory.textures--}function re(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(b.__webglFramebuffer[ve]))for(let ye=0;ye<b.__webglFramebuffer[ve].length;ye++)i.deleteFramebuffer(b.__webglFramebuffer[ve][ye]);else i.deleteFramebuffer(b.__webglFramebuffer[ve]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ve])}else{if(Array.isArray(b.__webglFramebuffer))for(let ve=0;ve<b.__webglFramebuffer.length;ve++)i.deleteFramebuffer(b.__webglFramebuffer[ve]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ve=0;ve<b.__webglColorRenderbuffer.length;ve++)b.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ve]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=I.textures;for(let ve=0,ye=$.length;ve<ye;ve++){const me=r.get($[ve]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove($[ve])}r.remove(I)}let B=0;function q(){B=0}function Q(){const I=B;return I>=a.maxTextures&&ht("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),B+=1,I}function ee(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ie(I,b){const $=r.get(I);if(I.isVideoTexture&&Nt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const ve=I.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ue($,I,b);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+b)}function G(I,b){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){ue($,I,b);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+b)}function W(I,b){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){ue($,I,b);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+b)}function K(I,b){const $=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){_e($,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+b)}const te={[ih]:i.REPEAT,[Nr]:i.CLAMP_TO_EDGE,[rh]:i.MIRRORED_REPEAT},de={[Fn]:i.NEAREST,[nw]:i.NEAREST_MIPMAP_NEAREST,[mu]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[cf]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},F={[aw]:i.NEVER,[dw]:i.ALWAYS,[ow]:i.LESS,[cp]:i.LEQUAL,[lw]:i.EQUAL,[dp]:i.GEQUAL,[uw]:i.GREATER,[cw]:i.NOTEQUAL};function J(I,b){if(b.type===Ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===cf||b.magFilter===mu||b.magFilter===Hs||b.minFilter===Wn||b.minFilter===cf||b.minFilter===mu||b.minFilter===Hs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,te[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,te[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,te[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==mu&&b.minFilter!==Hs||b.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function we(I,b){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",L));const ve=b.source;let ye=m.get(ve);ye===void 0&&(ye={},m.set(ve,ye));const me=ee(b);if(me!==I.__cacheKey){ye[me]===void 0&&(ye[me]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ye[me].usedTimes++;const je=ye[I.__cacheKey];je!==void 0&&(ye[I.__cacheKey].usedTimes--,je.usedTimes===0&&N(b)),I.__cacheKey=me,I.__webglTexture=ye[me].texture}return $}function Be(I,b,$){return Math.floor(Math.floor(I/$)/b)}function Ye(I,b,$,ve){const me=I.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,$,ve,b.data);else{me.sort((be,Ne)=>be.start-Ne.start);let je=0;for(let be=1;be<me.length;be++){const Ne=me[je],Xe=me[be],Ke=Ne.start+Ne.count,ze=Be(Xe.start,b.width,4),bt=Be(Ne.start,b.width,4);Xe.start<=Ke+1&&ze===bt&&Be(Xe.start+Xe.count-1,b.width,4)===ze?Ne.count=Math.max(Ne.count,Xe.start+Xe.count-Ne.start):(++je,me[je]=Xe)}me.length=je+1;const Ae=i.getParameter(i.UNPACK_ROW_LENGTH),rt=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let be=0,Ne=me.length;be<Ne;be++){const Xe=me[be],Ke=Math.floor(Xe.start/4),ze=Math.ceil(Xe.count/4),bt=Ke%b.width,j=Math.floor(Ke/b.width),De=ze,Re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,bt,j,De,Re,$,ve,b.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ue(I,b,$){let ve=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=i.TEXTURE_3D);const ye=we(I,b),me=b.source;t.bindTexture(ve,I.__webglTexture,i.TEXTURE0+$);const je=r.get(me);if(me.version!==je.__version||ye===!0){t.activeTexture(i.TEXTURE0+$);const Ae=Xt.getPrimaries(Xt.workingColorSpace),rt=b.colorSpace===gs?null:Xt.getPrimaries(b.colorSpace),vt=b.colorSpace===gs||Ae===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let be=w(b.image,!1,a.maxTextureSize);be=Ht(b,be);const Ne=o.convert(b.format,b.colorSpace),Xe=o.convert(b.type);let Ke=C(b.internalFormat,Ne,Xe,b.colorSpace,b.isVideoTexture);J(ve,b);let ze;const bt=b.mipmaps,j=b.isVideoTexture!==!0,De=je.__version===void 0||ye===!0,Re=me.dataReady,Ve=D(b,be);if(b.isDepthTexture)Ke=P(b.format===Gs,b.type),De&&(j?t.texStorage2D(i.TEXTURE_2D,1,Ke,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Ke,be.width,be.height,0,Ne,Xe,null));else if(b.isDataTexture)if(bt.length>0){j&&De&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,bt[0].width,bt[0].height);for(let Te=0,ge=bt.length;Te<ge;Te++)ze=bt[Te],j?Re&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ne,Xe,ze.data):t.texImage2D(i.TEXTURE_2D,Te,Ke,ze.width,ze.height,0,Ne,Xe,ze.data);b.generateMipmaps=!1}else j?(De&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,be.width,be.height),Re&&Ye(b,be,Ne,Xe)):t.texImage2D(i.TEXTURE_2D,0,Ke,be.width,be.height,0,Ne,Xe,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ke,bt[0].width,bt[0].height,be.depth);for(let Te=0,ge=bt.length;Te<ge;Te++)if(ze=bt[Te],b.format!==Ci)if(Ne!==null)if(j){if(Re)if(b.layerUpdates.size>0){const Ze=yv(ze.width,ze.height,b.format,b.type);for(const yt of b.layerUpdates){const $t=ze.data.subarray(yt*Ze/ze.data.BYTES_PER_ELEMENT,(yt+1)*Ze/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,yt,ze.width,ze.height,1,Ne,$t)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,be.depth,Ne,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Ke,ze.width,ze.height,be.depth,0,ze.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,be.depth,Ne,Xe,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Ke,ze.width,ze.height,be.depth,0,Ne,Xe,ze.data)}else{j&&De&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,bt[0].width,bt[0].height);for(let Te=0,ge=bt.length;Te<ge;Te++)ze=bt[Te],b.format!==Ci?Ne!==null?j?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ne,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Ke,ze.width,ze.height,0,ze.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Re&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ne,Xe,ze.data):t.texImage2D(i.TEXTURE_2D,Te,Ke,ze.width,ze.height,0,Ne,Xe,ze.data)}else if(b.isDataArrayTexture)if(j){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ke,be.width,be.height,be.depth),Re)if(b.layerUpdates.size>0){const Te=yv(be.width,be.height,b.format,b.type);for(const ge of b.layerUpdates){const Ze=be.data.subarray(ge*Te/be.data.BYTES_PER_ELEMENT,(ge+1)*Te/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,be.width,be.height,1,Ne,Xe,Ze)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ne,Xe,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Ne,Xe,be.data);else if(b.isData3DTexture)j?(De&&t.texStorage3D(i.TEXTURE_3D,Ve,Ke,be.width,be.height,be.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ne,Xe,be.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Ne,Xe,be.data);else if(b.isFramebufferTexture){if(De)if(j)t.texStorage2D(i.TEXTURE_2D,Ve,Ke,be.width,be.height);else{let Te=be.width,ge=be.height;for(let Ze=0;Ze<Ve;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,Ke,Te,ge,0,Ne,Xe,null),Te>>=1,ge>>=1}}else if(bt.length>0){if(j&&De){const Te=et(bt[0]);t.texStorage2D(i.TEXTURE_2D,Ve,Ke,Te.width,Te.height)}for(let Te=0,ge=bt.length;Te<ge;Te++)ze=bt[Te],j?Re&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ne,Xe,ze):t.texImage2D(i.TEXTURE_2D,Te,Ke,Ne,Xe,ze);b.generateMipmaps=!1}else if(j){if(De){const Te=et(be);t.texStorage2D(i.TEXTURE_2D,Ve,Ke,Te.width,Te.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Xe,be)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Ne,Xe,be);y(b)&&S(ve),je.__version=me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function _e(I,b,$){if(b.image.length!==6)return;const ve=we(I,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const me=r.get(ye);if(ye.version!==me.__version||ve===!0){t.activeTexture(i.TEXTURE0+$);const je=Xt.getPrimaries(Xt.workingColorSpace),Ae=b.colorSpace===gs?null:Xt.getPrimaries(b.colorSpace),rt=b.colorSpace===gs||je===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const vt=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let ge=0;ge<6;ge++)!vt&&!be?Ne[ge]=w(b.image[ge],!0,a.maxCubemapSize):Ne[ge]=be?b.image[ge].image:b.image[ge],Ne[ge]=Ht(b,Ne[ge]);const Xe=Ne[0],Ke=o.convert(b.format,b.colorSpace),ze=o.convert(b.type),bt=C(b.internalFormat,Ke,ze,b.colorSpace),j=b.isVideoTexture!==!0,De=me.__version===void 0||ve===!0,Re=ye.dataReady;let Ve=D(b,Xe);J(i.TEXTURE_CUBE_MAP,b);let Te;if(vt){j&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,bt,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){Te=Ne[ge].mipmaps;for(let Ze=0;Ze<Te.length;Ze++){const yt=Te[Ze];b.format!==Ci?Ke!==null?j?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,yt.width,yt.height,Ke,yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,bt,yt.width,yt.height,0,yt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,yt.width,yt.height,Ke,ze,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,bt,yt.width,yt.height,0,Ke,ze,yt.data)}}}else{if(Te=b.mipmaps,j&&De){Te.length>0&&Ve++;const ge=et(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,bt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(be){j?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne[ge].width,Ne[ge].height,Ke,ze,Ne[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,bt,Ne[ge].width,Ne[ge].height,0,Ke,ze,Ne[ge].data);for(let Ze=0;Ze<Te.length;Ze++){const $t=Te[Ze].image[ge].image;j?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,$t.width,$t.height,Ke,ze,$t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,bt,$t.width,$t.height,0,Ke,ze,$t.data)}}else{j?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,ze,Ne[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,bt,Ke,ze,Ne[ge]);for(let Ze=0;Ze<Te.length;Ze++){const yt=Te[Ze];j?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,Ke,ze,yt.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,bt,Ke,ze,yt.image[ge])}}}y(b)&&S(i.TEXTURE_CUBE_MAP),me.__version=ye.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function xe(I,b,$,ve,ye,me){const je=o.convert($.format,$.colorSpace),Ae=o.convert($.type),rt=C($.internalFormat,je,Ae,$.colorSpace),vt=r.get(b),be=r.get($);if(be.__renderTarget=b,!vt.__hasExternalTextures){const Ne=Math.max(1,b.width>>me),Xe=Math.max(1,b.height>>me);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,rt,Ne,Xe,b.depth,0,je,Ae,null):t.texImage2D(ye,me,rt,Ne,Xe,0,je,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),rn(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ye,be.__webglTexture,0,V(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,ye,be.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,b,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const ve=b.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,me=P(b.stencilBuffer,ye),je=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;rn(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),me,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),me,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,me,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,I)}else{const ve=b.textures;for(let ye=0;ye<ve.length;ye++){const me=ve[ye],je=o.convert(me.format,me.colorSpace),Ae=o.convert(me.type),rt=C(me.internalFormat,je,Ae,me.colorSpace);rn(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),rt,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(I,b,$){const ve=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(b.depthTexture);if(ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ve){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),ye.__webglTexture===void 0){ye.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),J(i.TEXTURE_CUBE_MAP,b.depthTexture);const vt=o.convert(b.depthTexture.format),be=o.convert(b.depthTexture.type);let Ne;b.depthTexture.format===Or?Ne=i.DEPTH_COMPONENT24:b.depthTexture.format===Gs&&(Ne=i.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,b.width,b.height,0,vt,be,null)}}else ie(b.depthTexture,0);const me=ye.__webglTexture,je=V(b),Ae=ve?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,rt=b.depthTexture.format===Gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Or)rn(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,Ae,me,0,je):i.framebufferTexture2D(i.FRAMEBUFFER,rt,Ae,me,0);else if(b.depthTexture.format===Gs)rn(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,Ae,me,0,je):i.framebufferTexture2D(i.FRAMEBUFFER,rt,Ae,me,0);else throw new Error("Unknown depthTexture format")}function gt(I){const b=r.get(I),$=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const ve=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ve){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ve.removeEventListener("dispose",ye)};ve.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=ve}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let ve=0;ve<6;ve++)Qe(b.__webglFramebuffer[ve],I,ve);else{const ve=I.texture.mipmaps;ve&&ve.length>0?Qe(b.__webglFramebuffer[0],I,0):Qe(b.__webglFramebuffer,I,0)}else if($){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]===void 0)b.__webglDepthbuffer[ve]=i.createRenderbuffer(),We(b.__webglDepthbuffer[ve],I,!1);else{const ye=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,me)}}else{const ve=I.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),We(b.__webglDepthbuffer,I,!1);else{const ye=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(I,b,$){const ve=r.get(I);b!==void 0&&xe(ve.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&gt(I)}function pt(I){const b=I.texture,$=r.get(I),ve=r.get(b);I.addEventListener("dispose",k);const ye=I.textures,me=I.isWebGLCubeRenderTarget===!0,je=ye.length>1;if(je||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=b.version,u.memory.textures++),me){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let rt=0;rt<b.mipmaps.length;rt++)$.__webglFramebuffer[Ae][rt]=i.createFramebuffer()}else $.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(je)for(let Ae=0,rt=ye.length;Ae<rt;Ae++){const vt=r.get(ye[Ae]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),u.memory.textures++)}if(I.samples>0&&rn(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ye.length;Ae++){const rt=ye[Ae];$.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const vt=o.convert(rt.format,rt.colorSpace),be=o.convert(rt.type),Ne=C(rt.internalFormat,vt,be,rt.colorSpace,I.isXRRenderTarget===!0),Xe=V(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ne,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),We($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),J(i.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)xe($.__webglFramebuffer[Ae][rt],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt);else xe($.__webglFramebuffer[Ae],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(b)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ae=0,rt=ye.length;Ae<rt;Ae++){const vt=ye[Ae],be=r.get(vt);let Ne=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,be.__webglTexture),J(Ne,vt),xe($.__webglFramebuffer,I,vt,i.COLOR_ATTACHMENT0+Ae,Ne,0),y(vt)&&S(Ne)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ve.__webglTexture),J(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)xe($.__webglFramebuffer[rt],I,b,i.COLOR_ATTACHMENT0,Ae,rt);else xe($.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Ae,0);y(b)&&S(Ae),t.unbindTexture()}I.depthBuffer&&gt(I)}function Ct(I){const b=I.textures;for(let $=0,ve=b.length;$<ve;$++){const ye=b[$];if(y(ye)){const me=T(I),je=r.get(ye).__webglTexture;t.bindTexture(me,je),S(me),t.unbindTexture()}}}const Gt=[],Tt=[];function Wt(I){if(I.samples>0){if(rn(I)===!1){const b=I.textures,$=I.width,ve=I.height;let ye=i.COLOR_BUFFER_BIT;const me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=r.get(I),Ae=b.length>1;if(Ae)for(let vt=0;vt<b.length;vt++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const rt=I.texture.mipmaps;rt&&rt.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[vt]);const be=r.get(b[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,$,ve,0,0,$,ve,ye,i.NEAREST),h===!0&&(Gt.length=0,Tt.length=0,Gt.push(i.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Gt.push(me),Tt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let vt=0;vt<b.length;vt++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,je.__webglColorRenderbuffer[vt]);const be=r.get(b[vt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function V(I){return Math.min(a.maxSamples,I.samples)}function rn(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(I){const b=u.render.frame;v.get(I)!==b&&(v.set(I,b),I.update())}function Ht(I,b){const $=I.colorSpace,ve=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Ha&&$!==gs&&(Xt.getTransfer($)===Qt?(ve!==Ci||ye!==gi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",$)),b}function et(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=ie,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=dn,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A2(i,e){function t(r,a=gs){let o;const u=Xt.getTransfer(a);if(r===gi)return i.UNSIGNED_BYTE;if(r===rp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===sp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===B_)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===z_)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===O_)return i.BYTE;if(r===k_)return i.SHORT;if(r===Zo)return i.UNSIGNED_SHORT;if(r===ip)return i.INT;if(r===cr)return i.UNSIGNED_INT;if(r===Ri)return i.FLOAT;if(r===Fr)return i.HALF_FLOAT;if(r===V_)return i.ALPHA;if(r===H_)return i.RGB;if(r===Ci)return i.RGBA;if(r===Or)return i.DEPTH_COMPONENT;if(r===Gs)return i.DEPTH_STENCIL;if(r===ap)return i.RED;if(r===op)return i.RED_INTEGER;if(r===Va)return i.RG;if(r===lp)return i.RG_INTEGER;if(r===up)return i.RGBA_INTEGER;if(r===Ku||r===Zu||r===Ju||r===Qu)if(u===Qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ku)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ku)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ju)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===ah||r===oh||r===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===ch||r===dh||r===fh||r===hh||r===ph||r===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===uh||r===ch)return u===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===dh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===fh)return o.COMPRESSED_R11_EAC;if(r===hh)return o.COMPRESSED_SIGNED_R11_EAC;if(r===ph)return o.COMPRESSED_RG11_EAC;if(r===mh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gh||r===vh||r===_h||r===xh||r===yh||r===Sh||r===Mh||r===Eh||r===wh||r===bh||r===Th||r===Ah||r===Rh||r===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return u===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ph||r===Nh||r===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ph)return u===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dh||r===Ih||r===Uh||r===Fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Dh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const R2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new tx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new fr({vertexShader:R2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N2 extends ja{constructor(e,t){super();const r=this;let a=null,o=1,u=null,c="local-floor",h=1,f=null,v=null,g=null,m=null,_=null,E=null;const w=typeof XRWebGLBinding<"u",y=new P2,S={},T=t.getContextAttributes();let C=null,P=null;const D=[],L=[],k=new Zt;let M=null;const N=new si;N.viewport=new ln;const re=new si;re.viewport=new ln;const B=[N,re],q=new Ib;let Q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let _e=D[ue];return _e===void 0&&(_e=new vf,D[ue]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ue){let _e=D[ue];return _e===void 0&&(_e=new vf,D[ue]=_e),_e.getGripSpace()},this.getHand=function(ue){let _e=D[ue];return _e===void 0&&(_e=new vf,D[ue]=_e),_e.getHandSpace()};function ie(ue){const _e=L.indexOf(ue.inputSource);if(_e===-1)return;const xe=D[_e];xe!==void 0&&(xe.update(ue.inputSource,ue.frame,f||u),xe.dispatchEvent({type:ue.type,data:ue.inputSource}))}function G(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",W);for(let ue=0;ue<D.length;ue++){const _e=L[ue];_e!==null&&(L[ue]=null,D[ue].disconnect(_e))}Q=null,ee=null,y.reset();for(const ue in S)delete S[ue];e.setRenderTarget(C),_=null,m=null,g=null,a=null,P=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){o=ue,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){c=ue,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(ue){f=ue},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ue){if(a=ue,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",G),a.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(k),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,We=null,Qe=null;T.depth&&(Qe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?Gs:Or,We=T.stencil?Jo:cr);const gt={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(gt),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new lr(m.textureWidth,m.textureHeight,{format:Ci,type:gi,depthTexture:new tl(m.textureWidth,m.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new lr(_.framebufferWidth,_.framebufferHeight,{format:Ci,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await a.requestReferenceSpace(c),Ye.setContext(a),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(ue){for(let _e=0;_e<ue.removed.length;_e++){const xe=ue.removed[_e],We=L.indexOf(xe);We>=0&&(L[We]=null,D[We].disconnect(xe))}for(let _e=0;_e<ue.added.length;_e++){const xe=ue.added[_e];let We=L.indexOf(xe);if(We===-1){for(let gt=0;gt<D.length;gt++)if(gt>=L.length){L.push(xe),We=gt;break}else if(L[gt]===null){L[gt]=xe,We=gt;break}if(We===-1)break}const Qe=D[We];Qe&&Qe.connect(xe)}}const K=new le,te=new le;function de(ue,_e,xe){K.setFromMatrixPosition(_e.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const We=K.distanceTo(te),Qe=_e.projectionMatrix.elements,gt=xe.projectionMatrix.elements,dn=Qe[14]/(Qe[10]-1),pt=Qe[14]/(Qe[10]+1),Ct=(Qe[9]+1)/Qe[5],Gt=(Qe[9]-1)/Qe[5],Tt=(Qe[8]-1)/Qe[0],Wt=(gt[8]+1)/gt[0],V=dn*Tt,rn=dn*Wt,Nt=We/(-Tt+Wt),Ht=Nt*-Tt;if(_e.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Ht),ue.translateZ(Nt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Qe[10]===-1)ue.projectionMatrix.copy(_e.projectionMatrix),ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const et=dn+Nt,I=pt+Nt,b=V-Ht,$=rn+(We-Ht),ve=Ct*pt/I*et,ye=Gt*pt/I*et;ue.projectionMatrix.makePerspective(b,$,ve,ye,et,I),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function F(ue,_e){_e===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(_e.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(a===null)return;let _e=ue.near,xe=ue.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),q.near=re.near=N.near=_e,q.far=re.far=N.far=xe,(Q!==q.near||ee!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),Q=q.near,ee=q.far),q.layers.mask=ue.layers.mask|6,N.layers.mask=q.layers.mask&-5,re.layers.mask=q.layers.mask&-3;const We=ue.parent,Qe=q.cameras;F(q,We);for(let gt=0;gt<Qe.length;gt++)F(Qe[gt],We);Qe.length===2?de(q,N,re):q.projectionMatrix.copy(N.projectionMatrix),J(ue,q,We)};function J(ue,_e,xe){xe===null?ue.matrix.copy(_e.matrixWorld):(ue.matrix.copy(xe.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(_e.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(_e.projectionMatrix),ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Ga*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(ue){h=ue,m!==null&&(m.fixedFoveation=ue),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ue){return S[ue]};let we=null;function Be(ue,_e){if(v=_e.getViewerPose(f||u),E=_e,v!==null){const xe=v.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let We=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,We=!0);for(let pt=0;pt<xe.length;pt++){const Ct=xe[pt];let Gt=null;if(_!==null)Gt=_.getViewport(Ct);else{const Wt=g.getViewSubImage(m,Ct);Gt=Wt.viewport,pt===0&&(e.setRenderTargetTextures(P,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(P))}let Tt=B[pt];Tt===void 0&&(Tt=new si,Tt.layers.enable(pt),Tt.viewport=new ln,B[pt]=Tt),Tt.matrix.fromArray(Ct.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Ct.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),pt===0&&(q.matrix.copy(Tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),We===!0&&q.cameras.push(Tt)}const Qe=a.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const pt=g.getDepthInformation(xe[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,a.renderState)}if(Qe&&Qe.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let pt=0;pt<xe.length;pt++){const Ct=xe[pt].camera;if(Ct){let Gt=S[Ct];Gt||(Gt=new tx,S[Ct]=Gt);const Tt=g.getCameraImage(Ct);Gt.sourceTexture=Tt}}}}for(let xe=0;xe<D.length;xe++){const We=L[xe],Qe=D[xe];We!==null&&Qe!==void 0&&Qe.update(We,_e,f||u)}we&&we(ue,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),E=null}const Ye=new ox;Ye.setAnimationLoop(Be),this.setAnimationLoop=function(ue){we=ue},this.dispose=function(){}}}const Os=new dr,L2=new Vt;function D2(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,nx(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,T,C,P){S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),g(y,S)):S.isMeshPhongMaterial?(o(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,P)):S.isMeshMatcapMaterial?(o(y,S),E(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),w(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&c(y,S)):S.isPointsMaterial?h(y,S,T,C):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ai&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ai&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=e.get(S),C=T.envMap,P=T.envMapRotation;C&&(y.envMap.value=C,Os.copy(P),Os.x*=-1,Os.y*=-1,Os.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(Os)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function c(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,T,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=C*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,T){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ai&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const T=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function I2(i,e,t,r){let a={},o={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,C){const P=C.program;r.uniformBlockBinding(T,P)}function f(T,C){let P=a[T.id];P===void 0&&(E(T),P=v(T),a[T.id]=P,T.addEventListener("dispose",y));const D=C.program;r.updateUBOMapping(T,D);const L=e.render.frame;o[T.id]!==L&&(m(T),o[T.id]=L)}function v(T){const C=g();T.__bindingPointIndex=C;const P=i.createBuffer(),D=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,P),P}function g(){for(let T=0;T<c;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const C=a[T.id],P=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let L=0,k=P.length;L<k;L++){const M=Array.isArray(P[L])?P[L]:[P[L]];for(let N=0,re=M.length;N<re;N++){const B=M[N];if(_(B,L,N,D)===!0){const q=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let ee=0;for(let ie=0;ie<Q.length;ie++){const G=Q[ie],W=w(G);typeof G=="number"||typeof G=="boolean"?(B.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+ee,B.__data)):G.isMatrix3?(B.__data[0]=G.elements[0],B.__data[1]=G.elements[1],B.__data[2]=G.elements[2],B.__data[3]=0,B.__data[4]=G.elements[3],B.__data[5]=G.elements[4],B.__data[6]=G.elements[5],B.__data[7]=0,B.__data[8]=G.elements[6],B.__data[9]=G.elements[7],B.__data[10]=G.elements[8],B.__data[11]=0):(G.toArray(B.__data,ee),ee+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,C,P,D){const L=T.value,k=C+"_"+P;if(D[k]===void 0)return typeof L=="number"||typeof L=="boolean"?D[k]=L:D[k]=L.clone(),!0;{const M=D[k];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return D[k]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function E(T){const C=T.uniforms;let P=0;const D=16;for(let k=0,M=C.length;k<M;k++){const N=Array.isArray(C[k])?C[k]:[C[k]];for(let re=0,B=N.length;re<B;re++){const q=N[re],Q=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,ie=Q.length;ee<ie;ee++){const G=Q[ee],W=w(G),K=P%D,te=K%W.boundary,de=K+te;P+=te,de!==0&&D-de<W.storage&&(P+=D-de),q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=W.storage}}}const L=P%D;return L>0&&(P+=D-L),T.__size=P,T.__cache={},this}function w(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",T),C}function y(T){const C=T.target;C.removeEventListener("dispose",y);const P=u.indexOf(C.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function S(){for(const T in a)i.deleteBuffer(a[T]);u=[],a={},o={}}return{bind:h,update:f,dispose:S}}const U2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function F2(){return ir===null&&(ir=new pp(U2,16,16,Va,Fr),ir.name="DFG_LUT",ir.minFilter=Wn,ir.magFilter=Wn,ir.wrapS=Nr,ir.wrapT=Nr,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class O2{constructor(e={}){const{canvas:t=pw(),context:r=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=_,y=new Set([up,lp,op]),S=new Set([gi,cr,Zo,Jo,rp,sp]),T=new Uint32Array(4),C=new Int32Array(4);let P=null,D=null;const L=[],k=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let re=!1;this._outputColorSpace=Ai;let B=0,q=0,Q=null,ee=-1,ie=null;const G=new ln,W=new ln;let K=null;const te=new Bt(0);let de=0,F=t.width,J=t.height,we=1,Be=null,Ye=null;const ue=new ln(0,0,F,J),_e=new ln(0,0,F,J);let xe=!1;const We=new mp;let Qe=!1,gt=!1;const dn=new Vt,pt=new le,Ct=new ln,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Wt(){return Q===null?we:1}let V=r;function rn(R,Z){return t.getContext(R,Z)}try{const R={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${np}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",$t,!1),V===null){const Z="webgl2";if(V=rn(Z,R),V===null)throw rn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Mt("WebGLRenderer: "+R.message),R}let Nt,Ht,et,I,b,$,ve,ye,me,je,Ae,rt,vt,be,Ne,Xe,Ke,ze,bt,j,De,Re,Ve;function Te(){Nt=new OR(V),Nt.init(),De=new A2(V,Nt),Ht=new CR(V,Nt,e,De),et=new b2(V,Nt),Ht.reversedDepthBuffer&&m&&et.buffers.depth.setReversed(!0),I=new zR(V),b=new d2,$=new T2(V,Nt,et,b,Ht,De,I),ve=new FR(N),ye=new jb(V),Re=new AR(V,ye),me=new kR(V,ye,I,Re),je=new HR(V,me,ye,Re,I),ze=new VR(V,Ht,$),Ne=new PR(b),Ae=new c2(N,ve,Nt,Ht,Re,Ne),rt=new D2(N,b),vt=new h2,be=new x2(Nt),Ke=new TR(N,ve,et,je,E,h),Xe=new w2(N,je,Ht),Ve=new I2(V,I,Ht,et),bt=new RR(V,Nt,I),j=new BR(V,Nt,I),I.programs=Ae.programs,N.capabilities=Ht,N.extensions=Nt,N.properties=b,N.renderLists=vt,N.shadowMap=Xe,N.state=et,N.info=I}Te(),w!==gi&&(M=new WR(w,t.width,t.height,a,o));const ge=new N2(N,V);this.xr=ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(R){R!==void 0&&(we=R,this.setSize(F,J,!1))},this.getSize=function(R){return R.set(F,J)},this.setSize=function(R,Z,he=!0){if(ge.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,J=Z,t.width=Math.floor(R*we),t.height=Math.floor(Z*we),he===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(F*we,J*we).floor()},this.setDrawingBufferSize=function(R,Z,he){F=R,J=Z,we=he,t.width=Math.floor(R*he),t.height=Math.floor(Z*he),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(w===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,Z,he,oe){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,Z,he,oe),et.viewport(G.copy(ue).multiplyScalar(we).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,Z,he,oe){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,Z,he,oe),et.scissor(W.copy(_e).multiplyScalar(we).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){et.setScissorTest(xe=R)},this.setOpaqueSort=function(R){Be=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,he=!0){let oe=0;if(R){let se=!1;if(Q!==null){const Oe=Q.texture.format;se=y.has(Oe)}if(se){const Oe=Q.texture.type,He=S.has(Oe),Ue=Ke.getClearColor(),ke=Ke.getClearAlpha(),nt=Ue.r,Ie=Ue.g,dt=Ue.b;He?(T[0]=nt,T[1]=Ie,T[2]=dt,T[3]=ke,V.clearBufferuiv(V.COLOR,0,T)):(C[0]=nt,C[1]=Ie,C[2]=dt,C[3]=ke,V.clearBufferiv(V.COLOR,0,C))}else oe|=V.COLOR_BUFFER_BIT}Z&&(oe|=V.DEPTH_BUFFER_BIT),he&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Ke.dispose(),vt.dispose(),be.dispose(),b.dispose(),ve.dispose(),je.dispose(),Re.dispose(),Ve.dispose(),Ae.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",X),ge.removeEventListener("sessionend",ce),Se.stop()};function Ze(R){R.preventDefault(),rc("WebGLRenderer: Context Lost."),re=!0}function yt(){rc("WebGLRenderer: Context Restored."),re=!1;const R=I.autoReset,Z=Xe.enabled,he=Xe.autoUpdate,oe=Xe.needsUpdate,se=Xe.type;Te(),I.autoReset=R,Xe.enabled=Z,Xe.autoUpdate=he,Xe.needsUpdate=oe,Xe.type=se}function $t(R){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dt(R){const Z=R.target;Z.removeEventListener("dispose",Dt),Dn(Z)}function Dn(R){Rn(R),b.remove(R)}function Rn(R){const Z=b.get(R).programs;Z!==void 0&&(Z.forEach(function(he){Ae.releaseProgram(he)}),R.isShaderMaterial&&Ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,he,oe,se,Oe){Z===null&&(Z=Gt);const He=se.isMesh&&se.matrixWorld.determinant()<0,Ue=At(R,Z,he,oe,se);et.setMaterial(oe,He);let ke=he.index,nt=1;if(oe.wireframe===!0){if(ke=me.getWireframeAttribute(he),ke===void 0)return;nt=2}const Ie=he.drawRange,dt=he.attributes.position;let tt=Ie.start*nt,It=(Ie.start+Ie.count)*nt;Oe!==null&&(tt=Math.max(tt,Oe.start*nt),It=Math.min(It,(Oe.start+Oe.count)*nt)),ke!==null?(tt=Math.max(tt,0),It=Math.min(It,ke.count)):dt!=null&&(tt=Math.max(tt,0),It=Math.min(It,dt.count));const St=It-tt;if(St<0||St===1/0)return;Re.setup(se,oe,Ue,he,ke);let qt,Ot=bt;if(ke!==null&&(qt=ye.get(ke),Ot=j,Ot.setIndex(qt)),se.isMesh)oe.wireframe===!0?(et.setLineWidth(oe.wireframeLinewidth*Wt()),Ot.setMode(V.LINES)):Ot.setMode(V.TRIANGLES);else if(se.isLine){let hn=oe.linewidth;hn===void 0&&(hn=1),et.setLineWidth(hn*Wt()),se.isLineSegments?Ot.setMode(V.LINES):se.isLineLoop?Ot.setMode(V.LINE_LOOP):Ot.setMode(V.LINE_STRIP)}else se.isPoints?Ot.setMode(V.POINTS):se.isSprite&&Ot.setMode(V.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)sc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const hn=se._multiDrawStarts,lt=se._multiDrawCounts,Xn=se._multiDrawCount,zt=ke?ye.get(ke).bytesPerElement:1,Zn=b.get(oe).currentProgram.getUniforms();for(let Jn=0;Jn<Xn;Jn++)Zn.setValue(V,"_gl_DrawID",Jn),Ot.render(hn[Jn]/zt,lt[Jn])}else if(se.isInstancedMesh)Ot.renderInstances(tt,St,se.count);else if(he.isInstancedBufferGeometry){const hn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,lt=Math.min(he.instanceCount,hn);Ot.renderInstances(tt,St,lt)}else Ot.render(tt,St)};function Vr(R,Z,he){R.transparent===!0&&R.side===Pr&&R.forceSinglePass===!1?(R.side=ai,R.needsUpdate=!0,Fe(R,Z,he),R.side=xs,R.needsUpdate=!0,Fe(R,Z,he),R.side=Pr):Fe(R,Z,he)}this.compile=function(R,Z,he=null){he===null&&(he=R),D=be.get(he),D.init(Z),k.push(D),he.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),R!==he&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights();const oe=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ue=Oe[He];Vr(Ue,he,se),oe.add(Ue)}else Vr(Oe,he,se),oe.add(Oe)}),D=k.pop(),oe},this.compileAsync=function(R,Z,he=null){const oe=this.compile(R,Z,he);return new Promise(se=>{function Oe(){if(oe.forEach(function(He){b.get(He).currentProgram.isReady()&&oe.delete(He)}),oe.size===0){se(R);return}setTimeout(Oe,10)}Nt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ii=null;function z(R){Ii&&Ii(R)}function X(){Se.stop()}function ce(){Se.start()}const Se=new ox;Se.setAnimationLoop(z),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(R){Ii=R,ge.setAnimationLoop(R),R===null?Se.stop():Se.start()},ge.addEventListener("sessionstart",X),ge.addEventListener("sessionend",ce),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(re===!0)return;const he=ge.enabled===!0&&ge.isPresenting===!0,oe=M!==null&&(Q===null||he)&&M.begin(N,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(Z),Z=ge.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Z,Q),D=be.get(R,k.length),D.init(Z),k.push(D),dn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),We.setFromProjectionMatrix(dn,sr,Z.reversedDepth),gt=this.localClippingEnabled,Qe=Ne.init(this.clippingPlanes,gt),P=vt.get(R,L.length),P.init(),L.push(P),ge.enabled===!0&&ge.isPresenting===!0){const He=N.xr.getDepthSensingMesh();He!==null&&Pe(He,Z,-1/0,N.sortObjects)}Pe(R,Z,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(Be,Ye),Tt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Tt&&Ke.addToRenderList(P,R),this.info.render.frame++,Qe===!0&&Ne.beginShadows();const se=D.state.shadowsArray;if(Xe.render(se,R,Z),Qe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&M.hasRenderPass())===!1){const He=P.opaque,Ue=P.transmissive;if(D.setupLights(),Z.isArrayCamera){const ke=Z.cameras;if(Ue.length>0)for(let nt=0,Ie=ke.length;nt<Ie;nt++){const dt=ke[nt];st(He,Ue,R,dt)}Tt&&Ke.render(R);for(let nt=0,Ie=ke.length;nt<Ie;nt++){const dt=ke[nt];ut(P,R,dt,dt.viewport)}}else Ue.length>0&&st(He,Ue,R,Z),Tt&&Ke.render(R),ut(P,R,Z)}Q!==null&&q===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),oe&&M.end(N),R.isScene===!0&&R.onAfterRender(N,R,Z),Re.resetDefaultState(),ee=-1,ie=null,k.pop(),k.length>0?(D=k[k.length-1],Qe===!0&&Ne.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,L.pop(),L.length>0?P=L[L.length-1]:P=null};function Pe(R,Z,he,oe){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||We.intersectsSprite(R)){oe&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(dn);const He=je.update(R),Ue=R.material;Ue.visible&&P.push(R,He,Ue,he,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||We.intersectsObject(R))){const He=je.update(R),Ue=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ct.copy(He.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(dn)),Array.isArray(Ue)){const ke=He.groups;for(let nt=0,Ie=ke.length;nt<Ie;nt++){const dt=ke[nt],tt=Ue[dt.materialIndex];tt&&tt.visible&&P.push(R,He,tt,he,Ct.z,dt)}}else Ue.visible&&P.push(R,He,Ue,he,Ct.z,null)}}const Oe=R.children;for(let He=0,Ue=Oe.length;He<Ue;He++)Pe(Oe[He],Z,he,oe)}function ut(R,Z,he,oe){const{opaque:se,transmissive:Oe,transparent:He}=R;D.setupLightsView(he),Qe===!0&&Ne.setGlobalState(N.clippingPlanes,he),oe&&et.viewport(G.copy(oe)),se.length>0&&ft(se,Z,he),Oe.length>0&&ft(Oe,Z,he),He.length>0&&ft(He,Z,he),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function st(R,Z,he,oe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[oe.id]===void 0){const tt=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[oe.id]=new lr(1,1,{generateMipmaps:!0,type:tt?Fr:gi,minFilter:Hs,samples:Math.max(4,Ht.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const Oe=D.state.transmissionRenderTarget[oe.id],He=oe.viewport||G;Oe.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);const Ue=N.getRenderTarget(),ke=N.getActiveCubeFace(),nt=N.getActiveMipmapLevel();N.setRenderTarget(Oe),N.getClearColor(te),de=N.getClearAlpha(),de<1&&N.setClearColor(16777215,.5),N.clear(),Tt&&Ke.render(he);const Ie=N.toneMapping;N.toneMapping=or;const dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),D.setupLightsView(oe),Qe===!0&&Ne.setGlobalState(N.clippingPlanes,oe),ft(R,he,oe),$.updateMultisampleRenderTarget(Oe),$.updateRenderTargetMipmap(Oe),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let It=0,St=Z.length;It<St;It++){const qt=Z[It],{object:Ot,geometry:hn,material:lt,group:Xn}=qt;if(lt.side===Pr&&Ot.layers.test(oe.layers)){const zt=lt.side;lt.side=ai,lt.needsUpdate=!0,$e(Ot,he,oe,hn,lt,Xn),lt.side=zt,lt.needsUpdate=!0,tt=!0}}tt===!0&&($.updateMultisampleRenderTarget(Oe),$.updateRenderTargetMipmap(Oe))}N.setRenderTarget(Ue,ke,nt),N.setClearColor(te,de),dt!==void 0&&(oe.viewport=dt),N.toneMapping=Ie}function ft(R,Z,he){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Oe=R.length;se<Oe;se++){const He=R[se],{object:Ue,geometry:ke,group:nt}=He;let Ie=He.material;Ie.allowOverride===!0&&oe!==null&&(Ie=oe),Ue.layers.test(he.layers)&&$e(Ue,Z,he,ke,Ie,nt)}}function $e(R,Z,he,oe,se,Oe){R.onBeforeRender(N,Z,he,oe,se,Oe),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(N,Z,he,oe,R,Oe),se.transparent===!0&&se.side===Pr&&se.forceSinglePass===!1?(se.side=ai,se.needsUpdate=!0,N.renderBufferDirect(he,Z,oe,se,R,Oe),se.side=xs,se.needsUpdate=!0,N.renderBufferDirect(he,Z,oe,se,R,Oe),se.side=Pr):N.renderBufferDirect(he,Z,oe,se,R,Oe),R.onAfterRender(N,Z,he,oe,se,Oe)}function Fe(R,Z,he){Z.isScene!==!0&&(Z=Gt);const oe=b.get(R),se=D.state.lights,Oe=D.state.shadowsArray,He=se.state.version,Ue=Ae.getParameters(R,se.state,Oe,Z,he),ke=Ae.getProgramCacheKey(Ue);let nt=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,oe.fog=Z.fog;const Ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=ve.get(R.envMap||oe.environment,Ie),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",Dt),nt=new Map,oe.programs=nt);let dt=nt.get(ke);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===He)return at(R,Ue),dt}else Ue.uniforms=Ae.getUniforms(R),R.onBeforeCompile(Ue,N),dt=Ae.acquireProgram(Ue,ke),nt.set(ke,dt),oe.uniforms=Ue.uniforms;const tt=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=Ne.uniform),at(R,Ue),oe.needsLights=tn(R),oe.lightsStateVersion=He,oe.needsLights&&(tt.ambientLightColor.value=se.state.ambient,tt.lightProbe.value=se.state.probe,tt.directionalLights.value=se.state.directional,tt.directionalLightShadows.value=se.state.directionalShadow,tt.spotLights.value=se.state.spot,tt.spotLightShadows.value=se.state.spotShadow,tt.rectAreaLights.value=se.state.rectArea,tt.ltc_1.value=se.state.rectAreaLTC1,tt.ltc_2.value=se.state.rectAreaLTC2,tt.pointLights.value=se.state.point,tt.pointLightShadows.value=se.state.pointShadow,tt.hemisphereLights.value=se.state.hemi,tt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,tt.spotLightMatrix.value=se.state.spotLightMatrix,tt.spotLightMap.value=se.state.spotLightMap,tt.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.currentProgram=dt,oe.uniformsList=null,dt}function mt(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=ec.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function at(R,Z){const he=b.get(R);he.outputColorSpace=Z.outputColorSpace,he.batching=Z.batching,he.batchingColor=Z.batchingColor,he.instancing=Z.instancing,he.instancingColor=Z.instancingColor,he.instancingMorph=Z.instancingMorph,he.skinning=Z.skinning,he.morphTargets=Z.morphTargets,he.morphNormals=Z.morphNormals,he.morphColors=Z.morphColors,he.morphTargetsCount=Z.morphTargetsCount,he.numClippingPlanes=Z.numClippingPlanes,he.numIntersection=Z.numClipIntersection,he.vertexAlphas=Z.vertexAlphas,he.vertexTangents=Z.vertexTangents,he.toneMapping=Z.toneMapping}function At(R,Z,he,oe,se){Z.isScene!==!0&&(Z=Gt),$.resetTextureUnits();const Oe=Z.fog,He=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Z.environment:null,Ue=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ha,ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,nt=ve.get(oe.envMap||He,ke),Ie=oe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,dt=!!he.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!he.morphAttributes.position,It=!!he.morphAttributes.normal,St=!!he.morphAttributes.color;let qt=or;oe.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(qt=N.toneMapping);const Ot=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,hn=Ot!==void 0?Ot.length:0,lt=b.get(oe),Xn=D.state.lights;if(Qe===!0&&(gt===!0||R!==ie)){const vn=R===ie&&oe.id===ee;Ne.setState(oe,R,vn)}let zt=!1;oe.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Xn.state.version||lt.outputColorSpace!==Ue||se.isBatchedMesh&&lt.batching===!1||!se.isBatchedMesh&&lt.batching===!0||se.isBatchedMesh&&lt.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&lt.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&lt.instancing===!1||!se.isInstancedMesh&&lt.instancing===!0||se.isSkinnedMesh&&lt.skinning===!1||!se.isSkinnedMesh&&lt.skinning===!0||se.isInstancedMesh&&lt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&lt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&lt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&lt.instancingMorph===!1&&se.morphTexture!==null||lt.envMap!==nt||oe.fog===!0&&lt.fog!==Oe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ne.numPlanes||lt.numIntersection!==Ne.numIntersection)||lt.vertexAlphas!==Ie||lt.vertexTangents!==dt||lt.morphTargets!==tt||lt.morphNormals!==It||lt.morphColors!==St||lt.toneMapping!==qt||lt.morphTargetsCount!==hn)&&(zt=!0):(zt=!0,lt.__version=oe.version);let Zn=lt.currentProgram;zt===!0&&(Zn=Fe(oe,Z,se));let Jn=!1,li=!1,Hr=!1;const Jt=Zn.getUniforms(),Et=lt.uniforms;if(et.useProgram(Zn.program)&&(Jn=!0,li=!0,Hr=!0),oe.id!==ee&&(ee=oe.id,li=!0),Jn||ie!==R){et.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Jt.setValue(V,"projectionMatrix",R.projectionMatrix),Jt.setValue(V,"viewMatrix",R.matrixWorldInverse);const _i=Jt.map.cameraPosition;_i!==void 0&&_i.setValue(V,pt.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&Jt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Jt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,li=!0,Hr=!0)}if(lt.needsLights&&(Xn.state.directionalShadowMap.length>0&&Jt.setValue(V,"directionalShadowMap",Xn.state.directionalShadowMap,$),Xn.state.spotShadowMap.length>0&&Jt.setValue(V,"spotShadowMap",Xn.state.spotShadowMap,$),Xn.state.pointShadowMap.length>0&&Jt.setValue(V,"pointShadowMap",Xn.state.pointShadowMap,$)),se.isSkinnedMesh){Jt.setOptional(V,se,"bindMatrix"),Jt.setOptional(V,se,"bindMatrixInverse");const vn=se.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Jt.setValue(V,"boneTexture",vn.boneTexture,$))}se.isBatchedMesh&&(Jt.setOptional(V,se,"batchingTexture"),Jt.setValue(V,"batchingTexture",se._matricesTexture,$),Jt.setOptional(V,se,"batchingIdTexture"),Jt.setValue(V,"batchingIdTexture",se._indirectTexture,$),Jt.setOptional(V,se,"batchingColorTexture"),se._colorsTexture!==null&&Jt.setValue(V,"batchingColorTexture",se._colorsTexture,$));const Ui=he.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&ze.update(se,he,Zn),(li||lt.receiveShadow!==se.receiveShadow)&&(lt.receiveShadow=se.receiveShadow,Jt.setValue(V,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Z.environment!==null&&(Et.envMapIntensity.value=Z.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=F2()),li&&(Jt.setValue(V,"toneMappingExposure",N.toneMappingExposure),lt.needsLights&&Lt(Et,Hr),Oe&&oe.fog===!0&&rt.refreshFogUniforms(Et,Oe),rt.refreshMaterialUniforms(Et,oe,we,J,D.state.transmissionRenderTarget[R.id]),ec.upload(V,mt(lt),Et,$)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ec.upload(V,mt(lt),Et,$),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Jt.setValue(V,"center",se.center),Jt.setValue(V,"modelViewMatrix",se.modelViewMatrix),Jt.setValue(V,"normalMatrix",se.normalMatrix),Jt.setValue(V,"modelMatrix",se.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const vn=oe.uniformsGroups;for(let _i=0,pr=vn.length;_i<pr;_i++){const qa=vn[_i];Ve.update(qa,Zn),Ve.bind(qa,Zn)}}return Zn}function Lt(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,Z,he){const oe=b.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Z,b.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:he,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const he=b.get(R);he.__webglFramebuffer=Z,he.__useDefaultFramebuffer=Z===void 0};const fn=V.createFramebuffer();this.setRenderTarget=function(R,Z=0,he=0){Q=R,B=Z,q=he;let oe=null,se=!1,Oe=!1;if(R){const Ue=b.get(R);if(Ue.__useDefaultFramebuffer!==void 0){et.bindFramebuffer(V.FRAMEBUFFER,Ue.__webglFramebuffer),G.copy(R.viewport),W.copy(R.scissor),K=R.scissorTest,et.viewport(G),et.scissor(W),et.setScissorTest(K),ee=-1;return}else if(Ue.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(Ue.__hasExternalTextures)$.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ie=R.depthTexture;if(Ue.__boundDepthTexture!==Ie){if(Ie!==null&&b.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Oe=!0);const nt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[Z])?oe=nt[Z][he]:oe=nt[Z],se=!0):R.samples>0&&$.useMultisampledRTT(R)===!1?oe=b.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?oe=nt[he]:oe=nt,G.copy(R.viewport),W.copy(R.scissor),K=R.scissorTest}else G.copy(ue).multiplyScalar(we).floor(),W.copy(_e).multiplyScalar(we).floor(),K=xe;if(he!==0&&(oe=fn),et.bindFramebuffer(V.FRAMEBUFFER,oe)&&et.drawBuffers(R,oe),et.viewport(G),et.scissor(W),et.setScissorTest(K),se){const Ue=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ue.__webglTexture,he)}else if(Oe){const Ue=Z;for(let ke=0;ke<R.textures.length;ke++){const nt=b.get(R.textures[ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ke,nt.__webglTexture,he,Ue)}}else if(R!==null&&he!==0){const Ue=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,he)}ee=-1},this.readRenderTargetPixels=function(R,Z,he,oe,se,Oe,He,Ue=0){if(!(R&&R.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){et.bindFramebuffer(V.FRAMEBUFFER,ke);try{const nt=R.textures[Ue],Ie=nt.format,dt=nt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!Ht.textureFormatReadable(Ie)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(dt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-oe&&he>=0&&he<=R.height-se&&V.readPixels(Z,he,oe,se,De.convert(Ie),De.convert(dt),Oe)}finally{const nt=Q!==null?b.get(Q).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,he,oe,se,Oe,He,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(Z>=0&&Z<=R.width-oe&&he>=0&&he<=R.height-se){et.bindFramebuffer(V.FRAMEBUFFER,ke);const nt=R.textures[Ue],Ie=nt.format,dt=nt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ue),!Ht.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(Z,he,oe,se,De.convert(Ie),De.convert(dt),0);const It=Q!==null?b.get(Q).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,It);const St=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await mw(V,St,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(tt),V.deleteSync(St),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,he=0){const oe=Math.pow(2,-he),se=Math.floor(R.image.width*oe),Oe=Math.floor(R.image.height*oe),He=Z!==null?Z.x:0,Ue=Z!==null?Z.y:0;$.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,he,0,0,He,Ue,se,Oe),et.unbindTexture()};const En=V.createFramebuffer(),Yt=V.createFramebuffer();this.copyTextureToTexture=function(R,Z,he=null,oe=null,se=0,Oe=0){let He,Ue,ke,nt,Ie,dt,tt,It,St;const qt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(he!==null)He=he.max.x-he.min.x,Ue=he.max.y-he.min.y,ke=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,Ie=he.min.y,dt=he.isBox3?he.min.z:0;else{const Et=Math.pow(2,-se);He=Math.floor(qt.width*Et),Ue=Math.floor(qt.height*Et),R.isDataArrayTexture?ke=qt.depth:R.isData3DTexture?ke=Math.floor(qt.depth*Et):ke=1,nt=0,Ie=0,dt=0}oe!==null?(tt=oe.x,It=oe.y,St=oe.z):(tt=0,It=0,St=0);const Ot=De.convert(Z.format),hn=De.convert(Z.type);let lt;Z.isData3DTexture?($.setTexture3D(Z,0),lt=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?($.setTexture2DArray(Z,0),lt=V.TEXTURE_2D_ARRAY):($.setTexture2D(Z,0),lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xn=V.getParameter(V.UNPACK_ROW_LENGTH),zt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zn=V.getParameter(V.UNPACK_SKIP_PIXELS),Jn=V.getParameter(V.UNPACK_SKIP_ROWS),li=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const Hr=R.isDataArrayTexture||R.isData3DTexture,Jt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Et=b.get(R),Ui=b.get(Z),vn=b.get(Et.__renderTarget),_i=b.get(Ui.__renderTarget);et.bindFramebuffer(V.READ_FRAMEBUFFER,vn.__webglFramebuffer),et.bindFramebuffer(V.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let pr=0;pr<ke;pr++)Hr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,se,dt+pr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Oe,St+pr)),V.blitFramebuffer(nt,Ie,He,Ue,tt,It,He,Ue,V.DEPTH_BUFFER_BIT,V.NEAREST);et.bindFramebuffer(V.READ_FRAMEBUFFER,null),et.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||b.has(R)){const Et=b.get(R),Ui=b.get(Z);et.bindFramebuffer(V.READ_FRAMEBUFFER,En),et.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yt);for(let vn=0;vn<ke;vn++)Hr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Et.__webglTexture,se,dt+vn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Et.__webglTexture,se),Jt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ui.__webglTexture,Oe,St+vn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ui.__webglTexture,Oe),se!==0?V.blitFramebuffer(nt,Ie,He,Ue,tt,It,He,Ue,V.COLOR_BUFFER_BIT,V.NEAREST):Jt?V.copyTexSubImage3D(lt,Oe,tt,It,St+vn,nt,Ie,He,Ue):V.copyTexSubImage2D(lt,Oe,tt,It,nt,Ie,He,Ue);et.bindFramebuffer(V.READ_FRAMEBUFFER,null),et.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Jt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(lt,Oe,tt,It,St,He,Ue,ke,Ot,hn,qt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(lt,Oe,tt,It,St,He,Ue,ke,Ot,qt.data):V.texSubImage3D(lt,Oe,tt,It,St,He,Ue,ke,Ot,hn,qt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,tt,It,He,Ue,Ot,hn,qt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,tt,It,qt.width,qt.height,Ot,qt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,tt,It,He,Ue,Ot,hn,qt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,zt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,li),Oe===0&&Z.generateMipmaps&&V.generateMipmap(lt),et.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),et.unbindTexture()},this.resetState=function(){B=0,q=0,Q=null,et.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xt._getUnpackColorSpace()}}const Wv="/assets/glbfile-Pjsa9tFc.glb",{useRef:La,useState:ju,useEffect:k2}=jv;function B2({modelType:i,imageSrc:e,modelPath:t}){const[r,a]=ju(!1),[o,u]=ju(!0),[c,h]=ju(!1),f=La(null),v=La(null),g=La(null),m=La(null),_=La(null),E=La(null),[w,y]=ju(5),{t:S}=kr();k2(()=>{if(!f.current||!v.current)return;console.log("初始化3D场景");const L=new Xw;L.background=new Bt(1710638),g.current=L;const k=new si(75,f.current.clientWidth/f.current.clientHeight,.1,1e3);k.position.z=w,m.current=k;const M=new O2({canvas:v.current,antialias:!0});M.setSize(f.current.clientWidth,f.current.clientHeight),M.setPixelRatio(window.devicePixelRatio),_.current=M;const N=new Lb(16777215,.6);L.add(N);const re=new Nb(16777215,.8);re.position.set(5,10,7.5),L.add(re);const B=new Cb(4886754,.5,10);B.position.set(2,3,2),L.add(B),console.log("加载模型文件:",Wv),N1(async()=>{const{GLTFLoader:G}=await import("./GLTFLoader-CEWq_Pqy.js");return{GLTFLoader:G}},[]).then(({GLTFLoader:G})=>{new G().load(Wv,K=>{console.log("模型加载成功:",K.scene),E.current=K.scene,K.scene.position.set(0,0,0);const te=new Br().setFromObject(K.scene),de=te.getSize(new le),J=3/Math.max(de.x,de.y,de.z);K.scene.scale.set(J,J,J);const we=te.getCenter(new le);K.scene.position.sub(we.multiplyScalar(J)),L.add(K.scene),u(!1),h(!1)},K=>{console.log(`加载进度: ${K.loaded/K.total*100}%`)},K=>{console.error("模型加载失败:",K),q()})}).catch(G=>{console.error("无法加载GLTFLoader:",G),q()});function q(){console.log("创建默认模型");const G=new gp(1.5,32,32),W=new ix({color:16739179,metalness:.3,roughness:.4}),K=new vi(G,W);E.current=K,L.add(K),u(!1),h(!0)}let Q;const ee=()=>{Q=requestAnimationFrame(ee),E.current&&(E.current.rotation.y+=.005),m.current&&(m.current.position.z=w,m.current.lookAt(0,0,0)),M&&L&&k&&M.render(L,k)};ee();const ie=()=>{!f.current||!k||!M||(k.aspect=f.current.clientWidth/f.current.clientHeight,k.updateProjectionMatrix(),M.setSize(f.current.clientWidth,f.current.clientHeight))};return window.addEventListener("resize",ie),()=>{window.removeEventListener("resize",ie),cancelAnimationFrame(Q),M&&M.dispose()}},[t,w]);const T=()=>{var L;document.fullscreenElement?(document.exitFullscreen(),a(!1)):((L=f.current)==null||L.requestFullscreen(),a(!0))},C=()=>{y(5)},P=()=>{y(L=>Math.max(L*.8,1))},D=()=>{y(L=>L*1.2)};return U.jsxs("div",{ref:f,className:"relative w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden select-none",children:[U.jsx("canvas",{ref:v,className:"absolute inset-0 w-full h-full"}),o&&U.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 z-20",children:U.jsxs("div",{className:"text-center text-white",children:[U.jsx(JE,{className:"w-12 h-12 mx-auto mb-4 animate-spin"}),U.jsx("p",{children:S("加载中...")})]})}),c&&U.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 z-20",children:U.jsxs("div",{className:"text-center text-white",children:[U.jsx("p",{children:S("3D模型加载失败")}),U.jsx("p",{className:"text-sm mt-2 text-gray-300",children:S("显示默认模型")})]})}),U.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[U.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"}),U.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"})]}),U.jsxs("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full z-10",children:[U.jsx("button",{onClick:C,className:"p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors",title:"重置视角",children:U.jsx(d1,{className:"w-5 h-5 text-white"})}),U.jsx("button",{onClick:D,className:"p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors",title:"缩小",children:U.jsx(M1,{className:"w-5 h-5 text-white"})}),U.jsx("button",{onClick:P,className:"p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors",title:"放大",children:U.jsx(y1,{className:"w-5 h-5 text-white"})}),U.jsx("button",{onClick:T,className:"p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors",title:"全屏",children:U.jsx(n1,{className:"w-5 h-5 text-white"})})]}),U.jsx("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full z-10",children:U.jsx("p",{className:"text-white text-sm",children:"🖱️ 点击操作 · 自动旋转"})}),U.jsx("div",{className:"absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10",children:U.jsx("p",{className:"text-white text-xs",children:t?o?"加载中...":"模型已加载":"使用默认模型"})})]})}function z2(){const{id:i}=EM(),e=al(),{t}=kr(),r=ar.find(u=>u.id===Number(i)),[a,o]=ne.useState("image");return r?U.jsxs("div",{className:"min-h-full bg-white",children:[U.jsx("div",{className:"sticky top-0 bg-white border-b border-gray-200 z-10",children:U.jsxs("div",{className:"flex items-center justify-between p-4",children:[U.jsxs("button",{onClick:()=>e("/artifacts"),className:"flex items-center gap-2 text-gray-700",children:[U.jsx(hc,{className:"w-5 h-5"}),U.jsx("span",{children:t("返回")})]}),U.jsxs(Dr,{to:"/chat",state:{artifactId:r.id},className:"flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg",children:[U.jsx(b_,{className:"w-4 h-4"}),U.jsx("span",{children:t("与TA对话")})]})]})}),U.jsxs("div",{className:"w-full h-96 bg-gray-100 relative",children:[a==="image"?U.jsx(ka,{src:r.image,alt:r.name,className:"w-full h-full object-contain"}):U.jsx(B2,{modelType:r.modelType,imageSrc:r.image,modelPath:r.modelPath}),U.jsxs("div",{className:"absolute top-4 right-4 flex gap-2",children:[U.jsx("button",{onClick:()=>o("image"),className:`px-4 py-2 rounded-lg transition-colors ${a==="image"?"bg-blue-600 text-white":"bg-white/90 text-gray-700 hover:bg-white"}`,children:t("📷 图片")}),U.jsxs("button",{onClick:()=>o("3d"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${a==="3d"?"bg-blue-600 text-white":"bg-white/90 text-gray-700 hover:bg-white"}`,children:[U.jsx(IE,{className:"w-4 h-4"}),t("3D")]})]})]}),U.jsxs("div",{className:"p-6",children:[U.jsx("h1",{className:"text-2xl mb-4",children:t(r.name)}),U.jsx("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:U.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[U.jsxs("div",{children:[U.jsx("p",{className:"text-sm text-gray-600 mb-1",children:t("朝代")}),U.jsx("p",{children:t(r.dynasty)})]}),U.jsxs("div",{children:[U.jsx("p",{className:"text-sm text-gray-600 mb-1",children:t("年代")}),U.jsx("p",{className:"text-sm",children:t(r.year)})]})]})}),U.jsxs("section",{className:"mb-6",children:[U.jsx("h2",{className:"text-lg mb-3",children:t("文物介绍")}),U.jsx("p",{className:"text-gray-700 leading-relaxed",children:t(r.description)})]}),U.jsxs("section",{children:[U.jsx("h2",{className:"text-lg mb-3",children:t("文物自述")}),U.jsx("div",{className:"bg-blue-50 border-l-4 border-blue-600 p-4 rounded",children:U.jsxs("p",{className:"text-gray-700 leading-relaxed italic",children:['"',t(r.story),'"']})})]})]})]}):U.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[U.jsx("p",{className:"text-gray-600 mb-4",children:t("文物不存在")}),U.jsx("button",{onClick:()=>e("/artifacts"),className:"text-blue-600",children:t("返回文物列表")})]})}function V2(){var y;const i=Ki(),e=al(),[t,r]=ne.useState(((y=i.state)==null?void 0:y.artifactId)||1),[a,o]=ne.useState([]),[u,c]=ne.useState(""),[h,f]=ne.useState(!1),v=ne.useRef(null),{t:g,language:m}=kr(),_=ar.find(S=>S.id===t)||ar[0],E="37b6daee-c751-4daf-a974-b4e50526647c";ne.useEffect(()=>{a.length===0&&o([{id:Date.now(),role:"assistant",content:`${g("欢迎语前缀")}${g(_.name)}${g("欢迎语中缀1")}${g(_.dynasty)}${g("欢迎语中缀2")}`}])},[_,a.length]),ne.useEffect(()=>{var S;(S=v.current)==null||S.scrollIntoView({behavior:"smooth"})},[a]);const w=async()=>{if(!u.trim()||h)return;const S={id:Date.now(),role:"user",content:u};o(T=>[...T,S]),c(""),f(!0);try{const T=m==="zh"?`
        你现在是苏州博物馆的文物：${g(_.name)}。
        你的背景：来自${g(_.dynasty)}，具有${_.personality}的性格。
        你的任务：
        1. 以第一人称（"我"、"吾"）与现代游客对话。
        2. 语气要符合身份（比如傲娇、博学或调皮）。
        3. 适当加入苏博特色或江南文化元素。
        4. 回复简短有力，保持趣味性。
        5. 请使用中文回复。
      `:`
        You are now an artifact from Suzhou Museum: ${g(_.name)}.
        Your background: From ${g(_.dynasty)}, with a personality of ${_.personality}.
        Your task:
        1. Talk to modern visitors in the first person ("I").
        2. Your tone should match your identity (e.g., arrogant, knowledgeable, or playful).
        3. Appropriately incorporate Suzhou Museum features or Jiangnan cultural elements.
        4. Keep your responses short and powerful, maintaining playfulness.
        5. Please respond in English.
      `,P=await(await fetch("https://ark.cn-beijing.volces.com/api/v3/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${E}`},body:JSON.stringify({model:"doubao-1-5-pro-32k-250115",messages:[{role:"system",content:T},...a.map(D=>({role:D.role,content:D.content})),{role:"user",content:u}]})})).json();if(P.choices&&P.choices[0]){const D={id:Date.now()+1,role:"assistant",content:P.choices[0].message.content};o(L=>[...L,D])}}catch(T){console.error("传音失败:",T),o(C=>[...C,{id:Date.now()+1,role:"assistant",content:"哎呀，时空缝隙好像有点不稳，我刚才没听清你在说什么..."}])}finally{f(!1)}};return U.jsxs("div",{className:"flex flex-col h-screen bg-[#F9F9F9] text-[#333]",children:[U.jsx("div",{className:"bg-white border-b border-gray-100 p-4 sticky top-0 z-10 shadow-sm",children:U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("button",{onClick:()=>e(-1),className:"p-1 hover:bg-gray-100 rounded-full",children:U.jsx(hc,{className:"w-5 h-5 text-gray-600"})}),U.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden bg-gray-50 border border-amber-100",children:U.jsx(ka,{src:_.image,alt:g(_.name),className:"w-full h-full object-cover"})}),U.jsxs("div",{className:"flex-1",children:[U.jsx("h2",{className:"font-bold text-sm leading-tight",children:g(_.name)}),U.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-green-500",children:[U.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[U.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),U.jsx("span",{className:"relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"})]}),g("灵识觉醒中")]})]}),U.jsx("select",{className:"text-xs bg-gray-50 border-none rounded-lg p-1 outline-none text-gray-500",value:t,onChange:S=>{r(Number(S.target.value)),o([])},children:ar.map(S=>U.jsxs("option",{value:S.id,children:[g(S.name).slice(0,4),"..."]},S.id))})]})}),U.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-6",children:[U.jsx("div",{className:"text-center",children:U.jsx("span",{className:"text-[10px] bg-gray-200/50 text-gray-400 px-3 py-1 rounded-full uppercase tracking-widest",children:g("跨越千年的对话")})}),a.map(S=>U.jsx("div",{className:`flex ${S.role==="user"?"justify-end":"justify-start"}`,children:U.jsxs("div",{className:`flex gap-2 max-w-[85%] ${S.role==="user"?"flex-row-reverse":"flex-row"}`,children:[S.role==="assistant"&&U.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-50 flex-shrink-0 border border-amber-100 overflow-hidden",children:U.jsx(ka,{src:_.image,alt:g(_.name),className:"w-full h-full object-cover"})}),U.jsx("div",{className:`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${S.role==="user"?"bg-[#2F3E46] text-white rounded-tr-none":"bg-white text-gray-800 rounded-tl-none border border-gray-100"}`,children:S.content})]})},S.id)),h&&U.jsx("div",{className:"flex justify-start",children:U.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100",children:U.jsxs("div",{className:"flex gap-1",children:[U.jsx("div",{className:"w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),U.jsx("div",{className:"w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),U.jsx("div",{className:"w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})}),U.jsx("div",{ref:v})]}),U.jsxs("div",{className:"p-4 bg-white/80 backdrop-blur-md border-t border-gray-100",children:[U.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 border border-gray-200 focus-within:border-amber-400 transition-colors",children:[U.jsx(m1,{className:"text-amber-500 w-4 h-4"}),U.jsx("input",{type:"text",value:u,onChange:S=>c(S.target.value),onKeyDown:S=>S.key==="Enter"&&w(),placeholder:g("向{{name}}提问...",{name:g(_.name)}),className:"flex-1 bg-transparent py-3 text-sm outline-none"}),U.jsx("button",{onClick:w,disabled:!u.trim()||h,className:`p-2 rounded-full transition-all ${u.trim()?"bg-[#2F3E46] text-white scale-100":"bg-gray-300 text-gray-500 scale-90"}`,children:U.jsx(h1,{className:"w-4 h-4"})})]}),U.jsx("p",{className:"text-[9px] text-gray-400 text-center mt-2",children:g("AI 生成内容仅供参考，请以官方历史记载为准")})]})]})}function H2(){const{t:i}=kr(),e=[{id:"puzzle",name:"文物拼图",description:"将打乱的文物图片拼回完整",icon:o1,color:"from-blue-500 to-blue-600",path:"/games/puzzle"},{id:"guess",name:"猜猜文物",description:"根据线索猜测文物名称",icon:kE,color:"from-green-500 to-green-600",path:"/games/guess"}];return U.jsxs("div",{className:"min-h-full bg-gray-50",children:[U.jsxs("div",{className:"bg-white border-b border-gray-200 p-6",children:[U.jsx("h1",{className:"text-2xl",children:i("互动游戏")}),U.jsx("p",{className:"text-sm text-gray-600 mt-1",children:i("在游戏中学习吴文化知识")})]}),U.jsx("div",{className:"p-6 space-y-4",children:e.map(t=>{const r=t.icon;return U.jsx(Dr,{to:t.path,className:`block bg-gradient-to-br ${t.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`,children:U.jsxs("div",{className:"flex items-start gap-4",children:[U.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0",children:U.jsx(r,{className:"w-8 h-8"})}),U.jsxs("div",{className:"flex-1",children:[U.jsx("h3",{className:"text-xl mb-2",children:i(t.name)}),U.jsx("p",{className:"text-sm opacity-90",children:i(t.description)})]})]})},t.id)})}),U.jsx("div",{className:"px-6 pb-6",children:U.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4",children:U.jsx("p",{className:"text-sm text-amber-800",children:i("💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！")})})})]})}function G2(){const i=al(),{t:e}=kr(),[t]=ne.useState(ar[0]),[r,a]=ne.useState([]),[o,u]=ne.useState(0),[c,h]=ne.useState(!1),[f,v]=ne.useState(!1),g=3,m=g*g-1,_=ne.useCallback(()=>{let y=Array.from({length:g*g},(T,C)=>C),S=m;for(let T=0;T<100;T++){const C=E(S),P=C[Math.floor(Math.random()*C.length)];[y[S],y[P]]=[y[P],y[S]],S=P}a(y),u(0),h(!1)},[]);ne.useEffect(()=>{_()},[_]);function E(y){const S=[],T=Math.floor(y/g),C=y%g;return T>0&&S.push(y-g),T<g-1&&S.push(y+g),C>0&&S.push(y-1),C<g-1&&S.push(y+1),S}const w=y=>{if(c)return;const S=r.indexOf(m);if(E(S).includes(y)){const C=[...r];[C[y],C[S]]=[C[S],C[y]],a(C),u(P=>P+1),C.every((P,D)=>P===D)&&h(!0)}};return U.jsxs("div",{className:"min-h-screen bg-[#F7F8FA] pb-10",children:[U.jsxs("div",{className:"bg-white px-4 py-6 shadow-sm sticky top-0 z-10 flex items-center justify-between",children:[U.jsx("button",{onClick:()=>i("/games"),className:"p-2 hover:bg-gray-100 rounded-full",children:U.jsx(hc,{size:20})}),U.jsxs("div",{className:"text-center",children:[U.jsx("h1",{className:"font-bold text-gray-800",children:e("文物修复计划")}),U.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-widest",children:e("Puzzle Challenge")})]}),U.jsx("button",{onClick:_,className:"p-2 text-blue-600 hover:bg-blue-50 rounded-full",children:U.jsx(u1,{size:20})})]}),U.jsxs("div",{className:"max-w-md mx-auto p-6 flex flex-col items-center",children:[U.jsxs("div",{className:"w-full flex justify-between items-end mb-6",children:[U.jsxs("div",{children:[U.jsx("span",{className:"text-xs text-gray-400 block mb-1",children:e("正在修复")}),U.jsx("h2",{className:"text-lg font-bold text-[#2F3E46]",children:t.name})]}),U.jsxs("div",{className:"text-right",children:[U.jsx("span",{className:"text-xs text-gray-400 block mb-1",children:e("移动步数")}),U.jsx("span",{className:"text-xl font-mono font-bold text-blue-600",children:o})]})]}),U.jsx("div",{className:"relative w-full aspect-square bg-gray-200 rounded-2xl p-1.5 shadow-inner",children:U.jsx("div",{className:"grid grid-cols-3 gap-1 h-full w-full",children:r.map((y,S)=>{const T=y===m,C=Math.floor(y/g),P=y%g;return U.jsx("div",{onClick:()=>w(S),className:`relative rounded-lg overflow-hidden transition-all duration-200 active:scale-95 ${T?"bg-gray-200/50":"bg-white shadow-sm cursor-pointer border border-white/20"}`,style:{backgroundImage:T?"none":`url(${t.image})`,backgroundSize:`${g*100}%`,backgroundPosition:`${P*100/(g-1)}% ${C*100/(g-1)}%`},children:!T&&U.jsx("div",{className:"absolute inset-0 bg-black/5 flex items-center justify-center",children:U.jsx("span",{className:"text-[8px] text-white/30",children:y+1})})},y)})})}),U.jsx("div",{className:"mt-8 w-full flex gap-3",children:U.jsxs("button",{onClick:()=>v(!f),className:"flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl text-sm font-medium border border-gray-100 shadow-sm",children:[U.jsx(KE,{size:16,className:f?"text-yellow-500":"text-gray-400"}),e(f?"隐藏原图":"查看原图")]})}),f&&U.jsx("div",{className:"mt-4 p-2 bg-white rounded-lg shadow-sm animate-in fade-in zoom-in duration-300",children:U.jsx("img",{src:t.image,alt:"Hint",className:"w-32 h-32 object-cover rounded shadow-inner opacity-60"})})]}),c&&U.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-in fade-in duration-500",children:U.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl",children:[U.jsx("div",{className:"w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6",children:U.jsx(T_,{className:"w-10 h-10 text-yellow-600 animate-bounce"})}),U.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:e("修复成功！")}),U.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed",children:e("你只用了 {moves} 步就让 {artifactName} 焕发新生。",{moves:o,artifactName:t.name})}),U.jsxs("div",{className:"space-y-3",children:[U.jsx("button",{onClick:_,className:"w-full bg-[#2F3E46] text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform",children:e("挑战下一关")}),U.jsx("button",{onClick:()=>i("/games"),className:"w-full bg-gray-50 text-gray-500 py-3 rounded-xl text-sm",children:e("回到大厅")})]})]})})]})}function W2(){const i=al(),{t:e}=kr(),[t,r]=ne.useState(null),[a,o]=ne.useState(0),[u,c]=ne.useState(0),[h,f]=ne.useState(null),[v,g]=ne.useState(!1),[m,_]=ne.useState(0),E=5;ne.useEffect(()=>{w()},[]);const w=()=>{const P=ar[Math.floor(Math.random()*ar.length)],D=P.name,k=ar.filter(N=>N.id!==P.id).sort(()=>Math.random()-.5).slice(0,3).map(N=>N.name),M=[D,...k].sort(()=>Math.random()-.5);r({artifact:P,options:M,correctAnswer:D}),f(null),g(!1),_(0)},y=P=>{h||(f(P),g(!0),P===(t==null?void 0:t.correctAnswer)&&o(a+1),setTimeout(()=>{u+1>=E||(c(u+1),w())},2e3))},S=()=>{m<3&&_(m+1)},T=()=>{o(0),c(0),w()};if(!t)return U.jsx("div",{className:"flex items-center justify-center h-full",children:e("加载中...")});const C=u>=E&&v;return U.jsxs("div",{className:"min-h-full bg-gradient-to-b from-green-50 to-white",children:[U.jsxs("div",{className:"bg-white border-b border-gray-200 p-4",children:[U.jsxs("div",{className:"flex items-center justify-between mb-4",children:[U.jsxs("button",{onClick:()=>i("/games"),className:"flex items-center gap-2 text-gray-700",children:[U.jsx(hc,{className:"w-5 h-5"}),U.jsx("span",{children:e("返回")})]}),U.jsxs("div",{className:"text-sm",children:[U.jsx("span",{className:"text-gray-600",children:e("得分: ")}),U.jsx("span",{className:"text-lg text-green-600",children:a}),U.jsxs("span",{className:"text-gray-600",children:[e(" / ")," ",u]})]})]}),U.jsx("div",{className:"flex gap-1",children:Array.from({length:E}).map((P,D)=>U.jsx("div",{className:`flex-1 h-1.5 rounded-full ${D<u?"bg-green-600":D===u?"bg-green-300":"bg-gray-200"}`},D))})]}),U.jsxs("div",{className:"p-6",children:[U.jsx("h2",{className:"text-xl mb-6 text-center",children:e("这是什么文物？")}),U.jsxs("div",{className:"max-w-sm mx-auto mb-6",children:[U.jsx("div",{className:"relative rounded-xl overflow-hidden bg-gray-100 aspect-square",children:U.jsx(ka,{src:t.artifact.image,alt:"猜猜看",className:"w-full h-full object-cover",style:{filter:`blur(${Math.max(0,20-m*7)}px)`}})}),U.jsx("button",{onClick:S,disabled:m>=3||h!==null,className:"w-full mt-3 py-2 bg-blue-100 text-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",children:e(m===0?"🔍 显示线索 (3次)":m===1?"🔍 再清晰一点 (2次)":m===2?"🔍 最后一次提示 (1次)":"✓ 已显示完整图片")})]}),m>0&&U.jsxs("div",{className:"max-w-sm mx-auto mb-6 space-y-2",children:[m>=1&&U.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3",children:U.jsxs("p",{className:"text-sm text-blue-800",children:[e("💡 朝代："),t.artifact.dynasty]})}),m>=2&&U.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3",children:U.jsxs("p",{className:"text-sm text-blue-800",children:[e("💡 年代："),t.artifact.year]})}),m>=3&&U.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3",children:U.jsxs("p",{className:"text-sm text-blue-800",children:[e("💡 提示："),t.artifact.description.slice(0,30),"..."]})})]}),U.jsx("div",{className:"max-w-sm mx-auto space-y-3",children:t.options.map(P=>{const D=h===P,L=P===t.correctAnswer,k=v&&L,M=v&&D&&!L;return U.jsx("button",{onClick:()=>y(P),disabled:h!==null,className:`w-full p-4 rounded-xl border-2 text-left transition-all ${k?"bg-green-100 border-green-600":M?"bg-red-100 border-red-600":D?"bg-gray-100 border-gray-400":"bg-white border-gray-200 hover:border-gray-400"} disabled:cursor-not-allowed`,children:U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsx("span",{children:P}),k&&U.jsx(FE,{className:"w-5 h-5 text-green-600"}),M&&U.jsx(_1,{className:"w-5 h-5 text-red-600"})]})},P)})}),v&&!C&&U.jsx("div",{className:"max-w-sm mx-auto mt-4",children:U.jsx("div",{className:`p-4 rounded-lg ${h===t.correctAnswer?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:U.jsx("p",{className:`text-center ${h===t.correctAnswer?"text-green-800":"text-red-800"}`,children:h===t.correctAnswer?e("🎉 回答正确！"):`${e("❌ 正确答案是：")}${t.correctAnswer}`})})})]}),C&&U.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:U.jsxs("div",{className:"bg-white rounded-2xl p-8 max-w-sm mx-4 text-center",children:[U.jsx("div",{className:"w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4",children:U.jsx(T_,{className:"w-8 h-8 text-yellow-600"})}),U.jsx("h3",{className:"text-2xl mb-2",children:e("游戏结束！")}),U.jsxs("p",{className:"text-3xl text-green-600 mb-2",children:[a," / ",E]}),U.jsx("p",{className:"text-gray-600 mb-6",children:a===E?e("完美！你是文物专家！"):a>=E*.6?e("不错！继续加油！"):e("多看看文物介绍吧~")}),U.jsxs("div",{className:"flex gap-3",children:[U.jsx("button",{onClick:T,className:"flex-1 bg-green-600 text-white py-3 rounded-lg",children:e("再玩一次")}),U.jsx("button",{onClick:()=>i("/games"),className:"flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg",children:e("返回")})]})]})})]})}const j2=gE([{path:"/",Component:b1,children:[{index:!0,Component:A1},{path:"artifacts",Component:R1},{path:"artifacts/:id",Component:z2},{path:"chat",Component:V2},{path:"games",Component:H2},{path:"games/puzzle",Component:G2},{path:"games/guess",Component:W2}]}]);function X2(){return U.jsx(w1,{children:U.jsx(HM,{router:j2})})}tS.createRoot(document.getElementById("root")).render(U.jsx(X2,{}));export{Qw as $,J2 as A,Pi as B,Bt as C,Nb as D,vi as E,sP as F,eP as G,Q_ as H,Q2 as I,tP as J,nP as K,cl as L,iP as M,mu as N,xn as O,Cb as P,Xs as Q,ih as R,Ai as S,$2 as T,_u as U,Zt as V,si as W,K2 as X,_p as Y,J_ as Z,rP as _,q2 as a,nc as a0,Oh as a1,K_ as a2,jn as a3,uc as a4,lc as a5,vc as a6,Xt as a7,xs as a8,ul as a9,Br as aa,zr as ab,Y2 as b,lP as c,Ha as d,oP as e,Vt as f,le as g,sv as h,aP as i,uP as j,Z2 as k,Hs as l,cf as m,nw as n,Wn as o,Fn as p,rh as q,Nr as r,ab as s,$s as t,sb as u,ix as v,Pr as w,Z_ as x,nn as y,Di as z};
