(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[7836],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9194:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i={id:"graphql",title:"GraphQL",sidebar_label:"GraphQL"},l={unversionedId:"handlers/graphql",id:"handlers/graphql",isDocsHomePage:!1,title:"GraphQL",description:"image",source:"@site/docs/handlers/graphql.md",sourceDirName:"handlers",slug:"/handlers/graphql",permalink:"/docs/handlers/graphql",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/graphql.md",version:"current",sidebar_label:"GraphQL",frontMatter:{id:"graphql",title:"GraphQL",sidebar_label:"GraphQL"},sidebar:"sidebar",previous:{title:"Available Handlers",permalink:"/docs/handlers/available-handlers"},next:{title:"OpenAPI / Swagger",permalink:"/docs/handlers/openapi"}},p=[{value:"Dynamic Header Values (e.g. for Authorization)",id:"dynamic-header-values-eg-for-authorization",children:[{value:"From Context (HTTP Header for <code>mesh serve</code>)",id:"from-context-http-header-for-mesh-serve",children:[]},{value:"From Environmental Variable",id:"from-environmental-variable",children:[]}]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79219047-333ccb00-7e5a-11ea-9fce-57ff137ba924.png",alt:"image"})),(0,o.kt)("p",null,"This handler allows you to load remote GraphQL schemas and use it with schema-stitching, based on ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tools"),"."),(0,o.kt)("p",null,"To get started, install the handler library from NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/graphql\n")),(0,o.kt)("p",null,"Now, you can use it directly in your Mesh config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGraphQLApi\n    handler:\n      graphql:\n        endpoint: http://my-service-url:3000/graphql\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can check out our example that uses schema stitching with a PostgreSQL datasource.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"},"Click here to open the example on GitHub"))),(0,o.kt)("h2",{id:"dynamic-header-values-eg-for-authorization"},"Dynamic Header Values (e.g. for Authorization)"),(0,o.kt)("p",null,"Mesh can take dynamic values from the GraphQL Context or the environmental variables. If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"mesh serve"),", GraphQL Context will be the incoming HTTP request."),(0,o.kt)("p",null,"The expression inside dynamic values should be as in JS."),(0,o.kt)("h3",{id:"from-context-http-header-for-mesh-serve"},"From Context (HTTP Header for ",(0,o.kt)("inlineCode",{parentName:"h3"},"mesh serve"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGraphQLApi\n    handler:\n      graphql:\n        endpoint: http://my-service-url:3000/graphql\n        operationHeaders:\n          # Please do not use capital letters while getting the headers\n          Authorization: Bearer {context.headers['x-my-api-token']}\n          # You can also access to the cookies like below;\n          # Authorization: Bearer {context.cookies.myApiToken} \n")),(0,o.kt)("p",null,"And for ",(0,o.kt)("inlineCode",{parentName:"p"},"mesh serve"),", you can pass the value using ",(0,o.kt)("inlineCode",{parentName:"p"},"x-my-graphql-api-token")," HTTP header."),(0,o.kt)("h3",{id:"from-environmental-variable"},"From Environmental Variable"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MY_API_TOKEN")," is the name of the environmental variable you have the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGraphQLApi\n    handler:\n      graphql:\n        endpoint: http://my-service-url:3000/graphql\n        operationHeaders:\n          Authorization: Bearer ${MY_API_TOKEN}\n")),(0,o.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,o.kt)("p",null,(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),", required) - A url or file path to your remote GraphQL endpoint.\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),") - JSON object representing the Headers to add to the runtime of the API calls only for schema introspection\nYou can also provide ",(0,o.kt)("inlineCode",{parentName:"li"},".js")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," file path that exports schemaHeaders as an object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useGETForQueries")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use HTTP GET for Query operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String (GET | POST)"),") - HTTP method used for GraphQL operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSSEForSubscription")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use Server Sent Events instead of WebSocket for Subscriptions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customFetch")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),") - Path to a custom W3 Compatible Fetch Implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webSocketImpl")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Path to a custom W3 Compatible WebSocket Implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useWebSocketLegacyProtocol")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use legacy web socket protocol ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-ws")," instead of the more current standard ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-transport-ws")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"introspection")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Path to the introspection\nYou can seperately give schema introspection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"multipart")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Enable multipart/formdata in order to support file uploads"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batch")," (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Batch requests"))))}c.isMDXComponent=!0}}]);