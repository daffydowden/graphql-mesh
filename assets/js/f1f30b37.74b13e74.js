"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[6156],{35318:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?n.createElement(h,i(i({ref:r},s),{},{components:t})):n.createElement(h,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87782:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=t(25773),o=t(30808),a=(t(27378),t(35318)),i=["components"],c={id:"inmemory-lru",title:"InMemory LRU Cache",sidebar_label:"InMemory LRU"},l={unversionedId:"cache/inmemory-lru",id:"cache/inmemory-lru",isDocsHomePage:!1,title:"InMemory LRU Cache",description:"This caching solution uses an in-memory LRU cache store that is used by default.",source:"@site/docs/cache/inmemory-lru.md",sourceDirName:"cache",slug:"/cache/inmemory-lru",permalink:"/docs/cache/inmemory-lru",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/cache/inmemory-lru.md",version:"current",sidebar_label:"InMemory LRU",frontMatter:{id:"inmemory-lru",title:"InMemory LRU Cache",sidebar_label:"InMemory LRU"},sidebar:"sidebar",previous:{title:"Extend Transform (experimental)",permalink:"/docs/transforms/extend"},next:{title:"File Cache",permalink:"/docs/cache/cache-file"}},u=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This caching solution uses an in-memory LRU cache store that is used by default.\nYou can learn more about LRU Caching;\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_replacement_policies"},"Least_recently_used")),(0,a.kt)("p",null,"You can configure the maximum cache entries you want to keep."),(0,a.kt)("p",null,"To get started with this caching strategy, install it from npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @graphql-mesh/cache-inmemory-lru\n")),(0,a.kt)("h2",{id:"how-to-use"},"How to use?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"cache:\n    inmemoryLRU:\n        max: 1000 # This will set the size\n")),(0,a.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,a.kt)("p",null,(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max")," (type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Int"),")"))))}m.isMDXComponent=!0}}]);