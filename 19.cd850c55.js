webpackJsonp([19],{"7ObE":function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("Context Menu")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Add a context menu on the map")]),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(3),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:s.center,zoom:s.zoom}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:s.gotoBeijing,text:"Go to Beijing"}}),s._v(" "),a("bm-context-menu-item",{attrs:{callback:s.gotoShanghai,text:"Go to Shanghai"}})],1)],1)],1),s._v(" "),s._m(4),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(5),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:s.center,zoom:s.zoom}},[a("bm-marker",{attrs:{position:{lng:116.404,lat:39.915},dragging:!0}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:s.getPosition,text:"Get coordinate"}})],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmContextMenu")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("type")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("Number")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("undefined")]),s._v(" "),a("td",[s._v("Menu width.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("open")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("event{type, target, point, pixel}")]),s._v(" "),a("td",[s._v("Triggers when opening the context menu.")])]),s._v(" "),a("tr",[a("td",[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("event{type, target, point, pixel}")]),s._v(" "),a("td",[s._v("Triggers when closing the context menu.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoBeijing"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Go to Beijing"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoShanghai"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Go to Shanghai"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    gotoBeijing (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      }\n    },\n    gotoShanghai (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("121.473354")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("31.238413")]),s._v("\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[s._v("Add a context menu on the "),a("code",[s._v("BmMarker")]),s._v(" component")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-marker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":dragging")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getPosition"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Get coordinate"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-marker")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    getPosition (e) {\n      alert("),a("span",{staticClass:"hljs-string"},[s._v("`"),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lng}")]),s._v(" / "),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lat}")]),s._v("`")]),s._v(")\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},JmIQ:function(s,t,a){var n,e,l;!function(a,_){e=[s,t],n=_,void 0!==(l="function"==typeof n?n.apply(t,e):n)&&(s.exports=l)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{center:"北京",zoom:15}},methods:{gotoBeijing:function(s){this.center="北京"},gotoShanghai:function(s){this.center="上海"},getPosition:function(s){alert(s.point.lng+" / "+s.point.lat)}}},s.exports=t.default})},TQRr:function(s,t,a){var n=a("VU/8")(a("JmIQ"),a("7ObE"),null,null);s.exports=n.exports},cOvV:function(s,t,a){s.exports=a("TQRr")}});