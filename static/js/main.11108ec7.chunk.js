(this.webpackJsonprobocool=this.webpackJsonprobocool||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var s=n(1),l=n(2),i=n(4),h=n(3),u=n(5),m=(n(15),function(e){var t=e.robot;return r.a.createElement("div",{key:t.id,className:"tc dib br3 pa3 ma2 grow bw2 shadow-5 card-bg"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t.name,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",{className:"card-text"},t.name),r.a.createElement("p",null,t.email)))}),b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(m,{key:e.id,robot:e})})))},d=function(e){e.searchText;var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"tc br3 pa3 ma2 bw0-l",type:"search",placeholder:"Search robots",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px sold #05386b",height:"800px"}},e.children)},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).state={hasError:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops..."):this.props.children}}]),t}(a.Component),v=(n(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchText:t.target.value})},e.state={robots:[],searchText:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchText,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"logo"},"RoboFriends"),r.a.createElement(d,{onSearchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(b,{robots:a})))):r.a.createElement("p",null,"Loading...")}}]),t}(r.a.Component));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.11108ec7.chunk.js.map