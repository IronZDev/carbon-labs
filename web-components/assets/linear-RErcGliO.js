import{x as hn,y as T,z as U,A as Y,B as ln}from"./timer-CN_v9RCa.js";import{i as mn}from"./init-Dmth1JHB.js";function F(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function dn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function _(n){let t,e,r;n.length!==2?(t=F,e=(u,c)=>F(n(u),c),r=(u,c)=>n(u)-c):(t=n===F||n===dn?n:gn,e=n,r=n);function i(u,c,a=0,m=u.length){if(a<m){if(t(c,c)!==0)return m;do{const s=a+m>>>1;e(u[s],c)<0?a=s+1:m=s}while(a<m)}return a}function f(u,c,a=0,m=u.length){if(a<m){if(t(c,c)!==0)return m;do{const s=a+m>>>1;e(u[s],c)<=0?a=s+1:m=s}while(a<m)}return a}function o(u,c,a=0,m=u.length){const s=i(u,c,a,m-1);return s>a&&r(u[s-1],c)>-r(u[s],c)?s-1:s}return{left:i,center:o,right:f}}function gn(){return 0}function yn(n){return n===null?NaN:+n}function*Kn(n,t){if(t===void 0)for(let e of n)e!=null&&(e=+e)>=e&&(yield e);else{let e=-1;for(let r of n)(r=t(r,++e,n))!=null&&(r=+r)>=r&&(yield r)}}const nn=_(F),Mn=nn.right,Qn=nn.left;_(yn).center;const pn=Math.sqrt(50),wn=Math.sqrt(10),Nn=Math.sqrt(2);function R(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),f=r/Math.pow(10,i),o=f>=pn?10:f>=wn?5:f>=Nn?2:1;let u,c,a;return i<0?(a=Math.pow(10,-i)/o,u=Math.round(n*a),c=Math.round(t*a),u/a<n&&++u,c/a>t&&--c,a=-a):(a=Math.pow(10,i)*o,u=Math.round(n/a),c=Math.round(t/a),u*a<n&&++u,c*a>t&&--c),c<u&&.5<=e&&e<2?R(n,t,e*2):[u,c,a]}function kn(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,f,o]=r?R(t,n,e):R(n,t,e);if(!(f>=i))return[];const u=f-i+1,c=new Array(u);if(r)if(o<0)for(let a=0;a<u;++a)c[a]=(f-a)/-o;else for(let a=0;a<u;++a)c[a]=(f-a)*o;else if(o<0)for(let a=0;a<u;++a)c[a]=(i+a)/-o;else for(let a=0;a<u;++a)c[a]=(i+a)*o;return c}function q(n,t,e){return t=+t,n=+n,e=+e,R(n,t,e)[2]}function xn(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?q(t,n,e):q(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function An(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function E(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function v(n){return n=E(Math.abs(n)),n?n[1]:NaN}function vn(n,t){return function(e,r){for(var i=e.length,f=[],o=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),f.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[o=(o+1)%n.length];return f.reverse().join(t)}}function Sn(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var bn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function D(n){if(!(t=bn.exec(n)))throw new Error("invalid format: "+n);var t;return new C({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}D.prototype=C.prototype;function C(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}C.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function jn(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var tn;function zn(n,t){var e=E(n,t);if(!e)return n+"";var r=e[0],i=e[1],f=i-(tn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return f===o?r:f>o?r+new Array(f-o+1).join("0"):f>0?r.slice(0,f)+"."+r.slice(f):"0."+new Array(1-f).join("0")+E(n,Math.max(0,t+f-1))[0]}function Z(n,t){var e=E(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const H={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:An,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Z(n*100,t),r:Z,s:zn,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function J(n){return n}var K=Array.prototype.map,Q=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Pn(n){var t=n.grouping===void 0||n.thousands===void 0?J:vn(K.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",f=n.numerals===void 0?J:Sn(K.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function a(s){s=D(s);var l=s.fill,p=s.align,y=s.sign,S=s.symbol,k=s.zero,b=s.width,L=s.comma,w=s.precision,G=s.trim,d=s.type;d==="n"?(L=!0,d="g"):H[d]||(w===void 0&&(w=12),G=!0,d="g"),(k||l==="0"&&p==="=")&&(k=!0,l="0",p="=");var fn=S==="$"?e:S==="#"&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",cn=S==="$"?r:/[%p]/.test(d)?o:"",O=H[d],sn=/[defgprs%]/.test(d);w=w===void 0?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function V(h){var N=fn,g=cn,x,X,j;if(d==="c")g=O(h)+g,h="";else{h=+h;var z=h<0||1/h<0;if(h=isNaN(h)?c:O(Math.abs(h),w),G&&(h=jn(h)),z&&+h==0&&y!=="+"&&(z=!1),N=(z?y==="("?y:u:y==="-"||y==="("?"":y)+N,g=(d==="s"?Q[8+tn/3]:"")+g+(z&&y==="("?")":""),sn){for(x=-1,X=h.length;++x<X;)if(j=h.charCodeAt(x),48>j||j>57){g=(j===46?i+h.slice(x+1):h.slice(x))+g,h=h.slice(0,x);break}}}L&&!k&&(h=t(h,1/0));var P=N.length+h.length+g.length,M=P<b?new Array(b-P+1).join(l):"";switch(L&&k&&(h=t(M+h,M.length?b-g.length:1/0),M=""),p){case"<":h=N+h+g+M;break;case"=":h=N+M+h+g;break;case"^":h=M.slice(0,P=M.length>>1)+N+h+g+M.slice(P);break;default:h=M+N+h+g;break}return f(h)}return V.toString=function(){return s+""},V}function m(s,l){var p=a((s=D(s),s.type="f",s)),y=Math.max(-8,Math.min(8,Math.floor(v(l)/3)))*3,S=Math.pow(10,-y),k=Q[8+y/3];return function(b){return p(S*b)+k}}return{format:a,formatPrefix:m}}var $,rn,en;$n({thousands:",",grouping:[3],currency:["$",""]});function $n(n){return $=Pn(n),rn=$.format,en=$.formatPrefix,$}function Fn(n){return Math.max(0,-v(Math.abs(n)))}function Rn(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(v(t)/3)))*3-v(Math.abs(n)))}function En(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,v(t)-v(n))+1}function an(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(f){for(i=0;i<e;++i)r[i]=n[i]*(1-f)+t[i]*f;return r}}function on(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Wn(n,t){return(on(t)?an:un)(n,t)}function un(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),f=new Array(e),o;for(o=0;o<r;++o)i[o]=I(n[o],t[o]);for(;o<e;++o)f[o]=t[o];return function(u){for(o=0;o<r;++o)f[o]=i[o](u);return f}}function Dn(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function Ln(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=I(n[i],t[i]):r[i]=t[i];return function(f){for(i in e)r[i]=e[i](f);return r}}function I(n,t){var e=typeof t,r;return t==null||e==="boolean"?hn(t):(e==="number"?T:e==="string"?(r=U(t))?(t=r,Y):ln:t instanceof U?Y:t instanceof Date?Dn:on(t)?an:Array.isArray(t)?un:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ln:T)(n,t)}function Tn(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function qn(n){return function(){return n}}function Bn(n){return+n}var W=[0,1];function A(n){return n}function B(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:qn(isNaN(t)?NaN:.5)}function Cn(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function In(n,t,e){var r=n[0],i=n[1],f=t[0],o=t[1];return i<r?(r=B(i,r),f=e(o,f)):(r=B(r,i),f=e(f,o)),function(u){return f(r(u))}}function Gn(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),f=new Array(r),o=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=B(n[o],n[o+1]),f[o]=e(t[o],t[o+1]);return function(u){var c=Mn(n,u,1,r)-1;return f[c](i[c](u))}}function On(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Vn(){var n=W,t=W,e=I,r,i,f,o=A,u,c,a;function m(){var l=Math.min(n.length,t.length);return o!==A&&(o=Cn(n[0],n[l-1])),u=l>2?Gn:In,c=a=null,s}function s(l){return l==null||isNaN(l=+l)?f:(c||(c=u(n.map(r),t,e)))(r(o(l)))}return s.invert=function(l){return o(i((a||(a=u(t,n.map(r),T)))(l)))},s.domain=function(l){return arguments.length?(n=Array.from(l,Bn),m()):n.slice()},s.range=function(l){return arguments.length?(t=Array.from(l),m()):t.slice()},s.rangeRound=function(l){return t=Array.from(l),e=Tn,m()},s.clamp=function(l){return arguments.length?(o=l?!0:A,m()):o!==A},s.interpolate=function(l){return arguments.length?(e=l,m()):e},s.unknown=function(l){return arguments.length?(f=l,s):f},function(l,p){return r=l,i=p,m()}}function Xn(){return Vn()(A,A)}function Un(n,t,e,r){var i=xn(n,t,e),f;switch(r=D(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(f=Rn(i,o))&&(r.precision=f),en(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(f=En(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=f-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(f=Fn(i))&&(r.precision=f-(r.type==="%")*2);break}}return rn(r)}function Yn(n){var t=n.domain;return n.ticks=function(e){var r=t();return kn(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return Un(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,f=r.length-1,o=r[i],u=r[f],c,a,m=10;for(u<o&&(a=o,o=u,u=a,a=i,i=f,f=a);m-- >0;){if(a=q(o,u,e),a===c)return r[i]=o,r[f]=u,t(r);if(a>0)o=Math.floor(o/a)*a,u=Math.ceil(u/a)*a;else if(a<0)o=Math.ceil(o*a)/a,u=Math.floor(u*a)/a;else break;c=a}return n},n}function Zn(){var n=Xn();return n.copy=function(){return On(n,Zn())},mn.apply(n,arguments),Yn(n)}export{Mn as A,Un as B,Qn as C,On as a,_ as b,Xn as c,F as d,yn as e,Pn as f,D as g,En as h,Rn as i,rn as j,en as k,Zn as l,I as m,Kn as n,Wn as o,Fn as p,Dn as q,an as r,Ln as s,xn as t,Tn as u,Bn as v,Yn as w,Vn as x,kn as y,A as z};
