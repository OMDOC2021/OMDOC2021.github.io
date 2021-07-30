(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[93],{3905:function(t,n,a){"use strict";a.d(n,{Zo:function(){return k},kt:function(){return N}});var e=a(7294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=e.createContext({}),u=function(t){var n=e.useContext(d),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},k=function(t){var n=u(t.components);return e.createElement(d.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},g=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=u(a),N=l,o=g["".concat(d,".").concat(N)]||g[N]||m[N]||r;return a?e.createElement(o,i(i({ref:n},k),{},{components:a})):e.createElement(o,i({ref:n},k))}));function N(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3267:function(t,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return k},default:function(){return g}});var e=a(2122),l=a(9756),r=(a(7294),a(3905)),i=["components"],p={sidebar_position:19,title:"\u8ba4\u8bc1"},d=void 0,u={unversionedId:"api/api-19-verify",id:"api/api-19-verify",isDocsHomePage:!1,title:"\u8ba4\u8bc1",description:"\u8ba4\u8bc1\u8fc7\u7a0b",source:"@site/docs/api/api-19-verify.md",sourceDirName:"api",slug:"/api/api-19-verify",permalink:"/docs/api/api-19-verify",version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,title:"\u8ba4\u8bc1"},sidebar:"tutorialSidebar",previous:{title:"\u5145\u503c\u72b6\u6001\u67e5\u8be2",permalink:"/docs/api/api-18-deposit-status"},next:{title:"\u94f6\u884c\u5361\u7ba1\u7406",permalink:"/docs/api/api-bank-card-manage"}},k=[{value:"\u8ba4\u8bc1\u8fc7\u7a0b",id:"\u8ba4\u8bc1\u8fc7\u7a0b",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"1.\u5b8c\u6210\u8eab\u4efd\u57fa\u672c\u4fe1\u606f\u7684\u586b\u5199",id:"1\u5b8c\u6210\u8eab\u4efd\u57fa\u672c\u4fe1\u606f\u7684\u586b\u5199",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f-1",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]},{value:"2.\u5b8c\u6210\u7535\u5b50\u56fe\u7247\u7684\u4e0a\u4f20",id:"2\u5b8c\u6210\u7535\u5b50\u56fe\u7247\u7684\u4e0a\u4f20",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f-2",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url-1",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5-1",children:[]},{value:"\u56fe\u7247url\u7684\u83b7\u53d6\uff0c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u56fe\u7247\u7684\u4e0a\u4f20\u529f\u80fd\uff0c\u8bf7\u770b \u56fe\u7247\u4e0a\u4f20 \u529f\u80fd",id:"\u56fe\u7247url\u7684\u83b7\u53d6\uff0c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u56fe\u7247\u7684\u4e0a\u4f20\u529f\u80fd\uff0c\u8bf7\u770b-\u56fe\u7247\u4e0a\u4f20-\u529f\u80fd",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9-1",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a-1",children:[]},{value:"3.\u5b8c\u6210\u8d44\u91d1\u4ea4\u6613\u5bc6\u7801\u7684\u8bbe\u7f6e",id:"3\u5b8c\u6210\u8d44\u91d1\u4ea4\u6613\u5bc6\u7801\u7684\u8bbe\u7f6e",children:[]},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f-3",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url-2",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5-2",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9-2",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a-2",children:[]}],m={toc:k};function g(t){var n=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8ba4\u8bc1\u8fc7\u7a0b"},"\u8ba4\u8bc1\u8fc7\u7a0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u8eab\u4efd\u57fa\u672c\u4fe1\u606f\u7684\u586b\u5199"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u7535\u5b50\u56fe\u7247\u7684\u4e0a\u4f20"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u8d44\u91d1\u4ea4\u6613\u5bc6\u7801\u7684\u8bbe\u7f6e")),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("p",null,"POST\u8bf7\u6c42,Content-type\u4e3aapplication/json"),(0,r.kt)("h2",{id:"request-header"},"Request header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-token"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,r.kt)("h2",{id:"1\u5b8c\u6210\u8eab\u4efd\u57fa\u672c\u4fe1\u606f\u7684\u586b\u5199"},"1.\u5b8c\u6210\u8eab\u4efd\u57fa\u672c\u4fe1\u606f\u7684\u586b\u5199"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f-1"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("p",null,"GET\u8bf7\u6c42"),(0,r.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,r.kt)("p",null,"/user-service/complete/personal/info"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u59d3\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateOfBirth"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},'"2020-10-10"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51fa\u751f\u65e5\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u5f00\u5934\uff0c\u624b\u673a\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u90ae\u7bb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb6\u5ead\u4f4f\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"PASSPORT\u6216ID_CARD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idCardNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53idType\u4e3aID_CARD\u65f6\u3002\u5fc5\u987b\uff08\u5fc5\u987b\u662f13\u4e3a\u6570\u5b57\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idCardCode"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53idType\u4e3aID_CARD\u65f6\u3002\u5fc5\u987b\u9996\u5b57\u6bcd\u5fc5\u987b\u662f\u4e24\u4f4d\u7684\u5927\u5199\u5b57\u6bcd\uff0c\u540e\u976210\u4f4d\u6570\u5b57\uff09\u5982\uff1aAS0000000010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passportNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53idType\u4e3aPASSPORT\u65f6\u3002\u5fc5\u987b\u62a4\u7167\u53f7\u7801\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visaNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53idType\u4e3aPASSPORT\u65f6\u3002\u5fc5\u987b\uff08\u7b7e\u8bc1\u53f7\u7801\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u4e3a\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u5730\u5740")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"200"'),(0,r.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,r.kt)("td",{parentName:"tr",align:null},"msg")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code":200,\n  "msg":"ok"\n}\n')),(0,r.kt)("h2",{id:"2\u5b8c\u6210\u7535\u5b50\u56fe\u7247\u7684\u4e0a\u4f20"},"2.\u5b8c\u6210\u7535\u5b50\u56fe\u7247\u7684\u4e0a\u4f20"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f-2"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("p",null,"POST\u8bf7\u6c42,Content-type\u4e3aapplication/json"),(0,r.kt)("h2",{id:"\u8bf7\u6c42url-1"},"\u8bf7\u6c42URL"),(0,r.kt)("p",null,"/user-service/verify"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5-1"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u7c7b\u522b:\u5916\u56fd:PASSPORT;\u672c\u5730\u4eba:ID_CARD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idCardFaceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8bc1\u6b63\u9762\u7167,\u7c7b\u578b\u4e3aID_CARD,\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idCardBackUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8bc1\u80cc\u9762\u7167\uff0c\u7c7b\u578b\u4e3aID_CARD,\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autographUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7535\u5b50\u7b7e\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passportHomeUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u9996\u9875\uff0c\u7c7b\u578b\u4e3aPASSPORT,\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passportVisaUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u8bc1\u9875\uff0c\u7c7b\u578b\u4e3aPASSPORT,\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"holdPassportUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u6301\u62a4\u7167\uff0c\u7c7b\u578b\u4e3aPASSPORT,\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permitWorkUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u8bc1\u660e\uff0c\u7c7b\u578b\u4e3aPASSPORT,\u5fc5\u586b")))),(0,r.kt)("h2",{id:"\u56fe\u7247url\u7684\u83b7\u53d6\uff0c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u56fe\u7247\u7684\u4e0a\u4f20\u529f\u80fd\uff0c\u8bf7\u770b-\u56fe\u7247\u4e0a\u4f20-\u529f\u80fd"},"\u56fe\u7247url\u7684\u83b7\u53d6\uff0c\u7cfb\u7edf\u63d0\u4f9b\u4e86\u56fe\u7247\u7684\u4e0a\u4f20\u529f\u80fd\uff0c\u8bf7\u770b \u56fe\u7247\u4e0a\u4f20 \u529f\u80fd"),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9-1"},"\u8fd4\u56de\u5185\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"200"'),(0,r.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,r.kt)("td",{parentName:"tr",align:null},"msg")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a-1"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"code":200,\n"msg":"ok"\n}\n')),(0,r.kt)("h2",{id:"3\u5b8c\u6210\u8d44\u91d1\u4ea4\u6613\u5bc6\u7801\u7684\u8bbe\u7f6e"},"3.\u5b8c\u6210\u8d44\u91d1\u4ea4\u6613\u5bc6\u7801\u7684\u8bbe\u7f6e"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f-3"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,r.kt)("h2",{id:"\u8bf7\u6c42url-2"},"\u8bf7\u6c42URL"),(0,r.kt)("p",null,"/user-service/init/trade-password"),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5-2"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},'"202106"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u4e3a\u7eaf\u6570\u5b57")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9-2"},"\u8fd4\u56de\u5185\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"200"'),(0,r.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,r.kt)("td",{parentName:"tr",align:null},"msg")))),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "password":"202106"\n}\n')),(0,r.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a-2"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "code": 200,\n    "msg": "ok"\n}\n')))}g.isMDXComponent=!0}}]);