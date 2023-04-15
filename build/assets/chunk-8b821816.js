import{d as ge,e as Xe,f as Ze,h as Je,l as Qe,i as Ye}from"./chunk-83225f40.js";import{B as et}from"./chunk-744baaec.js";let Y,ee;function tt(e,t){if(Y===e)return;function n(_){_.key==="Enter"&&!_.shiftKey&&t()}e.addEventListener("keydown",n,!0),Y=e}function nt(e,t){if(ee===e)return;function n(_){t()}e.addEventListener("click",n,!0),ee=e}var F,f,ye,w,te,be,V,D={},Ee=[],_t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var n in t)e[n]=t[n];return e}function ke(e){var t=e.parentNode;t&&t.removeChild(e)}function Se(e,t,n){var _,i,r,c={};for(r in t)r=="key"?_=t[r]:r=="ref"?i=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return U(e,c,_,i,null)}function U(e,t,n,_,i){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ye:i};return i==null&&f.vnode!=null&&f.vnode(r),r}function B(e){return e.children}function M(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function we(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return we(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!z.__r++||te!==f.debounceRendering)&&((te=f.debounceRendering)||be)(z)}function z(){var e,t,n,_,i,r,c,s;for(w.sort(V);e=w.shift();)e.__d&&(t=w.length,_=void 0,i=void 0,c=(r=(n=e).__v).__e,(s=n.__P)&&(_=[],(i=k({},r)).__v=r.__v+1,Z(s,r,i,n.__n,s.ownerSVGElement!==void 0,r.__h!=null?[c]:null,_,c==null?L(r):c,r.__h),Le(_,r),r.__e!=c&&we(r)),w.length>t&&w.sort(V));z.__r=0}function xe(e,t,n,_,i,r,c,s,l,d){var o,h,a,u,p,x,v,y=_&&_.__k||Ee,E=y.length;for(n.__k=[],o=0;o<t.length;o++)if((u=n.__k[o]=(u=t[o])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?U(null,u,null,null,u):Array.isArray(u)?U(B,{children:u},null,null,null):u.__b>0?U(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(a=y[o])===null||a&&u.key==a.key&&u.type===a.type)y[o]=void 0;else for(h=0;h<E;h++){if((a=y[h])&&u.key==a.key&&u.type===a.type){y[h]=void 0;break}a=null}Z(e,u,a=a||D,i,r,c,s,l,d),p=u.__e,(h=u.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,u),v.push(h,u.__c||p,u)),p!=null?(x==null&&(x=p),typeof u.type=="function"&&u.__k===a.__k?u.__d=l=Ce(u,l,e):l=Te(e,u,a,y,p,l),typeof n.type=="function"&&(n.__d=l)):l&&a.__e==l&&l.parentNode!=e&&(l=L(a))}for(n.__e=x,o=E;o--;)y[o]!=null&&(typeof n.type=="function"&&y[o].__e!=null&&y[o].__e==n.__d&&(n.__d=$e(_).nextSibling),He(y[o],y[o]));if(v)for(o=0;o<v.length;o++)Pe(v[o],v[++o],v[++o])}function Ce(e,t,n){for(var _,i=e.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=e,t=typeof _.type=="function"?Ce(_,t,n):Te(n,_,_,i,_.__e,t));return t}function Te(e,t,n,_,i,r){var c,s,l;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(s=r,l=0;(s=s.nextSibling)&&l<_.length;l+=1)if(s==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function $e(e){var t,n,_;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=$e(n)))return _}return null}function rt(e,t,n,_,i){var r;for(r in n)r==="children"||r==="key"||r in t||W(e,r,null,n[r],_);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||W(e,r,t[r],n[r],_)}function _e(e,t,n){t[0]==="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||_t.test(t)?n:n+"px"}function W(e,t,n,_,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||_e(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||_e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?oe:re,r):e.removeEventListener(t,r?oe:re,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function re(e){return this.l[e.type+!1](f.event?f.event(e):e)}function oe(e){return this.l[e.type+!0](f.event?f.event(e):e)}function Z(e,t,n,_,i,r,c,s,l){var d,o,h,a,u,p,x,v,y,E,P,T,Q,H,A,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,r=[s]),(d=f.__b)&&d(t);try{e:if(typeof b=="function"){if(v=t.props,y=(d=b.contextType)&&_[d.__c],E=d?y?y.props.value:d.__:_,n.__c?x=(o=t.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?t.__c=o=new b(v,E):(t.__c=o=new M(v,E),o.constructor=b,o.render=it),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=E,o.__n=_,h=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(v,o.__s))),a=o.props,u=o.state,o.__v=t,h)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==a&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,E),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,E)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(o.props=v,o.state=o.__s,o.__d=!1),o.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),P=0;P<o._sb.length;P++)o.__h.push(o._sb[P]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,E),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(a,u,p)})}if(o.context=E,o.props=v,o.__P=e,T=f.__r,Q=0,"prototype"in b&&b.prototype.render){for(o.state=o.__s,o.__d=!1,T&&T(t),d=o.render(o.props,o.state,o.context),H=0;H<o._sb.length;H++)o.__h.push(o._sb[H]);o._sb=[]}else do o.__d=!1,T&&T(t),d=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++Q<25);o.state=o.__s,o.getChildContext!=null&&(_=k(k({},_),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(p=o.getSnapshotBeforeUpdate(a,u)),A=d!=null&&d.type===B&&d.key==null?d.props.children:d,xe(e,Array.isArray(A)?A:[A],t,n,_,i,r,c,s,l),o.base=t.__e,t.__h=null,o.__h.length&&c.push(o),x&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ot(n.__e,t,n,_,i,r,c,l);(d=f.diffed)&&d(t)}catch(N){t.__v=null,(l||r!=null)&&(t.__e=s,t.__h=!!l,r[r.indexOf(s)]=null),f.__e(N,t,n)}}function Le(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){f.__e(_,n.__v)}})}function ot(e,t,n,_,i,r,c,s){var l,d,o,h=n.props,a=t.props,u=t.type,p=0;if(u==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((l=r[p])&&"setAttribute"in l==!!u&&(u?l.localName===u:l.nodeType===3)){e=l,r[p]=null;break}}if(e==null){if(u===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,a.is&&a),r=null,s=!1}if(u===null)h===a||s&&e.data===a||(e.data=a);else{if(r=r&&F.call(e.childNodes),d=(h=n.props||D).dangerouslySetInnerHTML,o=a.dangerouslySetInnerHTML,!s){if(r!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(rt(e,a,h,i,s),o)t.__k=[];else if(p=t.props.children,xe(e,Array.isArray(p)?p:[p],t,n,_,i&&u!=="foreignObject",r,c,r?r[0]:n.__k&&L(n,0),s),r!=null)for(p=r.length;p--;)r[p]!=null&&ke(r[p]);s||("value"in a&&(p=a.value)!==void 0&&(p!==e.value||u==="progress"&&!p||u==="option"&&p!==h.value)&&W(e,"value",p,h.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==e.checked&&W(e,"checked",p,h.checked,!1))}return e}function Pe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){f.__e(_,n)}}function He(e,t,n){var _,i;if(f.unmount&&f.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Pe(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){f.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(i=0;i<_.length;i++)_[i]&&He(_[i],t,n||typeof e.type!="function");n||e.__e==null||ke(e.__e),e.__=e.__e=e.__d=void 0}function it(e,t,n){return this.constructor(e,n)}function ct(e,t,n){var _,i,r;f.__&&f.__(e,t),i=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],Z(t,e=(!_&&n||t).__k=Se(B,null,[e]),i||D,D,t.ownerSVGElement!==void 0,!_&&n?[n]:i?null:t.firstChild?F.call(t.childNodes):null,r,!_&&n?n:i?i.__e:t.firstChild,_),Le(r,e)}F=Ee.slice,f={__e:function(e,t,n,_){for(var i,r,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,_||{}),c=i.__d),c)return i.__E=i}catch(s){e=s}throw e}},ye=0,M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},M.prototype.render=B,w=[],be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,V=function(e,t){return e.__v.__b-t.__v.__b},z.__r=0;var Ae=function(e,t,n,_){var i;t[0]=0;for(var r=1;r<t.length;r++){var c=t[r++],s=t[r]?(t[0]|=c?1:2,n[t[r++]]):t[++r];c===3?_[0]=s:c===4?_[1]=Object.assign(_[1]||{},s):c===5?(_[1]=_[1]||{})[t[++r]]=s:c===6?_[1][t[++r]]+=s+"":c?(i=e.apply(s,Ae(e,s,n,["",null])),_.push(i),s[0]?t[0]|=2:(t[r-2]=0,t[r]=i)):_.push(s)}return _},ie=new Map;function st(e){var t=ie.get(this);return t||(t=new Map,ie.set(this,t)),(t=Ae(this,t.get(e)||(t.set(e,t=function(n){for(var _,i,r=1,c="",s="",l=[0],d=function(a){r===1&&(a||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,a,c):r===3&&(a||c)?(l.push(3,a,c),r=2):r===2&&c==="..."&&a?l.push(4,a,0):r===2&&c&&!a?l.push(5,0,!0,c):r>=5&&((c||!a&&r===5)&&(l.push(r,0,c,i),r=6),a&&(l.push(r,a,0,i),r=6)),c=""},o=0;o<n.length;o++){o&&(r===1&&d(),d(o));for(var h=0;h<n[o].length;h++)_=n[o][h],r===1?_==="<"?(d(),l=[l],r=3):c+=_:r===4?c==="--"&&_===">"?(r=1,c=""):c=_+c[0]:s?_===s?s="":c+=_:_==='"'||_==="'"?s=_:_===">"?(d(),r=1):r&&(_==="="?(r=5,i=c,c=""):_==="/"&&(r<5||n[o][h+1]===">")?(d(),r===3&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):_===" "||_==="	"||_===`
`||_==="\r"?(d(),r=2):c+=_),r===3&&c==="!--"&&(r=4,l=l[0])}return d(),l}(e)),t),arguments,[])).length>1?t:t[0]}var R=st.bind(Se),J,m,G,ce,j=0,Ne=[],I=[],se=f.__b,ae=f.__r,le=f.diffed,ue=f.__c,fe=f.unmount;function Ue(e,t){f.__h&&f.__h(m,e,j||t),j=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:I}),n.__[e]}function de(e){return j=1,at(Me,e)}function at(e,t,n){var _=Ue(J++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Me(void 0,t),function(s){var l=_.__N?_.__N[0]:_.__[0],d=_.t(l,s);l!==d&&(_.__N=[d,_.__[1]],_.__c.setState({}))}],_.__c=m,!m.u)){var i=function(s,l,d){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(a){return a.__c});if(o.every(function(a){return!a.__N}))return!r||r.call(this,s,l,d);var h=!1;return o.forEach(function(a){if(a.__N){var u=a.__[0];a.__=a.__N,a.__N=void 0,u!==a.__[0]&&(h=!0)}}),!(!h&&_.__c.props===s)&&(!r||r.call(this,s,l,d))};m.u=!0;var r=m.shouldComponentUpdate,c=m.componentWillUpdate;m.componentWillUpdate=function(s,l,d){if(this.__e){var o=r;r=void 0,i(s,l,d),r=o}c&&c.call(this,s,l,d)},m.shouldComponentUpdate=i}return _.__N||_.__}function pe(e,t){var n=Ue(J++,3);!f.__s&&ft(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function lt(){for(var e;e=Ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(O),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){m=null,se&&se(e)},f.__r=function(e){ae&&ae(e),J=0;var t=(m=e.__c).__H;t&&(G===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=I,n.__N=n.i=void 0})):(t.__h.forEach(O),t.__h.forEach(K),t.__h=[])),G=m},f.diffed=function(e){le&&le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ne.push(t)!==1&&ce===f.requestAnimationFrame||((ce=f.requestAnimationFrame)||ut)(lt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==I&&(n.__=n.__V),n.i=void 0,n.__V=I})),G=m=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(O),n.__h=n.__h.filter(function(_){return!_.__||K(_)})}catch(_){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(_,n.__v)}}),ue&&ue(e,t)},f.unmount=function(e){fe&&fe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{O(_)}catch(i){t=i}}),n.__H=void 0,t&&f.__e(t,n.__v))};var he=typeof requestAnimationFrame=="function";function ut(e){var t,n=function(){clearTimeout(_),he&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);he&&(t=requestAnimationFrame(n))}function O(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function K(e){var t=m;e.__c=e.__(),m=t}function ft(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Me(e,t){return typeof t=="function"?t(e):t}const dt="form textarea+button",pt="form textarea",Re=".items-start:not(.scrollbar-trigger)",Ie="main div.group",Oe="chat-gpt-wizard",De="chat-gpt-wizard--shadow-root",ze="chat-gpt-wizard--description";function S(){return document.querySelector('div[id="__next"]')}function ht(){return S().querySelector("."+De)}function We(){return S().querySelector("."+Oe)}function vt(){return S().querySelector("."+ze)}function qe(){return S().querySelector(dt)}function C(){return S().querySelector(pt)}function Fe(){return[...S().querySelectorAll(Ie)]}var mt=`.chat-gpt-wizard--select-wrapper{text-align:center}.chat-gpt-wizard--select-wrapper select{border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;height:3rem;background-color:transparent}
`;const $="\u200F\u200F\u200E \u200E";function gt(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=mt,t.append(n),e}function yt(e,t,n,_){const i=new RegExp(t+".*?"+n,"gs");return e.replace(i,_)}function bt(){const e=window.location.pathname,t=/chat\/([a-zA-Z0-9-_]+)(\/|$)/,n=e.match(t);if(n&&n[1])return n[1]}console.info("ChatGPT Prompt Wizard loaded");let g,X=!1;ge().then(e=>{g=e});et.runtime.onMessage.addListener(({type:e,payload:t})=>{e==="chat-id"&&X&&g&&(X=!1,Xe(t,g==null?void 0:g.id),je({chatId:t,prompt:g}))});function ve(){const e=C(),t=Fe();if(Ke(),!e||!g||t.length>0)return;const n=e.value,_=g.prompt;e.value=_?$+_+$+n:n,X=!0}const Et=()=>{const e=qe(),t=C();!e||!t||(nt(e,ve),tt(t,ve))},Be=e=>{var n;const t=(n=e==null?void 0:e.innerHTML)==null?void 0:n.includes($);!e.dataset.chatGptWizard&&t&&(e.dataset.chatGptWizard="true",e.innerHTML=yt(e.innerHTML,$,$,""))},Ge=e=>{e.querySelectorAll(Re).forEach(t=>{Be(t)})},kt=new MutationObserver(e=>{for(const t of e)t.type==="childList"&&Array.from(t.addedNodes).forEach(_=>{_.matches&&_.matches(Ie)&&Ge(_),_.matches&&_.matches(Re)&&Be(_)})});kt.observe(document,{childList:!0,subtree:!0});const St=()=>{const[e,t]=de([]),[n,_]=de();return pe(()=>{Promise.all([Je(),ge()]).then(([c,s])=>{t(c),_(s&&s.id)})},[]),pe(()=>{const c=Qe.changeStream.subscribe(({prompts:s})=>{s!=null&&s.newValue&&t(s.newValue)});return()=>c.unsubscribe()},[]),R`
    <div class="chat-gpt-wizard--select-wrapper">
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-500"
      >
        Select prompt
      </div>
      <select
        onChange=${c=>{g=e.find(({id:l})=>l===c.target.value);const s=g&&g.id;s&&Ye(s),_(s),Ve(g)}}
        class=${"chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm"}
        name="cars"
        id="cars"
      >
        <option value="" selected=${!n&&"selected"}></option>
        ${e.map(({name:c,id:s})=>R` <option
            value="${s}"
            selected=${n===s&&"selected"}
          >
            ${c}
          </option>`)}
      </select>
      ${(g==null?void 0:g.instructions)&&R`
        <div
          class="chat-gpt-wizard--select-instructions text-xs text-black/50 dark:text-white/50"
        >
          ${g==null?void 0:g.instructions}
        </div>
      `}
    </div>
  `};function wt(e){ct(R` <${St} />`,e)}async function xt(){if(We())return;const t=C().parentElement.parentElement;if(!ht()){const i=gt();i.classList.add(De),t.appendChild(i)}let n=document.createElement("div");n.classList.add(Oe);const _=document.querySelector("form");_.parentElement.insertBefore(n,_.parentElement.firstChild),wt(n)}function Ve(e){const t=C();!t||(t.placeholder=(e==null?void 0:e.placeholder)||"Send a message...")}async function je({chatId:e,prompt:t}={}){const n=C(),_=e||bt(),i=t||_&&await Ze(_);if(n&&i){const r=n.parentElement.parentElement;let c=document.createElement("div");c.classList.add(ze,"text-center","text-xs","text-black/50","dark:text-white/50"),r.insertBefore(c,r.lastElementChild.nextSibling),c.innerText="ChatGptWizard prompt: "+i.name,Ve(i)}}function Ke(){const e=We();e&&e.remove()}function Ct(){const e=vt();e&&e.remove()}async function q(){const e=qe(),t=C(),n=Fe();if(Ge(S()),n.length>0){Ke(),await je();return}Et(),e&&t&&(Ct(),await xt())}q();const Tt=S(),me=document.querySelector("form");try{new MutationObserver(()=>{q()}).observe(Tt,{childList:!0}),me&&new MutationObserver(()=>{q()}).observe(me,{childList:!0,subtree:!0})}catch(e){console.info(`ChatGptWizard error --> Could not update UI:
`,e.stack)}window.addEventListener("hashchange",function(e){q()});
