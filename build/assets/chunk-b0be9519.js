var je=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},H=function(e,t){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},H(e,t)};function Z(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");H(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function ke(e,t,n,r){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function c(p){try{a(r.next(p))}catch(g){u(g)}}function f(p){try{a(r.throw(p))}catch(g){u(g)}}function a(p){p.done?o(p.value):i(p.value).then(c,f)}a((r=r.apply(e,t||[])).next())})}function se(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(p){return f([a,p])}}function f(a){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(n=0)),n;)try{if(r=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(p){a=[6,p],i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function k(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o}function L(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function T(e){return this instanceof T?(this.v=e,this):new T(e)}function Ue(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(h){r[h]&&(i[h]=function(w){return new Promise(function(y,l){o.push([h,w,y,l])>1||c(h,w)})})}function c(h,w){try{f(r[h](w))}catch(y){g(o[0][3],y)}}function f(h){h.value instanceof T?Promise.resolve(h.value.v).then(a,p):g(o[0][2],h)}function a(h){c("next",h)}function p(h){c("throw",h)}function g(h,w){h(w),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Le(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof k=="function"?k(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(u){return new Promise(function(c,f){u=e[o](u),i(c,f,u.done,u.value)})}}function i(o,u,c,f){Promise.resolve(f).then(function(a){o({value:a,done:c})},u)}}function b(e){return typeof e=="function"}function Ce(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var q=Ce(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function oe(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var z=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=k(u),f=c.next();!f.done;f=c.next()){var a=f.value;a.remove(this)}}catch(l){t={error:l}}finally{try{f&&!f.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}else u.remove(this);var p=this.initialTeardown;if(b(p))try{p()}catch(l){o=l instanceof q?l.errors:[l]}var g=this._finalizers;if(g){this._finalizers=null;try{for(var h=k(g),w=h.next();!w.done;w=h.next()){var y=w.value;try{ie(y)}catch(l){o=o!=null?o:[],l instanceof q?o=L(L([],U(o)),U(l.errors)):o.push(l)}}}catch(l){r={error:l}}finally{try{w&&!w.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}if(o)throw new q(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ie(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&oe(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&oe(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();z.EMPTY;function fe(e){return e instanceof z||e&&"closed"in e&&b(e.remove)&&b(e.add)&&b(e.unsubscribe)}function ie(e){b(e)?e():e.unsubscribe()}var le={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},J={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=J.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,L([e,t],U(n))):setTimeout.apply(void 0,L([e,t],U(n)))},clearTimeout:function(e){var t=J.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function he(e){J.setTimeout(function(){throw e})}function ue(){}function $e(e){e()}var N=function(e){Z(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,fe(n)&&n.add(r)):r.destination=Ye,r}return t.create=function(n,r,i){return new Q(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(z),Re=Function.prototype.bind;function W(e,t){return Re.call(e,t)}var Fe=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){G(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){G(r)}else G(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){G(n)}},e}(),Q=function(e){Z(t,e);function t(n,r,i){var o=e.call(this)||this,u;if(b(n)||!n)u={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var c;o&&le.useDeprecatedNextContext?(c=Object.create(n),c.unsubscribe=function(){return o.unsubscribe()},u={next:n.next&&W(n.next,c),error:n.error&&W(n.error,c),complete:n.complete&&W(n.complete,c)}):u=n}return o.destination=new Fe(u),o}return t}(N);function G(e){he(e)}function Me(e){throw e}var Ye={closed:!0,next:ue,error:Me,complete:ue},ee=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function pe(e){return e}function Ge(e){return e.length===0?pe:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var A=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=De(t)?t:new Q(t,n,r);return $e(function(){var u=i,c=u.operator,f=u.source;o.add(c?c.call(o,f):f?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ce(n),new n(function(i,o){var u=new Q({next:function(c){try{t(c)}catch(f){o(f),u.unsubscribe()}},error:o,complete:i});r.subscribe(u)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ee]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Ge(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ce(t),new t(function(r,i){var o;n.subscribe(function(u){return o=u},function(u){return i(u)},function(){return r(o)})})},e.create=function(t){return new e(t)},e}();function ce(e){var t;return(t=e!=null?e:le.Promise)!==null&&t!==void 0?t:Promise}function Ke(e){return e&&b(e.next)&&b(e.error)&&b(e.complete)}function De(e){return e&&e instanceof N||Ke(e)&&fe(e)}function Ve(e){return b(e==null?void 0:e.lift)}function $(e){return function(t){if(Ve(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function C(e,t,n,r,i){return new qe(e,t,n,r,i)}var qe=function(e){Z(t,e);function t(n,r,i,o,u,c){var f=e.call(this,n)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=r?function(a){try{r(a)}catch(p){n.error(p)}}:e.prototype._next,f._error=o?function(a){try{o(a)}catch(p){n.error(p)}finally{this.unsubscribe()}}:e.prototype._error,f._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,f}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(N);function We(e){return e&&b(e.schedule)}function Be(e){return e[e.length-1]}function He(e){return We(Be(e))?e.pop():void 0}var ye=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function de(e){return b(e==null?void 0:e.then)}function ve(e){return b(e[ee])}function me(e){return Symbol.asyncIterator&&b(e==null?void 0:e[Symbol.asyncIterator])}function be(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Je(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ge=Je();function we(e){return b(e==null?void 0:e[ge])}function Se(e){return Ue(this,arguments,function(){var n,r,i,o;return se(this,function(u){switch(u.label){case 0:n=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,T(n.read())];case 3:return r=u.sent(),i=r.value,o=r.done,o?[4,T(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,T(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function xe(e){return b(e==null?void 0:e.getReader)}function R(e){if(e instanceof A)return e;if(e!=null){if(ve(e))return Qe(e);if(ye(e))return Xe(e);if(de(e))return Ze(e);if(me(e))return Pe(e);if(we(e))return ze(e);if(xe(e))return Ne(e)}throw be(e)}function Qe(e){return new A(function(t){var n=e[ee]();if(b(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Xe(e){return new A(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Ze(e){return new A(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,he)})}function ze(e){return new A(function(t){var n,r;try{for(var i=k(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(t.next(u),t.closed)return}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function Pe(e){return new A(function(t){et(e,t).catch(function(n){return t.error(n)})})}function Ne(e){return Pe(Se(e))}function et(e,t){var n,r,i,o;return ke(this,void 0,void 0,function(){var u,c;return se(this,function(f){switch(f.label){case 0:f.trys.push([0,5,6,11]),n=Le(e),f.label=1;case 1:return[4,n.next()];case 2:if(r=f.sent(),!!r.done)return[3,4];if(u=r.value,t.next(u),t.closed)return[2];f.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=f.sent(),i={error:c},[3,11];case 6:return f.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:f.sent(),f.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function E(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Oe(e,t){return t===void 0&&(t=0),$(function(n,r){n.subscribe(C(r,function(i){return E(r,e,function(){return r.next(i)},t)},function(){return E(r,e,function(){return r.complete()},t)},function(i){return E(r,e,function(){return r.error(i)},t)}))})}function Ae(e,t){return t===void 0&&(t=0),$(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function tt(e,t){return R(e).pipe(Ae(t),Oe(t))}function nt(e,t){return R(e).pipe(Ae(t),Oe(t))}function rt(e,t){return new A(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ot(e,t){return new A(function(n){var r;return E(n,t,function(){r=e[ge](),E(n,t,function(){var i,o,u;try{i=r.next(),o=i.value,u=i.done}catch(c){n.error(c);return}u?n.complete():n.next(o)},0,!0)}),function(){return b(r==null?void 0:r.return)&&r.return()}})}function Ee(e,t){if(!e)throw new Error("Iterable cannot be null");return new A(function(n){E(n,t,function(){var r=e[Symbol.asyncIterator]();E(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function it(e,t){return Ee(Se(e),t)}function ut(e,t){if(e!=null){if(ve(e))return tt(e,t);if(ye(e))return rt(e,t);if(de(e))return nt(e,t);if(me(e))return Ee(e,t);if(we(e))return ot(e,t);if(xe(e))return it(e,t)}throw be(e)}function Ie(e,t){return t?ut(e,t):R(e)}function te(e,t){return $(function(n,r){var i=0;n.subscribe(C(r,function(o){r.next(e.call(t,o,i++))}))})}var ct=Array.isArray;function at(e,t){return ct(t)?e.apply(void 0,L([],U(t))):e(t)}function st(e){return te(function(t){return at(e,t)})}function ft(e,t,n,r,i,o,u,c){var f=[],a=0,p=0,g=!1,h=function(){g&&!f.length&&!a&&t.complete()},w=function(l){return a<r?y(l):f.push(l)},y=function(l){o&&t.next(l),a++;var S=!1;R(n(l,p++)).subscribe(C(t,function(v){i==null||i(v),o?w(v):t.next(v)},function(){S=!0},void 0,function(){if(S)try{a--;for(var v=function(){var P=f.shift();u?E(t,u,function(){return y(P)}):y(P)};f.length&&a<r;)v();h()}catch(P){t.error(P)}}))};return e.subscribe(C(t,w,function(){g=!0,h()})),function(){c==null||c()}}function ne(e,t,n){return n===void 0&&(n=1/0),b(t)?ne(function(r,i){return te(function(o,u){return t(r,o,i,u)})(R(e(r,i)))},n):(typeof t=="number"&&(n=t),$(function(r,i){return ft(r,i,e,n)}))}function lt(e){return e===void 0&&(e=1/0),ne(pe,e)}function ht(){return lt(1)}function pt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ht()(Ie(e,He(e)))}function Te(e,t,n){return n?Te(e,t).pipe(st(n)):new A(function(r){var i=function(){for(var u=[],c=0;c<arguments.length;c++)u[c]=arguments[c];return r.next(u.length===1?u[0]:u)},o=e(i);return b(t)?function(){return t(i,o)}:void 0})}function ae(e,t){return $(function(n,r){var i=0;n.subscribe(C(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}var _e={exports:{}};/*!
 * chrome-promise
 * https://github.com/tfoxy/chrome-promise
 *
 * Copyright 2015 Tomás Fox
 * Released under the MIT license
 */(function(e,t){(function(n,r){e.exports=r(this||n)})(typeof self!="undefined"?self:je,function(n){var r=Array.prototype.slice,i=Object.prototype.hasOwnProperty;return o.default=o,o;function o(u){u=u||{};var c=u.chrome||n.chrome,f=u.Promise||n.Promise,a=c.runtime,p=this;if(!p)throw new Error("ChromePromise must be called with new keyword");h(c,p),c.permissions&&c.permissions.onAdded.addListener(w);function g(y,l){return function(){var S=r.call(arguments);return new f(function(v,P){S.push(_),y.apply(l,S);function _(){var M=a.lastError,Y=r.call(arguments);if(M)P(M);else switch(Y.length){case 0:v();break;case 1:v(Y[0]);break;default:v(Y)}}})}}function h(y,l){for(var S in y)if(i.call(y,S)){var v;try{v=y[S]}catch{continue}var P=typeof v;P==="object"&&!(v instanceof o)?(l[S]={},h(v,l[S])):P==="function"?l[S]=g(v,y):l[S]=v}}function w(y){if(y.permissions&&y.permissions.length){var l={};y.permissions.forEach(function(S){var v=/^[^.]+/.exec(S);v in c&&(l[v]=c[v])}),h(l,p)}}}})})(_e);var yt=_e.exports,X=new yt;X.default=X;var B=X;const dt=e=>{if(Array.isArray(e))return"Unexpected setter result value: Array";switch(typeof e){case"object":case"undefined":return;default:return`Unexpected setter return value: ${typeof e}`}};function vt(e){return e!=null}const mt=e=>{switch(e){case"local":return B.storage.local;case"sync":return B.storage.sync;case"managed":return B.storage.managed;default:throw new TypeError('area must be "local" | "sync" | "managed"')}};function K(e,t){t||(t="local");const r=mt(t),i=`extend-chrome/storage__${e}`,o=`${i}_keys`,u=s=>`${i}--${s}`,c=s=>s.replace(`${i}--`,""),f=s=>d=>Object.keys(d).reduce((m,x)=>Object.assign(Object.assign({},m),{[s(x)]:d[x]}),{}),a=s=>s.map(u),p=f(u),g=f(c),h=async()=>(await r.get(o))[o]||[],w=s=>r.set({[o]:s});let y=null;async function l(s){if(y)return y;if(typeof s=="undefined"||s===null){const d=await h();if(d.length){const m=a(d),x=await r.get(m);return g(x)}else return{}}else if(typeof s=="string"){const d=u(s),m=await r.get(d);return g(m)}else if(Array.isArray(s)){const d=a(s),m=await r.get(d);return g(m)}else{const d=p(s),m=await r.get(d);return g(m)}}function S(s){if(s==null)return l();if(typeof s=="string"||typeof s=="object")return l(s);if(typeof s=="function")return l().then(s);throw new TypeError(`Unexpected argument type: ${typeof s}`)}const v=s=>s;let P=v;function _(s){return new Promise((d,m)=>{let x;typeof s=="function"?x=O=>{const I=s(O),j=dt(I);return j?(m(new TypeError(j)),O):Object.assign(Object.assign({},O),I)}:x=O=>Object.assign(Object.assign({},O),s);const V=P;P=O=>Object.assign(Object.assign({},O),x(V(O))),y===null&&(y=l().then(O=>{try{const I=P(O),j=p(I);return j[o]=Object.keys(I),r.set(j).then(()=>I)}finally{P=v,y=null}})),y.then(d).catch(m)})}const M=s=>{const d=[].concat(s);d.forEach(x=>{if(typeof x!="string")throw new TypeError(`Unexpected argument type: ${typeof x}`)});const m=x=>w(x.filter(V=>!d.includes(V)));return r.remove(a(d)).then(h).then(m)},re=Te(s=>{chrome.storage.onChanged.addListener(s)},s=>{chrome.storage.onChanged.removeListener(s)}).pipe(ae(([s,d])=>d===t&&Object.keys(s).some(m=>m.startsWith(i))),te(([s])=>{const d=Object.keys(s).filter(m=>m.startsWith(i)&&m!==o);return d.length?d.reduce((m,x)=>Object.assign(Object.assign({},m),{[c(x)]:s[x]}),{}):void 0}),ae(vt));return{set:_,get:S,remove:M,async clear(){const s=await h(),d=[o,...a(s)];return r.remove(d)},async update(s){const d=await S(),m=await s(d);return _(m)},async getKeys(){return h()},get changeStream(){return re},get valueStream(){return pt(Ie(S()),re.pipe(ne(()=>S())))}}}K("local","local"),K("sync","sync"),K("managed","managed");const bt=[{id:"1",name:"English -> Polish",prompt:"You are a translator between English and Polish. For input text in English, you should output the translation into Polish.",active:!0},{id:"2",name:"Unit test writer",prompt:"Please write tests for given code.",active:!0},{id:"3",name:"Unit test writer 2",prompt:"Please write tests for given code.",active:!1},{id:"4",name:"Unit test writer 3",prompt:"Please write tests for given code.",active:!1}],gt={id:"",name:"Helpful assistant",prompt:"You are a helpful assistant...",active:!0},wt=()=>Math.floor(Math.random()*1e9).toString(),F=K("store");async function St(){return console.log("initialiseLocalStorage"),F.set({prompts:bt})}async function D(){return F.get("prompts").then(({prompts:e})=>e)}async function xt(){return(await D()).filter(t=>t.active)}async function Pt(){const e=await D(),t={...gt,id:wt()};return F.set({prompts:[...e,t]}).then(({prompts:n})=>n)}async function Ot(e){const n=(await D()).filter(r=>r.id!==e);return F.set({prompts:n}).then(({prompts:r})=>r)}async function At(e){const n=(await D()).map(r=>r.id===e.id?{...r,...e}:r);return F.set({prompts:n}).then(({prompts:r})=>r)}export{Pt as a,xt as b,je as c,D as g,St as i,F as l,Ot as r,At as u};