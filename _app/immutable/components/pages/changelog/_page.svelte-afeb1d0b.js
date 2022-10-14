import{S as Rt,i as Ut,s as Wt,k as U,a as Q,q,Q as Zt,l as W,h as P,c as X,m as z,r as F,n as L,J as c,b as _t,u as yt,f as it,d as kt,t as at,O as It,L as zt,I as Dt,H as Gt,g as Nt,B as Kt,w as Bt,x as Ot,y as At,z as Pt}from"../../../chunks/index-9f69ae37.js";import{I as jt}from"../../../chunks/Icon-ed1efe5d.js";import{c as pt}from"../../../chunks/_commonjsHelpers-e864563f.js";import{l as Jt}from"../../../chunks/locale-1ded42ef.js";import{Y as qt}from"../../../chunks/runtime.esm-fdbe46db.js";/**
 * filesize
 *
 * @copyright 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 10.0.5
 */const Ft="array",Qt="bit",Tt="bits",Xt="byte",wt="bytes",ot="",te="exponent",ee="function",mt="iec",ne="Invalid number",re="Invalid rounding method",lt="jedec",ie="object",St=".",se="round",ae="s",oe="kbit",le="kB",ue=" ",ce="string",he="0",$t={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function fe(l,{bits:i=!1,pad:s=!1,base:e=-1,round:g=2,locale:D=ot,localeOptions:o={},separator:M=ot,spacer:N=ue,symbols:Y={},standard:y=ot,output:T=ce,fullform:B=!1,fullforms:V=[],exponent:H=-1,roundingMethod:C=se,precision:h=0}={}){let $=H,f=Number(l),a=[],u=0,k=ot;e===-1&&y.length===0?(e=10,y=lt):e===-1&&y.length>0?(y=y===mt?mt:lt,e=y===mt?2:10):(e=e===2?2:10,y=e===10||y===lt?lt:mt);const I=e===10?1e3:1024,G=B===!0,x=f<0,E=Math[C];if(typeof l!="bigint"&&isNaN(l))throw new TypeError(ne);if(typeof E!==ee)throw new TypeError(re);if(x&&(f=-f),($===-1||isNaN($))&&($=Math.floor(Math.log(f)/Math.log(I)),$<0&&($=0)),$>8&&(h>0&&(h+=8-$),$=8),T===te)return $;if(f===0)a[0]=0,k=a[1]=$t.symbol[y][i?Tt:wt][$];else{u=f/(e===2?Math.pow(2,$*10):Math.pow(1e3,$)),i&&(u=u*8,u>=I&&$<8&&(u=u/I,$++));const v=Math.pow(10,$>0?g:0);a[0]=E(u*v)/v,a[0]===I&&$<8&&H===-1&&(a[0]=1,$++),k=a[1]=e===10&&$===1?i?oe:le:$t.symbol[y][i?Tt:wt][$]}if(x&&(a[0]=-a[0]),h>0&&(a[0]=a[0].toPrecision(h)),a[1]=Y[a[1]]||a[1],D===!0?a[0]=a[0].toLocaleString():D.length>0?a[0]=a[0].toLocaleString(D,o):M.length>0&&(a[0]=a[0].toString().replace(St,M)),s&&Number.isInteger(a[0])===!1&&g>0){const v=M||St,K=a[0].toString().split(v),tt=K[1]||ot,d=tt.length,r=g-d;a[0]=`${K[0]}${v}${tt.padEnd(d+r,he)}`}return G&&(a[1]=V[$]?V[$]:$t.fullform[y][$]+(i?Qt:Xt)+(a[0]===1?ot:ae)),T===Ft?a:T===ie?{value:a[0],symbol:a[1],exponent:$,unit:k}:a.join(N)}var gt={exports:{}};(function(l,i){(function(s,e){l.exports=e()})(pt,function(){var s=1e3,e=6e4,g=36e5,D="millisecond",o="second",M="minute",N="hour",Y="day",y="week",T="month",B="quarter",V="year",H="date",C="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},a=function(d,r,t){var m=String(d);return!m||m.length>=r?d:""+Array(r+1-m.length).join(t)+d},u={s:a,z:function(d){var r=-d.utcOffset(),t=Math.abs(r),m=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+a(m,2,"0")+":"+a(n,2,"0")},m:function d(r,t){if(r.date()<t.date())return-d(t,r);var m=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(m,T),p=t-n<0,_=r.clone().add(m+(p?-1:1),T);return+(-(m+(t-n)/(p?n-_:_-n))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:T,y:V,w:y,d:Y,D:H,h:N,m:M,s:o,ms:D,Q:B}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},k="en",I={};I[k]=f;var G=function(d){return d instanceof K},x=function d(r,t,m){var n;if(!r)return k;if(typeof r=="string"){var p=r.toLowerCase();I[p]&&(n=p),t&&(I[p]=t,n=p);var _=r.split("-");if(!n&&_.length>1)return d(_[0])}else{var w=r.name;I[w]=r,n=w}return!m&&n&&(k=n),n||!m&&k},E=function(d,r){if(G(d))return d.clone();var t=typeof r=="object"?r:{};return t.date=d,t.args=arguments,new K(t)},v=u;v.l=x,v.i=G,v.w=function(d,r){return E(d,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var K=function(){function d(t){this.$L=x(t.locale,null,!0),this.parse(t)}var r=d.prototype;return r.parse=function(t){this.$d=function(m){var n=m.date,p=m.utc;if(n===null)return new Date(NaN);if(v.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var _=n.match(h);if(_){var w=_[2]-1||0,Z=(_[7]||"0").substring(0,3);return p?new Date(Date.UTC(_[1],w,_[3]||1,_[4]||0,_[5]||0,_[6]||0,Z)):new Date(_[1],w,_[3]||1,_[4]||0,_[5]||0,_[6]||0,Z)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return v},r.isValid=function(){return this.$d.toString()!==C},r.isSame=function(t,m){var n=E(t);return this.startOf(m)<=n&&n<=this.endOf(m)},r.isAfter=function(t,m){return E(t)<this.startOf(m)},r.isBefore=function(t,m){return this.endOf(m)<E(t)},r.$g=function(t,m,n){return v.u(t)?this[m]:this.set(n,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,m){var n=this,p=!!v.u(m)||m,_=v.p(t),w=function(st,b){var S=v.w(n.$u?Date.UTC(n.$y,b,st):new Date(n.$y,b,st),n);return p?S:S.endOf(Y)},Z=function(st,b){return v.w(n.toDate()[st].apply(n.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(b)),n)},j=this.$W,R=this.$M,nt=this.$D,J="set"+(this.$u?"UTC":"");switch(_){case V:return p?w(1,0):w(31,11);case T:return p?w(1,R):w(0,R+1);case y:var et=this.$locale().weekStart||0,O=(j<et?j+7:j)-et;return w(p?nt-O:nt+(6-O),R);case Y:case H:return Z(J+"Hours",0);case N:return Z(J+"Minutes",1);case M:return Z(J+"Seconds",2);case o:return Z(J+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,m){var n,p=v.p(t),_="set"+(this.$u?"UTC":""),w=(n={},n[Y]=_+"Date",n[H]=_+"Date",n[T]=_+"Month",n[V]=_+"FullYear",n[N]=_+"Hours",n[M]=_+"Minutes",n[o]=_+"Seconds",n[D]=_+"Milliseconds",n)[p],Z=p===Y?this.$D+(m-this.$W):m;if(p===T||p===V){var j=this.clone().set(H,1);j.$d[w](Z),j.init(),this.$d=j.set(H,Math.min(this.$D,j.daysInMonth())).$d}else w&&this.$d[w](Z);return this.init(),this},r.set=function(t,m){return this.clone().$set(t,m)},r.get=function(t){return this[v.p(t)]()},r.add=function(t,m){var n,p=this;t=Number(t);var _=v.p(m),w=function(R){var nt=E(p);return v.w(nt.date(nt.date()+Math.round(R*t)),p)};if(_===T)return this.set(T,this.$M+t);if(_===V)return this.set(V,this.$y+t);if(_===Y)return w(1);if(_===y)return w(7);var Z=(n={},n[M]=e,n[N]=g,n[o]=s,n)[_]||1,j=this.$d.getTime()+t*Z;return v.w(j,this)},r.subtract=function(t,m){return this.add(-1*t,m)},r.format=function(t){var m=this,n=this.$locale();if(!this.isValid())return n.invalidDate||C;var p=t||"YYYY-MM-DDTHH:mm:ssZ",_=v.z(this),w=this.$H,Z=this.$m,j=this.$M,R=n.weekdays,nt=n.months,J=function(b,S,A,rt){return b&&(b[S]||b(m,p))||A[S].slice(0,rt)},et=function(b){return v.s(w%12||12,b,"0")},O=n.meridiem||function(b,S,A){var rt=b<12?"AM":"PM";return A?rt.toLowerCase():rt},st={YY:String(this.$y).slice(-2),YYYY:this.$y,M:j+1,MM:v.s(j+1,2,"0"),MMM:J(n.monthsShort,j,nt,3),MMMM:J(nt,j),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:J(n.weekdaysMin,this.$W,R,2),ddd:J(n.weekdaysShort,this.$W,R,3),dddd:R[this.$W],H:String(w),HH:v.s(w,2,"0"),h:et(1),hh:et(2),a:O(w,Z,!0),A:O(w,Z,!1),m:String(Z),mm:v.s(Z,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:_};return p.replace($,function(b,S){return S||st[b]||_.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,m,n){var p,_=v.p(m),w=E(t),Z=(w.utcOffset()-this.utcOffset())*e,j=this-w,R=v.m(this,w);return R=(p={},p[V]=R/12,p[T]=R,p[B]=R/3,p[y]=(j-Z)/6048e5,p[Y]=(j-Z)/864e5,p[N]=j/g,p[M]=j/e,p[o]=j/s,p)[_]||j,n?R:v.a(R)},r.daysInMonth=function(){return this.endOf(T).$D},r.$locale=function(){return I[this.$L]},r.locale=function(t,m){if(!t)return this.$L;var n=this.clone(),p=x(t,m,!0);return p&&(n.$L=p),n},r.clone=function(){return v.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},d}(),tt=K.prototype;return E.prototype=tt,[["$ms",D],["$s",o],["$m",M],["$H",N],["$W",Y],["$M",T],["$y",V],["$D",H]].forEach(function(d){tt[d[1]]=function(r){return this.$g(r,d[0],d[1])}}),E.extend=function(d,r){return d.$i||(d(r,K,E),d.$i=!0),E},E.locale=x,E.isDayjs=G,E.unix=function(d){return E(1e3*d)},E.en=I[k],E.Ls=I,E.p={},E})})(gt);const ut=gt.exports;var Ct={exports:{}};(function(l,i){(function(s,e){l.exports=e()})(pt,function(){return function(s,e,g){s=s||{};var D=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function M(Y,y,T,B){return D.fromToBase(Y,y,T,B)}g.en.relativeTime=o,D.fromToBase=function(Y,y,T,B,V){for(var H,C,h,$=T.$locale().relativeTime||o,f=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],a=f.length,u=0;u<a;u+=1){var k=f[u];k.d&&(H=B?g(Y).diff(T,k.d,!0):T.diff(Y,k.d,!0));var I=(s.rounding||Math.round)(Math.abs(H));if(h=H>0,I<=k.r||!k.r){I<=1&&u>0&&(k=f[u-1]);var G=$[k.l];V&&(I=V(""+I)),C=typeof G=="string"?G.replace("%d",I):G(I,y,k.l,h);break}}if(y)return C;var x=h?$.future:$.past;return typeof x=="function"?x(C):x.replace("%s",C)},D.to=function(Y,y){return M(Y,y,this,!0)},D.from=function(Y,y){return M(Y,y,this)};var N=function(Y){return Y.$u?g.utc():g()};D.toNow=function(Y){return this.to(N(this),Y)},D.fromNow=function(Y){return this.from(N(this),Y)}}})})(Ct);const de=Ct.exports;var me={exports:{}};(function(l,i){(function(s,e){l.exports=e(gt.exports)})(pt,function(s){function e(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var g=e(s),D={name:"vi",weekdays:"ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"),months:"th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(o){return o},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s t\u1EDBi",past:"%s tr\u01B0\u1EDBc",s:"v\xE0i gi\xE2y",m:"m\u1ED9t ph\xFAt",mm:"%d ph\xFAt",h:"m\u1ED9t gi\u1EDD",hh:"%d gi\u1EDD",d:"m\u1ED9t ng\xE0y",dd:"%d ng\xE0y",M:"m\u1ED9t th\xE1ng",MM:"%d th\xE1ng",y:"m\u1ED9t n\u0103m",yy:"%d n\u0103m"}};return g.default.locale(D,null,!0),D})})(me);var _e={exports:{}};(function(l,i){(function(s,e){l.exports=e(gt.exports)})(pt,function(s){function e(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var g=e(s),D={name:"ja",weekdays:"\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),weekdaysShort:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),weekdaysMin:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(o){return o+"\u65E5"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5 HH:mm",LLLL:"YYYY\u5E74M\u6708D\u65E5 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm"},meridiem:function(o){return o<12?"\u5348\u524D":"\u5348\u5F8C"},relativeTime:{future:"%s\u5F8C",past:"%s\u524D",s:"\u6570\u79D2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65E5",dd:"%d\u65E5",M:"1\u30F6\u6708",MM:"%d\u30F6\u6708",y:"1\u5E74",yy:"%d\u5E74"}};return g.default.locale(D,null,!0),D})})(_e);ut.locale(navigator.language);ut.extend(de);Jt.subscribe(l=>ut.locale(l));function Et(l,i,s){const e=l.slice();return e[4]=i[s],e}function xt(l,i,s){const e=l.slice();return e[7]=i[s],e}function pe(l){let i,s;return i=new jt({props:{icon:"logos:apple-app-store",width:"20",height:"20"}}),{c(){Bt(i.$$.fragment)},l(e){Ot(i.$$.fragment,e)},m(e,g){At(i,e,g),s=!0},i(e){s||(it(i.$$.fragment,e),s=!0)},o(e){at(i.$$.fragment,e),s=!1},d(e){Pt(i,e)}}}function ge(l){let i,s;return i=new jt({props:{icon:"logos:android-icon",width:"20",height:"20"}}),{c(){Bt(i.$$.fragment)},l(e){Ot(i.$$.fragment,e)},m(e,g){At(i,e,g),s=!0},i(e){s||(it(i.$$.fragment,e),s=!0)},o(e){at(i.$$.fragment,e),s=!1},d(e){Pt(i,e)}}}function Lt(l){let i,s,e,g,D,o,M,N,Y=l[7].name+"",y,T,B,V=fe(l[7].size,{base:2,standard:"jedec"})+"",H,C,h,$=ut().to(l[7].updated_at)+"",f,a,u;const k=[ge,pe],I=[];function G(x,E){return x[7].content_type==="application/vnd.android.package-archive"?0:x[7].name.endsWith(".ipa")?1:-1}return~(e=G(l))&&(g=I[e]=k[e](l)),{c(){i=U("li"),s=U("a"),g&&g.c(),D=Q(),o=U("div"),M=U("div"),N=U("span"),y=q(Y),T=Q(),B=U("span"),H=q(V),C=Q(),h=U("span"),f=q($),a=Q(),this.h()},l(x){i=W(x,"LI",{class:!0});var E=z(i);s=W(E,"A",{target:!0,href:!0,class:!0});var v=z(s);g&&g.l(v),D=X(v),o=W(v,"DIV",{class:!0});var K=z(o);M=W(K,"DIV",{class:!0});var tt=z(M);N=W(tt,"SPAN",{class:!0});var d=z(N);y=F(d,Y),d.forEach(P),T=X(tt),B=W(tt,"SPAN",{class:!0});var r=z(B);H=F(r,V),r.forEach(P),tt.forEach(P),C=X(K),h=W(K,"SPAN",{class:!0});var t=z(h);f=F(t,$),t.forEach(P),K.forEach(P),v.forEach(P),a=X(E),E.forEach(P),this.h()},h(){L(N,"class","text-blue-500 font-weight-medium"),L(B,"class","text-[12px] block mt-1 md:ml-10 md:inline-block md:text-[14px] md:mt-0"),L(M,"class","ml-2 "),L(h,"class","text-[14px]"),L(o,"class","flex-1 flex items-center justify-between"),L(s,"target","_blank"),L(s,"href",l[7].browser_download_url),L(s,"class","whitespace-pre-wrap flex items-center py-2 px-3 border-b last:border-0 border-gray-500 transition-[background-color] duration-300 ease-in-out hover:bg-[rgba(200,200,200,0.1)] overflow-hidden"),L(i,"class","")},m(x,E){_t(x,i,E),c(i,s),~e&&I[e].m(s,null),c(s,D),c(s,o),c(o,M),c(M,N),c(N,y),c(M,T),c(M,B),c(B,H),c(o,C),c(o,h),c(h,f),c(i,a),u=!0},p:Kt,i(x){u||(it(g),u=!0)},o(x){at(g),u=!1},d(x){x&&P(i),~e&&I[e].d()}}}function Ht(l){let i,s,e,g,D,o,M,N=l[4].tag_name+"",Y,y,T,B,V=l[4].prerelease?"Pre-release":"Release",H,C,h,$,f,a,u,k=l[4].author.login+"",I,G,x,E=l[1]("release_at")+"",v,K,tt=ut().to(l[4].published_at)+"",d,r,t,m=l[1]("Changelog")+"",n,p,_,w,Z=l[4].body+"",j,R,nt,J,et=l[4].assets,O=[];for(let b=0;b<et.length;b+=1)O[b]=Lt(xt(l,et,b));const st=b=>at(O[b],1,1,()=>{O[b]=null});return{c(){i=U("div"),s=U("a"),e=U("span"),g=q(l[2]),D=q(` APK
          `),o=U("span"),M=q("("),Y=q(N),y=q(")"),T=Q(),B=U("span"),H=q(V),C=Q(),h=U("div"),$=U("img"),a=Q(),u=U("div"),I=q(k),G=Q(),x=U("span"),v=q(E),K=Q(),d=q(tt),r=Q(),t=U("div"),n=q(m),p=q(":"),_=Q(),w=U("div"),j=Q(),R=U("ul");for(let b=0;b<O.length;b+=1)O[b].c();nt=Q(),this.h()},l(b){i=W(b,"DIV",{class:!0});var S=z(i);s=W(S,"A",{target:!0,href:!0,class:!0});var A=z(s);e=W(A,"SPAN",{});var rt=z(e);g=F(rt,l[2]),D=F(rt,` APK
          `),o=W(rt,"SPAN",{class:!0});var ct=z(o);M=F(ct,"("),Y=F(ct,N),y=F(ct,")"),ct.forEach(P),rt.forEach(P),T=X(A),B=W(A,"SPAN",{class:!0});var bt=z(B);H=F(bt,V),bt.forEach(P),A.forEach(P),C=X(S),h=W(S,"DIV",{class:!0});var ht=z(h);$=W(ht,"IMG",{src:!0,class:!0}),a=X(ht),u=W(ht,"DIV",{});var ft=z(u);I=F(ft,k),G=X(ft),x=W(ft,"SPAN",{class:!0});var dt=z(x);v=F(dt,E),K=X(dt),d=F(dt,tt),dt.forEach(P),ft.forEach(P),ht.forEach(P),r=X(S),t=W(S,"DIV",{class:!0});var vt=z(t);n=F(vt,m),p=F(vt,":"),vt.forEach(P),_=X(S),w=W(S,"DIV",{class:!0});var Vt=z(w);Vt.forEach(P),j=X(S),R=W(S,"UL",{class:!0});var Yt=z(R);for(let Mt=0;Mt<O.length;Mt+=1)O[Mt].l(Yt);Yt.forEach(P),nt=X(S),S.forEach(P),this.h()},h(){L(o,"class","log-item-tag mr-2 svelte-1vq78he"),L(B,"class","leading-normal py-[2px] px-[7px] text-[12px] font-weight-medium rounded-[35px] border border-[currentColor]"),Dt(B,"text-[#3fb950]",!l[4].prerelease),Dt(B,"text-[#d29922]",l[4].prerelease),L(s,"target","_blank"),L(s,"href",l[4].file),L(s,"class","log-item-title w-full flex items-center justify-between sm:justify-start svelte-1vq78he"),Gt($.src,f=l[4].author.avatar_url)||L($,"src",f),L($,"class","w-[25px] h-[25px] rounded-1/2 mr-2"),L(x,"class","font-weight-normal"),L(h,"class","text-[14px] flex items-center font-weight-medium my-4"),L(t,"class","mb-3 ml-3"),L(w,"class","whitespace-pre-wrap mb-4 ml-3"),L(R,"class","border border-gray-500 rounded-xl max-w-[550px]"),L(i,"class","log-item mb-15")},m(b,S){_t(b,i,S),c(i,s),c(s,e),c(e,g),c(e,D),c(e,o),c(o,M),c(o,Y),c(o,y),c(s,T),c(s,B),c(B,H),c(i,C),c(i,h),c(h,$),c(h,a),c(h,u),c(u,I),c(u,G),c(u,x),c(x,v),c(x,K),c(x,d),c(i,r),c(i,t),c(t,n),c(t,p),c(i,_),c(i,w),w.innerHTML=Z,c(i,j),c(i,R);for(let A=0;A<O.length;A+=1)O[A].m(R,null);c(i,nt),J=!0},p(b,S){if((!J||S&2)&&E!==(E=b[1]("release_at")+"")&&yt(v,E),(!J||S&2)&&m!==(m=b[1]("Changelog")+"")&&yt(n,m),S&8){et=b[4].assets;let A;for(A=0;A<et.length;A+=1){const rt=xt(b,et,A);O[A]?(O[A].p(rt,S),it(O[A],1)):(O[A]=Lt(rt),O[A].c(),it(O[A],1),O[A].m(R,null))}for(Nt(),A=et.length;A<O.length;A+=1)st(A);kt()}},i(b){if(!J){for(let S=0;S<et.length;S+=1)it(O[S]);J=!0}},o(b){O=O.filter(Boolean);for(let S=0;S<O.length;S+=1)at(O[S]);J=!1},d(b){b&&P(i),It(O,b)}}}function ve(l){let i,s,e,g,D,o,M,N,Y,y,T=l[1]("changelogs")+"",B,V,H;document.title=i=l[0].head.title;let C=l[3],h=[];for(let f=0;f<C.length;f+=1)h[f]=Ht(Et(l,C,f));const $=f=>at(h[f],1,1,()=>{h[f]=null});return{c(){s=U("meta"),g=U("meta"),o=Q(),M=U("main"),N=U("h1"),Y=q(`AnimeVsub
    `),y=U("span"),B=q(T),V=Q();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){const a=Zt("svelte-fp0yvv",document.head);s=W(a,"META",{property:!0,content:!0}),g=W(a,"META",{property:!0,content:!0}),a.forEach(P),o=X(f),M=W(f,"MAIN",{class:!0});var u=z(M);N=W(u,"H1",{class:!0});var k=z(N);Y=F(k,`AnimeVsub
    `),y=W(k,"SPAN",{class:!0});var I=z(y);B=F(I,T),I.forEach(P),k.forEach(P),V=X(u);for(let G=0;G<h.length;G+=1)h[G].l(u);u.forEach(P),this.h()},h(){L(s,"property","og:title"),L(s,"content",e=l[0].head.title),L(g,"property","og:description"),L(g,"content",D=l[0].head.description),L(y,"class","text-white"),L(N,"class","mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center"),L(M,"class","w-response mx-4 sm:mx-auto mb-5")},m(f,a){c(document.head,s),c(document.head,g),_t(f,o,a),_t(f,M,a),c(M,N),c(N,Y),c(N,y),c(y,B),c(M,V);for(let u=0;u<h.length;u+=1)h[u].m(M,null);H=!0},p(f,[a]){if((!H||a&1)&&i!==(i=f[0].head.title)&&(document.title=i),(!H||a&1&&e!==(e=f[0].head.title))&&L(s,"content",e),(!H||a&1&&D!==(D=f[0].head.description))&&L(g,"content",D),(!H||a&2)&&T!==(T=f[1]("changelogs")+"")&&yt(B,T),a&14){C=f[3];let u;for(u=0;u<C.length;u+=1){const k=Et(f,C,u);h[u]?(h[u].p(k,a),it(h[u],1)):(h[u]=Ht(k),h[u].c(),it(h[u],1),h[u].m(M,null))}for(Nt(),u=C.length;u<h.length;u+=1)$(u);kt()}},i(f){if(!H){for(let a=0;a<C.length;a+=1)it(h[a]);H=!0}},o(f){h=h.filter(Boolean);for(let a=0;a<h.length;a+=1)at(h[a]);H=!1},d(f){P(s),P(g),f&&P(o),f&&P(M),It(h,f)}}}function Me(l,i,s){let e;zt(l,qt,M=>s(1,e=M));let{data:g}=i;const{name:D,changelogs:o}=g;return l.$$set=M=>{"data"in M&&s(0,g=M.data)},[g,e,D,o]}class Te extends Rt{constructor(i){super(),Ut(this,i,Me,ve,Wt,{data:0})}}export{Te as default};