(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[7722],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),N=k(a),o=r,g=N["".concat(p,".").concat(o)]||N[o]||d[o]||l;return a?n.createElement(g,m(m({ref:e},u),{},{components:a})):n.createElement(g,m({ref:e},u))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=N;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,m[1]=i;for(var k=2;k<l;k++)m[k]=a[k];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3813:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return u},default:function(){return N}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),m=["components"],i={sidebar_position:24,title:"\u6d88\u606f\u5217\u8868\u67e5\u8be2"},p=void 0,k={unversionedId:"api/message/api-message-list",id:"api/message/api-message-list",isDocsHomePage:!1,title:"\u6d88\u606f\u5217\u8868\u67e5\u8be2",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/message/api-message-list.md",sourceDirName:"api/message",slug:"/api/message/api-message-list",permalink:"/docs/api/message/api-message-list",version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"\u6d88\u606f\u5217\u8868\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u5145\u503c\u72b6\u6001\u67e5\u8be2",permalink:"/docs/api/deposit/deposit-status"},next:{title:"\u901a\u8fc7\u6d88\u606f\u6807\u7b7e\u67e5\u8be2",permalink:"/docs/api/message/api-message-query"}},u=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"data\u8fd4\u56de\u5185\u5bb9",id:"data\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"title \u8bf4\u660e",id:"title-\u8bf4\u660e",children:[]},{value:"body\u8bf4\u660e",id:"body\u8bf4\u660e",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]}],d={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"GET\u8bf7\u6c42"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/message/list\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"1628320978360"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u4e3a\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5f00\u59cb\u65f6\u95f4\u6233\uff0c\u8fd4\u56de20\u6761\u6d88\u606f\uff0c\u4e3a\u7a7a\u65f6\uff0c\u8fd4\u56de\u622a\u81f3\u5f53\u524d\u65f6\u95f4\u5230\u73b0\u5728\u5f9720\u5929\u6570\u636e")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursor"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")))),(0,l.kt)("h2",{id:"data\u8fd4\u56de\u5185\u5bb9"},"data\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b\uff0c\u524d\u7aef\u987b\u6839\u636e\u6d88\u606f\u7c7b\u578b\uff0c\u663e\u793a\u4e0d\u540c\u7684title\u4ee5\u53ca\u56fd\u9645\u5316")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5185\u5bb9")))),(0,l.kt)("h2",{id:"title-\u8bf4\u660e"},"title \u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u7801\u6210\u529f\u65f6\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAY_RECEIVE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u7801\u4ed8\u6b3e\u6210\u529f\u65f6\uff0c\u6536\u6b3e\u65b9\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INCOME"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_RECEIVE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u6536\u6b3e\u65b9\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KYC_SUCCESS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u540d\u8ba4\u8bc1\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KYC_REJECT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u540d\u8ba4\u8bc1\u5931\u8d25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_TO_BANK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_TO_BANK_RETURN"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\u88ab\u9000\u56de")))),(0,l.kt)("h2",{id:"body\u8bf4\u660e"},"body\u8bf4\u660e"),(0,l.kt)("p",null,"body\u4e2d\u5305\u542b\u5404\u79cd\u6d88\u606f\u7ed3\u6784\u4f53\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#payment"},"\u8f6c\u8d26")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#payment_receive"},"\u8f6c\u8d26\u6536\u6b3e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#income"},"\u5145\u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pay"},"\u4ed8\u6b3e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pay_receive"},"\u4ed8\u6b3e\u6536\u6b3e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kyc_success"},"KYC\u8ba4\u8bc1\u6210\u529f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kyc_reject"},"KYC\u8ba4\u8bc1\u5931\u8d25")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#payment_to_bank"},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#payment_to_bank_return"},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\u88ab\u9000\u56de"))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"payment"},"\u8f6c\u8d26"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"payment"},"\u8f6c\u8d26\u6536\u6b3e"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"income"},"\u5145\u503c"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankAccountName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u94f6\u884c\u8d26\u6237\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankAccountNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u94f6\u884c\u8d26\u6237\u8d26\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\uff08BBL_QR:BBL\u901a\u9053,SCB_QR:SCB\u901a\u9053,OFF_LINE_CASH:\u7ebf\u4e0b\u67dc\u53f0\u5145\u503c\uff09")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"income"},"\u4ed8\u6b3e\u65b9"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u4eba\u8d26\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u4eba\u8d26\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u91d1\u989d")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"income"},"\u4ed8\u6b3e\u6536\u6b3e\u65b9"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u4eba\u8d26\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u4eba\u8d26\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u91d1\u989d")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"kyc_success"},"\u5b9e\u540d\u8ba4\u8bc1\u6210\u529f"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u8005\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u72b6\u6001\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u90ae\u7bb1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u624b\u673a\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kycTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u64cd\u4f5c\u65f6\u95f4")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"kyc_reject"},"\u5b9e\u540d\u8ba4\u8bc1\u5931\u8d25"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u8005\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u72b6\u6001\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u90ae\u7bb1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u624b\u673a\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kycTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u64cd\u4f5c\u65f6\u95f4")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"payment_to_bank"},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"OneMoney\u8d26\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u6301\u5361\u4eba\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411\uff08IN:\u88ab\u9000\u51fa\u8f6c\u5165\uff0cOUT:\u8f6c\u51fa\uff09")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{id:"payment_to_bank_return"},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\u88ab\u9000\u56de"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"OneMoney\u8d26\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paymentNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bankName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u6301\u5361\u4eba\u59d3\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411\uff08IN:\u88ab\u9000\u51fa\u8f6c\u5165\uff0cOUT:\u8f6c\u51fa\uff09")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": [\n    {\n      "title": "PAYMENT_TO_BANK",\n      "body": {\n        "payer": "0811223344",\n        "paymentNumber": "1424672091185217536",\n        "amount": "18.00",\n        "bankName": "scb",\n        "accountNumber": "189023080123809814",\n        "accountName": "simon",\n        "createTime": 1628503270504,\n        "finishedTime": 1628503270762,\n        "direction": "IN"\n      },\n      "createTime": 1628503270998\n    },\n    {\n      "title": "PAY",\n      "body": {\n        "payNumber": "1423953687805558784",\n        "payer": "0811223345",\n        "payee": "0811223344",\n        "amount": "5.00",\n        "createTime": 1628331989629,\n        "finishedTime": 1628332104311\n      },\n      "createTime": 1628332104337\n    },\n    {\n      "title": "PAY_RECEIVE",\n      "body": {\n        "payNumber": "1423953687805558784",\n        "payer": "0811223345",\n        "payee": "0811223344",\n        "amount": "5.00",\n        "createTime": 1628331989629,\n        "finishedTime": 1628332104311\n      },\n      "createTime": 1628332104345\n    },\n    {\n      "title": "INCOME",\n      "body": {\n        "amount": "3000.00",\n        "bankAccountName": "",\n        "bankAccountNumber": "",\n        "createTime": 1628320867691,\n        "finishedTime": 1628320867697,\n        "type": "OFF_LINE_CASH"\n      },\n      "createTime": 1628320867709\n    },\n    {\n      "title": "PAYMENT",\n      "body": {\n        "paymentNumber": "1423907503229501440",\n        "amount": "200.00",\n        "createTime": 1628320978360,\n        "finishedTime": 1628320978369,\n        "payer": "0811223344",\n        "payee": "0811223345"\n      },\n      "createTime": 1628320978378\n    },\n    {\n      "title": "PAYMENT_RECEIVE",\n      "body": {\n        "paymentNumber": "1423907503229501440",\n        "amount": "200.00",\n        "createTime": 1628320978360,\n        "finishedTime": 1628320978369,\n        "payer": "0811223344",\n        "payee": "0811223345"\n      },\n      "createTime": 1628320978381\n    },\n    {\n      "title": "KYC_REJECT",\n      "body": {\n        "name": "zhangxiaobai",\n        "status": "fail",\n        "msg": "\u8eab\u4efd\u8bc1\u4e0d\u6e05\u6670",\n        "email": "zhangxiaobai@qq.com",\n        "mobile": "0899990000",\n        "kycTime": 1628332812129\n      },\n      "createTime": 1628332812130\n    },\n    {\n      "title": "KYC_SUCCESS",\n      "body": {\n        "name": "zhangxiaobai",\n        "status": "success",\n        "msg": "ok",\n        "email": "zhangxiaobai@qq.com",\n        "mobile": "0899990000",\n        "kycTime": 1628320777638\n      },\n      "createTime": 1628320777638\n    }\n  ],\n  "cursor": 1628332104311\n}\n')))}N.isMDXComponent=!0}}]);