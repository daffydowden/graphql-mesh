(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,o({ref:t},p,{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(128)),l={id:"as-gateway",title:"Mesh as Gateway",sidebar_label:"Mesh as Gateway"},o={unversionedId:"recipes/as-gateway",id:"recipes/as-gateway",isDocsHomePage:!1,title:"Mesh as Gateway",description:"You can use GraphQL Mesh as a gateway for your data sources. CLI's serve command creates a GraphQL Endpoint with GraphQL Playground.",source:"@site/docs/recipes/as-gateway.md",permalink:"/docs/recipes/as-gateway",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/as-gateway.md",sidebar_label:"Mesh as Gateway",sidebar:"sidebar",previous:{title:"Mesh as SDK",permalink:"/docs/recipes/as-sdk"},next:{title:"Apollo Federation",permalink:"/docs/recipes/federation"}},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can use GraphQL Mesh as a gateway for your data sources. CLI's ",Object(i.b)("inlineCode",{parentName:"p"},"serve")," command creates a GraphQL Endpoint with GraphQL Playground."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mesh serve\n")),Object(i.b)("p",null,"You can configure ",Object(i.b)("inlineCode",{parentName:"p"},"serve")," command like below in ",Object(i.b)("inlineCode",{parentName:"p"},".meshrc.yml"),";"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"serve: \n    port: 5000\n")),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fork")," -  - Spawn multiple server instances as node clusters (default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),") One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Int")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Boolean")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"port")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),") - TCP Port to listen (default: ",Object(i.b)("inlineCode",{parentName:"li"},"3000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exampleQuery")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Provide an example query or queries for GraphQL Playground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cors")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allowedOrigins")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allowedHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exposedHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"credentials")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maxAge")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preflightContinue")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optionsSuccessStatus")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),")"))))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/as-gateway.png",alt:"GraphQL Mesh"}))))}b.isMDXComponent=!0}}]);