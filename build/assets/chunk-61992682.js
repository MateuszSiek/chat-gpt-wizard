import{b as Ue,l as ze,c as Re,s as We}from"./chunk-0aa089d8.js";const Oe="form textarea+button",De="form textarea",Fe=".chat-gpt-wizard",ue=".items-start:not(.scrollbar-trigger)",fe="main div.group";function x(){return document.querySelector('div[id="__next"]')}function Ie(){return x().querySelector(Fe)}function pe(){return x().querySelector(Oe)}function V(){return x().querySelector(De)}function qe(){return[...x().querySelectorAll(fe)]}var Ge=`.chat-gpt-wizard--select-wrapper{position:absolute;top:0;left:0;width:100%;transform:translateY(calc(-4px - 100%));text-align:center}.chat-gpt-wizard--select-wrapper select{border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem}.dark .chat-gpt-wizard--select-wrapper select{background-color:#40414f;border-color:#20212380}.light .chat-gpt-wizard--select-wrapper select{border-color:#0000001a}
`;const $="\u200F\u200F\u200E \u200E";function Be(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),_=document.createElement("style");return _.textContent=Ge,t.append(_),e}function je(e,t,_,o){const c=new RegExp(t+".*?"+_,"gs");return e.replace(c,o)}function de(e){const t=V();if(!t)return;const _=t.value,o=e();t.value=o?$+o+$+_:_}function Ve(e,t){const _=e.onkeydown;function o(c){c.key==="Enter"&&(console.log("Code to execute before the original keydown event"),de(t)),_&&_.call(e,c)}e.onkeydown=o,e.dataset.chatGptWizard="true",console.log("Textarea hijacked",e)}function Ke(e,t){const _=e.onclick;function o(c){console.log("Code to execute before the original onclick event"),de(t),_&&_.call(e,c)}e.onclick=o,e.dataset.chatGptWizard="true",console.log("Button hijacked",e)}var D,f,he,w,J,ve,q,R={},me=[],Xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var _ in t)e[_]=t[_];return e}function ge(e){var t=e.parentNode;t&&t.removeChild(e)}function ye(e,t,_){var o,c,n,i={};for(n in t)n=="key"?o=t[n]:n=="ref"?c=t[n]:i[n]=t[n];if(arguments.length>2&&(i.children=arguments.length>3?D.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return L(e,i,o,c,null)}function L(e,t,_,o,c){var n={type:e,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:c==null?++he:c};return c==null&&f.vnode!=null&&f.vnode(n),n}function F(e){return e.children}function M(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?T(e):null}function ke(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return ke(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!W.__r++||J!==f.debounceRendering)&&((J=f.debounceRendering)||ve)(W)}function W(){var e,t,_,o,c,n,i,u;for(w.sort(q);e=w.shift();)e.__d&&(t=w.length,o=void 0,c=void 0,i=(n=(_=e).__v).__e,(u=_.__P)&&(o=[],(c=E({},n)).__v=n.__v+1,K(u,n,c,_.__n,u.ownerSVGElement!==void 0,n.__h!=null?[i]:null,o,i==null?T(n):i,n.__h),xe(o,n),n.__e!=i&&ke(n)),w.length>t&&w.sort(q));W.__r=0}function be(e,t,_,o,c,n,i,u,a,p){var r,h,l,s,d,S,v,g=o&&o.__k||me,k=g.length;for(_.__k=[],r=0;r<t.length;r++)if((s=_.__k[r]=(s=t[r])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?L(null,s,null,null,s):Array.isArray(s)?L(F,{children:s},null,null,null):s.__b>0?L(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=_,s.__b=_.__b+1,(l=g[r])===null||l&&s.key==l.key&&s.type===l.type)g[r]=void 0;else for(h=0;h<k;h++){if((l=g[h])&&s.key==l.key&&s.type===l.type){g[h]=void 0;break}l=null}K(e,s,l=l||R,c,n,i,u,a,p),d=s.__e,(h=s.ref)&&l.ref!=h&&(v||(v=[]),l.ref&&v.push(l.ref,null,s),v.push(h,s.__c||d,s)),d!=null?(S==null&&(S=d),typeof s.type=="function"&&s.__k===l.__k?s.__d=a=Ee(s,a,e):a=we(e,s,l,g,d,a),typeof _.type=="function"&&(_.__d=a)):a&&l.__e==a&&a.parentNode!=e&&(a=T(l))}for(_.__e=S,r=k;r--;)g[r]!=null&&(typeof _.type=="function"&&g[r].__e!=null&&g[r].__e==_.__d&&(_.__d=Se(o).nextSibling),$e(g[r],g[r]));if(v)for(r=0;r<v.length;r++)Ce(v[r],v[++r],v[++r])}function Ee(e,t,_){for(var o,c=e.__k,n=0;c&&n<c.length;n++)(o=c[n])&&(o.__=e,t=typeof o.type=="function"?Ee(o,t,_):we(_,o,o,c,o.__e,t));return t}function we(e,t,_,o,c,n){var i,u,a;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(_==null||c!=n||c.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(c),i=null;else{for(u=n,a=0;(u=u.nextSibling)&&a<o.length;a+=1)if(u==c)break e;e.insertBefore(c,n),i=n}return i!==void 0?i:c.nextSibling}function Se(e){var t,_,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(o=Se(_)))return o}return null}function Ye(e,t,_,o,c){var n;for(n in _)n==="children"||n==="key"||n in t||O(e,n,null,_[n],o);for(n in t)c&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||_[n]===t[n]||O(e,n,t[n],_[n],o)}function Z(e,t,_){t[0]==="-"?e.setProperty(t,_==null?"":_):e[t]=_==null?"":typeof _!="number"||Xe.test(t)?_:_+"px"}function O(e,t,_,o,c){var n;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)_&&t in _||Z(e.style,t,"");if(_)for(t in _)o&&_[t]===o[t]||Z(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=_,_?o||e.addEventListener(t,n?te:ee,n):e.removeEventListener(t,n?te:ee,n);else if(t!=="dangerouslySetInnerHTML"){if(c)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_==null?"":_;break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function ee(e){return this.l[e.type+!1](f.event?f.event(e):e)}function te(e){return this.l[e.type+!0](f.event?f.event(e):e)}function K(e,t,_,o,c,n,i,u,a){var p,r,h,l,s,d,S,v,g,k,P,C,Y,H,A,y=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(a=_.__h,u=t.__e=_.__e,t.__h=null,n=[u]),(p=f.__b)&&p(t);try{e:if(typeof y=="function"){if(v=t.props,g=(p=y.contextType)&&o[p.__c],k=p?g?g.props.value:p.__:o,_.__c?S=(r=t.__c=_.__c).__=r.__E:("prototype"in y&&y.prototype.render?t.__c=r=new y(v,k):(t.__c=r=new M(v,k),r.constructor=y,r.render=Qe),g&&g.sub(r),r.props=v,r.state||(r.state={}),r.context=k,r.__n=o,h=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=E({},r.__s)),E(r.__s,y.getDerivedStateFromProps(v,r.__s))),l=r.props,s=r.state,r.__v=t,h)y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(y.getDerivedStateFromProps==null&&v!==l&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,k),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,k)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(r.props=v,r.state=r.__s,r.__d=!1),r.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(N){N&&(N.__=t)}),P=0;P<r._sb.length;P++)r.__h.push(r._sb[P]);r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(l,s,d)})}if(r.context=k,r.props=v,r.__P=e,C=f.__r,Y=0,"prototype"in y&&y.prototype.render){for(r.state=r.__s,r.__d=!1,C&&C(t),p=r.render(r.props,r.state,r.context),H=0;H<r._sb.length;H++)r.__h.push(r._sb[H]);r._sb=[]}else do r.__d=!1,C&&C(t),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Y<25);r.state=r.__s,r.getChildContext!=null&&(o=E(E({},o),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(d=r.getSnapshotBeforeUpdate(l,s)),A=p!=null&&p.type===F&&p.key==null?p.props.children:p,be(e,Array.isArray(A)?A:[A],t,_,o,c,n,i,u,a),r.base=t.__e,t.__h=null,r.__h.length&&i.push(r),S&&(r.__E=r.__=null),r.__e=!1}else n==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=Je(_.__e,t,_,o,c,n,i,a);(p=f.diffed)&&p(t)}catch(N){t.__v=null,(a||n!=null)&&(t.__e=u,t.__h=!!a,n[n.indexOf(u)]=null),f.__e(N,t,_)}}function xe(e,t){f.__c&&f.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){f.__e(o,_.__v)}})}function Je(e,t,_,o,c,n,i,u){var a,p,r,h=_.props,l=t.props,s=t.type,d=0;if(s==="svg"&&(c=!0),n!=null){for(;d<n.length;d++)if((a=n[d])&&"setAttribute"in a==!!s&&(s?a.localName===s:a.nodeType===3)){e=a,n[d]=null;break}}if(e==null){if(s===null)return document.createTextNode(l);e=c?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,l.is&&l),n=null,u=!1}if(s===null)h===l||u&&e.data===l||(e.data=l);else{if(n=n&&D.call(e.childNodes),p=(h=_.props||R).dangerouslySetInnerHTML,r=l.dangerouslySetInnerHTML,!u){if(n!=null)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Ye(e,l,h,c,u),r)t.__k=[];else if(d=t.props.children,be(e,Array.isArray(d)?d:[d],t,_,o,c&&s!=="foreignObject",n,i,n?n[0]:_.__k&&T(_,0),u),n!=null)for(d=n.length;d--;)n[d]!=null&&ge(n[d]);u||("value"in l&&(d=l.value)!==void 0&&(d!==e.value||s==="progress"&&!d||s==="option"&&d!==h.value)&&O(e,"value",d,h.value,!1),"checked"in l&&(d=l.checked)!==void 0&&d!==e.checked&&O(e,"checked",d,h.checked,!1))}return e}function Ce(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(o){f.__e(o,_)}}function $e(e,t,_){var o,c;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Ce(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){f.__e(n,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(c=0;c<o.length;c++)o[c]&&$e(o[c],t,_||typeof e.type!="function");_||e.__e==null||ge(e.__e),e.__=e.__e=e.__d=void 0}function Qe(e,t,_){return this.constructor(e,_)}function Ze(e,t,_){var o,c,n;f.__&&f.__(e,t),c=(o=typeof _=="function")?null:_&&_.__k||t.__k,n=[],K(t,e=(!o&&_||t).__k=ye(F,null,[e]),c||R,R,t.ownerSVGElement!==void 0,!o&&_?[_]:c?null:t.firstChild?D.call(t.childNodes):null,n,!o&&_?_:c?c.__e:t.firstChild,o),xe(n,e)}D=me.slice,f={__e:function(e,t,_,o){for(var c,n,i;t=t.__;)if((c=t.__c)&&!c.__)try{if((n=c.constructor)&&n.getDerivedStateFromError!=null&&(c.setState(n.getDerivedStateFromError(e)),i=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(e,o||{}),i=c.__d),i)return c.__E=c}catch(u){e=u}throw e}},he=0,M.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},_),this.props)),e&&E(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),Q(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},M.prototype.render=F,w=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0;var Te=function(e,t,_,o){var c;t[0]=0;for(var n=1;n<t.length;n++){var i=t[n++],u=t[n]?(t[0]|=i?1:2,_[t[n++]]):t[++n];i===3?o[0]=u:i===4?o[1]=Object.assign(o[1]||{},u):i===5?(o[1]=o[1]||{})[t[++n]]=u:i===6?o[1][t[++n]]+=u+"":i?(c=e.apply(u,Te(e,u,_,["",null])),o.push(c),u[0]?t[0]|=2:(t[n-2]=0,t[n]=c)):o.push(u)}return o},_e=new Map;function et(e){var t=_e.get(this);return t||(t=new Map,_e.set(this,t)),(t=Te(this,t.get(e)||(t.set(e,t=function(_){for(var o,c,n=1,i="",u="",a=[0],p=function(l){n===1&&(l||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,l,i):n===3&&(l||i)?(a.push(3,l,i),n=2):n===2&&i==="..."&&l?a.push(4,l,0):n===2&&i&&!l?a.push(5,0,!0,i):n>=5&&((i||!l&&n===5)&&(a.push(n,0,i,c),n=6),l&&(a.push(n,l,0,c),n=6)),i=""},r=0;r<_.length;r++){r&&(n===1&&p(),p(r));for(var h=0;h<_[r].length;h++)o=_[r][h],n===1?o==="<"?(p(),a=[a],n=3):i+=o:n===4?i==="--"&&o===">"?(n=1,i=""):i=o+i[0]:u?o===u?u="":i+=o:o==='"'||o==="'"?u=o:o===">"?(p(),n=1):n&&(o==="="?(n=5,c=i,i=""):o==="/"&&(n<5||_[r][h+1]===">")?(p(),n===3&&(a=a[0]),n=a,(a=a[0]).push(2,0,n),n=0):o===" "||o==="	"||o===`
`||o==="\r"?(p(),n=2):i+=o),n===3&&i==="!--"&&(n=4,a=a[0])}return p(),a}(e)),t),arguments,[])).length>1?t:t[0]}var G=et.bind(ye),X,m,I,ne,B=0,Pe=[],U=[],oe=f.__b,re=f.__r,ce=f.diffed,ie=f.__c,le=f.unmount;function He(e,t){f.__h&&f.__h(m,e,B||t),B=0;var _=m.__H||(m.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:U}),_.__[e]}function se(e){return B=1,tt(Ae,e)}function tt(e,t,_){var o=He(X++,2);if(o.t=e,!o.__c&&(o.__=[_?_(t):Ae(void 0,t),function(u){var a=o.__N?o.__N[0]:o.__[0],p=o.t(a,u);a!==p&&(o.__N=[p,o.__[1]],o.__c.setState({}))}],o.__c=m,!m.u)){var c=function(u,a,p){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(l){return l.__c});if(r.every(function(l){return!l.__N}))return!n||n.call(this,u,a,p);var h=!1;return r.forEach(function(l){if(l.__N){var s=l.__[0];l.__=l.__N,l.__N=void 0,s!==l.__[0]&&(h=!0)}}),!(!h&&o.__c.props===u)&&(!n||n.call(this,u,a,p))};m.u=!0;var n=m.shouldComponentUpdate,i=m.componentWillUpdate;m.componentWillUpdate=function(u,a,p){if(this.__e){var r=n;n=void 0,c(u,a,p),n=r}i&&i.call(this,u,a,p)},m.shouldComponentUpdate=c}return o.__N||o.__}function _t(e,t){var _=He(X++,3);!f.__s&&rt(_.__H,t)&&(_.__=e,_.i=t,m.__H.__h.push(_))}function nt(){for(var e;e=Pe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(j),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){m=null,oe&&oe(e)},f.__r=function(e){re&&re(e),X=0;var t=(m=e.__c).__H;t&&(I===m?(t.__h=[],m.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=U,_.__N=_.i=void 0})):(t.__h.forEach(z),t.__h.forEach(j),t.__h=[])),I=m},f.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pe.push(t)!==1&&ne===f.requestAnimationFrame||((ne=f.requestAnimationFrame)||ot)(nt)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==U&&(_.__=_.__V),_.i=void 0,_.__V=U})),I=m=null},f.__c=function(e,t){t.some(function(_){try{_.__h.forEach(z),_.__h=_.__h.filter(function(o){return!o.__||j(o)})}catch(o){t.some(function(c){c.__h&&(c.__h=[])}),t=[],f.__e(o,_.__v)}}),ie&&ie(e,t)},f.unmount=function(e){le&&le(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(o){try{z(o)}catch(c){t=c}}),_.__H=void 0,t&&f.__e(t,_.__v))};var ae=typeof requestAnimationFrame=="function";function ot(e){var t,_=function(){clearTimeout(o),ae&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(_,100);ae&&(t=requestAnimationFrame(_))}function z(e){var t=m,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),m=t}function j(e){var t=m;e.__c=e.__(),m=t}function rt(e,t){return!e||e.length!==t.length||t.some(function(_,o){return _!==e[o]})}function Ae(e,t){return typeof t=="function"?t(e):t}console.info("chrome-ext template-react-ts content scrip");let b;Ue().then(e=>{b=e});ze.valueStream.subscribe(e=>{});const ct=()=>{const e=pe(),t=V();!e||!t||(e.dataset.chatGptWizard||Ke(e,()=>b&&b.prompt),t.dataset.chatGptWizard||Ve(t,()=>b&&b.prompt))},Ne=e=>{var _;const t=(_=e==null?void 0:e.innerHTML)==null?void 0:_.includes($);!e.dataset.chatGptWizard&&t&&(e.dataset.chatGptWizard="true",e.innerHTML=je(e.innerHTML,$,$,""))},Le=e=>{e.querySelectorAll(ue).forEach(t=>{Ne(t)})},it=new MutationObserver(e=>{for(const t of e)t.type==="childList"&&Array.from(t.addedNodes).forEach(o=>{o.matches&&o.matches(fe)&&Le(o),o.matches&&o.matches(ue)&&Ne(o)})});it.observe(document,{childList:!0,subtree:!0});const lt=()=>{const[e,t]=se([]),[_,o]=se(b&&b.id);return _t(()=>{Re().then(n=>{t(n)})},[]),G`
		<div class="chat-gpt-wizard--select-wrapper">
			<select onChange=${n=>{b=e.find(({id:u})=>u===n.target.value);const i=b&&b.id;i&&We(i),o(i)}} class="chat-gpt-wizard--select" name="cars" id="cars">
				<option value="" selected=${!_&&"selected"}></option>
				${e.map(({name:n,id:i})=>G`
					<option value="${i}" selected=${_===i&&"selected"}>${n}</option>`)}
			</select>
		</div>`};function st(e){Ze(G`
		<${lt}/>`,e)}async function Me(){const e=Ie(),t=pe(),_=V();if(qe().length>0){e&&e.remove();return}if(Le(x()),ct(),!e&&t&&_){const c=_.parentElement.parentElement,n=Be();n.classList.add("chat-gpt-wizard--shadow-root"),c.appendChild(n);let i=document.querySelector(".chat-gpt-wizard");i&&i.remove(),i=document.createElement("div"),i.classList.add("chat-gpt-wizard--shadow-root"),_.parentElement.insertBefore(i,_.parentElement.firstChild),st(i)}}Me();const at=x();try{new MutationObserver(()=>{Me()}).observe(at,{childList:!0})}catch(e){console.info(`ChatGptWizard error --> Could not update UI:
`,e.stack)}
