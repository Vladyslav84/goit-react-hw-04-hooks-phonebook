(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={filter:"Filter_filter__3YES_"}},19:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(19),n(13)),i=n(10),u=n(2),l=n(3),b=n.n(l),m=n(24),j=n(0);var d=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},O=function(){d(""),o("")},h=Object(m.a)(),p=Object(m.a)();return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),O()},className:b.a.form,children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("label",{className:b.a.formItem,children:Object(j.jsx)("input",{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f,value:r,id:p})}),Object(j.jsx)("span",{className:b.a.number,children:"Number"}),Object(j.jsx)("label",{className:b.a.formItem,children:Object(j.jsx)("input",{autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f,value:l,id:h})}),Object(j.jsx)("button",{type:"submit",className:b.a.btn,children:"Add contact"})]})},f=n(12),O=n.n(f),h=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:O.a.title,children:"Find contacts by name"}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"text",value:e,onChange:n})})]})},p=n(6),x=n.n(p),_=n(7),C=n.n(_),v=function(t){var e=t.contactsArr,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){return Object(j.jsxs)("li",{className:x.a.contactitem,children:[Object(j.jsxs)("span",{children:[t.name," ",t.number]}),Object(j.jsx)("button",{type:"button",className:x.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})};v.prototype={name:C.a.string.isRequired,number:C.a.string.isRequired,id:C.a.string.isRequired};var g=v,N=n(8),S=n.n(N);var L=function(){var t,e=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("contactsList")))&&void 0!==t?t:[]),n=Object(u.a)(e,2),c=n[0],r=n[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),b=l[0],f=l[1];Object(a.useEffect)((function(){localStorage.setItem("contactsList",JSON.stringify(c))}),[c]);var O=b.toLocaleLowerCase(),p=c.filter((function(t){return t.name.toLocaleLowerCase().includes(O)}));return Object(j.jsxs)("div",{className:S.a.container,children:[Object(j.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(t){if(c.some((function(e){return e.name===t.name})))alert("".concat(t.name," is already in contacts"));else{var e=Object(i.a)(Object(i.a)({},t),{},{id:Object(m.a)()});r((function(t){return[e].concat(Object(s.a)(t))}))}}}),Object(j.jsx)("h2",{className:S.a.title,children:"Contacts"}),Object(j.jsx)(h,{value:b,onChange:function(t){f(t.currentTarget.value)}}),Object(j.jsx)(g,{contactsArr:p,onDeleteContact:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__3pTqw",formItem:"ContactForm_formItem__SgYUr",btn:"ContactForm_btn__xOi8A",number:"ContactForm_number__2CENq"}},6:function(t,e,n){t.exports={contactList:"ContactList_contactList__3Gecg",btn:"ContactList_btn__15tFM",contactitem:"ContactList_contactitem__3bNxM"}},8:function(t,e,n){t.exports={container:"App_container__yDorb",title:"App_title__1sWha"}}},[[23,1,2]]]);
//# sourceMappingURL=main.f6ecbb2b.chunk.js.map