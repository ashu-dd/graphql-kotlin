(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),p=(r(0),r(182)),o={id:"examples",title:"Examples",original_id:"examples"},i={unversionedId:"examples",id:"version-3.x.x/examples",isDocsHomePage:!1,title:"Examples",description:"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the examples module.",source:"@site/versioned_docs/version-3.x.x/examples.md",slug:"/examples",permalink:"/graphql-kotlin/docs/3.x.x/examples",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/examples.md",version:"3.x.x",lastUpdatedBy:"Koen Punt",lastUpdatedAt:1621606345,sidebar:"version-3.x.x/docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/3.x.x/"},next:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"}},l=[{value:"Client Example",id:"client-example",children:[]},{value:"Spring Server Example",id:"spring-server-example",children:[]},{value:"Federation Example",id:"federation-example",children:[]},{value:"Spark Example",id:"spark-example",children:[]}],s={toc:l};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples"},"examples module"),"."),Object(p.b)("h2",{id:"client-example"},"Client Example"),Object(p.b)("p",null,"A ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," can be generated using the Maven and Gradle plugins in ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins"),". For examples see the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"examples/client")," folder."),Object(p.b)("h2",{id:"spring-server-example"},"Spring Server Example"),Object(p.b)("p",null,"One way to run a GraphQL server is with ",Object(p.b)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot"},"Spring Boot"),". A sample Spring\nBoot app that uses ",Object(p.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring\nWebflux")," together with\n",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and ",Object(p.b)("a",{parentName:"p",href:"https://github.com/prisma/graphql-playground"},"graphql-playground")," is provided as\na ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/spring"},"examples/spring"),". All the examples used\nin this documentation should be available in the sample app."),Object(p.b)("p",null,"In order to run it you can run\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/Application.kt"},"Application.kt"),"\ndirectly from your IDE. Alternatively you can also use the Spring Boot plugin from the command line."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n./gradlew bootRun\n\n")),Object(p.b)("p",null,"Once the app has started you can explore the example schema by opening Playground endpoint at\nhttp:."),Object(p.b)("h2",{id:"federation-example"},"Federation Example"),Object(p.b)("p",null,"There is also an example of ",Object(p.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," with two Spring Boot apps using `` and an Apollo Gateway app in Nodejs that exposes a single federated schema in ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"examples/federation"),"\nproject. Please refer to the README files for details on how to run each application."),Object(p.b)("h2",{id:"spark-example"},"Spark Example"),Object(p.b)("p",null,"The spark example provides a demonstration of delivering a GraphQL service via the ",Object(p.b)("a",{parentName:"p",href:"http://sparkjava.com/"},"Spark HTTP framework"),". This example also demonstrates how to include ",Object(p.b)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},"``")," in your query execution. This example can be found at ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/spark"},"examples/spark")))}c.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return r?n.a.createElement(b,i(i({ref:t},s),{},{components:r})):n.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);