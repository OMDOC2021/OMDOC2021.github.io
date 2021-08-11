(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[227],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return m},kt:function(){return g}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=a.createContext({}),u=function(t){var n=a.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=u(t.components);return a.createElement(d.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(e),g=r,N=k["".concat(d,".").concat(g)]||k[g]||o[g]||l;return e?a.createElement(N,i(i({ref:n},m),{},{components:e})):a.createElement(N,i({ref:n},m))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},8059:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var a=e(2122),r=e(9756),l=(e(7294),e(3905)),i=["components"],p={sidebar_position:30,title:"OCR \u529f\u80fd"},d=void 0,u={unversionedId:"api/api-ocr",id:"api/api-ocr",isDocsHomePage:!1,title:"OCR \u529f\u80fd",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/api-ocr.md",sourceDirName:"api",slug:"/api/api-ocr",permalink:"/docs/api/api-ocr",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"OCR \u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u534f\u8bae\u9875\u9762",permalink:"/docs/api/api-agreement"},next:{title:"error-code",permalink:"/docs/api/error-code"}},m=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8fd4\u56de\u793a\u4f8b\uff1a",children:[{value:"\u8eab\u4efd\u8bc1\u5b57\u6bb5\u8bf4\u660e",id:"\u8eab\u4efd\u8bc1\u5b57\u6bb5\u8bf4\u660e",children:[]}]},{value:"\u62a4\u7167\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u62a4\u7167\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u62a4\u7167\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u62a4\u7167\u8fd4\u56de\u793a\u4f8b\uff1a",children:[{value:"\u62a4\u7167\u5b57\u6bb5\u8bf4\u660e",id:"\u62a4\u7167\u5b57\u6bb5\u8bf4\u660e",children:[]}]}],o={toc:m};function k(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/ocr\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"ID_CARD:\u6cf0\u56fd\u8eab\u4efd\u8bc1 \u6216PASSPORT: \u62a4\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.huaweicloud.com/intl/zh-cn/api-ocr/zh-cn_image_0288050121.png"},"https://support.huaweicloud.com/intl/zh-cn/api-ocr/zh-cn_image_0288050121.png")),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9996\u5148\u9700\u8981\u5c06\u8eab\u4efd\u8bc1\u6216\u62a4\u7167\u901a\u8fc7\u56fe\u7247\u4e0a\u4f20\u529f\u80fd\uff0c\u83b7\u53d6\u670d\u52a1\u5668\u4e0a\u56fe\u7247URL")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")))),(0,l.kt)("h2",{id:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url":"https://support.huaweicloud.com/intl/zh-cn/api-ocr/zh-cn_image_0288050121.png",\n  "type":"ID_CARD"\n}\n')),(0,l.kt)("h2",{id:"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u6cf0\u56fd\u8eab\u4efd\u8bc1\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "data": {\n        "result": {\n            "side": "front",  \n            "id_number": "14 49 0000",\n            "name_th": "\u0e19\u0e32\u0e22 \u0e2d\u0e31\u0e1a\u0e14\u0e38\u0e25\u0e2e\u0e32\u0e21\u0e34\u0e19 \u0e2a\u0e38\u0e15\u0e34\u0e23\u0e31\u0e19\u0e14\u0e23\u0e4c",\n            "first_name_en": "11 Mar. 2016",\n            "last_name_en": "Mr. Tomengonn",\n            "date_of_birth_th": "27 \u0e21\u0e34.\u0e22. 2537",\n            "date_of_birth_en": "27 Jun. 1994",\n            "religion_th": "- - - 2551 2",\n            "address_th": "1/1 \u0e15\u0e23\u0e2d\u0e012(\u0e16\u0e19\u0e19\u0e23\u0e32\u0e21\u0e42\u0e01\u0e21\u0e38\u0e17) \u0e16.\u0e23\u0e32\u0e21\u0e42\u0e01\u0e21\u0e38\u0e17 \u0e15.\u0e2d\u0e32\u0e40\u0e19\u0e32\u0e30\u0e23\u0e39 \u0e18\u0e31\u0e2a\u0e2a\u0e34\u0e2a\u0e32\u0e22",\n            "date_of_issue_th": "2 \u0e1e.\u0e04. 2559",\n            "date_of_issue_en": "2 May 2016",\n            "date_of_expiry_th": "26 \u0e21\u0e34.\u0e22. 2567",\n            "date_of_expiry_en": "26 Jun. 2024",\n            "serial_number": "--0--0.00000",\n            "confidence": {\n                "id_number": 0.2197,\n                "name_th": 0.9705,\n                "first_name_en": 0.3227,\n                "last_name_en": 0.2232,\n                "date_of_birth_th": 0.961,\n                "date_of_birth_en": 0.9754,\n                "religion_th": 0.2528,\n                "address_th": 0.2933,\n                "date_of_issue_th": 0.9667,\n                "date_of_issue_en": 0.9635,\n                "date_of_expiry_th": 0.9744,\n                "date_of_expiry_en": 0.9543,\n                "serial_number": 0.2413\n            }\n        }\n    },\n    "msg": "SUCCESS"\n}\n')),(0,l.kt)("h3",{id:"\u8eab\u4efd\u8bc1\u5b57\u6bb5\u8bf4\u660e"},"\u8eab\u4efd\u8bc1\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"side"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u793a\u6b63\u9762\u8fd8\u662f\u53cd\u9762\uff0c\u53d6\u503c\u4e3afront\u6216back\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id_number"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8bc1\u53f7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6cf0\u6587\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"first_name_en"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"last_name_en"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u59d3\u6c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_birth_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6cf0\u6587\u51fa\u751f\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_birth_en"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u51fa\u751f\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"religion_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b97\u6559")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_issue_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6cf0\u6587\u7b7e\u53d1\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_issue_en"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u7b7e\u53d1\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_expiry_th"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6cf0\u6587\u6709\u6548\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_expiry_en"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u6709\u6548\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serial_number"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e8f\u5217\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"card_number"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8bc1\u53cd\u9762\u5361\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"laser_number"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6fc0\u5149\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u5173\u5b57\u6bb5\u7684\u7f6e\u4fe1\u5ea6\u4fe1\u606f\uff0c\u53d6\u503c\u8303\u56f40~1\u3002\u7f6e\u4fe1\u5ea6\u8d8a\u5927\uff0c\u8868\u793a\u672c\u6b21\u8bc6\u522b\u7684\u5bf9\u5e94\u5b57\u6bb5\u7684\u53ef\u9760\u6027\u8d8a\u9ad8\uff0c\u5728\u7edf\u8ba1\u610f\u4e49\u4e0a\uff0c\u7f6e\u4fe1\u5ea6\u8d8a\u5927\uff0c\u51c6\u786e\u7387\u8d8a\u9ad8\u3002 \u7f6e\u4fe1\u5ea6\u7531\u7b97\u6cd5\u7ed9\u51fa\uff0c\u4e0d\u76f4\u63a5\u7b49\u4ef7\u4e8e\u5bf9\u5e94\u5b57\u6bb5\u7684\u51c6\u786e\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portrait_image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf\u7684base64\u7f16\u7801\u3002\u5f53\u8f93\u5165\u53c2\u6570\u201creturn_portrait_image\u201d\u4e3a\u201ctrue\u201d\u65f6\uff0c\u624d\u8fd4\u56de\u8be5\u53c2\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portrait_location"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of objects"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf\u5728\u539f\u56fe\u4e0a\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idcard_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u8bc1\u7684\u7c7b\u578b\u3002\u53d6\u503c\u5982\u4e0b\u6240\u793a\uff1a+ normal\uff1a\u8eab\u4efd\u8bc1\u539f\u4ef6 + copy\u662f\u590d\u5370\u7684\u8eab\u4efd\u8bc1,\u5f53\u8f93\u5165\u53c2\u6570\u201creturn_idcard_type\u201d\u4e3a\u201ctrue\u201d\u65f6\uff0c\u624d\u8fd4\u56de\u8be5\u53c2\u6570")))),(0,l.kt)("h2",{id:"\u62a4\u7167\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u62a4\u7167\u8bf7\u6c42\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url":"https://one-money-images.obs.ap-southeast-2.myhuaweicloud.com:443/631acf7eda1f47a18f6fa351ecb02075.jpg",\n  "type":"PASSPORT"\n}\n')),(0,l.kt)("h2",{id:"\u62a4\u7167\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u62a4\u7167\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "data": {\n        "result": {\n            "passport_type": "P",\n            "country_code": "CHN",\n            "passport_number": "GUBOZITIJ",\n            "nationality": "CHINESE",\n            "surname": "",\n            "given_name": "\u4e01ANBO",\n            "sex": "M",\n            "date_of_birth": "PHUR-XX-PU",\n            "date_of_expiry": "2025-07-19",\n            "date_of_issue": "2015-07-20",\n            "place_of_birth": "ANHUI",\n            "place_of_issue": "GUANGDONG",\n            "issuing_authority": "MPS Exit & Entry Administration",\n            "extra_info": {\n                "local_language": {\n                    "name": "\u6768xxx",\n                    "sex": "\u7537",\n                    "place_of_birth": "\u5b89\u5fbd",\n                    "place_of_issue": "\u5e7f\u4e1c",\n                    "issuing_authority": "\u516c\u5b89\u90e8\u51fa\u5165\u5883\u7ba1\u7406\u5c40",\n                    "nationality": "\u4e2d\u56fd"\n                }\n            },\n            "confidence": {\n                "passport_type": 0.7297,\n                "country_code": 0.9272,\n                "passport_number": 0.3108,\n                "nationality": 0.995,\n                "surname": 0.0907,\n                "given_name": 0.0907,\n                "sex": 0.9959,\n                "date_of_birth": 0.0575,\n                "date_of_expiry": 0.9987,\n                "date_of_issue": 0.9962,\n                "place_of_birth": 0.9999,\n                "place_of_issue": 0.9993,\n                "issuing_authority": 0.9941\n            }\n        }\n    },\n    "msg": "SUCCESS"\n}\n')),(0,l.kt)("h3",{id:"\u62a4\u7167\u5b57\u6bb5\u8bf4\u660e"},"\u62a4\u7167\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passport_type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u7c7b\u578b\u3002P:\u666e\u901a\u56e0\u79c1\u62a4\u7167 W:\u5916\u4ea4\u62a4\u7167 G:\u516c\u52a1\u62a4\u7167")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"country_code"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u7b7e\u53d1\u56fd\u7684\u56fd\u5bb6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passport_number"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u53f7\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nationality"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u6301\u6709\u4eba\u56fd\u7c4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"surname"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u59d3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"given_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sex"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6027\u522b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u51fa\u751f\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_expiry"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u6709\u6548\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_issue"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a4\u7167\u7b7e\u53d1\u65e5\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"place_of_birth"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u51fa\u751f\u5730")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"place_of_issue"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1\u5730")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuing_authority"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u53d1\u673a\u5173")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u5173\u5b57\u6bb5\u7684\u7f6e\u4fe1\u5ea6\u4fe1\u606f\uff0c\u53d6\u503c\u8303\u56f40~1\u3002\u7f6e\u4fe1\u5ea6\u8d8a\u5927\uff0c\u8868\u793a\u672c\u6b21\u8bc6\u522b\u7684\u5bf9\u5e94\u5b57\u6bb5\u7684\u53ef\u9760\u6027\u8d8a\u9ad8\uff0c\u5728\u7edf\u8ba1\u610f\u4e49\u4e0a\uff0c\u7f6e\u4fe1\u5ea6\u8d8a\u5927\uff0c\u51c6\u786e\u7387\u8d8a\u9ad8\u3002 \u7f6e\u4fe1\u5ea6\u7531\u7b97\u6cd5\u7ed9\u51fa\uff0c\u4e0d\u76f4\u63a5\u7b49\u4ef7\u4e8e\u5bf9\u5e94\u5b57\u6bb5\u7684\u51c6\u786e\u7387\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra_info"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a\u7a7a\u3002\u5bf9\u4e8e\u4e2d\u56fd\u62a4\u7167\uff0c\u201cextra_info\u201d\u5185\u4f1a\u5305\u542b\u62a4\u7167\u4e0a\u7531\u6c49\u5b57\u63cf\u8ff0\u7684\u5b57\u6bb5\u4fe1\u606f\uff0c\u5982\u59d3\u540d\u3001\u51fa\u751f\u5730\u7b49\u4fe1\u606f")))))}k.isMDXComponent=!0}}]);