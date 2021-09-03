(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[185],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return d},kt:function(){return N}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=a.createContext({}),u=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(m.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},o=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=u(e),N=r,g=o["".concat(m,".").concat(N)]||o[N]||k[N]||l;return e?a.createElement(g,i(i({ref:n},d),{},{components:e})):a.createElement(g,i({ref:n},d))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=o;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}o.displayName="MDXCreateElement"},2578:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return o}});var a=e(2122),r=e(9756),l=(e(7294),e(3905)),i=["components"],p={sidebar_position:28,title:"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"},m=void 0,u={unversionedId:"api/payment/api-payment-to-bank",id:"api/payment/api-payment-to-bank",isDocsHomePage:!1,title:"\u8f6c\u8d26\u5230\u94f6\u884c\u5361",description:"\u8d44\u6e90\u6587\u4ef6",source:"@site/docs/api/payment/api-payment-to-bank.md",sourceDirName:"api/payment",slug:"/api/payment/api-payment-to-bank",permalink:"/docs/api/payment/api-payment-to-bank",version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28,title:"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u8f6c\u8d26\u8bb0\u5f55",permalink:"/docs/api/payment/payment-history"},next:{title:"\u67e5\u8be2\u53ef\u8f6c\u8d26\u7528\u6237\u4fe1\u606f",permalink:"/docs/api/payment/payment-receiver"}},d=[{value:"\u8d44\u6e90\u6587\u4ef6",id:"\u8d44\u6e90\u6587\u4ef6",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"data\u8fd4\u56de\u5185\u5bb9",id:"data\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]}],k={toc:d};function o(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8d44\u6e90\u6587\u4ef6"},"\u8d44\u6e90\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u94f6\u884c\u4fe1\u606f\uff0c\u9700\u505a\u6210\u672c\u5730\u8d44\u6e90\nhttps://github.com/omise/banks-logo/blob/master/banks.json\n\u94f6\u884c\u56fe\u6807\uff0c\u9700\u505a\u6210\u672c\u5730\u8d44\u6e90\nhttps://github.com/omise/banks-logo/tree/master/th\n\n\u56fe\u6807\u4e0e\u94f6\u884c\u9700\u6709\u5173\u8054\u6027\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/payment-to-bank\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u6570\u91cf(\u683c\u5f0f\u4e3a5.00) \u5fc5\u987b\u5305\u542b\u5c0f\u6570\u70b9\u548c\u4e24\u4f4d\u5c0f\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankShortName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u7b80\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u6301\u5361\u4eba\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"10-20"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tradePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u91d1\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"ONE_MONEY_BANK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remark"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")))),(0,l.kt)("h2",{id:"data\u8fd4\u56de\u5185\u5bb9"},"data\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u94f6\u884c\u8d26\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fee"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiveAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5230\u8d26\u91d1\u989d")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bankShortName": "bbl",\n  "bankName": "Bangkok Bank",\n  "accountName": "simon",\n  "accountNumber": "82193981293928311",\n  "amount": "100.00",\n  "remark": "\u6d4b\u8bd5\u8f6c\u8d26\u5230\u94f6\u884c\u5361",\n  "type": "ONE_MONEY_BANK",\n  "tradePassword":"090807"\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": {\n    "accountNumber": "6881238819238412",\n    "dateTime": "15/08/2021 21:50:22",\n    "paymentNumber": "1426919198633885696",\n    "amount": "26.00 THB",\n    "fee": "15.00 THB",\n    "receiveAmount": "11.00 THB"\n  },\n  "msg": "SUCCESS"\n}\n')))}o.isMDXComponent=!0}}]);