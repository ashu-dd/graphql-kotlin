(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,h=p["".concat(d,".").concat(u)]||p[u]||b[u]||a;return n?r.a.createElement(h,l(l({ref:t},o),{},{components:n})):r.a.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var o=2;o<a;o++)d[o]=n[o];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(182)),d={id:"federated-directives",title:"Federated Directives"},l={unversionedId:"schema-generator/federation/federated-directives",id:"schema-generator/federation/federated-directives",isDocsHomePage:!1,title:"Federated Directives",description:"graphql-kotlin supports a number of directives that can be used to annotate a schema and direct certain behaviors.",source:"@site/docs/schema-generator/federation/federated-directives.md",slug:"/schema-generator/federation/federated-directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federated-directives.md",version:"current",lastUpdatedBy:"Koen Punt",lastUpdatedAt:1621606345,sidebar:"docs",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"}},c=[{value:"<code>@extends</code> directive",id:"extends-directive",children:[]},{value:"<code>@external</code> directive",id:"external-directive",children:[]},{value:"<code>@key</code> directive",id:"key-directive",children:[]},{value:"<code>@provides</code> directive",id:"provides-directive",children:[]},{value:"<code>@requires</code> directive",id:"requires-directive",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," supports a number of directives that can be used to annotate a schema and direct certain behaviors."),Object(a.b)("p",null,"For more details, see the ",Object(a.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation Specification"),"."),Object(a.b)("h2",{id:"extends-directive"},Object(a.b)("inlineCode",{parentName:"h2"},"@extends")," directive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"directive @extends on OBJECT | INTERFACE\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@extends")," directive is used to represent type extensions in the schema. Native type extensions are currently\nunsupported by the ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," libraries. Federated extended types should have corresponding ",Object(a.b)("inlineCode",{parentName:"p"},"@key")," directive\ndefined that specifies primary key required to fetch the underlying object."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n   fun newFunctionality(): String = "whatever"\n}\n')),Object(a.b)("p",null,"will generate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),Object(a.b)("h2",{id:"external-directive"},Object(a.b)("inlineCode",{parentName:"h2"},"@external")," directive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"directive @external on FIELD_DEFINITION\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@external")," directive is used to mark a field as owned by another service. This allows service A to use fields from\nservice B while also knowing at runtime the types of that field. ",Object(a.b)("inlineCode",{parentName:"p"},"@external")," directive is only applicable on federated\nextended types. All the external fields should either be referenced from the ",Object(a.b)("inlineCode",{parentName:"p"},"@key"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@requires")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@provides"),"\ndirectives field sets."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newFunctionality(): String = "whatever"\n}\n')),Object(a.b)("p",null,"will generate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),Object(a.b)("h2",{id:"key-directive"},Object(a.b)("inlineCode",{parentName:"h2"},"@key")," directive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@key")," directive is used to indicate a combination of fields that can be used to uniquely identify and fetch an\nobject or interface. The specified field set can represent single field (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},'"id"'),"), multiple fields (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},'"id name"'),") or\nnested selection sets (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},'"id user { name }"'),")."),Object(a.b)("p",null,"Key directives should be specified on the root base type as well as all the corresponding federated (i.e. extended)\ntypes. Key fields specified in the directive field set should correspond to a valid field on the underlying GraphQL\ninterface/object. Federated extended types should also instrument all the referenced key fields with ",Object(a.b)("inlineCode",{parentName:"p"},"@external"),"\ndirective."),Object(a.b)("p",null,">"," NOTE: The Federation spec specifies that multiple @key directives can be applied on the field. The GraphQL spec has been recently changed to allow this behavior,\n",">"," but we are currently blocked and are tracking progress in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/590"},"this issue"),"."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\nclass Product(val id: String, val name: String)\n')),Object(a.b)("p",null,"will generate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n  id: String!\n  name: String!\n}\n')),Object(a.b)("h2",{id:"provides-directive"},Object(a.b)("inlineCode",{parentName:"h2"},"@provides")," directive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@provides")," directive is used to annotate the expected returned field set from a field on a base type that is\nguaranteed to be selectable by the gateway. This allows you to expose only a subset of fields from the underlying\nfederated object type to be selectable from the federated schema. Provided fields specified in the directive field set\nshould correspond to a valid field on the underlying GraphQL interface/object type. ",Object(a.b)("inlineCode",{parentName:"p"},"@provides")," directive can only be\nused on fields returning federated extended objects."),Object(a.b)("p",null,"Example:\nWe might want to expose only name of the user that submitted a review."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\nclass Review(val id: String) {\n  @ProvidesDirective(FieldSet("name"))\n  fun user(): User = getUserByReviewId(id)\n}\n\n@KeyDirective(FieldSet("userId"))\n@ExtendsDirective\nclass User(\n  @ExternalDirective val userId: String,\n  @ExternalDirective val name: String\n)\n')),Object(a.b)("p",null,"will generate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'type Review @key(fields : "id") {\n  id: String!\n  user: User! @provides(fields : "name")\n}\n\ntype User @key(fields : "userId") @extends {\n  userId: String! @external\n  name: String! @external\n}\n')),Object(a.b)("h2",{id:"requires-directive"},Object(a.b)("inlineCode",{parentName:"h2"},"@requires")," directive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"directive @requires(fields: _FieldSet!) on FIELD_DEFINITON\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@requires")," directive is used to annotate the required input field set from a base type for a resolver. It is used\nto develop a query plan where the required fields may not be needed by the client, but the service may need additional\ninformation from other services. Required fields specified in the directive field set should correspond to a valid field\non the underlying GraphQL interface/object and should be instrumented with ",Object(a.b)("inlineCode",{parentName:"p"},"@external")," directive. Since ",Object(a.b)("inlineCode",{parentName:"p"},"@requires"),"\ndirective specifies additional fields (besides the one specified in ",Object(a.b)("inlineCode",{parentName:"p"},"@key")," directive) that are required to resolve\nfederated type fields, this directive can only be specified on federated extended objects fields."),Object(a.b)("p",null,"NOTE: fields specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"@requires")," directive will only be specified in the queries that reference those fields.\nThis is problematic for Kotlin as the non nullable primitive properties have to be initialized when they are declared.\nSimplest workaround for this problem is to initialize the underlying property to some dummy value that will be used if\nit is not specified. This approach might become problematic though as it might be impossible to determine whether fields\nwas initialized with the default value or the invalid/default value was provided by the federated query. Another\npotential workaround is to rely on delegation to initialize the property after the object gets created. This will ensure\nthat exception will be thrown if queries attempt to resolve fields that reference the uninitialized property."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  @ExternalDirective\n  var weight: Double by Delegates.notNull()\n\n  @RequiresDirective(FieldSet("weight"))\n  fun shippingCost(): String { ... }\n\n  fun additionalInfo(): String { ... }\n}\n')),Object(a.b)("p",null,"will generate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends  {\n  additionalInfo: String!\n  id: String! @external\n  shippingCost: String! @requires(fields : "weight")\n  weight: Float! @external\n}\n')))}s.isMDXComponent=!0}}]);