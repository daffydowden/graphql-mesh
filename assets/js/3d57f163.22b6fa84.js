(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[90],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,y=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4919:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(9603),i=r(120),a=(r(7378),r(5318)),o={},c={unversionedId:"api/interfaces/types_src.yamlconfig.httpsconfig",id:"api/interfaces/types_src.yamlconfig.httpsconfig",isDocsHomePage:!1,title:"Interface: HTTPSConfig",description:"types/src.YamlConfig.HTTPSConfig",source:"@site/docs/api/interfaces/types_src.yamlconfig.httpsconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.yamlconfig.httpsconfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.httpsconfig",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.httpsconfig.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: Handler",permalink:"/docs/api/interfaces/types_src.yamlconfig.handler"},next:{title:"Interface: InMemoryLRUConfig",permalink:"/docs/api/interfaces/types_src.yamlconfig.inmemorylruconfig"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"cert",id:"cert",children:[]},{value:"key",id:"key",children:[]}]}],p={toc:s};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,a.kt)("a",{parentName:"p",href:"../modules/types_src.yamlconfig"},"YamlConfig"),".HTTPSConfig"),(0,a.kt)("p",null,"SSL Credentials for HTTPS Server\nIf this is provided, Mesh will be served via HTTPS"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.httpsconfig#cert"},"cert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.yamlconfig.httpsconfig#key"},"key"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"cert"},"cert"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cert"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L157"},"packages/types/src/config.ts:157")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"key"},"key"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"key"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L156"},"packages/types/src/config.ts:156")))}l.isMDXComponent=!0}}]);