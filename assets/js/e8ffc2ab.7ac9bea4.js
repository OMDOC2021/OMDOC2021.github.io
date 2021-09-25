(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[6850],{3905:function(t,a,n){"use strict";n.d(a,{Zo:function(){return g},kt:function(){return s}});var r=n(7294);function e(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function m(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){e(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function A(t,a){if(null==t)return{};var n,r,e=function(t,a){if(null==t)return{};var n,r,e={},m=Object.keys(t);for(r=0;r<m.length;r++)n=m[r],a.indexOf(n)>=0||(e[n]=t[n]);return e}(t,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(r=0;r<m.length;r++)n=m[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var w=r.createContext({}),p=function(t){var a=r.useContext(w),n=a;return t&&(n="function"==typeof t?t(a):l(l({},a),t)),n},g=function(t){var a=p(t.components);return r.createElement(w.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var n=t.components,e=t.mdxType,m=t.originalType,w=t.parentName,g=A(t,["components","mdxType","originalType","parentName"]),u=p(n),s=e,c=u["".concat(w,".").concat(s)]||u[s]||d[s]||m;return n?r.createElement(c,l(l({ref:a},g),{},{components:n})):r.createElement(c,l({ref:a},g))}));function s(t,a){var n=arguments,e=a&&a.mdxType;if("string"==typeof t||e){var m=n.length,l=new Array(m);l[0]=u;var A={};for(var w in a)hasOwnProperty.call(a,w)&&(A[w]=a[w]);A.originalType=t,A.mdxType="string"==typeof t?t:e,l[1]=A;for(var p=2;p<m;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8071:function(t,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return A},contentTitle:function(){return w},metadata:function(){return p},toc:function(){return g},default:function(){return u}});var r=n(2122),e=n(9756),m=(n(7294),n(3905)),l=["components"],A={sidebar_position:3,title:"\u670d\u52a1\u5546\u63a5\u5165 - \u4e0b\u5355\uff08app\u65e0\u9700\u63a5\u5165\uff09"},w=void 0,p={unversionedId:"api/merchant-trade/create-order",id:"api/merchant-trade/create-order",isDocsHomePage:!1,title:"\u670d\u52a1\u5546\u63a5\u5165 - \u4e0b\u5355\uff08app\u65e0\u9700\u63a5\u5165\uff09",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/merchant-trade/create-order.md",sourceDirName:"api/merchant-trade",slug:"/api/merchant-trade/create-order",permalink:"/docs/api/merchant-trade/create-order",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u670d\u52a1\u5546\u63a5\u5165 - \u4e0b\u5355\uff08app\u65e0\u9700\u63a5\u5165\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u7b7e\u540d\u8bf4\u660e",permalink:"/docs/api/merchant-trade/sign"},next:{title:"\u670d\u52a1\u5546\u63a5\u5165 - \u67e5\u8be2\u8ba2\u5355",permalink:"/docs/api/merchant-trade/query-order"}},g=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8bf7\u6c42\u5185\u5bb9\u793a\u4f8b",id:"\u8bf7\u6c42\u5185\u5bb9\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[{value:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b",id:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b",children:[]}]}],d={toc:g};function u(t){var a=t.components,n=(0,e.Z)(t,l);return(0,m.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,m.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,m.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},"/api/create-order\n")),(0,m.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,m.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,m.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,m.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,m.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,m.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"opTradeNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"12-22\u4f4d"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u65b9\u5355\u53f7")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"merchantTradeNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,m.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u65b9\u5546\u6237\u8ba2\u5355\u53f7")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"appid"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u65b9appid")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"merchantNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u5546\u6237\u53f7")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"amount"),(0,m.kt)("td",{parentName:"tr",align:null},"Long"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u4e0b\u5355\u91d1\u989d,\u5982\u4e0b\u53551THB, \u5219\u9700\u4f20100")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"remark"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u4e0b\u5355\u65f6\u95f4\u6233")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"notifyUrl"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u901a\u77e5\u5730\u5740")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"goods"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5546\u54c1\u540d\u79f0")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"sign"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"64"),(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/docs/api/merchant-trade/sign"},"\u7b7e\u540d"))))),(0,m.kt)("h2",{id:"\u8bf7\u6c42\u5185\u5bb9\u793a\u4f8b"},"\u8bf7\u6c42\u5185\u5bb9\u793a\u4f8b"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "amount" : 2100,\n  "appid" : "nudh1n2eand12",\n  "goods" : "\u4e00\u4e2a\u5927\u82f9\u679c",\n  "merchantNumber" : "112233445566",\n  "merchantTradeNumber" : "MO-99889920019230124",\n  "notifyUrl" : "http://localhost:8889/",\n  "opTradeNumber" : "1122333445566778992",\n  "remark" : "test \u4e8c\u7ef4\u7801\u6536\u6b3e",\n  "sign" : "36e2c4dd5f92105a3b3bbf61761f271e6a426776b7e9d5a625cc64e7cfc5de55",\n  "timestamp" : 1632543513724\n}\n')),(0,m.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,m.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,m.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,m.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"code"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},'"200"'),(0,m.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"msg"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,m.kt)("td",{parentName:"tr",align:null},"msg")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"data"),(0,m.kt)("td",{parentName:"tr",align:null},"data"),(0,m.kt)("td",{parentName:"tr",align:null},"--"),(0,m.kt)("td",{parentName:"tr",align:null},"--")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"---"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"-----")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"merchantName"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5546\u6237\u540d\u79f0")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"orderNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"OneMoney\u8ba2\u5355\u53f7")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"status"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u72b6\u6001(SUCCESS:\u6210\u529f, INIT:\u5df2\u4e0b\u5355, FAIL: \u5931\u8d25)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"merchantNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5546\u6237\u5355\u53f7(\u8bf7\u6c42\u4e3a\u4f20\u9012\uff0c\u5219\u4e3a\u7a7a)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"opNumber"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u65b9\u5355\u53f7")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"goods"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5546\u6237\u540d\u79f0")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"amount"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u4e0b\u5355\u91d1\u989d")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"remark"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5907\u6ce8")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u8fc7\u671f\u65f6\u95f4(15\u5206\u949f\u5185\u6709\u6548)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"createTime"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u65f6\u95f4")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"qrCode"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ef4\u7801\u5185\u5bb9")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"qrImage"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u4e8c\u7ef4\u7801\u56fe\u7247\u6d41")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"currency"),(0,m.kt)("td",{parentName:"tr",align:null},"String"),(0,m.kt)("td",{parentName:"tr",align:null},"----"),(0,m.kt)("td",{parentName:"tr",align:null},"\u5e01\u79cd\u540d\u79f0(\u76ee\u524d\u53ea\u6709THB)")))),(0,m.kt)("h3",{id:"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b"},"\u8fd4\u56de\u5185\u5bb9\u793a\u4f8b"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msg": "\u64cd\u4f5c\u6210\u529f",\n  "code": 200,\n  "data": {\n    "merchantName": "aaa",\n    "orderNumber": "1441623955701104640",\n    "status": "INIT",\n    "opNumber": "1122333445566778993",\n    "goods": "\u4e00\u4e2a\u5927\u82f9\u679c",\n    "amount": "21.00",\n    "expireTime": 1632545809773,\n    "createTime": 1632544909773,\n    "updateTime": 1632544909773,\n    "qrCode": "OM://order/1441623955701104640",\n    "qrImage": "iVBORw0KGgoAAAANSUhEUgAAAcIAAAHCCAIAAADzel4SAABHMklEQVR4Xu3dCbiud1nfe3ZCEkjCzAkIKKOFRkAhzIQ5DGFURC2KFqFUZR5EQWZlHoQo9pziPLZV6vHY9mqtA1Ll1B6t1aK19rJacBaqTBIgJM/Ze609rPXZ+xdWcue5fZ73/X+u99rX3mvv7/3c///aea5UKV5rGoZhGAqu5ReGYRiGq2K8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahpPU1eq1hPy+oxuk1Tg/MNpcnD8wCsxqnbz0vaGatz/OsW88LqnF6jdMDs83lyQOzwKzG6VvPC5pZ6/M869bzgmqcXuP0wGxzefLALDCrcfrW84Jm1vo8z7r1vKAap9c4PTDbXJ48MAvMapy+9bygmbU+z7NuPS+oxuk1Tg/MNpcnD8wCsxqnbz0vaGatz/OsW88LqnF6jdMDs83lyQOzwKzG6VvPC5pZ6/M869bzgmqcXuP0wGxzefLALDCrcfrW84Jm1vo8z7r1vKAap9c4PTDbXJ48MAvMapy+9bygmbU+z7NuPS+oxuk1Tg/MNpcnD8wCsxqnbz0vaGatz/OsW88LqnF6jdMDs83lyQOzwKzG6VvPC5pZ6/M869bzgmqcXuP0wGxzefLALDCrcfrW84Jm1vo8z7r1vKAap9c4PTDbXJ48MAvMapy+9bygmbU+z7NuPS+oxuk1Tg/MNpcnD8wCsxqnbz0vaGatz/OsgdkKeaTALDBr4RItXCIwa+ESgVlgFpgFZoHZCnmkwGxmrc/zrIHZCnmkwCwwa+ESLVwiMGvhEoFZYBaYBWaB2Qp5pMBsZq3P86yB2Qp5pMAsMGvhEi1cIjBr4RKBWWAWmAVmgdkKeaTAbGatz/OsgdkKeaTALDBr4RItXCIwa+ESgVlgFpgFZoHZCnmkwGxmrc/zrIHZCnmkwCwwa+ESLVwiMGvhEoFZYBaYBWaB2Qp5pMBsZq3P86yB2Qp5pMAsMGvhEi1cIjBr4RKBWWAWmAVmgdkKeaTAbGatz/OsgdkKeaTALDBr4RItXCIwa+ESgVlgFpgFZoHZCnmkwGxmrc/zrIHZCnmkwCwwa+ESLVwiMGvhEoFZYBaYBWaB2Qp5pMBsZq3P86yB2Qp5pMAsMGvhEi1cIjBr4RKBWWAWmAVmgdkKeaTAbGatz/OsgdkKeaTALDBr4RItXCIwa+ESgVlgFpgFZoHZCnmkwGxmrc/zrIHZCnmkwCwwa+ESLVwiMGvhEoFZYBaYBWaB2Qp5pMBsZq3P86yB2Qp5pMAsMGvhEi1cIjBr4RKBWWAWmAVmgdkKeaTAbGatz/OsgdkKeaTALDBr4RItXCIwa+ESgVlgFpgFZoHZCnmkwGxmrc/zrIFZYNbCJQKzwCwwC8wCsxqn1zg9MGvhEi1cIjALzAKzFi4RmAVmM2t9nmcNzAKzFi4RmAVmgVlgFpjVOL3G6YFZC5do4RKBWWAWmLVwicAsMJtZ6/M8a2AWmLVwicAsMAvMArPArMbpNU4PzFq4RAuXCMwCs8CshUsEZoHZzFqf51kDs8CshUsEZoFZYBaYBWY1Tq9xemDWwiVauERgFpgFZi1cIjALzGbW+jzPGpgFZi1cIjALzAKzwCwwq3F6jdMDsxYu0cIlArPALDBr4RKBWWA2s9bnedbALDBr4RKBWWAWmAVmgVmN02ucHpi1cIkWLhGYBWaBWQuXCMwCs5m1Ps+zBmaBWQuXCMwCs8AsMAvMapxe4/TArIVLtHCJwCwwC8xauERgFpjNrPV5njUwC8xauERgFpgFZoFZYFbj9BqnB2YtXKKFSwRmgVlg1sIlArPAbGatz/OsgVlg1sIlArPALDALzAKzGqfXOD0wa+ESLVwiMAvMArMWLhGYBWYza32eZw3MArMWLhGYBWaBWWAWmNU4vcbpgVkLl2jhEoFZYBaYtXCJwCwwm1nr8zxrYBaYtXCJwCwwC8wCs8Csxuk1Tg/MWrhEC5cIzAKzwKyFSwRmgdnMWp/nWQOzwKyFSwRmgVlgFpgFZjVOr3F6YNbCJVq4RGAWmAVmLVwiMAvMZtb6PM8amAVmLVwiMAvMArPALDCrcXqN0wOzFi7RwiUCs8AsMGvhEoFZYDaz1ud51sAsMGvhEoFZYLYk7lrj9CVx1xqnt3CJwCwwa+ESgVlgNrPW53nWwCwwa+ESgVlgtiTuWuP0JXHXGqe3cInALDBr4RKBWWA2s9bnedbALDBr4RKBWWC2JO5a4/Qlcdcap7dwicAsMGvhEoFZYDaz1ud51sAsMGvhEoFZYLYk7lrj9CVx1xqnt3CJwCwwa+ESgVlgNrPW53nWwCwwa+ESgVlgtiTuWuP0JXHXGqe3cInALDBr4RKBWWA2s9bnedbALDBr4RKBWWC2JO5a4/Qlcdcap7dwicAsMGvhEoFZYDaz1ud51sAsMGvhEoFZYLYk7lrj9CVx1xqnt3CJwCwwa+ESgVlgNrPW53nWwCwwa+ESgVlgtiTuWuP0JXHXGqe3cInALDBr4RKBWWA2s9bnedbALDBr4RKBWWC2JO5a4/Qlcdcap7dwicAsMGvhEoFZYDaz1ud51sAsMGvhEoFZYLYk7lrj9CVx1xqnt3CJwCwwa+ESgVlgNrPW53nWwCwwa+ESgVlgtiTuWuP0JXHXGqe3cInALDBr4RKBWWA2s9bnedbALDBr4RKBWWC2JO5a4/Qlcdcap7dwicAsMGvhEoFZYDaz1ud51sAsMGvhEoFZYLYk7lrj9CVx1xqnt3CJwCwwa+ESgVlgNrPW53nWwCwwa+ESgVlgtkIeKTALzAKzwGyFPFJgFpgFZi1cIjALzGbW+jzPGpgFZi1cIjALzFbIIwVmgVlgFpitkEcKzAKzwKyFSwRmgdnMWp/nWQOzwKyFSwRmgdkKeaTALDALzAKzFfJIgVlgFpi1cInALDCbWevzPGtgFpi1cInALDBbIY8UmAVmgVlgtkIeKTALzAKzFi4RmAVmM2t9nmcNzAKzFi4RmAVmK+SRArPALDALzFbIIwVmgVlg1sIlArPAbGatz/OsgVlg1sIlArPAbIU8UmAWmAVmgdkKeaTALDALzFq4RGAWmM2s9XmeNTALzFq4RGAWmK2QRwrMArPALDBbIY8UmAVmgVkLlwjMArOZtT7PswZmgVkLlwjMArMV8kiBWWAWmAVmK+SRArPALDBr4RKBWWA2s9bnedbALDBr4RKBWWC2Qh4pMAvMArPAbIU8UmAWmAVmLVwiMAvMZtb6PM8amAVmLVwiMAvMVsgjBWaBWWAWmK2QRwrMArPArIVLBGaB2cxan+dZA7PArIVLBGaB2Qp5pMAsMAvMArMV8kiBWWAWmLVwicAsMJtZ6/M8a2AWmLVwicAsMFshjxSYBWaBWWC2Qh4pMAvMArMWLhGYBWYza32eZw3MArMWLhGYBWYr5JECs8AsMAvMVsgjBWaBWWDWwiUCs8BsZq3P86yB2Qp5pMCshUsEZjVOr3F6jdNbuESN0wOzFfJIgdnMWp/nWQOzFfJIgVkLlwjMapxe4/Qap7dwiRqnB2Yr5JECs5m1Ps+zBmYr5JECsxYuEZjVOL3G6TVOb+ESNU4PzFbIIwVmM2t9nmcNzFbIIwVmLVwiMKtxeo3Ta5zewiVqnB6YrZBHCsxm1vo8zxqYrZBHCsxauERgVuP0GqfXOL2FS9Q4PTBbIY8UmM2s9XmeNTBbIY8UmLVwicCsxuk1Tq9xeguXqHF6YLZCHikwm1nr8zxrYLZCHikwa+ESgVmN02ucXuP0Fi5R4/TAbIU8UmA2s9bnedbAbIU8UmDWwiUCsxqn1zi9xuktXKLG6YHZCnmkwGxmrc/zrIHZCnmkwKyFSwRmNU6vcXqN01u4RI3TA7MV8kiB2cxan+dZA7MV8kiBWQuXCMxqnF7j9Bqnt3CJGqcHZivkkQKzmbU+z7MGZivkkQKzFi4RmNU4vcbpNU5v4RI1Tg/MVsgjBWYza32eZw3MVsgjBWYtXCIwq3F6jdNrnN7CJWqcHpitkEcKzGbW+jzPGpitkEcKzFq4RGBW4/Qap9c4vYVL1Dg9MFshjxSYzaz1eZ5163lBgVlgFpgFZoFZYBaYBWaBWWAWmAVmgVlgFphtPS9oZq3P86xbzwsKzAKzwCwwC8wCs8AsMAvMArPALDALzAKzwGzreUEza32eZ916XlBgFpgFZoFZYBaYBWaBWWAWmAVmgVlgFpgFZlvPC5pZ6/M869bzggKzwCwwC8wCs8AsMAvMArPALDALzAKzwCww23pe0Mxan+dZt54XFJgFZoFZYBaYBWaBWWAWmAVmgVlgFpgFZoHZ1vOCZtb6PM+69bygwCwwC8wCs8AsMAvMArPALDALzAKzwCwwC8y2nhc0s9bnedat5wUFZoFZYBaYBWaBWWAWmAVmgVlgFpgFZoFZYLb1vKCZtT7Ps249LygwC8wCs8AsMAvMArPALDALzAKzwCwwC8wCs63nBc2s9Xmedet5QYFZYBaYBWaBWWAWmAVmgVlgFpgFZoFZYBaYbT0vaGatz/OsW88LCswCs8AsMAvMArPALDALzAKzwCwwC8wCs8Bs63lBM2t9nmfdel5QYBaYBWaBWWAWmAVmgVlgFpgFZoFZYBaYBWZbzwuaWevzPOvW84ICs8AsMAvMArPALDALzAKzwCwwC8wCs8AsMNt6XtDMWp/nWbeeFxSYBWaBWWAWmAVmgVlgFpgFZoFZYBaYBWaB2dbzgmbW/bxhPv5VCsy2nhcUmAVmNU4fFml8nzaH/wgGZlvPCwrMArMapw+LNL5Pm8N/BAOzrecFBWaBWY3Th0Ua36fN4T+CgdnW84ICs8CsxunDIo3v0+bwH8HAbOt5QYFZYFbj9GGRxvdpc/iPYGC29bygwCwwq3H6sEjj+7Q5/EcwMNt6XlBgFpjVOH1YpPF92hz+IxiYbT0vKDALzGqcPizS+D5tDv8RDMy2nhcUmAVmNU4fFml8nzaH/wgGZlvPCwrMArMapw+LNL5Pm8N/BAOzrecFBWaBWY3Th0Ua36fN4T+CgdnW84ICs8CsxunDIo3v0+bwH8HAbOt5QYFZYFbj9GGRlvh98q9SC5cIzGqcXuP0wCwwC8xqnB6Y1Tg9MAvMapy+Qh6pxunLsMS1vLkWLhGY1Ti9xumBWWAWmNU4PTCrcXpgFpjVOH2FPFKN05dhiWt5cy1cIjCrcXqN0wOzwCwwq3F6YFbj9MAsMKtx+gp5pBqnL8MS1/LmWrhEYFbj9BqnB2aBWWBW4/TArMbpgVlgVuP0FfJINU5fhiWu5c21cInArMbpNU4PzAKzwKzG6YFZjdMDs8Csxukr5JFqnL4MS1zLm2vhEoFZjdNrnB6YBWaBWY3TA7MapwdmgVmN01fII9U4fRmWuJY318IlArMap9c4PTALzAKzGqcHZjVOD8wCsxqnr5BHqnH6MixxLW+uhUsEZjVOr3F6YBaYBWY1Tg/MapwemAVmNU5fIY9U4/RlWOJa3lwLlwjMapxe4/TALDALzGqcHpjVOD0wC8xqnL5CHqnG6cuwxLW8uRYuEZjVOL3G6YFZYBaY1Tg9MKtxemAWmNU4fYU8Uo3Tl2GJa3lzLVwiMKtxeo3TA7PALDCrcXpgVuP0wCwwq3H6CnmkGqcvwxLX8uZauERgVuP0GqcHZoFZYFbj9MCsxumBWWBW4/QV8kg1Tl+GJa7lzbVwicCsxuk1Tg/MArPArMbpgVmN0wOzwKzG6SvkkWqcvgyta3klgVlgtiTuGpi1cInArMbpNU6vcXqN0wOzGqcHZoFZYFbj9MBsGVrX8koCs8BsSdw1MGvhEoFZjdNrnF7j9BqnB2Y1Tg/MArPArMbpgdkytK7llQRmgdmSuGtg1sIlArMap9c4vcbpNU4PzGqcHpgFZoFZjdMDs2VoXcsrCcwCsyVx18CshUsEZjVOr3F6jdNrnB6Y1Tg9MAvMArMapwdmy9C6llcSmAVmS+KugVkLlwjMapxe4/Qap9c4PTCrcXpgFpgFZjVOD8yWoXUtryQwC8yWxF0DsxYuEZjVOL3G6TVOr3F6YFbj9MAsMAvMapwemC1D61peSWAWmC2JuwZmLVwiMKtxeo3Ta5xe4/TArMbpgVlgFpjVOD0wW4bWtbySwCwwWxJ3DcxauERgVuP0GqfXOL3G6YFZjdMDs8AsMKtxemC2DK1reSWBWWC2JO4amLVwicCsxuk1Tq9xeo3TA7MapwdmgVlgVuP0wGwZWtfySgKzwGxJ3DUwa+ESgVmN02ucXuP0GqcHZjVOD8wCs8CsxumB2TK0ruWVBGaB2ZK4a2DWwiUCsxqn1zi9xuk1Tg/MapwemAVmgVmN0wOzZWhdyysJzAKzJXHXwKyFSwRmNU6vcXqN02ucHpjVOD0wC8wCsxqnB2bL0LqWVxKYBWZL4q6BWQuXCMxqnF7j9Bqn1zg9MKtxemAWmAVmNU4PzJahdS2vpMbpLVyihUu0cInArMbpgVlgVuP0Gqe3cInArMbpgVlgtgyta3klNU5v4RItXKKFSwRmNU4PzAKzGqfXOL2FSwRmNU4PzAKzZWhdyyupcXoLl2jhEi1cIjCrcXpgFpjVOL3G6S1cIjCrcXpgFpgtQ+taXkmN01u4RAuXaOESgVmN0wOzwKzG6TVOb+ESgVmN0wOzwGwZWtfySmqc3sIlWrhEC5cIzGqcHpgFZjVOr3F6C5cIzGqcHpgFZsvQupZXUuP0Fi7RwiVauERgVuP0wCwwq3F6jdNbuERgVuP0wCwwW4bWtbySGqe3cIkWLtHCJQKzGqcHZoFZjdNrnN7CJQKzGqcHZoHZMrSu5ZXUOL2FS7RwiRYuEZjVOD0wC8xqnF7j9BYuEZjVOD0wC8yWoXUtr6TG6S1cooVLtHCJwKzG6YFZYFbj9Bqnt3CJwKzG6YFZYLYMrWt5JTVOb+ESLVyihUsEZjVOD8wCsxqn1zi9hUsEZjVOD8wCs2VoXcsrqXF6C5do4RItXCIwq3F6YBaY1Ti9xuktXCIwq3F6YBaYLUPrWl5JjdNbuEQLl2jhEoFZjdMDs8Csxuk1Tm/hEoFZjdMDs8BsGVrX8kpqnN7CJVq4RAuXCMxqnB6YBWY1Tq9xeguXCMxqnB6YBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBW4/Qap9c4vcbpgVlgFpgFZoFZYBaYBWbLsNC1DsILDswCsxqn1zi9xumBWWBWszvz0Gmnn3nOTc663nnXucHnXfdGn3/2jb/gOje85VnXv9mZ5970tGufuf/5V8bpNU6vcXpgFpgFZoFZYBaYBWaB2TIsdK2D8IIDs8Csxuk1Tq9xemAWmBX88V9PNzv/Ube58BvOf9zr7vvMf3vh89/7oBf/+sNe/rsXveL3H/KS//KAF77vfs/++bs86ZI7PPRFt7jbk25063u6ykl8QI3Ta5wemAVmgVlgFpgFZoFZYLYMS1zLmwvMArMlcdfN5cn3OnTonJve/gsf9uKHv/qDT3nX9KTvmZ7wXdPjL/HzhGOfJ75zevL/NT31+6Z/+svT7/zJ9NnLfdZV5T41Tg/MArMlcdcapwdmgdnMup93EF5JYBaYLYm7bi4OfvqZZ9/0Cx92/hO+8zFvvfwxb5vqnzf+6+nnf2f68MenK67w0Z8TuxU5PTALzJbEXWucHpgFZjPrft5BeCWBWWC2JO66ufae+tyb/f17fP3/c9GrPvToN1/x6LdMRz9vPvaTvZ837/86f2b/L594yfScH55++fd89Oe0d7c6pwdmgdmSuGuN0wOzwGxm3c87CK8kMAvMlsRdN9fueQ8dOu06N7jVI1936cVvmq7C543HPju/fPTO55S/tfv57382ffoyF7gS+78nVU4PzAKzJXHXGqcHZoHZzLqfdxBeSWAWmC2Ju26uw4c97dpn3eqez7jvs379Ua+fdj+PPPx5w85n9+cH/+xWIfzq75re9QvTX33UHRK/KzVOD8wCsyVx1xqnB2aB2cy6n3cQXklgFpgtibturrPOvdldv/LHH/bKTzzitVPD5/A7+pnfN/3XD0wH+Z+U+l2pcXpgFpgtibvWOD0wC8xm1v28g/BKArPAbEncdRNd9tnpq98+XfTqE5+Hhc9B/szJfzL94d3fetR3TB/+mCvB70qN0wOzwGxJ3LXG6YFZYDaz7ucdhFcSmAVmS+KuG+eyy6ef/o/TQ18xPfSVez78kt/a+7sn//LkP3zyn9n/xe/4yeljn3Sxvfyu1Dg9MAvMlsRda5wemAVmM+t+3kF4JYFZYLYk7rpZPn3Z9DO/Nl38mukhL9v5vHzns/vz9MtTfvEgf+aUv7X7uy+bvuWHpv+d/53U70qN0wOzwGxJ3LXG6YFZYDaz7ucdhFcSmAVmS+KuG+TST08/+PPTRS+fHvzSE58H7f/s/a29v/uQb5v+0XdPL/7B6TX/bHrju6c3//T02p+cXvaj0zP/z+nhrzgp/7adz+ca+8Lvn/74wy65y+9KjdMDs8BsSdy1xumBWWA2s+7nHYRXEpgFZkvirhvkX75veuQrpwd+61X6XPHUt0//9N9N/9//mD700emjfzv97aeOvI4v/cz0yU9PH7/0yL9R/rcPTu/+1enFPzA9/OUn51f2Ofw+ffVPuOQuvys1Tg/MArMlcdcapwdmgdnMup93EF5JYBaYLYm7bor/+kfThS888rn/i07xuXD/54u/+tduecELrnujL7yqF/LxT07v+e3pVT82XfSSnVE7T7zyh/7oLzpkuqb/hjg9MAvMlsRda5wemAVmM+t+3kF4JYFZYLYk7ropnvtPpvu9YM/n+Xs++7/4eXd7zpnn3PzQodOv9oV84tLpN/9guv/uwCt/4gumZ7zDfLqm/4Y4PTALzJbEXWucHpgFZjPrft5BeCWBWQuXCMxqnF7j9Bqn77j9w951n+dcft/nTUc+zz322f3lsS/e+1mfuvOT3mt5dd32QZfc8x9/+OhTjj/x2EPv85zL7vWNH7ng6X9649s93vLviPcYmNU4vcbpgVlgVuP0mXU/7yC8ksCshUsEZjVOr3F6jdN3XPusG93qXq+6/UU/dP4T33u3p37w3s+edj/3Ofa54Ol/cat7vfzwH7O82g4dOvyKvMtX/ca9n3X58cfd8xv/9ouf8nu3ffD33OLu33yTO3z5Oefd3ervjvcYmNU4vcbpgVlgVuP0mXU/7yC8ksCshUsEZjVOr3F6jdOPO3TaaWecc8Z1zzvr+rc9787feLuH/cBdn/y793rm5fd65nT3p3/4Jnf4ykOnX4X/AuYDOXTadW90pzs+5l+f/8RfufX933qTO3zF2Te585nnfv5pp591+Pf8w3/XvMfArMbpNU4PzAKzGqfPrPt5B+GVBGYtXCIwq3F6jdNrnD4cjPcYmNU4vcbpgVlgVuP0mXU/7yC8ksCshUsEZjVOr3F6jdOHg/EeA7Map9c4PTALzGqcPrPu5x2EVxKYtXCJwKzG6TVOrzk+9rRrn3nOTW939o1vfdb1zrv2Wdfb88C/e4cOHTr9rHMOL3b9W9zllnd70p0e/ao7P/Gt17nBLfxzjbzHwKzG6TVOD8wCsxqnz6z7eQfhlQRmLVwiMKtxeo3Ta3ZnnnXuTc9/whse+do/efir/+eFz/8P93jqj9/mwm/4P+500Tk3ue1pp5+x//mtTj/jOre6x5Pv9OhX3v1rf/jC57/38Zd85kvfOe1+Hvii993o1vcy6OI9BmY1Tq9xemAWmNU4fWbdzzsIryQwa+ESgVmN02ucXnOtnX8PvefT3/2ESy770u+ennDs87jvvPTiN37o4a/5owe+6NducocH9L9Mzzz7hn/vES998Lf+5mPe+rEnfNflxxfb+3nAC993xnVvYNnCewzMapxe4/TALDCrcfrMup93EF5JYNbCJQKzGqfXOL3m0OnXPv9xr3/8Oy4/+f8I3Umfy+/3rJ+/1QVPdqFr2j2+/icf+7ZLT3r6KT6Pe8fld3rMdxw67dqOmJ/3GJjVOL3G6YFZYFbj9Jl1P+8gvJLArIVLBGY1Tq9xes2Z59zkvt/07x//juMvphM/nvjs/vLIj1c8+k0fPfe8v+dO15DD/2p5/uPfePSdfuKhp/q84+hv3fsZP3vG2dfcf3z1wLzHwKzG6TVOD8wCsxqnz6z7eQfhlQRmLVwiMKtxeo3Ta849746Pet2HTryt3rHzDt358fjn6Dvr2Bv24jd+5PYPeeFZ17+5mxWcdu2zbnSb+9z/ub/yuLdfwUOPv9n3rbSz7eGfXPTKPzz7xrdx3Py8x8Csxuk1Tg/MArMap8+s+3kH4ZUEZi1cIjCrcXqN02s+74uf+Li3T1f189i3feZ+z3rPrS74Gpe7eg4d+qInvPWRr/vQyQ/6nJ/Hvu2yG9/u/g6cn/cYmNU4vcbpgVlgVuP0mXU/7yC8ksCshUsEZjVOr3F6zRd96XceeRl957G30s5P9v6Sz95X2KPe8LFzz7uT+111t7rn1z3mrZ898WY86YlXvt7tH/JiJ87PewzMapxe4/TALDCrcfrMWp/nWWucXuP0wCwwC8xqnF7j9ODRb7r0sW87/O9002PeOj3mbaf+7P6BI39mz8+P//Ixb/nshS/4jds+4LkHf+iuH/6V6Wnfe3TOyZ+9D7qSBQ5/vv57nXxKXlALlwjMWrhEC5cIzGbW+jzPWuP0GqcHZoFZYFbj9BqnB0fennzetueVevLvhs/Fb7z0Fl/yVZ+93Pmn9OnLpv/7N6bHMf/4O/Sk4Vf+OTznILygFi4RmLVwiRYuEZjNrPV5nrXG6TVOD8wCs8Csxuk1Tg8Ov4Ye/ZajP+7+5DHHf9z9yef67IZH2rdc8ZJ/Mf3WB478F90nH/3k9L7/MT3zh05URx96/Imf66Fuu/M5CC+ohUsEZi1cooVLBGYza32eZ61xeo3TA7PALDCrcXqN04MTr7M37//sec35y5OTPV/80u+cXvPT019+1AddMU1//pHpZT85Pf5tJ+WnmuMvT072fP0gvKAWLhGYtXCJFi4RmM2s9XmetcbpNU4PzAKzwKzG6TVOD3yR7f9c/KbLLz784+7PT3zxxI+7Xz/xZ4598enfO33Xz02//YEj/2fuD38O/yvqJf9uevq7nH/Kz76Bb55e/lPTT//69KRLTvVnjm1yEF5QC5cIzFq4RAuXCMxm1vo8z1rj9BqnB2aBWWBW4/QapwcXv3Hf51HHPod/fqfHvnV31O0e/C0XvuD9j3rD5Xt/N37edNJXPldyyrFP+Z7pR/7DkX+B3fWuX7LaDXd/chD7r6eJSwRmLVyihUsEZjNrfZ5nrXF6jdMDs8AsMKtxeo3Tg0e9YecVtvvj8Z/s/HjHR79pd9Sh004/+8a3u9PFb37k6z69988cfZedPGHns/tbx993/O6Jrxz/4rFfPvqN0+t/Zvrgh6fPfPbEnt//niO/deIFuj85iP3X08QlArMWLtHCJQKzmbU+z7PWOL3G6YFZYBaY1Ti9xunBiffaSZ/zn/A9zLzeze9y93/4rx75hmn3c3JS/xx+h/78+6eT/zf+7/y5K3viQXCWHi4RmLVwiRYuEZjNrPV5nrXG6TVOD8wCs8Csxuk1Tg8e9frpka8/+iOfu37ljzj0yP+Zpuvd7Sk/c9GrP37ynz/l51GnGn7yV3Y/X/PO6ft+yQ13veVn/cN7PwfhSVq4RGDWwiVauERgNrPW53nWGqfXOD0wC8wCsxqn1zg9eOTrdt5Euz++fnrE6478fPfHC576bx2644zr3vC8Oz3ufs/9rUcc+5N7Pyd/Zd9n98V3/CfHHnr48+IfnX7vT6fLTvr30F0v++eut/dzEB6jhUsEZi1cooVLBGYza32eZ61xeo3TA7PALDCrcXqN04NHvPbo5+HfMT1i93P8K99+2bXPOte5+xz6gvs8+55Pf89Fr/7U8ergn90nfvUl0/f+wnTFFS6216WfmS5+vfmRz7FtD8LdW7hEYNbCJVq4RGA2s9bnedYap9c4PTALzAKzGqfXOD04/C7b/ey+Q3d/cvyXN7z1hc7FoUNnnnveze/ylfd7zvsZdXxg+jzmDdNbf3b6o7/a979KOqX3f/BzjD0IN2/hEoFZC5do4RKB2cxan+dZa5xe4/TALDALzGqcXuP04MEv/dDDv33nZfTtO5/dnxz75e0f+hrnBocOHbrgab/05W/decftjtr72fPK2/1XyK942/R7f+IyyY+899Tr7Q584viP318tLtHCJQKzmbU+z7PWOL2FSwRmgVlgtiTf/CNHX0kXvWbfZ/eLL/rhI//h+QP65Kenm9zhEXe8+O33eeZv8Ro9PvZhr/zUfb7xP3/fL06//b/MT7Z7e4dOO+OeT38v6x3f8PBPXvhDhqe0/3sSmQVmNU4PzAKzFi5R4/SZtT7Ps9Y4vYVLBGaBWWC2JD/yy76e9n6e/Pbpj/7S5EocPuxpp5951vVv+UVf9kMP+ta/uujVe6ddcf/n/88b3/YhZ13vFif/55lOaff2zj3vzg940R/vHzUd+eXu5zXTD4T/5T72fUsys8CsxumBWWDWwiVqnD6z1ud51hqnt3CJwCwwC8yW5C8+Mn3tJdPDXnXs8+pjn2Nfed27Ta6EJw/Mgt0/fOcv/4mjix1fcs/n/s//X3/+14antH+FyCwwq3F6YBaYtXCJGqfPrPV5nrXG6S1cIjALzAKzJfn4pdMrf2J66CsP/z+3j3x2f3Lkx1ftfOVV05cd7P/H+i5PHpgFu3/4gS/+8ImVjn0eeuwrX/LV/+ZjnzQ8pf0rRGaBWY3TA7PArIVL1Dh9Zq3P86w1Tm/hEoFZYBaYLcnlV0z/7FemR7z66Gt075v0yOcVRz5X/p9G2suTB2bBzp89dHiBI/vsbHJ0q2OrPuTln73tg155+VX5HxF8TmaBWY3TA7PArIVL1Dh9Zq3P86w1Tm/hEoFZYBaYLczvfHD68jcde0+d6vP7f2qSePLALDj8J69/i3ucvM/hz0N2fnzAi/7qRrd5iFngEoFZYFbj9MAsMGvhEjVOn1nr8zxrjdNbuERgFpgFZgvzmc9Oz3nXsdfTy098HnrsJy/6wSP/AfiD8OSBWXD6mefc7Wt/cXerk9c7/LnnM37z9DPONgtcIjALzGqcHpgFZi1cosbpM2t9nmetcXoLlwjMArPAbHn+9lPTUy+ZHvxtO5+X7fkc++U/euf0gb+yOpknD8xO5fDj7vmM39q3zJ59Dn/u+5wPnHH2TQ84bbpGd5sOPO2AnB6YBWYtXKLG6TNrfZ5nrXF6C5cIzAKzwGyRfu43j71GT/V5yLdNL/7B6XP+TyE9eWB2ksMPOvy4B7/0iqMLvNR9HvTS6Vb3et4Bp+3av0JkFpjVOD0wC8xauESN02fW+jzPWuP0Fi4RmAVmgdkifeijR95NR15YO58H7XyOvsKOfS75V9Olnzbcy5MHZvsdfsQlP7vvuXvX2F3y8I/Xuf4XHGTacftXiMwCsxqnB2aBWQuXqHH6zFqf51lrnN7CJQKzwCwwW6TPXj49/BXTg15yZZ9Hvmr6sfcY7uXJA7P9Dj/ika/c/+iXuskDv+XTp51+5kGmHbd/hcgsMKtxemAWmLVwiRqnz6z1eZ61xuktXCIwC8wCs6V62iXTA19y4nPkbfWtRz+7Pz/848WvttrLkwdm+138Kh+69ye7n3t9wx8ccNpxe55/ZcwCsxqnB2aBWQuXqHH6zFqf51lrnN7CJQKzwCwwW6orrpje/jNHXlIP+JYr+1z0sunN757+4m/Mp9qF/MVfT2/5l0eGn/zE3c8Dj33O/9J3HzrtjCufdrI9z78yZoFZjdMDs8CshUvUOH1m3c+7BnlzLVwiMAvMWrhEYHYwf/mR6dn/ZHrAi3feXLs/7v5k/+fCb77sgqe9//q3vK9PPRifOk2/+4Hp6942PfglV/bQ3a9f8LTfOfvGd7ryaVtu7+XUOX0TrfiQfrtauERgFpi1cInA7MD+3/82Pf410wO+efd1eeSz/wV64nO/53/irOt9/rUOHfLZn8vex12x87/devjLduaf6qG7Pz/6xOd97GZ3/oc8ce+0YTrw35ADcvomWvEh/Xa1cInALDBr4RKB2YF99vLpx9+z73V54vMiv/LFX/Mfb3nB869zg9tdpZfp7oMOv0D//K+nd//q9E3vPPXwkz+3f9h3n37G2aecNhzH/RQ5fROt+JB+u1q4RGAWmLVwicDsqvj0ZUf+xfDwe+3+xz67Pz/yptvzOfq7z//UBU/7/dtc+Fo3yHaf8v0/Nz35jdNDvvXEI/aNPdVDTz/z+s6qnXQjeUE1Tt9EKz6k364WLhGYBWYtXCIwu4r+7H9P3/J90/1fsPN54bHP7i+Pfe53/Ld2f7LzxXs/62/u+g/ed5sHvvmWF7zo5nf9x+ed/3Xnnf+1h39yiwtedPiLd/mqX7n3M/96t7rfzoTdD5NPfuiXPOU/n3ve3TzkDlffel5QjdM30YoP6berhUsEZoFZC5cIzK66v/n49Iof3veyu9/zj312fn70ZXrsl8f/zNGvP++y+z7nk/d51ieOfJ79yfs+77ITf+bYq/Pojzszj79A903b+fmXPOW/XPeGd7jWtU79Pzdw763nBdU4fROt+JB+u1q4RGAWmLVwicDsavnEpdPrfsK3Z/VzFYd80ZN+6azr3crj7eHSW88LqnH6JlrxIf12tXCJwCwwa+ESgdnV9b8/Nj30xdN9n3fkc7+dz+7P936Of/347+5+5fjn5OTAn8uve6M7erb93HjreUE1Tt9EKz6k364WLhGYBWYtXCIwK/jl354uePof3/e5x15tuz/Z+8vdD1/c+8u9n5O/eDzf+8vnTvd+5iducfdv9mAncd2t5wXVOH0TrfiQfrtauERgFpi1cInArObwwDPPucUt7/myu33dH9znOdM1/Hn2vl8+8iXTm/759Pt//Hdz0g3gBdU4fROt+JB+u1q4RGAWmLVwicCsZnfmodOuffZN73LvZx958e3+ePwne3+5+zn8Qtz98eiLcv/vnvw5+jJ99vSffu/of4/U/gNF7rr1vKAap2+iFR/Sb1cLlwjMArMWLhGY1eydfMNbX3z+l73nHs/4yPHX3/Ef932edezHZ+387rEfj379pPABz5/+wWunH/+FUz/0SpwIhh1eUI3TN9GKD+m3q4VLBGaBWQuXCMxqGH76mTe48e2//PYP/7F7P/OKez1zutezjnyOviJ3fs4Xj/xy98MXd//ws6Znf/f0U+898t9Osvf/fB4PTU4Eww4vqMbpm2iJh/T7EJjVOL3G6YFZjdNrnB6YXRWf/NT0L94zfc3r9rwlD3++af8v8+feOz8+4sXT239q+ptPnOL//qi7BmaBWWBW4/TArIVL1Dg9MAvMZtb9vIPwSgKzGqfXOD0wq3F6jdMDs4I//LPpRrf7spvf5bmff5833vGx//7vf9mvftFX/OZdn/zf7/rk37/zV/72+U/8T3d6wntvfeF3fd7dXvpvfm16/x+an8xdA7PALDCrcXpg1sIlapwemAVmM+t+3kF4JYFZjdNrnB6Y1Ti9xumBWc3uzEOnnX7t69z0jLNvduY5tzjz3C848jnnVmec/XlnXPe8Q0f+K+sPmQX7N43MArPArMbpgVkLl6hxemAWmM2s+3kH4ZUEZjVOr3F6YFbj9BqnB2Y1Tg/MArPALDALzGqcHpi1cIkapwdmgdnMup93EF5JYFbj9BqnB2Y1Tq9xemBW4/TALDALzAKzwKzG6YFZC5eocXpgFpjNrPt5B+GVBGY1Tq9xemBW4/QapwdmNU4PzAKzwCwwC8xqnB6YtXCJGqcHZoHZzLqfdxBeSWBW4/QapwdmNU6vcXpgVuP0wCwwC8wCs8CsxumBWQuXqHF6YBaYzaz7eQfhlQRmNU6vcXpgVuP0GqcHZjVOD8wCs8AsMAvMapwemLVwiRqnB2aB2cy6n3cQXklgVuP0GqcHZjVOr3F6YFbj9MAsMAvMArPArMbpgVkLl6hxemAWmM2s+3kH4ZUEZjVOr3F6YFbj9BqnB2Y1Tg/MArPALDALzGqcHpi1cIkapwdmgdnMup93EF5JYFbj9BqnB2Y1Tq9xemBW4/TALDALzAKzwKzG6YFZC5eocXpgFpjNrPt5B+GVBGY1Tq9xemBW4/QapwdmNU4PzAKzwCwwC8xqnB6YtXCJGqcHZoHZzLqfdxBeSWBW4/QapwdmNU6vcXpgVuP0wCwwC8wCs8CsxumBWQuXqHF6YBaYzaz1eZ41MKtxemBW4/QapwdmgVlgFpi1cIkap7dwiRqnB2YtXGITtR7SCw7MapwemNU4vcbpgVlgFpgFZi1cosbpLVyixumBWQuX2ESth/SCA7MapwdmNU6vcXpgFpgFZoFZC5eocXoLl6hxemDWwiU2UeshveDArMbpgVmN02ucHpgFZoFZYNbCJWqc3sIlapwemLVwiU3UekgvODCrcXpgVuP0GqcHZoFZYBaYtXCJGqe3cIkapwdmLVxiE7Ue0gsOzGqcHpjVOL3G6YFZYBaYBWYtXKLG6S1cosbpgVkLl9hErYf0ggOzGqcHZjVOr3F6YBaYBWaBWQuXqHF6C5eocXpg1sIlNlHrIb3gwKzG6YFZjdNrnB6YBWaBWWDWwiVqnN7CJWqcHpi1cIlN1HpILzgwq3F6YFbj9BqnB2aBWWAWmLVwiRqnt3CJGqcHZi1cYhO1HtILDsxqnB6Y1Ti9xumBWWAWmAVmLVyixuktXKLG6YFZC5fYRK2H9IIDsxqnB2Y1Tq9xemAWmAVmgVkLl6hxeguXqHF6YNbCJTZR6yG94MCsxumBWY3Ta5wemAVmgVlg1sIlapzewiVqnB6YtXCJTdR6SC84MKtxemBW4/QapwdmgVlgFpi1cIkap7dwiRqnB2YtXGITbf4h/a4GZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vH5ecGAWmAVmK+SRArMapwdmNU4PzGqcHpgFZoFZC5cIzAKzwGxm3c/r5wUHZoFZYLZCHikwq3F6YFbj9MCsxumBWWAWmLVwicAsMAvMZtb9vIPwSlq4RI3Ta5xe4/QWLrEk7hqYBWaby5MHZjVOX4YlruXNtXCJGqfXOL3G6S1cYkncNTALzDaXJw/Mapy+DEtcy5tr4RI1Tq9xeo3TW7jEkrhrYBaYbS5PHpjVOH0ZlriWN9fCJWqcXuP0Gqe3cIklcdfALDDbXJ48MKtx+jIscS1vroVL1Di9xuk1Tm/hEkviroFZYLa5PHlgVuP0ZVjiWt5cC5eocXqN02uc3sIllsRdA7PAbHN58sCsxunLsMS1vLkWLlHj9Bqn1zi9hUssibsGZoHZ5vLkgVmN05dhiWt5cy1cosbpNU6vcXoLl1gSdw3MArPN5ckDsxqnL8MS1/LmWrhEjdNrnF7j9BYusSTuGpgFZpvLkwdmNU5fhiWu5c21cIkap9c4vcbpLVxiSdw1MAvMNpcnD8xqnL4MS1zLm2vhEjVOr3F6jdNbuMSSuGtgFphtLk8emNU4fRmWuJY318Ilapxe4/Qap7dwiSVx18AsMNtcnjwwq3H6MixxLW+uhUvUOL3G6TVOb+ESS+KugVlgtrk8eWBW4/RlWOhaw17+VQrMArPArMbpNU5fIY8UmLVwicAsMAvMArPAbGbdzxuuBv+OBGaBWWBW4/Qap6+QRwrMWrhEYBaYBWaBWWA2s+7nDVeDf0cCs8AsMKtxeo3TV8gjBWYtXCIwC8wCs8AsMJtZ9/OGq8G/I4FZYBaY1Ti9xukr5JECsxYuEZgFZoFZYBaYzaz7ecPV4N+RwCwwC8xqnF7j9BXySIFZC5cIzAKzwCwwC8xm1v284Wrw70hgFpgFZjVOr3H6CnmkwKyFSwRmgVlgFpgFZjPrft5wNfh3JDALzAKzGqfXOH2FPFJg1sIlArPALDALzAKzmXU/b7ga/DsSmAVmgVmN02ucvkIeKTBr4RKBWWAWmAVmgdnMup83XA3+HQnMArPArMbpNU5fIY8UmLVwicAsMAvMArPAbGbdzxuuBv+OBGaBWWBW4/Qap6+QRwrMWrhEYBaYBWaBWWA2s+7nDVeDf0cCs8AsMKtxeo3TV8gjBWYtXCIwC8wCs8AsMJtZ9/OGq8G/I4FZYBaY1Ti9xukr5JECsxYuEZgFZoFZYBaYzaz7ecPV4N+RwCwwC8xqnF7j9BXySIFZC5cIzAKzwCwwC8xm1vo8z7r1vKAapwdmNU5v4RKBWY3TA7MapwdmgVlgFphtsda78Puw9bygGqcHZjVOb+ESgVmN0wOzGqcHZoFZYBaYbbHWu/D7sPW8oBqnB2Y1Tm/hEoFZjdMDsxqnB2aBWWAWmG2x1rvw+7D1vKAapwdmNU5v4RKBWY3TA7MapwdmgVlgFphtsda78Puw9bygGqcHZjVOb+ESgVmN0wOzGqcHZoFZYBaYbbHWu/D7sPW8oBqnB2Y1Tm/hEoFZjdMDsxqnB2aBWWAWmG2x1rvw+7D1vKAapwdmNU5v4RKBWY3TA7MapwdmgVlgFphtsda78Puw9bygGqcHZjVOb+ESgVmN0wOzGqcHZoFZYBaYbbHWu/D7sPW8oBqnB2Y1Tm/hEoFZjdMDsxqnB2aBWWAWmG2x1rvw+7D1vKAapwdmNU5v4RKBWY3TA7MapwdmgVlgFphtsda78Puw9bygGqcHZjVOb+ESgVmN0wOzGqcHZoFZYBaYbbHWu/D7sPW8oBqnB2Y1Tm/hEoFZjdMDsxqnB2aBWWAWmG2x1rvw+7D1vKAapwdmNU5v4RKBWY3TA7MapwdmgVlgFphtsda78PsQmK2QRwrMArPALDBbIY8UmAVmLVwiMGvhEjVO30Sth/SCA7MV8kiBWWAWmAVmK+SRArPArIVLBGYtXKLG6Zuo9ZBecGC2Qh4pMAvMArPAbIU8UmAWmLVwicCshUvUOH0TtR7SCw7MVsgjBWaBWWAWmK2QRwrMArMWLhGYtXCJGqdvotZDesGB2Qp5pMAsMAvMArMV8kiBWWDWwiUCsxYuUeP0TdR6SC84MFshjxSYBWaBWWC2Qh4pMAvMWrhEYNbCJWqcvolaD+kFB2Yr5JECs8AsMAvMVsgjBWaBWQuXCMxauESN0zdR6yG94MBshTxSYBaYBWaB2Qp5pMAsMGvhEoFZC5eocfomaj2kFxyYrZBHCswCs8AsMFshjxSYBWYtXCIwa+ESNU7fRK2H9IIDsxXySIFZYBaYBWYr5JECs8CshUsEZi1cosbpm6j1kF5wYLZCHikwC8wCs8BshTxSYBaYtXCJwKyFS9Q4fRO1HtILDsxWyCMFZoFZYBaYrZBHCswCsxYuEZi1cIkap2+i1kN6wYHZCnmkwCwwC8wCsxXySIFZYNbCJQKzFi5R4/RN1HpILzgwC8xauERgFpjVOH3reUE1Tg/MArMV8kiBWWC2Kq3be3OBWWDWwiUCs8CsxulbzwuqcXpgFpitkEcKzAKzVWnd3psLzAKzFi4RmAVmNU7fel5QjdMDs8BshTxSYBaYrUrr9t5cYBaYtXCJwCwwq3H61vOCapwemAVmK+SRArPAbFVat/fmArPArIVLBGaBWY3Tt54XVOP0wCwwWyGPFJgFZqvSur03F5gFZi1cIjALzGqcvvW8oBqnB2aB2Qp5pMAsMFuV1u29ucAsMGvhEoFZYFbj9K3nBdU4PTALzFbIIwVmgdmqtG7vzQVmgVkLlwjMArMap289L6jG6YFZYLZCHikwC8xWpXV7by4wC8xauERgFpjVOH3reUE1Tg/MArMV8kiBWWC2Kq3be3OBWWDWwiUCs8CsxulbzwuqcXpgFpitkEcKzAKzVWnd3psLzAKzFi4RmAVmNU7fel5QjdMDs8BshTxSYBaYrUrr9t5cYBaYtXCJwCwwq3H61vOCapwemAVmK+SRArPAbFVat/fmArPArIVLBGaBWY3Tt54XVOP0wCwwWyGPFJgFZqvSur03F5gFZi1cIjALzAKzGqfXOL2FSwRmNU6vcXqN0wOzFfJIy9C6llcSmAVmLVwiMAvMArMap9c4vYVLBGY1Tq9xeo3TA7MV8kjL0LqWVxKYBWYtXCIwC8wCsxqn1zi9hUsEZjVOr3F6jdMDsxXySMvQupZXEpgFZi1cIjALzAKzGqfXOL2FSwRmNU6vcXqN0wOzFfJIy9C6llcSmAVmLVwiMAvMArMap9c4vYVLBGY1Tq9xeo3TA7MV8kjL0LqWVxKYBWYtXCIwC8wCsxqn1zi9hUsEZjVOr3F6jdMDsxXySMvQupZXEpgFZi1cIjALzAKzGqfXOL2FSwRmNU6vcXqN0wOzFfJIy9C6llcSmAVmLVwiMAvMArMap9c4vYVLBGY1Tq9xeo3TA7MV8kjL0LqWVxKYBWYtXCIwC8wCsxqn1zi9hUsEZjVOr3F6jdMDsxXySMvQupZXEpgFZi1cIjALzAKzGqfXOL2FSwRmNU6vcXqN0wOzFfJIy9C6llcSmAVmLVwiMAvMArMap9c4vYVLBGY1Tq9xeo3TA7MV8kjL0LqWVxKYBWYtXCIwC8wCsxqn1zi9hUsEZjVOr3F6jdMDsxXySMvQupZXEpgFZi1cIjALzAKzGqfXOL2FSwRmNU6vcXqN0wOzFfJIy9C6llcSmAVmLVwiMAvMArPALDALzJbEXWucHpgFZsM1yusOzGbW+jzPGpgFZi1cIjALzAKzwCwwC8yWxF1rnB6YBWbDNcrrDsxm1vo8zxqYBWYtXCIwC8wCs8AsMAvMlsRda5wemAVmwzXK6w7MZtb6PM8amAVmLVwiMAvMArPALDALzJbEXWucHpgFZsM1yusOzGbW+jzPGpgFZi1cIjALzAKzwCwwC8yWxF1rnB6YBWbDNcrrDsxm1vo8zxqYBWYtXCIwC8wCs8AsMAvMlsRda5wemAVmwzXK6w7MZtb6PM8amAVmLVwiMAvMArPALDALzJbEXWucHpgFZsM1yusOzGbW+jzPGpgFZi1cIjALzAKzwCwwC8yWxF1rnB6YBWbDNcrrDsxm1vo8zxqYBWYtXCIwC8wCs8AsMAvMlsRda5wemAVmwzXK6w7MZtb6PM8amAVmLVwiMAvMArPALDALzJbEXWucHpgFZsM1yusOzGbW+jzPGpgFZi1cIjALzAKzwCwwC8yWxF1rnB6YBWbDNcrrDsxm1vo8zxqYBWYtXCIwC8wCs8AsMAvMlsRda5wemAVmwzXK6w7MZtb6PM8amAVmLVwiMAvMArPALDALzJbEXWucHpgFZsM1yusOzGbW+jzPGpitkEcKzAKzwCwwC8wCs8AsMAvMArPALDBbEncNzAKzFi4RmC1D61peSWC2Qh4pMAvMArPALDALzAKzwCwwC8wCs8BsSdw1MAvMWrhEYLYMrWt5JYHZCnmkwCwwC8wCs8AsMAvMArPALDALzAKzJXHXwCwwa+ESgdkytK7llQRmK+SRArPALDALzAKzwCwwC8wCs8AsMAvMlsRdA7PArIVLBGbL0LqWVxKYrZBHCswCs8AsMAvMArPALDALzAKzwCwwWxJ3DcwCsxYuEZgtQ+taXklgtkIeKTALzAKzwCwwC8wCs8AsMAvMArPAbEncNTALzFq4RGC2DK1reSWB2Qp5pMAsMAvMArPALDALzAKzwCwwC8wCsyVx18AsMGvhEoHZMrSu5ZUEZivkkQKzwCwwC8wCs8AsMAvMArPALDALzJbEXQOzwKyFSwRmy9C6llcSmK2QRwrMArPALDALzAKzwCwwC8wCs8AsMFsSdw3MArMWLhGYLUPrWl5JYLZCHikwC8wCs8AsMAvMArPALDALzAKzwGxJ3DUwC8xauERgtgyta3klgdkKeaTALDALzAKzwCwwC8wCs8AsMAvMArMlcdfALDBr4RKB2TK0ruWVBGYr5JECs8AsMAvMArPALDALzAKzwCwwC8yWxF0Ds8CshUsEZsvQupZXEpitkEcKzAKzwCwwC8wCs8AsMAvMArPALDBbEncNzAKzFi4RmC1D61peydbzglq4RGAWmNU4PTCrcXoLl6hxeo3Ta5wemAVmy9C6lley9bygFi4RmAVmNU4PzGqc3sIlapxe4/QapwdmgdkytK7llWw9L6iFSwRmgVmN0wOzGqe3cIkap9c4vcbpgVlgtgyta3klW88LauESgVlgVuP0wKzG6S1cosbpNU6vcXpgFpgtQ+taXsnW84JauERgFpjVOD0wq3F6C5eocXqN02ucHpgFZsvQupZXsvW8oBYuEZgFZjVOD8xqnN7CJWqcXuP0GqcHZoHZMrSu5ZVsPS+ohUsEZoFZjdMDsxqnt3CJGqfXOL3G6YFZYLYMrWt5JVvPC2rhEoFZYFbj9MCsxuktXKLG6TVOr3F6YBaYLUPrWl7J1vOCWrhEYBaY1Tg9MKtxeguXqHF6jdNrnB6YBWbL0LqWV7L1vKAWLhGYBWY1Tg/MapzewiVqnF7j9BqnB2aB2TK0ruWVbD0vqIVLBGaBWY3TA7Map7dwiRqn1zi9xumBWWC2DK1reSVbzwtq4RKBWWBW4/TArMbpLVyixuk1Tq9xemAWmC1D61peydbzglq4RGAWmNU4PTCrcXoLl6hxeo3Ta5wemAVmy7DQtYZhGNZivEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqFkvEaHYRhKxmt0GIahZLxGh2EYSsZrdBiGoWS8RodhGErGa3QYhqHk/wf6EPdVoiYhigAAAABJRU5ErkJggg==",\n    "currency": "THB"\n  }\n}\n')))}u.isMDXComponent=!0}}]);