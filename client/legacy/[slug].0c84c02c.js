import{_ as t,a as n,b as a,c as e,i as c,s as r,d as s,S as i,e as o,f as u,t as f,g as l,j as m,h,k as v,l as p,O as d,m as $,n as b,o as g,H as w,q as k,I as y,p as E,r as D,w as I,x as N,y as V,z as x,A as H,F as R,B as S,C as T,D as j,E as L}from"./client.8bf52d2c.js";import{t as M}from"./helpers.38afc14c.js";function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(e){var s=n(this).constructor;c=Reflect.construct(r,arguments,s)}else c=r.apply(this,arguments);return a(this,c)}}function C(t){var n,a,e,c,r,s,i;return{c:function(){n=o("div"),e=u(),c=o("a"),r=f(t[4]),this.h()},l:function(a){n=l(a,"DIV",{class:!0});var s=m(n);e=h(s),c=l(s,"A",{href:!0,target:!0,class:!0});var i=m(c);r=v(i,t[4]),i.forEach(p),s.forEach(p),this.h()},h:function(){a=new d(e),$(c,"href",t[3]),$(c,"target","_blank"),$(c,"class","svelte-e3veoz"),$(n,"class","social-profile")},m:function(o,u){b(o,n,u),a.m(t[2],n),g(n,e),g(n,c),g(c,r),s||(i=w(c,"click",t[5]),s=!0)},p:function(t,n){4&n&&a.p(t[2]),16&n&&k(r,t[4]),8&n&&$(c,"href",t[3])},d:function(t){t&&p(n),s=!1,i()}}}function F(t){var n,a=t[1]&&C(t);return{c:function(){a&&a.c(),n=y()},l:function(t){a&&a.l(t),n=y()},m:function(t,e){a&&a.m(t,e),b(t,n,e)},p:function(t,e){var c=E(e,1)[0];t[1]?a?a.p(t,c):((a=C(t)).c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i:D,o:D,d:function(t){a&&a.d(t),t&&p(n)}}}function q(t,n,a){var e,c,r,s=n.kind,i=n.value;switch(s){case"website":e='<span class="icon"><i class="fas fa-external-link-square-alt"></i></span>',c=i,r=i;break;case"instagram":e='<span class="icon"><i class="fab fa-instagram"></i></span>',c="https://instagram.com/".concat(i),r="@".concat(i);break;case"twitter":e='<span class="icon"><i class="fab fa-twitter"></i></span>',c="https://twitter.com/".concat(i),r="@".concat(i);break;case"facebook":e='<span class="icon"><i class="fab fa-facebook"></i></span>',r=c="https://www.facebook.com/".concat(i);break;case"twitch":e='<span class="icon"><i class="fab fa-twitch"></i></span>',r=c="https://www.twitch.com/".concat(i);break;case"youtube":e='<span class="icon"><i class="fab fa-youtube"></i></span>',c="https://www.youtube.com/channel/".concat(i),r="YouTube Channel";break;case"vimeo":e='<span class="icon"><i class="fab fa-vimeo"></i></span>',r=c="https://www.vimeo.com/".concat(i);break;default:throw new Error("Unknown social kind ".concat(s))}return t.$set=function(t){"kind"in t&&a(0,s=t.kind),"value"in t&&a(1,i=t.value)},[s,i,e,c,r,function(){return M("social","click","".concat(s,".").concat(i))}]}var z=function(n){t(o,i);var a=P(o);function o(t){var n;return e(this,o),n=a.call(this),c(s(n),t,q,F,r,{kind:0,value:1}),n}return o}();function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(e){var s=n(this).constructor;c=Reflect.construct(r,arguments,s)}else c=r.apply(this,arguments);return a(this,c)}}function O(t){var n,a,e,c=t[0].otherName+"";return{c:function(){n=f("("),a=f(c),e=f(")")},l:function(t){n=v(t,"("),a=v(t,c),e=v(t,")")},m:function(t,c){b(t,n,c),b(t,a,c),b(t,e,c)},p:function(t,n){1&n&&c!==(c=t[0].otherName+"")&&k(a,c)},d:function(t){t&&p(n),t&&p(a),t&&p(e)}}}function _(t){var n,a;return{c:function(){n=o("p"),a=f("No biography provided")},l:function(t){n=l(t,"P",{});var e=m(n);a=v(e,"No biography provided"),e.forEach(p)},m:function(t,e){b(t,n,e),g(n,a)},p:D,d:function(t){t&&p(n)}}}function B(t){var n,a,e=t[0].bioHTML+"";return{c:function(){a=y(),this.h()},l:function(t){a=y(),this.h()},h:function(){n=new d(a)},m:function(t,c){n.m(e,t,c),b(t,a,c)},p:function(t,a){1&a&&e!==(e=t[0].bioHTML+"")&&n.p(e)},d:function(t){t&&p(a),t&&n.d()}}}function U(t){var n,a,e,c=t[0].otherName+"";return{c:function(){n=f("("),a=f(c),e=f(")")},l:function(t){n=v(t,"("),a=v(t,c),e=v(t,")")},m:function(t,c){b(t,n,c),b(t,a,c),b(t,e,c)},p:function(t,n){1&n&&c!==(c=t[0].otherName+"")&&k(a,c)},d:function(t){t&&p(n),t&&p(a),t&&p(e)}}}function Y(t){var n,a;return{c:function(){n=o("p"),a=f("No biography provided")},l:function(t){n=l(t,"P",{});var e=m(n);a=v(e,"No biography provided"),e.forEach(p)},m:function(t,e){b(t,n,e),g(n,a)},p:D,d:function(t){t&&p(n)}}}function G(t){var n,a,e=t[0].bioHTML+"";return{c:function(){a=y(),this.h()},l:function(t){a=y(),this.h()},h:function(){n=new d(a)},m:function(t,c){n.m(e,t,c),b(t,a,c)},p:function(t,a){1&a&&e!==(e=t[0].bioHTML+"")&&n.p(e)},d:function(t){t&&p(a),t&&n.d()}}}function J(t){var n,a,e,c,r,s,i,d,w,y,D,I,N,M,P,C,F,q,A,J,K,Q,W,X,Z,tt,nt,at,et,ct,rt,st,it,ot,ut,ft,lt,mt,ht,vt,pt,dt,$t,bt=t[0].name+"",gt=t[0].name+"";document.title=n=t[0].name+" - Final Show - 2020";var wt=t[0].otherName&&O(t);function kt(t,n){return t[0].bioHTML?B:_}var yt=kt(t),Et=yt(t);K=new z({props:{kind:"website",value:t[0].website}}),W=new z({props:{kind:"instagram",value:t[0].instagram}}),Z=new z({props:{kind:"twitter",value:t[0].twitter}}),nt=new z({props:{kind:"facebook",value:t[0].facebook}}),et=new z({props:{kind:"vimeo",value:t[0].vimeo}}),rt=new z({props:{kind:"youtube",value:t[0].youtube}}),it=new z({props:{kind:"twitch",value:t[0].twitch}});var Dt=t[0].otherName&&U(t);function It(t,n){return t[0].bioHTML?G:Y}var Nt=It(t),Vt=Nt(t);return{c:function(){a=u(),e=o("section"),c=o("div"),r=o("div"),s=o("div"),i=o("div"),d=o("div"),w=u(),y=o("div"),D=o("h2"),I=f(bt),N=u(),wt&&wt.c(),M=u(),P=o("div"),Et.c(),C=u(),F=o("div"),q=o("h3"),A=f("Social links"),J=u(),V(K.$$.fragment),Q=u(),V(W.$$.fragment),X=u(),V(Z.$$.fragment),tt=u(),V(nt.$$.fragment),at=u(),V(et.$$.fragment),ct=u(),V(rt.$$.fragment),st=u(),V(it.$$.fragment),ot=u(),ut=o("div"),ft=o("h2"),lt=f(gt),mt=u(),Dt&&Dt.c(),ht=u(),vt=o("div"),Vt.c(),pt=u(),dt=o("div"),this.h()},l:function(t){x('[data-svelte="svelte-ne3spu"]',document.head).forEach(p),a=h(t),e=l(t,"SECTION",{class:!0});var n=m(e);c=l(n,"DIV",{class:!0});var o=m(c);r=l(o,"DIV",{class:!0});var u=m(r);s=l(u,"DIV",{class:!0});var f=m(s);i=l(f,"DIV",{class:!0});var $=m(i);d=l($,"DIV",{class:!0,style:!0}),m(d).forEach(p),w=h($),y=l($,"DIV",{class:!0});var b=m(y);D=l(b,"H2",{class:!0});var g=m(D);I=v(g,bt),N=h(g),wt&&wt.l(g),g.forEach(p),M=h(b),P=l(b,"DIV",{class:!0});var k=m(P);Et.l(k),k.forEach(p),b.forEach(p),C=h($),F=l($,"DIV",{class:!0});var E=m(F);q=l(E,"H3",{class:!0});var V=m(q);A=v(V,"Social links"),V.forEach(p),J=h(E),H(K.$$.fragment,E),Q=h(E),H(W.$$.fragment,E),X=h(E),H(Z.$$.fragment,E),tt=h(E),H(nt.$$.fragment,E),at=h(E),H(et.$$.fragment,E),ct=h(E),H(rt.$$.fragment,E),st=h(E),H(it.$$.fragment,E),E.forEach(p),$.forEach(p),ot=h(f),ut=l(f,"DIV",{class:!0});var R=m(ut);ft=l(R,"H2",{class:!0});var S=m(ft);lt=v(S,gt),mt=h(S),Dt&&Dt.l(S),S.forEach(p),ht=h(R),vt=l(R,"DIV",{class:!0});var T=m(vt);Vt.l(T),T.forEach(p),R.forEach(p),f.forEach(p),u.forEach(p),pt=h(o),dt=l(o,"DIV",{style:!0}),m(dt).forEach(p),o.forEach(p),n.forEach(p),this.h()},h:function(){$(d,"class","bio-photo svelte-tb3y5a"),R(d,"background-image","url(img/bios/"+t[0].username+".jpeg)"),$(D,"class","artist-name svelte-tb3y5a"),$(P,"class","artist-bio"),$(y,"class","is-hidden-desktop is-hidden-tablet"),$(q,"class","svelte-tb3y5a"),$(F,"class","social-links svelte-tb3y5a"),$(i,"class","column is-one-third"),$(ft,"class","artist-name svelte-tb3y5a"),$(vt,"class","artist-bio"),$(ut,"class","column is-hidden-mobile is-two-thirds"),$(s,"class","columns"),$(r,"class","content"),R(dt,"padding-top","100px"),$(c,"class","container is-widescreen"),$(e,"class","section bg-col-7 artists-section svelte-tb3y5a")},m:function(t,n){b(t,a,n),b(t,e,n),g(e,c),g(c,r),g(r,s),g(s,i),g(i,d),g(i,w),g(i,y),g(y,D),g(D,I),g(D,N),wt&&wt.m(D,null),g(y,M),g(y,P),Et.m(P,null),g(i,C),g(i,F),g(F,q),g(q,A),g(F,J),S(K,F,null),g(F,Q),S(W,F,null),g(F,X),S(Z,F,null),g(F,tt),S(nt,F,null),g(F,at),S(et,F,null),g(F,ct),S(rt,F,null),g(F,st),S(it,F,null),g(s,ot),g(s,ut),g(ut,ft),g(ft,lt),g(ft,mt),Dt&&Dt.m(ft,null),g(ut,ht),g(ut,vt),Vt.m(vt,null),g(c,pt),g(c,dt),$t=!0},p:function(t,a){var e=E(a,1)[0];(!$t||1&e)&&n!==(n=t[0].name+" - Final Show - 2020")&&(document.title=n),(!$t||1&e)&&R(d,"background-image","url(img/bios/"+t[0].username+".jpeg)"),(!$t||1&e)&&bt!==(bt=t[0].name+"")&&k(I,bt),t[0].otherName?wt?wt.p(t,e):((wt=O(t)).c(),wt.m(D,null)):wt&&(wt.d(1),wt=null),yt===(yt=kt(t))&&Et?Et.p(t,e):(Et.d(1),(Et=yt(t))&&(Et.c(),Et.m(P,null)));var c={};1&e&&(c.value=t[0].website),K.$set(c);var r={};1&e&&(r.value=t[0].instagram),W.$set(r);var s={};1&e&&(s.value=t[0].twitter),Z.$set(s);var i={};1&e&&(i.value=t[0].facebook),nt.$set(i);var o={};1&e&&(o.value=t[0].vimeo),et.$set(o);var u={};1&e&&(u.value=t[0].youtube),rt.$set(u);var f={};1&e&&(f.value=t[0].twitch),it.$set(f),(!$t||1&e)&&gt!==(gt=t[0].name+"")&&k(lt,gt),t[0].otherName?Dt?Dt.p(t,e):((Dt=U(t)).c(),Dt.m(ft,null)):Dt&&(Dt.d(1),Dt=null),Nt===(Nt=It(t))&&Vt?Vt.p(t,e):(Vt.d(1),(Vt=Nt(t))&&(Vt.c(),Vt.m(vt,null)))},i:function(t){$t||(T(K.$$.fragment,t),T(W.$$.fragment,t),T(Z.$$.fragment,t),T(nt.$$.fragment,t),T(et.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),$t=!0)},o:function(t){j(K.$$.fragment,t),j(W.$$.fragment,t),j(Z.$$.fragment,t),j(nt.$$.fragment,t),j(et.$$.fragment,t),j(rt.$$.fragment,t),j(it.$$.fragment,t),$t=!1},d:function(t){t&&p(a),t&&p(e),wt&&wt.d(),Et.d(),L(K),L(W),L(Z),L(nt),L(et),L(rt),L(it),Dt&&Dt.d(),Vt.d()}}}function K(t){return Q.apply(this,arguments)}function Q(){return(Q=I(N.mark((function t(n){var a,e,c;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,t.next=3,this.fetch("artists/".concat(a.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.abrupt("return",{artist:c});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function W(t,n,a){var e=n.artist;return t.$set=function(t){"artist"in t&&a(0,e=t.artist)},[e]}var X=function(n){t(o,i);var a=A(o);function o(t){var n;return e(this,o),n=a.call(this),c(s(n),t,W,J,r,{artist:0}),n}return o}();export default X;export{K as preload};
