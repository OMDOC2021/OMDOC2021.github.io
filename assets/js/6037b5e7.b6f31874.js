(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[4221],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=o(n),k=r,g=c["".concat(u,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9463:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:40,title:"\u67e5\u8be2\u53ef\u8f6c\u8d26\u7528\u6237\u4fe1\u606f"},u=void 0,o={unversionedId:"api/payment/payment-receiver",id:"api/payment/payment-receiver",isDocsHomePage:!1,title:"\u67e5\u8be2\u53ef\u8f6c\u8d26\u7528\u6237\u4fe1\u606f",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/payment/payment-receiver.md",sourceDirName:"api/payment",slug:"/api/payment/payment-receiver",permalink:"/docs/api/payment/payment-receiver",version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"\u67e5\u8be2\u53ef\u8f6c\u8d26\u7528\u6237\u4fe1\u606f"},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u8d26\u5230\u94f6\u884c\u5361",permalink:"/docs/api/payment/api-payment-to-bank"},next:{title:"\u4f59\u989d\u67e5\u8be2",permalink:"/docs/api/balance/account-balance"}},m=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"data\u8fd4\u56de\u5185\u5bb9",id:"data\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"GET\u8bf7\u6c42"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/receiver/info\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiverUsername"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u7528\u6237\u540d")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")))),(0,l.kt)("h2",{id:"data\u8fd4\u56de\u5185\u5bb9"},"data\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u767b\u5f55\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf\u5730\u5740")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "receiverUsername": "zhangxiaobai0914@163.com"\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": {\n    "username": "0811223345",\n    "name": "zhangxiaobai",\n    "avatar": "https://img0.baidu.com/it/u=3353211517,995971476&fm=26&fmt=auto&gp=0.jpg"\n  },\n  "msg": "SUCCESS"\n}\n')))}c.isMDXComponent=!0}}]);