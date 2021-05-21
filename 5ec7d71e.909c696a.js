(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),i=(t(0),t(182)),s={id:"server-subscriptions",title:"Subscriptions"},a={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you.",source:"@site/docs/server/server-subscriptions.md",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",version:"current",lastUpdatedBy:"Koen Punt",lastUpdatedAt:1621606345,sidebar:"docs",previous:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loaders"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"}},c=[],p={toc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"See ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",Object(i.b)("a",{parentName:"li",href:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},"subscriptions"))),Object(i.b)("p",null,"Subscriptions require a more indepth knoweldge of how the specific server library handles protocols and streaming.\nSince we can only support ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher")," from ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java")," in this common library, we can not provide any common logic for subscriptions.\nTherefore you will still need to implement the route and request handling for subscriptions separately if you are not using a provided server implementation."))}l.isMDXComponent=!0},182:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,d=u["".concat(s,".").concat(b)]||u[b]||f[b]||i;return t?o.a.createElement(d,a(a({ref:r},p),{},{components:t})):o.a.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=b;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);