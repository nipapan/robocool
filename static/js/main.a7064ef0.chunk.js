(this.webpackJsonprobocool=this.webpackJsonprobocool||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(10),s=n(8),l=n(17),u=n(18),h=(n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(29);var b=n(3),f=n(4),p=n(6),g=n(5),E=n(7),m=(n(30),function(e){var t=e.robot;return r.a.createElement("div",{key:t.id,className:"tc dib br3 pa3 ma2 grow bw2 shadow-5 card-bg"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t.name,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h3",{className:"card-text"},t.name),r.a.createElement("p",null,t.email)))}),v=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(m,{key:e.id,robot:e})})))},O=function(e){e.searchText;var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search robots",className:"tc br3 pa2 ma2 bw0-l",type:"search",placeholder:"Search robots",onChange:t}))},w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px sold #05386b",height:"800px"}},e.children)},y=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={hasError:!1},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops..."):this.props.children}}]),t}(o.Component),S=(n(31),function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return r.a.createElement("h1",{className:"logo"},"RoboCool")}}]),t}(r.a.Component)),j=function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchText,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(S,null),r.a.createElement(O,{onSearchChange:n}),r.a.createElement(w,null,r.a.createElement(y,null,r.a.createElement(v,{robots:c}))))}}]),t}(r.a.Component),R=Object(i.b)((function(e){return{searchText:e.searchRobots.searchText,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.robots}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_TEXT",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(j),C={searchText:""},T={isPending:!1,robots:[],error:""},k=Object(l.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_TEXT":return Object.assign({},e,{searchText:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(_,Object(s.a)(u.a,k));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robocool",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robocool","/service-worker.js");h?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.a7064ef0.chunk.js.map