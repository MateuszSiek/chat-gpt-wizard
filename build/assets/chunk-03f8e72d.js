import{d as G,e as ve,f as X,l as ge,h as Qe}from"./chunk-922fe935.js";const Ye="form textarea+button",Ze="form textarea",ye=".items-start:not(.scrollbar-trigger)",be="main div.group",Ee="chat-gpt-wizard",ke="chat-gpt-wizard--shadow-root",Se="chat-gpt-wizard--description";function k(){return document.querySelector('div[id="__next"]')}function et(){return k().querySelector("."+ke)}function xe(){return k().querySelector("."+Ee)}function tt(){return k().querySelector("."+Se)}function we(){return k().querySelector(Ye)}function w(){return k().querySelector(Ze)}function Pe(){return[...k().querySelectorAll(be)]}var nt=`.chat-gpt-wizard--select-wrapper{text-align:center}.chat-gpt-wizard--select-wrapper select{border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;height:3rem;background-color:transparent}
`;const $="\u200F\u200F\u200E \u200E";function _t(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=nt,t.append(n),e}function rt(e,t,n,_){const i=new RegExp(t+".*?"+n,"gs");return e.replace(i,_)}function $e(e){if(e.ctrlKey||e.metaKey){const t=parseInt(e.key);if(t>=0&&t<=9){if(e.preventDefault(),e.stopPropagation(),t===0){G();return}ve().then(n=>{const _=n[t-1];G(_==null?void 0:_.id)})}}}var z,p,Ce,S,te,Te,V,D={},Le=[],ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var n in t)e[n]=t[n];return e}function He(e){var t=e.parentNode;t&&t.removeChild(e)}function Ae(e,t,n){var _,i,r,c={};for(r in t)r=="key"?_=t[r]:r=="ref"?i=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return R(e,c,_,i,null)}function R(e,t,n,_,i){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Ce:i};return i==null&&p.vnode!=null&&p.vnode(r),r}function q(e){return e.children}function I(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function Ne(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ne(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!O.__r++||te!==p.debounceRendering)&&((te=p.debounceRendering)||Te)(O)}function O(){var e,t,n,_,i,r,c,u;for(S.sort(V);e=S.shift();)e.__d&&(t=S.length,_=void 0,i=void 0,c=(r=(n=e).__v).__e,(u=n.__P)&&(_=[],(i=E({},r)).__v=r.__v+1,J(u,r,i,n.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,_,c==null?T(r):c,r.__h),De(_,r),r.__e!=c&&Ne(r)),S.length>t&&S.sort(V));O.__r=0}function Re(e,t,n,_,i,r,c,u,a,d){var o,f,s,l,h,x,m,g=_&&_.__k||Le,b=g.length;for(n.__k=[],o=0;o<t.length;o++)if((l=n.__k[o]=(l=t[o])==null||typeof l=="boolean"||typeof l=="function"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?R(null,l,null,null,l):Array.isArray(l)?R(q,{children:l},null,null,null):l.__b>0?R(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(s=g[o])===null||s&&l.key==s.key&&l.type===s.type)g[o]=void 0;else for(f=0;f<b;f++){if((s=g[f])&&l.key==s.key&&l.type===s.type){g[f]=void 0;break}s=null}J(e,l,s=s||D,i,r,c,u,a,d),h=l.__e,(f=l.ref)&&s.ref!=f&&(m||(m=[]),s.ref&&m.push(s.ref,null,l),m.push(f,l.__c||h,l)),h!=null?(x==null&&(x=h),typeof l.type=="function"&&l.__k===s.__k?l.__d=a=Ie(l,a,e):a=Me(e,l,s,g,h,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=T(s))}for(n.__e=x,o=b;o--;)g[o]!=null&&(typeof n.type=="function"&&g[o].__e!=null&&g[o].__e==n.__d&&(n.__d=Ue(_).nextSibling),We(g[o],g[o]));if(m)for(o=0;o<m.length;o++)Oe(m[o],m[++o],m[++o])}function Ie(e,t,n){for(var _,i=e.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=e,t=typeof _.type=="function"?Ie(_,t,n):Me(n,_,_,i,_.__e,t));return t}function Me(e,t,n,_,i,r){var c,u,a;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(u=r,a=0;(u=u.nextSibling)&&a<_.length;a+=1)if(u==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function Ue(e){var t,n,_;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=Ue(n)))return _}return null}function it(e,t,n,_,i){var r;for(r in n)r==="children"||r==="key"||r in t||W(e,r,null,n[r],_);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||W(e,r,t[r],n[r],_)}function _e(e,t,n){t[0]==="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||ot.test(t)?n:n+"px"}function W(e,t,n,_,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||_e(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||_e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?oe:re,r):e.removeEventListener(t,r?oe:re,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function re(e){return this.l[e.type+!1](p.event?p.event(e):e)}function oe(e){return this.l[e.type+!0](p.event?p.event(e):e)}function J(e,t,n,_,i,r,c,u,a){var d,o,f,s,l,h,x,m,g,b,L,P,ee,H,A,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,u=t.__e=n.__e,t.__h=null,r=[u]),(d=p.__b)&&d(t);try{e:if(typeof y=="function"){if(m=t.props,g=(d=y.contextType)&&_[d.__c],b=d?g?g.props.value:d.__:_,n.__c?x=(o=t.__c=n.__c).__=o.__E:("prototype"in y&&y.prototype.render?t.__c=o=new y(m,b):(t.__c=o=new I(m,b),o.constructor=y,o.render=st),g&&g.sub(o),o.props=m,o.state||(o.state={}),o.context=b,o.__n=_,f=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),y.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=E({},o.__s)),E(o.__s,y.getDerivedStateFromProps(m,o.__s))),s=o.props,l=o.state,o.__v=t,f)y.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y.getDerivedStateFromProps==null&&m!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,b)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(o.props=m,o.state=o.__s,o.__d=!1),o.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,l,h)})}if(o.context=b,o.props=m,o.__P=e,P=p.__r,ee=0,"prototype"in y&&y.prototype.render){for(o.state=o.__s,o.__d=!1,P&&P(t),d=o.render(o.props,o.state,o.context),H=0;H<o._sb.length;H++)o.__h.push(o._sb[H]);o._sb=[]}else do o.__d=!1,P&&P(t),d=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++ee<25);o.state=o.__s,o.getChildContext!=null&&(_=E(E({},_),o.getChildContext())),f||o.getSnapshotBeforeUpdate==null||(h=o.getSnapshotBeforeUpdate(s,l)),A=d!=null&&d.type===q&&d.key==null?d.props.children:d,Re(e,Array.isArray(A)?A:[A],t,n,_,i,r,c,u,a),o.base=t.__e,t.__h=null,o.__h.length&&c.push(o),x&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ct(n.__e,t,n,_,i,r,c,a);(d=p.diffed)&&d(t)}catch(N){t.__v=null,(a||r!=null)&&(t.__e=u,t.__h=!!a,r[r.indexOf(u)]=null),p.__e(N,t,n)}}function De(e,t){p.__c&&p.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){p.__e(_,n.__v)}})}function ct(e,t,n,_,i,r,c,u){var a,d,o,f=n.props,s=t.props,l=t.type,h=0;if(l==="svg"&&(i=!0),r!=null){for(;h<r.length;h++)if((a=r[h])&&"setAttribute"in a==!!l&&(l?a.localName===l:a.nodeType===3)){e=a,r[h]=null;break}}if(e==null){if(l===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),r=null,u=!1}if(l===null)f===s||u&&e.data===s||(e.data=s);else{if(r=r&&z.call(e.childNodes),d=(f=n.props||D).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!u){if(r!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(it(e,s,f,i,u),o)t.__k=[];else if(h=t.props.children,Re(e,Array.isArray(h)?h:[h],t,n,_,i&&l!=="foreignObject",r,c,r?r[0]:n.__k&&T(n,0),u),r!=null)for(h=r.length;h--;)r[h]!=null&&He(r[h]);u||("value"in s&&(h=s.value)!==void 0&&(h!==e.value||l==="progress"&&!h||l==="option"&&h!==f.value)&&W(e,"value",h,f.value,!1),"checked"in s&&(h=s.checked)!==void 0&&h!==e.checked&&W(e,"checked",h,f.checked,!1))}return e}function Oe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){p.__e(_,n)}}function We(e,t,n){var _,i;if(p.unmount&&p.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Oe(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){p.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(i=0;i<_.length;i++)_[i]&&We(_[i],t,n||typeof e.type!="function");n||e.__e==null||He(e.__e),e.__=e.__e=e.__d=void 0}function st(e,t,n){return this.constructor(e,n)}function lt(e,t,n){var _,i,r;p.__&&p.__(e,t),i=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],J(t,e=(!_&&n||t).__k=Ae(q,null,[e]),i||D,D,t.ownerSVGElement!==void 0,!_&&n?[n]:i?null:t.firstChild?z.call(t.childNodes):null,r,!_&&n?n:i?i.__e:t.firstChild,_),De(r,e)}z=Le.slice,p={__e:function(e,t,n,_){for(var i,r,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,_||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},Ce=0,I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},n),this.props)),e&&E(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},I.prototype.render=q,S=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,V=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0;var ze=function(e,t,n,_){var i;t[0]=0;for(var r=1;r<t.length;r++){var c=t[r++],u=t[r]?(t[0]|=c?1:2,n[t[r++]]):t[++r];c===3?_[0]=u:c===4?_[1]=Object.assign(_[1]||{},u):c===5?(_[1]=_[1]||{})[t[++r]]=u:c===6?_[1][t[++r]]+=u+"":c?(i=e.apply(u,ze(e,u,n,["",null])),_.push(i),u[0]?t[0]|=2:(t[r-2]=0,t[r]=i)):_.push(u)}return _},ie=new Map;function at(e){var t=ie.get(this);return t||(t=new Map,ie.set(this,t)),(t=ze(this,t.get(e)||(t.set(e,t=function(n){for(var _,i,r=1,c="",u="",a=[0],d=function(s){r===1&&(s||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,s,c):r===3&&(s||c)?(a.push(3,s,c),r=2):r===2&&c==="..."&&s?a.push(4,s,0):r===2&&c&&!s?a.push(5,0,!0,c):r>=5&&((c||!s&&r===5)&&(a.push(r,0,c,i),r=6),s&&(a.push(r,s,0,i),r=6)),c=""},o=0;o<n.length;o++){o&&(r===1&&d(),d(o));for(var f=0;f<n[o].length;f++)_=n[o][f],r===1?_==="<"?(d(),a=[a],r=3):c+=_:r===4?c==="--"&&_===">"?(r=1,c=""):c=_+c[0]:u?_===u?u="":c+=_:_==='"'||_==="'"?u=_:_===">"?(d(),r=1):r&&(_==="="?(r=5,i=c,c=""):_==="/"&&(r<5||n[o][f+1]===">")?(d(),r===3&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):_===" "||_==="	"||_===`
`||_==="\r"?(d(),r=2):c+=_),r===3&&c==="!--"&&(r=4,a=a[0])}return d(),a}(e)),t),arguments,[])).length>1?t:t[0]}var Q=at.bind(Ae),Y,v,F,ce,j=0,qe=[],M=[],se=p.__b,le=p.__r,ae=p.diffed,ue=p.__c,fe=p.unmount;function Fe(e,t){p.__h&&p.__h(v,e,j||t),j=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:M}),n.__[e]}function B(e){return j=1,ut(Be,e)}function ut(e,t,n){var _=Fe(Y++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Be(void 0,t),function(u){var a=_.__N?_.__N[0]:_.__[0],d=_.t(a,u);a!==d&&(_.__N=[d,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var i=function(u,a,d){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(s){return s.__c});if(o.every(function(s){return!s.__N}))return!r||r.call(this,u,a,d);var f=!1;return o.forEach(function(s){if(s.__N){var l=s.__[0];s.__=s.__N,s.__N=void 0,l!==s.__[0]&&(f=!0)}}),!(!f&&_.__c.props===u)&&(!r||r.call(this,u,a,d))};v.u=!0;var r=v.shouldComponentUpdate,c=v.componentWillUpdate;v.componentWillUpdate=function(u,a,d){if(this.__e){var o=r;r=void 0,i(u,a,d),r=o}c&&c.call(this,u,a,d)},v.shouldComponentUpdate=i}return _.__N||_.__}function de(e,t){var n=Fe(Y++,3);!p.__s&&pt(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function ft(){for(var e;e=qe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(U),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],p.__e(t,e.__v)}}p.__b=function(e){v=null,se&&se(e)},p.__r=function(e){le&&le(e),Y=0;var t=(v=e.__c).__H;t&&(F===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=M,n.__N=n.i=void 0})):(t.__h.forEach(U),t.__h.forEach(K),t.__h=[])),F=v},p.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(qe.push(t)!==1&&ce===p.requestAnimationFrame||((ce=p.requestAnimationFrame)||dt)(ft)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==M&&(n.__=n.__V),n.i=void 0,n.__V=M})),F=v=null},p.__c=function(e,t){t.some(function(n){try{n.__h.forEach(U),n.__h=n.__h.filter(function(_){return!_.__||K(_)})}catch(_){t.some(function(i){i.__h&&(i.__h=[])}),t=[],p.__e(_,n.__v)}}),ue&&ue(e,t)},p.unmount=function(e){fe&&fe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{U(_)}catch(i){t=i}}),n.__H=void 0,t&&p.__e(t,n.__v))};var pe=typeof requestAnimationFrame=="function";function dt(e){var t,n=function(){clearTimeout(_),pe&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);pe&&(t=requestAnimationFrame(n))}function U(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function K(e){var t=v;e.__c=e.__(),v=t}function pt(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Be(e,t){return typeof t=="function"?t(e):t}function ht({prompt:e,index:t,selected:n}){const i=(t<9?`[${t+1}] `:"")+e.name;return Q` <option value="${e.id}" selected=${n&&"selected"}>
    ${i}
  </option>`}function mt({onChange:e}){const[t,n]=B([]),[_,i]=B(),[r,c]=B(),u=()=>{ve().then(o=>{n(o)})};return de(()=>{u(),X().then(f=>{i(f)});const o=ge.changeStream.subscribe(c);return()=>o.unsubscribe()},[]),de(()=>{var o;if(r!=null&&r.selectedPromptId){const f=t==null?void 0:t.find(({id:s})=>{var l;return s===((l=r==null?void 0:r.selectedPromptId)==null?void 0:l.newValue)});i(f)}(o=r==null?void 0:r.prompts)!=null&&o.newValue&&u()},[r]),Q`
    <div class="chat-gpt-wizard--select-wrapper" onKeyDown=${$e}>
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-600"
      >
        Select prompt
      </div>
      <select onChange=${o=>{const f=t.find(({id:s})=>{var l;return s===((l=o==null?void 0:o.target)==null?void 0:l.value)});G(f==null?void 0:f.id).then(()=>{}),i(f),e(f)}} class=${"chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm"}>
        <option value="" selected=${!(_!=null&&_.id)&&"selected"}></option>
        ${t.map((o,f)=>ht({prompt:o,index:f,selected:(_==null?void 0:_.id)===o.id}))}
      </select>
      <div class="chat-gpt-wizard--select-instructions dark:text-gray-500 text-xs text-black/50">
          ${_==null?void 0:_.instructions} ‎
      </div>
    </div>
  `}const vt=e=>{const t=/\[ignore:(.*?)\]/,n=e.match(t);return n&&n[1]},Ge=e=>{var _;const t=(_=e==null?void 0:e.innerHTML)==null?void 0:_.includes($),n=vt(e==null?void 0:e.innerHTML);!e.dataset.chatGptWizard&&t&&n&&(e.dataset.chatGptWizard="true",e.innerHTML=rt(e.innerHTML,$,$,""),Qe(n).then(i=>{yt({prompt:i})}))},Ve=e=>{e.querySelectorAll(ye).forEach(t=>{Ge(t)})};function gt(){if(xe())return;const t=w().parentElement.parentElement;if(!et()){const i=_t();i.classList.add(ke),t.appendChild(i)}let n=document.createElement("div");n.classList.add(Ee);const _=document.querySelector("form");_.parentElement.insertBefore(n,_.parentElement.firstChild),lt(Q`<${mt} onChange=${je} />`,n)}function je(e){const t=w();!t||(t.placeholder=(e==null?void 0:e.placeholder)||"Send a message...")}function yt({prompt:e}={}){Xe();const t=w();if(t&&e){const n=t.parentElement.parentElement;let _=document.createElement("div");_.classList.add(Se,"text-center","text-xs","text-black/50","dark:text-white/50"),n.insertBefore(_,n.lastElementChild.nextSibling),_.innerText="ChatGptWizard prompt: "+e.name,je(e)}}function Ke(){const e=xe();e&&e.remove()}function Xe(){const e=tt();e&&e.remove()}let he,me,C;X().then(e=>{C=e});ge.changeStream.subscribe(({selectedPromptId:e})=>{e&&X().then(t=>{C=t})});function Je(){const e=w(),t=Pe();if(Ke(),!e||!C||t.length>0)return;const n=e.value,_=C.prompt;e.value=_?`${$}[ignore:${C.id}]
${_}${$}${n}`:n}function bt(e){if(he===e)return;function t(n){n.key==="Enter"&&!n.shiftKey&&Je(),$e(n)}e.addEventListener("keydown",t,!0),he=e}function Et(e){if(me===e)return;function t(n){Je()}e.addEventListener("click",t,!0),me=e}console.info("ChatGPT Prompt Wizard loaded");const kt=()=>{const e=we(),t=w();!e||!t||(Et(e),bt(t))};function Z(){const e=we(),t=w(),n=Pe();if(Ve(k()),n.length>0){Ke();return}kt(),e&&t&&(Xe(),gt())}Z();const St=k();document.querySelector("form");try{new MutationObserver(e=>{Z();for(const t of e)t.type==="childList"&&Array.from(t.addedNodes).forEach(_=>{_.matches&&_.matches(be)&&Ve(_),_.matches&&_.matches(ye)&&Ge(_)})}).observe(St,{childList:!0,subtree:!0})}catch(e){console.info(`ChatGptWizard error --> Could not update UI:
`,e.stack)}window.addEventListener("hashchange",function(e){Z()});
