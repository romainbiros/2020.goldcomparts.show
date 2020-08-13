import{r as t,u as r,_ as n,a,b as s,c as e,i as c,s as o,d as i,S as f,f as u,t as l,e as h,j as v,k as p,l as m,h as d,g as E,m as g,n as w,o as y,v as R,q as D,w as S,p as b,x}from"./client.6b287eb2.js";import{t as A}from"./tsv.c906c42a.js";import{s as I}from"./helpers.38afc14c.js";function O(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=a(t);if(r){var c=a(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return s(this,n)}}function T(t,r,n){var a=t.slice();return a[2]=r[n],a}function F(t){var r,n,a,s,e,c,o,i,f,D,S,b=t[2].title+"",x=t[2].startTime+"",A=t[2].artist+"";return{c:function(){r=u("li"),n=l(b),a=l(" - "),s=l(x),e=h(),c=u("br"),o=h(),i=u("a"),f=l(A),S=h(),this.h()},l:function(t){r=v(t,"LI",{});var u=p(r);n=m(u,b),a=m(u," - "),s=m(u,x),e=d(u),c=v(u,"BR",{}),o=d(u),i=v(u,"A",{href:!0});var l=p(i);f=m(l,A),l.forEach(E),S=d(u),u.forEach(E),this.h()},h:function(){g(i,"href",D="artists/"+I(t[2].artist))},m:function(t,u){w(t,r,u),y(r,n),y(r,a),y(r,s),y(r,e),y(r,c),y(r,o),y(r,i),y(i,f),y(r,S)},p:function(t,r){1&r&&b!==(b=t[2].title+"")&&R(n,b),1&r&&x!==(x=t[2].startTime+"")&&R(s,x),1&r&&A!==(A=t[2].artist+"")&&R(f,A),1&r&&D!==(D="artists/"+I(t[2].artist))&&g(i,"href",D)},d:function(t){t&&E(r)}}}function $(t){for(var r,n,a,s,e,c,o,i,f,R,A,I,O,$,j,k,C,M,V,H,G=t[0],L=[],N=0;N<G.length;N+=1)L[N]=F(T(t,G,N));return{c:function(){r=h(),n=u("section"),a=u("div"),s=u("div"),e=u("h1"),c=l("Final Show - 2020"),o=h(),i=u("h2"),f=l("MA/MFA Computational Arts - Goldsmiths"),R=h(),A=u("section"),I=u("div"),O=u("div"),$=u("h2"),j=l("Event schedule"),k=h(),C=u("p"),M=l("TODO - make this in to a proper listing"),V=h(),H=u("ul");for(var t=0;t<L.length;t+=1)L[t].c();this.h()},l:function(t){D('[data-svelte="svelte-1llonc1"]',document.head).forEach(E),r=d(t),n=v(t,"SECTION",{class:!0});var u=p(n);a=v(u,"DIV",{class:!0});var l=p(a);s=v(l,"DIV",{class:!0});var h=p(s);e=v(h,"H1",{class:!0});var g=p(e);c=m(g,"Final Show - 2020"),g.forEach(E),o=d(h),i=v(h,"H2",{class:!0});var w=p(i);f=m(w,"MA/MFA Computational Arts - Goldsmiths"),w.forEach(E),h.forEach(E),l.forEach(E),u.forEach(E),R=d(t),A=v(t,"SECTION",{class:!0});var y=p(A);I=v(y,"DIV",{class:!0});var S=p(I);O=v(S,"DIV",{class:!0});var b=p(O);$=v(b,"H2",{});var x=p($);j=m(x,"Event schedule"),x.forEach(E),k=d(b),C=v(b,"P",{});var T=p(C);M=m(T,"TODO - make this in to a proper listing"),T.forEach(E),V=d(b),H=v(b,"UL",{});for(var F=p(H),G=0;G<L.length;G+=1)L[G].l(F);F.forEach(E),b.forEach(E),S.forEach(E),y.forEach(E),this.h()},h:function(){document.title="Schedule - Final Show - 2020",g(e,"class","title"),g(i,"class","subtitle"),g(s,"class","container"),g(a,"class","hero-body"),g(n,"class","hero is-primary"),g(O,"class","content"),g(I,"class","container"),g(A,"class","section")},m:function(t,u){w(t,r,u),w(t,n,u),y(n,a),y(a,s),y(s,e),y(e,c),y(s,o),y(s,i),y(i,f),w(t,R,u),w(t,A,u),y(A,I),y(I,O),y(O,$),y($,j),y(O,k),y(O,C),y(C,M),y(O,V),y(O,H);for(var l=0;l<L.length;l+=1)L[l].m(H,null)},p:function(t,r){var n=S(r,1)[0];if(1&n){var a;for(G=t[0],a=0;a<G.length;a+=1){var s=T(t,G,a);L[a]?L[a].p(s,n):(L[a]=F(s),L[a].c(),L[a].m(H,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=G.length}},i:b,o:b,d:function(t){t&&E(r),t&&E(n),t&&E(R),t&&E(A),x(L,t)}}}function j(t){return k.apply(this,arguments)}function k(){return(k=t(r.mark((function t(n){var a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,t.next=3,this.fetch("api/events.tsv").then((function(t){return t.text()}));case 3:return a=t.sent,t.abrupt("return",{eventRows:a});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,r,n){var a,s=r.eventRows;return t.$set=function(t){"eventRows"in t&&n(1,s=t.eventRows)},t.$$.update=function(){2&t.$$.dirty&&n(0,a=A(s).map((function(t){return t})))},[a,s]}var M=function(t){n(a,f);var r=O(a);function a(t){var n;return e(this,a),n=r.call(this),c(i(n),t,C,$,o,{eventRows:1}),n}return a}();export default M;export{j as preload};