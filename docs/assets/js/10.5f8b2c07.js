(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interop-cats-monix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interop-cats-monix"}},[t._v("#")]),t._v(" Interop (Cats, Monix)")]),t._v(" "),s("p",[t._v("If you prefer using "),s("a",{attrs:{href:"https://github.com/typelevel/cats-effect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cats Effect"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://github.com/monix/monix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monix"),s("OutboundLink")],1),t._v(" rather than ZIO, you can use the respective "),s("code",[t._v("caliban-cats")]),t._v(" and "),s("code",[t._v("caliban-monix")]),t._v(" modules.")]),t._v(" "),s("h2",{attrs:{id:"cats-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cats-effect"}},[t._v("#")]),t._v(" Cats Effect")]),t._v(" "),s("p",[t._v("You first need to import "),s("code",[t._v("caliban.interop.cats.implicits._")]),t._v(" and have an implicit "),s("code",[t._v("zio.Runtime")]),t._v(" in scope. Then a few helpers are available:")]),t._v(" "),s("ul",[s("li",[t._v("the GraphQL object is enriched with "),s("code",[t._v("interpreterAsync")]),t._v(", "),s("code",[t._v("executeAsync")]),t._v(" and "),s("code",[t._v("checkAsync")]),t._v(", variants of "),s("code",[t._v("interpreter")]),t._v(", "),s("code",[t._v("execute")]),t._v(" and "),s("code",[t._v("check")]),t._v(" that return an "),s("code",[t._v("F[_]: Async")]),t._v(" instead of a "),s("code",[t._v("ZIO")]),t._v(".")]),t._v(" "),s("li",[t._v("the "),s("code",[t._v("Http4sAdapter")]),t._v(" also has cats-effect variants named "),s("code",[t._v("makeRestServiceF")]),t._v(" and "),s("code",[t._v("makeWebSocketServiceF")]),t._v(".")])]),t._v(" "),s("p",[t._v("In addition to that, a "),s("code",[t._v("Schema")]),t._v(" for any "),s("code",[t._v("F[_]: Effect")]),t._v(" is provided. That means you can include fields returning Monix Task for Cats IO in your queries, mutations or subscriptions.")]),t._v(" "),s("p",[t._v("The following example shows how to create an interpreter and run a query while only using Cats IO.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GraphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphQL\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RootResolver\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implicits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IOApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultRuntime\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" ExampleCatsInterop "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" IOApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" runtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" DefaultRuntime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" randomNumber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" queries     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RootResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n  {\n    numbers\n    randomNumber\n  }"""')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      interpreter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interpreterAsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      result      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" interpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("executeAsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      _           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Success\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find this example within the "),s("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/blob/master/examples/src/main/scala/caliban/interop/cats/ExampleCatsInterop.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),s("OutboundLink")],1),t._v(" project.")]),t._v(" "),s("h2",{attrs:{id:"monix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monix"}},[t._v("#")]),t._v(" Monix")]),t._v(" "),s("p",[t._v("You first need to import "),s("code",[t._v("caliban.interop.monix.implicits._")]),t._v(" and have an implicit "),s("code",[t._v("zio.Runtime")]),t._v(" in scope. Then a few helpers are available:")]),t._v(" "),s("ul",[s("li",[t._v("the GraphQL object is enriched with "),s("code",[t._v("interpreterAsync")]),t._v(", "),s("code",[t._v("executeAsync")]),t._v(" and "),s("code",[t._v("checkAsync")]),t._v(", variants of "),s("code",[t._v("interpreter")]),t._v(", "),s("code",[t._v("execute")]),t._v(" and "),s("code",[t._v("check")]),t._v(" that return a Monix "),s("code",[t._v("Task")]),t._v(" instead of a "),s("code",[t._v("ZIO")]),t._v(".")])]),t._v(" "),s("p",[t._v("In addition to that, a "),s("code",[t._v("Schema")]),t._v(" for any Monix "),s("code",[t._v("Task")]),t._v(" as well as "),s("code",[t._v("Observable")]),t._v(" is provided.")]),t._v(" "),s("p",[t._v("The following example shows how to create an interpreter and run a query while only using Monix Task.")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GraphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphQL\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RootResolver\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implicits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExitCode\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("monix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TaskApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("monix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scheduler\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultRuntime\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" ExampleMonixInterop "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" TaskApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" runtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" DefaultRuntime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" monixScheduler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Scheduler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scheduler\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" randomNumber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" queries     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scala"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RootResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n  {\n    numbers\n    randomNumber\n  }"""')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      interpreter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interpreterAsync\n      result      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" interpreter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("executeAsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      _           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" ExitCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Success\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find this example within the "),s("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/blob/master/examples/src/main/scala/caliban/interop/monix/ExampleMonixInterop.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),s("OutboundLink")],1),t._v(" project.")])])}),[],!1,null,null,null);a.default=e.exports}}]);