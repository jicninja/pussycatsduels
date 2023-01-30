var Lp=Object.defineProperty;var Pp=(i,e,t)=>e in i?Lp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var rn=(i,e,t)=>(Pp(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Bl(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function jo(i){if(Pe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=pt(n)?Fp(n):jo(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(pt(i))return i;if(rt(i))return i}}const Ip=/;(?![^(]*\))/g,Dp=/:([^]+)/,Np=/\/\*.*?\*\//gs;function Fp(i){const e={};return i.replace(Np,"").split(Ip).forEach(t=>{if(t){const n=t.split(Dp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function fn(i){let e="";if(pt(i))e=i;else if(Pe(i))for(let t=0;t<i.length;t++){const n=fn(i[t]);n&&(e+=n+" ")}else if(rt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=Bl(Op);function hf(i){return!!i||i===""}const Po=i=>pt(i)?i:i==null?"":Pe(i)||rt(i)&&(i.toString===pf||!Ne(i.toString))?JSON.stringify(i,ff,2):String(i),ff=(i,e)=>e&&e.__v_isRef?ff(i,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:df(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!Pe(e)&&!mf(e)?String(e):e,st={},bs=[],dn=()=>{},Bp=()=>!1,kp=/^on[^a-z]/,qo=i=>kp.test(i),kl=i=>i.startsWith("onUpdate:"),Ot=Object.assign,zl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},zp=Object.prototype.hasOwnProperty,je=(i,e)=>zp.call(i,e),Pe=Array.isArray,Ms=i=>Xo(i)==="[object Map]",df=i=>Xo(i)==="[object Set]",Ne=i=>typeof i=="function",pt=i=>typeof i=="string",Hl=i=>typeof i=="symbol",rt=i=>i!==null&&typeof i=="object",Vl=i=>rt(i)&&Ne(i.then)&&Ne(i.catch),pf=Object.prototype.toString,Xo=i=>pf.call(i),Hp=i=>Xo(i).slice(8,-1),mf=i=>Xo(i)==="[object Object]",Gl=i=>pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,wo=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Vp=/-(\w)/g,Cs=Ko(i=>i.replace(Vp,(e,t)=>t?t.toUpperCase():"")),Gp=/\B([A-Z])/g,Gs=Ko(i=>i.replace(Gp,"-$1").toLowerCase()),gf=Ko(i=>i.charAt(0).toUpperCase()+i.slice(1)),pa=Ko(i=>i?`on${gf(i)}`:""),wr=(i,e)=>!Object.is(i,e),ma=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Io=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Wl=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Fc;const Wp=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Wt;class _f{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function xf(i){return new _f(i)}function jp(i,e=Wt){e&&e.active&&e.effects.push(i)}function qp(){return Wt}function Xp(i){Wt&&Wt.cleanups.push(i)}const jl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},vf=i=>(i.w&pi)>0,yf=i=>(i.n&pi)>0,Kp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=pi},$p=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];vf(s)&&!yf(s)?s.delete(i):e[t++]=s,s.w&=~pi,s.n&=~pi}e.length=t}},ol=new WeakMap;let dr=0,pi=1;const al=30;let un;const Fi=Symbol(""),ll=Symbol("");class ql{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,jp(this,n)}run(){if(!this.active)return this.fn();let e=un,t=ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,ui=!0,pi=1<<++dr,dr<=al?Kp(this):Oc(this),this.fn()}finally{dr<=al&&$p(this),pi=1<<--dr,un=this.parent,ui=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function Oc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ui=!0;const bf=[];function Ws(){bf.push(ui),ui=!1}function js(){const i=bf.pop();ui=i===void 0?!0:i}function Kt(i,e,t){if(ui&&un){let n=ol.get(i);n||ol.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=jl()),Mf(s)}}function Mf(i,e){let t=!1;dr<=al?yf(i)||(i.n|=pi,t=!vf(i)):t=!i.has(un),t&&(i.add(un),un.deps.push(i))}function Wn(i,e,t,n,s,r){const o=ol.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(i)){const l=Wl(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(i)?Gl(t)&&a.push(o.get("length")):(a.push(o.get(Fi)),Ms(i)&&a.push(o.get(ll)));break;case"delete":Pe(i)||(a.push(o.get(Fi)),Ms(i)&&a.push(o.get(ll)));break;case"set":Ms(i)&&a.push(o.get(Fi));break}if(a.length===1)a[0]&&cl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cl(jl(l))}}function cl(i,e){const t=Pe(i)?i:[...i];for(const n of t)n.computed&&Uc(n);for(const n of t)n.computed||Uc(n)}function Uc(i,e){(i!==un||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Yp=Bl("__proto__,__v_isRef,__isVue"),Sf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Hl)),Zp=Xl(),Jp=Xl(!1,!0),Qp=Xl(!0),Bc=em();function em(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ke(this);for(let r=0,o=this.length;r<o;r++)Kt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ws();const n=Ke(this)[e].apply(this,t);return js(),n}}),i}function Xl(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?gm:Cf:e?Af:Ef).get(n))return n;const o=Pe(n);if(!i&&o&&je(Bc,s))return Reflect.get(Bc,s,r);const a=Reflect.get(n,s,r);return(Hl(s)?Sf.has(s):Yp(s))||(i||Kt(n,"get",s),e)?a:at(a)?o&&Gl(s)?a:a.value:rt(a)?i?Rf(a):qs(a):a}}const tm=wf(),nm=wf(!0);function wf(i=!1){return function(t,n,s,r){let o=t[n];if(Rs(o)&&at(o)&&!at(s))return!1;if(!i&&(!Do(s)&&!Rs(s)&&(o=Ke(o),s=Ke(s)),!Pe(t)&&at(o)&&!at(s)))return o.value=s,!0;const a=Pe(t)&&Gl(n)?Number(n)<t.length:je(t,n),l=Reflect.set(t,n,s,r);return t===Ke(r)&&(a?wr(s,o)&&Wn(t,"set",n,s):Wn(t,"add",n,s)),l}}function im(i,e){const t=je(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Wn(i,"delete",e,void 0),n}function sm(i,e){const t=Reflect.has(i,e);return(!Hl(e)||!Sf.has(e))&&Kt(i,"has",e),t}function rm(i){return Kt(i,"iterate",Pe(i)?"length":Fi),Reflect.ownKeys(i)}const Tf={get:Zp,set:tm,deleteProperty:im,has:sm,ownKeys:rm},om={get:Qp,set(i,e){return!0},deleteProperty(i,e){return!0}},am=Ot({},Tf,{get:Jp,set:nm}),Kl=i=>i,$o=i=>Reflect.getPrototypeOf(i);function Xr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ke(i),r=Ke(e);t||(e!==r&&Kt(s,"get",e),Kt(s,"get",r));const{has:o}=$o(s),a=n?Kl:t?Zl:Tr;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Kr(i,e=!1){const t=this.__v_raw,n=Ke(t),s=Ke(i);return e||(i!==s&&Kt(n,"has",i),Kt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function $r(i,e=!1){return i=i.__v_raw,!e&&Kt(Ke(i),"iterate",Fi),Reflect.get(i,"size",i)}function kc(i){i=Ke(i);const e=Ke(this);return $o(e).has.call(e,i)||(e.add(i),Wn(e,"add",i,i)),this}function zc(i,e){e=Ke(e);const t=Ke(this),{has:n,get:s}=$o(t);let r=n.call(t,i);r||(i=Ke(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?wr(e,o)&&Wn(t,"set",i,e):Wn(t,"add",i,e),this}function Hc(i){const e=Ke(this),{has:t,get:n}=$o(e);let s=t.call(e,i);s||(i=Ke(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Wn(e,"delete",i,void 0),r}function Vc(){const i=Ke(this),e=i.size!==0,t=i.clear();return e&&Wn(i,"clear",void 0,void 0),t}function Yr(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Ke(o),l=e?Kl:i?Zl:Tr;return!i&&Kt(a,"iterate",Fi),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Zr(i,e,t){return function(...n){const s=this.__v_raw,r=Ke(s),o=Ms(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Kl:e?Zl:Tr;return!e&&Kt(r,"iterate",l?ll:Fi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Kn(i){return function(...e){return i==="delete"?!1:this}}function lm(){const i={get(r){return Xr(this,r)},get size(){return $r(this)},has:Kr,add:kc,set:zc,delete:Hc,clear:Vc,forEach:Yr(!1,!1)},e={get(r){return Xr(this,r,!1,!0)},get size(){return $r(this)},has:Kr,add:kc,set:zc,delete:Hc,clear:Vc,forEach:Yr(!1,!0)},t={get(r){return Xr(this,r,!0)},get size(){return $r(this,!0)},has(r){return Kr.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Yr(!0,!1)},n={get(r){return Xr(this,r,!0,!0)},get size(){return $r(this,!0)},has(r){return Kr.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Zr(r,!1,!1),t[r]=Zr(r,!0,!1),e[r]=Zr(r,!1,!0),n[r]=Zr(r,!0,!0)}),[i,t,e,n]}const[cm,um,hm,fm]=lm();function $l(i,e){const t=e?i?fm:hm:i?um:cm;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(je(t,s)&&s in n?t:n,s,r)}const dm={get:$l(!1,!1)},pm={get:$l(!1,!0)},mm={get:$l(!0,!1)},Ef=new WeakMap,Af=new WeakMap,Cf=new WeakMap,gm=new WeakMap;function _m(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xm(i){return i.__v_skip||!Object.isExtensible(i)?0:_m(Hp(i))}function qs(i){return Rs(i)?i:Yl(i,!1,Tf,dm,Ef)}function vm(i){return Yl(i,!1,am,pm,Af)}function Rf(i){return Yl(i,!0,om,mm,Cf)}function Yl(i,e,t,n,s){if(!rt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=xm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function hi(i){return Rs(i)?hi(i.__v_raw):!!(i&&i.__v_isReactive)}function Rs(i){return!!(i&&i.__v_isReadonly)}function Do(i){return!!(i&&i.__v_isShallow)}function Lf(i){return hi(i)||Rs(i)}function Ke(i){const e=i&&i.__v_raw;return e?Ke(e):i}function Ls(i){return Io(i,"__v_skip",!0),i}const Tr=i=>rt(i)?qs(i):i,Zl=i=>rt(i)?Rf(i):i;function Pf(i){ui&&un&&(i=Ke(i),Mf(i.dep||(i.dep=jl())))}function If(i,e){i=Ke(i),i.dep&&cl(i.dep)}function at(i){return!!(i&&i.__v_isRef===!0)}function Dt(i){return Df(i,!1)}function ym(i){return Df(i,!0)}function Df(i,e){return at(i)?i:new bm(i,e)}class bm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Tr(e)}get value(){return Pf(this),this._value}set value(e){const t=this.__v_isShallow||Do(e)||Rs(e);e=t?e:Ke(e),wr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Tr(e),If(this))}}function ze(i){return at(i)?i.value:i}const Mm={get:(i,e,t)=>ze(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return at(s)&&!at(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Nf(i){return hi(i)?i:new Proxy(i,Mm)}function Sm(i){const e=Pe(i)?new Array(i.length):{};for(const t in i)e[t]=Tm(i,t);return e}class wm{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Tm(i,e,t){const n=i[e];return at(n)?n:new wm(i,e,t)}var Ff;class Em{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ff]=!1,this._dirty=!0,this.effect=new ql(e,()=>{this._dirty||(this._dirty=!0,If(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Ke(this);return Pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ff="__v_isReadonly";function Am(i,e,t=!1){let n,s;const r=Ne(i);return r?(n=i,s=dn):(n=i.get,s=i.set),new Em(n,s,r||!s,t)}function fi(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){zr(r,e,t)}return s}function pn(i,e,t,n){if(Ne(i)){const r=fi(i,e,t,n);return r&&Vl(r)&&r.catch(o=>{zr(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(pn(i[r],e,t,n));return s}function zr(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){fi(l,null,10,[i,o,a]);return}}Cm(i,t,s,n)}function Cm(i,e,t,n=!0){console.error(i)}let Er=!1,ul=!1;const At=[];let wn=0;const Ss=[];let kn=null,Ri=0;const Of=Promise.resolve();let Jl=null;function Ql(i){const e=Jl||Of;return i?e.then(this?i.bind(this):i):e}function Rm(i){let e=wn+1,t=At.length;for(;e<t;){const n=e+t>>>1;Ar(At[n])<i?e=n+1:t=n}return e}function ec(i){(!At.length||!At.includes(i,Er&&i.allowRecurse?wn+1:wn))&&(i.id==null?At.push(i):At.splice(Rm(i.id),0,i),Uf())}function Uf(){!Er&&!ul&&(ul=!0,Jl=Of.then(zf))}function Lm(i){const e=At.indexOf(i);e>wn&&At.splice(e,1)}function Bf(i){Pe(i)?Ss.push(...i):(!kn||!kn.includes(i,i.allowRecurse?Ri+1:Ri))&&Ss.push(i),Uf()}function Gc(i,e=Er?wn+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function kf(i){if(Ss.length){const e=[...new Set(Ss)];if(Ss.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,n)=>Ar(t)-Ar(n)),Ri=0;Ri<kn.length;Ri++)kn[Ri]();kn=null,Ri=0}}const Ar=i=>i.id==null?1/0:i.id,Pm=(i,e)=>{const t=Ar(i)-Ar(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function zf(i){ul=!1,Er=!0,At.sort(Pm);const e=dn;try{for(wn=0;wn<At.length;wn++){const t=At[wn];t&&t.active!==!1&&fi(t,null,14)}}finally{wn=0,At.length=0,kf(),Er=!1,Jl=null,(At.length||Ss.length)&&zf()}}function Im(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||st;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||st;f&&(s=t.map(d=>pt(d)?d.trim():d)),h&&(s=t.map(Wl))}let a,l=n[a=pa(e)]||n[a=pa(Cs(e))];!l&&r&&(l=n[a=pa(Gs(e))]),l&&pn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,pn(c,i,6,s)}}function Hf(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ne(i)){const l=c=>{const u=Hf(c,e,!0);u&&(a=!0,Ot(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(rt(i)&&n.set(i,null),null):(Pe(r)?r.forEach(l=>o[l]=null):Ot(o,r),rt(i)&&n.set(i,o),o)}function Yo(i,e){return!i||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(i,e[0].toLowerCase()+e.slice(1))||je(i,Gs(e))||je(i,e))}let hn=null,Zo=null;function No(i){const e=hn;return hn=i,Zo=i&&i.type.__scopeId||null,e}function Vf(i){Zo=i}function Gf(){Zo=null}function Wf(i,e=hn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Jc(-1);const r=No(e);let o;try{o=i(...s)}finally{No(r),n._d&&Jc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ga(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=i;let p,_;const b=No(i);try{if(t.shapeFlag&4){const w=s||n;p=cn(u.call(w,w,h,r,d,f,g)),_=l}else{const w=e;p=cn(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),_=e.props?l:Nm(l)}}catch(w){xr.length=0,zr(w,i,1),p=Mt(jn)}let x=p;if(_&&m!==!1){const w=Object.keys(_),{shapeFlag:M}=x;w.length&&M&7&&(o&&w.some(kl)&&(_=Fm(_,o)),x=Is(x,_))}return t.dirs&&(x=Is(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,No(b),p}function Dm(i){let e;for(let t=0;t<i.length;t++){const n=i[t];if(Oo(n)){if(n.type!==jn||n.children==="v-if"){if(e)return;e=n}}else return}return e}const Nm=i=>{let e;for(const t in i)(t==="class"||t==="style"||qo(t))&&((e||(e={}))[t]=i[t]);return e},Fm=(i,e)=>{const t={};for(const n in i)(!kl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Om(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Wc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Yo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Wc(n,o,c):!0:!!o;return!1}function Wc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Yo(t,r))return!0}return!1}function tc({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Um=i=>i.__isSuspense,Bm={name:"Suspense",__isSuspense:!0,process(i,e,t,n,s,r,o,a,l,c){i==null?zm(e,t,n,s,r,o,a,l,c):Hm(i,e,t,n,s,o,a,l,c)},hydrate:Vm,create:nc,normalize:Gm},km=Bm;function Cr(i,e){const t=i.props&&i.props[e];Ne(t)&&t()}function zm(i,e,t,n,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=i.suspense=nc(i,s,n,e,h,t,r,o,a,l);c(null,f.pendingBranch=i.ssContent,h,null,n,f,r,o),f.deps>0?(Cr(i,"onPending"),Cr(i,"onFallback"),c(null,i.ssFallback,e,t,n,null,r,o),ws(f,i.ssFallback)):f.resolve()}function Hm(i,e,t,n,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=i.suspense;h.vnode=e,e.el=i.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:m,isInFallback:p,isHydrating:_}=h;if(m)h.pendingBranch=f,ai(f,m)?(l(m,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():p&&(l(g,d,t,n,s,null,r,o,a),ws(h,d))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=m):c(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),p?(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():(l(g,d,t,n,s,null,r,o,a),ws(h,d))):g&&ai(f,g)?(l(g,f,t,n,s,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0&&h.resolve()));else if(g&&ai(f,g))l(g,f,t,n,s,h,r,o,a),ws(h,f);else if(Cr(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:b,pendingId:x}=h;b>0?setTimeout(()=>{h.pendingId===x&&h.fallback(d)},b):b===0&&h.fallback(d)}}function nc(i,e,t,n,s,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:g,o:{parentNode:m,remove:p}}=c,_=Wl(i.props&&i.props.timeout),b={vnode:i,parent:e,parentComponent:t,isSVG:o,container:n,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(x=!1){const{vnode:w,activeBranch:M,pendingBranch:R,pendingId:L,effects:v,parentComponent:C,container:O}=b;if(b.isHydrating)b.isHydrating=!1;else if(!x){const B=M&&R.transition&&R.transition.mode==="out-in";B&&(M.transition.afterLeave=()=>{L===b.pendingId&&f(R,O,N,0)});let{anchor:N}=b;M&&(N=g(M),d(M,C,b,!0)),B||f(R,O,N,0)}ws(b,R),b.pendingBranch=null,b.isInFallback=!1;let W=b.parent,ae=!1;for(;W;){if(W.pendingBranch){W.effects.push(...v),ae=!0;break}W=W.parent}ae||Bf(v),b.effects=[],Cr(w,"onResolve")},fallback(x){if(!b.pendingBranch)return;const{vnode:w,activeBranch:M,parentComponent:R,container:L,isSVG:v}=b;Cr(w,"onFallback");const C=g(M),O=()=>{b.isInFallback&&(h(null,x,L,C,R,null,v,a,l),ws(b,x))},W=x.transition&&x.transition.mode==="out-in";W&&(M.transition.afterLeave=O),b.isInFallback=!0,d(M,R,null,!0),W||O()},move(x,w,M){b.activeBranch&&f(b.activeBranch,x,w,M),b.container=x},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(x,w){const M=!!b.pendingBranch;M&&b.deps++;const R=x.vnode.el;x.asyncDep.catch(L=>{zr(L,x,0)}).then(L=>{if(x.isUnmounted||b.isUnmounted||b.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:v}=x;gl(x,L,!1),R&&(v.el=R);const C=!R&&x.subTree.el;w(x,v,m(R||x.subTree.el),R?null:g(x.subTree),b,o,l),C&&p(C),tc(x,v.el),M&&--b.deps===0&&b.resolve()})},unmount(x,w){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,t,x,w),b.pendingBranch&&d(b.pendingBranch,t,x,w)}};return b}function Vm(i,e,t,n,s,r,o,a,l){const c=e.suspense=nc(e,n,t,i.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(i,c.pendingBranch=e.ssContent,t,c,r,o);return c.deps===0&&c.resolve(),u}function Gm(i){const{shapeFlag:e,children:t}=i,n=e&32;i.ssContent=jc(n?t.default:t),i.ssFallback=n?jc(t.fallback):Mt(jn)}function jc(i){let e;if(Ne(i)){const t=Ps&&i._c;t&&(i._d=!1,bt()),i=i(),t&&(i._d=!0,e=tn,sd())}return Pe(i)&&(i=Dm(i)),i=cn(i),e&&!i.dynamicChildren&&(i.dynamicChildren=e.filter(t=>t!==i)),i}function Wm(i,e){e&&e.pendingBranch?Pe(i)?e.effects.push(...i):e.effects.push(i):Bf(i)}function ws(i,e){i.activeBranch=e;const{vnode:t,parentComponent:n}=i,s=t.el=e.el;n&&n.subTree===t&&(n.vnode.el=s,tc(n,s))}function To(i,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[i]=e}}function Tn(i,e,t=!1){const n=St||hn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ne(e)?e.call(n.proxy):e}}const Jr={};function gr(i,e,t){return jf(i,e,t)}function jf(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=st){const a=St;let l,c=!1,u=!1;if(at(i)?(l=()=>i.value,c=Do(i)):hi(i)?(l=()=>i,n=!0):Pe(i)?(u=!0,c=i.some(x=>hi(x)||Do(x)),l=()=>i.map(x=>{if(at(x))return x.value;if(hi(x))return gs(x);if(Ne(x))return fi(x,a,2)})):Ne(i)?e?l=()=>fi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),pn(i,a,3,[f])}:l=dn,e&&n){const x=l;l=()=>gs(x())}let h,f=x=>{h=_.onStop=()=>{fi(x,a,4)}},d;if(Rr)if(f=dn,e?t&&pn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const x=Ug();d=x.__watcherHandles||(x.__watcherHandles=[])}else return dn;let g=u?new Array(i.length).fill(Jr):Jr;const m=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((w,M)=>wr(w,g[M])):wr(x,g)))&&(h&&h(),pn(e,a,3,[x,g===Jr?void 0:u&&g[0]===Jr?[]:g,f]),g=x)}else _.run()};m.allowRecurse=!!e;let p;s==="sync"?p=m:s==="post"?p=()=>Ut(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),p=()=>ec(m));const _=new ql(l,p);e?t?m():g=_.run():s==="post"?Ut(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&zl(a.scope.effects,_)};return d&&d.push(b),b}function jm(i,e,t){const n=this.proxy,s=pt(i)?i.includes(".")?qf(n,i):()=>n[i]:i.bind(n,n);let r;Ne(e)?r=e:(r=e.handler,t=e);const o=St;mi(this);const a=jf(s,r.bind(n),t);return o?mi(o):di(),a}function qf(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function gs(i,e){if(!rt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),at(i))gs(i.value,e);else if(Pe(i))for(let t=0;t<i.length;t++)gs(i[t],e);else if(df(i)||Ms(i))i.forEach(t=>{gs(t,e)});else if(mf(i))for(const t in i)gs(i[t],e);return i}function vn(i){return Ne(i)?{setup:i,name:i.name}:i}const Eo=i=>!!i.type.__asyncLoader,Xf=i=>i.type.__isKeepAlive;function qm(i,e){Kf(i,"a",e)}function Xm(i,e){Kf(i,"da",e)}function Kf(i,e,t=St){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Jo(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Xf(s.parent.vnode)&&Km(n,e,t,s),s=s.parent}}function Km(i,e,t,n){const s=Jo(e,i,n,!0);$f(()=>{zl(n[e],s)},t)}function Jo(i,e,t=St,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ws(),mi(t);const a=pn(e,t,i,o);return di(),js(),a});return n?s.unshift(r):s.push(r),r}}const Xn=i=>(e,t=St)=>(!Rr||i==="sp")&&Jo(i,(...n)=>e(...n),t),$m=Xn("bm"),Ym=Xn("m"),Zm=Xn("bu"),Jm=Xn("u"),Qm=Xn("bum"),$f=Xn("um"),eg=Xn("sp"),tg=Xn("rtg"),ng=Xn("rtc");function ig(i,e=St){Jo("ec",i,e)}function bi(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ws(),pn(l,t,8,[i.el,a,i,e]),js())}}const sg=Symbol();function rg(i,e,t,n){let s;const r=t&&t[n];if(Pe(i)||pt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(rt(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}const hl=i=>i?ld(i)?oc(i)||i.proxy:hl(i.parent):null,_r=Ot(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>hl(i.parent),$root:i=>hl(i.root),$emit:i=>i.emit,$options:i=>ic(i),$forceUpdate:i=>i.f||(i.f=()=>ec(i.update)),$nextTick:i=>i.n||(i.n=Ql.bind(i.proxy)),$watch:i=>jm.bind(i)}),_a=(i,e)=>i!==st&&!i.__isScriptSetup&&je(i,e),og={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(_a(n,e))return o[e]=1,n[e];if(s!==st&&je(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&je(c,e))return o[e]=3,r[e];if(t!==st&&je(t,e))return o[e]=4,t[e];fl&&(o[e]=0)}}const u=_r[e];let h,f;if(u)return e==="$attrs"&&Kt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,je(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return _a(s,e)?(s[e]=t,!0):n!==st&&je(n,e)?(n[e]=t,!0):je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==st&&je(i,o)||_a(e,o)||(a=r[0])&&je(a,o)||je(n,o)||je(_r,o)||je(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let fl=!0;function ag(i){const e=ic(i),t=i.proxy,n=i.ctx;fl=!1,e.beforeCreate&&qc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:w,render:M,renderTracked:R,renderTriggered:L,errorCaptured:v,serverPrefetch:C,expose:O,inheritAttrs:W,components:ae,directives:B,filters:N}=e;if(c&&lg(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const J in o){const V=o[J];Ne(V)&&(n[J]=V.bind(t))}if(s){const J=s.call(t,t);rt(J)&&(i.data=qs(J))}if(fl=!0,r)for(const J in r){const V=r[J],fe=Ne(V)?V.bind(t,t):Ne(V.get)?V.get.bind(t,t):dn,ce=!Ne(V)&&Ne(V.set)?V.set.bind(t):dn,j=jt({get:fe,set:ce});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>j.value,set:K=>j.value=K})}if(a)for(const J in a)Yf(a[J],n,t,J);if(l){const J=Ne(l)?l.call(t):l;Reflect.ownKeys(J).forEach(V=>{To(V,J[V])})}u&&qc(u,i,"c");function se(J,V){Pe(V)?V.forEach(fe=>J(fe.bind(t))):V&&J(V.bind(t))}if(se($m,h),se(Ym,f),se(Zm,d),se(Jm,g),se(qm,m),se(Xm,p),se(ig,v),se(ng,R),se(tg,L),se(Qm,b),se($f,w),se(eg,C),Pe(O))if(O.length){const J=i.exposed||(i.exposed={});O.forEach(V=>{Object.defineProperty(J,V,{get:()=>t[V],set:fe=>t[V]=fe})})}else i.exposed||(i.exposed={});M&&i.render===dn&&(i.render=M),W!=null&&(i.inheritAttrs=W),ae&&(i.components=ae),B&&(i.directives=B)}function lg(i,e,t=dn,n=!1){Pe(i)&&(i=dl(i));for(const s in i){const r=i[s];let o;rt(r)?"default"in r?o=Tn(r.from||s,r.default,!0):o=Tn(r.from||s):o=Tn(r),at(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function qc(i,e,t){pn(Pe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Yf(i,e,t,n){const s=n.includes(".")?qf(t,n):()=>t[n];if(pt(i)){const r=e[i];Ne(r)&&gr(s,r)}else if(Ne(i))gr(s,i.bind(t));else if(rt(i))if(Pe(i))i.forEach(r=>Yf(r,e,t,n));else{const r=Ne(i.handler)?i.handler.bind(t):e[i.handler];Ne(r)&&gr(s,r,i)}}function ic(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),rt(e)&&r.set(e,l),l}function Fo(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Fo(i,r,t,!0),s&&s.forEach(o=>Fo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=cg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const cg={data:Xc,props:Ei,emits:Ei,methods:Ei,computed:Ei,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ei,directives:Ei,watch:hg,provide:Xc,inject:ug};function Xc(i,e){return e?i?function(){return Ot(Ne(i)?i.call(this,this):i,Ne(e)?e.call(this,this):e)}:e:i}function ug(i,e){return Ei(dl(i),dl(e))}function dl(i){if(Pe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Pt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ei(i,e){return i?Ot(Ot(Object.create(null),i),e):e}function hg(i,e){if(!i)return e;if(!e)return i;const t=Ot(Object.create(null),i);for(const n in e)t[n]=Pt(i[n],e[n]);return t}function fg(i,e,t,n=!1){const s={},r={};Io(r,ea,1),i.propsDefaults=Object.create(null),Zf(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:vm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function dg(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Ke(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yo(i.emitsOptions,f))continue;const d=e[f];if(l)if(je(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Cs(f);s[g]=pl(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Zf(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!je(e,h)&&((u=Gs(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=pl(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!je(e,h))&&(delete r[h],c=!0)}c&&Wn(i,"set","$attrs")}function Zf(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(wo(l))continue;const c=e[l];let u;s&&je(s,u=Cs(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Yo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Ke(t),c=a||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=pl(s,l,h,c[h],i,!je(c,h))}}return o}function pl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(mi(s),n=c[t]=l.call(null,e),di())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Gs(t))&&(n=!0))}return n}function Jf(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ne(i)){const u=h=>{l=!0;const[f,d]=Jf(h,e,!0);Ot(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return rt(i)&&n.set(i,bs),bs;if(Pe(r))for(let u=0;u<r.length;u++){const h=Cs(r[u]);Kc(h)&&(o[h]=st)}else if(r)for(const u in r){const h=Cs(u);if(Kc(h)){const f=r[u],d=o[h]=Pe(f)||Ne(f)?{type:f}:Object.assign({},f);if(d){const g=Zc(Boolean,d.type),m=Zc(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||je(d,"default"))&&a.push(h)}}}const c=[o,a];return rt(i)&&n.set(i,c),c}function Kc(i){return i[0]!=="$"}function $c(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Yc(i,e){return $c(i)===$c(e)}function Zc(i,e){return Pe(e)?e.findIndex(t=>Yc(t,i)):Ne(e)&&Yc(e,i)?0:-1}const Qf=i=>i[0]==="_"||i==="$stable",sc=i=>Pe(i)?i.map(cn):[cn(i)],pg=(i,e,t)=>{if(e._n)return e;const n=Wf((...s)=>sc(e(...s)),t);return n._c=!1,n},ed=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Qf(s))continue;const r=i[s];if(Ne(r))e[s]=pg(s,r,n);else if(r!=null){const o=sc(r);e[s]=()=>o}}},td=(i,e)=>{const t=sc(e);i.slots.default=()=>t},mg=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ke(e),Io(e,"_",t)):ed(e,i.slots={})}else i.slots={},e&&td(i,e);Io(i.slots,ea,1)},gg=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=st;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Ot(s,e),!t&&a===1&&delete s._):(r=!e.$stable,ed(e,s)),o=e}else e&&(td(i,e),o={default:1});if(r)for(const a in s)!Qf(a)&&!(a in o)&&delete s[a]};function nd(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _g=0;function xg(i,e){return function(n,s=null){Ne(n)||(n=Object.assign({},n)),s!=null&&!rt(s)&&(s=null);const r=nd(),o=new Set;let a=!1;const l=r.app={_uid:_g++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Bg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Mt(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,oc(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ml(i,e,t,n,s=!1){if(Pe(i)){i.forEach((f,d)=>ml(f,e&&(Pe(e)?e[d]:e),t,n,s));return}if(Eo(n)&&!s)return;const r=n.shapeFlag&4?oc(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,je(h,c)&&(h[c]=null)):at(c)&&(c.value=null)),Ne(l))fi(l,a,12,[o,u]);else{const f=pt(l),d=at(l);if(f||d){const g=()=>{if(i.f){const m=f?je(h,l)?h[l]:u[l]:l.value;s?Pe(m)&&zl(m,r):Pe(m)?m.includes(r)||m.push(r):f?(u[l]=[r],je(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,je(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=Wm;function vg(i){return yg(i)}function yg(i,e){const t=Wp();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=dn,insertStaticContent:g}=i,m=(T,A,H,q=null,Q=null,le=null,de=!1,ie=null,ge=!!A.dynamicChildren)=>{if(T===A)return;T&&!ai(T,A)&&(q=re(T),K(T,Q,le,!0),T=null),A.patchFlag===-2&&(ge=!1,A.dynamicChildren=null);const{type:oe,ref:S,shapeFlag:y}=A;switch(oe){case Qo:p(T,A,H,q);break;case jn:_(T,A,H,q);break;case xa:T==null&&b(A,H,q,de);break;case Jt:ae(T,A,H,q,Q,le,de,ie,ge);break;default:y&1?M(T,A,H,q,Q,le,de,ie,ge):y&6?B(T,A,H,q,Q,le,de,ie,ge):(y&64||y&128)&&oe.process(T,A,H,q,Q,le,de,ie,ge,ve)}S!=null&&Q&&ml(S,T&&T.ref,le,A||T,!A)},p=(T,A,H,q)=>{if(T==null)n(A.el=a(A.children),H,q);else{const Q=A.el=T.el;A.children!==T.children&&c(Q,A.children)}},_=(T,A,H,q)=>{T==null?n(A.el=l(A.children||""),H,q):A.el=T.el},b=(T,A,H,q)=>{[T.el,T.anchor]=g(T.children,A,H,q,T.el,T.anchor)},x=({el:T,anchor:A},H,q)=>{let Q;for(;T&&T!==A;)Q=f(T),n(T,H,q),T=Q;n(A,H,q)},w=({el:T,anchor:A})=>{let H;for(;T&&T!==A;)H=f(T),s(T),T=H;s(A)},M=(T,A,H,q,Q,le,de,ie,ge)=>{de=de||A.type==="svg",T==null?R(A,H,q,Q,le,de,ie,ge):C(T,A,Q,le,de,ie,ge)},R=(T,A,H,q,Q,le,de,ie)=>{let ge,oe;const{type:S,props:y,shapeFlag:F,transition:X,dirs:ee}=T;if(ge=T.el=o(T.type,le,y&&y.is,y),F&8?u(ge,T.children):F&16&&v(T.children,ge,null,q,Q,le&&S!=="foreignObject",de,ie),ee&&bi(T,null,q,"created"),y){for(const be in y)be!=="value"&&!wo(be)&&r(ge,be,null,y[be],le,T.children,q,Q,P);"value"in y&&r(ge,"value",null,y.value),(oe=y.onVnodeBeforeMount)&&bn(oe,q,T)}L(ge,T,T.scopeId,de,q),ee&&bi(T,null,q,"beforeMount");const he=(!Q||Q&&!Q.pendingBranch)&&X&&!X.persisted;he&&X.beforeEnter(ge),n(ge,A,H),((oe=y&&y.onVnodeMounted)||he||ee)&&Ut(()=>{oe&&bn(oe,q,T),he&&X.enter(ge),ee&&bi(T,null,q,"mounted")},Q)},L=(T,A,H,q,Q)=>{if(H&&d(T,H),q)for(let le=0;le<q.length;le++)d(T,q[le]);if(Q){let le=Q.subTree;if(A===le){const de=Q.vnode;L(T,de,de.scopeId,de.slotScopeIds,Q.parent)}}},v=(T,A,H,q,Q,le,de,ie,ge=0)=>{for(let oe=ge;oe<T.length;oe++){const S=T[oe]=ie?ii(T[oe]):cn(T[oe]);m(null,S,A,H,q,Q,le,de,ie)}},C=(T,A,H,q,Q,le,de)=>{const ie=A.el=T.el;let{patchFlag:ge,dynamicChildren:oe,dirs:S}=A;ge|=T.patchFlag&16;const y=T.props||st,F=A.props||st;let X;H&&Mi(H,!1),(X=F.onVnodeBeforeUpdate)&&bn(X,H,A,T),S&&bi(A,T,H,"beforeUpdate"),H&&Mi(H,!0);const ee=Q&&A.type!=="foreignObject";if(oe?O(T.dynamicChildren,oe,ie,H,q,ee,le):de||V(T,A,ie,null,H,q,ee,le,!1),ge>0){if(ge&16)W(ie,A,y,F,H,q,Q);else if(ge&2&&y.class!==F.class&&r(ie,"class",null,F.class,Q),ge&4&&r(ie,"style",y.style,F.style,Q),ge&8){const he=A.dynamicProps;for(let be=0;be<he.length;be++){const me=he[be],$=y[me],Ee=F[me];(Ee!==$||me==="value")&&r(ie,me,$,Ee,Q,T.children,H,q,P)}}ge&1&&T.children!==A.children&&u(ie,A.children)}else!de&&oe==null&&W(ie,A,y,F,H,q,Q);((X=F.onVnodeUpdated)||S)&&Ut(()=>{X&&bn(X,H,A,T),S&&bi(A,T,H,"updated")},q)},O=(T,A,H,q,Q,le,de)=>{for(let ie=0;ie<A.length;ie++){const ge=T[ie],oe=A[ie],S=ge.el&&(ge.type===Jt||!ai(ge,oe)||ge.shapeFlag&70)?h(ge.el):H;m(ge,oe,S,null,q,Q,le,de,!0)}},W=(T,A,H,q,Q,le,de)=>{if(H!==q){if(H!==st)for(const ie in H)!wo(ie)&&!(ie in q)&&r(T,ie,H[ie],null,de,A.children,Q,le,P);for(const ie in q){if(wo(ie))continue;const ge=q[ie],oe=H[ie];ge!==oe&&ie!=="value"&&r(T,ie,oe,ge,de,A.children,Q,le,P)}"value"in q&&r(T,"value",H.value,q.value)}},ae=(T,A,H,q,Q,le,de,ie,ge)=>{const oe=A.el=T?T.el:a(""),S=A.anchor=T?T.anchor:a("");let{patchFlag:y,dynamicChildren:F,slotScopeIds:X}=A;X&&(ie=ie?ie.concat(X):X),T==null?(n(oe,H,q),n(S,H,q),v(A.children,H,S,Q,le,de,ie,ge)):y>0&&y&64&&F&&T.dynamicChildren?(O(T.dynamicChildren,F,H,Q,le,de,ie),(A.key!=null||Q&&A===Q.subTree)&&id(T,A,!0)):V(T,A,H,S,Q,le,de,ie,ge)},B=(T,A,H,q,Q,le,de,ie,ge)=>{A.slotScopeIds=ie,T==null?A.shapeFlag&512?Q.ctx.activate(A,H,q,de,ge):N(A,H,q,Q,le,de,ge):G(T,A,ge)},N=(T,A,H,q,Q,le,de)=>{const ie=T.component=Rg(T,q,Q);if(Xf(T)&&(ie.ctx.renderer=ve),Lg(ie),ie.asyncDep){if(Q&&Q.registerDep(ie,se),!T.el){const ge=ie.subTree=Mt(jn);_(null,ge,A,H)}return}se(ie,T,A,H,Q,le,de)},G=(T,A,H)=>{const q=A.component=T.component;if(Om(T,A,H))if(q.asyncDep&&!q.asyncResolved){J(q,A,H);return}else q.next=A,Lm(q.update),q.update();else A.el=T.el,q.vnode=A},se=(T,A,H,q,Q,le,de)=>{const ie=()=>{if(T.isMounted){let{next:S,bu:y,u:F,parent:X,vnode:ee}=T,he=S,be;Mi(T,!1),S?(S.el=ee.el,J(T,S,de)):S=ee,y&&ma(y),(be=S.props&&S.props.onVnodeBeforeUpdate)&&bn(be,X,S,ee),Mi(T,!0);const me=ga(T),$=T.subTree;T.subTree=me,m($,me,h($.el),re($),T,Q,le),S.el=me.el,he===null&&tc(T,me.el),F&&Ut(F,Q),(be=S.props&&S.props.onVnodeUpdated)&&Ut(()=>bn(be,X,S,ee),Q)}else{let S;const{el:y,props:F}=A,{bm:X,m:ee,parent:he}=T,be=Eo(A);if(Mi(T,!1),X&&ma(X),!be&&(S=F&&F.onVnodeBeforeMount)&&bn(S,he,A),Mi(T,!0),y&&Me){const me=()=>{T.subTree=ga(T),Me(y,T.subTree,T,Q,null)};be?A.type.__asyncLoader().then(()=>!T.isUnmounted&&me()):me()}else{const me=T.subTree=ga(T);m(null,me,H,q,T,Q,le),A.el=me.el}if(ee&&Ut(ee,Q),!be&&(S=F&&F.onVnodeMounted)){const me=A;Ut(()=>bn(S,he,me),Q)}(A.shapeFlag&256||he&&Eo(he.vnode)&&he.vnode.shapeFlag&256)&&T.a&&Ut(T.a,Q),T.isMounted=!0,A=H=q=null}},ge=T.effect=new ql(ie,()=>ec(oe),T.scope),oe=T.update=()=>ge.run();oe.id=T.uid,Mi(T,!0),oe()},J=(T,A,H)=>{A.component=T;const q=T.vnode.props;T.vnode=A,T.next=null,dg(T,A.props,q,H),gg(T,A.children,H),Ws(),Gc(),js()},V=(T,A,H,q,Q,le,de,ie,ge=!1)=>{const oe=T&&T.children,S=T?T.shapeFlag:0,y=A.children,{patchFlag:F,shapeFlag:X}=A;if(F>0){if(F&128){ce(oe,y,H,q,Q,le,de,ie,ge);return}else if(F&256){fe(oe,y,H,q,Q,le,de,ie,ge);return}}X&8?(S&16&&P(oe,Q,le),y!==oe&&u(H,y)):S&16?X&16?ce(oe,y,H,q,Q,le,de,ie,ge):P(oe,Q,le,!0):(S&8&&u(H,""),X&16&&v(y,H,q,Q,le,de,ie,ge))},fe=(T,A,H,q,Q,le,de,ie,ge)=>{T=T||bs,A=A||bs;const oe=T.length,S=A.length,y=Math.min(oe,S);let F;for(F=0;F<y;F++){const X=A[F]=ge?ii(A[F]):cn(A[F]);m(T[F],X,H,null,Q,le,de,ie,ge)}oe>S?P(T,Q,le,!0,!1,y):v(A,H,q,Q,le,de,ie,ge,y)},ce=(T,A,H,q,Q,le,de,ie,ge)=>{let oe=0;const S=A.length;let y=T.length-1,F=S-1;for(;oe<=y&&oe<=F;){const X=T[oe],ee=A[oe]=ge?ii(A[oe]):cn(A[oe]);if(ai(X,ee))m(X,ee,H,null,Q,le,de,ie,ge);else break;oe++}for(;oe<=y&&oe<=F;){const X=T[y],ee=A[F]=ge?ii(A[F]):cn(A[F]);if(ai(X,ee))m(X,ee,H,null,Q,le,de,ie,ge);else break;y--,F--}if(oe>y){if(oe<=F){const X=F+1,ee=X<S?A[X].el:q;for(;oe<=F;)m(null,A[oe]=ge?ii(A[oe]):cn(A[oe]),H,ee,Q,le,de,ie,ge),oe++}}else if(oe>F)for(;oe<=y;)K(T[oe],Q,le,!0),oe++;else{const X=oe,ee=oe,he=new Map;for(oe=ee;oe<=F;oe++){const Se=A[oe]=ge?ii(A[oe]):cn(A[oe]);Se.key!=null&&he.set(Se.key,oe)}let be,me=0;const $=F-ee+1;let Ee=!1,Le=0;const Te=new Array($);for(oe=0;oe<$;oe++)Te[oe]=0;for(oe=X;oe<=y;oe++){const Se=T[oe];if(me>=$){K(Se,Q,le,!0);continue}let Ie;if(Se.key!=null)Ie=he.get(Se.key);else for(be=ee;be<=F;be++)if(Te[be-ee]===0&&ai(Se,A[be])){Ie=be;break}Ie===void 0?K(Se,Q,le,!0):(Te[Ie-ee]=oe+1,Ie>=Le?Le=Ie:Ee=!0,m(Se,A[Ie],H,null,Q,le,de,ie,ge),me++)}const Ce=Ee?bg(Te):bs;for(be=Ce.length-1,oe=$-1;oe>=0;oe--){const Se=ee+oe,Ie=A[Se],et=Se+1<S?A[Se+1].el:q;Te[oe]===0?m(null,Ie,H,et,Q,le,de,ie,ge):Ee&&(be<0||oe!==Ce[be]?j(Ie,H,et,2):be--)}}},j=(T,A,H,q,Q=null)=>{const{el:le,type:de,transition:ie,children:ge,shapeFlag:oe}=T;if(oe&6){j(T.component.subTree,A,H,q);return}if(oe&128){T.suspense.move(A,H,q);return}if(oe&64){de.move(T,A,H,ve);return}if(de===Jt){n(le,A,H);for(let y=0;y<ge.length;y++)j(ge[y],A,H,q);n(T.anchor,A,H);return}if(de===xa){x(T,A,H);return}if(q!==2&&oe&1&&ie)if(q===0)ie.beforeEnter(le),n(le,A,H),Ut(()=>ie.enter(le),Q);else{const{leave:y,delayLeave:F,afterLeave:X}=ie,ee=()=>n(le,A,H),he=()=>{y(le,()=>{ee(),X&&X()})};F?F(le,ee,he):he()}else n(le,A,H)},K=(T,A,H,q=!1,Q=!1)=>{const{type:le,props:de,ref:ie,children:ge,dynamicChildren:oe,shapeFlag:S,patchFlag:y,dirs:F}=T;if(ie!=null&&ml(ie,null,H,T,!0),S&256){A.ctx.deactivate(T);return}const X=S&1&&F,ee=!Eo(T);let he;if(ee&&(he=de&&de.onVnodeBeforeUnmount)&&bn(he,A,T),S&6)D(T.component,H,q);else{if(S&128){T.suspense.unmount(H,q);return}X&&bi(T,null,A,"beforeUnmount"),S&64?T.type.remove(T,A,H,Q,ve,q):oe&&(le!==Jt||y>0&&y&64)?P(oe,A,H,!1,!0):(le===Jt&&y&384||!Q&&S&16)&&P(ge,A,H),q&&ue(T)}(ee&&(he=de&&de.onVnodeUnmounted)||X)&&Ut(()=>{he&&bn(he,A,T),X&&bi(T,null,A,"unmounted")},H)},ue=T=>{const{type:A,el:H,anchor:q,transition:Q}=T;if(A===Jt){_e(H,q);return}if(A===xa){w(T);return}const le=()=>{s(H),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(T.shapeFlag&1&&Q&&!Q.persisted){const{leave:de,delayLeave:ie}=Q,ge=()=>de(H,le);ie?ie(T.el,le,ge):ge()}else le()},_e=(T,A)=>{let H;for(;T!==A;)H=f(T),s(T),T=H;s(A)},D=(T,A,H)=>{const{bum:q,scope:Q,update:le,subTree:de,um:ie}=T;q&&ma(q),Q.stop(),le&&(le.active=!1,K(de,T,A,H)),ie&&Ut(ie,A),Ut(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},P=(T,A,H,q=!1,Q=!1,le=0)=>{for(let de=le;de<T.length;de++)K(T[de],A,H,q,Q)},re=T=>T.shapeFlag&6?re(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),ne=(T,A,H)=>{T==null?A._vnode&&K(A._vnode,null,null,!0):m(A._vnode||null,T,A,null,null,null,H),Gc(),kf(),A._vnode=T},ve={p:m,um:K,m:j,r:ue,mt:N,mc:v,pc:V,pbc:O,n:re,o:i};let xe,Me;return e&&([xe,Me]=e(ve)),{render:ne,hydrate:xe,createApp:xg(ne,xe)}}function Mi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function id(i,e,t=!1){const n=i.children,s=e.children;if(Pe(n)&&Pe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),t||id(o,a)),a.type===Qo&&(a.el=o.el)}}function bg(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const Mg=i=>i.__isTeleport,Jt=Symbol(void 0),Qo=Symbol(void 0),jn=Symbol(void 0),xa=Symbol(void 0),xr=[];let tn=null;function bt(i=!1){xr.push(tn=i?null:[])}function sd(){xr.pop(),tn=xr[xr.length-1]||null}let Ps=1;function Jc(i){Ps+=i}function rd(i){return i.dynamicChildren=Ps>0?tn||bs:null,sd(),Ps>0&&tn&&tn.push(i),i}function En(i,e,t,n,s,r){return rd(Je(i,e,t,n,s,r,!0))}function Oi(i,e,t,n,s){return rd(Mt(i,e,t,n,s,!0))}function Oo(i){return i?i.__v_isVNode===!0:!1}function ai(i,e){return i.type===e.type&&i.key===e.key}const ea="__vInternal",od=({key:i})=>i??null,Ao=({ref:i,ref_key:e,ref_for:t})=>i!=null?pt(i)||at(i)||Ne(i)?{i:hn,r:i,k:e,f:!!t}:i:null;function Je(i,e=null,t=null,n=0,s=null,r=i===Jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&od(e),ref:e&&Ao(e),scopeId:Zo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(rc(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Ps>0&&!o&&tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&tn.push(l),l}const Mt=Sg;function Sg(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===sg)&&(i=jn),Oo(i)){const a=Is(i,e,!0);return t&&rc(a,t),Ps>0&&!r&&tn&&(a.shapeFlag&6?tn[tn.indexOf(i)]=a:tn.push(a)),a.patchFlag|=-2,a}if(Ng(i)&&(i=i.__vccOpts),e){e=wg(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=fn(a)),rt(l)&&(Lf(l)&&!Pe(l)&&(l=Ot({},l)),e.style=jo(l))}const o=pt(i)?1:Um(i)?128:Mg(i)?64:rt(i)?4:Ne(i)?2:0;return Je(i,e,t,n,s,o,r,!0)}function wg(i){return i?Lf(i)||ea in i?Ot({},i):i:null}function Is(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Eg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&od(a),ref:e&&e.ref?t&&s?Pe(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Jt?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Is(i.ssContent),ssFallback:i.ssFallback&&Is(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function Tg(i=" ",e=0){return Mt(Qo,null,i,e)}function pr(i="",e=!1){return e?(bt(),Oi(jn,null,i)):Mt(jn,null,i)}function cn(i){return i==null||typeof i=="boolean"?Mt(jn):Pe(i)?Mt(Jt,null,i.slice()):typeof i=="object"?ii(i):Mt(Qo,null,String(i))}function ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Is(i)}function rc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),rc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(ea in e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),n&64?(t=16,e=[Tg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Eg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=fn([e.class,n.class]));else if(s==="style")e.style=jo([e.style,n.style]);else if(qo(s)){const r=e[s],o=n[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function bn(i,e,t,n=null){pn(i,e,7,[t,n])}const Ag=nd();let Cg=0;function Rg(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Ag,r={uid:Cg++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new _f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jf(n,s),emitsOptions:Hf(n,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:n.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Im.bind(null,r),i.ce&&i.ce(r),r}let St=null;const ad=()=>St||hn,mi=i=>{St=i,i.scope.on()},di=()=>{St&&St.scope.off(),St=null};function ld(i){return i.vnode.shapeFlag&4}let Rr=!1;function Lg(i,e=!1){Rr=e;const{props:t,children:n}=i.vnode,s=ld(i);fg(i,t,s,e),mg(i,n);const r=s?Pg(i,e):void 0;return Rr=!1,r}function Pg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Ls(new Proxy(i.ctx,og));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Dg(i):null;mi(i),Ws();const r=fi(n,i,0,[i.props,s]);if(js(),di(),Vl(r)){if(r.then(di,di),e)return r.then(o=>{gl(i,o,e)}).catch(o=>{zr(o,i,0)});i.asyncDep=r}else gl(i,r,e)}else cd(i,e)}function gl(i,e,t){Ne(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:rt(e)&&(i.setupState=Nf(e)),cd(i,t)}let Qc;function cd(i,e,t){const n=i.type;if(!i.render){if(!e&&Qc&&!n.render){const s=n.template||ic(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ot(Ot({isCustomElement:r,delimiters:a},o),l);n.render=Qc(s,c)}}i.render=n.render||dn}mi(i),Ws(),ag(i),js(),di()}function Ig(i){return new Proxy(i.attrs,{get(e,t){return Kt(i,"get","$attrs"),e[t]}})}function Dg(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Ig(i))},slots:i.slots,emit:i.emit,expose:e}}function oc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Nf(Ls(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in _r)return _r[t](i)},has(e,t){return t in e||t in _r}}))}function Ng(i){return Ne(i)&&"__vccOpts"in i}const jt=(i,e)=>Am(i,e,Rr);function Fg(i){const e=ad();let t=i();return di(),Vl(t)&&(t=t.catch(n=>{throw mi(e),n})),[t,()=>mi(e)]}function ud(i,e,t){const n=arguments.length;return n===2?rt(e)&&!Pe(e)?Oo(e)?Mt(i,null,[e]):Mt(i,e):Mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Oo(t)&&(t=[t]),Mt(i,e,t))}const Og=Symbol(""),Ug=()=>Tn(Og),Bg="3.2.45",kg="http://www.w3.org/2000/svg",Li=typeof document<"u"?document:null,eu=Li&&Li.createElement("template"),zg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?Li.createElementNS(kg,i):Li.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Li.createTextNode(i),createComment:i=>Li.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Li.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{eu.innerHTML=n?`<svg>${i}</svg>`:i;const a=eu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Vg(i,e,t){const n=i.style,s=pt(t);if(t&&!s){for(const r in t)_l(n,r,t[r]);if(e&&!pt(e))for(const r in e)t[r]==null&&_l(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const tu=/\s*!important$/;function _l(i,e,t){if(Pe(t))t.forEach(n=>_l(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Gg(i,e);tu.test(t)?i.setProperty(Gs(n),t.replace(tu,""),"important"):i[n]=t}}const nu=["Webkit","Moz","ms"],va={};function Gg(i,e){const t=va[e];if(t)return t;let n=Cs(e);if(n!=="filter"&&n in i)return va[e]=n;n=gf(n);for(let s=0;s<nu.length;s++){const r=nu[s]+n;if(r in i)return va[e]=r}return e}const iu="http://www.w3.org/1999/xlink";function Wg(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(iu,e.slice(6,e.length)):i.setAttributeNS(iu,e,t);else{const r=Up(e);t==null||r&&!hf(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function jg(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=hf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function qg(i,e,t,n){i.addEventListener(e,t,n)}function Xg(i,e,t,n){i.removeEventListener(e,t,n)}function Kg(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=$g(e);if(n){const c=r[e]=Jg(n,s);qg(i,a,c,l)}else o&&(Xg(i,a,o,l),r[e]=void 0)}}const su=/(?:Once|Passive|Capture)$/;function $g(i){let e;if(su.test(i)){e={};let n;for(;n=i.match(su);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Gs(i.slice(2)),e]}let ya=0;const Yg=Promise.resolve(),Zg=()=>ya||(Yg.then(()=>ya=0),ya=Date.now());function Jg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;pn(Qg(n,t.value),e,5,[n])};return t.value=i,t.attached=Zg(),t}function Qg(i,e){if(Pe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ru=/^on[a-z]/,e_=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?Hg(i,n,s):e==="style"?Vg(i,t,n):qo(e)?kl(e)||Kg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t_(i,e,n,s))?jg(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Wg(i,e,n,s))};function t_(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&ru.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||ru.test(e)&&pt(t)?!1:e in i}const n_=Ot({patchProp:e_},zg);let ou;function i_(){return ou||(ou=vg(n_))}const s_=(...i)=>{const e=i_().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=r_(n);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function r_(i){return pt(i)?document.querySelector(i):i}var o_=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let hd;const ta=i=>hd=i,fd=Symbol();function xl(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var vr;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(vr||(vr={}));function a_(){const i=xf(!0),e=i.run(()=>Dt({}));let t=[],n=[];const s=Ls({install(r){ta(s),s._a=r,r.provide(fd,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!o_?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const dd=()=>{};function au(i,e,t,n=dd){i.push(e);const s=()=>{const r=i.indexOf(e);r>-1&&(i.splice(r,1),n())};return!t&&qp()&&Xp(s),s}function $i(i,...e){i.slice().forEach(t=>{t(...e)})}function vl(i,e){i instanceof Map&&e instanceof Map&&e.forEach((t,n)=>i.set(n,t)),i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],s=i[t];xl(s)&&xl(n)&&i.hasOwnProperty(t)&&!at(n)&&!hi(n)?i[t]=vl(s,n):i[t]=n}return i}const l_=Symbol();function c_(i){return!xl(i)||!i.hasOwnProperty(l_)}const{assign:si}=Object;function u_(i){return!!(at(i)&&i.effect)}function h_(i,e,t,n){const{state:s,actions:r,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=s?s():{});const u=Sm(t.state.value[i]);return si(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ls(jt(()=>{ta(t);const d=t._s.get(i);return o[f].call(d,d)})),h),{}))}return l=pd(i,c,e,t,n,!0),l.$reset=function(){const h=s?s():{};this.$patch(f=>{si(f,h)})},l}function pd(i,e,t={},n,s,r){let o;const a=si({actions:{}},t),l={deep:!0};let c,u,h=Ls([]),f=Ls([]),d;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={}),Dt({});let m;function p(L){let v;c=u=!1,typeof L=="function"?(L(n.state.value[i]),v={type:vr.patchFunction,storeId:i,events:d}):(vl(n.state.value[i],L),v={type:vr.patchObject,payload:L,storeId:i,events:d});const C=m=Symbol();Ql().then(()=>{m===C&&(c=!0)}),u=!0,$i(h,v,n.state.value[i])}const _=dd;function b(){o.stop(),h=[],f=[],n._s.delete(i)}function x(L,v){return function(){ta(n);const C=Array.from(arguments),O=[],W=[];function ae(G){O.push(G)}function B(G){W.push(G)}$i(f,{args:C,name:L,store:M,after:ae,onError:B});let N;try{N=v.apply(this&&this.$id===i?this:M,C)}catch(G){throw $i(W,G),G}return N instanceof Promise?N.then(G=>($i(O,G),G)).catch(G=>($i(W,G),Promise.reject(G))):($i(O,N),N)}}const w={_p:n,$id:i,$onAction:au.bind(null,f),$patch:p,$reset:_,$subscribe(L,v={}){const C=au(h,L,v.detached,()=>O()),O=o.run(()=>gr(()=>n.state.value[i],W=>{(v.flush==="sync"?u:c)&&L({storeId:i,type:vr.direct,events:d},W)},si({},l,v)));return C},$dispose:b},M=qs(w);n._s.set(i,M);const R=n._e.run(()=>(o=xf(),o.run(()=>e())));for(const L in R){const v=R[L];if(at(v)&&!u_(v)||hi(v))r||(g&&c_(v)&&(at(v)?v.value=g[L]:vl(v,g[L])),n.state.value[i][L]=v);else if(typeof v=="function"){const C=x(L,v);R[L]=C,a.actions[L]=v}}return si(M,R),si(Ke(M),R),Object.defineProperty(M,"$state",{get:()=>n.state.value[i],set:L=>{p(v=>{si(v,L)})}}),n._p.forEach(L=>{si(M,o.run(()=>L({store:M,app:n._a,pinia:n,options:a})))}),g&&r&&t.hydrate&&t.hydrate(M.$state,g),c=!0,u=!0,M}function f_(i,e,t){let n,s;const r=typeof e=="function";typeof i=="string"?(n=i,s=r?t:e):(s=i,n=i.id);function o(a,l){const c=ad();return a=a||c&&Tn(fd,null),a&&ta(a),a=hd,a._s.has(n)||(r?pd(n,e,s,a):h_(n,s,a)),a._s.get(n)}return o.$id=n,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof window<"u";function d_(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function ba(i,e){const t={};for(const n in e){const s=e[n];t[n]=xn(s)?s.map(i):i(s)}return t}const yr=()=>{},xn=Array.isArray,p_=/\/$/,m_=i=>i.replace(p_,"");function Ma(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=v_(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function g_(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function lu(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function __(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Ds(e.matched[n],t.matched[s])&&md(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Ds(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function md(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!x_(i[t],e[t]))return!1;return!0}function x_(i,e){return xn(i)?cu(i,e):xn(e)?cu(e,i):i===e}function cu(i,e){return xn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function v_(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Lr;(function(i){i.pop="pop",i.push="push"})(Lr||(Lr={}));var br;(function(i){i.back="back",i.forward="forward",i.unknown=""})(br||(br={}));function y_(i){if(!i)if(fs){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),m_(i)}const b_=/^[^#]+#/;function M_(i,e){return i.replace(b_,"#")+e}function S_(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const na=()=>({left:window.pageXOffset,top:window.pageYOffset});function w_(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=S_(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uu(i,e){return(history.state?history.state.position-e:-1)+i}const yl=new Map;function T_(i,e){yl.set(i,e)}function E_(i){const e=yl.get(i);return yl.delete(i),e}let A_=()=>location.protocol+"//"+location.host;function gd(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),lu(l,"")}return lu(t,i)+n+s}function C_(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=gd(i,location),g=t.value,m=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}p=m?f.position-m.position:0}else n(d);s.forEach(_=>{_(t.value,g,{delta:p,type:Lr.pop,direction:p?p>0?br.forward:br.back:br.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Qe({},f.state,{scroll:na()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function hu(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?na():null}}function R_(i){const{history:e,location:t}=window,n={value:gd(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:A_()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Qe({},e.state,hu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=Qe({},s.value,e.state,{forward:l,scroll:na()});r(u.current,u,!0);const h=Qe({},hu(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function L_(i){i=y_(i);const e=R_(i),t=C_(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Qe({location:"",base:i,go:n,createHref:M_.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function P_(i){return typeof i=="string"||i&&typeof i=="object"}function _d(i){return typeof i=="string"||typeof i=="symbol"}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xd=Symbol("");var fu;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(fu||(fu={}));function Ns(i,e){return Qe(new Error,{type:i,[xd]:!0},e)}function In(i,e){return i instanceof Error&&xd in i&&(e==null||!!(i.type&e))}const du="[^/]+?",I_={sensitive:!1,strict:!1,start:!0,end:!0},D_=/[.+*?^${}()[\]/\\]/g;function N_(i,e){const t=Qe({},I_,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(D_,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:m,optional:p,regexp:_}=f;r.push({name:g,repeatable:m,optional:p});const b=_||du;if(b!==du){d+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+w.message)}}let x=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=p&&c.length<2?`(?:/${x})`:"/"+x),p&&(x+="?"),s+=x,d+=20,p&&(d+=-8),m&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,_=g in c?c[g]:"";if(xn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=xn(_)?_.join("/"):_;if(!b)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function F_(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function O_(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=F_(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(pu(n))return 1;if(pu(s))return-1}return s.length-n.length}function pu(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const U_={type:0,value:""},B_=/[a-zA-Z0-9_]/;function k_(i){if(!i)return[[]];if(i==="/")return[[U_]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:B_.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function z_(i,e,t){const n=N_(k_(i.path),t),s=Qe(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function H_(i,e){const t=[],n=new Map;e=_u({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const d=!f,g=V_(u);g.aliasOf=f&&f.record;const m=_u(e,u),p=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of x)p.push(Qe({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g}))}let _,b;for(const x of p){const{path:w}=x;if(h&&w[0]!=="/"){const M=h.record.path,R=M[M.length-1]==="/"?"":"/";x.path=h.record.path+(w&&R+w)}if(_=z_(x,h,m),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),d&&u.name&&!gu(_)&&o(u.name)),g.children){const M=g.children;for(let R=0;R<M.length;R++)r(M[R],_,f&&f.children[R])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:yr}function o(u){if(_d(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&O_(u,t[h])>=0&&(u.record.path!==t[h].record.path||!vd(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!gu(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,m;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Ns(1,{location:u});m=f.record.name,d=Qe(mu(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&mu(u.params,f.keys.map(b=>b.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(d=f.parse(g),m=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw Ns(1,{location:u,currentLocation:h});m=f.record.name,d=Qe({},h.params,u.params),g=f.stringify(d)}const p=[];let _=f;for(;_;)p.unshift(_.record),_=_.parent;return{name:m,path:g,params:d,matched:p,meta:W_(p)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function mu(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function V_(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:G_(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function G_(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function gu(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function W_(i){return i.reduce((e,t)=>Qe(e,t.meta),{})}function _u(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function vd(i,e){return e.children.some(t=>t===i||vd(i,t))}const yd=/#/g,j_=/&/g,q_=/\//g,X_=/=/g,K_=/\?/g,bd=/\+/g,$_=/%5B/g,Y_=/%5D/g,Md=/%5E/g,Z_=/%60/g,Sd=/%7B/g,J_=/%7C/g,wd=/%7D/g,Q_=/%20/g;function ac(i){return encodeURI(""+i).replace(J_,"|").replace($_,"[").replace(Y_,"]")}function e0(i){return ac(i).replace(Sd,"{").replace(wd,"}").replace(Md,"^")}function bl(i){return ac(i).replace(bd,"%2B").replace(Q_,"+").replace(yd,"%23").replace(j_,"%26").replace(Z_,"`").replace(Sd,"{").replace(wd,"}").replace(Md,"^")}function t0(i){return bl(i).replace(X_,"%3D")}function n0(i){return ac(i).replace(yd,"%23").replace(K_,"%3F")}function i0(i){return i==null?"":n0(i).replace(q_,"%2F")}function Uo(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function s0(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(bd," "),o=r.indexOf("="),a=Uo(o<0?r:r.slice(0,o)),l=o<0?null:Uo(r.slice(o+1));if(a in e){let c=e[a];xn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xu(i){let e="";for(let t in i){const n=i[t];if(t=t0(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(xn(n)?n.map(r=>r&&bl(r)):[n&&bl(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function r0(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=xn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const o0=Symbol(""),vu=Symbol(""),lc=Symbol(""),Td=Symbol(""),Ml=Symbol("");function Qs(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function ri(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ns(4,{from:t,to:e})):h instanceof Error?a(h):P_(h)?a(Ns(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Sa(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(a0(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ri(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=d_(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ri(f,t,n,r,o)()}))}}return s}function a0(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function yu(i){const e=Tn(lc),t=Tn(Td),n=jt(()=>e.resolve(ze(i.to))),s=jt(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ds.bind(null,u));if(f>-1)return f;const d=bu(l[c-2]);return c>1&&bu(u)===d&&h[h.length-1].path!==d?h.findIndex(Ds.bind(null,l[c-2])):f}),r=jt(()=>s.value>-1&&h0(t.params,n.value.params)),o=jt(()=>s.value>-1&&s.value===t.matched.length-1&&md(t.params,n.value.params));function a(l={}){return u0(l)?e[ze(i.replace)?"replace":"push"](ze(i.to)).catch(yr):Promise.resolve()}return{route:n,href:jt(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const l0=vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yu,setup(i,{slots:e}){const t=qs(yu(i)),{options:n}=Tn(lc),s=jt(()=>({[Mu(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Mu(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:ud("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),c0=l0;function u0(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function h0(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!xn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function bu(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Mu=(i,e,t)=>i??e??t,f0=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Tn(Ml),s=jt(()=>i.route||n.value),r=Tn(vu,0),o=jt(()=>{let c=ze(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=jt(()=>s.value.matched[o.value]);To(vu,jt(()=>o.value+1)),To(o0,a),To(Ml,s);const l=Dt();return gr(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ds(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Su(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=ud(f,Qe({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Su(t.default,{Component:p,route:c})||p}}});function Su(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Ed=f0;function d0(i){const e=H_(i.routes,i),t=i.parseQuery||s0,n=i.stringifyQuery||xu,s=i.history,r=Qs(),o=Qs(),a=Qs(),l=ym($n);let c=$n;fs&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ba.bind(null,D=>""+D),h=ba.bind(null,i0),f=ba.bind(null,Uo);function d(D,P){let re,ne;return _d(D)?(re=e.getRecordMatcher(D),ne=P):ne=D,e.addRoute(ne,re)}function g(D){const P=e.getRecordMatcher(D);P&&e.removeRoute(P)}function m(){return e.getRoutes().map(D=>D.record)}function p(D){return!!e.getRecordMatcher(D)}function _(D,P){if(P=Qe({},P||l.value),typeof D=="string"){const T=Ma(t,D,P.path),A=e.resolve({path:T.path},P),H=s.createHref(T.fullPath);return Qe(T,A,{params:f(A.params),hash:Uo(T.hash),redirectedFrom:void 0,href:H})}let re;if("path"in D)re=Qe({},D,{path:Ma(t,D.path,P.path).path});else{const T=Qe({},D.params);for(const A in T)T[A]==null&&delete T[A];re=Qe({},D,{params:h(D.params)}),P.params=h(P.params)}const ne=e.resolve(re,P),ve=D.hash||"";ne.params=u(f(ne.params));const xe=g_(n,Qe({},D,{hash:e0(ve),path:ne.path})),Me=s.createHref(xe);return Qe({fullPath:xe,hash:ve,query:n===xu?r0(D.query):D.query||{}},ne,{redirectedFrom:void 0,href:Me})}function b(D){return typeof D=="string"?Ma(t,D,l.value.path):Qe({},D)}function x(D,P){if(c!==D)return Ns(8,{from:P,to:D})}function w(D){return L(D)}function M(D){return w(Qe(b(D),{replace:!0}))}function R(D){const P=D.matched[D.matched.length-1];if(P&&P.redirect){const{redirect:re}=P;let ne=typeof re=="function"?re(D):re;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=b(ne):{path:ne},ne.params={}),Qe({query:D.query,hash:D.hash,params:"path"in ne?{}:D.params},ne)}}function L(D,P){const re=c=_(D),ne=l.value,ve=D.state,xe=D.force,Me=D.replace===!0,T=R(re);if(T)return L(Qe(b(T),{state:typeof T=="object"?Qe({},ve,T.state):ve,force:xe,replace:Me}),P||re);const A=re;A.redirectedFrom=P;let H;return!xe&&__(n,ne,re)&&(H=Ns(16,{to:A,from:ne}),ce(ne,ne,!0,!1)),(H?Promise.resolve(H):C(A,ne)).catch(q=>In(q)?In(q,2)?q:fe(q):J(q,A,ne)).then(q=>{if(q){if(In(q,2))return L(Qe({replace:Me},b(q.to),{state:typeof q.to=="object"?Qe({},ve,q.to.state):ve,force:xe}),P||A)}else q=W(A,ne,!0,Me,ve);return O(A,ne,q),q})}function v(D,P){const re=x(D,P);return re?Promise.reject(re):Promise.resolve()}function C(D,P){let re;const[ne,ve,xe]=p0(D,P);re=Sa(ne.reverse(),"beforeRouteLeave",D,P);for(const T of ne)T.leaveGuards.forEach(A=>{re.push(ri(A,D,P))});const Me=v.bind(null,D,P);return re.push(Me),Yi(re).then(()=>{re=[];for(const T of r.list())re.push(ri(T,D,P));return re.push(Me),Yi(re)}).then(()=>{re=Sa(ve,"beforeRouteUpdate",D,P);for(const T of ve)T.updateGuards.forEach(A=>{re.push(ri(A,D,P))});return re.push(Me),Yi(re)}).then(()=>{re=[];for(const T of D.matched)if(T.beforeEnter&&!P.matched.includes(T))if(xn(T.beforeEnter))for(const A of T.beforeEnter)re.push(ri(A,D,P));else re.push(ri(T.beforeEnter,D,P));return re.push(Me),Yi(re)}).then(()=>(D.matched.forEach(T=>T.enterCallbacks={}),re=Sa(xe,"beforeRouteEnter",D,P),re.push(Me),Yi(re))).then(()=>{re=[];for(const T of o.list())re.push(ri(T,D,P));return re.push(Me),Yi(re)}).catch(T=>In(T,8)?T:Promise.reject(T))}function O(D,P,re){for(const ne of a.list())ne(D,P,re)}function W(D,P,re,ne,ve){const xe=x(D,P);if(xe)return xe;const Me=P===$n,T=fs?history.state:{};re&&(ne||Me?s.replace(D.fullPath,Qe({scroll:Me&&T&&T.scroll},ve)):s.push(D.fullPath,ve)),l.value=D,ce(D,P,re,Me),fe()}let ae;function B(){ae||(ae=s.listen((D,P,re)=>{if(!_e.listening)return;const ne=_(D),ve=R(ne);if(ve){L(Qe(ve,{replace:!0}),ne).catch(yr);return}c=ne;const xe=l.value;fs&&T_(uu(xe.fullPath,re.delta),na()),C(ne,xe).catch(Me=>In(Me,12)?Me:In(Me,2)?(L(Me.to,ne).then(T=>{In(T,20)&&!re.delta&&re.type===Lr.pop&&s.go(-1,!1)}).catch(yr),Promise.reject()):(re.delta&&s.go(-re.delta,!1),J(Me,ne,xe))).then(Me=>{Me=Me||W(ne,xe,!1),Me&&(re.delta&&!In(Me,8)?s.go(-re.delta,!1):re.type===Lr.pop&&In(Me,20)&&s.go(-1,!1)),O(ne,xe,Me)}).catch(yr)}))}let N=Qs(),G=Qs(),se;function J(D,P,re){fe(D);const ne=G.list();return ne.length?ne.forEach(ve=>ve(D,P,re)):console.error(D),Promise.reject(D)}function V(){return se&&l.value!==$n?Promise.resolve():new Promise((D,P)=>{N.add([D,P])})}function fe(D){return se||(se=!D,B(),N.list().forEach(([P,re])=>D?re(D):P()),N.reset()),D}function ce(D,P,re,ne){const{scrollBehavior:ve}=i;if(!fs||!ve)return Promise.resolve();const xe=!re&&E_(uu(D.fullPath,0))||(ne||!re)&&history.state&&history.state.scroll||null;return Ql().then(()=>ve(D,P,xe)).then(Me=>Me&&w_(Me)).catch(Me=>J(Me,D,P))}const j=D=>s.go(D);let K;const ue=new Set,_e={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:_,options:i,push:w,replace:M,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:V,install(D){const P=this;D.component("RouterLink",c0),D.component("RouterView",Ed),D.config.globalProperties.$router=P,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),fs&&!K&&l.value===$n&&(K=!0,w(s.location).catch(ve=>{}));const re={};for(const ve in $n)re[ve]=jt(()=>l.value[ve]);D.provide(lc,P),D.provide(Td,qs(re)),D.provide(Ml,l);const ne=D.unmount;ue.add(D),D.unmount=function(){ue.delete(D),ue.size<1&&(c=$n,ae&&ae(),ae=null,l.value=$n,K=!1,se=!1),ne()}}};return _e}function Yi(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function p0(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Ds(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Ds(c,l))||s.push(l))}return[t,n,s]}const m0=vn({__name:"App",setup(i){return(e,t)=>(bt(),Oi(ze(Ed)))}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="148",g0=0,wu=1,_0=2,Ad=1,x0=2,_s=3,gi=0,nn=1,ia=2,Qr=3,Vn=0,Ts=1,Tu=2,Eu=3,Au=4,v0=5,ds=100,y0=101,b0=102,Cu=103,Ru=104,M0=200,S0=201,w0=202,T0=203,Cd=204,Rd=205,E0=206,A0=207,C0=208,R0=209,L0=210,P0=0,I0=1,D0=2,Sl=3,N0=4,F0=5,O0=6,U0=7,Ld=0,B0=1,k0=2,Gn=0,z0=1,H0=2,V0=3,Pd=4,G0=5,Id=300,Fs=301,Os=302,wl=303,Tl=304,sa=306,Us=1e3,Qt=1001,Bo=1002,ht=1003,El=1004,Co=1005,Bt=1006,Dd=1007,zi=1008,Hi=1009,W0=1010,j0=1011,Nd=1012,q0=1013,Ii=1014,li=1015,Pr=1016,X0=1017,K0=1018,Es=1020,$0=1021,Y0=1022,en=1023,Z0=1024,J0=1025,Ui=1026,Bs=1027,Q0=1028,ex=1029,tx=1030,nx=1031,ix=1033,wa=33776,Ta=33777,Ea=33778,Aa=33779,Lu=35840,Pu=35841,Iu=35842,Du=35843,sx=36196,Nu=37492,Fu=37496,Ou=37808,Uu=37809,Bu=37810,ku=37811,zu=37812,Hu=37813,Vu=37814,Gu=37815,Wu=37816,ju=37817,qu=37818,Xu=37819,Ku=37820,$u=37821,Yu=36492,Fd=2200,rx=2201,ox=2202,Ir=2300,ks=2301,Ca=2302,xs=2400,vs=2401,ko=2402,uc=2500,ax=2501,lx=1,Od=2,Vi=3e3,Ye=3001,cx=3200,Ud=3201,Bd=0,ux=1,Mn="srgb",Dr="srgb-linear",Ra=7680,hx=519,Al=35044,Zu="300 es",Cl=1035;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const Mr=Math.PI/180,Nr=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function hc(i,e){return(i%e+e)%e}function fx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dx(i,e,t){return i!==e?(t-i)/(e-i):0}function Sr(i,e,t){return(1-t)*i+t*e}function px(i,e,t,n){return Sr(i,e,1-Math.exp(-t*n))}function mx(i,e=1){return e-Math.abs(hc(i,e*2)-e)}function gx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _x(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vx(i,e){return i+Math.random()*(e-i)}function yx(i){return i*(.5-Math.random())}function bx(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mx(i){return i*Mr}function Sx(i){return i*Nr}function Rl(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wx(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tx=Object.freeze({__proto__:null,DEG2RAD:Mr,RAD2DEG:Nr,generateUUID:mn,clamp:Nt,euclideanModulo:hc,mapLinear:fx,inverseLerp:dx,lerp:Sr,damp:px,pingpong:mx,smoothstep:gx,smootherstep:_x,randInt:xx,randFloat:vx,randFloatSpread:yx,seededRandom:bx,degToRad:Mx,radToDeg:Sx,isPowerOfTwo:Rl,ceilPowerOfTwo:kd,floorPowerOfTwo:zo,setQuaternionFromProperEuler:wx,normalize:tt,denormalize:Hn});class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=s[0],p=s[3],_=s[6],b=s[1],x=s[4],w=s[7],M=s[2],R=s[5],L=s[8];return r[0]=o*m+a*b+l*M,r[3]=o*p+a*x+l*R,r[6]=o*_+a*w+l*L,r[1]=c*m+u*b+h*M,r[4]=c*p+u*x+h*R,r[7]=c*_+u*w+h*L,r[2]=f*m+d*b+g*M,r[5]=f*p+d*x+g*R,r[8]=f*_+d*w+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new qt;function zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pa={[Mn]:{[Dr]:Bi},[Dr]:{[Mn]:Ro}},Rt={legacyMode:!0,get workingColorSpace(){return Dr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Pa[e]&&Pa[e][t]!==void 0){const n=Pa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},on={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function to(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=hc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ia(o,r,e+1/3),this.g=Ia(o,r,e),this.b=Ia(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Rt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Rt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Mn){const n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Rt.fromWorkingColorSpace(to(this,ft),e),Nt(ft.r*255,0,255)<<16^Nt(ft.g*255,0,255)<<8^Nt(ft.b*255,0,255)<<0}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(to(this,ft),t);const n=ft.r,s=ft.g,r=ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(to(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Mn){return Rt.fromWorkingColorSpace(to(this,ft),e),e!==Mn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(eo);const n=Sr(on.h,eo.h,t),s=Sr(on.s,eo.s,t),r=Sr(on.l,eo.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Hd;let Zi;class Vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Fr("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gd{constructor(e=null){this.isSource=!0,this.uuid=mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;class wt extends ji{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Qt,s=Qt,r=Bt,o=zi,a=en,l=Hi,c=wt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=mn(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Id;wt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(d+1)/2,M=(_+1)/2,R=(u+f)/4,L=(h+m)/4,v=(g+p)/4;return x>w&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=L/n):w>M?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=L/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-m)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qn extends ji{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),R=Math.atan2(M,_*b);p=Math.sin(p*R)/M,a=Math.sin(a*R)/M}const w=a*b;if(l=l*p+f*w,c=c*p+d*w,u=u*p+g*w,h=h*p+m*w,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new U,Qu=new gn;class Xs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Si.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox),Fa.applyMatrix4(e.matrixWorld),this.union(Fa);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),no.subVectors(this.max,er),Ji.subVectors(e.a,er),Qi.subVectors(e.b,er),es.subVectors(e.c,er),Yn.subVectors(Qi,Ji),Zn.subVectors(es,Qi),wi.subVectors(Ji,es);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-wi.z,wi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,wi.z,0,-wi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-wi.y,wi.x,0];return!Oa(t,Ji,Qi,es,no)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Ji,Qi,es,no))?!1:(io.crossVectors(Yn,Zn),t=[io.x,io.y,io.z],Oa(t,Ji,Qi,es,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],Si=new U,Fa=new Xs,Ji=new U,Qi=new U,es=new U,Yn=new U,Zn=new U,wi=new U,er=new U,no=new U,io=new U,Ti=new U;function Oa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cx=new Xs,tr=new U,Ua=new U;class Ks{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ua)),this.expandByPoint(tr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new U,Ba=new U,so=new U,Jn=new U,ka=new U,ro=new U,za=new U;class fc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ba.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=Jn.dot(this.direction),l=-Jn.dot(so),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(so).multiplyScalar(f).add(Ba),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){ka.subVectors(t,e),ro.subVectors(n,e),za.crossVectors(ka,ro);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(Jn,ro));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Lx)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Qn.crossVectors(n,Vt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Qn.crossVectors(n,Vt)),Qn.normalize(),oo.crossVectors(Vt,Qn),s[0]=Qn.x,s[4]=oo.x,s[8]=Vt.x,s[1]=Qn.y,s[5]=oo.y,s[9]=Vt.y,s[2]=Qn.z,s[6]=oo.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],b=n[3],x=n[7],w=n[11],M=n[15],R=s[0],L=s[4],v=s[8],C=s[12],O=s[1],W=s[5],ae=s[9],B=s[13],N=s[2],G=s[6],se=s[10],J=s[14],V=s[3],fe=s[7],ce=s[11],j=s[15];return r[0]=o*R+a*O+l*N+c*V,r[4]=o*L+a*W+l*G+c*fe,r[8]=o*v+a*ae+l*se+c*ce,r[12]=o*C+a*B+l*J+c*j,r[1]=u*R+h*O+f*N+d*V,r[5]=u*L+h*W+f*G+d*fe,r[9]=u*v+h*ae+f*se+d*ce,r[13]=u*C+h*B+f*J+d*j,r[2]=g*R+m*O+p*N+_*V,r[6]=g*L+m*W+p*G+_*fe,r[10]=g*v+m*ae+p*se+_*ce,r[14]=g*C+m*B+p*J+_*j,r[3]=b*R+x*O+w*N+M*V,r[7]=b*L+x*W+w*G+M*fe,r[11]=b*v+x*ae+w*se+M*ce,r[15]=b*C+x*B+w*J+M*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+m*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],b=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,w=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,R=t*b+n*x+s*w+r*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=b*L,e[1]=(m*f*r-h*p*r-m*s*d+n*p*d+h*s*_-n*f*_)*L,e[2]=(a*p*r-m*l*r+m*s*c-n*p*c-a*s*_+n*l*_)*L,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*L,e[4]=x*L,e[5]=(u*p*r-g*f*r+g*s*d-t*p*d-u*s*_+t*f*_)*L,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*_-t*l*_)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=w*L,e[9]=(g*h*r-u*m*r-g*n*d+t*m*d+u*n*_-t*h*_)*L,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*L,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*L,e[12]=M*L,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*p+t*h*p)*L,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*p-t*a*p)*L,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,m=o*u,p=o*h,_=a*h,b=l*c,x=l*u,w=l*h,M=n.x,R=n.y,L=n.z;return s[0]=(1-(m+_))*M,s[1]=(d+w)*M,s[2]=(g-x)*M,s[3]=0,s[4]=(d-w)*R,s[5]=(1-(f+_))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+x)*L,s[9]=(p-b)*L,s[10]=(1-(f+m))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new U,an=new ke,Rx=new U(0,0,0),Lx=new U(1,1,1),Qn=new U,oo=new U,Vt=new U,eh=new ke,th=new gn;class Hr{constructor(e=0,t=0,n=0,s=Hr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Hr.DefaultOrder="XYZ";Hr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Px=0;const nh=new U,ns=new gn,Fn=new ke,ao=new U,nr=new U,Ix=new U,Dx=new gn,ih=new U(1,0,0),sh=new U(0,1,0),rh=new U(0,0,1),Nx={type:"added"},oh={type:"removed"};class ot extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new U,t=new Hr,n=new gn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new qt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(nr,ao,this.up):Fn.lookAt(ao,nr,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Fn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DefaultUp=new U(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const ln=new U,On=new U,Ha=new U,Un=new U,is=new U,ss=new U,ah=new U,Va=new U,Ga=new U,Wa=new U;class zn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),On.subVectors(n,t),Ha.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(On),l=ln.dot(Ha),c=On.dot(On),u=On.dot(Ha),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Un),l.set(0,0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),On.subVectors(e,t),ln.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),On.subVectors(this.a,this.b),ln.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return zn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Va.subVectors(e,n);const l=is.dot(Va),c=ss.dot(Va);if(l<=0&&c<=0)return t.copy(n);Ga.subVectors(e,s);const u=is.dot(Ga),h=ss.dot(Ga);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);Wa.subVectors(e,r);const d=is.dot(Wa),g=ss.dot(Wa);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ss,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ah.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(ah,a);const _=1/(p+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fx=0;class An extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Ts,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Di extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,lo=new He;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xd extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ox=0;const Yt=new ke,ja=new ot,rs=new U,Gt=new Xs,ir=new Xs,yt=new U;class yn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Xd:qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Gt.min,ir.min),Gt.expandByPoint(yt),yt.addVectors(Gt.max,ir.max),Gt.expandByPoint(yt)):(Gt.expandByPoint(ir.min),Gt.expandByPoint(ir.max))}Gt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),yt.add(rs)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<a;O++)c[O]=new U,u[O]=new U;const h=new U,f=new U,d=new U,g=new He,m=new He,p=new He,_=new U,b=new U;function x(O,W,ae){h.fromArray(s,O*3),f.fromArray(s,W*3),d.fromArray(s,ae*3),g.fromArray(o,O*2),m.fromArray(o,W*2),p.fromArray(o,ae*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const B=1/(m.x*p.y-p.x*m.y);isFinite(B)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(B),b.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(B),c[O].add(_),c[W].add(_),c[ae].add(_),u[O].add(b),u[W].add(b),u[ae].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,W=w.length;O<W;++O){const ae=w[O],B=ae.start,N=ae.count;for(let G=B,se=B+N;G<se;G+=3)x(n[G+0],n[G+1],n[G+2])}const M=new U,R=new U,L=new U,v=new U;function C(O){L.fromArray(r,O*3),v.copy(L);const W=c[O];M.copy(W),M.sub(L.multiplyScalar(L.dot(W))).normalize(),R.crossVectors(v,W);const B=R.dot(u[O])<0?-1:1;l[O*4]=M.x,l[O*4+1]=M.y,l[O*4+2]=M.z,l[O*4+3]=B}for(let O=0,W=w.length;O<W;++O){const ae=w[O],B=ae.start,N=ae.count;for(let G=B,se=B+N;G<se;G+=3)C(n[G+0]),C(n[G+1]),C(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Ft(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new ke,os=new fc,qa=new Ks,sr=new U,rr=new U,or=new U,Xa=new U,co=new U,uo=new He,ho=new He,fo=new He,Ka=new U,po=new U;class Xt extends ot{constructor(e=new yn,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Xa.fromBufferAttribute(h,e),o?co.addScaledVector(Xa,u):co.addScaledVector(Xa.sub(t),u))}t.add(co)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),e.ray.intersectsSphere(qa)===!1)||(lh.copy(r).invert(),os.copy(e.ray).applyMatrix4(lh),n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const m=h[d],p=s[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=b;x<w;x+=3){const M=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);o=mo(this,p,e,os,c,u,M,R,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){const _=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);o=mo(this,s,e,os,c,u,_,b,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const m=h[d],p=s[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=b;x<w;x+=3){const M=x,R=x+1,L=x+2;o=mo(this,p,e,os,c,u,M,R,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){const _=m,b=m+1,x=m+2;o=mo(this,s,e,os,c,u,_,b,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Ux(i,e,t,n,s,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===gi,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,sr),i.getVertexPosition(a,rr),i.getVertexPosition(l,or);const c=Ux(i,e,t,n,sr,rr,or,Ka);if(c){s&&(uo.fromBufferAttribute(s,o),ho.fromBufferAttribute(s,a),fo.fromBufferAttribute(s,l),c.uv=zn.getUV(Ka,sr,rr,or,uo,ho,fo,new He)),r&&(uo.fromBufferAttribute(r,o),ho.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),c.uv2=zn.getUV(Ka,sr,rr,or,uo,ho,fo,new He));const u={a:o,b:a,c:l,normal:new U,materialIndex:0};zn.getNormal(sr,rr,or,u.normal),c.face=u}return c}class Vr extends yn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function g(m,p,_,b,x,w,M,R,L,v,C){const O=w/L,W=M/v,ae=w/2,B=M/2,N=R/2,G=L+1,se=v+1;let J=0,V=0;const fe=new U;for(let ce=0;ce<se;ce++){const j=ce*W-B;for(let K=0;K<G;K++){const ue=K*O-ae;fe[m]=ue*b,fe[p]=j*x,fe[_]=N,c.push(fe.x,fe.y,fe.z),fe[m]=0,fe[p]=0,fe[_]=R>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(K/L),h.push(1-ce/v),J+=1}}for(let ce=0;ce<v;ce++)for(let j=0;j<L;j++){const K=f+j+G*ce,ue=f+j+G*(ce+1),_e=f+(j+1)+G*(ce+1),D=f+(j+1)+G*ce;l.push(K,ue,D),l.push(ue,_e,D),V+=6}a.addGroup(d,V,C),d+=V,f+=J}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function Bx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kd(i){return i.getRenderTarget()===null&&i.outputEncoding===Ye?Mn:Dr}const dc={clone:zs,merge:It};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $d extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends $d{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class Hx extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new kt(as,ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new kt(as,ls,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new kt(as,ls,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(as,ls,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kt(as,ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(as,ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Yd extends wt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vr(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Vn});r.uniforms.tEquirect.value=t;const o=new Xt(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Bt),new Hx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const $a=new U,Gx=new U,Wx=new qt;class Ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$a.subVectors(n,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wx.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Ks,go=new U;class pc{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-s,h-l,m-f,x-p).normalize(),t[1].setComponents(a+s,h+l,m+f,x+p).normalize(),t[2].setComponents(a+r,h+c,m+d,x+_).normalize(),t[3].setComponents(a-r,h-c,m-d,x-_).normalize(),t[4].setComponents(a-o,h-u,m-g,x-b).normalize(),t[5].setComponents(a+o,h+u,m+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jx(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class mc extends yn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const b=_*f-o;for(let x=0;x<c;x++){const w=x*h-r;g.push(w,-b,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,w=b+c*(_+1),M=b+1+c*(_+1),R=b+1+c*_;d.push(x,w,R),d.push(w,M,R)}this.setIndex(d),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(p,2))}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx="vec3 transformed = vec3( position );",Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,tv=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hv=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Lv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Fv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,oy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ty=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Uy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,By=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ky=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Zy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,cb=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:qx,alphamap_pars_fragment:Xx,alphatest_fragment:Kx,alphatest_pars_fragment:$x,aomap_fragment:Yx,aomap_pars_fragment:Zx,begin_vertex:Jx,beginnormal_vertex:Qx,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:sv,clipping_planes_pars_vertex:rv,clipping_planes_vertex:ov,color_fragment:av,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:uv,common:hv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:dv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:gv,emissivemap_pars_fragment:_v,encodings_fragment:xv,encodings_pars_fragment:vv,envmap_fragment:yv,envmap_common_pars_fragment:bv,envmap_pars_fragment:Mv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Fv,envmap_vertex:wv,fog_vertex:Tv,fog_pars_vertex:Ev,fog_fragment:Av,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_fragment:Lv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Iv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Nv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Uv,lights_phong_fragment:Bv,lights_phong_pars_fragment:kv,lights_physical_fragment:zv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Vv,lights_fragment_maps:Gv,lights_fragment_end:Wv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:qv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:Kv,map_fragment:$v,map_pars_fragment:Yv,map_particle_fragment:Zv,map_particle_pars_fragment:Jv,metalnessmap_fragment:Qv,metalnessmap_pars_fragment:ey,morphcolor_vertex:ty,morphnormal_vertex:ny,morphtarget_pars_vertex:iy,morphtarget_vertex:sy,normal_fragment_begin:ry,normal_fragment_maps:oy,normal_pars_fragment:ay,normal_pars_vertex:ly,normal_vertex:cy,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:dy,iridescence_pars_fragment:py,output_fragment:my,packing:gy,premultiplied_alpha_fragment:_y,project_vertex:xy,dithering_fragment:vy,dithering_pars_fragment:yy,roughnessmap_fragment:by,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:wy,shadowmap_vertex:Ty,shadowmask_pars_fragment:Ey,skinbase_vertex:Ay,skinning_pars_vertex:Cy,skinning_vertex:Ry,skinnormal_vertex:Ly,specularmap_fragment:Py,specularmap_pars_fragment:Iy,tonemapping_fragment:Dy,tonemapping_pars_fragment:Ny,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:Uy,uv_pars_vertex:By,uv_vertex:ky,uv2_pars_fragment:zy,uv2_pars_vertex:Hy,uv2_vertex:Vy,worldpos_vertex:Gy,background_vert:Wy,background_frag:jy,backgroundCube_vert:qy,backgroundCube_frag:Xy,cube_vert:Ky,cube_frag:$y,depth_vert:Yy,depth_frag:Zy,distanceRGBA_vert:Jy,distanceRGBA_frag:Qy,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:sb,meshbasic_frag:rb,meshlambert_vert:ob,meshlambert_frag:ab,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:hb,meshphong_vert:fb,meshphong_frag:db,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:xb,points_frag:vb,shadow_vert:yb,shadow_frag:bb,sprite_vert:Mb,sprite_frag:Sb},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},Sn={basic:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([ye.points,ye.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([ye.common,ye.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([ye.sprite,ye.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:It([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:It([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:It([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const _o={r:0,b:0,g:0};function wb(i,e,t,n,s,r,o){const a=new Fe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const w=i.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sa)?(u===void 0&&(u=new Xt(new Vr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:zs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Ye,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new mc(2,2),new Cn({name:"BackgroundMaterial",uniforms:zs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB(_o,Kd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function Tb(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(N,G,se,J,V){let fe=!1;if(o){const ce=m(J,se,G);c!==ce&&(c=ce,d(c.object)),fe=_(N,J,se,V),fe&&b(N,J,se,V)}else{const ce=G.wireframe===!0;(c.geometry!==J.id||c.program!==se.id||c.wireframe!==ce)&&(c.geometry=J.id,c.program=se.id,c.wireframe=ce,fe=!0)}V!==null&&t.update(V,34963),(fe||u)&&(u=!1,v(N,G,se,J),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function m(N,G,se){const J=se.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let fe=V[G.id];fe===void 0&&(fe={},V[G.id]=fe);let ce=fe[J];return ce===void 0&&(ce=p(f()),fe[J]=ce),ce}function p(N){const G=[],se=[],J=[];for(let V=0;V<s;V++)G[V]=0,se[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:J,object:N,attributes:{},index:null}}function _(N,G,se,J){const V=c.attributes,fe=G.attributes;let ce=0;const j=se.getAttributes();for(const K in j)if(j[K].location>=0){const _e=V[K];let D=fe[K];if(D===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),_e===void 0||_e.attribute!==D||D&&_e.data!==D.data)return!0;ce++}return c.attributesNum!==ce||c.index!==J}function b(N,G,se,J){const V={},fe=G.attributes;let ce=0;const j=se.getAttributes();for(const K in j)if(j[K].location>=0){let _e=fe[K];_e===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const D={};D.attribute=_e,_e&&_e.data&&(D.data=_e.data),V[K]=D,ce++}c.attributes=V,c.attributesNum=ce,c.index=J}function x(){const N=c.newAttributes;for(let G=0,se=N.length;G<se;G++)N[G]=0}function w(N){M(N,0)}function M(N,G){const se=c.newAttributes,J=c.enabledAttributes,V=c.attributeDivisors;se[N]=1,J[N]===0&&(i.enableVertexAttribArray(N),J[N]=1),V[N]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),V[N]=G)}function R(){const N=c.newAttributes,G=c.enabledAttributes;for(let se=0,J=G.length;se<J;se++)G[se]!==N[se]&&(i.disableVertexAttribArray(se),G[se]=0)}function L(N,G,se,J,V,fe){n.isWebGL2===!0&&(se===5124||se===5125)?i.vertexAttribIPointer(N,G,se,V,fe):i.vertexAttribPointer(N,G,se,J,V,fe)}function v(N,G,se,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=J.attributes,fe=se.getAttributes(),ce=G.defaultAttributeValues;for(const j in fe){const K=fe[j];if(K.location>=0){let ue=V[j];if(ue===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),ue!==void 0){const _e=ue.normalized,D=ue.itemSize,P=t.get(ue);if(P===void 0)continue;const re=P.buffer,ne=P.type,ve=P.bytesPerElement;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Me=xe.stride,T=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let A=0;A<K.locationSize;A++)M(K.location+A,xe.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let A=0;A<K.locationSize;A++)w(K.location+A);i.bindBuffer(34962,re);for(let A=0;A<K.locationSize;A++)L(K.location+A,D/K.locationSize,ne,_e,Me*ve,(T+D/K.locationSize*A)*ve)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<K.locationSize;xe++)M(K.location+xe,ue.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<K.locationSize;xe++)w(K.location+xe);i.bindBuffer(34962,re);for(let xe=0;xe<K.locationSize;xe++)L(K.location+xe,D/K.locationSize,ne,_e,D*ve,D/K.locationSize*xe*ve)}}else if(ce!==void 0){const _e=ce[j];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(K.location,_e);break;case 3:i.vertexAttrib3fv(K.location,_e);break;case 4:i.vertexAttrib4fv(K.location,_e);break;default:i.vertexAttrib1fv(K.location,_e)}}}}R()}function C(){ae();for(const N in a){const G=a[N];for(const se in G){const J=G[se];for(const V in J)g(J[V].object),delete J[V];delete G[se]}delete a[N]}}function O(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const se in G){const J=G[se];for(const V in J)g(J[V].object),delete J[V];delete G[se]}delete a[N.id]}function W(N){for(const G in a){const se=a[G];if(se[N.id]===void 0)continue;const J=se[N.id];for(const V in J)g(J[V].object),delete J[V];delete se[N.id]}}function ae(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function Eb(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Ab(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),x=f>0,w=o||e.has("OES_texture_float"),M=x&&w,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:R}}function Cb(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ai,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,x=b*4;let w=_.clippingState||null;l.value=w,w=u(g,f,x,d);for(let M=0;M!==x;++M)w[M]=t[M];_.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,w=d;x!==m;++x,w+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Rb(i){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=Fs:a===Tl&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wl||a===Tl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vx(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ra extends $d{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,ch=[.125,.215,.35,.446,.526,.582],Pi=20,Ya=new ra,uh=new Fe;let Za=null;const Ci=(1+Math.sqrt(5))/2,us=1/Ci,hh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ci,us),new U(0,Ci,-us),new U(us,0,Ci),new U(-us,0,Ci),new U(Ci,us,0),new U(-Ci,us,0)];class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Pr,format:en,encoding:Vi,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lb(r)),this._blurMaterial=Pb(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,s){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(uh),u.toneMapping=Gn,u.autoClear=!1;const d=new Di({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Xt(new Vr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(uh),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;xo(s,b*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hh[(s-1)%hh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):Pi;p>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const _=[];let b=0;for(let L=0;L<Pi;++L){const v=L/m,C=Math.exp(-v*v/2);_.push(C),L===0?b+=C:L<p&&(b+=2*C)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const w=this._sizeLods[s],M=3*w*(s>x-ys?s-x+ys:0),R=4*(this._cubeSize-w);xo(t,M,R,3*w,2*w),l.setRenderTarget(t),l.render(h,Ya)}}function Lb(i){const e=[],t=[],n=[];let s=i;const r=i-ys+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ys?l=ch[o-i+ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,b=new Float32Array(m*g*d),x=new Float32Array(p*g*d),w=new Float32Array(_*g*d);for(let R=0;R<d;R++){const L=R%3*2/3-1,v=R>2?0:-1,C=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];b.set(C,m*g*R),x.set(f,p*g*R);const O=[R,R,R,R,R,R];w.set(O,_*g*R)}const M=new yn;M.setAttribute("position",new Ft(b,m)),M.setAttribute("uv",new Ft(x,p)),M.setAttribute("faceIndex",new Ft(w,_)),e.push(M),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pb(i,e,t){const n=new Float32Array(Pi),s=new U(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ph(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function mh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function Ib(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===Tl,u=l===Fs||l===Os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new fh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new fh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Db(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nb(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const b=d.array;m=d.version;for(let x=0,w=b.length;x<w;x+=3){const M=b[x+0],R=b[x+1],L=b[x+2];f.push(M,R,R,L,L,M)}}else{const b=g.array;m=g.version;for(let x=0,w=b.length/3-1;x<w;x+=3){const M=x+0,R=x+1,L=x+2;f.push(M,R,R,L,L,M)}}const p=new(zd(f)?Xd:qd)(f,1);p.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fb(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Ob(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ub(i,e){return i[0]-e[0]}function Bb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function kb(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let se=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",se)};var g=se;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let O=0;w===!0&&(O=1),M===!0&&(O=2),R===!0&&(O=3);let W=u.attributes.position.count*O,ae=1;W>e.maxTextureSize&&(ae=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const B=new Float32Array(W*ae*4*p),N=new Wd(B,W,ae,p);N.type=li,N.needsUpdate=!0;const G=O*4;for(let J=0;J<p;J++){const V=L[J],fe=v[J],ce=C[J],j=W*ae*4*J;for(let K=0;K<V.count;K++){const ue=K*G;w===!0&&(o.fromBufferAttribute(V,K),B[j+ue+0]=o.x,B[j+ue+1]=o.y,B[j+ue+2]=o.z,B[j+ue+3]=0),M===!0&&(o.fromBufferAttribute(fe,K),B[j+ue+4]=o.x,B[j+ue+5]=o.y,B[j+ue+6]=o.z,B[j+ue+7]=0),R===!0&&(o.fromBufferAttribute(ce,K),B[j+ue+8]=o.x,B[j+ue+9]=o.y,B[j+ue+10]=o.z,B[j+ue+11]=ce.itemSize===4?o.w:1)}}_={count:p,texture:N,size:new He(W,ae)},r.set(u,_),u.addEventListener("dispose",se)}let b=0;for(let w=0;w<d.length;w++)b+=d[w];const x=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<m;M++){const R=p[M];R[0]=M,R[1]=d[M]}p.sort(Bb);for(let M=0;M<8;M++)M<m&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ub);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const R=a[M],L=R[0],v=R[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[L]&&u.setAttribute("morphTarget"+M,_[L]),b&&u.getAttribute("morphNormal"+M)!==b[L]&&u.setAttribute("morphNormal"+M,b[L]),s[M]=v,x+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function zb(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Jd=new wt,Qd=new Wd,ep=new Ax,tp=new Yd,gh=[],_h=[],xh=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function jb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),gt(t,n)}}function qb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),gt(t,n)}}function Xb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),gt(t,n)}}function Kb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Jb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function nM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Jd,s)}function iM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ep,s)}function sM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tp,s)}function rM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qd,s)}function oM(i){switch(i){case 5126:return Hb;case 35664:return Vb;case 35665:return Gb;case 35666:return Wb;case 35674:return jb;case 35675:return qb;case 35676:return Xb;case 5124:case 35670:return Kb;case 35667:case 35671:return $b;case 35668:case 35672:return Yb;case 35669:case 35673:return Zb;case 5125:return Jb;case 36294:return Qb;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(i,e){i.uniform1fv(this.addr,e)}function lM(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function cM(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function uM(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function hM(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fM(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dM(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pM(i,e){i.uniform1iv(this.addr,e)}function mM(i,e){i.uniform2iv(this.addr,e)}function gM(i,e){i.uniform3iv(this.addr,e)}function _M(i,e){i.uniform4iv(this.addr,e)}function xM(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function yM(i,e){i.uniform3uiv(this.addr,e)}function bM(i,e){i.uniform4uiv(this.addr,e)}function MM(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jd,r[o])}function SM(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ep,r[o])}function wM(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tp,r[o])}function TM(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qd,r[o])}function EM(i){switch(i){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return hM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return TM}}class AM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=oM(t.type)}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=EM(t.type)}}class RM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function LM(i,e,t){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bh(t,c===void 0?new AM(a,i,e):new CM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new RM(a),bh(t,h)),t=h}}}class Lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);LM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let PM=0;function IM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function DM(i){switch(i){case Vi:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Sh(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+IM(i.getShaderSource(e),o)}else return s}function NM(i,e){const t=DM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function FM(i,e){let t;switch(e){case z0:t="Linear";break;case H0:t="Reinhard";break;case V0:t="OptimizedCineon";break;case Pd:t="ACESFilmic";break;case G0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function UM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function mr(i){return i!==""}function wh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(i){return i.replace(kM,zM)}function zM(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ll(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(HM,VM)}function VM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function qM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case B0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function XM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function KM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GM(t),c=WM(t),u=jM(t),h=qM(t),f=XM(t),d=t.isWebGL2?"":OM(t),g=UM(r),m=s.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(mr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(mr).join(`
`),_.length>0&&(_+=`
`)):(p=[Ah(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),_=[d,Ah(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,NM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Ll(o),o=wh(o,t),o=Th(o,t),a=Ll(a),a=wh(a,t),a=Th(a,t),o=Eh(o),a=Eh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+p+o,w=b+_+a,M=Mh(s,35633,x),R=Mh(s,35632,w);if(s.attachShader(m,M),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(M).trim(),W=s.getShaderInfoLog(R).trim();let ae=!0,B=!0;if(s.getProgramParameter(m,35714)===!1){ae=!1;const N=Sh(s,M,"vertex"),G=Sh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+N+`
`+G)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||W==="")&&(B=!1);B&&(this.diagnostics={runnable:ae,programLog:C,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:_}})}s.deleteShader(M),s.deleteShader(R);let L;this.getUniforms=function(){return L===void 0&&(L=new Lo(s,m)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=BM(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=R,this}let $M=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZM(e),t.set(e,n)),n}}class ZM{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}}function JM(i,e,t,n,s,r,o){const a=new jd,l=new YM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,C,O,W,ae){const B=W.fog,N=ae.geometry,G=v.isMeshStandardMaterial?W.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),J=se&&se.mapping===sa?se.image.height:null,V=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const fe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=fe!==void 0?fe.length:0;let j=0;N.morphAttributes.position!==void 0&&(j=1),N.morphAttributes.normal!==void 0&&(j=2),N.morphAttributes.color!==void 0&&(j=3);let K,ue,_e,D;if(V){const Me=Sn[V];K=Me.vertexShader,ue=Me.fragmentShader}else K=v.vertexShader,ue=v.fragmentShader,l.update(v),_e=l.getVertexShaderID(v),D=l.getFragmentShaderID(v);const P=i.getRenderTarget(),re=v.alphaTest>0,ne=v.clearcoat>0,ve=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:K,fragmentShader:ue,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:D,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:f,outputEncoding:P===null?i.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:Vi,map:!!v.map,matcap:!!v.matcap,envMap:!!se,envMapMode:se&&se.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ux,tangentSpaceNormalMap:v.normalMapType===Bd,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ye,clearcoat:ne,clearcoatMap:ne&&!!v.clearcoatMap,clearcoatRoughnessMap:ne&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!v.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!v.iridescenceMap,iridescenceThicknessMap:ve&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ts,alphaMap:!!v.alphaMap,alphaTest:re,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ae.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Gn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ia,flipSided:v.side===nn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)C.push(O),C.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(C,v),b(C,v),C.push(i.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function _(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function b(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),v.push(a.mask)}function x(v){const C=g[v.type];let O;if(C){const W=Sn[C];O=dc.clone(W.uniforms)}else O=v.uniforms;return O}function w(v,C){let O;for(let W=0,ae=c.length;W<ae;W++){const B=c[W];if(B.cacheKey===C){O=B,++O.usedTimes;break}}return O===void 0&&(O=new KM(i,C,v,r),c.push(O)),O}function M(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:L}}function QM(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function eS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?s.push(_):t.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||eS),n.length>1&&n.sort(f||Ch),s.length>1&&s.sort(f||Ch)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function tS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rh,i.set(n,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function iS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sS=0;function rS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oS(i,e){const t=new nS,n=iS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,o=new ke,a=new ke;function l(u,h){let f=0,d=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let m=0,p=0,_=0,b=0,x=0,w=0,M=0,R=0,L=0,v=0;u.sort(rS);const C=h!==!0?Math.PI:1;for(let W=0,ae=u.length;W<ae;W++){const B=u[W],N=B.color,G=B.intensity,se=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=N.r*G*C,d+=N.g*G*C,g+=N.b*G*C;else if(B.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(B.sh.coefficients[V],G);else if(B.isDirectionalLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const fe=B.shadow,ce=n.get(B);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,s.directionalShadow[m]=ce,s.directionalShadowMap[m]=J,s.directionalShadowMatrix[m]=B.shadow.matrix,w++}s.directional[m]=V,m++}else if(B.isSpotLight){const V=t.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(N).multiplyScalar(G*C),V.distance=se,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,s.spot[_]=V;const fe=B.shadow;if(B.map&&(s.spotLightMap[L]=B.map,L++,fe.updateMatrices(B),B.castShadow&&v++),s.spotLightMatrix[_]=fe.matrix,B.castShadow){const ce=n.get(B);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,s.spotShadow[_]=ce,s.spotShadowMap[_]=J,R++}_++}else if(B.isRectAreaLight){const V=t.get(B);V.color.copy(N).multiplyScalar(G),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),s.rectArea[b]=V,b++}else if(B.isPointLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*C),V.distance=B.distance,V.decay=B.decay,B.castShadow){const fe=B.shadow,ce=n.get(B);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,ce.shadowCameraNear=fe.camera.near,ce.shadowCameraFar=fe.camera.far,s.pointShadow[p]=ce,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=B.shadow.matrix,M++}s.point[p]=V,p++}else if(B.isHemisphereLight){const V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(G*C),V.groundColor.copy(B.groundColor).multiplyScalar(G*C),s.hemi[x]=V,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const O=s.hash;(O.directionalLength!==m||O.pointLength!==p||O.spotLength!==_||O.rectAreaLength!==b||O.hemiLength!==x||O.numDirectionalShadows!==w||O.numPointShadows!==M||O.numSpotShadows!==R||O.numSpotMaps!==L)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=R+L-v,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=v,O.directionalLength=m,O.pointLength=p,O.spotLength=_,O.rectAreaLength=b,O.hemiLength=x,O.numDirectionalShadows=w,O.numPointShadows=M,O.numSpotShadows=R,O.numSpotMaps=L,s.version=sS++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const w=u[b];if(w.isDirectionalLight){const M=s.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(w.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const M=s.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const M=s.hemi[p];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:s}}function Lh(i,e){const t=new oS(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aS(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Lh(i,e),t.set(r,[l])):o>=a.length?(l=new Lh(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class np extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hS(i,e,t){let n=new pc;const s=new He,r=new He,o=new nt,a=new np({depthPacking:Ud}),l=new lS,c={},u=t.maxTextureSize,h={0:nn,1:gi,2:ia},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:cS,fragmentShader:uS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad,this.render=function(w,M,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let W=0,ae=w.length;W<ae;W++){const B=w[W],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const G=N.getFrameExtents();if(s.multiply(G),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,N.mapSize.y=r.y)),N.map===null){const J=this.type!==_s?{minFilter:ht,magFilter:ht}:{};N.map=new qn(s.x,s.y,J),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const se=N.getViewportCount();for(let J=0;J<se;J++){const V=N.getViewport(J);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),O.viewport(o),N.updateMatrices(B,J),n=N.getFrustum(),x(M,R,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===_s&&_(N,R),N.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(L,v,C)};function _(w,M){const R=e.update(m);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(M,null,R,f,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(M,null,R,d,m,null)}function b(w,M,R,L,v,C){let O=null;const W=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)O=W;else if(O=R.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const ae=O.uuid,B=M.uuid;let N=c[ae];N===void 0&&(N={},c[ae]=N);let G=N[B];G===void 0&&(G=O.clone(),N[B]=G),O=G}return O.visible=M.visible,O.wireframe=M.wireframe,C===_s?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:h[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,R.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(R.matrixWorld),O.nearDistance=L,O.farDistance=v),O}function x(w,M,R,L,v){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===_s)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const W=e.update(w),ae=w.material;if(Array.isArray(ae)){const B=W.groups;for(let N=0,G=B.length;N<G;N++){const se=B[N],J=ae[se.materialIndex];if(J&&J.visible){const V=b(w,J,L,R.near,R.far,v);i.renderBufferDirect(R,null,W,V,w,se)}}}else if(ae.visible){const B=b(w,ae,L,R.near,R.far,v);i.renderBufferDirect(R,null,W,B,w,null)}}const O=w.children;for(let W=0,ae=O.length;W<ae;W++)x(O[W],M,R,L,v)}}function fS(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const Y=new nt;let pe=null;const we=new nt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!I&&(i.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,$e,xt,Tt,_i){_i===!0&&(Ae*=Tt,$e*=Tt,xt*=Tt),Y.set(Ae,$e,xt,Tt),we.equals(Y)===!1&&(i.clearColor(Ae,$e,xt,Tt),we.copy(Y))},reset:function(){I=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let I=!1,Y=null,pe=null,we=null;return{setTest:function(Ae){Ae?re(2929):ne(2929)},setMask:function(Ae){Y!==Ae&&!I&&(i.depthMask(Ae),Y=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case P0:i.depthFunc(512);break;case I0:i.depthFunc(519);break;case D0:i.depthFunc(513);break;case Sl:i.depthFunc(515);break;case N0:i.depthFunc(514);break;case F0:i.depthFunc(518);break;case O0:i.depthFunc(516);break;case U0:i.depthFunc(517);break;default:i.depthFunc(515)}pe=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){we!==Ae&&(i.clearDepth(Ae),we=Ae)},reset:function(){I=!1,Y=null,pe=null,we=null}}}function o(){let I=!1,Y=null,pe=null,we=null,Ae=null,$e=null,xt=null,Tt=null,_i=null;return{setTest:function(it){I||(it?re(2960):ne(2960))},setMask:function(it){Y!==it&&!I&&(i.stencilMask(it),Y=it)},setFunc:function(it,Ln,$t){(pe!==it||we!==Ln||Ae!==$t)&&(i.stencilFunc(it,Ln,$t),pe=it,we=Ln,Ae=$t)},setOp:function(it,Ln,$t){($e!==it||xt!==Ln||Tt!==$t)&&(i.stencilOp(it,Ln,$t),$e=it,xt=Ln,Tt=$t)},setLocked:function(it){I=it},setClear:function(it){_i!==it&&(i.clearStencil(it),_i=it)},reset:function(){I=!1,Y=null,pe=null,we=null,Ae=null,$e=null,xt=null,Tt=null,_i=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,b=null,x=null,w=null,M=null,R=null,L=null,v=null,C=!1,O=null,W=null,ae=null,B=null,N=null;const G=i.getParameter(35661);let se=!1,J=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=J>=2);let fe=null,ce={};const j=i.getParameter(3088),K=i.getParameter(2978),ue=new nt().fromArray(j),_e=new nt().fromArray(K);function D(I,Y,pe){const we=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(I,Ae),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let $e=0;$e<pe;$e++)i.texImage2D(Y+$e,0,6408,1,1,0,6408,5121,we);return Ae}const P={};P[3553]=D(3553,3553,1),P[34067]=D(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(2929),l.setFunc(Sl),Q(!1),le(wu),re(2884),H(Vn);function re(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function ne(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function ve(I,Y){return d[I]!==Y?(i.bindFramebuffer(I,Y),d[I]=Y,n&&(I===36009&&(d[36160]=Y),I===36160&&(d[36009]=Y)),!0):!1}function xe(I,Y){let pe=m,we=!1;if(I)if(pe=g.get(Y),pe===void 0&&(pe=[],g.set(Y,pe)),I.isWebGLMultipleRenderTargets){const Ae=I.texture;if(pe.length!==Ae.length||pe[0]!==36064){for(let $e=0,xt=Ae.length;$e<xt;$e++)pe[$e]=36064+$e;pe.length=Ae.length,we=!0}}else pe[0]!==36064&&(pe[0]=36064,we=!0);else pe[0]!==1029&&(pe[0]=1029,we=!0);we&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Me(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const T={[ds]:32774,[y0]:32778,[b0]:32779};if(n)T[Cu]=32775,T[Ru]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(T[Cu]=I.MIN_EXT,T[Ru]=I.MAX_EXT)}const A={[M0]:0,[S0]:1,[w0]:768,[Cd]:770,[L0]:776,[C0]:774,[E0]:772,[T0]:769,[Rd]:771,[R0]:775,[A0]:773};function H(I,Y,pe,we,Ae,$e,xt,Tt){if(I===Vn){_===!0&&(ne(3042),_=!1);return}if(_===!1&&(re(3042),_=!0),I!==v0){if(I!==b||Tt!==C){if((x!==ds||R!==ds)&&(i.blendEquation(32774),x=ds,R=ds),Tt)switch(I){case Ts:i.blendFuncSeparate(1,771,1,771);break;case Tu:i.blendFunc(1,1);break;case Eu:i.blendFuncSeparate(0,769,0,1);break;case Au:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ts:i.blendFuncSeparate(770,771,1,771);break;case Tu:i.blendFunc(770,1);break;case Eu:i.blendFuncSeparate(0,769,0,1);break;case Au:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,M=null,L=null,v=null,b=I,C=Tt}return}Ae=Ae||Y,$e=$e||pe,xt=xt||we,(Y!==x||Ae!==R)&&(i.blendEquationSeparate(T[Y],T[Ae]),x=Y,R=Ae),(pe!==w||we!==M||$e!==L||xt!==v)&&(i.blendFuncSeparate(A[pe],A[we],A[$e],A[xt]),w=pe,M=we,L=$e,v=xt),b=I,C=!1}function q(I,Y){I.side===ia?ne(2884):re(2884);let pe=I.side===nn;Y&&(pe=!pe),Q(pe),I.blending===Ts&&I.transparent===!1?H(Vn):H(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const we=I.stencilWrite;c.setTest(we),we&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(32926):ne(32926)}function Q(I){O!==I&&(I?i.frontFace(2304):i.frontFace(2305),O=I)}function le(I){I!==g0?(re(2884),I!==W&&(I===wu?i.cullFace(1029):I===_0?i.cullFace(1028):i.cullFace(1032))):ne(2884),W=I}function de(I){I!==ae&&(se&&i.lineWidth(I),ae=I)}function ie(I,Y,pe){I?(re(32823),(B!==Y||N!==pe)&&(i.polygonOffset(Y,pe),B=Y,N=pe)):ne(32823)}function ge(I){I?re(3089):ne(3089)}function oe(I){I===void 0&&(I=33984+G-1),fe!==I&&(i.activeTexture(I),fe=I)}function S(I,Y,pe){pe===void 0&&(fe===null?pe=33984+G-1:pe=fe);let we=ce[pe];we===void 0&&(we={type:void 0,texture:void 0},ce[pe]=we),(we.type!==I||we.texture!==Y)&&(fe!==pe&&(i.activeTexture(pe),fe=pe),i.bindTexture(I,Y||P[I]),we.type=I,we.texture=Y)}function y(){const I=ce[fe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){ue.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function Se(I){_e.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function Ie(I,Y){let pe=h.get(Y);pe===void 0&&(pe=new WeakMap,h.set(Y,pe));let we=pe.get(I);we===void 0&&(we=i.getUniformBlockIndex(Y,I.name),pe.set(I,we))}function et(I,Y){const we=h.get(Y).get(I);u.get(Y)!==we&&(i.uniformBlockBinding(Y,we,I.__bindingPointIndex),u.set(Y,we))}function _t(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,ce={},d={},g=new WeakMap,m=[],p=null,_=!1,b=null,x=null,w=null,M=null,R=null,L=null,v=null,C=!1,O=null,W=null,ae=null,B=null,N=null,ue.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ne,bindFramebuffer:ve,drawBuffers:xe,useProgram:Me,setBlending:H,setMaterial:q,setFlipSided:Q,setCullFace:le,setLineWidth:de,setPolygonOffset:ie,setScissorTest:ge,activeTexture:oe,bindTexture:S,unbindTexture:y,compressedTexImage2D:F,compressedTexImage3D:X,texImage2D:Le,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:et,texStorage2D:$,texStorage3D:Ee,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:be,compressedTexSubImage3D:me,scissor:Ce,viewport:Se,reset:_t}}function dS(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(S,y){return _?new OffscreenCanvas(S,y):Fr("canvas")}function x(S,y,F,X){let ee=1;if((S.width>X||S.height>X)&&(ee=X/Math.max(S.width,S.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const he=y?zo:Math.floor,be=he(ee*S.width),me=he(ee*S.height);m===void 0&&(m=b(be,me));const $=F?b(be,me):m;return $.width=be,$.height=me,$.getContext("2d").drawImage(S,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+be+"x"+me+")."),$}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function w(S){return Rl(S.width)&&Rl(S.height)}function M(S){return a?!1:S.wrapS!==Qt||S.wrapT!==Qt||S.minFilter!==ht&&S.minFilter!==Bt}function R(S,y){return S.generateMipmaps&&y&&S.minFilter!==ht&&S.minFilter!==Bt}function L(S){i.generateMipmap(S)}function v(S,y,F,X,ee=!1){if(a===!1)return y;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he=y;return y===6403&&(F===5126&&(he=33326),F===5131&&(he=33325),F===5121&&(he=33321)),y===33319&&(F===5126&&(he=33328),F===5131&&(he=33327),F===5121&&(he=33323)),y===6408&&(F===5126&&(he=34836),F===5131&&(he=34842),F===5121&&(he=X===Ye&&ee===!1?35907:32856),F===32819&&(he=32854),F===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(S,y,F){return R(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==ht&&S.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function O(S){return S===ht||S===El||S===Co?9728:9729}function W(S){const y=S.target;y.removeEventListener("dispose",W),B(y),y.isVideoTexture&&g.delete(y)}function ae(S){const y=S.target;y.removeEventListener("dispose",ae),G(y)}function B(S){const y=n.get(S);if(y.__webglInit===void 0)return;const F=S.source,X=p.get(F);if(X){const ee=X[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(S),Object.keys(X).length===0&&p.delete(F)}n.remove(S)}function N(S){const y=n.get(S);i.deleteTexture(y.__webglTexture);const F=S.source,X=p.get(F);delete X[y.__cacheKey],o.memory.textures--}function G(S){const y=S.texture,F=n.get(S),X=n.get(y);if(X.__webglTexture!==void 0&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ee]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,he=y.length;ee<he;ee++){const be=n.get(y[ee]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(y[ee])}n.remove(y),n.remove(S)}let se=0;function J(){se=0}function V(){const S=se;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),se+=1,S}function fe(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function ce(S,y){const F=n.get(S);if(S.isVideoTexture&&ge(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const X=S.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,S,y);return}}t.bindTexture(3553,F.__webglTexture,33984+y)}function j(S,y){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ne(F,S,y);return}t.bindTexture(35866,F.__webglTexture,33984+y)}function K(S,y){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ne(F,S,y);return}t.bindTexture(32879,F.__webglTexture,33984+y)}function ue(S,y){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ve(F,S,y);return}t.bindTexture(34067,F.__webglTexture,33984+y)}const _e={[Us]:10497,[Qt]:33071,[Bo]:33648},D={[ht]:9728,[El]:9984,[Co]:9986,[Bt]:9729,[Dd]:9985,[zi]:9987};function P(S,y,F){if(F?(i.texParameteri(S,10242,_e[y.wrapS]),i.texParameteri(S,10243,_e[y.wrapT]),(S===32879||S===35866)&&i.texParameteri(S,32882,_e[y.wrapR]),i.texParameteri(S,10240,D[y.magFilter]),i.texParameteri(S,10241,D[y.minFilter])):(i.texParameteri(S,10242,33071),i.texParameteri(S,10243,33071),(S===32879||S===35866)&&i.texParameteri(S,32882,33071),(y.wrapS!==Qt||y.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,10240,O(y.magFilter)),i.texParameteri(S,10241,O(y.minFilter)),y.minFilter!==ht&&y.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===ht||y.minFilter!==Co&&y.minFilter!==zi||y.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function re(S,y){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",W));const X=y.source;let ee=p.get(X);ee===void 0&&(ee={},p.set(X,ee));const he=fe(y);if(he!==S.__cacheKey){ee[he]===void 0&&(ee[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[he].usedTimes++;const be=ee[S.__cacheKey];be!==void 0&&(ee[S.__cacheKey].usedTimes--,be.usedTimes===0&&N(y)),S.__cacheKey=he,S.__webglTexture=ee[he].texture}return F}function ne(S,y,F){let X=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=35866),y.isData3DTexture&&(X=32879);const ee=re(S,y),he=y.source;t.bindTexture(X,S.__webglTexture,33984+F);const be=n.get(he);if(he.version!==be.__version||ee===!0){t.activeTexture(33984+F),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const me=M(y)&&w(y.image)===!1;let $=x(y.image,me,!1,u);$=oe(y,$);const Ee=w($)||a,Le=r.convert(y.format,y.encoding);let Te=r.convert(y.type),Ce=v(y.internalFormat,Le,Te,y.encoding,y.isVideoTexture);P(X,y,Ee);let Se;const Ie=y.mipmaps,et=a&&y.isVideoTexture!==!0,_t=be.__version===void 0||ee===!0,I=C(y,$,Ee);if(y.isDepthTexture)Ce=6402,a?y.type===li?Ce=36012:y.type===Ii?Ce=33190:y.type===Es?Ce=35056:Ce=33189:y.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ui&&Ce===6402&&y.type!==Nd&&y.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ii,Te=r.convert(y.type)),y.format===Bs&&Ce===6402&&(Ce=34041,y.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Es,Te=r.convert(y.type))),_t&&(et?t.texStorage2D(3553,1,Ce,$.width,$.height):t.texImage2D(3553,0,Ce,$.width,$.height,0,Le,Te,null));else if(y.isDataTexture)if(Ie.length>0&&Ee){et&&_t&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let Y=0,pe=Ie.length;Y<pe;Y++)Se=Ie[Y],et?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,Le,Te,Se.data):t.texImage2D(3553,Y,Ce,Se.width,Se.height,0,Le,Te,Se.data);y.generateMipmaps=!1}else et?(_t&&t.texStorage2D(3553,I,Ce,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,Le,Te,$.data)):t.texImage2D(3553,0,Ce,$.width,$.height,0,Le,Te,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){et&&_t&&t.texStorage3D(35866,I,Ce,Ie[0].width,Ie[0].height,$.depth);for(let Y=0,pe=Ie.length;Y<pe;Y++)Se=Ie[Y],y.format!==en?Le!==null?et?t.compressedTexSubImage3D(35866,Y,0,0,0,Se.width,Se.height,$.depth,Le,Se.data,0,0):t.compressedTexImage3D(35866,Y,Ce,Se.width,Se.height,$.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,Y,0,0,0,Se.width,Se.height,$.depth,Le,Te,Se.data):t.texImage3D(35866,Y,Ce,Se.width,Se.height,$.depth,0,Le,Te,Se.data)}else{et&&_t&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let Y=0,pe=Ie.length;Y<pe;Y++)Se=Ie[Y],y.format!==en?Le!==null?et?t.compressedTexSubImage2D(3553,Y,0,0,Se.width,Se.height,Le,Se.data):t.compressedTexImage2D(3553,Y,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,Le,Te,Se.data):t.texImage2D(3553,Y,Ce,Se.width,Se.height,0,Le,Te,Se.data)}else if(y.isDataArrayTexture)et?(_t&&t.texStorage3D(35866,I,Ce,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Le,Te,$.data)):t.texImage3D(35866,0,Ce,$.width,$.height,$.depth,0,Le,Te,$.data);else if(y.isData3DTexture)et?(_t&&t.texStorage3D(32879,I,Ce,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Le,Te,$.data)):t.texImage3D(32879,0,Ce,$.width,$.height,$.depth,0,Le,Te,$.data);else if(y.isFramebufferTexture){if(_t)if(et)t.texStorage2D(3553,I,Ce,$.width,$.height);else{let Y=$.width,pe=$.height;for(let we=0;we<I;we++)t.texImage2D(3553,we,Ce,Y,pe,0,Le,Te,null),Y>>=1,pe>>=1}}else if(Ie.length>0&&Ee){et&&_t&&t.texStorage2D(3553,I,Ce,Ie[0].width,Ie[0].height);for(let Y=0,pe=Ie.length;Y<pe;Y++)Se=Ie[Y],et?t.texSubImage2D(3553,Y,0,0,Le,Te,Se):t.texImage2D(3553,Y,Ce,Le,Te,Se);y.generateMipmaps=!1}else et?(_t&&t.texStorage2D(3553,I,Ce,$.width,$.height),t.texSubImage2D(3553,0,0,0,Le,Te,$)):t.texImage2D(3553,0,Ce,Le,Te,$);R(y,Ee)&&L(X),be.__version=he.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ve(S,y,F){if(y.image.length!==6)return;const X=re(S,y),ee=y.source;t.bindTexture(34067,S.__webglTexture,33984+F);const he=n.get(ee);if(ee.version!==he.__version||X===!0){t.activeTexture(33984+F),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,$=[];for(let Y=0;Y<6;Y++)!be&&!me?$[Y]=x(y.image[Y],!1,!0,c):$[Y]=me?y.image[Y].image:y.image[Y],$[Y]=oe(y,$[Y]);const Ee=$[0],Le=w(Ee)||a,Te=r.convert(y.format,y.encoding),Ce=r.convert(y.type),Se=v(y.internalFormat,Te,Ce,y.encoding),Ie=a&&y.isVideoTexture!==!0,et=he.__version===void 0||X===!0;let _t=C(y,Ee,Le);P(34067,y,Le);let I;if(be){Ie&&et&&t.texStorage2D(34067,_t,Se,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){I=$[Y].mipmaps;for(let pe=0;pe<I.length;pe++){const we=I[pe];y.format!==en?Te!==null?Ie?t.compressedTexSubImage2D(34069+Y,pe,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(34069+Y,pe,Se,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+Y,pe,0,0,we.width,we.height,Te,Ce,we.data):t.texImage2D(34069+Y,pe,Se,we.width,we.height,0,Te,Ce,we.data)}}}else{I=y.mipmaps,Ie&&et&&(I.length>0&&_t++,t.texStorage2D(34067,_t,Se,$[0].width,$[0].height));for(let Y=0;Y<6;Y++)if(me){Ie?t.texSubImage2D(34069+Y,0,0,0,$[Y].width,$[Y].height,Te,Ce,$[Y].data):t.texImage2D(34069+Y,0,Se,$[Y].width,$[Y].height,0,Te,Ce,$[Y].data);for(let pe=0;pe<I.length;pe++){const Ae=I[pe].image[Y].image;Ie?t.texSubImage2D(34069+Y,pe+1,0,0,Ae.width,Ae.height,Te,Ce,Ae.data):t.texImage2D(34069+Y,pe+1,Se,Ae.width,Ae.height,0,Te,Ce,Ae.data)}}else{Ie?t.texSubImage2D(34069+Y,0,0,0,Te,Ce,$[Y]):t.texImage2D(34069+Y,0,Se,Te,Ce,$[Y]);for(let pe=0;pe<I.length;pe++){const we=I[pe];Ie?t.texSubImage2D(34069+Y,pe+1,0,0,Te,Ce,we.image[Y]):t.texImage2D(34069+Y,pe+1,Se,Te,Ce,we.image[Y])}}}R(y,Le)&&L(34067),he.__version=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function xe(S,y,F,X,ee){const he=r.convert(F.format,F.encoding),be=r.convert(F.type),me=v(F.internalFormat,he,be,F.encoding);n.get(y).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,me,y.width,y.height,y.depth,0,he,be,null):t.texImage2D(ee,0,me,y.width,y.height,0,he,be,null)),t.bindFramebuffer(36160,S),ie(y)?f.framebufferTexture2DMultisampleEXT(36160,X,ee,n.get(F).__webglTexture,0,de(y)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,X,ee,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(S,y,F){if(i.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let X=33189;if(F||ie(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===li?X=36012:ee.type===Ii&&(X=33190));const he=de(y);ie(y)?f.renderbufferStorageMultisampleEXT(36161,he,X,y.width,y.height):i.renderbufferStorageMultisample(36161,he,X,y.width,y.height)}else i.renderbufferStorage(36161,X,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const X=de(y);F&&ie(y)===!1?i.renderbufferStorageMultisample(36161,X,35056,y.width,y.height):ie(y)?f.renderbufferStorageMultisampleEXT(36161,X,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,S)}else{const X=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<X.length;ee++){const he=X[ee],be=r.convert(he.format,he.encoding),me=r.convert(he.type),$=v(he.internalFormat,be,me,he.encoding),Ee=de(y);F&&ie(y)===!1?i.renderbufferStorageMultisample(36161,Ee,$,y.width,y.height):ie(y)?f.renderbufferStorageMultisampleEXT(36161,Ee,$,y.width,y.height):i.renderbufferStorage(36161,$,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function T(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce(y.depthTexture,0);const X=n.get(y.depthTexture).__webglTexture,ee=de(y);if(y.depthTexture.format===Ui)ie(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,X,0,ee):i.framebufferTexture2D(36160,36096,3553,X,0);else if(y.depthTexture.format===Bs)ie(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,X,0,ee):i.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function A(S){const y=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");T(y.__webglFramebuffer,S)}else if(F){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]=i.createRenderbuffer(),Me(y.__webglDepthbuffer[X],S,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Me(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function H(S,y,F){const X=n.get(S);y!==void 0&&xe(X.__webglFramebuffer,S,S.texture,36064,3553),F!==void 0&&A(S)}function q(S){const y=S.texture,F=n.get(S),X=n.get(y);S.addEventListener("dispose",ae),S.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,he=S.isWebGLMultipleRenderTargets===!0,be=w(S)||a;if(ee){F.__webglFramebuffer=[];for(let me=0;me<6;me++)F.__webglFramebuffer[me]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),he)if(s.drawBuffers){const me=S.texture;for(let $=0,Ee=me.length;$<Ee;$++){const Le=n.get(me[$]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ie(S)===!1){const me=he?y:[y];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let $=0;$<me.length;$++){const Ee=me[$];F.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[$]);const Le=r.convert(Ee.format,Ee.encoding),Te=r.convert(Ee.type),Ce=v(Ee.internalFormat,Le,Te,Ee.encoding,S.isXRRenderTarget===!0),Se=de(S);i.renderbufferStorageMultisample(36161,Se,Ce,S.width,S.height),i.framebufferRenderbuffer(36160,36064+$,36161,F.__webglColorRenderbuffer[$])}i.bindRenderbuffer(36161,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,X.__webglTexture),P(34067,y,be);for(let me=0;me<6;me++)xe(F.__webglFramebuffer[me],S,y,36064,34069+me);R(y,be)&&L(34067),t.unbindTexture()}else if(he){const me=S.texture;for(let $=0,Ee=me.length;$<Ee;$++){const Le=me[$],Te=n.get(Le);t.bindTexture(3553,Te.__webglTexture),P(3553,Le,be),xe(F.__webglFramebuffer,S,Le,36064+$,3553),R(Le,be)&&L(3553)}t.unbindTexture()}else{let me=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?me=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,X.__webglTexture),P(me,y,be),xe(F.__webglFramebuffer,S,y,36064,me),R(y,be)&&L(me),t.unbindTexture()}S.depthBuffer&&A(S)}function Q(S){const y=w(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let X=0,ee=F.length;X<ee;X++){const he=F[X];if(R(he,y)){const be=S.isWebGLCubeRenderTarget?34067:3553,me=n.get(he).__webglTexture;t.bindTexture(be,me),L(be),t.unbindTexture()}}}function le(S){if(a&&S.samples>0&&ie(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,X=S.height;let ee=16384;const he=[],be=S.stencilBuffer?33306:36096,me=n.get(S),$=S.isWebGLMultipleRenderTargets===!0;if($)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){he.push(36064+Ee),S.depthBuffer&&he.push(be);const Le=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Le===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),$&&i.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Ee]),Le===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),$){const Te=n.get(y[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Te,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,ee,9728),d&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,me.__webglColorRenderbuffer[Ee]);const Le=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Le,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function de(S){return Math.min(h,S.samples)}function ie(S){const y=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ge(S){const y=o.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function oe(S,y){const F=S.encoding,X=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Cl||F!==Vi&&(F===Ye?a===!1?e.has("EXT_sRGB")===!0&&X===en?(S.format=Cl,S.minFilter=Bt,S.generateMipmaps=!1):y=Vd.sRGBToLinear(y):(X!==en||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),y}this.allocateTextureUnit=V,this.resetTextureUnits=J,this.setTexture2D=ce,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=ue,this.rebindTextures=H,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ie}function pS(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Hi)return 5121;if(r===X0)return 32819;if(r===K0)return 32820;if(r===W0)return 5120;if(r===j0)return 5122;if(r===Nd)return 5123;if(r===q0)return 5124;if(r===Ii)return 5125;if(r===li)return 5126;if(r===Pr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$0)return 6406;if(r===en)return 6408;if(r===Z0)return 6409;if(r===J0)return 6410;if(r===Ui)return 6402;if(r===Bs)return 34041;if(r===Y0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Q0)return 6403;if(r===ex)return 36244;if(r===tx)return 33319;if(r===nx)return 33320;if(r===ix)return 36249;if(r===wa||r===Ta||r===Ea||r===Aa)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lu||r===Pu||r===Iu||r===Du)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Lu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Iu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nu||r===Fu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Nu)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ou||r===Uu||r===Bu||r===ku||r===zu||r===Hu||r===Vu||r===Gu||r===Wu||r===ju||r===qu||r===Xu||r===Ku||r===$u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ou)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ku)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ju)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ku)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$u)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Yu)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Es?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class mS extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _S extends wt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=Ii),n===void 0&&u===Bs&&(n=Es),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class xS extends ji{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],b=[],x=new Set,w=new Map,M=new kt;M.layers.enable(1),M.viewport=new nt;const R=new kt;R.layers.enable(2),R.viewport=new nt;const L=[M,R],v=new mS;v.layers.enable(1),v.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=_[j];return K===void 0&&(K=new Qa,_[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=_[j];return K===void 0&&(K=new Qa,_[j]=K),K.getGripSpace()},this.getHand=function(j){let K=_[j];return K===void 0&&(K=new Qa,_[j]=K),K.getHandSpace()};function W(j){const K=b.indexOf(j.inputSource);if(K===-1)return;const ue=_[K];ue!==void 0&&ue.dispatchEvent({type:j.type,data:j.inputSource})}function ae(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",B);for(let j=0;j<_.length;j++){const K=b[j];K!==null&&(b[j]=null,_[j].disconnect(K))}C=null,O=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,p=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),p=new qn(f.framebufferWidth,f.framebufferHeight,{format:en,type:Hi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,ue=null,_e=null;g.depth&&(_e=g.stencil?35056:33190,K=g.stencil?Bs:Ui,ue=g.stencil?Es:Ii);const D={colorFormat:32856,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(D),s.updateRenderState({layers:[h]}),p=new qn(h.textureWidth,h.textureHeight,{format:en,type:Hi,depthTexture:new _S(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const P=e.properties.get(p);P.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(j){for(let K=0;K<j.removed.length;K++){const ue=j.removed[K],_e=b.indexOf(ue);_e>=0&&(b[_e]=null,_[_e].disconnect(ue))}for(let K=0;K<j.added.length;K++){const ue=j.added[K];let _e=b.indexOf(ue);if(_e===-1){for(let P=0;P<_.length;P++)if(P>=b.length){b.push(ue),_e=P;break}else if(b[P]===null){b[P]=ue,_e=P;break}if(_e===-1)break}const D=_[_e];D&&D.connect(ue)}}const N=new U,G=new U;function se(j,K,ue){N.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const _e=N.distanceTo(G),D=K.projectionMatrix.elements,P=ue.projectionMatrix.elements,re=D[14]/(D[10]-1),ne=D[14]/(D[10]+1),ve=(D[9]+1)/D[5],xe=(D[9]-1)/D[5],Me=(D[8]-1)/D[0],T=(P[8]+1)/P[0],A=re*Me,H=re*T,q=_e/(-Me+T),Q=q*-Me;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Q),j.translateZ(q),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const le=re+q,de=ne+q,ie=A-Q,ge=H+(_e-Q),oe=ve*ne/de*le,S=xe*ne/de*le;j.projectionMatrix.makePerspective(ie,ge,oe,S,le,de)}function J(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;v.near=R.near=M.near=j.near,v.far=R.far=M.far=j.far,(C!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,O=v.far);const K=j.parent,ue=v.cameras;J(v,K);for(let D=0;D<ue.length;D++)J(ue[D],K);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),j.matrix.copy(v.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const _e=j.children;for(let D=0,P=_e.length;D<P;D++)_e[D].updateMatrixWorld(!0);ue.length===2?se(v,M,R):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(j){h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.getPlanes=function(){return x};let V=null;function fe(j,K){if(c=K.getViewerPose(l||o),d=K,c!==null){const ue=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let _e=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let D=0;D<ue.length;D++){const P=ue[D];let re=null;if(f!==null)re=f.getViewport(P);else{const ve=u.getViewSubImage(h,P);re=ve.viewport,D===0&&(e.setRenderTargetTextures(p,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}let ne=L[D];ne===void 0&&(ne=new kt,ne.layers.enable(D),ne.viewport=new nt,L[D]=ne),ne.matrix.fromArray(P.transform.matrix),ne.projectionMatrix.fromArray(P.projectionMatrix),ne.viewport.set(re.x,re.y,re.width,re.height),D===0&&v.matrix.copy(ne.matrix),_e===!0&&v.cameras.push(ne)}}for(let ue=0;ue<_.length;ue++){const _e=b[ue],D=_[ue];_e!==null&&D!==void 0&&D.update(_e,K,l||o)}if(V&&V(j,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ue=null;for(const _e of x)K.detectedPlanes.has(_e)||(ue===null&&(ue=[]),ue.push(_e));if(ue!==null)for(const _e of ue)x.delete(_e),w.delete(_e),n.dispatchEvent({type:"planeremoved",data:_e});for(const _e of K.detectedPlanes)if(!x.has(_e))x.add(_e),w.set(_e,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:_e});else{const D=w.get(_e);_e.lastChangedTime>D&&(w.set(_e,_e.lastChangedTime),n.dispatchEvent({type:"planechanged",data:_e}))}}d=null}const ce=new Zd;ce.setAnimationLoop(fe),this.setAnimationLoop=function(j){V=j},this.dispose=function(){}}}function vS(i,e){function t(m,p){p.color.getRGB(m.fogColor.value,Kd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yS(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const w=x.program;n.uniformBlockBinding(b,w)}function c(b,x){let w=s[b.id];w===void 0&&(g(b),w=u(b),s[b.id]=w,b.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(b,M);const R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function u(b){const x=h();b.__bindingPointIndex=x;const w=i.createBuffer(),M=b.__size,R=b.usage;return i.bindBuffer(35345,w),i.bufferData(35345,M,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,w),w}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],w=b.uniforms,M=b.__cache;i.bindBuffer(35345,x);for(let R=0,L=w.length;R<L;R++){const v=w[R];if(d(v,R,M)===!0){const C=v.__offset,O=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let ae=0;ae<O.length;ae++){const B=O[ae],N=m(B);typeof B=="number"?(v.__data[0]=B,i.bufferSubData(35345,C+W,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=B.elements[0],v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=B.elements[0],v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=B.elements[0]):(B.toArray(v.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,C,v.__data)}}i.bindBuffer(35345,null)}function d(b,x,w){const M=b.value;if(w[x]===void 0){if(typeof M=="number")w[x]=M;else{const R=Array.isArray(M)?M:[M],L=[];for(let v=0;v<R.length;v++)L.push(R[v].clone());w[x]=L}return!0}else if(typeof M=="number"){if(w[x]!==M)return w[x]=M,!0}else{const R=Array.isArray(w[x])?w[x]:[w[x]],L=Array.isArray(M)?M:[M];for(let v=0;v<R.length;v++){const C=R[v];if(C.equals(L[v])===!1)return C.copy(L[v]),!0}}return!1}function g(b){const x=b.uniforms;let w=0;const M=16;let R=0;for(let L=0,v=x.length;L<v;L++){const C=x[L],O={boundary:0,storage:0},W=Array.isArray(C.value)?C.value:[C.value];for(let ae=0,B=W.length;ae<B;ae++){const N=W[ae],G=m(N);O.boundary+=G.boundary,O.storage+=G.storage}if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,L>0){R=w%M;const ae=M-R;R!==0&&ae-O.boundary<0&&(w+=M-R,C.__offset=w)}w+=O.storage}return R=w%M,R>0&&(w+=M-R),b.__size=w,b.__cache={},this}function m(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function bS(){const i=Fr("canvas");return i.style.display="block",i}function ip(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:bS(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vi,this.physicallyCorrectLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,b=0,x=null,w=-1,M=null;const R=new nt,L=new nt;let v=null,C=e.width,O=e.height,W=1,ae=null,B=null;const N=new nt(0,0,C,O),G=new nt(0,0,C,O);let se=!1;const J=new pc;let V=!1,fe=!1,ce=null;const j=new ke,K=new He,ue=new U,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function D(){return x===null?W:1}let P=t;function re(E,z){for(let Z=0;Z<E.length;Z++){const k=E[Z],te=e.getContext(k,z);if(te!==null)return te}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),P===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),P=re(z,E),P===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,ve,xe,Me,T,A,H,q,Q,le,de,ie,ge,oe,S,y,F,X,ee,he,be,me,$,Ee;function Le(){ne=new Db(P),ve=new Ab(P,ne,i),ne.init(ve),me=new pS(P,ne,ve),xe=new fS(P,ne,ve),Me=new Ob,T=new QM,A=new dS(P,ne,xe,T,ve,me,Me),H=new Rb(m),q=new Ib(m),Q=new jx(P,ve),$=new Tb(P,ne,Q,ve),le=new Nb(P,Q,Me,$),de=new zb(P,le,Q,Me),ee=new kb(P,ve,A),y=new Cb(T),ie=new JM(m,H,q,ne,ve,$,y),ge=new vS(m,T),oe=new tS,S=new aS(ne,ve),X=new wb(m,H,q,xe,de,u,o),F=new hS(m,de,ve),Ee=new yS(P,Me,ve,xe),he=new Eb(P,ne,Me,ve),be=new Fb(P,ne,Me,ve),Me.programs=ie.programs,m.capabilities=ve,m.extensions=ne,m.properties=T,m.renderLists=oe,m.shadowMap=F,m.state=xe,m.info=Me}Le();const Te=new xS(m,P);this.xr=Te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(C,O,!1))},this.getSize=function(E){return E.set(C,O)},this.setSize=function(E,z,Z){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,O=z,e.width=Math.floor(E*W),e.height=Math.floor(z*W),Z!==!1&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(C*W,O*W).floor()},this.setDrawingBufferSize=function(E,z,Z){C=E,O=z,W=Z,e.width=Math.floor(E*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,z,Z,k){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,z,Z,k),xe.viewport(R.copy(N).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,z,Z,k){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,z,Z,k),xe.scissor(L.copy(G).multiplyScalar(W).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){xe.setScissorTest(se=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E=!0,z=!0,Z=!0){let k=0;E&&(k|=16384),z&&(k|=256),Z&&(k|=1024),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),oe.dispose(),S.dispose(),T.dispose(),H.dispose(),q.dispose(),de.dispose(),$.dispose(),Ee.dispose(),ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",we),Te.removeEventListener("sessionend",Ae),ce&&(ce.dispose(),ce=null),$e.stop()};function Ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Me.autoReset,z=F.enabled,Z=F.autoUpdate,k=F.needsUpdate,te=F.type;Le(),Me.autoReset=E,F.enabled=z,F.autoUpdate=Z,F.needsUpdate=k,F.type=te}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const z=E.target;z.removeEventListener("dispose",et),_t(z)}function _t(E){I(E),T.remove(E)}function I(E){const z=T.get(E).programs;z!==void 0&&(z.forEach(function(Z){ie.releaseProgram(Z)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Z,k,te,Re){z===null&&(z=_e);const De=te.isMesh&&te.matrixWorld.determinant()<0,Ue=Ep(E,z,Z,k,te);xe.setMaterial(k,De);let Be=Z.index,Xe=1;k.wireframe===!0&&(Be=le.getWireframeAttribute(Z),Xe=2);const Ve=Z.drawRange,Ge=Z.attributes.position;let lt=Ve.start*Xe,zt=(Ve.start+Ve.count)*Xe;Re!==null&&(lt=Math.max(lt,Re.start*Xe),zt=Math.min(zt,(Re.start+Re.count)*Xe)),Be!==null?(lt=Math.max(lt,0),zt=Math.min(zt,Be.count)):Ge!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,Ge.count));const Pn=zt-lt;if(Pn<0||Pn===1/0)return;$.setup(te,k,Ue,Z,Be);let xi,ct=he;if(Be!==null&&(xi=Q.get(Be),ct=be,ct.setIndex(xi)),te.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*D()),ct.setMode(1)):ct.setMode(4);else if(te.isLine){let We=k.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*D()),te.isLineSegments?ct.setMode(1):te.isLineLoop?ct.setMode(2):ct.setMode(3)}else te.isPoints?ct.setMode(0):te.isSprite&&ct.setMode(4);if(te.isInstancedMesh)ct.renderInstances(lt,Pn,te.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ua=Math.min(Z.instanceCount,We);ct.renderInstances(lt,Pn,ua)}else ct.render(lt,Pn)},this.compile=function(E,z){function Z(k,te,Re){k.transparent===!0&&k.side===Qr?(k.side=nn,k.needsUpdate=!0,$t(k,te,Re),k.side=gi,k.needsUpdate=!0,$t(k,te,Re),k.side=Qr):$t(k,te,Re)}f=S.get(E),f.init(),g.push(f),E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(k){const te=k.material;if(te)if(Array.isArray(te))for(let Re=0;Re<te.length;Re++){const De=te[Re];Z(De,E,k)}else Z(te,E,k)}),g.pop(),f=null};let Y=null;function pe(E){Y&&Y(E)}function we(){$e.stop()}function Ae(){$e.start()}const $e=new Zd;$e.setAnimationLoop(pe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(E){Y=E,Te.setAnimationLoop(E),E===null?$e.stop():$e.start()},Te.addEventListener("sessionstart",we),Te.addEventListener("sessionend",Ae),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(z),z=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,z,x),f=S.get(E,g.length),f.init(),g.push(f),j.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(j),fe=this.localClippingEnabled,V=y.init(this.clippingPlanes,fe,z),h=oe.get(E,d.length),h.init(),d.push(h),xt(E,z,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ae,B),V===!0&&y.beginShadows();const Z=f.state.shadowsArray;if(F.render(Z,E,z),V===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,E),f.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const k=z.cameras;for(let te=0,Re=k.length;te<Re;te++){const De=k[te];Tt(h,E,De,De.viewport)}}else Tt(h,E,z);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(m,E,z),$.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function xt(E,z,Z,k){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){k&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const De=de.update(E),Ue=E.material;Ue.visible&&h.push(E,De,Ue,Z,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Me.render.frame&&(E.skeleton.update(),E.skeleton.frame=Me.render.frame),!E.frustumCulled||J.intersectsObject(E))){k&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const De=de.update(E),Ue=E.material;if(Array.isArray(Ue)){const Be=De.groups;for(let Xe=0,Ve=Be.length;Xe<Ve;Xe++){const Ge=Be[Xe],lt=Ue[Ge.materialIndex];lt&&lt.visible&&h.push(E,De,lt,Z,ue.z,Ge)}}else Ue.visible&&h.push(E,De,Ue,Z,ue.z,null)}}const Re=E.children;for(let De=0,Ue=Re.length;De<Ue;De++)xt(Re[De],z,Z,k)}function Tt(E,z,Z,k){const te=E.opaque,Re=E.transmissive,De=E.transparent;f.setupLightsView(Z),Re.length>0&&_i(te,z,Z),k&&xe.viewport(R.copy(k)),te.length>0&&it(te,z,Z),Re.length>0&&it(Re,z,Z),De.length>0&&it(De,z,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _i(E,z,Z){const k=ve.isWebGL2;ce===null&&(ce=new qn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Pr:Hi,minFilter:zi,samples:k&&r===!0?4:0})),m.getDrawingBufferSize(K),k?ce.setSize(K.x,K.y):ce.setSize(zo(K.x),zo(K.y));const te=m.getRenderTarget();m.setRenderTarget(ce),m.clear();const Re=m.toneMapping;m.toneMapping=Gn,it(E,z,Z),m.toneMapping=Re,A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),m.setRenderTarget(te)}function it(E,z,Z){const k=z.isScene===!0?z.overrideMaterial:null;for(let te=0,Re=E.length;te<Re;te++){const De=E[te],Ue=De.object,Be=De.geometry,Xe=k===null?De.material:k,Ve=De.group;Ue.layers.test(Z.layers)&&Ln(Ue,z,Z,Be,Xe,Ve)}}function Ln(E,z,Z,k,te,Re){E.onBeforeRender(m,z,Z,k,te,Re),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(m,z,Z,k,E,Re),te.transparent===!0&&te.side===Qr?(te.side=nn,te.needsUpdate=!0,m.renderBufferDirect(Z,z,k,te,E,Re),te.side=gi,te.needsUpdate=!0,m.renderBufferDirect(Z,z,k,te,E,Re),te.side=Qr):m.renderBufferDirect(Z,z,k,te,E,Re),E.onAfterRender(m,z,Z,k,te,Re)}function $t(E,z,Z){z.isScene!==!0&&(z=_e);const k=T.get(E),te=f.state.lights,Re=f.state.shadowsArray,De=te.state.version,Ue=ie.getParameters(E,te.state,Re,z,Z),Be=ie.getProgramCacheKey(Ue);let Xe=k.programs;k.environment=E.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.envMap=(E.isMeshStandardMaterial?q:H).get(E.envMap||k.environment),Xe===void 0&&(E.addEventListener("dispose",et),Xe=new Map,k.programs=Xe);let Ve=Xe.get(Be);if(Ve!==void 0){if(k.currentProgram===Ve&&k.lightsStateVersion===De)return Ic(E,Ue),Ve}else Ue.uniforms=ie.getUniforms(E),E.onBuild(Z,Ue,m),E.onBeforeCompile(Ue,m),Ve=ie.acquireProgram(Ue,Be),Xe.set(Be,Ve),k.uniforms=Ue.uniforms;const Ge=k.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=y.uniform),Ic(E,Ue),k.needsLights=Cp(E),k.lightsStateVersion=De,k.needsLights&&(Ge.ambientLightColor.value=te.state.ambient,Ge.lightProbe.value=te.state.probe,Ge.directionalLights.value=te.state.directional,Ge.directionalLightShadows.value=te.state.directionalShadow,Ge.spotLights.value=te.state.spot,Ge.spotLightShadows.value=te.state.spotShadow,Ge.rectAreaLights.value=te.state.rectArea,Ge.ltc_1.value=te.state.rectAreaLTC1,Ge.ltc_2.value=te.state.rectAreaLTC2,Ge.pointLights.value=te.state.point,Ge.pointLightShadows.value=te.state.pointShadow,Ge.hemisphereLights.value=te.state.hemi,Ge.directionalShadowMap.value=te.state.directionalShadowMap,Ge.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ge.spotShadowMap.value=te.state.spotShadowMap,Ge.spotLightMatrix.value=te.state.spotLightMatrix,Ge.spotLightMap.value=te.state.spotLightMap,Ge.pointShadowMap.value=te.state.pointShadowMap,Ge.pointShadowMatrix.value=te.state.pointShadowMatrix);const lt=Ve.getUniforms(),zt=Lo.seqWithValue(lt.seq,Ge);return k.currentProgram=Ve,k.uniformsList=zt,Ve}function Ic(E,z){const Z=T.get(E);Z.outputEncoding=z.outputEncoding,Z.instancing=z.instancing,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Ep(E,z,Z,k,te){z.isScene!==!0&&(z=_e),A.resetTextureUnits();const Re=z.fog,De=k.isMeshStandardMaterial?z.environment:null,Ue=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Vi,Be=(k.isMeshStandardMaterial?q:H).get(k.envMap||De),Xe=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!k.normalMap&&!!Z.attributes.tangent,Ge=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,zt=!!Z.morphAttributes.color,Pn=k.toneMapped?m.toneMapping:Gn,xi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=xi!==void 0?xi.length:0,We=T.get(k),ua=f.state.lights;if(V===!0&&(fe===!0||E!==M)){const Ht=E===M&&k.id===w;y.setState(k,E,Ht)}let vt=!1;k.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ua.state.version||We.outputEncoding!==Ue||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||We.envMap!==Be||k.fog===!0&&We.fog!==Re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==y.numPlanes||We.numIntersection!==y.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ve||We.morphTargets!==Ge||We.morphNormals!==lt||We.morphColors!==zt||We.toneMapping!==Pn||ve.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(vt=!0):(vt=!0,We.__version=k.version);let vi=We.currentProgram;vt===!0&&(vi=$t(k,z,te));let Dc=!1,Js=!1,ha=!1;const Ct=vi.getUniforms(),yi=We.uniforms;if(xe.useProgram(vi.program)&&(Dc=!0,Js=!0,ha=!0),k.id!==w&&(w=k.id,Js=!0),Dc||M!==E){if(Ct.setValue(P,"projectionMatrix",E.projectionMatrix),ve.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,Js=!0,ha=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ht=Ct.map.cameraPosition;Ht!==void 0&&Ht.setValue(P,ue.setFromMatrixPosition(E.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||te.isSkinnedMesh)&&Ct.setValue(P,"viewMatrix",E.matrixWorldInverse)}if(te.isSkinnedMesh){Ct.setOptional(P,te,"bindMatrix"),Ct.setOptional(P,te,"bindMatrixInverse");const Ht=te.skeleton;Ht&&(ve.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ct.setValue(P,"boneTexture",Ht.boneTexture,A),Ct.setValue(P,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=Z.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&ve.isWebGL2===!0)&&ee.update(te,Z,k,vi),(Js||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,Ct.setValue(P,"receiveShadow",te.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(yi.envMap.value=Be,yi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Js&&(Ct.setValue(P,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&Ap(yi,ha),Re&&k.fog===!0&&ge.refreshFogUniforms(yi,Re),ge.refreshMaterialUniforms(yi,k,W,O,ce),Lo.upload(P,We.uniformsList,yi,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Lo.upload(P,We.uniformsList,yi,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ct.setValue(P,"center",te.center),Ct.setValue(P,"modelViewMatrix",te.modelViewMatrix),Ct.setValue(P,"normalMatrix",te.normalMatrix),Ct.setValue(P,"modelMatrix",te.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ht=k.uniformsGroups;for(let da=0,Rp=Ht.length;da<Rp;da++)if(ve.isWebGL2){const Nc=Ht[da];Ee.update(Nc,vi),Ee.bind(Nc,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ap(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Cp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,z,Z){T.get(E.texture).__webglTexture=z,T.get(E.depthTexture).__webglTexture=Z;const k=T.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Z===void 0,k.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const Z=T.get(E);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Z=0){x=E,_=z,b=Z;let k=!0,te=null,Re=!1,De=!1;if(E){const Be=T.get(E);Be.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),k=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(E):Be.__hasExternalTextures&&A.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Ve=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(te=Ve[z],Re=!0):ve.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?te=T.get(E).__webglMultisampledFramebuffer:te=Ve,R.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else R.copy(N).multiplyScalar(W).floor(),L.copy(G).multiplyScalar(W).floor(),v=se;if(xe.bindFramebuffer(36160,te)&&ve.drawBuffers&&k&&xe.drawBuffers(E,te),xe.viewport(R),xe.scissor(L),xe.setScissorTest(v),Re){const Be=T.get(E.texture);P.framebufferTexture2D(36160,36064,34069+z,Be.__webglTexture,Z)}else if(De){const Be=T.get(E.texture),Xe=z||0;P.framebufferTextureLayer(36160,36064,Be.__webglTexture,Z||0,Xe)}w=-1},this.readRenderTargetPixels=function(E,z,Z,k,te,Re,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){xe.bindFramebuffer(36160,Ue);try{const Be=E.texture,Xe=Be.format,Ve=Be.type;if(Xe!==en&&me.convert(Xe)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===Pr&&(ne.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Ve!==Hi&&me.convert(Ve)!==P.getParameter(35738)&&!(Ve===li&&(ve.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-k&&Z>=0&&Z<=E.height-te&&P.readPixels(z,Z,k,te,me.convert(Xe),me.convert(Ve),Re)}finally{const Be=x!==null?T.get(x).__webglFramebuffer:null;xe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(E,z,Z=0){const k=Math.pow(2,-Z),te=Math.floor(z.image.width*k),Re=Math.floor(z.image.height*k);A.setTexture2D(z,0),P.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,te,Re),xe.unbindTexture()},this.copyTextureToTexture=function(E,z,Z,k=0){const te=z.image.width,Re=z.image.height,De=me.convert(Z.format),Ue=me.convert(Z.type);A.setTexture2D(Z,0),P.pixelStorei(37440,Z.flipY),P.pixelStorei(37441,Z.premultiplyAlpha),P.pixelStorei(3317,Z.unpackAlignment),z.isDataTexture?P.texSubImage2D(3553,k,E.x,E.y,te,Re,De,Ue,z.image.data):z.isCompressedTexture?P.compressedTexSubImage2D(3553,k,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):P.texSubImage2D(3553,k,E.x,E.y,De,Ue,z.image),k===0&&Z.generateMipmaps&&P.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Z,k,te=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Be=me.convert(k.format),Xe=me.convert(k.type);let Ve;if(k.isData3DTexture)A.setTexture3D(k,0),Ve=32879;else if(k.isDataArrayTexture)A.setTexture2DArray(k,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,k.flipY),P.pixelStorei(37441,k.premultiplyAlpha),P.pixelStorei(3317,k.unpackAlignment);const Ge=P.getParameter(3314),lt=P.getParameter(32878),zt=P.getParameter(3316),Pn=P.getParameter(3315),xi=P.getParameter(32877),ct=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;P.pixelStorei(3314,ct.width),P.pixelStorei(32878,ct.height),P.pixelStorei(3316,E.min.x),P.pixelStorei(3315,E.min.y),P.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?P.texSubImage3D(Ve,te,z.x,z.y,z.z,Re,De,Ue,Be,Xe,ct.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,te,z.x,z.y,z.z,Re,De,Ue,Be,ct.data)):P.texSubImage3D(Ve,te,z.x,z.y,z.z,Re,De,Ue,Be,Xe,ct),P.pixelStorei(3314,Ge),P.pixelStorei(32878,lt),P.pixelStorei(3316,zt),P.pixelStorei(3315,Pn),P.pixelStorei(32877,xi),te===0&&k.generateMipmaps&&P.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,xe.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class MS extends ip{}MS.prototype.isWebGL1Renderer=!0;class SS extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new U;class _c{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ph=new U,Ih=new nt,Dh=new nt,TS=new U,Nh=new ke;class ES extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;Ih.fromBufferAttribute(s.attributes.skinIndex,e),Dh.fromBufferAttribute(s.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Dh.getComponent(r);if(o!==0){const a=Ih.getComponent(r);Nh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TS.copy(Ph).applyMatrix4(Nh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sp extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class AS extends wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ht,u=ht,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new ke,CS=new ke;class xc{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:CS;Fh.multiplyMatrices(a,t[r]),Fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=kd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new AS(t,e,e,en,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sp),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Oh extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Uh=new ke,Bh=new ke,vo=[],RS=new ke,ar=new Xt;class LS extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,RS)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Uh),Bh.multiplyMatrices(n,Uh),ar.matrixWorld=Bh,ar.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){const l=vo[o];l.instanceId=r,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class rp extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kh=new U,zh=new U,Hh=new ke,el=new fc,yo=new Ks;class vc extends ot{constructor(e=new yn,t=new rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kh.fromBufferAttribute(t,s-1),zh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kh.distanceTo(zh);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Hh.copy(s).invert(),el.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,h=new U,f=new U,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=_,w=b-1;x<w;x+=d){const M=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,R),el.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=_,w=b-1;x<w;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),el.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Vh=new U,Gh=new U;class PS extends vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IS extends vc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class op extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new ke,Pl=new fc,bo=new Ks,Mo=new U;class DS extends ot{constructor(e=new yn,t=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Wh.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Mo.fromBufferAttribute(h,p),jh(Mo,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Mo.fromBufferAttribute(h,g),jh(Mo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jh(i,e,t,n,s,r,o){const a=Pl.distanceSqToPoint(i);if(a<t){const l=new U;Pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class yc extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qi extends yc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ei(i,e,t){return ap(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function So(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function NS(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function lp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Gr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class FS extends Gr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vs:r=e,a=2*t-n;break;case ko:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:o=e,l=2*n-t;break;case ko:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),m=g*g,p=m*g,_=-f*p+2*f*m-f*g,b=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*m+.5*g,w=d*p-d*m;for(let M=0;M!==a;++M)r[M]=_*o[u+M]+b*o[c+M]+x*o[l+M]+w*o[h+M];return r}}class cp extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class OS extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new OS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ei(n,r,o),this.values=ei(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ap(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ei(this.times),t=ei(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ei(e,0,o),this.values=ei(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ei(this.times,0),t=ei(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ks;class Ys extends Rn{}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Ir;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class up extends Rn{}up.prototype.ValueTypeName="color";class Or extends Rn{}Or.prototype.ValueTypeName="number";class US extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gi extends Rn{InterpolantFactoryMethodLinear(e){return new US(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=ks;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends Rn{}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Ir;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Rn{}Ur.prototype.ValueTypeName="vector";class Il{constructor(e,t=-1,n,s=uc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kS(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=NS(l);l=qh(l,1,u),c=qh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],_=[];lp(d,p,_,g),p.length!==0&&m.push(new h(f,p,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let b=0;b!==f[g].morphTargets.length;++b){const x=f[g];p.push(x.time),_.push(x.morphTarget===m?1:0)}s.push(new Or(".morphTargetInfluence["+m+"]",p,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ur,d+".position",f,"pos",s),n(Gi,d+".quaternion",f,"rot",s),n(Ur,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function BS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return up;case"quaternion":return Gi;case"bool":case"boolean":return Ys;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=BS(i.type);if(i.times===void 0){const t=[],n=[];lp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zS{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const HS=new zS;class Wr{constructor(e){this.manager=e!==void 0?e:HS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Bn={};class VS extends Error{constructor(e,t){super(e),this.response=t}}class hp extends Wr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:s});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){b();function b(){h.read().then(({done:x,value:w})=>{if(x)_.close();else{m+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,L=u.length;R<L;R++){const v=u[R];v.onProgress&&v.onProgress(M)}_.enqueue(w),b()}})}}});return new Response(p)}else throw new VS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Hs.add(e,c);const u=Bn[e];delete Bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GS extends Wr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fr("img");function l(){u(),Hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class WS extends Wr{constructor(e){super(e)}load(e,t,n,s){const r=new wt,o=new GS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class aa extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tl=new ke,Xh=new U,Kh=new U;class bc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jS extends bc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qS extends aa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $h=new ke,lr=new U,nl=new U;class XS extends bc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),s.makeTranslation(-lr.x,-lr.y,-lr.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}}class KS extends aa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new XS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $S extends bc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YS extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZS extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ki{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JS extends Wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Hs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class fp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return(typeof performance>"u"?Date:performance).now()}class QS{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){gn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;gn.multiplyQuaternionsFlat(e,o,e,t,e,n),gn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Mc="\\[\\]\\.:\\/",ew=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",tw="[^"+Mc.replace("\\.","")+"]",nw=/((?:WC+[\/:])*)/.source.replace("WC",Sc),iw=/(WCOD+)?/.source.replace("WCOD",tw),sw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),rw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),ow=new RegExp("^"+nw+iw+sw+rw+"$"),aw=["material","materials","bones","map"];class lw{constructor(e,t,n){const s=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ew,"")}static parseTrackName(e){const t=ow.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);aw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=lw;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cw{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:xs,endingEnd:xs};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ax:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case uc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===ox;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Fd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=vs,s.endingEnd=vs):(e?s.endingStart=this.zeroSlopeAtStart?vs:xs:s.endingStart=ko,t?s.endingEnd=this.zeroSlopeAtEnd?vs:xs:s.endingEnd=ko)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const uw=new Float32Array(1);class hw extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new QS(Ze.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new cp(new Float32Array(2),new Float32Array(2),1,uw),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Il.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=uc),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new cw(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Il.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);const dt=9007199254740992,cr=dt-1,Ho=-1>>>0,sn=Ho+1,Vo=sn/2,jr=1<<21,Wi=jr-1;function wc(i){return i.next()|0}function ni(i,e){return e===0?i:t=>i(t)+e}function Dl(i){const e=i.next()|0,t=i.next()>>>0;return(e&Wi)*sn+t+(e&jr?-dt:0)}function dp(i){for(;;){const e=i.next()|0;if(e&4194304){if((e&8388607)===4194304&&!(i.next()|0))return dt}else{const t=i.next()>>>0;return(e&Wi)*sn+t+(e&jr?-dt:0)}}}function pp(i){return i.next()>>>0}function la(i){const e=i.next()&Wi,t=i.next()>>>0;return e*sn+t}function Tc(i){for(;;){const e=i.next()|0;if(e&jr){if(!(e&Wi)&&!(i.next()|0))return dt}else{const t=i.next()>>>0;return(e&Wi)*sn+t}}}function mp(i){return(i+1&i)===0}function fw(i){return e=>e.next()&i}function dw(i){const e=i+1,t=e*Math.floor(sn/e);return n=>{let s=0;do s=n.next()>>>0;while(s>=t);return s%e}}function pw(i){return mp(i)?fw(i):dw(i)}function mw(i){return(i|0)===0}function gw(i){return e=>{const t=e.next()&i,n=e.next()>>>0;return t*sn+n}}function _w(i){const e=i*Math.floor(dt/i);return t=>{let n=0;do{const s=t.next()&Wi,r=t.next()>>>0;n=s*sn+r}while(n>=e);return n%i}}function xw(i){const e=i+1;if(mw(e)){const t=(e/sn|0)-1;if(mp(t))return gw(t)}return _w(e)}function Zh(i,e){return t=>{let n=0;do{const s=t.next()|0,r=t.next()>>>0;n=(s&Wi)*sn+r+(s&jr?-dt:0)}while(n<i||n>e);return n}}function Xi(i,e){if(i=Math.floor(i),e=Math.floor(e),i<-dt||!isFinite(i))throw new RangeError(`Expected min to be at least ${-dt}`);if(e>dt||!isFinite(e))throw new RangeError(`Expected max to be at most ${dt}`);const t=e-i;return t<=0||!isFinite(t)?()=>i:t===Ho?i===0?pp:ni(wc,i+Vo):t<Ho?ni(pw(t),i):t===cr?ni(la,i):t<cr?ni(xw(t),i):e-1-i===cr?ni(Tc,i):i===-dt&&e===dt?dp:i===-dt&&e===cr?Dl:i===-cr&&e===dt?ni(Dl,1):e===dt?ni(Zh(i-1,e-1),1):Zh(i,e)}function vw(i){return(i.next()&1)===1}function Nl(i,e){return t=>i(t)<e}function yw(i){if(i<=0)return()=>!1;if(i>=1)return()=>!0;{const e=i*sn;return e%1===0?Nl(wc,e-Vo|0):Nl(la,Math.round(i*dt))}}function bw(i,e){return e==null?i==null?vw:yw(i):i<=0?()=>!1:i>=e?()=>!0:Nl(Xi(0,e-1),i)}function Mw(i,e){const t=Xi(+i,+e);return n=>new Date(t(n))}function gp(i){return Xi(1,i)}function Sw(i,e){const t=gp(i);return n=>{const s=[];for(let r=0;r<e;++r)s.push(t(n));return s}}const ww="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";function Ec(i=ww){const e=i.length;if(!e)throw new Error("Expected pool not to be an empty string");const t=Xi(0,e-1);return(n,s)=>{let r="";for(let o=0;o<s;++o){const a=t(n);r+=i.charAt(a)}return r}}const _p="0123456789abcdef",Tw=Ec(_p),Ew=Ec(_p.toUpperCase());function Aw(i){return i?Ew:Tw}function Jh(i,e){return i<0?Math.max(i+e,0):Math.min(i,e)}function Qh(i){const e=+i;return e<0?Math.ceil(e):Math.floor(e)}function Cw(i,e,t,n){const s=e.length;if(s===0)throw new RangeError("Cannot pick from an empty array");const r=t==null?0:Jh(Qh(t),s),o=n===void 0?s:Jh(Qh(n),s);if(r>=o)throw new RangeError(`Cannot pick between bounds ${r} and ${o}`);const a=Xi(r,o-1);return e[a(i)]}function Rw(i,e){return e===1?i:e===0?()=>0:t=>i(t)*e}function xp(i){return la(i)/dt}function vp(i){return Tc(i)/dt}function Lw(i,e,t=!1){if(isFinite(i)){if(!isFinite(e))throw new RangeError("Expected max to be a finite number")}else throw new RangeError("Expected min to be a finite number");return ni(Rw(t?vp:xp,e-i),i)}const Pw=Array.prototype.slice;function Fl(i,e,t=0){const n=e.length;if(n)for(let s=n-1>>>0;s>t;--s){const o=Xi(0,s)(i);if(s!==o){const a=e[s];e[s]=e[o],e[o]=a}}return e}function Iw(i,e,t){if(t<0||t>e.length||!isFinite(t))throw new RangeError("Expected sampleSize to be within 0 and the length of the population");if(t===0)return[];const n=Pw.call(e),s=n.length;if(s===t)return Fl(i,n,0);const r=s-t;return Fl(i,n,r-1).slice(r)}const Dw=(()=>{try{if("x".repeat(3)==="xxx")return(i,e)=>i.repeat(e)}catch{}return(i,e)=>{let t="";for(;e>0;)e&1&&(t+=i),e>>=1,i+=i;return t}})();function hs(i,e){return Dw("0",e-i.length)+i}function Nw(i){const e=i.next()>>>0,t=i.next()|0,n=i.next()|0,s=i.next()>>>0;return hs(e.toString(16),8)+"-"+hs((t&65535).toString(16),4)+"-"+hs((t>>4&4095|16384).toString(16),4)+"-"+hs((n&16383|32768).toString(16),4)+"-"+hs((n>>4&65535).toString(16),4)+hs(s.toString(16),8)}const Fw={next(){return Math.random()*sn|0}};class Ow{constructor(e=Fw){this.engine=e}int32(){return wc(this.engine)}uint32(){return pp(this.engine)}uint53(){return la(this.engine)}uint53Full(){return Tc(this.engine)}int53(){return Dl(this.engine)}int53Full(){return dp(this.engine)}integer(e,t){return Xi(e,t)(this.engine)}realZeroToOneInclusive(){return vp(this.engine)}realZeroToOneExclusive(){return xp(this.engine)}real(e,t,n=!1){return Lw(e,t,n)(this.engine)}bool(e,t){return bw(e,t)(this.engine)}pick(e,t,n){return Cw(this.engine,e,t,n)}shuffle(e){return Fl(this.engine,e)}sample(e,t){return Iw(this.engine,e,t)}die(e){return gp(e)(this.engine)}dice(e,t){return Sw(e,t)(this.engine)}uuid4(){return Nw(this.engine)}string(e,t){return Ec(t)(this.engine,e)}hex(e,t){return Aw(t)(this.engine,e)}date(e,t){return Mw(e,t)(this.engine)}}(()=>{try{const i=new ArrayBuffer(4),e=new Int32Array(i);if(e[0]=Vo,e[0]===-Vo)return Int32Array}catch{}return Array})();(()=>{try{if(Math.imul(Ho,5)===-5)return Math.imul}catch{}const i=65535;return(e,t)=>{const n=e>>>16&i,s=e&i,r=t>>>16&i,o=t&i;return s*o+(n*o+s*r<<16>>>0)|0}})();var Go=(i=>(i.CENTER="center",i.LEFT="left",i.RIGHT="right",i))(Go||{}),Br=(i=>(i.YOU="You",i.FOE="Foe",i))(Br||{}),kr=(i=>(i.ORANGE="Orange",i.BLACK="Black",i))(kr||{}),Wo=(i=>(i[i.FULL_ROUND=5]="FULL_ROUND",i[i.QUICK_ROUND=3]="QUICK_ROUND",i))(Wo||{}),ci=(i=>(i[i.LOSE=-1]="LOSE",i[i.TIE=0]="TIE",i[i.WIN=1]="WIN",i))(ci||{}),ca=(i=>(i.ROCK="rock",i.PAPER="paper",i.SCISSOR="scissor",i))(ca||{}),Vs=(i=>(i.duel="duel",i.hit="hit",i.miss="miss",i.win="win",i.lose="lose",i))(Vs||{});const Ac=["rock","paper","scissor"],il={rock:{paper:-1,scissor:1,rock:0},paper:{paper:0,scissor:-1,rock:1},scissor:{paper:1,scissor:0,rock:-1}},Uw={focus:2.6,aperture:.026,maxblur:.012},Bw=600,ps=({}.prod,"/pussycatsduels"),yp=`${ps}/assets/models/`,kw=".glb",ur={duel:`${ps}/sounds/duel.mp3`,hit:`${ps}/sounds/hit.mp3`,miss:`${ps}/sounds/miss.mp3`,win:`${ps}/sounds/win.mp3`,lose:`${ps}/sounds/lose.mp3`},zw=()=>new Ow().integer(0,2),Hw=()=>Ac[zw()],Vw=(i,e)=>{const t=Ac.map(n=>`${n}${e}`);return Object.keys(i).filter(n=>t.includes(n)).reduce((n,s)=>Object.assign(n,{[s]:i[s]}),{})},Gw=i=>{if(i===ci.TIE)return;const e=i===ci.WIN?"totalWins":"totallosses",t=Number(localStorage.getItem(e))+1;localStorage.setItem(e,String(t))},Ww=()=>{const i=Number(localStorage.getItem("totalWins"))||0,e=Number(localStorage.getItem("totallosses"))||0;return{wins:i,losses:e}},jw=(i,e)=>{var t;return(t=il==null?void 0:il[i])==null?void 0:t[e]},qw=(i,e,t)=>{const n=Math.ceil(t/2),s=Math.max(i,e);if(t%2){if(s>=n)return i===s}else if(s>n)return i===s},Cc=f_("game",()=>{const i=Dt(0),e=Dt(0),t=Dt(!1),n=Dt(!0),s=Dt(!1),r=Dt(),o=Dt(Wo.FULL_ROUND);return{wins:i,losses:e,playing:t,menu:n,results:s,toggleResults:h=>{const f=h===!0||h===!1;s.value=f?h:!s.value},matchResult:r,matchType:o,setMatch:h=>{h===ci.WIN&&(i.value+=1),h===ci.LOSE&&(e.value+=1);const f=qw(i.value,e.value,o.value);(f===!0||f===!1)&&(t.value=!1,r.value=f?ci.WIN:ci.LOSE,Gw(r.value))},startPlay:h=>{h&&(o.value=h),setTimeout(()=>{n.value=!1},2e3),t.value=!0},restart:()=>{s.value=!1,n.value=!0,i.value=0,e.value=0,r.value=void 0,t.value=!1}}}),bp=i=>(Vf("data-v-a6417a54"),i=i(),Gf(),i),Xw={class:"total"},Kw=bp(()=>Je("h3",null,"Wins:",-1)),$w={class:"total"},Yw=bp(()=>Je("h3",null,"Losses:",-1)),Zw=vn({__name:"WinLosses",setup(i){const e=Cc(),{wins:t,losses:n}=Ww(),s=Dt(!1),r=()=>{s.value=!0,setTimeout(()=>{e.toggleResults(!1)},500)};return(o,a)=>(bt(),En("div",{class:"wrapper",onClick:r},[Je("div",{class:fn(["results animate__animated animate__fadeInUp",{animate__fadeOutUp:s.value}])},[Je("div",Xw,[Kw,Je("strong",null,Po(ze(t)),1)]),Je("div",$w,[Yw,Je("strong",null,Po(ze(n)),1)])],2)]))}});const Ki=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Jw=Ki(Zw,[["__scopeId","data-v-a6417a54"]]),Qw={class:"wins"},eT=vn({__name:"Wins",props:{type:null,amount:{default:0},align:null},setup(i){const e=i,{RIGHT:t,LEFT:n}=Go;return(s,r)=>(bt(),En("div",{class:fn(["wrapper",{right:e.align===ze(t),left:e.align===ze(n)}])},[Je("h4",{class:fn(["title animate__animated",{you:e.type===ze(Br).YOU,foe:e.type===ze(Br).FOE,animate__slideInLeft:e.align===ze(n),animate__slideInRight:e.align===ze(t)}])},Po(e.type),3),Je("ul",Qw,[(bt(!0),En(Jt,null,rg(new Array(e.amount),(o,a)=>(bt(),En("li",{key:`${i.type}${a}`,style:jo({right:`${a*64}px`}),class:"star animate__animated animate__zoomIn animate__faster"},Po(o),5))),128))])],2))}});const ef=Ki(eT,[["__scopeId","data-v-206e54ce"]]),ms={},tT=()=>{ms.duel=new Audio(ur.duel),ms.hit=new Audio(ur.hit),ms.miss=new Audio(ur.miss),ms.win=new Audio(ur.win),ms.lose=new Audio(ur.lose)},Rc=i=>{i&&ms[i].play()},nT={class:"wrapper"},iT={class:"duel-wrapper"},sT=vn({__name:"Duel",setup(i){Rc(Vs.duel);const e=Dt(!0),t=Dt(!0);return setTimeout(()=>{t.value=!1},2e3),setTimeout(()=>{e.value=!1},2e3),(n,s)=>(bt(),En("div",nT,[Je("div",iT,[Je("div",{class:fn(["duel animate__animated animate__faster",{animate__fadeInDown:e.value,animate__fadeOutDown:!e.value}])},null,2)]),Je("div",{class:fn(["slide left animate__animated animate__faster",{animate__slideInLeft:t.value,animate__slideOutLeft:!t.value}])},null,2),Je("div",{class:fn(["slide right animate__animated animate__faster",{animate__slideInRight:t.value,animate__slideOutRight:!t.value}])},null,2)]))}});const rT=Ki(sT,[["__scopeId","data-v-0d2fdd16"]]),oT=i=>(Vf("data-v-b9bc1bb3"),i=i(),Gf(),i),aT=oT(()=>Je("h1",{class:"title animate__animated animate__fadeInDown"},"pussycatsduels",-1)),lT={class:"nav-ui"},cT={class:"nav-options animate__animated animate__fadeInUp"},uT={class:"nav-item"},hT={class:"nav-item"},fT={class:"nav-item"},dT=vn({__name:"Menu",props:{play:{type:Function,default:()=>{}}},setup(i){const e=i,t=Cc(),n=Dt(!0),s=Dt(!1),r=o=>{n.value=!1,s.value=!0,setTimeout(()=>{e.play(),t.startPlay(o)},500),setTimeout(()=>{s.value=!1},2800)};return(o,a)=>(bt(),En(Jt,null,[s.value?(bt(),Oi(rT,{key:0})):pr("",!0),Je("div",{class:fn(["wrapper animate__animated",{animate__fadeOut:!n.value}])},[aT,Je("nav",lT,[Je("ul",cT,[Je("li",uT,[Je("button",{onClick:a[0]||(a[0]=l=>r(ze(Wo).FULL_ROUND)),type:"button"},"Play best of 5")]),Je("li",hT,[Je("button",{onClick:a[1]||(a[1]=l=>r(ze(Wo).QUICK_ROUND)),type:"button"},"Play best of 3")]),Je("li",fT,[Je("button",{onClick:a[2]||(a[2]=(...l)=>ze(t).toggleResults&&ze(t).toggleResults(...l)),type:"button"},"Win / Losses")])])])],2)],64))}});const pT=Ki(dT,[["__scopeId","data-v-b9bc1bb3"]]),mT={class:"wrapper"},gT=vn({__name:"Results",props:{result:{default:void 0},restart:{type:[Function,null],default:()=>{}}},setup(i){const e=i,{WIN:t,LOSE:n}=ci;return Rc(e.result===t?Vs.win:Vs.lose),(s,r)=>(bt(),En("div",mT,[Je("div",{onClick:r[0]||(r[0]=(...o)=>i.restart&&i.restart(...o)),class:fn(["copy animate__animated animate__fadeIn",{win:i.result===ze(t),lose:i.result===ze(n)}])},null,2)]))}});const _T=Ki(gT,[["__scopeId","data-v-a39dece5"]]),xT={class:"wrapper animate__animated animate__fadeIn animate__delay-2s"},vT={class:"container"},yT=vn({__name:"ChoiceButtons",props:{play:{type:Function,default:()=>{}}},setup(i){const{PAPER:e,ROCK:t,SCISSOR:n}=ca;return(s,r)=>(bt(),En("div",xT,[Je("div",vT,[Je("button",{onClick:r[0]||(r[0]=()=>i.play(ze(t))),class:"btn rock",type:"button"},"rock"),Je("button",{onClick:r[1]||(r[1]=()=>i.play(ze(e))),class:"btn paper",type:"button"},"paper"),Je("button",{onClick:r[2]||(r[2]=()=>i.play(ze(n))),class:"btn scissor",type:"button"},"scissor")])]))}});const bT=Ki(yT,[["__scopeId","data-v-7accc817"]]);class MT extends Wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new UT(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ki.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(ki.decodeText(new Uint8Array(e,0,4))===Mp){try{o[qe.KHR_BINARY_GLTF]=new BT(e)}catch(u){s&&s(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(ki.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ZT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new TT;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new kT(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new zT;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new HT;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function ST(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wT{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new YS(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new KS(u),c.distance=h;break;case"spot":c=new qS(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class TT{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Di}extendParams(e,t,n){const s=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ye))}return Promise.all(s)}}class ET{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class AT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}}class CT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class RT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class LT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class PT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe(a[0],a[1],a[2]),Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class DT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class FT{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OT{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class UT{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Zt.TRIANGLES&&c.mode!==Zt.TRIANGLE_STRIP&&c.mode!==Zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const m=new ke,p=new U,_=new gn,b=new U(1,1,1),x=new LS(g.geometry,g.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,w),l.SCALE&&b.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,m.compose(p,_,b));for(const w in l)w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);ot.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Mp="glTF",hr=12,tf={JSON:1313821514,BIN:5130562};class BT{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr);if(this.header={magic:ki.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-hr,s=new DataView(e,hr);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===tf.JSON){const l=new Uint8Array(e,hr+r,o);this.content=ki.decodeText(l)}else if(a===tf.BIN){const l=hr+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ol[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ol[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=As[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class zT{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HT{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Sp extends Gr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,m=g-c,p=-2*d+3*f,_=d-f,b=1-p,x=_-f+h;for(let w=0;w!==a;w++){const M=o[m+w+a],R=o[m+w+l]*u,L=o[g+w+a],v=o[g+w]*u;r[w]=b*M+x*R+p*L+_*v}return r}}const VT=new gn;class GT extends Sp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return VT.fromArray(r).normalize().toArray(r),r}}const Zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nf={9728:ht,9729:Bt,9984:El,9985:Dd,9986:Co,9987:zi},sf={33071:Qt,33648:Bo,10497:Us},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ol={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WT={CUBICSPLINE:void 0,LINEAR:ks,STEP:Ir},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),i.DefaultMaterial}function fr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function XT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KT(i){const e=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+rf(e.attributes):t=i.indices+":"+rf(i.attributes)+":"+i.mode,t}function rf(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ul(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $T(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const YT=new ke;class ZT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ST,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new WS(this.options.manager):this.textureLoader=new JS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};fr(r,a,s),oi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ki.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=sl[s.type],a=As[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=sl[s.type],c=As[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,p;if(d&&d!==h){const _=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let x=t.cache.get(b);x||(m=new c(a,_*d,s.count*d/u),x=new wS(m,d/u),t.cache.add(b,x)),p=new _c(x,l,f%d/u,g)}else a===null?m=new c(s.count*l):m=new c(a,f,s.count*l),p=new Ft(m,l,g);if(s.sparse!==void 0){const _=sl.SCALAR,b=As[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,M=new b(o[1],x,s.sparse.count*_),R=new c(o[2],w,s.sparse.count*l);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized));for(let L=0,v=M.length;L<v;L++){const C=M[L];if(p.setX(C,R[L*l]),l>=2&&p.setY(C,R[L*l+1]),l>=3&&p.setZ(C,R[L*l+2]),l>=4&&p.setW(C,R[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=nf[f.magFilter]||Bt,u.minFilter=nf[f.minFilter]||zi,u.wrapS=sf[f.wrapS]||Us,u.wrapT=sf[f.wrapT]||Us,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new wt(m);p.needsUpdate=!0,f(p)}),t.load(ki.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||$T(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new op,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rp,An.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return yc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ye)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ia);const u=r.alphaMode||rl.OPAQUE;if(u===rl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===rl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Di&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==Di&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Di&&(a.emissive=new Fe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Di&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&fr(s,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return of(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=KT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=of(new yn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?jT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const m=u[d],p=o[d];let _;const b=c[d];if(p.mode===Zt.TRIANGLES||p.mode===Zt.TRIANGLE_STRIP||p.mode===Zt.TRIANGLE_FAN||p.mode===void 0)_=r.isSkinnedMesh===!0?new ES(m,b):new Xt(m,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Zt.TRIANGLE_STRIP?_.geometry=af(_.geometry,lx):p.mode===Zt.TRIANGLE_FAN&&(_.geometry=af(_.geometry,Od));else if(p.mode===Zt.LINES)_=new PS(m,b);else if(p.mode===Zt.LINE_STRIP)_=new vc(m,b);else if(p.mode===Zt.LINE_LOOP)_=new IS(m,b);else if(p.mode===Zt.POINTS)_=new DS(m,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&XT(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),oi(_,r),p.extensions&&fr(s,_,p),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new Ni;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Tx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ra(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this.getDependency("node",t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xc(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(f),l.push(d)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],m=[];for(let _=0,b=u.length;_<b;_++){const x=u[_],w=h[_],M=f[_],R=d[_],L=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(ti[L.path]){case ti.weights:v=Or;break;case ti.rotation:v=Gi;break;case ti.position:case ti.scale:default:v=Ur;break}const C=x.name?x.name:x.uuid,O=R.interpolation!==void 0?WT[R.interpolation]:ks,W=[];ti[L.path]===ti.weights?x.traverse(function(B){B.morphTargetInfluences&&W.push(B.name?B.name:B.uuid)}):W.push(C);let ae=M.array;if(M.normalized){const B=Ul(ae.constructor),N=new Float32Array(ae.length);for(let G=0,se=ae.length;G<se;G++)N[G]=ae[G]*B;ae=N}for(let B=0,N=W.length;B<N;B++){const G=new v(W[B]+"."+ti[L.path],w.array,ae,O);R.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(J){const V=this instanceof Gi?GT:Sp;return new V(this.times,this.values,this.getValueSize()/3,J)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(G)}}const p=n.name?n.name:"animation_"+e;return new Il(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(f){return s._getNodeRef(s.cameraCache,r.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});const c=[],u=r.children||[];for(let f=0,d=u.length;f<d;f++)c.push(s.getDependency("node",u[f]));const h=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(c),h])}().then(function(a){const l=a[0],c=a[1],u=a[2];let h;if(r.isBone===!0?h=new sp:l.length>1?h=new Ni:l.length===1?h=l[0]:h=new ot,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=o),oi(h,r),r.extensions&&fr(n,h,r),r.matrix!==void 0){const f=new ke;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,YT)});for(let f=0,d=c.length;f<d;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ni;n.name&&(r.name=s.createUniqueName(n.name)),oi(r,n),n.extensions&&fr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof An||f instanceof wt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}}function JT(i,e,t){const n=e.attributes,s=new Xs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Ul(As[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=Ul(As[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ks;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function of(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Ol[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return oi(i,e),JT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qT(i,e.targets,t):i})}function af(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Od)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}const QT=new MT,eE=async i=>new Promise((e,t)=>{QT.load(i,n=>e(n),void 0,n=>t(n))}),lf=i=>Ac.map(e=>({name:`${e}${i}`,path:`${yp}${e}${i}${kw}`})),tE=()=>{const i=lf(kr.BLACK),e=lf(kr.ORANGE);return[{name:"mainScene",path:`${yp}Scene.glb`},...i,...e]},nE=async i=>{const e=tE(),t=e.map(s=>eE(s.path)),n=await Promise.all(t);return n[0].scene.traverse(s=>{s.isLight&&(s.castShadow=!0),s.isMesh&&(s.receiveShadow=!0,s.material.roughness=s.name==="Floor"?.4:1,s.name==="Sky"&&(s.material.color.r=2,s.material.color.g=2,s.material.color.b=2))}),n.reduce((s,r,o)=>(i.add(r.scene),{...s,[`${e[o].name}`]:r}),{})},iE={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class qr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sE=new ra(-1,1,1,-1,0,1),Lc=new yn;Lc.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3));Lc.setAttribute("uv",new _n([0,2,0,0,2,0],2));class wp{constructor(e){this._mesh=new Xt(Lc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rE extends qr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dc.clone(e.uniforms),this.material=new Cn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class cf extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class oE extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class aE{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new He);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rE(iE),this.clock=new fp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cf!==void 0&&(o instanceof cf?n=!0:o instanceof oE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lE extends qr{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=s}}const cE={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class uE extends qr{constructor(e,t,n){super(),this.scene=e,this.camera=t;const s=n.focus!==void 0?n.focus:1,r=n.aspect!==void 0?n.aspect:t.aspect,o=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new qn(1,1,{minFilter:ht,magFilter:ht}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new np,this.materialDepth.depthPacking=Ud,this.materialDepth.blending=Vn;const l=cE,c=dc.clone(l.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=r,c.aperture.value=o,c.maxblur.value=a,c.nearClip.value=t.near,c.farClip.value=t.far,this.materialBokeh=new Cn({defines:Object.assign({},l.defines),uniforms:c,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=c,this.needsSwap=!1,this.fsQuad=new wp(this.materialBokeh),this._oldClearColor=new Fe}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const hE=()=>{const i=new ip({antialias:!0});return i.toneMapping=Pd,i.toneMappingExposure=2,i.shadowMap.enabled=!0,i.shadowMap.type=_s,i.setSize(window.innerWidth,window.innerHeight),i},fE=(i,e,t)=>{const n=new lE(i,e),s=new uE(i,e,Uw),r=new aE(t),o=new ZS(4210752,2);return i.add(o),r.addPass(n),r.addPass(s),{composer:r,bokeh:s}},dE=(i,e)=>{e.uniforms.maxblur.value=(Math.abs(Math.cos(i*.001))+.5)*.008};class Tp{constructor(e,t,n=!0,s=!0){rn(this,"mixer");rn(this,"anims");rn(this,"clock");this.mixer=new hw(e),this.clock=new fp,this.anims=t.map(r=>{const o=this.mixer.clipAction(r);return s&&o.play(),n||o.setLoop(Fd,1),o})}update(){this.mixer&&this.mixer.update(this.clock.getDelta())}}class uf{constructor(e){rn(this,"catType");rn(this,"anim");rn(this,"assets",{});rn(this,"playNow",!1);rn(this,"isPreparing",!1);rn(this,"choice");rn(this,"onFinish");this.catType=e}showChoice(e){const t=Object.keys(this.assets),n=`${e}${this.catType}`;t.forEach(s=>{this.assets[s].scene.visible=s===n})}hidePlayer(){this.showChoice()}init(e){this.assets=Vw(e,this.catType),this.hidePlayer();const t=this.assets[`rock${this.catType}`];this.anim=new Tp(t.scene,t.animations,!1,!1),this.anim.mixer.addEventListener("finished",()=>{var n;this.isPreparing&&!this.playNow&&(this.playNow=!0,this.isPreparing=!1,(n=this.anim)==null||n.anims[0].stop(),this.showChoice(this.choice),this.onFinish&&setTimeout(this.onFinish,Bw))})}play(e){var t;this.isPreparing||(this.playNow=!1,this.isPreparing=!0,this.choice=e,(t=this.anim)==null||t.anims[0].play(),this.showChoice(ca.ROCK))}update(){var e;(e=this.anim)==null||e.update()}reset(){this.choice=void 0,this.isPreparing=!1,this.playNow=!1,this.hidePlayer()}}const pE={key:1},mE=vn({__name:"Game",async setup(i){let e,t;const n=Cc(),{ROCK:s}=ca,r=new SS,o=([e,t]=Fg(()=>nE(r)),e=await e,t(),e);tT();const{mainScene:a}=o,l=new Tp(a.scene,a.animations),c=o.mainScene.cameras[0],u=new uf(kr.BLACK),h=new uf(kr.ORANGE),f=hE(),{composer:d,bokeh:g}=fE(r,c,f),m=w=>{l.update(),u.update(),h.update(),dE(w,g),d.render()},p=w=>{u.play(w),h.play(Hw())},_=()=>{const w=jw(u.choice,h.choice);let M=w>0?Vs.hit:Vs.miss;w||(M=void 0),Rc(M),n.setMatch(w)},b=()=>{u.showChoice(s),h.showChoice(s)},x=()=>{u.reset(),h.reset(),n.restart()};return u.init(o),h.init(o),u.onFinish=_,f.setAnimationLoop(m),document.body.appendChild(f.domElement),(w,M)=>(bt(),En(Jt,null,[ze(n).menu?(bt(),Oi(pT,{key:0,play:b})):pr("",!0),ze(n).playing?(bt(),En("div",pE,[Mt(ef,{align:ze(Go).LEFT,type:ze(Br).YOU,amount:ze(n).wins},null,8,["align","type","amount"]),Mt(ef,{align:ze(Go).RIGHT,type:ze(Br).FOE,amount:ze(n).losses},null,8,["align","type","amount"]),Mt(bT,{play:p})])):pr("",!0),ze(n).matchResult?(bt(),Oi(_T,{key:2,restart:x,result:ze(n).matchResult},null,8,["result"])):pr("",!0),ze(n).results?(bt(),Oi(Jw,{key:3})):pr("",!0)],64))}});const gE=Ki(mE,[["__scopeId","data-v-6a002ddc"]]),_E=vn({__name:"HomeView",setup(i){return(e,t)=>(bt(),Oi(km,null,{default:Wf(()=>[Mt(gE)]),_:1}))}}),xE=d0({history:L_("/pussycatsduels/"),routes:[{path:"/",name:"home",component:_E}]});const Pc=s_(m0);Pc.use(a_());Pc.use(xE);Pc.mount("#app");
