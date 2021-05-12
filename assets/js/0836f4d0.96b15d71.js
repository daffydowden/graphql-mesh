(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[8985],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(9603),a=n(120),i=(n(7378),n(5318)),o={id:"postgraphile",title:"PostgreSQL / PostGraphile",sidebar_label:"PostgreSQL / PostGraphile"},l={unversionedId:"handlers/postgraphile",id:"handlers/postgraphile",isDocsHomePage:!1,title:"PostgreSQL / PostGraphile",description:"image",source:"@site/docs/handlers/postgraphile.md",sourceDirName:"handlers",slug:"/handlers/postgraphile",permalink:"/docs/handlers/postgraphile",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/postgraphile.md",version:"current",sidebar_label:"PostgreSQL / PostGraphile",frontMatter:{id:"postgraphile",title:"PostgreSQL / PostGraphile",sidebar_label:"PostgreSQL / PostGraphile"},sidebar:"sidebar",previous:{title:"JSON Schema",permalink:"/docs/handlers/json-schema"},next:{title:"SOAP",permalink:"/docs/handlers/soap"}},p=[{value:"External Plugins (e.g. Federation)",id:"external-plugins-eg-federation",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79219670-5ae06300-7e5b-11ea-81f1-d0c08a884607.png",alt:"image"})),(0,i.kt)("p",null,"This handler allows you to use GraphQL schema created by ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphile.org/postgraphile/"},"PostGraphile"),", based on a PostgreSQL database schema."),(0,i.kt)("p",null,"To get started, install the handler library from NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/postgraphile\n")),(0,i.kt)("p",null,"Now, you can use it directly in your Mesh config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyDb\n    handler:\n      postgraphile:\n        connectionString: postgres://postgres:password@localhost/postgres\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can check out our example that uses schema stitching with a PostgreSQL datasource.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"},"Click here to open the example on GitHub"))),(0,i.kt)("h3",{id:"external-plugins-eg-federation"},"External Plugins (e.g. Federation)"),(0,i.kt)("p",null,"You can add PostGraphile plugins such as FederationPlugin and ConnectionFilterPlugin. You can install it using npm or yarn like below;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @graphile/federation\n")),(0,i.kt)("p",null,"and add those in your configuration file;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'sources:\n  - name: MyDb\n    handler:\n      postgraphile:\n        connectionString: postgres://postgres:password@localhost/postgres\n        plugins:\n          - "@graphile/federation"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"FederationPlugin")," only if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"federation")," as merger as in ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/federation"},"Federation Recipe"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.graphile.org/postgraphile/extending/"},"Learn more about PostGraphile plugins")),(0,i.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.kt)("p",null,(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionString")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - A connection string to your Postgres database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaName")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),", required) - An array of strings which specifies the PostgreSQL schemas that PostGraphile will use to create a GraphQL schema. The default schema is the public schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pool")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Any"),") - Connection Pool instance or settings or you can provide the path of a code file that exports any of those"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appendPlugins")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),") - Extra Postgraphile Plugins to append"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skipPlugins")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),') - Postgraphile Plugins to skip (e.g. "graphile-build#NodePlugin")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),' -  - Extra Postgraphile options that will be added to the postgraphile constructor. It can either be an object or a string pointing to the object\'s path (e.g. "./my-config#options"). See the ',(0,i.kt)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/usage-library/"},"postgraphile docs")," for more information. One of: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JSON")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscriptions")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enable GraphQL websocket transport support for subscriptions (default: true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"live")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enables live-query support via GraphQL subscriptions (sends updated payload any time nested collections/records change) (default: true)"))))}c.isMDXComponent=!0}}]);