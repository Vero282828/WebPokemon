(this["webpackJsonpweb-pokemon"]=this["webpackJsonpweb-pokemon"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(30),a=n.n(r),s=(n(38),n(39),n(9)),i=n(20),o=(n(40),n(1));var u=function(){var e=Object(c.useState)(!1),t=e.click,n=e.setClick;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container container",children:[Object(o.jsx)(s.b,{to:"/",className:"navbar-logo",children:"POKEMON"}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return n(!t)},children:t?Object(o.jsx)(i.b,{}):Object(o.jsx)(i.a,{})}),Object(o.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{to:"/",className:"nav-links",children:"Pokemon List"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{to:"/detailpoke",className:"nav-links",children:"Detail Pokemon"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(s.b,{to:"/detailpoke",className:"nav-links",children:"My Pokemon List"})})]})]})})})},j=n(2),l=n(4),b=n.n(l),p=n(10),d=n(11);n(48);function h(e){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(49);var x=function(e){var t=e.pokemon;return Object(o.jsxs)("div",{className:"Card",onClicked:"/detailpoke",children:[Object(o.jsx)("div",{className:"Card_img",children:Object(o.jsx)("img",{src:t.sprites.front_default,alt:""})}),Object(o.jsx)("div",{className:"Card_name",children:Object(o.jsxs)(s.b,{to:"/detailpoke",className:"Card_link",children:[" ",t.name]})}),Object(o.jsx)("div",{className:"Card_owned",children:Object(o.jsxs)("h4",{children:["Owned: ",t.slot," "]})})]})};var v=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(""),l=Object(d.a)(j,2),m=l[0],O=l[1],v=Object(c.useState)(!0),k=Object(d.a)(v,2),N=k[0],w=k[1],g="https://pokeapi.co/api/v2/pokemon/";Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(g);case 2:return t=e.sent,u(t.next),O(t.previous),e.next=7,y(t.results);case 7:e.sent,console.log(t),w(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var C=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,h(i);case 3:return t=e.sent,e.next=6,y(t.results);case 6:u(t.next),O(t.previous),w(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.next=5,h(m);case 5:return t=e.sent,e.next=8,y(t.results);case 8:u(t.next),O(t.previous),w(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:N?Object(o.jsx)("h1",{children:"Loading.."}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"btn",children:[Object(o.jsx)("button",{onClick:P,children:"Prev"}),Object(o.jsx)("button",{onClick:C,children:"Next"})]}),Object(o.jsx)("div",{className:"grid-container",children:n.map((function(e,t){return Object(o.jsx)(x,{pokemon:e},t)}))}),Object(o.jsxs)("div",{className:"btn",children:[Object(o.jsx)("button",{onClick:P,children:"Prev"}),Object(o.jsx)("button",{onClick:C,children:"Next"})]})]})})},k=n(33),N=n(32),w=n.n(N);n(68);var g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)([]),l=Object(d.a)(j,2);l[0],l[1],Object(c.useEffect)((function(){b()}),[]);var b=function(){w.a.get("https://pokeapi.co/api/v2/pokemon/"+function(){var e=Math.ceil(1),t=Math.floor(151);return Math.floor(Math.random()*(t-e+1))+e}()).then((function(e){u(e.data)}))};return Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsxs)("section",{className:"wild-pokemon",children:[Object(o.jsx)("h2",{children:"Detail pokemon"}),Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i.id+".png",className:"sprite"}),Object(o.jsx)("h3",{children:i.name}),Object(o.jsx)("button",{className:"catch-btn",onClick:function(){return e=i,r((function(t){return t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(k.a)(t),[e])).sort((function(e,t){return e.id-t.id})),t})),void b();var e},children:"CATCH"})]}),Object(o.jsxs)("section",{className:"pokedex",children:[Object(o.jsx)("h2",{children:"My Pokemon List"}),Object(o.jsx)("div",{className:"pokedex-list",children:n.map((function(e){return Object(o.jsxs)("div",{className:"pokemon",children:[Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.id+".png",className:"sprite"}),Object(o.jsx)("h3",{className:"pokemon-name",children:e.name}),Object(o.jsx)("button",{className:"remove",onClick:function(){return t=e.id,void r((function(e){return e.filter((function(e){return e.id!=t}))}));var t},children:"\xd7"})]},e.id)}))})]})]})};var C=function(){return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(o.jsx)(j.a,{path:"/detailpoke",exact:!0,component:g})]})]})};a.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c4d24590.chunk.js.map