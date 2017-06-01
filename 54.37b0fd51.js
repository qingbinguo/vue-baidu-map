webpackJsonp([54],{Es1u:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[[s("h1",[t._v("Driving Route Search")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Examples")]),t._v(" "),s("h3",[t._v("Search driving route planning on the map")]),t._v(" "),s("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),s("h4",[t._v("Preview")]),t._v(" "),s("doc-preview",[s("baidu-map",[s("bm-view",{staticClass:"map"}),t._v(" "),s("bm-driving",{attrs:{start:"新街口",end:"新街口",startCity:"北京",endCity:"南京","auto-viewport":!0,location:"北京",waypoints:["昭君墓","陕西兵马俑"]}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("BmDriving")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("location")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, None")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("Search area. The type can be empty, coordinate point or city name.")])]),t._v(" "),s("tr",[s("td",[t._v("start")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),s("tr",[s("td",[t._v("end")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),s("tr",[s("td",[t._v("startCity")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("The starting city, can be city name or city code.")])]),t._v(" "),s("tr",[s("td",[t._v("endCity")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("The end city can be city name or city code.")])]),t._v(" "),s("tr",[s("td",[t._v("waypoints")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("The set of the through points. Support up to 10 points or names.")])]),t._v(" "),s("tr",[s("td",[t._v("policy")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("TransitPolicy")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("Policy parameters for driving route.")])]),t._v(" "),s("tr",[s("td",[t._v("panel")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",[t._v("Whether to show the result panel.")])]),t._v(" "),s("tr",[s("td",[t._v("autoViewport")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("Whether to adjust the viewport after search.")])]),t._v(" "),s("tr",[s("td",[t._v("selectFirstResult")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("Whether to select the first search result.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("markersset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{pois: Array}")]),t._v(" "),s("td",[t._v("Triggers when markers are set.")])]),t._v(" "),s("tr",[s("td",[t._v("infohtmlset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{poi: LocalResultPoi}")]),t._v(" "),s("td",[t._v("Triggers when info windows are set.")])]),t._v(" "),s("tr",[s("td",[t._v("resultshtmlset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{container: HTMLElement}")]),t._v(" "),s("td",[t._v("Triggers when the result panel is set.")])]),t._v(" "),s("tr",[s("td",[t._v("searchcomplete")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{results: [LocalResult]}")]),t._v(" "),s("td",[t._v("Triggers when the search is completed.")])]),t._v(" "),s("tr",[s("td",[t._v("polylinesset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{routes: Array, routes: Array}")]),t._v(" "),s("td",[t._v("Triggers when the polyline is set.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v("startCity")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v("endCity")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"南京"')]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n    "),s("span",{staticClass:"hljs-attr"},[t._v(":waypoints")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"['昭君墓', '陕西兵马俑']\"")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},"L4/q":function(t,e,s){t.exports=s("Seeq")},Seeq:function(t,e,s){var a=s("VU/8")(null,s("Es1u"),null,null);t.exports=a.exports}});