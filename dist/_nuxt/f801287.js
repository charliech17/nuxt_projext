(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(e,n,t){var content=t(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(135).default)("1a4fabde",content,!0,{sourceMap:!1})},287:function(e,n,t){"use strict";t(283)},288:function(e,n,t){var o=t(134)(!1);o.push([e.i,".longPressText[data-v-71c93fe1]{color:green}.removeSelect[data-v-71c93fe1]{user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}",""]),e.exports=o},325:function(e,n,t){"use strict";t.r(n);t(80);var o={data:function(){return{longPressTimer:null,isLongPress:!1}},methods:{nowPointerPress:function(){var e=this;this.longPressTimer=setTimeout((function(){e.isLongPress=!0}),1200)},nowPointerUp:function(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},r=(t(287),t(47)),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("長壓按鈕")]),e._v(" "),n("button",{staticClass:"removeSelect",on:{pointerdown:e.nowPointerPress,pointerup:e.nowPointerUp}},[e._v("可測試長壓按鈕")]),e._v(" "),n("div",[n("p",{class:{longPressText:e.isLongPress}},[e._v(e._s(e.isLongPress?"偵測到長壓按鈕":"長壓上面按鈕，變更文字"))]),e._v(" "),n("button",{attrs:{tabindex:"-1"},on:{click:function(n){e.isLongPress=!1}}},[e._v("清除")])])])}),[],!1,null,"71c93fe1",null);n.default=component.exports}}]);