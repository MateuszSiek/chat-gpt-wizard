import{d as Xe,e as J,l as me,f as Je,h as Qe}from"./chunk-3dfaece1.js";const Ye="form textarea+button",Ze="form textarea",ge=".items-start:not(.scrollbar-trigger)",ye="main div.group",be="chat-gpt-wizard",Ee="chat-gpt-wizard--shadow-root",ke="chat-gpt-wizard--description";function k(){return document.querySelector('div[id="__next"]')}function et(){return k().querySelector("."+Ee)}function Se(){return k().querySelector("."+be)}function tt(){return k().querySelector("."+ke)}function xe(){return k().querySelector(Ye)}function w(){return k().querySelector(Ze)}function we(){return[...k().querySelectorAll(ye)]}var nt=`.chat-gpt-wizard--select-wrapper{text-align:center}.chat-gpt-wizard--select-wrapper select{border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;height:3rem;background-color:transparent}
`;const C="\u200F\u200F\u200E \u200E";function _t(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=nt,t.append(n),e}function rt(e,t,n,_){const i=new RegExp(t+".*?"+n,"gs");return e.replace(i,_)}var F,d,Pe,S,ee,Ce,j,z={},$e=[],ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var n in t)e[n]=t[n];return e}function Te(e){var t=e.parentNode;t&&t.removeChild(e)}function Le(e,t,n){var _,i,r,c={};for(r in t)r=="key"?_=t[r]:r=="ref"?i=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return I(e,c,_,i,null)}function I(e,t,n,_,i){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Pe:i};return i==null&&d.vnode!=null&&d.vnode(r),r}function G(e){return e.children}function M(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function He(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return He(e)}}function te(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!O.__r++||ee!==d.debounceRendering)&&((ee=d.debounceRendering)||Ce)(O)}function O(){var e,t,n,_,i,r,c,u;for(S.sort(j);e=S.shift();)e.__d&&(t=S.length,_=void 0,i=void 0,c=(r=(n=e).__v).__e,(u=n.__P)&&(_=[],(i=E({},r)).__v=r.__v+1,Q(u,r,i,n.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,_,c==null?T(r):c,r.__h),Re(_,r),r.__e!=c&&He(r)),S.length>t&&S.sort(j));O.__r=0}function Ae(e,t,n,_,i,r,c,u,a,f){var o,p,s,l,h,x,v,g=_&&_.__k||$e,b=g.length;for(n.__k=[],o=0;o<t.length;o++)if((l=n.__k[o]=(l=t[o])==null||typeof l=="boolean"||typeof l=="function"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?I(null,l,null,null,l):Array.isArray(l)?I(G,{children:l},null,null,null):l.__b>0?I(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(s=g[o])===null||s&&l.key==s.key&&l.type===s.type)g[o]=void 0;else for(p=0;p<b;p++){if((s=g[p])&&l.key==s.key&&l.type===s.type){g[p]=void 0;break}s=null}Q(e,l,s=s||z,i,r,c,u,a,f),h=l.__e,(p=l.ref)&&s.ref!=p&&(v||(v=[]),s.ref&&v.push(s.ref,null,l),v.push(p,l.__c||h,l)),h!=null?(x==null&&(x=h),typeof l.type=="function"&&l.__k===s.__k?l.__d=a=Ne(l,a,e):a=Ie(e,l,s,g,h,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=T(s))}for(n.__e=x,o=b;o--;)g[o]!=null&&(typeof n.type=="function"&&g[o].__e!=null&&g[o].__e==n.__d&&(n.__d=Me(_).nextSibling),We(g[o],g[o]));if(v)for(o=0;o<v.length;o++)Ue(v[o],v[++o],v[++o])}function Ne(e,t,n){for(var _,i=e.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=e,t=typeof _.type=="function"?Ne(_,t,n):Ie(n,_,_,i,_.__e,t));return t}function Ie(e,t,n,_,i,r){var c,u,a;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(u=r,a=0;(u=u.nextSibling)&&a<_.length;a+=1)if(u==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function Me(e){var t,n,_;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=Me(n)))return _}return null}function it(e,t,n,_,i){var r;for(r in n)r==="children"||r==="key"||r in t||D(e,r,null,n[r],_);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||D(e,r,t[r],n[r],_)}function ne(e,t,n){t[0]==="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||ot.test(t)?n:n+"px"}function D(e,t,n,_,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||ne(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?re:_e,r):e.removeEventListener(t,r?re:_e,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function _e(e){return this.l[e.type+!1](d.event?d.event(e):e)}function re(e){return this.l[e.type+!0](d.event?d.event(e):e)}function Q(e,t,n,_,i,r,c,u,a){var f,o,p,s,l,h,x,v,g,b,L,P,Z,H,A,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,u=t.__e=n.__e,t.__h=null,r=[u]),(f=d.__b)&&f(t);try{e:if(typeof y=="function"){if(v=t.props,g=(f=y.contextType)&&_[f.__c],b=f?g?g.props.value:f.__:_,n.__c?x=(o=t.__c=n.__c).__=o.__E:("prototype"in y&&y.prototype.render?t.__c=o=new y(v,b):(t.__c=o=new M(v,b),o.constructor=y,o.render=st),g&&g.sub(o),o.props=v,o.state||(o.state={}),o.context=b,o.__n=_,p=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),y.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=E({},o.__s)),E(o.__s,y.getDerivedStateFromProps(v,o.__s))),s=o.props,l=o.state,o.__v=t,p)y.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y.getDerivedStateFromProps==null&&v!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,b)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(o.props=v,o.state=o.__s,o.__d=!1),o.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,l,h)})}if(o.context=b,o.props=v,o.__P=e,P=d.__r,Z=0,"prototype"in y&&y.prototype.render){for(o.state=o.__s,o.__d=!1,P&&P(t),f=o.render(o.props,o.state,o.context),H=0;H<o._sb.length;H++)o.__h.push(o._sb[H]);o._sb=[]}else do o.__d=!1,P&&P(t),f=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++Z<25);o.state=o.__s,o.getChildContext!=null&&(_=E(E({},_),o.getChildContext())),p||o.getSnapshotBeforeUpdate==null||(h=o.getSnapshotBeforeUpdate(s,l)),A=f!=null&&f.type===G&&f.key==null?f.props.children:f,Ae(e,Array.isArray(A)?A:[A],t,n,_,i,r,c,u,a),o.base=t.__e,t.__h=null,o.__h.length&&c.push(o),x&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ct(n.__e,t,n,_,i,r,c,a);(f=d.diffed)&&f(t)}catch(N){t.__v=null,(a||r!=null)&&(t.__e=u,t.__h=!!a,r[r.indexOf(u)]=null),d.__e(N,t,n)}}function Re(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){d.__e(_,n.__v)}})}function ct(e,t,n,_,i,r,c,u){var a,f,o,p=n.props,s=t.props,l=t.type,h=0;if(l==="svg"&&(i=!0),r!=null){for(;h<r.length;h++)if((a=r[h])&&"setAttribute"in a==!!l&&(l?a.localName===l:a.nodeType===3)){e=a,r[h]=null;break}}if(e==null){if(l===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),r=null,u=!1}if(l===null)p===s||u&&e.data===s||(e.data=s);else{if(r=r&&F.call(e.childNodes),f=(p=n.props||z).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!u){if(r!=null)for(p={},h=0;h<e.attributes.length;h++)p[e.attributes[h].name]=e.attributes[h].value;(o||f)&&(o&&(f&&o.__html==f.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(it(e,s,p,i,u),o)t.__k=[];else if(h=t.props.children,Ae(e,Array.isArray(h)?h:[h],t,n,_,i&&l!=="foreignObject",r,c,r?r[0]:n.__k&&T(n,0),u),r!=null)for(h=r.length;h--;)r[h]!=null&&Te(r[h]);u||("value"in s&&(h=s.value)!==void 0&&(h!==e.value||l==="progress"&&!h||l==="option"&&h!==p.value)&&D(e,"value",h,p.value,!1),"checked"in s&&(h=s.checked)!==void 0&&h!==e.checked&&D(e,"checked",h,p.checked,!1))}return e}function Ue(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){d.__e(_,n)}}function We(e,t,n){var _,i;if(d.unmount&&d.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||Ue(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){d.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(i=0;i<_.length;i++)_[i]&&We(_[i],t,n||typeof e.type!="function");n||e.__e==null||Te(e.__e),e.__=e.__e=e.__d=void 0}function st(e,t,n){return this.constructor(e,n)}function lt(e,t,n){var _,i,r;d.__&&d.__(e,t),i=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],Q(t,e=(!_&&n||t).__k=Le(G,null,[e]),i||z,z,t.ownerSVGElement!==void 0,!_&&n?[n]:i?null:t.firstChild?F.call(t.childNodes):null,r,!_&&n?n:i?i.__e:t.firstChild,_),Re(r,e)}F=$e.slice,d={__e:function(e,t,n,_){for(var i,r,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,_||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},Pe=0,M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},n),this.props)),e&&E(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},M.prototype.render=G,S=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0;var ze=function(e,t,n,_){var i;t[0]=0;for(var r=1;r<t.length;r++){var c=t[r++],u=t[r]?(t[0]|=c?1:2,n[t[r++]]):t[++r];c===3?_[0]=u:c===4?_[1]=Object.assign(_[1]||{},u):c===5?(_[1]=_[1]||{})[t[++r]]=u:c===6?_[1][t[++r]]+=u+"":c?(i=e.apply(u,ze(e,u,n,["",null])),_.push(i),u[0]?t[0]|=2:(t[r-2]=0,t[r]=i)):_.push(u)}return _},oe=new Map;function at(e){var t=oe.get(this);return t||(t=new Map,oe.set(this,t)),(t=ze(this,t.get(e)||(t.set(e,t=function(n){for(var _,i,r=1,c="",u="",a=[0],f=function(s){r===1&&(s||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,s,c):r===3&&(s||c)?(a.push(3,s,c),r=2):r===2&&c==="..."&&s?a.push(4,s,0):r===2&&c&&!s?a.push(5,0,!0,c):r>=5&&((c||!s&&r===5)&&(a.push(r,0,c,i),r=6),s&&(a.push(r,s,0,i),r=6)),c=""},o=0;o<n.length;o++){o&&(r===1&&f(),f(o));for(var p=0;p<n[o].length;p++)_=n[o][p],r===1?_==="<"?(f(),a=[a],r=3):c+=_:r===4?c==="--"&&_===">"?(r=1,c=""):c=_+c[0]:u?_===u?u="":c+=_:_==='"'||_==="'"?u=_:_===">"?(f(),r=1):r&&(_==="="?(r=5,i=c,c=""):_==="/"&&(r<5||n[o][p+1]===">")?(f(),r===3&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):_===" "||_==="	"||_===`
`||_==="\r"?(f(),r=2):c+=_),r===3&&c==="!--"&&(r=4,a=a[0])}return f(),a}(e)),t),arguments,[])).length>1?t:t[0]}var R=at.bind(Le),Y,m,B,ie,K=0,Oe=[],U=[],ce=d.__b,se=d.__r,le=d.diffed,ae=d.__c,ue=d.unmount;function De(e,t){d.__h&&d.__h(m,e,K||t),K=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:U}),n.__[e]}function V(e){return K=1,ut(qe,e)}function ut(e,t,n){var _=De(Y++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):qe(void 0,t),function(u){var a=_.__N?_.__N[0]:_.__[0],f=_.t(a,u);a!==f&&(_.__N=[f,_.__[1]],_.__c.setState({}))}],_.__c=m,!m.u)){var i=function(u,a,f){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(s){return s.__c});if(o.every(function(s){return!s.__N}))return!r||r.call(this,u,a,f);var p=!1;return o.forEach(function(s){if(s.__N){var l=s.__[0];s.__=s.__N,s.__N=void 0,l!==s.__[0]&&(p=!0)}}),!(!p&&_.__c.props===u)&&(!r||r.call(this,u,a,f))};m.u=!0;var r=m.shouldComponentUpdate,c=m.componentWillUpdate;m.componentWillUpdate=function(u,a,f){if(this.__e){var o=r;r=void 0,i(u,a,f),r=o}c&&c.call(this,u,a,f)},m.shouldComponentUpdate=i}return _.__N||_.__}function fe(e,t){var n=De(Y++,3);!d.__s&&pt(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function ft(){for(var e;e=Oe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(X),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){m=null,ce&&ce(e)},d.__r=function(e){se&&se(e),Y=0;var t=(m=e.__c).__H;t&&(B===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=U,n.__N=n.i=void 0})):(t.__h.forEach(W),t.__h.forEach(X),t.__h=[])),B=m},d.diffed=function(e){le&&le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Oe.push(t)!==1&&ie===d.requestAnimationFrame||((ie=d.requestAnimationFrame)||dt)(ft)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==U&&(n.__=n.__V),n.i=void 0,n.__V=U})),B=m=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(_){return!_.__||X(_)})}catch(_){t.some(function(i){i.__h&&(i.__h=[])}),t=[],d.__e(_,n.__v)}}),ae&&ae(e,t)},d.unmount=function(e){ue&&ue(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{W(_)}catch(i){t=i}}),n.__H=void 0,t&&d.__e(t,n.__v))};var de=typeof requestAnimationFrame=="function";function dt(e){var t,n=function(){clearTimeout(_),de&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);de&&(t=requestAnimationFrame(n))}function W(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function X(e){var t=m;e.__c=e.__(),m=t}function pt(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function qe(e,t){return typeof t=="function"?t(e):t}function ht({onChange:e}){const[t,n]=V([]),[_,i]=V(),[r,c]=V();return fe(()=>{Promise.all([Xe(),J()]).then(([o,p])=>{n(o),i(p)});const f=me.changeStream.subscribe(c);return()=>f.unsubscribe()},[]),fe(()=>{var f,o;if((f=r==null?void 0:r.selectedPromptId)!=null&&f.newValue){const p=t==null?void 0:t.find(({id:s})=>{var l;return s===((l=r==null?void 0:r.selectedPromptId)==null?void 0:l.newValue)});i(p)}(o=r==null?void 0:r.prompts)!=null&&o.newValue&&n(r==null?void 0:r.prompts.newValue)},[r]),R`
    <div class="chat-gpt-wizard--select-wrapper">
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-500"
      >
        Select prompt
      </div>
      <select
        onChange=${f=>{const o=t.find(({id:s})=>s===f.target.value),p=o==null?void 0:o.id;p&&Je(p),i(o),e(o)}}
        class=${"chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm"}
        name="cars"
        id="cars"
      >
        <option value="" selected=${!(_!=null&&_.id)&&"selected"}></option>
        ${t.map(({name:f,id:o})=>R` <option
            value="${o}"
            selected=${(_==null?void 0:_.id)===o&&"selected"}
          >
            ${f}
          </option>`)}
      </select>
      ${(_==null?void 0:_.instructions)&&R`
        <div
          class="chat-gpt-wizard--select-instructions text-xs text-black/50 dark:text-white/50"
        >
          ${_.instructions}
        </div>
      `}
    </div>
  `}const vt=e=>{const t=/\[ignore:(.*?)\]/,n=e.match(t);return n&&n[1]},Fe=e=>{var _;const t=(_=e==null?void 0:e.innerHTML)==null?void 0:_.includes(C),n=vt(e==null?void 0:e.innerHTML);!e.dataset.chatGptWizard&&t&&n&&(e.dataset.chatGptWizard="true",e.innerHTML=rt(e.innerHTML,C,C,""),Qe(n).then(i=>{gt({prompt:i})}))},Ge=e=>{e.querySelectorAll(ge).forEach(t=>{Fe(t)})};async function mt(){if(Se())return;const t=w().parentElement.parentElement;if(!et()){const i=_t();i.classList.add(Ee),t.appendChild(i)}let n=document.createElement("div");n.classList.add(be);const _=document.querySelector("form");_.parentElement.insertBefore(n,_.parentElement.firstChild),lt(R`<${ht} onChange=${Be}/>`,n)}function Be(e){const t=w();!t||(t.placeholder=(e==null?void 0:e.placeholder)||"Send a message...")}function gt({prompt:e}={}){je();const t=w();if(t&&e){const n=t.parentElement.parentElement;let _=document.createElement("div");_.classList.add(ke,"text-center","text-xs","text-black/50","dark:text-white/50"),n.insertBefore(_,n.lastElementChild.nextSibling),_.innerText="ChatGptWizard prompt: "+e.name,Be(e)}}function Ve(){const e=Se();e&&e.remove()}function je(){const e=tt();e&&e.remove()}let pe,he,$;J().then(e=>{$=e});me.changeStream.subscribe(({selectedPromptId:e})=>{e&&J().then(t=>{$=t})});function Ke(){const e=w(),t=we();if(Ve(),!e||!$||t.length>0)return;const n=e.value,_=$.prompt;e.value=_?`${C}[ignore:${$.id}]
${_}${C}${n}`:n}function yt(e){if(pe===e)return;function t(n){n.key==="Enter"&&!n.shiftKey&&Ke()}e.addEventListener("keydown",t,!0),pe=e}function bt(e){if(he===e)return;function t(n){Ke()}e.addEventListener("click",t,!0),he=e}console.info("ChatGPT Prompt Wizard loaded");const Et=()=>{const e=xe(),t=w();!e||!t||(bt(e),yt(t))};async function q(){const e=xe(),t=w(),n=we();if(console.log("ChatGPT Prompt Wizard updateUI",{button:e,textarea:t,chatMessages:n}),Ge(k()),n.length>0){Ve();return}Et(),e&&t&&(je(),await mt())}q();const kt=k(),ve=document.querySelector("form");try{new MutationObserver(()=>{console.log("ChatGPT Prompt Wizard rootEl mutation"),q()}).observe(kt,{childList:!0}),ve&&new MutationObserver(()=>{console.log("ChatGPT Prompt Wizard rootEl mutation1"),q()}).observe(ve,{childList:!0,subtree:!0})}catch(e){console.info(`ChatGptWizard error --> Could not update UI:
`,e.stack)}window.addEventListener("hashchange",function(e){q()});const St=new MutationObserver(e=>{for(const t of e)t.type==="childList"&&Array.from(t.addedNodes).forEach(_=>{_.matches&&_.matches(ye)&&Ge(_),_.matches&&_.matches(ge)&&Fe(_)})});St.observe(document,{childList:!0,subtree:!0});