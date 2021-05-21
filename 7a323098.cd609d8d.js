(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(182)),c={id:"async-models",title:"Async Models"},l={unversionedId:"schema-generator/execution/async-models",id:"schema-generator/execution/async-models",isDocsHomePage:!1,title:"Async Models",description:"By default, graphql-kotlin-schema-generator will resolve all functions synchronously, i.e. it will block the",source:"@site/docs/schema-generator/execution/async-models.md",slug:"/schema-generator/execution/async-models",permalink:"/graphql-kotlin/docs/schema-generator/execution/async-models",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/async-models.md",version:"current",lastUpdatedBy:"Koen Punt",lastUpdatedAt:1621606345,sidebar:"docs",previous:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/fetching-data"},next:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/schema-generator/execution/exceptions"}},i=[{value:"Coroutines",id:"coroutines",children:[]},{value:"CompletableFuture",id:"completablefuture",children:[]},{value:"RxJava/Reactor",id:"rxjavareactor",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will resolve all functions synchronously, i.e. it will block the\nunderlying thread while executing the target function. While you could configure your GraphQL server with execution\nstrategies that execute each query in parallel on some thread pools, instead we highly recommend to utilize asynchronous\nprogramming models."),Object(o.b)("h2",{id:"coroutines"},"Coroutines"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has built-in support for Kotlin coroutines. Provided default\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaDotCom/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expedia/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nwill automatically asynchronously execute suspendable functions and convert the result to ",Object(o.b)("inlineCode",{parentName:"p"},"CompletableFuture")," expected\nby ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java"),"."),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    suspend fun getUser(id: String): User {\n        // Your coroutine logic to get user data\n    }\n}\n")),Object(o.b)("p",null,"will produce the following schema"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  getUser(id: String!): User\n}\n\ntype User {\n  id: String!\n  name: String!\n}\n")),Object(o.b)("h2",{id:"completablefuture"},"CompletableFuture"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," relies on Java ",Object(o.b)("inlineCode",{parentName:"p"},"CompletableFuture")," for asynchronously processing the requests. In order to simplify the\ninterop with ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java"),", ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has a built-in hook which will automatically unwrap a\n",Object(o.b)("inlineCode",{parentName:"p"},"CompletableFuture")," and use the inner class as the return type in the schema."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"data class User(val id: String, val name: String)\n\nclass Query {\n    fun getUser(id: String): CompletableFuture<User> {\n        // Your logic to get data asynchronously\n    }\n}\n")),Object(o.b)("p",null,"will result in the exactly the same schema as in the coroutine example above."),Object(o.b)("h2",{id:"rxjavareactor"},"RxJava/Reactor"),Object(o.b)("p",null,"If you want to use a different monad type, like ",Object(o.b)("inlineCode",{parentName:"p"},"Single")," from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJava"},"RxJava")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Mono")," from\n",Object(o.b)("a",{parentName:"p",href:"https://projectreactor.io/"},"Project Reactor"),", you have to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create custom ",Object(o.b)("inlineCode",{parentName:"li"},"SchemaGeneratorHook")," that implements ",Object(o.b)("inlineCode",{parentName:"li"},"willResolveMonad")," to provide the necessary logic\nto correctly unwrap the monad and return the inner class to generate valid schema")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class MonadHooks : SchemaGeneratorHooks {\n    override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n        Mono::class -> type.arguments.firstOrNull()?.type\n        else -> type\n    } ?: type\n}\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Provide custom data fetcher that will properly process those monad types.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class CustomFunctionDataFetcher(target: Any?, fn: KFunction<*>, objectMapper: ObjectMapper) : FunctionDataFetcher(target, fn, objectMapper) {\n  override fun get(environment: DataFetchingEnvironment): Any? = when (val result = super.get(environment)) {\n    is Mono<*> -> result.toFuture()\n    else -> result\n  }\n}\n\nclass CustomDataFetcherFactoryProvider(\n    private val objectMapper: ObjectMapper\n) : SimpleKotlinDataFetcherFactoryProvider(objectMapper) {\n\n  override fun functionDataFetcherFactory(target: Any?, kFunction: KFunction<*>): DataFetcherFactory<Any> = DataFetcherFactory<Any> {\n    CustomFunctionDataFetcher(\n      target = target,\n      fn = kFunction,\n      objectMapper = objectMapper)\n  }\n}\n")),Object(o.b)("p",null,"With the above you can then create your schema as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'class ReactorQuery {\n    fun asynchronouslyDo(): Mono<Int> = Mono.just(1)\n}\n\nval configWithReactorMonoMonad = SchemaGeneratorConfig(\n  supportedPackages = listOf("myPackage"),\n  hooks = MonadHooks(),\n  dataFetcherFactoryProvider = CustomDataFetcherFactoryProvider())\n\ntoSchema(queries = listOf(TopLevelObject(ReactorQuery())), config = configWithReactorMonoMonad)\n')),Object(o.b)("p",null,"This will produce"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  asynchronouslyDo: Int\n}\n")),Object(o.b)("p",null,"You can find additional example on how to configure the hooks in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/test/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorAsyncTests.kt"},"unit\ntests"),"\nand ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/AsyncQuery.kt"},"example app"),"."))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);