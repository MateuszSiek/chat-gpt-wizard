var Ye=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Q=function(e,t){return Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Q(e,t)};function N(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Q(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Ce(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(p){try{c(r.next(p))}catch(g){a(g)}}function l(p){try{c(r.throw(p))}catch(g){a(g)}}function c(p){p.done?o(p.value):i(p.value).then(s,l)}c((r=r.apply(e,t||[])).next())})}function de(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(p){return l([c,p])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(p){c=[6,p],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Y(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function C(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function L(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function j(e){return this instanceof j?(this.v=e,this):new j(e)}function Le(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(d){r[d]&&(i[d]=function(b){return new Promise(function(y,f){o.push([d,b,y,f])>1||s(d,b)})})}function s(d,b){try{l(r[d](b))}catch(y){g(o[0][3],y)}}function l(d){d.value instanceof j?Promise.resolve(d.value.v).then(c,p):g(o[0][2],d)}function c(d){s("next",d)}function p(d){s("throw",d)}function g(d,b){d(b),o.shift(),o.length&&s(o[0][0],o[0][1])}}function De(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Y=="function"?Y(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(a){return new Promise(function(s,l){a=e[o](a),i(s,l,a.done,a.value)})}}function i(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}function w(e){return typeof e=="function"}function Re(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var W=Re(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function ae(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Y(a),l=s.next();!l.done;l=s.next()){var c=l.value;c.remove(this)}}catch(f){t={error:f}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if(w(p))try{p()}catch(f){o=f instanceof W?f.errors:[f]}var g=this._finalizers;if(g){this._finalizers=null;try{for(var d=Y(g),b=d.next();!b.done;b=d.next()){var y=b.value;try{se(y)}catch(f){o=o!=null?o:[],f instanceof W?o=L(L([],C(o)),C(f.errors)):o.push(f)}}}catch(f){r={error:f}}finally{try{b&&!b.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new W(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)se(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&ae(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&ae(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();ee.EMPTY;function pe(e){return e instanceof ee||e&&"closed"in e&&w(e.remove)&&w(e.add)&&w(e.unsubscribe)}function se(e){w(e)?e():e.unsubscribe()}var ye={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},X={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=X.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,L([e,t],C(n))):setTimeout.apply(void 0,L([e,t],C(n)))},clearTimeout:function(e){var t=X.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function he(e){X.setTimeout(function(){throw e})}function ce(){}function Ge(e){e()}var te=function(e){N(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,pe(n)&&n.add(r)):r.destination=$e,r}return t.create=function(n,r,i){return new Z(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(ee),He=Function.prototype.bind;function J(e,t){return He.call(e,t)}var qe=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){F(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){F(r)}else F(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){F(n)}},e}(),Z=function(e){N(t,e);function t(n,r,i){var o=e.call(this)||this,a;if(w(n)||!n)a={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var s;o&&ye.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return o.unsubscribe()},a={next:n.next&&J(n.next,s),error:n.error&&J(n.error,s),complete:n.complete&&J(n.complete,s)}):a=n}return o.destination=new qe(a),o}return t}(te);function F(e){he(e)}function Fe(e){throw e}var $e={closed:!0,next:ce,error:Fe,complete:ce},ne=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function me(e){return e}function Ke(e){return e.length===0?me:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var E=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=We(t)?t:new Z(t,n,r);return Ge(function(){var a=i,s=a.operator,l=a.source;o.add(s?s.call(o,l):l?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ue(n),new n(function(i,o){var a=new Z({next:function(s){try{t(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:i});r.subscribe(a)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ne]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Ke(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ue(t),new t(function(r,i){var o;n.subscribe(function(a){return o=a},function(a){return i(a)},function(){return r(o)})})},e.create=function(t){return new e(t)},e}();function ue(e){var t;return(t=e!=null?e:ye.Promise)!==null&&t!==void 0?t:Promise}function Ve(e){return e&&w(e.next)&&w(e.error)&&w(e.complete)}function We(e){return e&&e instanceof te||Ve(e)&&pe(e)}function Je(e){return w(e==null?void 0:e.lift)}function R(e){return function(t){if(Je(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function D(e,t,n,r,i){return new Be(e,t,n,r,i)}var Be=function(e){N(t,e);function t(n,r,i,o,a,s){var l=e.call(this,n)||this;return l.onFinalize=a,l.shouldUnsubscribe=s,l._next=r?function(c){try{r(c)}catch(p){n.error(p)}}:e.prototype._next,l._error=o?function(c){try{o(c)}catch(p){n.error(p)}finally{this.unsubscribe()}}:e.prototype._error,l._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,l}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(te);function Qe(e){return e&&w(e.schedule)}function Xe(e){return e[e.length-1]}function Ze(e){return Qe(Xe(e))?e.pop():void 0}var ve=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function we(e){return w(e==null?void 0:e.then)}function ge(e){return w(e[ne])}function be(e){return Symbol.asyncIterator&&w(e==null?void 0:e[Symbol.asyncIterator])}function xe(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ze(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ie=ze();function Se(e){return w(e==null?void 0:e[Ie])}function Pe(e){return Le(this,arguments,function(){var n,r,i,o;return de(this,function(a){switch(a.label){case 0:n=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,j(n.read())];case 3:return r=a.sent(),i=r.value,o=r.done,o?[4,j(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,j(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Ae(e){return w(e==null?void 0:e.getReader)}function G(e){if(e instanceof E)return e;if(e!=null){if(ge(e))return Ne(e);if(ve(e))return et(e);if(we(e))return tt(e);if(be(e))return ke(e);if(Se(e))return nt(e);if(Ae(e))return rt(e)}throw xe(e)}function Ne(e){return new E(function(t){var n=e[ne]();if(w(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function et(e){return new E(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function tt(e){return new E(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,he)})}function nt(e){return new E(function(t){var n,r;try{for(var i=Y(e),o=i.next();!o.done;o=i.next()){var a=o.value;if(t.next(a),t.closed)return}}catch(s){n={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function ke(e){return new E(function(t){ot(e,t).catch(function(n){return t.error(n)})})}function rt(e){return ke(Pe(e))}function ot(e,t){var n,r,i,o;return Ce(this,void 0,void 0,function(){var a,s;return de(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=De(e),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(a=r.value,t.next(a),t.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=l.sent(),i={error:s},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function T(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Ee(e,t){return t===void 0&&(t=0),R(function(n,r){n.subscribe(D(r,function(i){return T(r,e,function(){return r.next(i)},t)},function(){return T(r,e,function(){return r.complete()},t)},function(i){return T(r,e,function(){return r.error(i)},t)}))})}function Te(e,t){return t===void 0&&(t=0),R(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function it(e,t){return G(e).pipe(Te(t),Ee(t))}function at(e,t){return G(e).pipe(Te(t),Ee(t))}function st(e,t){return new E(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ct(e,t){return new E(function(n){var r;return T(n,t,function(){r=e[Ie](),T(n,t,function(){var i,o,a;try{i=r.next(),o=i.value,a=i.done}catch(s){n.error(s);return}a?n.complete():n.next(o)},0,!0)}),function(){return w(r==null?void 0:r.return)&&r.return()}})}function Oe(e,t){if(!e)throw new Error("Iterable cannot be null");return new E(function(n){T(n,t,function(){var r=e[Symbol.asyncIterator]();T(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function ut(e,t){return Oe(Pe(e),t)}function lt(e,t){if(e!=null){if(ge(e))return it(e,t);if(ve(e))return st(e,t);if(we(e))return at(e,t);if(be(e))return Oe(e,t);if(Se(e))return ct(e,t);if(Ae(e))return ut(e,t)}throw xe(e)}function je(e,t){return t?lt(e,t):G(e)}function re(e,t){return R(function(n,r){var i=0;n.subscribe(D(r,function(o){r.next(e.call(t,o,i++))}))})}var ft=Array.isArray;function dt(e,t){return ft(t)?e.apply(void 0,L([],C(t))):e(t)}function pt(e){return re(function(t){return dt(e,t)})}function yt(e,t,n,r,i,o,a,s){var l=[],c=0,p=0,g=!1,d=function(){g&&!l.length&&!c&&t.complete()},b=function(f){return c<r?y(f):l.push(f)},y=function(f){o&&t.next(f),c++;var x=!1;G(n(f,p++)).subscribe(D(t,function(m){i==null||i(m),o?b(m):t.next(m)},function(){x=!0},void 0,function(){if(x)try{c--;for(var m=function(){var P=l.shift();a?T(t,a,function(){return y(P)}):y(P)};l.length&&c<r;)m();d()}catch(P){t.error(P)}}))};return e.subscribe(D(t,b,function(){g=!0,d()})),function(){s==null||s()}}function oe(e,t,n){return n===void 0&&(n=1/0),w(t)?oe(function(r,i){return re(function(o,a){return t(r,o,i,a)})(G(e(r,i)))},n):(typeof t=="number"&&(n=t),R(function(r,i){return yt(r,i,e,n)}))}function ht(e){return e===void 0&&(e=1/0),oe(me,e)}function mt(){return ht(1)}function vt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return mt()(je(e,Ze(e)))}function Ue(e,t,n){return n?Ue(e,t).pipe(pt(n)):new E(function(r){var i=function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return r.next(a.length===1?a[0]:a)},o=e(i);return w(t)?function(){return t(i,o)}:void 0})}function le(e,t){return R(function(n,r){var i=0;n.subscribe(D(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}var _e={exports:{}};/*!
 * chrome-promise
 * https://github.com/tfoxy/chrome-promise
 *
 * Copyright 2015 Tomás Fox
 * Released under the MIT license
 */(function(e,t){(function(n,r){e.exports=r(this||n)})(typeof self!="undefined"?self:Ye,function(n){var r=Array.prototype.slice,i=Object.prototype.hasOwnProperty;return o.default=o,o;function o(a){a=a||{};var s=a.chrome||n.chrome,l=a.Promise||n.Promise,c=s.runtime,p=this;if(!p)throw new Error("ChromePromise must be called with new keyword");d(s,p),s.permissions&&s.permissions.onAdded.addListener(b);function g(y,f){return function(){var x=r.call(arguments);return new l(function(m,P){x.push(_),y.apply(f,x);function _(){var H=c.lastError,q=r.call(arguments);if(H)P(H);else switch(q.length){case 0:m();break;case 1:m(q[0]);break;default:m(q)}}})}}function d(y,f){for(var x in y)if(i.call(y,x)){var m;try{m=y[x]}catch{continue}var P=typeof m;P==="object"&&!(m instanceof o)?(f[x]={},d(m,f[x])):P==="function"?f[x]=g(m,y):f[x]=m}}function b(y){if(y.permissions&&y.permissions.length){var f={};y.permissions.forEach(function(x){var m=/^[^.]+/.exec(x);m in s&&(f[m]=s[m])}),d(f,p)}}}})})(_e);var wt=_e.exports,z=new wt;z.default=z;var B=z;const gt=e=>{if(Array.isArray(e))return"Unexpected setter result value: Array";switch(typeof e){case"object":case"undefined":return;default:return`Unexpected setter return value: ${typeof e}`}};function bt(e){return e!=null}const xt=e=>{switch(e){case"local":return B.storage.local;case"sync":return B.storage.sync;case"managed":return B.storage.managed;default:throw new TypeError('area must be "local" | "sync" | "managed"')}};function K(e,t){t||(t="local");const r=xt(t),i=`extend-chrome/storage__${e}`,o=`${i}_keys`,a=u=>`${i}--${u}`,s=u=>u.replace(`${i}--`,""),l=u=>h=>Object.keys(h).reduce((v,S)=>Object.assign(Object.assign({},v),{[u(S)]:h[S]}),{}),c=u=>u.map(a),p=l(a),g=l(s),d=async()=>(await r.get(o))[o]||[],b=u=>r.set({[o]:u});let y=null;async function f(u){if(y)return y;if(typeof u=="undefined"||u===null){const h=await d();if(h.length){const v=c(h),S=await r.get(v);return g(S)}else return{}}else if(typeof u=="string"){const h=a(u),v=await r.get(h);return g(v)}else if(Array.isArray(u)){const h=c(u),v=await r.get(h);return g(v)}else{const h=p(u),v=await r.get(h);return g(v)}}function x(u){if(u==null)return f();if(typeof u=="string"||typeof u=="object")return f(u);if(typeof u=="function")return f().then(u);throw new TypeError(`Unexpected argument type: ${typeof u}`)}const m=u=>u;let P=m;function _(u){return new Promise((h,v)=>{let S;typeof u=="function"?S=k=>{const O=u(k),M=gt(O);return M?(v(new TypeError(M)),k):Object.assign(Object.assign({},k),O)}:S=k=>Object.assign(Object.assign({},k),u);const V=P;P=k=>Object.assign(Object.assign({},k),S(V(k))),y===null&&(y=f().then(k=>{try{const O=P(k),M=p(O);return M[o]=Object.keys(O),r.set(M).then(()=>O)}finally{P=m,y=null}})),y.then(h).catch(v)})}const H=u=>{const h=[].concat(u);h.forEach(S=>{if(typeof S!="string")throw new TypeError(`Unexpected argument type: ${typeof S}`)});const v=S=>b(S.filter(V=>!h.includes(V)));return r.remove(c(h)).then(d).then(v)},ie=Ue(u=>{chrome.storage.onChanged.addListener(u)},u=>{chrome.storage.onChanged.removeListener(u)}).pipe(le(([u,h])=>h===t&&Object.keys(u).some(v=>v.startsWith(i))),re(([u])=>{const h=Object.keys(u).filter(v=>v.startsWith(i)&&v!==o);return h.length?h.reduce((v,S)=>Object.assign(Object.assign({},v),{[s(S)]:u[S]}),{}):void 0}),le(bt));return{set:_,get:x,remove:H,async clear(){const u=await d(),h=[o,...c(u)];return r.remove(h)},async update(u){const h=await x(),v=await u(h);return _(v)},async getKeys(){return d()},get changeStream(){return ie},get valueStream(){return vt(je(x()),ie.pipe(oe(()=>x())))}}}K("local","local"),K("sync","sync"),K("managed","managed");let $;const It=new Uint8Array(16);function St(){if(!$&&($=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $(It)}const I=[];for(let e=0;e<256;++e)I.push((e+256).toString(16).slice(1));function Pt(e,t=0){return(I[e[t+0]]+I[e[t+1]]+I[e[t+2]]+I[e[t+3]]+"-"+I[e[t+4]]+I[e[t+5]]+"-"+I[e[t+6]]+I[e[t+7]]+"-"+I[e[t+8]]+I[e[t+9]]+"-"+I[e[t+10]]+I[e[t+11]]+I[e[t+12]]+I[e[t+13]]+I[e[t+14]]+I[e[t+15]]).toLowerCase()}const At=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var fe={randomUUID:At};function kt(e,t,n){if(fe.randomUUID&&!t&&!e)return fe.randomUUID();e=e||{};const r=e.random||(e.rng||St)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return Pt(r)}const Et=[{id:"5efa6fb0-646c-4c4e-8158-5b65a189ec9d",name:"Travel Guide",prompt:`I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is: 
`,active:!0,placeholder:"Location and place you want to visit",instructions:'You can write your location and the type of place you want to visit. For example: "London, England, UK, Museum"'},{id:"5f0914cb-d01c-4442-8bea-d425e4bb5ecb",name:"Personal Trainer",prompt:`I want you to act as a personal trainer. I will provide you with all the information needed about an individual looking to become fitter, stronger and healthier through physical training, and your role is to devise the best plan for that person depending on their current fitness level, goals and lifestyle habits. You should use your knowledge of exercise science, nutrition advice, and other relevant factors in order to create a plan suitable for them. My first request is: 
`,active:!0,instructions:"Chat will act as a personal trainer"},{id:"d0aa6e65-5a36-40c2-8edb-d0c8d99be822",name:"Mental Health Adviser",prompt:`I want you to act as a mental health adviser. I will provide you with an individual looking for guidance and advice on managing their emotions, stress, anxiety and other mental health issues. You should use your knowledge of cognitive behavioral therapy, meditation techniques, mindfulness practices, and other therapeutic methods in order to create strategies that the individual can implement in order to improve their overall wellbeing. My first request is: 
`,active:!0,placeholder:"What do you need help with?",instructions:"Chat will act as a mental health adviser, you can ask for help with anything related to mental health"},{id:"bbe870b5-d129-4ab2-93a8-9c1b3f731876",name:"Fancy Title Generator",prompt:`I want you to act as a fancy title generator. I will type keywords via comma and you will reply with fancy titles. my first keywords are: 
`,active:!0,placeholder:"Your keywords...",instructions:"Provide list of comma separated keywords. Chat will generate fancy titles for you."},{id:"a9a54d4e-9840-4def-8c0c-f6c85322fb1b",name:"Midjourney Prompt Generator",prompt:`I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. Here is your first prompt: 
`,active:!0},{id:"2c4fb45e-0bf3-4662-87e2-19de069db61e",name:"Morse Code Translator",prompt:`I want you to act as a Morse code translator. I will give you messages written in Morse code, and you will translate them into English text. Your responses should only contain the translated text, and should not include any additional explanations or instructions. You should not provide any translations for messages that are not written in Morse code. Your first message is: 
`,active:!0,placeholder:"Message in morse code"},{id:"b7a7ed26-a50e-4567-a87e-394ad2fbf7a1",name:"Emoji Translator",prompt:`I want you to translate the sentences I wrote into emojis. I will write the sentence, and you will express it with emojis. I just want you to express it with emojis. I don't want you to reply with anything but emoji. My first sentence is: 
`,active:!0,placeholder:"Sentence to translate into emojis",instructions:"Translate your sentences into emojis"},{id:"d2cabd8d-4d71-4a47-9205-42c6394c9607",name:"Drunk Person",prompt:`I want you to act as a drunk person. You will only answer like a very drunk person texting and nothing else. Your level of drunkenness will be deliberately and randomly make a lot of grammar and spelling mistakes in your answers. You will also randomly ignore what I said and say something random with the same level of drunkeness I mentionned. Do not write explanations on replies. My first sentence is: 
`,active:!1,placeholder:"Snendt a m,essage...!! \u{1F942}",instructions:"Chat will act as a drunk person"},{id:"fb57b735-c75b-49c5-81e7-0999634f24e8",name:"Synonyms Generator",prompt:`I want you to act as a synonyms provider. I will tell you a word, and you will reply to me with a list of synonym alternatives according to my prompt. Provide a max of 10 synonyms per prompt. You will only reply to the word list and nothing else. Words should exist. Do not write explanations. My first word is: 
`,active:!0,placeholder:"Word to find synonyms for",instructions:"Get 10 synonyms for a given word"},{id:"422f9dfb-1554-46ac-9665-49a7f6cc8159",name:"English Translator",prompt:`I want you to act as an English translator, spelling corrector, and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper-level English words and sentences. Keep the meaning the same, but make them more literary. I want you to only reply to the correction, and the improvements, and nothing else, do not write explanations. My first sentence is: 
`,active:!0,placeholder:"Sentence to translate or correct/improve...",instructions:"Translate text from any language to English, correct and improve it."},{id:"3a0ea3a0-fca3-4e15-8f19-97699e225c81",name:"Summary Generator",prompt:`I want you to act as a summary generator. I will give you a text and you will reply to me with a summary of the text. You will only reply to the summary and nothing else. Do not write explanations. My first text is: 
`,active:!0,placeholder:"Text to summarize...",instructions:"Summarize a given text"},{id:"3fbca858-5a76-49c8-983c-dbf75cfca751",name:"Cheat sheet generator",prompt:`I want you to act as a cheat sheet generator. I will give you a topic and you will reply to me with a cheat sheet for that topic. You will only reply with the cheat sheet and nothing else. Do not write explanations. My first topic is: 
`,active:!0,placeholder:"Topic to generate a cheat sheet for...",instructions:"Generate a cheat sheet for a given topic"},{id:"f8c43ca3-8760-444e-a783-64fd0fb4baee",name:"Job interviewer",prompt:"I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the given position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. The job I'm applying for is: ",active:!0,placeholder:"Job title...",instructions:"Prepare for an interview. Provide job title and answer interview questions"}],Me={id:"",name:"",prompt:"",active:!0},A=K("store");async function Ot(){return A.set({prompts:Et,promptsHistory:[],selectedPromptId:"",userPreferences:{}})}async function jt(){return A.get("userPreferences").then(({userPreferences:e})=>e.theme)}async function Ut(e){return A.set({userPreferences:{theme:e}}).then(({userPreferences:t})=>t.theme)}async function U(){return A.get("prompts").then(({prompts:e})=>e)}async function _t(e){return A.set({prompts:e}).then(({prompts:t})=>t)}async function Mt(){return(await U()).filter(t=>t.active)}async function Yt(){const e=await U(),t={...Me,id:kt(),active:!1};return A.set({prompts:[t,...e]}).then(({prompts:n})=>n)}async function Ct(e){const n=(await U()).filter(r=>r.id!==e);return A.set({prompts:n}).then(({prompts:r})=>r)}async function Lt(e){const n=(await U()).map(r=>r.id===e.id?{...r,...e}:r);return A.set({prompts:n}).then(({prompts:r})=>r)}async function Dt(e){return A.set({selectedPromptId:e})}async function Rt(){const{selectedPromptId:e}=await A.get("selectedPromptId");return(await U()).find(n=>n.id===e)||Me}async function Gt(e,t){const{promptsHistory:n}=await A.get("promptsHistory"),r=[...n,{chatId:e,promptId:t}];return A.set({promptsHistory:r}).then(({promptsHistory:i})=>i)}async function Tt(e){const{promptsHistory:t}=await A.get("promptsHistory");return t.filter(n=>n.chatId===e)[0]}async function Ht(e){const t=await Tt(e);return(await U()).find(r=>r.id===(t==null?void 0:t.promptId))}export{jt as a,Yt as b,Ut as c,Rt as d,Gt as e,Ht as f,U as g,Mt as h,Dt as i,Ye as j,Ot as k,A as l,Ct as r,_t as s,Lt as u};