(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(69)},52:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"isLoading",function(){return w}),n.d(a,"addSuc",function(){return x}),n.d(a,"addTodo",function(){return y}),n.d(a,"deleteTodo",function(){return D});var o=n(0),r=n.n(o),c=n(19),i=n.n(c),u=(n(52),n(53),n(8)),l=n(10),d=n(11),s=n(13),p=n(12),m=n(14),b=n(7),f=n(17),O=n(26),h=n.n(O),E=n(37),v=n(71),j=n(38),g=n.n(j),w=Object(v.a)("ADD_LOADING"),x=Object(v.a)("ADD_TODO_SUC"),y=function(e){return function(){var t=Object(E.a)(h.a.mark(function t(n){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(w(!0)),t.next=3,g()(1e3);case 3:n(x(e)),n(w(!1));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},D=Object(v.a)("DELETE_TODO"),T=(n(59),function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),k=n(39);function _(){var e=Object(k.a)(["\n    cursor: pointer;\n    padding: 5px 10px;\n    border: 1px solid #000;\n    cursor: pointer;\n    text-align: center;\n    margin-left: 10px;\n    background-color: #fff;\n"]);return _=function(){return e},e}var N=n(24).default.button(_()),C=n(16),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).handleInput=function(e){var t=e.target.value;n.setState(Object(C.a)(function(e){e.todo=t}))},n.addTodosubmit=function(){var e=n.state.todo;""!==T(e)&&(n.props.todoAction.addTodo({id:new Date/1,text:e}),n.setState(Object(C.a)(function(e){e.todo=""})))},n.deletTodoSubmit=function(e){n.props.todoAction.deleteTodo(e)},n.state={todo:""},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"renderTodoList",value:function(){var e=this,t=this.props.todo.todos;if(t.length>0){var n=t.map(function(t,n){return r.a.createElement("div",{key:t.id,className:"wrapper-row list"},r.a.createElement("h5",null,n+1,". ",t.text),r.a.createElement("div",{className:"delete",onClick:function(){return e.deletTodoSubmit(t.id)},role:"presentation"},"x"))});return r.a.createElement("div",{className:"wrapper-col"},n)}}},{key:"render",value:function(){var e=this.state.todo;return r.a.createElement("div",{className:"wrapper-col index"},r.a.createElement("h1",null,"Redux Todo List"),r.a.createElement("div",{className:"wrapper-row"},r.a.createElement("input",{className:"input",type:"text",onChange:this.handleInput,value:e}),r.a.createElement(N,{onClick:this.addTodosubmit},"submit")),this.renderTodoList())}}]),t}(o.Component);A.defaultProps={todo:{},todoAction:{}};var L=Object(f.c)(function(e){return{todo:e.todo}},function(e){return{todoAction:Object(b.b)(a,e)}})(A),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper-col index"},r.a.createElement("h1",null,"Page2"))}}]),t}(o.Component),P=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).changeColor=function(){n.setState(Object(C.a)(function(e){e.color="#000",e.name="yoyoyo"}))},n.state={color:"pink",name:"click"},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.color,n=e.name;return r.a.createElement("div",{className:"wrapper-col index"},r.a.createElement("h1",{style:{borderColor:"".concat(t),borderWidth:"3px",borderStyle:"solid"}},"Page3"),r.a.createElement(N,{onClick:this.changeColor},n))}}]),t}(o.Component),F=n(23),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper-row index"},r.a.createElement(F.a,{to:"/todo"},"todo"),r.a.createElement(F.a,{to:"/page2"},"page2"),r.a.createElement(F.a,{to:"/page3"},"page3")),r.a.createElement("div",null,e))}}]),t}(o.Component);I.defaultProps={children:{}};var U=n(6),R=n(35),B=n(30),V=n(31),W=n.n(V),G=n(43),J=n(21),X=n(45),$={todos:[],loading:!1},z=Object(C.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_LOADING":return void(e.loading=t.payload);case"ADD_TODO_SUC":return void(e.todos=[].concat(Object(X.a)(e.todos),[t.payload]));case"DELETE_TODO":var n=t.payload;return void(e.todos=e.todos.filter(function(e){return n!==e.id}));default:return e}}),M=function(e){return Object(b.c)({router:Object(J.b)(e),todo:z})},q=Object(U.a)({basename:"/react-start-kit"});var H=n(44),K=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,n=Object(G.createLogger)();return"dev"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-start-kit"}).REACT_APP_ENV?Object(b.e)(M(q),e,t(Object(b.a)(B.a,Object(R.a)(q),n,W.a))):Object(b.e)(M(q),e,Object(b.a)(B.a,W.a))}(),Q=r.a.createElement(I,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/todo",component:L}),r.a.createElement(u.a,{exact:!0,path:"/page2",component:S}),r.a.createElement(u.a,{exact:!0,path:"/page3",component:P}),r.a.createElement(u.a,{path:"/",component:L}))),Y=function(){return r.a.createElement(f.a,{store:K},r.a.createElement(H.Normalize,null),r.a.createElement(J.a,{history:q},Q))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.04491d75.chunk.js.map