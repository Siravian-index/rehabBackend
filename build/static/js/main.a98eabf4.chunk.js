(this.webpackJsonprehab=this.webpackJsonprehab||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(20),a=c.n(r),o=c(6),s=c(8),i=c(4),l=c(0),d=function(){return Object(l.jsx)("footer",{className:"fixed bottom-0 right-0 left-0",children:Object(l.jsxs)("p",{className:"text-xs text-center",children:["Made with ","<3"," by"," ",Object(l.jsx)("a",{href:"https://github.com/Siravian-index",target:"_blank",rel:"noreferrer",className:"hover:text-blue-700",children:"David Esteban"})]})})},u=function(){var e=Object(o.b)().logout;return Object(l.jsx)("button",{className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-2 rounded",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},j=c(3),b=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c},p=function(){var e=Object(o.b)().user,t=b();return Object(l.jsxs)("nav",{className:" md:w-10/12 m-auto flex justify-between items-center mt-1",children:[Object(l.jsxs)("ul",{className:"md:w-1/2 w-2/3 flex justify-evenly items-center",children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("img",{className:"object-contain h-10 w-full",src:e.picture,alt:e.name})})}),t.width>590&&Object(l.jsx)("li",{children:e.name}),Object(l.jsx)("li",{className:"hover:text-blue-700",children:Object(l.jsx)(s.b,{className:"",to:"/sells",children:"Sells"})}),Object(l.jsx)("li",{className:"hover:text-blue-700",children:Object(l.jsx)(s.b,{to:"/store",children:"Store"})}),Object(l.jsx)("li",{className:"hover:text-blue-700",children:Object(l.jsx)(s.b,{to:"/users",children:"Users"})})]}),Object(l.jsx)("div",{children:Object(l.jsx)(u,{})})]})},h=c(2),x=c(15),m=c(5),f=c.n(m),O=c(10),v=Object(n.createContext)(null),g=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(j.a)(c,2),a=r[0],o=r[1],s=Object(n.useState)({clientName:"",clientID:"",totalValue:"",sellerName:"",products:[{productName:"",productPrice:"",productAmount:""}]}),i=Object(j.a)(s,2),d=i[0],u=i[1],b=Object(n.useState)({clientName:"",clientID:"",totalValue:"",sellerName:"",_id:"",products:[{productName:"",productPrice:"",productAmount:""}]}),p=Object(j.a)(b,2),m=p[0],g=p[1],y=function(){var e=Object(O.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/sells");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/sell/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,g(n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y()}),[]);var w=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/sell",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:I(),y();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/sell/",{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=Object(n.useState)([{product:"",productAmount:""}]),P=Object(j.a)(C,2),k=P[0],F=P[1],I=function(){F([{product:"",productAmount:""}]),u({clientName:"",clientID:"",totalValue:"",sellerName:"",products:[{productName:"",productPrice:"",productAmount:""}]})},E=":>>",D=Object(n.useState)(""),A=Object(j.a)(D,2),T=A[0],L=A[1],q=function(){var e=Object(O.a)(f.a.mark((function e(t,c){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.reduce((function(e,t){var c=t.product.split(E),n=Object(j.a)(c,2),r=n[0],a=n[1];return r&&a&&e.push({productName:r,productPrice:a,productAmount:t.productAmount}),e}),[]),e.next=3,u(Object(h.a)(Object(h.a)({},d),{},{totalValue:T,sellerName:t,products:n}));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),U=function(){var e=Object(O.a)(f.a.mark((function e(t,c){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.reduce((function(e,t){var c=t.product.split(E),n=Object(j.a)(c,2),r=n[0],a=n[1];return r&&a&&e.push({productName:r,productPrice:a,productAmount:t.productAmount}),e}),[]),g(Object(h.a)(Object(h.a)({},m),{},{totalValue:T,sellerName:t,products:n}));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(l.jsx)(v.Provider,{value:{removeSellById:function(e){fetch("http://localhost:8000/api/sell/".concat(e),{method:"DELETE"}),o((function(t){return t.filter((function(t){return t._id!==e}))}))},editSellById:S,newSell:d,setNewSell:u,sellList:a,setSellList:o,createSell:w,updatedSell:m,setUpdatedSell:g,getOneSellById:N,clearForm:I,formValues:k,setFormValues:F,delimiter:E,handleChange:function(e,t){var c=Object(x.a)(k);c[e][t.target.name]=t.target.value,F(c)},total:T,setTotal:L,addFormFields:function(){F([].concat(Object(x.a)(k),[{product:"",productAmount:""}]))},removeFormFields:function(e){var t=Object(x.a)(k);t.splice(e,1),F(t)},getTotal:function(e){return e.reduce((function(e,t){var c=t.product.split(E),n=Object(j.a)(c,2),r=n[0],a=n[1];return r&&a?e+Number(a)*Number(t.productAmount):e}),0)},updateNewSellState:q,updateSetUpdatedSell:U},children:t})},y=Object(n.createContext)(null),N=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(j.a)(c,2),a=r[0],o=r[1],s=Object(n.useState)({productName:"",description:"",productPrice:"",status:""}),i=Object(j.a)(s,2),d=i[0],u=i[1],b=Object(n.useState)({productName:"",description:"",productPrice:"",status:"",_id:""}),p=Object(j.a)(b,2),h=p[0],x=p[1],m=function(){var e=Object(O.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(O.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/product/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,x(n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m()}),[]);var g=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/product",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/product/",{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(y.Provider,{value:{products:a,setProducts:o,createProduct:g,editProductById:N,removeProductById:function(e){fetch("http://localhost:8000/api/product/".concat(e),{method:"DELETE"}),o((function(t){return t.filter((function(t){return t._id!==e}))}))},newlyCreatedProduct:d,setNewlyCreatedProduct:u,getOneProductById:v,clearForm:function(){u({productName:"",description:"",productPrice:"",status:""})},updatedProduct:h,setUpdatedProduct:x},children:t})},w=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(v),s=a.formValues,d=a.clearForm,u=a.delimiter,b=a.handleChange,p=a.total,x=a.setTotal,m=a.addFormFields,f=a.removeFormFields,O=a.getTotal,g=a.updatedSell,N=a.setUpdatedSell,w=a.updateSetUpdatedSell,S=a.getOneSellById,C=a.editSellById,P=Object(n.useContext)(y).products,k=Object(o.b)().user,F=Object(i.f)().id;Object(n.useEffect)((function(){S(F)}),[]),Object(n.useEffect)((function(){x(O(s))}),[s]),Object(n.useEffect)((function(){var e=!0;return e&&w(k.name,s),function(){e=!1}}),[p,s]),Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),3e3)}),[c]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{}),Object(l.jsx)("h3",{className:"text-center my-5",children:"Edit Sell"}),Object(l.jsxs)("h3",{className:"text-center my-5",children:["Sell's id: ",F]}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(g)},className:"flex flex-col justify-center items-center gap-5",children:[Object(l.jsx)("label",{htmlFor:"client",children:Object(l.jsx)("input",{required:!0,id:"client",type:"text",placeholder:"Client Name",value:g.clientName,onChange:function(e){N(Object(h.a)(Object(h.a)({},g),{},{clientName:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"client",children:Object(l.jsx)("input",{required:!0,id:"client",type:"number",placeholder:"Client ID",value:g.clientID,onChange:function(e){N(Object(h.a)(Object(h.a)({},g),{},{clientID:e.target.value}))}})}),s.map((function(e,t){return Object(l.jsxs)("div",{className:"flex justify-center items-center gap-x-5",children:[Object(l.jsxs)("select",{className:" bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline",id:"product",name:"product",onChange:function(e){return b(t,e)},children:[Object(l.jsx)("option",{defaultValue:!0,value:"noProduct",children:"Select Product"}),P.map((function(e,t){return Object(l.jsx)("option",{value:"".concat(e.productName).concat(u).concat(e.productPrice),children:e.productName},t)}))]}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"number",min:"1",max:"99",name:"productAmount",placeholder:"Amount",required:!0,value:e.productAmount,onChange:function(e){return b(t,e)}})}),t?Object(l.jsx)("button",{type:"button",className:" bg-red-200 hover:bg-red-500 hover:text-white text-red-500 text-center py-1 px-2 rounded",onClick:function(){return f(t)},children:"-"}):null]},t)})),Object(l.jsx)("div",{className:"button-section",children:Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"button",onClick:function(){return m()},children:"Add"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Total: ",p," "]})}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"submit",onClick:function(){return r(!0)},children:"Submit"})]}),Object(l.jsxs)("div",{className:"flex flex-col justify-center items-center mt-4",children:[c&&Object(l.jsx)("div",{className:"flex justify-center items-center",children:Object(l.jsx)("p",{children:"Sell updated Successfully! Return now."})}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",onClick:function(){return d()},children:"Clear"})]})]})},S=function(){var e=Object(n.useContext)(v),t=e.newSell,c=e.setNewSell,r=e.createSell,a=e.formValues,s=e.clearForm,i=e.delimiter,d=e.handleChange,u=e.total,j=e.setTotal,b=e.addFormFields,p=e.removeFormFields,x=e.getTotal,m=e.updateNewSellState,f=Object(n.useContext)(y).products,O=Object(o.b)().user;return Object(n.useEffect)((function(){j(x(a))}),[a]),Object(n.useEffect)((function(){m(O.name,a)}),[u,a,O.name]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{action:"POST",onSubmit:function(e){e.preventDefault(),r(t)},className:"flex flex-col justify-center items-center gap-5",children:[Object(l.jsx)("label",{htmlFor:"client",children:Object(l.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,id:"client",type:"text",placeholder:"Client Name",value:t.clientName,onChange:function(e){c(Object(h.a)(Object(h.a)({},t),{},{clientName:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"client",children:Object(l.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,id:"client",type:"number",placeholder:"Client ID",value:t.clientID,onChange:function(e){c(Object(h.a)(Object(h.a)({},t),{},{clientID:e.target.value}))}})}),a.map((function(e,t){return Object(l.jsxs)("div",{className:"flex justify-center items-center gap-x-5",children:[Object(l.jsxs)("select",{className:" bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline",id:"product",name:"product",onChange:function(e){return d(t,e)},children:[Object(l.jsx)("option",{defaultValue:!0,value:"noProduct",children:"Select Product"}),f.map((function(e,t){return Object(l.jsx)("option",{value:"".concat(e.productName).concat(i).concat(e.productPrice),children:e.productName},t)}))]}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"number",min:"1",max:"99",name:"productAmount",placeholder:"Amount",required:!0,value:e.productAmount,onChange:function(e){return d(t,e)}})}),t?Object(l.jsx)("button",{type:"button",className:" bg-red-200 hover:bg-red-500 hover:text-white text-red-500 text-center py-1 px-2 rounded",onClick:function(){return p(t)},children:"-"}):null]},t)})),Object(l.jsx)("div",{className:"button-section",children:Object(l.jsx)("button",{className:"bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded",type:"button",onClick:function(){return b()},children:"Add"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Total: ",u," "]})}),u>0&&Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"submit",children:"Submit"})]}),Object(l.jsx)("div",{className:"flex justify-center items-center mt-4",children:Object(l.jsx)("button",{className:"bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded",onClick:function(){return s()},children:"Clear"})})]})},C=function(e){var t=e.item,c=Object(n.useContext)(v).removeSellById;return Object(l.jsxs)("li",{className:"text-left my-5 md:p-4",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Seller:"})," ",t.sellerName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Client:"})," ",t.clientName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Client ID:"})," ",t.clientID]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Total:"})," ",t.totalValue]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Details: "}),t.products.map((function(e,t){return Object(l.jsxs)("div",{className:"ml-4 my-1 pb-1 border-b",children:[Object(l.jsxs)("p",{className:"font-bold",children:["Product:",Object(l.jsx)("span",{className:"font-normal",children:e.productName})]}),Object(l.jsxs)("p",{className:"font-bold",children:["Price: ",Object(l.jsx)("span",{className:"font-normal",children:e.productPrice})]}),Object(l.jsxs)("p",{className:"font-bold",children:["Amount:",Object(l.jsx)("span",{className:"font-normal",children:e.productAmount})]})]},t)}))]}),Object(l.jsxs)("div",{className:"flex items-center justify-center gap-4 mt-4",children:[Object(l.jsx)("button",{className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-2 rounded",onClick:function(){c(t._id)},children:"Delete"}),Object(l.jsx)(s.b,{to:"/edit/sell/".concat(t._id),children:Object(l.jsx)("button",{className:"bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-2 rounded",children:"Edit"})})]})]})},P=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("clientName"),o=Object(j.a)(a,2),s=o[0],i=o[1],d=Object(n.useContext)(v).sellList.filter((function(e){return e[s].toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[Object(l.jsx)("input",{className:"shadow appearance-none border rounded mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search by:",value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsxs)("select",{className:" bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline",name:"search",id:"searchSells",onChange:function(e){i(e.target.value)},children:[Object(l.jsx)("option",{defaultValue:!0,value:"clientName",children:"Client's Name"}),Object(l.jsx)("option",{value:"clientID",children:"Client's Id"}),Object(l.jsx)("option",{value:"_id",children:"Product's Id"})]})]}),Object(l.jsx)("ul",{className:"md:w-11/12 md:flex md:flex-wrap md:gap-4 md:justify-around  mx-auto my-3 border px-4",children:d.map((function(e){return Object(l.jsx)(C,{item:e},e._id)}))})]})},k=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4 my-5",children:[Object(l.jsx)("h3",{children:"What do you need to do?"}),Object(l.jsxs)("div",{className:"mb-5",children:[Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center mx-3 py-2 px-4 rounded",onClick:function(){r("add")},children:"New sell"}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",onClick:function(){r("list")},children:"See List"})]})]}),"add"===c&&Object(l.jsx)(S,{}),"list"===c&&Object(l.jsx)(P,{})]})},F=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(i.f)().id,o=Object(n.useContext)(y),d=o.editProductById,u=o.updatedProduct,b=o.setUpdatedProduct,p=o.clearForm,x=o.getOneProductById;Object(n.useEffect)((function(){x(a)}),[]),Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),3e3)}),[c]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"text-center my-5",children:"Edit product"}),Object(l.jsxs)("h3",{className:"text-center my-5",children:["Product's id: ",a]}),Object(l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),d(u),p()},className:"flex flex-col justify-center items-center gap-5",children:[Object(l.jsx)("label",{htmlFor:"productName",children:Object(l.jsx)("input",{required:!0,id:"productName",type:"text",placeholder:"Product Name",value:u.productName,onChange:function(e){b(Object(h.a)(Object(h.a)({},u),{},{productName:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"description",children:Object(l.jsx)("input",{type:"text",required:!0,id:"description",placeholder:"Product description",value:u.description,onChange:function(e){b(Object(h.a)(Object(h.a)({},u),{},{description:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"productPrice",children:Object(l.jsx)("input",{required:!0,id:"productPrice",type:"text",placeholder:"Product Price",value:u.productPrice,onChange:function(e){b(Object(h.a)(Object(h.a)({},u),{},{productPrice:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"status",children:Object(l.jsx)("input",{required:!0,id:"status",type:"text",placeholder:"Status",value:u.status,onChange:function(e){b(Object(h.a)(Object(h.a)({},u),{},{status:e.target.value}))}})}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"submit",onClick:function(){return r(!0)},children:"Add"})]}),Object(l.jsx)("div",{className:"flex justify-center items-center my-5",children:Object(l.jsx)(s.b,{to:"/store",children:Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"submit",children:"Go back"})})}),c&&Object(l.jsx)("div",{className:"flex justify-center items-center",children:Object(l.jsx)("p",{children:"Product updated Successfully! Return now."})})]})},I=function(){var e=Object(n.useContext)(y),t=e.createProduct,c=e.newlyCreatedProduct,r=e.setNewlyCreatedProduct,a=e.clearForm;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),t(c),a()},className:"flex flex-col justify-center items-center gap-5",children:[Object(l.jsx)("label",{htmlFor:"productName",children:Object(l.jsx)("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"productName",type:"text",placeholder:"Product Name",value:c.productName,onChange:function(e){r(Object(h.a)(Object(h.a)({},c),{},{productName:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"description",children:Object(l.jsx)("input",{type:"text",required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",placeholder:"Product description",value:c.description,onChange:function(e){r(Object(h.a)(Object(h.a)({},c),{},{description:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"productPrice",children:Object(l.jsx)("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"productPrice",type:"text",placeholder:"Product Price",value:c.productPrice,onChange:function(e){r(Object(h.a)(Object(h.a)({},c),{},{productPrice:e.target.value}))}})}),Object(l.jsx)("label",{htmlFor:"status",children:Object(l.jsx)("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"status",type:"text",placeholder:"Status",value:c.status,onChange:function(e){r(Object(h.a)(Object(h.a)({},c),{},{status:e.target.value}))}})}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",type:"submit",children:"Submit1"})]})})},E=function(e){var t=e.item,c=Object(n.useContext)(y).removeProductById;return Object(l.jsxs)("li",{className:"text-left my-5 md:p-4",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Product Name:"})," ",t.productName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Product Description:"})," ",t.description]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Status:"})," ",t.status]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"Price:"})," ",t.productPrice]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"font-bold",children:"id:"})," ",t._id]}),Object(l.jsxs)("div",{className:"flex items-center justify-center gap-4 mt-4",children:[Object(l.jsx)("button",{className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-2 rounded",onClick:function(){c(t._id)},children:"Delete"}),Object(l.jsx)(s.b,{to:"/edit/product/".concat(t._id),children:Object(l.jsx)("button",{className:"bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-2 rounded",children:"Edit"})})]})]})},D=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("description"),o=Object(j.a)(a,2),s=o[0],i=o[1],d=Object(n.useContext)(y).products.filter((function(e){return e[s].toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[Object(l.jsx)("input",{className:"shadow appearance-none border rounded mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search by:",value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsxs)("select",{className:" bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline",name:"search",id:"searchSells",onChange:function(e){i(e.target.value)},children:[Object(l.jsx)("option",{defaultValue:!0,value:"description",children:"Product's Description"}),Object(l.jsx)("option",{value:"productName",children:"Product's Name"}),Object(l.jsx)("option",{value:"_id",children:"Product's Id"})]})]}),Object(l.jsx)("ul",{className:"md:w-11/12 md:flex md:flex-wrap md:gap-4 md:justify-around mx-auto my-3 border px-4",children:d.map((function(e){return Object(l.jsx)(E,{item:e},e._id)}))})]})},A=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex flex-col justify-center items-center gap-4 my-5",children:[Object(l.jsx)("h3",{children:"What do you need to do?"}),Object(l.jsxs)("div",{className:"mb-5",children:[Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center mx-3 py-2 px-4 rounded",onClick:function(){r("add")},children:"New Product"}),Object(l.jsx)("button",{className:"bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded",onClick:function(){r("list")},children:"See List"})]})]}),"add"===c&&Object(l.jsx)(I,{}),"list"===c&&Object(l.jsx)(D,{})]})},T=function(){var e=Object(o.b)().loginWithRedirect;return Object(l.jsx)("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:function(){return e()},children:"Log In"})},L=function(){return Object(l.jsxs)("div",{className:"w-full m-auto my-10 p-10 text-center border",children:[Object(l.jsx)("h3",{className:"my-5 text-3xl",children:"Welcome to the store!"}),Object(l.jsxs)("p",{className:"my-5",children:["Please Login using a ",Object(l.jsx)("span",{className:"underline",children:"Google"})," account"," "]}),Object(l.jsx)("div",{className:"my-5",children:Object(l.jsx)(T,{})})]})},q=function(){var e=Object(o.b)(),t=e.isAuthenticated;return e.isLoading?Object(l.jsx)("div",{className:"text-center",children:"Loading ..."}):t?Object(l.jsxs)(s.a,{children:[Object(l.jsx)(p,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/store",children:Object(l.jsx)(N,{children:Object(l.jsx)(A,{})})}),Object(l.jsx)(i.a,{exact:!0,path:"/edit/product/:id",children:Object(l.jsx)(N,{children:Object(l.jsx)(F,{})})}),Object(l.jsx)(i.a,{exact:!0,path:"/sells",children:Object(l.jsx)(N,{children:Object(l.jsx)(g,{children:Object(l.jsx)(k,{})})})}),Object(l.jsx)(i.a,{exact:!0,path:"/edit/sell/:id",children:Object(l.jsx)(N,{children:Object(l.jsx)(g,{children:Object(l.jsx)(w,{})})})}),Object(l.jsx)(i.a,{exact:!0,path:"/users"}),Object(l.jsxs)(i.a,{exact:!0,path:"/",children:[Object(l.jsx)("div",{}),Object(l.jsx)(d,{})]})]})]}):Object(l.jsx)(L,{})};c(43);a.a.render(Object(l.jsx)(o.a,{domain:"dev-2rv8c3jm.us.auth0.com",clientId:"SVkXn8UGq2ma8B16C4MihKOtDp8EGrJX",redirectUri:window.location.origin,children:Object(l.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a98eabf4.chunk.js.map