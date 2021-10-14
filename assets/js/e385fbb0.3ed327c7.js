"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[6264],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48666:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],s={},l={unversionedId:"api/interfaces/types_src.YamlConfig.CacheTransformConfig",id:"api/interfaces/types_src.YamlConfig.CacheTransformConfig",isDocsHomePage:!1,title:"Interface: CacheTransformConfig",description:"types/src.YamlConfig.CacheTransformConfig",source:"@site/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.YamlConfig.CacheTransformConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: CacheInvalidateConfig",permalink:"/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig"},next:{title:"Interface: ComposeMongooseInputType",permalink:"/docs/api/interfaces/types_src.YamlConfig.ComposeMongooseInputType"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"cacheKey",id:"cachekey",children:[]},{value:"field",id:"field",children:[]},{value:"invalidate",id:"invalidate",children:[]}]}],c={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,i.kt)("a",{parentName:"p",href:"../modules/types_src.YamlConfig"},"YamlConfig"),".CacheTransformConfig"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig#cachekey"},"cacheKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig#field"},"field")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig#invalidate"},"invalidate"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"cachekey"},"cacheKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cacheKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Cache key to use to store your resolvers responses.\nThe defualt is: {typeName}-{fieldName}-{argsHash}-{fieldNamesHash}"),(0,i.kt)("p",null,"Available variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"{args.argName} - use resolver argument"),(0,i.kt)("li",{parentName:"ul"},"{typeName} - use name of the type"),(0,i.kt)("li",{parentName:"ul"},"{fieldName} - use name of the field"),(0,i.kt)("li",{parentName:"ul"},"{argsHash} - a hash based on the 'args' object"),(0,i.kt)("li",{parentName:"ul"},"{fieldNamesHash} - a hash based on the field names selected by the client"),(0,i.kt)("li",{parentName:"ul"},"{info} - the GraphQLResolveInfo of the resolver")),(0,i.kt)("p",null,"Available interpolations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"{format|date} - returns the current date with a specific format")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L976"},"packages/types/src/config.ts:976")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"field"},"field"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"field"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The type and field to apply cache to, you can use wild cards as well, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Query.*")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L960"},"packages/types/src/config.ts:960")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidate"},"invalidate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"invalidate"),": ",(0,i.kt)("a",{parentName:"p",href:"types_src.YamlConfig.CacheInvalidateConfig"},"CacheInvalidateConfig")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L977"},"packages/types/src/config.ts:977")))}f.isMDXComponent=!0}}]);