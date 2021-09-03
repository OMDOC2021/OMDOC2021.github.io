(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[887],{3905:function(t,a,n){"use strict";n.d(a,{Zo:function(){return k},kt:function(){return g}});var e=n(7294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function N(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=e.createContext({}),m=function(t){var a=e.useContext(d),n=a;return t&&(n="function"==typeof t?t(a):N(N({},a),t)),n},k=function(t){var a=m(t.components);return e.createElement(d.Provider,{value:a},t.children)},i={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},u=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=m(n),g=r,_=u["".concat(d,".").concat(g)]||u[g]||i[g]||l;return n?e.createElement(_,N(N({ref:a},k),{},{components:n})):e.createElement(_,N({ref:a},k))}));function g(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,N=new Array(l);N[0]=u;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,N[1]=p;for(var m=2;m<l;m++)N[m]=n[m];return e.createElement.apply(null,N)}return e.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9625:function(t,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return u}});var e=n(2122),r=n(9756),l=(n(7294),n(3905)),N=["components"],p={sidebar_position:99,title:"error-code"},d=void 0,m={unversionedId:"api/error-code",id:"api/error-code",isDocsHomePage:!1,title:"error-code",description:"\u8bf7\u6c42\u8fd4\u56decode",source:"@site/docs/api/error-code.md",sourceDirName:"api",slug:"/api/error-code",permalink:"/docs/api/error-code",version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"error-code"},sidebar:"tutorialSidebar",previous:{title:"OCR \u529f\u80fd",permalink:"/docs/api/ocr"}},k=[{value:"\u8bf7\u6c42\u8fd4\u56decode",id:"\u8bf7\u6c42\u8fd4\u56decode",children:[]},{value:"\u626b\u7801\u72b6\u6001\u8bf4\u660e  \u5e38\u89c1\u9519\u8bef\u53f7",id:"\u626b\u7801\u72b6\u6001\u8bf4\u660e--\u5e38\u89c1\u9519\u8bef\u53f7",children:[]}],i={toc:k};function u(t){var a=t.components,n=(0,r.Z)(t,N);return(0,l.kt)("wrapper",(0,e.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u8fd4\u56decode"},"\u8bf7\u6c42\u8fd4\u56decode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"msg"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u3001\u64cd\u4f5c\u6210\u529f\uff0c\u8fd4\u56de\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4000"),(0,l.kt)("td",{parentName:"tr",align:null},"TOKEN_WRONG"),(0,l.kt)("td",{parentName:"tr",align:null},"token\u5931\u6548\u6216\u8005\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4001"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR_NOT_SUPPORT_THE_TYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u652f\u6301\u7684OCR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4002"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR_CONVERT_TO_STRING_EXCEPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"OC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4003"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR_RESULT_CODE_NOT_RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR\u8bf7\u6c42\u8fd4\u56de\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4004"),(0,l.kt)("td",{parentName:"tr",align:null},"BANK_CARD_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u5df2\u7ecf\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4005"),(0,l.kt)("td",{parentName:"tr",align:null},"BANK_CARD_INFO_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94f6\u884c\u5361\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4006"),(0,l.kt)("td",{parentName:"tr",align:null},"COMPLETED_PERSONAL_INFO_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5584\u4e2a\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4007"),(0,l.kt)("td",{parentName:"tr",align:null},"ID_TYPE_IS_WRONG"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID\u7c7b\u578b\u9519\u8bef\u3002\u53ea\u652f\u6301PASS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4008"),(0,l.kt)("td",{parentName:"tr",align:null},"USER_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4009"),(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_FORMAT_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4010"),(0,l.kt)("td",{parentName:"tr",align:null},"USER_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5df2\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4011"),(0,l.kt)("td",{parentName:"tr",align:null},"USERNAME_FORMAT_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u683c\u5f0f\u9519\u8bef\uff0c\u90ae\u7bb1\u6216\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4012"),(0,l.kt)("td",{parentName:"tr",align:null},"PASSWORD_NOT_RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5bc6\u7801\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4013"),(0,l.kt)("td",{parentName:"tr",align:null},"TRADE_PASSWORD_NOT_RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u91d1\u5bc6\u7801\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4014"),(0,l.kt)("td",{parentName:"tr",align:null},"MOBILE_HAS_BEEN_BOUND"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u53f7\u5df2\u88ab\u7ed1\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4015"),(0,l.kt)("td",{parentName:"tr",align:null},"EMAIL_HAS_BEEN_BOUND"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90ae\u7bb1\u5df2\u88ab\u7ed1\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4016"),(0,l.kt)("td",{parentName:"tr",align:null},"YOU_HAS_BOUND_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u5df2\u7ecf\u7ed1\u5b9a\u4e86\u624b\u673a\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4017"),(0,l.kt)("td",{parentName:"tr",align:null},"YOU_HAS_BOUND_MOBILE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u5df2\u7ecf\u7ed1\u5b9a\u4e86\u90ae\u7bb1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4018"),(0,l.kt)("td",{parentName:"tr",align:null},"MOBILE_FORMAT_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4019"),(0,l.kt)("td",{parentName:"tr",align:null},"USER_ID_TYPE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID\u7c7b\u578b\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4020"),(0,l.kt)("td",{parentName:"tr",align:null},"USER_PASSPORT_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u62a4\u7167\u53f7\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4021"),(0,l.kt)("td",{parentName:"tr",align:null},"YOU_HAVE_SET_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u767b\u9646\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4022"),(0,l.kt)("td",{parentName:"tr",align:null},"YOU_HAVE_SET_TRADE_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4023"),(0,l.kt)("td",{parentName:"tr",align:null},"PLEASE_COMPLETE_REAL_NAME_AUTHENTI"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4024"),(0,l.kt)("td",{parentName:"tr",align:null},"ACCOUNT_NOT_RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237\u4e0d\u5b58\u5728\uff0c\u8f6c\u8d26\u6216\u8005\u5145\u503c\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4029"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL_1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d251\u6b21\uff0c\u767b\u9646\u5bc6\u7801\u9519\u8bef\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4030"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL_2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d252\u6b21\uff0c\u767b\u9646\u5bc6\u7801\u9519\u8bef\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4031"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL_3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d253\u6b21\uff0c\u767b\u9646\u5bc6\u7801\u9519\u8bef\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4032"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL_4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d254\u6b21\uff0c\u767b\u9646\u5bc6\u7801\u9519\u8bef\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4033"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL_5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d255\u6b21\uff0c\u767b\u9646\u5bc6\u7801\u9519\u8bef\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4034"),(0,l.kt)("td",{parentName:"tr",align:null},"USER_LOCKED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5bc6\u7801\u6216\u767b\u9646\u9a8c\u8bc1\u7801\u8fde\u7eed\u9519\u8bef5\u6b21\uff0c\u5c06\u4f1a\u9501\u5b9a4\u5c0f\u65f6\uff0c\u7981\u6b62\u767b\u9646")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4035"),(0,l.kt)("td",{parentName:"tr",align:null},"CID_OR_EQUTYPE_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u63a5\u53e3\uff0c\u5fc5\u987b\u4f20CID\u548cEquType\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4036"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT_1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u5bc6\u7801\uff0c\u6821\u9a8c\u9a8c\u8bc1\u7801\u9519\u8bef1\u6b21\uff0c\u8fde\u7eed5\u6b21\u9519\u8bef\u5219\u4f1a\u9501\u5b9a4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4037"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT_2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u5bc6\u7801\uff0c\u6821\u9a8c\u9a8c\u8bc1\u7801\u9519\u8bef2\u6b21\uff0c\u8fde\u7eed5\u6b21\u9519\u8bef\u5219\u4f1a\u9501\u5b9a4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4038"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT_3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u5bc6\u7801\uff0c\u6821\u9a8c\u9a8c\u8bc1\u7801\u9519\u8bef3\u6b21\uff0c\u8fde\u7eed5\u6b21\u9519\u8bef\u5219\u4f1a\u9501\u5b9a4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4039"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT_4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u5bc6\u7801\uff0c\u6821\u9a8c\u9a8c\u8bc1\u7801\u9519\u8bef4\u6b21\uff0c\u8fde\u7eed5\u6b21\u9519\u8bef\u5219\u4f1a\u9501\u5b9a4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4040"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT_5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u5bc6\u7801\uff0c\u6821\u9a8c\u9a8c\u8bc1\u7801\u9519\u8bef5\u6b21\uff0c\u8fde\u7eed5\u6b21\u9519\u8bef\u5219\u4f1a\u9501\u5b9a4\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4041"),(0,l.kt)("td",{parentName:"tr",align:null},"PLEASE_INPUT_CORRECT_PHONE_NUMBER_OR_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u4e0d\u6b63\u786e\uff0c\u672a\u63a5\u6536\u5230\u767b\u9646\u7684\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4042"),(0,l.kt)("td",{parentName:"tr",align:null},"PLEASE_INPUT_OTP_CODE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u4e0d\u6b63\u786e\uff0c\u672a\u63a5\u6536\u5230\u767b\u9646\u9a8c\u8bc1\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4043"),(0,l.kt)("td",{parentName:"tr",align:null},"PLEASE_SEND_OTP_CODE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u67e5\u627e\u5230\u5df2\u53d1\u9001\u7684\u9a8c\u8bc1\u7801\uff0c\u9700\u91cd\u65b0\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4050"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR_URL_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"OCR\u53c2\u6570URL\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"INSUFFICIENT_BALANCE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u4ea7\u4e0d\u8db3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5001"),(0,l.kt)("td",{parentName:"tr",align:null},"SCB_QR_CREATE_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"SCB\u94f6\u884c\u4e8c\u7ef4\u7801\u5145\u503c\u521b\u5efa\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5002"),(0,l.kt)("td",{parentName:"tr",align:null},"BBL_QR_CREATE_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"BBL\u94f6\u884c\u4e8c\u7ef4\u7801\u5145\u503c\u521b\u5efa\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5101"),(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5102"),(0,l.kt)("td",{parentName:"tr",align:null},"RECEIVER_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5103"),(0,l.kt)("td",{parentName:"tr",align:null},"FROM_DO_NOT_EXCEED_THE_LIMIT_FOR_A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5102"),(0,l.kt)("td",{parentName:"tr",align:null},"YOU_CAN_NOT_TRANSFER_TO_YOURSELF"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5103"),(0,l.kt)("td",{parentName:"tr",align:null},"YOUR_ACCOUNT_STATUS_IS_FORBID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7528\u6237\u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5104"),(0,l.kt)("td",{parentName:"tr",align:null},"RECEIVER_STATUS_IS_FORBID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7\u8d26\u6237\u72b6\u6001\u4e0d\u6b63")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5105"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER",(0,l.kt)("em",{parentName:"td"},"IN_CURRENT_MONTH_EXCEEDS")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5107"),(0,l.kt)("td",{parentName:"tr",align:null},"THIS_KIND_OF_RECHARGE_IS_NOT_SUPPO"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5106"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_EXCEEDS_SINGLE_LIMIT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u8d85\u8fc7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5108"),(0,l.kt)("td",{parentName:"tr",align:null},"THE_BALANCE_OF_THE_WALLET_IS_GREAT"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5109"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_AND_TRANSFER_AMOUNT_IN_TH"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5200"),(0,l.kt)("td",{parentName:"tr",align:null},"CREATE_SCAN_PAYMENT_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u626b\u7801\u4ed8\u5931\u8d25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5201"),(0,l.kt)("td",{parentName:"tr",align:null},"CONFIRM_SCAN_PAYMENT_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u626b\u7801\u4ed8\u5931\u8d25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5400"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER_TO_BANK_LESS_THAN_THE_SINGLE_HANDLING_FEE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\uff0c\u8f6c\u8d26\u91d1\u989d\u4e0d\u5f97\u4f4e\u4e8e\u5355\u7b14\u624b\u7eed\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5401"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER_TO_BANK_ACCOUNT_HOLDER_NAME_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\uff0c\u94f6\u884c\u5361\u8d26\u6237\u59d3\u540d\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5402"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER_TO_BANK_ACCOUNT_NUMBER_FORMAT_WRONG"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\uff0c\u94f6\u884c\u5361\u8d26\u6237\u53f7\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5403"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER_TO_BANK_NAME_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u5230\u94f6\u884c\u5361\uff0c\u94f6\u884c\u5361\u540d\u79f0\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6000"),(0,l.kt)("td",{parentName:"tr",align:null},"ACCOUNT_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"QLDB\u4e2d\u4e0d\u5b58\u5728\u6b64\u8d26\u6237\uff0c\u8bf7\u8054\u7cfb\u5ba2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6001"),(0,l.kt)("td",{parentName:"tr",align:null},"AMOUNT_IS_WRONG"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u6570\u91cf\u683c\u5f0f\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6002"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT_ENOUGH_BALANCE_FORMAT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u4ea7\u4e0d\u8db3\uff0c\u65e0\u6cd5\u8f6c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6003"),(0,l.kt)("td",{parentName:"tr",align:null},"DUPLICATE_OPERATION_ID_FORMAT\tQLDB"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6004"),(0,l.kt)("td",{parentName:"tr",align:null},"ACCOUNT_HAS_EXISTED"),(0,l.kt)("td",{parentName:"tr",align:null},"QLDB\u5df2\u5b58\u5728\u6b64\u8d26\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7001"),(0,l.kt)("td",{parentName:"tr",align:null},"MESSAGE_REQUEST_PARAMETER_ERR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7002"),(0,l.kt)("td",{parentName:"tr",align:null},"MESSAGE_BALANCE_INSUFFICIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801\u4f59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7003"),(0,l.kt)("td",{parentName:"tr",align:null},"MESSAGE_CONTENT_SENSITIVE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801\u5185\u5bb9\u654f\u611f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7004"),(0,l.kt)("td",{parentName:"tr",align:null},"MESSAGE_RESPONSE_SYSTEM_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801\u670d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7005"),(0,l.kt)("td",{parentName:"tr",align:null},"MESSAGE_REQUEST_SUBMIT_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8001"),(0,l.kt)("td",{parentName:"tr",align:null},"WALLET_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94b1\u5305\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8002"),(0,l.kt)("td",{parentName:"tr",align:null},"WALLET_NOT_MATCH"),(0,l.kt)("td",{parentName:"tr",align:null},"\u94b1\u5305\u4e0d\u5339\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8003"),(0,l.kt)("td",{parentName:"tr",align:null},"NO_BANK_CARD_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u5361\u53d6\u6b3e\u8d85\u8fc7\u9650\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8004"),(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_PER_MONTH_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u6708")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8005"),(0,l.kt)("td",{parentName:"tr",align:null},"PAYMENT_PER_TIME_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u7b14\u5883\u5185")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8006"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_PER_MONTH_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u6708")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8007"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_PER_TIME_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u7b14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8008"),(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFER_PER_TIME_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u7b14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8009"),(0,l.kt)("td",{parentName:"tr",align:null},"PER_MONTH_LIMIT_EXCEED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u6708\u8d44\u91d1\u53d8\u52a8\u8d85\u8fc7\u9650\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8010"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_QLDB_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u5f02\u5e38\u3002\u66f4\u65b0\u5907\u4efd\u6570\u636e\u5e93\u5f02\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8011"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_RETRY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8012"),(0,l.kt)("td",{parentName:"tr",align:null},"RECHARGE_NO_DUPLICATE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u5355\u53f7\u91cd\u590d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9001"),(0,l.kt)("td",{parentName:"tr",align:null},"IO_EXCEPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5176\u4ed6\u7cfb\u7edfIO \u5f02\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9002"),(0,l.kt)("td",{parentName:"tr",align:null},"CONNECT_EXCEPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5176\u4ed6\u7cfb\u7edf\u8fde\u63a5\u5f02\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9003"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801\u4e0d\u5b58\u5728\u6216\u8005\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u53d1\u9001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9004"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_CODE_NOT_RIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9005"),(0,l.kt)("td",{parentName:"tr",align:null},"AMOUNT_IS_NEGATIVE_FORMAT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91d1\u989d\u683c\u5f0f\u4e0d\u6b63\u786e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9006"),(0,l.kt)("td",{parentName:"tr",align:null},"PERMISSION_DENY"),(0,l.kt)("td",{parentName:"tr",align:null},"PERMISSION_DENY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9007"),(0,l.kt)("td",{parentName:"tr",align:null},"OTP_LIMIT_IN_ONE_HOUR"),(0,l.kt)("td",{parentName:"tr",align:null},"1\u5c0f\u65f6\u5185\u9a8c\u8bc1\u7801\u53d1\u9001\u5df2\u8fbe\u4e0a\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9998"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5931\u8d25\u3002\u6709\u8be6\u7ec6\u7684\u5931\u8d25\u539f\u56e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9997"),(0,l.kt)("td",{parentName:"tr",align:null},"ACCESS_DENY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u53d7\u9650\u3002\u672a\u767b\u5f55\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9988"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAMETER_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9999"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN_EXCEPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5\u5f02\u5e38")))),(0,l.kt)("h2",{id:"\u626b\u7801\u72b6\u6001\u8bf4\u660e--\u5e38\u89c1\u9519\u8bef\u53f7"},"\u626b\u7801\u72b6\u6001\u8bf4\u660e  \u5e38\u89c1\u9519\u8bef\u53f7"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"msg"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5300"),(0,l.kt)("td",{parentName:"tr",align:null},"PAY_NUMBER_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7801\u65f6\uff0c\u7cfb\u7edf\u751f\u6210\u5355\u53f7\u91cd\u590d\uff0c\u9700\u91cd\u65b0\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5301"),(0,l.kt)("td",{parentName:"tr",align:null},"PAY_STATUS_WRONG"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u884c\u786e\u8ba4\u4fe1\u606f\u65f6\uff0c\u8ba2\u5355\u72b6\u6001\u4e0d\u7b26\u5408\u65f6\u62a5\u9519;\u4f8b\u5982\u626b\u7801\uff0c\u8ba2\u5355\u72b6\u6001\u5fc5\u987b\u4e3aINIT\uff0c\u8bbe\u7f6e\u91d1\u989d\uff0c\u8ba2\u5355\u72b6\u6001\u5fc5\u987b\u4e3aSCAN,\u4ed8\u6b3e\u8ba2\u5355\u72b6\u6001\u5fc5\u987b\u4e3aPAYING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5302"),(0,l.kt)("td",{parentName:"tr",align:null},"PAYER_DENY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u7528\u6237\u4fee\u6539\u8ba2\u5355\uff0c\u8d8a\u6743\u3002\u6bd4\u5982\u8bbe\u7f6e\u8ba2\u5355\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5303"),(0,l.kt)("td",{parentName:"tr",align:null},"PAYEE_DENY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u7528\u6237\u4fee\u6539\u8ba2\u5355\uff0c\u8d8a\u6743\u3002\u6bd4\u5982\u786e\u8ba4\u652f\u4ed8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5304"),(0,l.kt)("td",{parentName:"tr",align:null},"PAY_EXPIRE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u8d85\u65f6\uff0c30\u5206\u949f\u5185\u64cd\u4f5c\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5305"),(0,l.kt)("td",{parentName:"tr",align:null},"CAN_NOT_SET_AMOUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u8bbe\u7f6e\u8ba2\u5355\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5306"),(0,l.kt)("td",{parentName:"tr",align:null},"CAN_NOT_SCAN_YOURSELF"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u81ea\u5df1\u626b\u81ea\u5df1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5307"),(0,l.kt)("td",{parentName:"tr",align:null},"PAY_NUMBER_NOT_EXIST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u65f6\uff0c\u6216\u8005\u4fee\u6539\u8ba2\u5355\u72b6\u6001\u65f6\u8ba2\u5355\u4e0d\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"INSUFFICIENT_BALANCE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u65b9\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8")))))}u.isMDXComponent=!0}}]);