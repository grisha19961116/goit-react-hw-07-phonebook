(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{33:function(t,e,n){t.exports={button__delete:"ContactList_button__delete__2EaXX"}},34:function(t,e,n){t.exports={input__filter:"Filter_input__filter__3EZWK"}},46:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),c=n.n(a),u=n(7),o=n.n(u),i=n(5),s=(n(45),n(46),n(47),n(12)),f=n(2),l=n.n(f),b=n(8),j=n(33),p=n.n(j),d=n(6),O=Object(d.a)("items/add",(function(t){return{payload:t}})),h=Object(d.a)("items/remove",(function(t){return{payload:t}})),m=Object(d.a)("filter/addFilter",(function(t){return{payload:t}})),v=Object(d.a)("items/request",(function(t){return{payload:t}})),x=Object(d.a)("items/success",(function(t){return{payload:t}})),y=Object(d.a)("items/error",(function(t){return{payload:t}})),w=n(23);w.defaults.baseURL="http://localhost:3000";var _=function(){var t=Object(b.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.post("/contacts",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.delete("/contacts/".concat(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(i.c)((function(t){return t})),e=t.items,n=t.filter,a=t.isLoading,c=Object(i.b)(),u=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:c(h(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return 0===e.length?null:(console.log(a),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:a}),Object(r.jsx)("ul",{children:function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n).map((function(t){var e=t.id,n=t.name,a=t.phone;return Object(r.jsxs)("li",{children:[n," : ",a,Object(r.jsx)("button",{onClick:function(){u(e)},className:p.a.button__delete,children:"Delete"})]},e)}))})]}))},S=n(21),E=(n(67),n(74));n(23).defaults.baseURL="http://localhost:3000";var L=n(11),F=Object(L.a)([function(t){return t}],(function(t){return t}));var R=function(){var t=Object(i.c)(F).items,e=Object(i.b)(),n=function(){var t=Object(b.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n);case 2:e(O(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){e(function(){var t=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(v("request")),t.next=4,_();case 4:n=t.sent,e(x(n)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),e(y([])),e(v("error"));case 12:return t.prev=12,e(v("success")),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(e){return t.apply(this,arguments)}}())}),[e]);var c=Object(a.useState)(""),u=Object(S.a)(c,2),o=u[0],f=u[1],j=Object(a.useState)(""),p=Object(S.a)(j,2),d=p[0],h=p[1],m=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":f(r);break;case"phone":h(r);break;default:console.log("Sorry, we are not have "+n+".")}},w=function(){return o&&d?function(t,e){var n=!!t.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n}(t,o):(Object(s.b)("Some filed is empty"),!1)};return Object(r.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),w()){var e={id:Object(E.a)(),name:o,phone:d};return f(""),h(""),n(e)}},children:[Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:o,onChange:m}),Object(r.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:d,onChange:m}),Object(r.jsx)("button",{type:"submit",children:"Add Contact"})]})},q=n(34),D=n.n(q),J=function(){var t=Object(i.c)((function(t){return t})).filter,e=Object(i.b)();return Object(r.jsx)("input",{className:D.a.input__filter,type:"text",name:"filter",value:t,onChange:function(t){var n,r=t.target;return n=r.value,e(m(n))},placeholder:"Enter name for Search"})};n(68);var M,N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"From Contact"}),Object(r.jsx)(R,{}),Object(r.jsx)("h2",{children:"Contacts list"}),Object(r.jsx)(J,{}),Object(r.jsx)(C,{}),Object(r.jsx)(s.a,{})]})},U=n(3),X=n(13),A=(n(69),n(10)),B=n(22),I=Object(d.b)([],(M={},Object(A.a)(M,O,(function(t,e){var n=e.payload;return[].concat(Object(B.a)(t),[n])})),Object(A.a)(M,h,(function(t,e){var n=e.payload;return Object(B.a)(t.filter((function(t){return t.id!==n})))})),Object(A.a)(M,x,(function(t,e){return e.payload})),Object(A.a)(M,y,(function(t,e){return e.payload})),M)),K=Object(d.b)("",Object(A.a)({},m,(function(t,e){return e.payload}))),W=Object(d.b)("",Object(A.a)({},v,(function(t,e){return e.payload}))),Z=Object(U.combineReducers)({items:I,filter:K,isLoading:W}),z=Object(U.createStore)(Z,Object(U.applyMiddleware)(X.a));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:z,children:Object(r.jsx)(N,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.14ef6940.chunk.js.map