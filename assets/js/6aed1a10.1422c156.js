(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[6084],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return r?a.createElement(h,c(c({ref:t},p),{},{components:r})):a.createElement(h,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3663:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var a=r(9603),n=r(120),i=(r(7378),r(5318)),c={},o={unversionedId:"api/interfaces/types_src.yamlconfig.cachetransformconfig",id:"api/interfaces/types_src.yamlconfig.cachetransformconfig",isDocsHomePage:!1,title:"Interface: CacheTransformConfig",description:"types/src.YamlConfig.CacheTransformConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.yamlconfig.cachetransformconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: CacheInvalidateConfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.cacheinvalidateconfig"},next:{title:"Interface: ComposeMongooseInputType",permalink:"/docs/api/interfaces/types_src.yamlconfig.composemongooseinputtype"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"cacheKey",id:"cachekey",children:[]},{value:"field",id:"field",children:[]},{value:"invalidate",id:"invalidate",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,i.kt)("a",{parentName:"p",href:"../modules/types_src.yamlconfig"},"YamlConfig"),".CacheTransformConfig"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig#cachekey"},"cacheKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig#field"},"field")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.cachetransformconfig#invalidate"},"invalidate"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"cachekey"},"cacheKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cacheKey"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Cache key to use to store your resolvers responses.\nThe defualt is: {typeName}-{fieldName}-{argsHash}-{fieldNamesHash}"),(0,i.kt)("p",null,"Available variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"{args.argName} - use resolver argument"),(0,i.kt)("li",{parentName:"ul"},"{typeName} - use name of the type"),(0,i.kt)("li",{parentName:"ul"},"{fieldName} - use name of the field"),(0,i.kt)("li",{parentName:"ul"},"{argsHash} - a hash based on the 'args' object"),(0,i.kt)("li",{parentName:"ul"},"{fieldNamesHash} - a hash based on the field names selected by the client"),(0,i.kt)("li",{parentName:"ul"},"{info} - the GraphQLResolveInfo of the resolver")),(0,i.kt)("p",null,"Available interpolations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"{format|date} - returns the current date with a specific format")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L929"},"packages/types/src/config.ts:929")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"field"},"field"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"field"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"The type and field to apply cache to, you can use wild cards as well, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Query.*")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L913"},"packages/types/src/config.ts:913")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidate"},"invalidate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"invalidate"),": ",(0,i.kt)("a",{parentName:"p",href:"types_src.yamlconfig.cacheinvalidateconfig"},(0,i.kt)("em",{parentName:"a"},"CacheInvalidateConfig"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L930"},"packages/types/src/config.ts:930")))}p.isMDXComponent=!0}}]);