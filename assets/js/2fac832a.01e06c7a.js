(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[5607],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(f,p(p({ref:t},l),{},{components:r})):a.createElement(f,p({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var m=2;m<i;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5750:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return l}});var a=r(9603),n=r(120),i=(r(7378),r(5318)),p={id:"merger-stitching",title:"@graphql-mesh/merger-stitching",sidebar_label:"merger-stitching"},o={unversionedId:"api/modules/merger-stitching",id:"api/modules/merger-stitching",isDocsHomePage:!1,title:"@graphql-mesh/merger-stitching",description:"- default",source:"@site/docs/api/modules/mergers_stitching_src.md",sourceDirName:"api/modules",slug:"/api/modules/merger-stitching",permalink:"/docs/api/modules/merger-stitching",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/modules/mergers_stitching_src.md",version:"current",sidebar_label:"merger-stitching",frontMatter:{id:"merger-stitching",title:"@graphql-mesh/merger-stitching",sidebar_label:"merger-stitching"},sidebar:"sidebar",previous:{title:"@graphql-mesh/merger-federation",permalink:"/docs/api/modules/merger-federation"},next:{title:"Class: default&lt;V\\&gt;",permalink:"/docs/api/classes/cache_file_src.default"}},s=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[]}]}],m={toc:s};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/merger-stitching#default"},"default"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/types_src.keyvaluecache"},(0,i.kt)("em",{parentName:"a"},"KeyValueCache")),"<","any\\",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"executor?"),": ",(0,i.kt)("em",{parentName:"p"},"Executor"),"<","Record","<","string, any\\",">","\\",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/types_src.meshpubsub"},(0,i.kt)("em",{parentName:"a"},"MeshPubSub"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"rawSources"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/types#rawsourceoutput"},(0,i.kt)("em",{parentName:"a"},"RawSourceOutput")),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"resolvers?"),": ",(0,i.kt)("em",{parentName:"p"},"IResolvers"),"<","any, any, Record","<","string, any\\",">",", any\\",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"transforms?"),": ",(0,i.kt)("em",{parentName:"p"},"Transform"),"<","Record","<","string, any\\",">","\\",">","[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"typeDefs?"),": DocumentNode[]  }): ",(0,i.kt)("em",{parentName:"p"},"GraphQLSchema")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<","GraphQLSchema\\",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/types_src.keyvaluecache"},(0,i.kt)("em",{parentName:"a"},"KeyValueCache")),"<","any\\",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.executor?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Executor"),"<","Record","<","string, any\\",">","\\",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.pubsub")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/types_src.meshpubsub"},(0,i.kt)("em",{parentName:"a"},"MeshPubSub")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.rawSources")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/types#rawsourceoutput"},(0,i.kt)("em",{parentName:"a"},"RawSourceOutput")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.resolvers?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"IResolvers"),"<","any, any, Record","<","string, any\\",">",", any\\",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.transforms?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Transform"),"<","Record","<","string, any\\",">","\\",">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.typeDefs?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"DocumentNode[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"GraphQLSchema")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<","GraphQLSchema\\",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/mergers/stitching/src/index.ts#L8"},"packages/mergers/stitching/src/index.ts:8")))}l.isMDXComponent=!0}}]);