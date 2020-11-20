import{S as a,i as e,s as i,A as t,B as l,C as r,p as o,r as s,D as c,e as n,b as h,f,d as v,h as p,z as m,j as b,t as y,a as g,g as u,c as $,u as d,k as E}from"./client.cfb67157.js";import{H as x}from"./Hint.896cd4f4.js";import{P as A}from"./PVBase.affd1ea1.js";function w(a){let e,i;return{c(){e=n("span"),this.h()},l(a){e=h(a,"SPAN",{class:!0,"aria-label":!0,"data-tooltip-pos":!0,tabindex:!0}),f(e).forEach(v),this.h()},h(){p(e,"class","galleryview__availability svelte-1di06zg"),p(e,"aria-label",i=a[1][a[0]]),p(e,"data-tooltip-pos","up-left"),p(e,"tabindex","0"),m(e,"available","available"==a[0]),m(e,"shortly","shortly"==a[0]),m(e,"any","any"==a[0])},m(a,i){b(a,e,i)},p(a,t){1&t&&i!==(i=a[1][a[0]])&&p(e,"aria-label",i),1&t&&m(e,"available","available"==a[0]),1&t&&m(e,"shortly","shortly"==a[0]),1&t&&m(e,"any","any"==a[0])},d(a){a&&v(e)}}}function I(a){let e;const i=new A({props:{$$slots:{default:[w]},$$scope:{ctx:a}}});return{c(){t(i.$$.fragment)},l(a){l(i.$$.fragment,a)},m(a,t){r(i,a,t),e=!0},p(a,[e]){const t={};5&e&&(t.$$scope={dirty:e,ctx:a}),i.$set(t)},i(a){e||(o(i.$$.fragment,a),e=!0)},o(a){s(i.$$.fragment,a),e=!1},d(a){c(i,a)}}}function L(a,e,i){let{availability:t="available"}=e;return a.$set=(a=>{"availability"in a&&i(0,t=a.availability)}),[t,{available:"verfügbar",shortly:"kurzfristig verfügbar",any:"nicht verfügbar"}]}class P extends a{constructor(a){super(),e(this,a,L,I,i,{availability:0})}}function T(a){let e,i,t,l;return{c(){e=y("Going forward we aim to use the "),i=n("strong"),t=y("Availability Dot"),l=y(" exclusively and gradually replace the Availability Box.")},l(a){e=u(a,"Going forward we aim to use the "),i=h(a,"STRONG",{});var r=f(i);t=u(r,"Availability Dot"),r.forEach(v),l=u(a," exclusively and gradually replace the Availability Box.")},m(a,r){b(a,e,r),b(a,i,r),E(i,t),b(a,l,r)},d(a){a&&v(e),a&&v(i),a&&v(l)}}}function B(a){let e,i,m,A,w,I,L,B,D,j,G,_,H,S,k,z,C,U,q,M,N,W,Y,O,R,V,F,J,K,Q,X,Z,aa,ea,ia,ta,la,ra,oa,sa,ca,na,ha,fa,va,pa,ma,ba,ya,ga,ua,$a,da,Ea,xa,Aa,wa,Ia,La,Pa,Ta,Ba,Da,ja,Ga,_a,Ha,Sa,ka,za,Ca,Ua,qa,Ma,Na,Wa,Ya,Oa,Ra,Va,Fa,Ja,Ka,Qa,Xa,Za,ae,ee;const ie=new x({props:{$$slots:{default:[T]},$$scope:{ctx:a}}}),te=new P({props:{availability:"available"}}),le=new P({props:{availability:"shortly"}}),re=new P({props:{availability:"any"}});return{c(){e=n("h1"),i=y("Availability "),m=n("a"),A=y("#"),w=g(),I=n("p"),L=y("The Availability component is used to communicate to the user if an item is available at the moment."),B=g(),D=n("p"),j=y("It comes in two forms:"),G=g(),_=n("ul"),H=n("li"),S=y("as a small circle, see "),k=n("a"),z=y("Dot"),C=g(),U=n("li"),q=y("as a vertical box, see "),M=n("a"),N=y("Box"),W=g(),Y=n("p"),O=y("Dependencies:"),R=g(),V=n("ul"),F=n("li"),J=y("Tooltips"),K=g(),t(ie.$$.fragment),Q=g(),X=n("h2"),Z=y("Dot "),aa=n("a"),ea=y("#"),ia=g(),ta=n("p"),la=y("The Availability Dot is used throughout the site, especially in newer views like "),ra=n("a"),oa=y("Listview"),sa=y(" or "),ca=n("a"),na=y("Galleryview"),ha=y(". It uses "),fa=n("a"),va=y("Tooltips"),pa=y(" and the "),ma=n("a"),ba=y("Availability colors"),ya=y(" to communicate these three states:"),ga=g(),ua=n("p"),$a=y("Item is available:\n"),t(te.$$.fragment),da=g(),Ea=n("p"),xa=y("Item is available shortly:\n"),t(le.$$.fragment),Aa=g(),wa=n("p"),Ia=y("Item is not available:\n"),t(re.$$.fragment),La=g(),Pa=n("small"),Ta=y("(hover for tooltip!)"),Ba=g(),Da=n("h2"),ja=y("Box "),Ga=n("a"),_a=y("#"),Ha=g(),Sa=n("p"),ka=y("The Availability Box is either a square box or rectangle (in list views). It uses legacy availability colors."),za=g(),Ca=n("p"),Ua=y("You can see the Availability Box in action on these pages:"),qa=g(),Ma=n("ul"),Na=n("li"),Wa=y("Wish List detail page"),Ya=g(),Oa=n("li"),Ra=y("Category page (mobile)"),Va=g(),Fa=n("li"),Ja=y("Top 100"),Ka=g(),Qa=n("p"),Xa=y("Example:\n"),Za=n("img"),this.h()},l(a){e=h(a,"H1",{id:!0});var t=f(e);i=u(t,"Availability "),m=h(t,"A",{class:!0,href:!0});var r=f(m);A=u(r,"#"),r.forEach(v),t.forEach(v),w=$(a),I=h(a,"P",{});var o=f(I);L=u(o,"The Availability component is used to communicate to the user if an item is available at the moment."),o.forEach(v),B=$(a),D=h(a,"P",{});var s=f(D);j=u(s,"It comes in two forms:"),s.forEach(v),G=$(a),_=h(a,"UL",{});var c=f(_);H=h(c,"LI",{});var n=f(H);S=u(n,"as a small circle, see "),k=h(n,"A",{href:!0});var p=f(k);z=u(p,"Dot"),p.forEach(v),n.forEach(v),C=$(c),U=h(c,"LI",{});var b=f(U);q=u(b,"as a vertical box, see "),M=h(b,"A",{href:!0});var y=f(M);N=u(y,"Box"),y.forEach(v),b.forEach(v),c.forEach(v),W=$(a),Y=h(a,"P",{});var g=f(Y);O=u(g,"Dependencies:"),g.forEach(v),R=$(a),V=h(a,"UL",{});var d=f(V);F=h(d,"LI",{});var E=f(F);J=u(E,"Tooltips"),E.forEach(v),d.forEach(v),K=$(a),l(ie.$$.fragment,a),Q=$(a),X=h(a,"H2",{id:!0});var x=f(X);Z=u(x,"Dot "),aa=h(x,"A",{class:!0,href:!0});var P=f(aa);ea=u(P,"#"),P.forEach(v),x.forEach(v),ia=$(a),ta=h(a,"P",{});var T=f(ta);la=u(T,"The Availability Dot is used throughout the site, especially in newer views like "),ra=h(T,"A",{href:!0});var ae=f(ra);oa=u(ae,"Listview"),ae.forEach(v),sa=u(T," or "),ca=h(T,"A",{href:!0});var ee=f(ca);na=u(ee,"Galleryview"),ee.forEach(v),ha=u(T,". It uses "),fa=h(T,"A",{href:!0});var oe=f(fa);va=u(oe,"Tooltips"),oe.forEach(v),pa=u(T," and the "),ma=h(T,"A",{href:!0});var se=f(ma);ba=u(se,"Availability colors"),se.forEach(v),ya=u(T," to communicate these three states:"),T.forEach(v),ga=$(a),ua=h(a,"P",{});var ce=f(ua);$a=u(ce,"Item is available:\n"),l(te.$$.fragment,ce),ce.forEach(v),da=$(a),Ea=h(a,"P",{});var ne=f(Ea);xa=u(ne,"Item is available shortly:\n"),l(le.$$.fragment,ne),ne.forEach(v),Aa=$(a),wa=h(a,"P",{});var he=f(wa);Ia=u(he,"Item is not available:\n"),l(re.$$.fragment,he),he.forEach(v),La=$(a),Pa=h(a,"SMALL",{});var fe=f(Pa);Ta=u(fe,"(hover for tooltip!)"),fe.forEach(v),Ba=$(a),Da=h(a,"H2",{id:!0});var ve=f(Da);ja=u(ve,"Box "),Ga=h(ve,"A",{class:!0,href:!0});var pe=f(Ga);_a=u(pe,"#"),pe.forEach(v),ve.forEach(v),Ha=$(a),Sa=h(a,"P",{});var me=f(Sa);ka=u(me,"The Availability Box is either a square box or rectangle (in list views). It uses legacy availability colors."),me.forEach(v),za=$(a),Ca=h(a,"P",{});var be=f(Ca);Ua=u(be,"You can see the Availability Box in action on these pages:"),be.forEach(v),qa=$(a),Ma=h(a,"UL",{});var ye=f(Ma);Na=h(ye,"LI",{});var ge=f(Na);Wa=u(ge,"Wish List detail page"),ge.forEach(v),Ya=$(ye),Oa=h(ye,"LI",{});var ue=f(Oa);Ra=u(ue,"Category page (mobile)"),ue.forEach(v),Va=$(ye),Fa=h(ye,"LI",{});var $e=f(Fa);Ja=u($e,"Top 100"),$e.forEach(v),ye.forEach(v),Ka=$(a),Qa=h(a,"P",{});var de=f(Qa);Xa=u(de,"Example:\n"),Za=h(de,"IMG",{src:!0,alt:!0,style:!0}),de.forEach(v),this.h()},h(){p(m,"class","header-anchor"),p(m,"href","#availability"),p(e,"id","availability"),p(k,"href","#dot"),p(M,"href","#box"),p(aa,"class","header-anchor"),p(aa,"href","#dot"),p(X,"id","dot"),p(ra,"href","views/listview"),p(ca,"href","views/galleryview"),p(fa,"href","components/tooltips"),p(ma,"href","design/colors/#offer-availability-colors"),p(Ga,"class","header-anchor"),p(Ga,"href","#box"),p(Da,"id","box"),Za.src!==(ae="styleguide/availability_cat_page.jpg")&&p(Za,"src","styleguide/availability_cat_page.jpg"),p(Za,"alt","Screenshot of the mobile category page"),d(Za,"max-width","360px")},m(a,t){b(a,e,t),E(e,i),E(e,m),E(m,A),b(a,w,t),b(a,I,t),E(I,L),b(a,B,t),b(a,D,t),E(D,j),b(a,G,t),b(a,_,t),E(_,H),E(H,S),E(H,k),E(k,z),E(_,C),E(_,U),E(U,q),E(U,M),E(M,N),b(a,W,t),b(a,Y,t),E(Y,O),b(a,R,t),b(a,V,t),E(V,F),E(F,J),b(a,K,t),r(ie,a,t),b(a,Q,t),b(a,X,t),E(X,Z),E(X,aa),E(aa,ea),b(a,ia,t),b(a,ta,t),E(ta,la),E(ta,ra),E(ra,oa),E(ta,sa),E(ta,ca),E(ca,na),E(ta,ha),E(ta,fa),E(fa,va),E(ta,pa),E(ta,ma),E(ma,ba),E(ta,ya),b(a,ga,t),b(a,ua,t),E(ua,$a),r(te,ua,null),b(a,da,t),b(a,Ea,t),E(Ea,xa),r(le,Ea,null),b(a,Aa,t),b(a,wa,t),E(wa,Ia),r(re,wa,null),b(a,La,t),b(a,Pa,t),E(Pa,Ta),b(a,Ba,t),b(a,Da,t),E(Da,ja),E(Da,Ga),E(Ga,_a),b(a,Ha,t),b(a,Sa,t),E(Sa,ka),b(a,za,t),b(a,Ca,t),E(Ca,Ua),b(a,qa,t),b(a,Ma,t),E(Ma,Na),E(Na,Wa),E(Ma,Ya),E(Ma,Oa),E(Oa,Ra),E(Ma,Va),E(Ma,Fa),E(Fa,Ja),b(a,Ka,t),b(a,Qa,t),E(Qa,Xa),E(Qa,Za),ee=!0},p(a,[e]){const i={};1&e&&(i.$$scope={dirty:e,ctx:a}),ie.$set(i)},i(a){ee||(o(ie.$$.fragment,a),o(te.$$.fragment,a),o(le.$$.fragment,a),o(re.$$.fragment,a),ee=!0)},o(a){s(ie.$$.fragment,a),s(te.$$.fragment,a),s(le.$$.fragment,a),s(re.$$.fragment,a),ee=!1},d(a){a&&v(e),a&&v(w),a&&v(I),a&&v(B),a&&v(D),a&&v(G),a&&v(_),a&&v(W),a&&v(Y),a&&v(R),a&&v(V),a&&v(K),c(ie,a),a&&v(Q),a&&v(X),a&&v(ia),a&&v(ta),a&&v(ga),a&&v(ua),c(te),a&&v(da),a&&v(Ea),c(le),a&&v(Aa),a&&v(wa),c(re),a&&v(La),a&&v(Pa),a&&v(Ba),a&&v(Da),a&&v(Ha),a&&v(Sa),a&&v(za),a&&v(Ca),a&&v(qa),a&&v(Ma),a&&v(Ka),a&&v(Qa)}}}export default class extends a{constructor(a){super(),e(this,a,null,B,i,{})}}
