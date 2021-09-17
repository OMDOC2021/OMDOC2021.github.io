(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[3025],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),o=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(r),m=a,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2014:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i=["components"],p={sidebar_position:6,title:"\u5fd8\u8bb0/\u91cd\u7f6e\u8d44\u91d1\u5bc6\u7801"},u=void 0,o={unversionedId:"api/user/reset-trade-password",id:"api/user/reset-trade-password",isDocsHomePage:!1,title:"\u5fd8\u8bb0/\u91cd\u7f6e\u8d44\u91d1\u5bc6\u7801",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/user/reset-trade-password.md",sourceDirName:"api/user",slug:"/api/user/reset-trade-password",permalink:"/docs/api/user/reset-trade-password",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5fd8\u8bb0/\u91cd\u7f6e\u8d44\u91d1\u5bc6\u7801"},sidebar:"tutorialSidebar",previous:{title:"\u5fd8\u8bb0/\u91cd\u7f6e\u5bc6\u7801",permalink:"/docs/api/user/reset-password"},next:{title:"\u4fee\u6539\u767b\u5f55\u5bc6\u7801",permalink:"/docs/api/user/mod-password"}},d=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url-1",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5-1",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]}],s={toc:d};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h1",{id:"1\u83b7\u53d6\u9a8c\u8bc1\u7801"},"1.\u83b7\u53d6\u9a8c\u8bc1\u7801"),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/reset/trade-password/send/code\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e")))),(0,l.kt)("h1",{id:"2\u91cd\u7f6e\u5bc6\u7801"},"2.\u91cd\u7f6e\u5bc6\u7801"),(0,l.kt)("h2",{id:"\u8bf7\u6c42url-1"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/reset/trade-password/check/code\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5-1"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},'"4567"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"8-16"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u540c\u65f6\u5305\u542b\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u7b26\u53f7\uff08!@#$%^&*")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")))))}c.isMDXComponent=!0}}]);