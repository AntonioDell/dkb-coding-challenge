import{a as q,r as C,t as K,b as J,e as L,w as O,u as y,f as Q,h as G,i as $,j as X,k as z,l as V,o as m,m as w,p as A,q as P,s as T,F as H,v as M,c as F,x as Y,y as E,n as Z,g as tt,z as et,A as j,B as U,C as st}from"./entry.be87e3a3.js";const nt=()=>null;function rt(...r){var f;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??nt,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=q(),i=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],c=()=>i()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:C(i()??((f=t.default)==null?void 0:f.call(t))??null),pending:C(!c()),error:K(a.payload._errors,s)});const o={...a._asyncData[s]};o.refresh=o.execute=(u={})=>{if(a._asyncDataPromises[s]){if(u.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(u._initial&&c())return i();o.pending.value=!0;const g=new Promise((p,h)=>{try{p(e(a))}catch(k){h(k)}}).then(p=>{if(g.cancelled)return a._asyncDataPromises[s];let h=p;t.transform&&(h=t.transform(p)),t.pick&&(h=at(h,t.pick)),o.data.value=h,o.error.value=null}).catch(p=>{var h;if(g.cancelled)return a._asyncDataPromises[s];o.error.value=p,o.data.value=y(((h=t.default)==null?void 0:h.call(t))??null)}).finally(()=>{g.cancelled||(o.pending.value=!1,a.payload.data[s]=o.data.value,o.error.value&&(a.payload._errors[s]=Q(o.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const l=()=>o.refresh({_initial:!0}),d=t.server!==!1&&a.payload.serverRendered;{const u=G();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const p=u._nuxtOnBeforeMountCbs;u&&(J(()=>{p.forEach(h=>{h()}),p.splice(0,p.length)}),L(()=>p.splice(0,p.length)))}d&&a.isHydrating&&c()?o.pending.value=!1:u&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?u._nuxtOnBeforeMountCbs.push(l):t.immediate&&l(),t.watch&&O(t.watch,()=>o.refresh());const g=a.hook("app:data:refresh",p=>{if(!p||p.includes(s))return o.refresh()});u&&L(g)}const _=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(_,o),_}function at(r,n){const s={};for(const e of n)s[e]=r[e];return s}const ot={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function it(r,n={}){n={...ot,...n};const s=I(n);return s.dispatch(r),s.toString()}function I(r){const n=[];let s=[];const e=t=>{n.push(t)};return{toString(){return n.join("")},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const a=/\[object (.*)]/i,i=Object.prototype.toString.call(t),c=a.exec(i),o=c?c[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let l=null;if((l=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this["_"+o]?this["_"+o](t):r.ignoreUnknown||this._unkown(t,o);else{let d=Object.keys(t);r.unorderedObjects&&(d=d.sort()),r.respectType!==!1&&!N(t)&&d.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(d=d.filter(function(_){return!r.excludeKeys(_)})),e("object:"+d.length+":");for(const _ of d)this.dispatch(_),e(":"),r.excludeValues||this.dispatch(t[_]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:r.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const o of t)this.dispatch(o);return}const i=[],c=t.map(o=>{const l=I(r);return l.dispatch(o),i.push(l.getContext()),l.toString()});return s=[...s,...i],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),N(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function N(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class D{constructor(n,s){n=this.words=n||[],this.sigBytes=s!==void 0?s:n.length*4}toString(n){return(n||ct).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const ct={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},lt={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<r.sigBytes*8;o++)s.push(n.charAt(c>>>6*(3-o)&63))}return s.join("")}},ut={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new D(s,n)}},dt={parse(r){return ut.parse(unescape(encodeURIComponent(r)))}};class ft{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new D,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=dt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new D(s,a)}}class pt extends ft{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const ht=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],_t=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class yt extends pt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new D([...ht])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],i=e[2],c=e[3],o=e[4],l=e[5],d=e[6],_=e[7];for(let f=0;f<64;f++){if(f<16)B[f]=n[s+f]|0;else{const S=B[f-15],x=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,b=B[f-2],W=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;B[f]=x+B[f-7]+W+B[f-16]}const u=o&l^~o&d,g=t&a^t&i^a&i,p=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),h=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),k=_+h+u+_t[f]+B[f],v=p+g;_=d,d=l,l=o,o=c+k|0,c=i,i=a,a=t,t=k+v|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+c|0,e[4]=e[4]+o|0,e[5]=e[5]+l|0,e[6]=e[6]+d|0,e[7]=e[7]+_|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function mt(r){return new yt().finalize(r).toString(lt)}function gt(r,n={}){const s=typeof r=="string"?r:it(r,n);return mt(s).slice(0,10)}function vt(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=e.key||gt([t,y(e.baseURL),typeof r=="string"?r:"",y(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const i=a===t?"$f"+a:a,c=$(()=>{let x=r;return typeof x=="function"&&(x=x()),y(x)});if(!e.baseURL&&typeof c.value=="string"&&c.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:l,default:d,transform:_,pick:f,watch:u,immediate:g,...p}=e,h=X({...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:o,lazy:l,default:d,transform:_,pick:f,immediate:g,watch:u===!1?[]:[h,c,...u||[]]};let v;return rt(i,()=>{var b;return(b=v==null?void 0:v.abort)==null||b.call(v),v=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(c.value,{signal:v.signal,...h})},k)}const bt=z({__name:"credit-card",props:{description:{},id:{},color:{}},setup(r){const n=r,{t:s}=V(),e=$(()=>s(n.description));return(t,a)=>(m(),w("div",{role:"button",style:T({backgroundColor:t.color}),class:"flex flex-col justify-start gap-4 p-4 rounded-lg h-40"},[A("div",null,P(e.value),1),A("div",null,P(t.id),1)],4))}}),wt={class:"flex justify-between"},xt=z({__name:"credit-card-list",props:{cards:{},modelValue:{}},emits:["update:modelValue"],setup(r,{emit:n}){const e=C(r.modelValue),t=a=>{e.value!==a&&(e.value=a,n("update:modelValue",e.value))};return(a,i)=>{const c=bt;return m(),w("div",wt,[(m(!0),w(H,null,M(a.cards,(o,l)=>(m(),F(c,Y(o,{onClick:d=>t(o.id),"data-test-id":`card-${o.id}`,class:"w-60"}),null,16,["onClick","data-test-id"]))),256))])}}});const Bt=E(xt,[["__scopeId","data-v-c2b2f66d"]]),Ct={class:"money-suffix flex flex-col gap-2"},kt={for:"amount",class:"font-medium"},St=["placeholder","value"],At=z({__name:"amount-filter",props:{modelValue:{}},emits:["update:modelValue"],setup(r,{emit:n}){const s=t=>{n("update:modelValue",t.target.value)},{t:e}=V();return(t,a)=>(m(),w("div",Ct,[A("label",kt,P(y(e)("Amount Filter")),1),A("input",{class:"border-black border-2 rounded-xl p-4",name:"amount",placeholder:y(e)("Amount"),"data-test-id":"input",value:t.modelValue,onInput:s,type:"number"},null,40,St)]))}}),Dt=z({__name:"transaction",props:{amount:{},description:{},color:{}},setup(r){const n=r,{locale:s}=V(),e=$(()=>Number(n.amount.toFixed(2)).toLocaleString(s.value)+"€");return(t,a)=>(m(),w("div",{class:"flex justify-between p-4 rounded-lg",style:T({backgroundColor:t.color})},[A("div",null,P(t.description),1),A("div",null,P(e.value),1)],4))}}),zt={class:"min-height flex flex-col gap-4 overflow-scroll"},Pt=z({__name:"transaction-list",props:{transactions:{}},setup(r){return(n,s)=>{const e=Dt;return m(),w("div",zt,[(m(!0),w(H,null,M(n.transactions,t=>(m(),F(e,Z(tt(t)),null,16))),256))])}}});const $t=E(Pt,[["__scopeId","data-v-2feaee32"]]);function R(r){let n,s=r[0],e=1;for(;e<r.length;){const t=r[e],a=r[e+1];if(e+=2,(t==="optionalAccess"||t==="optionalCall")&&s==null)return;t==="access"||t==="optionalAccess"?(n=s,s=a(s)):(t==="call"||t==="optionalCall")&&(s=a((...i)=>s.call(n,...i)),n=void 0)}return s}function Ft(r,n,s){const e=["lightgrey","lightblue"],t=$(()=>R([r,"access",i=>i.value,"optionalAccess",i=>i.length])?r.value.map((i,c)=>({...i,color:e[c]})):[]),a=C([]);return O([n],()=>{if(!n.value.length||!s.value){a.value=[];return}a.value=n.value.map(i=>{const c=R([t,"access",o=>o.value,"access",o=>o.find,"call",o=>o(l=>l.id===s.value),"optionalAccess",o=>o.color])||"";return{...i,color:c}})}),{coloredCards:t,coloredTransactions:a}}function Ot(r){let n,s=r[0],e=1;for(;e<r.length;){const t=r[e],a=r[e+1];if(e+=2,(t==="optionalAccess"||t==="optionalCall")&&s==null)return;t==="access"||t==="optionalAccess"?(n=s,s=a(s)):(t==="call"||t==="optionalCall")&&(s=a((...i)=>s.call(n,...i)),n=void 0)}return s}const Vt={class:"container"},jt=z({__name:"index",setup(r){const{data:n}=vt("/api/credit-cards","$pqtWcjQkdb"),s=C([]),e=C(""),{coloredCards:t,coloredTransactions:a}=Ft(n,s,e),i=C(""),c=$(()=>i.value?{amount:`gte ${Number(i.value)}`}:null);return et(()=>{e.value&&(i.value="")}),O([c,e],async()=>{if(!e.value){s.value=[];return}const o=await $fetch(`/api/credit-cards/${e.value}/transactions`,{query:{...c.value}});s.value=o||[]}),(o,l)=>{const d=Bt,_=At,f=$t;return m(),w("div",Vt,[Ot([y,"call",u=>u(n),"optionalAccess",u=>u.length])?(m(),F(d,{key:0,cards:y(t),modelValue:y(e),"onUpdate:modelValue":l[0]||(l[0]=u=>j(e)?e.value=u:null)},null,8,["cards","modelValue"])):U("",!0),st(_,{modelValue:y(i),"onUpdate:modelValue":l[1]||(l[1]=u=>j(i)?i.value=u:null)},null,8,["modelValue"]),y(s).length?(m(),F(f,{key:1,transactions:y(a)},null,8,["transactions"])):U("",!0)])}}});export{jt as default};