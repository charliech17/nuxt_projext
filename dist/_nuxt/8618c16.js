(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{286:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(64),{methods:{handleAndroidShare:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=document.getElementById("files").files).length){t.next=4;break}return output.textContent="No files selected.",t.abrupt("return");case 4:if(navigator.canShare){t.next=7;break}return output.textContent="Your browser doesn't support the Web Share API.",t.abrupt("return");case 7:if(!navigator.canShare({files:e})){t.next=19;break}return t.prev=8,t.next=11,navigator.share({files:e,title:"Images",text:"Beautiful images"});case 11:output.textContent="Shared!",t.next=17;break;case 14:t.prev=14,t.t0=t.catch(8),output.textContent="Error: ".concat(t.t0.message);case 17:t.next=20;break;case 19:output.textContent="Your system doesn't support sharing these files.";case 20:case"end":return t.stop()}}),t,null,[[8,14]])})))()}}}),c=r(49),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("button",{attrs:{id:"share",type:"button"},on:{click:function(e){return t.handleAndroidShare()}}},[t._v("Share your images!")]),t._v(" "),e("output",{attrs:{id:"output"}})])}),[function(){var t=this,e=t._self._c;return e("div",[e("label",{attrs:{for:"files"}},[t._v("Select images to share:")]),t._v(" "),e("input",{attrs:{id:"files",type:"file"}})])}],!1,null,null,null);e.default=component.exports}}]);