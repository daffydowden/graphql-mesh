"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[6829],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={},p={unversionedId:"generated-markdown/PostGraphileHandler.generated",id:"generated-markdown/PostGraphileHandler.generated",isDocsHomePage:!1,title:"PostGraphileHandler.generated",description:"* connectionString (type: String) - A connection string to your Postgres database",source:"@site/docs/generated-markdown/PostGraphileHandler.generated.md",sourceDirName:"generated-markdown",slug:"/generated-markdown/PostGraphileHandler.generated",permalink:"/docs/generated-markdown/PostGraphileHandler.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/PostGraphileHandler.generated.md",version:"current",frontMatter:{}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectionString")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - A connection string to your Postgres database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schemaName")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array of String"),", required) - An array of strings which specifies the PostgreSQL schemas that PostGraphile will use to create a GraphQL schema. The default schema is the public schema."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pool")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),") - Connection Pool instance or settings or you can provide the path of a code file that exports any of those"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appendPlugins")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array of String"),") - Extra Postgraphile Plugins to append"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skipPlugins")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array of String"),') - Postgraphile Plugins to skip (e.g. "graphile-build#NodePlugin")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),' -  - Extra Postgraphile options that will be added to the postgraphile constructor. It can either be an object or a string pointing to the object\'s path (e.g. "./my-config#options"). See the ',(0,o.kt)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/usage-library/"},"postgraphile docs")," for more information. One of: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JSON")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"String")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscriptions")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enable GraphQL websocket transport support for subscriptions (default: true)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"live")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enables live-query support via GraphQL subscriptions (sends updated payload any time nested collections/records change) (default: true)")))}u.isMDXComponent=!0}}]);