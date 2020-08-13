import{S as t,i as s,s as a,e,t as r,a as l,b as o,f as c,g as i,c as n,d as h,h as f,j as v,k as u,l as m,q as d,n as p,m as E}from"./client.882c7165.js";import{t as g}from"./tsv.6a7ced64.js";import{s as w}from"./helpers.ce81ccb7.js";function A(t,s,a){const e=t.slice();return e[2]=s[a],e}function I(t){let s,a,d,p,E,g,A,I,S,D,O,R=t[2].title+"",T=t[2].startTime+"",b=t[2].artist+"";return{c(){s=e("li"),a=r(R),d=r(" - "),p=r(T),E=l(),g=e("br"),A=l(),I=e("a"),S=r(b),O=l(),this.h()},l(t){s=o(t,"LI",{});var e=c(s);a=i(e,R),d=i(e," - "),p=i(e,T),E=n(e),g=o(e,"BR",{}),A=n(e),I=o(e,"A",{href:!0});var r=c(I);S=i(r,b),r.forEach(h),O=n(e),e.forEach(h),this.h()},h(){f(I,"href",D="artists/"+w(t[2].artist))},m(t,e){v(t,s,e),u(s,a),u(s,d),u(s,p),u(s,E),u(s,g),u(s,A),u(s,I),u(I,S),u(s,O)},p(t,s){1&s&&R!==(R=t[2].title+"")&&m(a,R),1&s&&T!==(T=t[2].startTime+"")&&m(p,T),1&s&&b!==(b=t[2].artist+"")&&m(S,b),1&s&&D!==(D="artists/"+w(t[2].artist))&&f(I,"href",D)},d(t){t&&h(s)}}}function S(t){let s,a,m,g,w,S,D,O,R,T,b,F,$,j,x,y,C,M,V,k,H=t[0],G=[];for(let s=0;s<H.length;s+=1)G[s]=I(A(t,H,s));return{c(){s=l(),a=e("section"),m=e("div"),g=e("div"),w=e("h1"),S=r("Final Show - 2020"),D=l(),O=e("h2"),R=r("MA/MFA Computational Arts - Goldsmiths"),T=l(),b=e("section"),F=e("div"),$=e("div"),j=e("h2"),x=r("Event schedule"),y=l(),C=e("p"),M=r("TODO - make this in to a proper listing"),V=l(),k=e("ul");for(let t=0;t<G.length;t+=1)G[t].c();this.h()},l(t){d('[data-svelte="svelte-1llonc1"]',document.head).forEach(h),s=n(t),a=o(t,"SECTION",{class:!0});var e=c(a);m=o(e,"DIV",{class:!0});var r=c(m);g=o(r,"DIV",{class:!0});var l=c(g);w=o(l,"H1",{class:!0});var f=c(w);S=i(f,"Final Show - 2020"),f.forEach(h),D=n(l),O=o(l,"H2",{class:!0});var v=c(O);R=i(v,"MA/MFA Computational Arts - Goldsmiths"),v.forEach(h),l.forEach(h),r.forEach(h),e.forEach(h),T=n(t),b=o(t,"SECTION",{class:!0});var u=c(b);F=o(u,"DIV",{class:!0});var p=c(F);$=o(p,"DIV",{class:!0});var E=c($);j=o(E,"H2",{});var A=c(j);x=i(A,"Event schedule"),A.forEach(h),y=n(E),C=o(E,"P",{});var I=c(C);M=i(I,"TODO - make this in to a proper listing"),I.forEach(h),V=n(E),k=o(E,"UL",{});var H=c(k);for(let t=0;t<G.length;t+=1)G[t].l(H);H.forEach(h),E.forEach(h),p.forEach(h),u.forEach(h),this.h()},h(){document.title="Schedule - Final Show - 2020",f(w,"class","title"),f(O,"class","subtitle"),f(g,"class","container"),f(m,"class","hero-body"),f(a,"class","hero is-primary"),f($,"class","content"),f(F,"class","container"),f(b,"class","section")},m(t,e){v(t,s,e),v(t,a,e),u(a,m),u(m,g),u(g,w),u(w,S),u(g,D),u(g,O),u(O,R),v(t,T,e),v(t,b,e),u(b,F),u(F,$),u($,j),u(j,x),u($,y),u($,C),u(C,M),u($,V),u($,k);for(let t=0;t<G.length;t+=1)G[t].m(k,null)},p(t,[s]){if(1&s){let a;for(H=t[0],a=0;a<H.length;a+=1){const e=A(t,H,a);G[a]?G[a].p(e,s):(G[a]=I(e),G[a].c(),G[a].m(k,null))}for(;a<G.length;a+=1)G[a].d(1);G.length=H.length}},i:p,o:p,d(t){t&&h(s),t&&h(a),t&&h(T),t&&h(b),E(G,t)}}}async function D({params:t}){return{eventRows:await this.fetch("api/events.tsv").then(t=>t.text())}}function O(t,s,a){let e,{eventRows:r}=s;return t.$set=t=>{"eventRows"in t&&a(1,r=t.eventRows)},t.$$.update=()=>{2&t.$$.dirty&&a(0,e=g(r).map(t=>t))},[e,r]}export default class extends t{constructor(t){super(),s(this,t,O,S,a,{eventRows:1})}}export{D as preload};