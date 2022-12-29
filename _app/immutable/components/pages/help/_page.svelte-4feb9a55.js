import{S as Q,i as U,s as Y,k as w,a as D,q as L,Q as j,l as I,h as r,c as H,m as V,r as M,n as v,J as _,b as A,u as z,B as S,O,L as F}from"../../../chunks/index-34c891a2.js";/* empty css                              */import{Y as G}from"../../../chunks/runtime.esm-4be4eaa2.js";function T(n,e,a){const l=n.slice();return l[3]=e[a],l}function B(n,e,a){const l=n.slice();return l[6]=e[a],l}function K(n){let e,a=n[3].title+"",l;return{c(){e=w("h4"),l=L(a),this.h()},l(t){e=I(t,"H4",{class:!0});var i=V(e);l=M(i,a),i.forEach(r),this.h()},h(){v(e,"class","title")},m(t,i){A(t,e,i),_(e,l)},p:S,d(t){t&&r(e)}}}function R(n){let e,a=n[3].sub+"",l;return{c(){e=w("div"),l=L(a),this.h()},l(t){e=I(t,"DIV",{class:!0});var i=V(e);l=M(i,a),i.forEach(r),this.h()},h(){v(e,"class","text-main text-[1.5rem] font-weight-bold mb-4")},m(t,i){A(t,e,i),_(e,l)},p:S,d(t){t&&r(e)}}}function W(n){let e,a=n[3].sub2+"",l;return{c(){e=w("div"),l=L(a),this.h()},l(t){e=I(t,"DIV",{class:!0});var i=V(e);l=M(i,a),i.forEach(r),this.h()},h(){v(e,"class","text-[1rem] text-white mb-4")},m(t,i){A(t,e,i),_(e,l)},p:S,d(t){t&&r(e)}}}function X(n){let e,a=n[3].content+"",l;return{c(){e=w("div"),l=L(a),this.h()},l(t){e=I(t,"DIV",{class:!0});var i=V(e);l=M(i,a),i.forEach(r),this.h()},h(){v(e,"class","mb-4 whitespace-pre-wrap")},m(t,i){A(t,e,i),_(e,l)},p:S,d(t){t&&r(e)}}}function Z(n){let e,a=n[3].ols,l=[];for(let t=0;t<a.length;t+=1)l[t]=C(B(n,a,t));return{c(){e=w("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=I(t,"UL",{class:!0});var i=V(e);for(let s=0;s<l.length;s+=1)l[s].l(i);i.forEach(r),this.h()},h(){v(e,"class","list-decimal pl-[15px] mb-4")},m(t,i){A(t,e,i);for(let s=0;s<l.length;s+=1)l[s].m(e,null)},p(t,i){if(i&4){a=t[3].ols;let s;for(s=0;s<a.length;s+=1){const d=B(t,a,s);l[s]?l[s].p(d,i):(l[s]=C(d),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},d(t){t&&r(e),O(l,t)}}}function C(n){let e,a=n[6]+"",l;return{c(){e=w("li"),l=L(a)},l(t){e=I(t,"LI",{});var i=V(e);l=M(i,a),i.forEach(r)},m(t,i){A(t,e,i),_(e,l)},p:S,d(t){t&&r(e)}}}function J(n){let e,a,l,t,i,s,d,m=n[3].title&&K(n),k=n[3].sub&&R(n),p=n[3].sub2&&W(n),b=n[3].content&&X(n),g=n[3].ols&&Z(n);return{c(){e=w("div"),m&&m.c(),a=D(),l=w("div"),k&&k.c(),t=D(),p&&p.c(),i=D(),b&&b.c(),s=D(),g&&g.c(),d=D(),this.h()},l(f){e=I(f,"DIV",{class:!0});var u=V(e);m&&m.l(u),a=H(u),l=I(u,"DIV",{class:!0});var o=V(l);k&&k.l(o),t=H(o),p&&p.l(o),i=H(o),b&&b.l(o),s=H(o),g&&g.l(o),o.forEach(r),d=H(u),u.forEach(r),this.h()},h(){v(l,"class","box box-list"),v(e,"class","mt-[64px] section")},m(f,u){A(f,e,u),m&&m.m(e,null),_(e,a),_(e,l),k&&k.m(l,null),_(l,t),p&&p.m(l,null),_(l,i),b&&b.m(l,null),_(l,s),g&&g.m(l,null),_(e,d)},p(f,u){f[3].title&&m.p(f,u),f[3].sub&&k.p(f,u),f[3].sub2&&p.p(f,u),f[3].content&&b.p(f,u),f[3].ols&&g.p(f,u)},d(f){f&&r(e),m&&m.d(),k&&k.d(),p&&p.d(),b&&b.d(),g&&g.d()}}}function y(n){let e,a,l,t,i,s,d,m,k,p,b=n[1]("Help")+"",g,f;document.title=e=n[0].head.title;let u=n[2],o=[];for(let c=0;c<u.length;c+=1)o[c]=J(T(n,u,c));return{c(){a=w("meta"),t=w("meta"),s=D(),d=w("main"),m=w("h1"),k=L(`AnimeVsub
    `),p=w("span"),g=L(b),f=D();for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){const E=j("svelte-fp0yvv",document.head);a=I(E,"META",{property:!0,content:!0}),t=I(E,"META",{property:!0,content:!0}),E.forEach(r),s=H(c),d=I(c,"MAIN",{class:!0});var h=V(d);m=I(h,"H1",{class:!0});var q=V(m);k=M(q,`AnimeVsub
    `),p=I(q,"SPAN",{class:!0});var P=V(p);g=M(P,b),P.forEach(r),q.forEach(r),f=H(h);for(let N=0;N<o.length;N+=1)o[N].l(h);h.forEach(r),this.h()},h(){v(a,"property","og:title"),v(a,"content",l=n[0].head.title),v(t,"property","og:description"),v(t,"content",i=n[0].head.description),v(p,"class","text-white"),v(m,"class","mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center"),v(d,"class","w-response mx-4 sm:mx-auto")},m(c,E){_(document.head,a),_(document.head,t),A(c,s,E),A(c,d,E),_(d,m),_(m,k),_(m,p),_(p,g),_(d,f);for(let h=0;h<o.length;h+=1)o[h].m(d,null)},p(c,[E]){if(E&1&&e!==(e=c[0].head.title)&&(document.title=e),E&1&&l!==(l=c[0].head.title)&&v(a,"content",l),E&1&&i!==(i=c[0].head.description)&&v(t,"content",i),E&2&&b!==(b=c[1]("Help")+"")&&z(g,b),E&4){u=c[2];let h;for(h=0;h<u.length;h+=1){const q=T(c,u,h);o[h]?o[h].p(q,E):(o[h]=J(q),o[h].c(),o[h].m(d,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=u.length}},i:S,o:S,d(c){r(a),r(t),c&&r(s),c&&r(d),O(o,c)}}}function $(n,e,a){let l;F(n,G,s=>a(1,l=s));let{data:t}=e;const{sections:i}=t;return n.$$set=s=>{"data"in s&&a(0,t=s.data)},[t,l,i]}class le extends Q{constructor(e){super(),U(this,e,$,y,Y,{data:0})}}export{le as default};