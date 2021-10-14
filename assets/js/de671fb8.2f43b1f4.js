"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[9681],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],c={},p={unversionedId:"api/interfaces/types_src.YamlConfig.CacheInvalidateConfig",id:"api/interfaces/types_src.YamlConfig.CacheInvalidateConfig",isDocsHomePage:!1,title:"Interface: CacheInvalidateConfig",description:"types/src.YamlConfig.CacheInvalidateConfig",source:"@site/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: CacheEffectingOperationConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.CacheEffectingOperationConfig"},next:{title:"Interface: CacheTransformConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"effectingOperations",id:"effectingoperations",children:[]},{value:"ttl",id:"ttl",children:[]}]}],l={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,i.kt)("a",{parentName:"p",href:"../modules/types_src.YamlConfig"},"YamlConfig"),".CacheInvalidateConfig"),(0,i.kt)("p",null,"Invalidation rules"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig#effectingoperations"},"effectingOperations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig#ttl"},"ttl"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"effectingoperations"},"effectingOperations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"effectingOperations"),": ",(0,i.kt)("a",{parentName:"p",href:"types_src.YamlConfig.CacheEffectingOperationConfig"},"CacheEffectingOperationConfig"),"[]"),(0,i.kt)("p",null,"Invalidate the cache when a specific operation is done without an error"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L986"},"packages/types/src/config.ts:986")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ttl"},"ttl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ttl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Specified in seconds, the time-to-live (TTL) value limits the lifespan"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L990"},"packages/types/src/config.ts:990")))}f.isMDXComponent=!0}}]);