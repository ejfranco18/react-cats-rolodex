(this.webpackJsonprobofriends01=this.webpackJsonprobofriends01||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(12),n(4)),i=n(5),u=n(7),l=n(6),d=(n(13),n(14),n(15),n(0)),h=function(e){var t=e.monster;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set4"),alt:""}),Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("p",{children:t.email})]})},j=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(h,{monster:e},e.id)}))})},f=(n(17),function(e){var t=e.placeHolder,n=e.eventHandler;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(c.toLocaleLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Cats Rolodex"}),Object(d.jsx)(f,{placeHolder:"Search cats",eventHandler:function(t){return e.setState({searchField:t.target.value})}}),Object(d.jsx)(j,{monsters:r})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.e026bb2a.chunk.js.map