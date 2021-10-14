"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[315],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14072:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),i=["components"],l={id:"localforage",title:"LocalForage",sidebar_label:"LocalForage"},c={unversionedId:"cache/localforage",id:"cache/localforage",isDocsHomePage:!1,title:"LocalForage",description:"LocalForage is a library that improves the existing storage mechanism in the browser by using IndexedDB, WebSQL and localStorage. See more",source:"@site/docs/cache/localforage.md",sourceDirName:"cache",slug:"/cache/localforage",permalink:"/docs/cache/localforage",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/cache/localforage.md",version:"current",sidebar_label:"LocalForage",frontMatter:{id:"localforage",title:"LocalForage",sidebar_label:"LocalForage"},sidebar:"sidebar",previous:{title:"File Cache",permalink:"/docs/cache/cache-file"},next:{title:"Redis Cache",permalink:"/docs/cache/cache-redis"}},p=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LocalForage is a library that improves the existing storage mechanism in the browser by using ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexedDB"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSQL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/localForage/localForage"},"See more")," "),(0,o.kt)("p",null,"This caching mechanism is only recommended for the browser environments. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/examples/openapi-react-weatherbit/src/mesh/useMeshSdk.ts#L10"},"See the example")),(0,o.kt)("p",null,"To get started with this caching strategy, install it from npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @graphql-mesh/cache-localforage\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"cache:\n  localforage:\n    driver: [WEBSQL, INDEXEDDB, LOCALSTORAGE] # LocalForage will try these methods in order and get the first compatible option\n")),(0,o.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,o.kt)("p",null,(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"driver")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array of String (WEBSQL | INDEXEDDB | LOCALSTORAGE)"),", required)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Float"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Int"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storeName")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),")"))))}m.isMDXComponent=!0}}]);