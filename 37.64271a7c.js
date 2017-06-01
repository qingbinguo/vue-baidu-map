webpackJsonp([37],{"8TF/":function(t,e,a){t.exports=a("JBWm")},JBWm:function(t,e,a){var s=a("VU/8")(null,a("Q0Wj"),null,null);t.exports=s.exports},Q0Wj:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[[a("h1",[t._v("Transit Search")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),a("h3",[t._v("Search transit policy on the map")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-transit",{attrs:{start:"百度大厦",end:"北京邮电大学西门","auto-viewport":!0,location:"北京"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",[t._v("BmTransit")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, None")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Search area. The type can be empty, coordinate point or city name.")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("policy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TransitPolicy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Policy parameters for transit.")])]),t._v(" "),a("tr",[a("td",[t._v("panel")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("Whether to show the result panel.")])]),t._v(" "),a("tr",[a("td",[t._v("pageCapacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Set the capacity per page.")])]),t._v(" "),a("tr",[a("td",[t._v("autoViewport")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Whether to adjust the viewport after search.")])]),t._v(" "),a("tr",[a("td",[t._v("selectFirstResult")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Whether to select the first search result.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("markersset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{pois: Array}")]),t._v(" "),a("td",[t._v("Triggers when markers are set.")])]),t._v(" "),a("tr",[a("td",[t._v("infohtmlset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{poi: LocalResultPoi}")]),t._v(" "),a("td",[t._v("Triggers when info windows are set.")])]),t._v(" "),a("tr",[a("td",[t._v("resultshtmlset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{container: HTMLElement}")]),t._v(" "),a("td",[t._v("Triggers when the result panel is set.")])]),t._v(" "),a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{results: [LocalResult]}")]),t._v(" "),a("td",[t._v("Triggers when the search is completed.")])]),t._v(" "),a("tr",[a("td",[t._v("polylinesset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{routes: Array, routes: Array}")]),t._v(" "),a("td",[t._v("Triggers when the polyline is set.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-transit")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"百度大厦"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京邮电大学西门"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-transit")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}}});