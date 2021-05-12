(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[3765],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=i,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||r;return n?a.createElement(N,l(l({ref:t},d),{},{components:n})):a.createElement(N,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5117:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(9603),i=n(120),r=(n(7378),n(5318)),l={},o={unversionedId:"generated-markdown/ServeConfig.generated",id:"generated-markdown/ServeConfig.generated",isDocsHomePage:!1,title:"ServeConfig.generated",description:"* fork -  - Spawn multiple server instances as node clusters (default",source:"@site/docs/generated-markdown/ServeConfig.generated.md",sourceDirName:"generated-markdown",slug:"/generated-markdown/ServeConfig.generated",permalink:"/docs/generated-markdown/ServeConfig.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/ServeConfig.generated.md",version:"current",frontMatter:{}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fork")," -  - Spawn multiple server instances as node clusters (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," -  - TCP Port to listen (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3000"),") One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hostname")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - The binding hostname (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exampleQuery")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Provide an example query or queries for GraphQL Playground\nThe value can be the file path, glob expression for the file paths or the SDL.\n(.js, .jsx, .graphql, .gql, .ts and .tsx files are supported.\nBut TypeScript support is only available if ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-node")," is installed and ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-node/register")," is added under ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," parameter)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cors")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - Configuration for CORS: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Any"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowedHeaders")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array of String"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exposedHeaders")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array of String"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxAge")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preflightContinue")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"optionsSuccessStatus")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handlers")," -  - Express/Connect compatible handlers and middlewares extend GraphQL Mesh HTTP Server Array of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path that remote API will ping"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pubsubTopic")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Name of the topic you want to pass incoming payload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Part of the object you want to pass (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"data.messages"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path that the handler will control"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handler")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path of the handler's code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String (GET | POST | DELETE | PATCH)"),") - HTTP Method that the handler will control"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"staticFiles")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Path to your static files you want to be served with GraphQL Mesh HTTP Server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playground")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Show GraphiQL Playground"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxRequestBodySize")," -  - Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'. One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upload")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - Configuration for GraphQL File Upload: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxFileSize")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),") - Maximum File Size for GraphQL Upload (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"100000000"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxFiles")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Int"),") - Maximum number of files for GraphQL Upload (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslCredentials")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),") - SSL Credentials for HTTPS Server\nIf this is provided, Mesh will be served via HTTPS: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cert")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", required)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),") - Path to GraphQL Endpoint (default: /graphql)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser")," -  - Path to the browser that will be used by ",(0,r.kt)("inlineCode",{parentName:"li"},"mesh serve")," to open a playground window in development mode\nThis feature can be disable by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," One of: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"))))))}d.isMDXComponent=!0}}]);