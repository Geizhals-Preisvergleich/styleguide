import{S as t,i as s,s as e,A as n,a,B as o,c as l,C as r,j as $,p as c,r as d,D as u,d as i,e as f,t as m,b,f as p,g,h,k as x,n as y,w}from"./client.575b5483.js";import{C as v}from"./Code.e245dce5.js";import{P as B}from"./PVBase.2dd05f2c.js";function P(t){let s,e;return{c(){s=f("button"),e=m("Zum Angebot"),this.h()},l(t){s=b(t,"BUTTON",{class:!0});var n=p(s);e=g(n,"Zum Angebot"),n.forEach(i),this.h()},h(){h(s,"class","offer_bt svelte-qkx0e4")},m(t,n){$(t,s,n),x(s,e)},d(t){t&&i(s)}}}function T(t){let s,e="<button class='offer_bt'>Zum Angebot</button>";return{c(){s=m(e)},l(t){s=g(t,e)},m(t,e){$(t,s,e)},p:y,d(t){t&&i(s)}}}function j(t){let s,e;const f=new B({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),m=new v({props:{language:"html",$$slots:{default:[T]},$$scope:{ctx:t}}});return{c(){n(f.$$.fragment),s=a(),n(m.$$.fragment)},l(t){o(f.$$.fragment,t),s=l(t),o(m.$$.fragment,t)},m(t,n){r(f,t,n),$(t,s,n),r(m,t,n),e=!0},p(t,[s]){const e={};1&s&&(e.$$scope={dirty:s,ctx:t}),f.$set(e);const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),m.$set(n)},i(t){e||(c(f.$$.fragment,t),c(m.$$.fragment,t),e=!0)},o(t){d(f.$$.fragment,t),d(m.$$.fragment,t),e=!1},d(t){u(f,t),t&&i(s),u(m,t)}}}class A extends t{constructor(t){super(),s(this,t,null,j,e,{})}}function S(t){let s;return{c(){s=m("disabled")},l(t){s=g(t,"disabled")},m(t,e){$(t,s,e)},d(t){t&&i(s)}}}function k(t){let s,e,n=t[0]&&S();return{c(){s=f("button"),e=m("Primary button\n    "),n&&n.c(),this.h()},l(t){s=b(t,"BUTTON",{class:!0,disabled:!0});var a=p(s);e=g(a,"Primary button\n    "),n&&n.l(a),a.forEach(i),this.h()},h(){h(s,"class","button svelte-kfjm3a"),s.disabled=t[0]},m(t,a){$(t,s,a),x(s,e),n&&n.m(s,null)},p(t,e){t[0]?n||(n=S(),n.c(),n.m(s,null)):n&&(n.d(1),n=null),1&e&&(s.disabled=t[0])},d(t){t&&i(s),n&&n.d()}}}function C(t){let s,e=`<button class="button"${t[0]?" disabled":""}>Primary button</button>`;return{c(){s=m(e)},l(t){s=g(t,e)},m(t,e){$(t,s,e)},p(t,n){1&n&&e!==(e=`<button class="button"${t[0]?" disabled":""}>Primary button</button>`)&&w(s,e)},d(t){t&&i(s)}}}function E(t){let s,e;const f=new B({props:{$$slots:{default:[k]},$$scope:{ctx:t}}}),m=new v({props:{language:"html",$$slots:{default:[C]},$$scope:{ctx:t}}});return{c(){n(f.$$.fragment),s=a(),n(m.$$.fragment)},l(t){o(f.$$.fragment,t),s=l(t),o(m.$$.fragment,t)},m(t,n){r(f,t,n),$(t,s,n),r(m,t,n),e=!0},p(t,[s]){const e={};3&s&&(e.$$scope={dirty:s,ctx:t}),f.$set(e);const n={};3&s&&(n.$$scope={dirty:s,ctx:t}),m.$set(n)},i(t){e||(c(f.$$.fragment,t),c(m.$$.fragment,t),e=!0)},o(t){d(f.$$.fragment,t),d(m.$$.fragment,t),e=!1},d(t){u(f,t),t&&i(s),u(m,t)}}}function N(t,s,e){let{disabled:n=!1}=s;return t.$set=t=>{"disabled"in t&&e(0,n=t.disabled)},[n]}class O extends t{constructor(t){super(),s(this,t,N,E,e,{disabled:0})}}function U(t){let s;return{c(){s=m("disabled")},l(t){s=g(t,"disabled")},m(t,e){$(t,s,e)},d(t){t&&i(s)}}}function Z(t){let s,e,n=t[0]&&U();return{c(){s=f("button"),e=m("Secondary button\n    "),n&&n.c(),this.h()},l(t){s=b(t,"BUTTON",{class:!0,disabled:!0});var a=p(s);e=g(a,"Secondary button\n    "),n&&n.l(a),a.forEach(i),this.h()},h(){h(s,"class","button button--outlined svelte-1oue4en"),s.disabled=t[0]},m(t,a){$(t,s,a),x(s,e),n&&n.m(s,null)},p(t,e){t[0]?n||(n=U(),n.c(),n.m(s,null)):n&&(n.d(1),n=null),1&e&&(s.disabled=t[0])},d(t){t&&i(s),n&&n.d()}}}function _(t){let s;return{c(){s=m(t[1])},l(e){s=g(e,t[1])},m(t,e){$(t,s,e)},p:y,d(t){t&&i(s)}}}function q(t){let s,e;const f=new B({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),m=new v({props:{language:"html",$$slots:{default:[_]},$$scope:{ctx:t}}});return{c(){n(f.$$.fragment),s=a(),n(m.$$.fragment)},l(t){o(f.$$.fragment,t),s=l(t),o(m.$$.fragment,t)},m(t,n){r(f,t,n),$(t,s,n),r(m,t,n),e=!0},p(t,[s]){const e={};5&s&&(e.$$scope={dirty:s,ctx:t}),f.$set(e);const n={};4&s&&(n.$$scope={dirty:s,ctx:t}),m.$set(n)},i(t){e||(c(f.$$.fragment,t),c(m.$$.fragment,t),e=!0)},o(t){d(f.$$.fragment,t),d(m.$$.fragment,t),e=!1},d(t){u(f,t),t&&i(s),u(m,t)}}}function D(t,s,e){let{disabled:n=!1}=s,a=`<button class="button button--outlined"${n?" disabled":""}>Secondary button</button>`;return t.$set=t=>{"disabled"in t&&e(0,n=t.disabled)},[n,a]}class V extends t{constructor(t){super(),s(this,t,D,q,e,{disabled:0})}}export{A as B,O as a,V as b};