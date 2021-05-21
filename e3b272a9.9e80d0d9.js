(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),r=(t(0),t(182)),l={id:"optional-undefined-arguments",title:"Optional Undefined Arguments"},o={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"schema-generator/execution/optional-undefined-arguments",isDocsHomePage:!1,title:"Optional Undefined Arguments",description:"In the GraphQL world, input types can be optional which means that the client can either:",source:"@site/docs/schema-generator/execution/optional-undefined-arguments.md",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/optional-undefined-arguments.md",version:"current",lastUpdatedBy:"Koen Punt",lastUpdatedAt:1621606345,sidebar:"docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"}},p=[{value:"Using OptionalInput wrapper",id:"using-optionalinput-wrapper",children:[]},{value:"Using DataFetchingEnvironment",id:"using-datafetchingenvironment",children:[]},{value:"Kotlin Default Values",id:"kotlin-default-values",children:[]}],u={toc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In the GraphQL world, input types can be optional which means that the client can either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Not specify a value at all"),Object(r.b)("li",{parentName:"ul"},"Send null explicitly"),Object(r.b)("li",{parentName:"ul"},"Send a non-null value")),Object(r.b)("p",null,"This is in contrast with the JVM world where objects can either have some specific value or don't have any value (i.e.\nare ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"). As a result, when using default serialization logic it is not possible to distinguish between missing/unspecified\nvalue and explicit ",Object(r.b)("inlineCode",{parentName:"p"},"null")," value."),Object(r.b)("h2",{id:"using-optionalinput-wrapper"},"Using OptionalInput wrapper"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"OptionalInput")," is a convenient sealed class wrapper that provides distinction between undefined, null, and non-null\nvalues. If the argument is not specified in the request it will be represented as a ",Object(r.b)("inlineCode",{parentName:"p"},"OptionalInput.Undefined")," object, otherwise the\nvalue will be wrapped in ",Object(r.b)("inlineCode",{parentName:"p"},"OptionalInput.Defined")," class."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(input: OptionalInput<String>): String = when (input) {\n    is OptionalInput.Undefined -> "input was not specified"\n    is OptionalInput.Defined<String> -> "input value: ${input.value}"\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # input was not specified\n  null: optionalInput(value: null) # input value: null\n  foo: optionalInput(value: "foo") # input value: foo\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Regardless whether the generic type of ",Object(r.b)("inlineCode",{parentName:"p"},"OptionalInput")," is specified as nullable or not it will always result in a nullable\nvalue in ",Object(r.b)("inlineCode",{parentName:"p"},"Defined")," class, i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"OptionalInput<String>")," will appear as nullable ",Object(r.b)("inlineCode",{parentName:"p"},"String")," in the GraphQL schema and in the wrapped value."))),Object(r.b)("h2",{id:"using-datafetchingenvironment"},"Using DataFetchingEnvironment"),Object(r.b)("p",null,"Optional input types can be represented as nullable parameters in Kotlin"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"fun optionalInput(value: String?): String? = value\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'query OptionalInputQuery {\n  undefined: optionalInput # null\n  null: optionalInput(value: null) # null\n  foo: optionalInput(value: "foo") # foo\n}\n')),Object(r.b)("p",null,"By default, if an optional input value is not specified, then the execution engine will set the argument in Kotlin to ",Object(r.b)("inlineCode",{parentName:"p"},"null"),".\nThis means that you can not tell, by just the value alone, whether the request did not contain any argument or the client\nexplicitly passed in ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("p",null,"Instead, you can inspect all passed in arguments using the ",Object(r.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},'fun optionalInput(value: String?, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n')),Object(r.b)("h2",{id:"kotlin-default-values"},"Kotlin Default Values"),Object(r.b)("p",null,"If you don't need logic for when the client specified a value, you can still use ",Object(r.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments"},"Kotlin default values")))}c.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),c=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),b=a,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||r;return t?i.a.createElement(m,o(o({ref:n},u),{},{components:t})):i.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=b;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);