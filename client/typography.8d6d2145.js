import{S as e,i as a,s as t,e as s,t as r,a as o,b as n,f as l,g as i,d as h,c,h as f,j as p,k as d,w as g,n as m,A as y,B as v,C as u,p as E,r as $,D as x}from"./client.70ebb474.js";import{H as b}from"./Hint.ade432b0.js";import"./Code.401d0eca.js";function S(e){let a,t,m,y,v,u;return{c(){a=s("div"),t=s("div"),m=s("label"),y=r("Transform"),v=o(),u=r(e[4]),this.h()},l(s){a=n(s,"DIV",{class:!0});var r=l(a);t=n(r,"DIV",{});var o=l(t);m=n(o,"LABEL",{class:!0});var f=l(m);y=i(f,"Transform"),f.forEach(h),v=c(o),u=i(o,e[4]),o.forEach(h),r.forEach(h),this.h()},h(){f(m,"class","svelte-1mo9k4e"),f(a,"class","font-style-row svelte-1mo9k4e")},m(e,s){p(e,a,s),d(a,t),d(t,m),d(m,y),d(t,v),d(t,u)},p(e,a){16&a&&g(u,e[4])},d(e){e&&h(a)}}}function _(e){let a,t,y,v,u,E,$,x,b,_,H,I,V,D,T,w,z,A,L,k,M,F,B,G,C,R,W,P,j,O,q,U,Y,N,J,K=e[4]&&S(e);return{c(){a=s("div"),t=s("div"),y=s("label"),v=r("Specimen"),u=o(),E=s("div"),$=r(e[5]),x=o(),b=s("div"),_=s("div"),H=s("div"),I=s("label"),V=r("Font (Family)"),D=o(),T=r(e[0]),w=o(),K&&K.c(),z=o(),A=s("div"),L=s("div"),k=s("label"),M=r("Size"),F=o(),B=r(e[1]),G=o(),C=s("div"),R=s("label"),W=r("Weight"),P=o(),j=r(e[2]),O=o(),q=s("div"),U=s("label"),Y=r("Line Height"),N=o(),J=r(e[3]),this.h()},l(s){a=n(s,"DIV",{class:!0});var r=l(a);t=n(r,"DIV",{class:!0});var o=l(t);y=n(o,"LABEL",{class:!0});var f=l(y);v=i(f,"Specimen"),f.forEach(h),u=c(o),E=n(o,"DIV",{class:!0,style:!0});var p=l(E);$=i(p,e[5]),p.forEach(h),o.forEach(h),x=c(r),b=n(r,"DIV",{class:!0});var d=l(b);_=n(d,"DIV",{class:!0});var g=l(_);H=n(g,"DIV",{});var m=l(H);I=n(m,"LABEL",{class:!0});var S=l(I);V=i(S,"Font (Family)"),S.forEach(h),D=c(m),T=i(m,e[0]),m.forEach(h),g.forEach(h),w=c(d),K&&K.l(d),z=c(d),A=n(d,"DIV",{class:!0});var Q=l(A);L=n(Q,"DIV",{});var X=l(L);k=n(X,"LABEL",{class:!0});var Z=l(k);M=i(Z,"Size"),Z.forEach(h),F=c(X),B=i(X,e[1]),X.forEach(h),G=c(Q),C=n(Q,"DIV",{});var ee=l(C);R=n(ee,"LABEL",{class:!0});var ae=l(R);W=i(ae,"Weight"),ae.forEach(h),P=c(ee),j=i(ee,e[2]),ee.forEach(h),O=c(Q),q=n(Q,"DIV",{});var te=l(q);U=n(te,"LABEL",{class:!0});var se=l(U);Y=i(se,"Line Height"),se.forEach(h),N=c(te),J=i(te,e[3]),te.forEach(h),Q.forEach(h),d.forEach(h),r.forEach(h),this.h()},h(){f(y,"class","svelte-1mo9k4e"),f(E,"class","specimen-text svelte-1mo9k4e"),f(E,"style",e[6]),f(t,"class","font-specimen svelte-1mo9k4e"),f(I,"class","svelte-1mo9k4e"),f(_,"class","font-style-row svelte-1mo9k4e"),f(k,"class","svelte-1mo9k4e"),f(R,"class","svelte-1mo9k4e"),f(U,"class","svelte-1mo9k4e"),f(A,"class","font-style-row svelte-1mo9k4e"),f(b,"class","font-style svelte-1mo9k4e"),f(a,"class","font-wrapper svelte-1mo9k4e")},m(e,s){p(e,a,s),d(a,t),d(t,y),d(y,v),d(t,u),d(t,E),d(E,$),d(a,x),d(a,b),d(b,_),d(_,H),d(H,I),d(I,V),d(H,D),d(H,T),d(b,w),K&&K.m(b,null),d(b,z),d(b,A),d(A,L),d(L,k),d(k,M),d(L,F),d(L,B),d(A,G),d(A,C),d(C,R),d(R,W),d(C,P),d(C,j),d(A,O),d(A,q),d(q,U),d(U,Y),d(q,N),d(q,J)},p(e,[a]){1&a&&g(T,e[0]),e[4]?K?K.p(e,a):(K=S(e),K.c(),K.m(b,z)):K&&(K.d(1),K=null),2&a&&g(B,e[1]),4&a&&g(j,e[2]),8&a&&g(J,e[3])},i:m,o:m,d(e){e&&h(a),K&&K.d()}}}function H(e,a,t){let{fontFamily:s="Verdana, sans-serif"}=a,{fontSize:r="11px"}=a,{fontWeight:o="normal"}=a,{lineHeight:n="1.2"}=a,{textTransform:l=""}=a,i=`\n    font-family: ${s};\n    font-size: ${r}; \n    font-weight: ${o}; \n    line-height: ${n}; \n    ${l?`text-transform: ${l}`:""}`;return e.$set=e=>{"fontFamily"in e&&t(0,s=e.fontFamily),"fontSize"in e&&t(1,r=e.fontSize),"fontWeight"in e&&t(2,o=e.fontWeight),"lineHeight"in e&&t(3,n=e.lineHeight),"textTransform"in e&&t(4,l=e.textTransform)},[s,r,o,n,l,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",i]}class I extends e{constructor(e){super(),a(this,e,H,_,t,{fontFamily:0,fontSize:1,fontWeight:2,lineHeight:3,textTransform:4})}}function V(e){let a,t,o,c,f,g,m,y,v,u;return{c(){a=r("Note that altough the "),t=s("code"),o=r("body"),c=r(" has a font size of 11px, a lot of font sizes are defined in "),f=s("code"),g=r("rem"),m=r(" values. 1rem however will not be equal to 11px, but 16px which is the default font size on the "),y=s("code"),v=r("html"),u=r(" tag.")},l(e){a=i(e,"Note that altough the "),t=n(e,"CODE",{});var s=l(t);o=i(s,"body"),s.forEach(h),c=i(e," has a font size of 11px, a lot of font sizes are defined in "),f=n(e,"CODE",{});var r=l(f);g=i(r,"rem"),r.forEach(h),m=i(e," values. 1rem however will not be equal to 11px, but 16px which is the default font size on the "),y=n(e,"CODE",{});var p=l(y);v=i(p,"html"),p.forEach(h),u=i(e," tag.")},m(e,s){p(e,a,s),p(e,t,s),d(t,o),p(e,c,s),p(e,f,s),d(f,g),p(e,m,s),p(e,y,s),d(y,v),p(e,u,s)},d(e){e&&h(a),e&&h(t),e&&h(c),e&&h(f),e&&h(m),e&&h(y),e&&h(u)}}}function D(e){let a,t,g,m,S,_,H,D,T,w,z,A,L,k,M,F,B,G,C,R,W,P,j,O,q,U,Y,N,J,K,Q,X,Z,ee,ae,te,se,re,oe,ne,le,ie,he,ce,fe,pe,de,ge,me,ye,ve,ue,Ee,$e,xe,be,Se,_e,He,Ie,Ve,De,Te,we,ze,Ae,Le,ke,Me,Fe,Be;const Ge=new b({props:{$$slots:{default:[V]},$$scope:{ctx:e}}}),Ce=new I({props:{fontFamily:"Verdana, sans-serif",fontSize:"11px"}}),Re=new I({props:{fontFamily:"Verdana, sans-serif",fontSize:"1.2rem",fontWeight:"bold"}}),We=new I({props:{fontFamily:"Verdana, sans-serif",fontSize:"0.9rem",fontWeight:"bold"}});return{c(){a=s("h1"),t=r("Typography "),g=s("a"),m=r("#"),S=o(),_=s("h2"),H=r("General Typography "),D=s("a"),T=r("#"),w=o(),z=s("p"),A=r("The Geizhals Preisvergleich website uses the font Verdana throughout the site."),L=o(),k=s("h2"),M=r("Copy Text "),F=s("a"),B=r("#"),G=o(),C=s("p"),R=r("Regular copy text uses the body font style (11px Verdana)."),W=o(),y(Ge.$$.fragment),P=o(),y(Ce.$$.fragment),j=o(),O=s("details"),q=s("summary"),U=r("Screenshots"),Y=o(),N=s("img"),K=o(),Q=s("br"),X=o(),Z=s("img"),ae=o(),te=s("h2"),se=r("Heading 1 "),re=s("a"),oe=r("#"),ne=o(),y(Re.$$.fragment),le=o(),ie=s("details"),he=s("summary"),ce=r("Screenshots"),fe=o(),pe=s("img"),ge=o(),me=s("br"),ye=o(),ve=s("img"),Ee=o(),$e=s("h2"),xe=r("Heading 2 "),be=s("a"),Se=r("#"),_e=o(),y(We.$$.fragment),He=o(),Ie=s("details"),Ve=s("summary"),De=r("Screenshots"),Te=o(),we=s("img"),Ae=o(),Le=s("br"),ke=o(),Me=s("img"),this.h()},l(e){a=n(e,"H1",{id:!0});var s=l(a);t=i(s,"Typography "),g=n(s,"A",{class:!0,href:!0});var r=l(g);m=i(r,"#"),r.forEach(h),s.forEach(h),S=c(e),_=n(e,"H2",{id:!0});var o=l(_);H=i(o,"General Typography "),D=n(o,"A",{class:!0,href:!0});var f=l(D);T=i(f,"#"),f.forEach(h),o.forEach(h),w=c(e),z=n(e,"P",{});var p=l(z);A=i(p,"The Geizhals Preisvergleich website uses the font Verdana throughout the site."),p.forEach(h),L=c(e),k=n(e,"H2",{id:!0});var d=l(k);M=i(d,"Copy Text "),F=n(d,"A",{class:!0,href:!0});var y=l(F);B=i(y,"#"),y.forEach(h),d.forEach(h),G=c(e),C=n(e,"P",{});var u=l(C);R=i(u,"Regular copy text uses the body font style (11px Verdana)."),u.forEach(h),W=c(e),v(Ge.$$.fragment,e),P=c(e),v(Ce.$$.fragment,e),j=c(e),O=n(e,"DETAILS",{});var E=l(O);q=n(E,"SUMMARY",{});var $=l(q);U=i($,"Screenshots"),$.forEach(h),Y=c(E),N=n(E,"IMG",{src:!0,alt:!0}),K=c(E),Q=n(E,"BR",{}),X=c(E),Z=n(E,"IMG",{src:!0,alt:!0}),E.forEach(h),ae=c(e),te=n(e,"H2",{id:!0});var x=l(te);se=i(x,"Heading 1 "),re=n(x,"A",{class:!0,href:!0});var b=l(re);oe=i(b,"#"),b.forEach(h),x.forEach(h),ne=c(e),v(Re.$$.fragment,e),le=c(e),ie=n(e,"DETAILS",{});var I=l(ie);he=n(I,"SUMMARY",{});var V=l(he);ce=i(V,"Screenshots"),V.forEach(h),fe=c(I),pe=n(I,"IMG",{src:!0,alt:!0}),ge=c(I),me=n(I,"BR",{}),ye=c(I),ve=n(I,"IMG",{src:!0,alt:!0}),I.forEach(h),Ee=c(e),$e=n(e,"H2",{id:!0});var J=l($e);xe=i(J,"Heading 2 "),be=n(J,"A",{class:!0,href:!0});var ee=l(be);Se=i(ee,"#"),ee.forEach(h),J.forEach(h),_e=c(e),v(We.$$.fragment,e),He=c(e),Ie=n(e,"DETAILS",{});var de=l(Ie);Ve=n(de,"SUMMARY",{});var ue=l(Ve);De=i(ue,"Screenshots"),ue.forEach(h),Te=c(de),we=n(de,"IMG",{src:!0,alt:!0}),Ae=c(de),Le=n(de,"BR",{}),ke=c(de),Me=n(de,"IMG",{src:!0,alt:!0}),de.forEach(h),this.h()},h(){f(g,"class","header-anchor"),f(g,"href","#typography"),f(a,"id","typography"),f(D,"class","header-anchor"),f(D,"href","#general-typography"),f(_,"id","general-typography"),f(F,"class","header-anchor"),f(F,"href","#copy-text"),f(k,"id","copy-text"),N.src!==(J="styleguide/typo_paragraph_specs.png")&&f(N,"src","styleguide/typo_paragraph_specs.png"),f(N,"alt","Copy Text: Example: Specs"),Z.src!==(ee="styleguide/typo_paragraph_offerlist.png")&&f(Z,"src","styleguide/typo_paragraph_offerlist.png"),f(Z,"alt","Copy Text: Example: Offerlist"),f(re,"class","header-anchor"),f(re,"href","#heading-1"),f(te,"id","heading-1"),pe.src!==(de="styleguide/typo_h1_iphone.png")&&f(pe,"src","styleguide/typo_h1_iphone.png"),f(pe,"alt","Heading 1: Example: Productpage"),ve.src!==(ue="styleguide/typo_h1_deals.png")&&f(ve,"src","styleguide/typo_h1_deals.png"),f(ve,"alt","Heading 1: Example: Deals"),f(be,"class","header-anchor"),f(be,"href","#heading-2"),f($e,"id","heading-2"),we.src!==(ze="styleguide/typo_h2_varianten.png")&&f(we,"src","styleguide/typo_h2_varianten.png"),f(we,"alt","Heading 2: Example: Varianten"),Me.src!==(Fe="styleguide/typo_h2_gefundene_produkte.png")&&f(Me,"src","styleguide/typo_h2_gefundene_produkte.png"),f(Me,"alt","Heading 2: Example: SERP")},m(e,s){p(e,a,s),d(a,t),d(a,g),d(g,m),p(e,S,s),p(e,_,s),d(_,H),d(_,D),d(D,T),p(e,w,s),p(e,z,s),d(z,A),p(e,L,s),p(e,k,s),d(k,M),d(k,F),d(F,B),p(e,G,s),p(e,C,s),d(C,R),p(e,W,s),u(Ge,e,s),p(e,P,s),u(Ce,e,s),p(e,j,s),p(e,O,s),d(O,q),d(q,U),d(O,Y),d(O,N),d(O,K),d(O,Q),d(O,X),d(O,Z),p(e,ae,s),p(e,te,s),d(te,se),d(te,re),d(re,oe),p(e,ne,s),u(Re,e,s),p(e,le,s),p(e,ie,s),d(ie,he),d(he,ce),d(ie,fe),d(ie,pe),d(ie,ge),d(ie,me),d(ie,ye),d(ie,ve),p(e,Ee,s),p(e,$e,s),d($e,xe),d($e,be),d(be,Se),p(e,_e,s),u(We,e,s),p(e,He,s),p(e,Ie,s),d(Ie,Ve),d(Ve,De),d(Ie,Te),d(Ie,we),d(Ie,Ae),d(Ie,Le),d(Ie,ke),d(Ie,Me),Be=!0},p(e,[a]){const t={};1&a&&(t.$$scope={dirty:a,ctx:e}),Ge.$set(t)},i(e){Be||(E(Ge.$$.fragment,e),E(Ce.$$.fragment,e),E(Re.$$.fragment,e),E(We.$$.fragment,e),Be=!0)},o(e){$(Ge.$$.fragment,e),$(Ce.$$.fragment,e),$(Re.$$.fragment,e),$(We.$$.fragment,e),Be=!1},d(e){e&&h(a),e&&h(S),e&&h(_),e&&h(w),e&&h(z),e&&h(L),e&&h(k),e&&h(G),e&&h(C),e&&h(W),x(Ge,e),e&&h(P),x(Ce,e),e&&h(j),e&&h(O),e&&h(ae),e&&h(te),e&&h(ne),x(Re,e),e&&h(le),e&&h(ie),e&&h(Ee),e&&h($e),e&&h(_e),x(We,e),e&&h(He),e&&h(Ie)}}}export default class extends e{constructor(e){super(),a(this,e,null,D,t,{})}}