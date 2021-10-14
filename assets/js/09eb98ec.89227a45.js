"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[9625],{35318:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return u}});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||s;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16125:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=t(25773),o=t(30808),s=(t(27378),t(35318)),i=["components"],a={},p={unversionedId:"api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject",id:"api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject",isDocsHomePage:!1,title:"Interface: ResolversCompositionTransformObject",description:"types/src.YamlConfig.ResolversCompositionTransformObject",source:"@site/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject",permalink:"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ResolversCompositionTransform",permalink:"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransform"},next:{title:"Interface: SDKConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.SDKConfig"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"composer",id:"composer",children:[]},{value:"resolver",id:"resolver",children:[]}]}],l={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,s.kt)("a",{parentName:"p",href:"../modules/types_src.YamlConfig"},"YamlConfig"),".ResolversCompositionTransformObject"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject#composer"},"composer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject#resolver"},"resolver"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"composer"},"composer"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"composer"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("p",null,"Path to the composer function\nExample: ./src/auth.js#authComposer"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1306"},"packages/types/src/config.ts:1306")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"resolver"},"resolver"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"resolver"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"The GraphQL Resolver path\nExample: Query.users"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1301"},"packages/types/src/config.ts:1301")))}f.isMDXComponent=!0}}]);