"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[152],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50616:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation"},s={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"GraphQL Mesh comes in multiple packages, which you should install according to your needs.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/getting-started/installation.md",version:"current",sidebar_label:"Installation",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Basic Usage",permalink:"/docs/getting-started/basic-example"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQL Mesh comes in multiple packages, which you should install according to your needs."),(0,i.kt)("p",null,"To get started with the basics, install the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add graphql @graphql-mesh/cli\n")),(0,i.kt)("p",null,"Then, you need to install a Mesh handler, according to your API needs. You can see the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/handlers/handlers-introduction"},"all available built-in handlers in here"),"."),(0,i.kt)("p",null,"For example, if you wish to use OpenAPI handler, install the handler that matches you needs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add graphql @graphql-mesh/openapi\n")),(0,i.kt)("p",null,"Then, this handler will be available for you to use in your config file."))}p.isMDXComponent=!0}}]);