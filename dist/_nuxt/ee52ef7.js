(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,7,8],{281:function(e,t,n){e.exports=n.p+"img/sol-nascendo-png-6.ebcf783.png"},282:function(e,t,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(135).default)("9e8073a2",content,!0,{sourceMap:!1})},283:function(e,t,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(135).default)("1a4fabde",content,!0,{sourceMap:!1})},284:function(e,t,n){e.exports=n.p+"img/vue.e00c12e.png"},285:function(e,t,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(135).default)("bfd2ac76",content,!0,{sourceMap:!1})},314:function(e,t,n){"use strict";n(282)},315:function(e,t,n){var o=n(134)(!1);o.push([e.i,".img_section[data-v-2b075979]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000;overflow:hidden;z-index:100}.fullScreenImg[data-v-2b075979]{overflow:hidden;width:100%;height:100%}.fullScreenImg>img[data-v-2b075979]{-o-object-fit:contain;object-fit:contain}",""]),e.exports=o},316:function(e,t,n){"use strict";n(283)},317:function(e,t,n){var o=n(134)(!1);o.push([e.i,".longPressText[data-v-71c93fe1]{color:green}.removeSelect[data-v-71c93fe1]{user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}",""]),e.exports=o},318:function(e,t,n){e.exports=n.p+"img/png-transparent-cartoon-cute-puppy-cartoon-lovely-puppy.5f3e95f.png"},319:function(e,t,n){"use strict";n(285)},320:function(e,t,n){var o=n(134)(!1);o.push([e.i,".img_section[data-v-21c398a6]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000}.fullScreenImg[data-v-21c398a6]{-webkit-overflow-scrolling:touch;overflow-x:auto;display:flex;scroll-snap-type:x mandatory;width:100%;height:100%}.fullScreenImg>.imageContainer[data-v-21c398a6]{scroll-snap-align:start;scroll-snap-stop:always;flex-shrink:0;width:100vw}.imageContainer>img[data-v-21c398a6]{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}",""]),e.exports=o},328:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e._self._c;return t("p",[e._v("點擊下圖進入全螢幕，並可進行"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("分享")]),e._v("或"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("下載")])])},function(){var e=this._self._c;return e("div",{staticClass:"fullScreenImg"},[e("img",{staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)",width:"100%",height:"100%"},attrs:{src:n(281)}})])}],r=n(12),c=(n(64),n(79),n(15),n(38),n(27),n(194),n(195),n(286),n(287),n(288),n(289),n(290),n(291),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(31),n(33),n(312),n(196),n(313)),l=n.n(c),d=window.innerHeight/100,m=window.innerWidth/100;function f(e,t){document.documentElement.style.setProperty("--vh",e+"px"),document.documentElement.style.setProperty("--vw",t+"px")}window.addEventListener("resize",(function(){var e=window.innerHeight/100,t=window.innerWidth/100;f(e,t)})),f(d,m);var h={data:function(){return{isShowImg:!1,isShowMenu:!1,shareData:{url:"https://pjchender.blogspot.com",title:"分享DOM的圖片",text:"需要下載html2canvas這個套件"}}},watch:{isShowImg:function(e){e&&this.$nextTick((function(){document.body.style.position="fixed",document.body.style.top="-".concat(window.scrollY,"px")})),e||this.$nextTick((function(){var e=document.body.style.top;document.body.style.position="",document.body.style.top="",setTimeout((function(){window.scrollTo(0,-1*parseInt(e||"0"))}),200)}))}},methods:{shareContent:function(){navigator.share?this.handleNavigatorShare():alert("瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器")},handleNavigatorShare:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var image,n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,image=document.querySelector("#img"),t.next=4,l()(image);case 4:return n=t.sent,o=n.toDataURL(),t.next=8,fetch(o);case 8:return t.next=10,t.sent.blob();case 10:return r=t.sent,c=[new File([r],"animation.png",{type:r.type,lastModified:(new Date).getTime()})],e.shareData.files=c,t.next=15,navigator.share(e.shareData);case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("err",t.t0):console.log("發生錯誤",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},dataURLtoFile:function(e,t){for(var n=e.split(","),o=n[0].match(/:(.*?);/)[1],r=atob(n[1]),c=r.length,l=new Uint8Array(c);c--;)l[c]=r.charCodeAt(c);return new File([l],t,{type:o})},downloadImage:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,image,n,o,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#img").src,e.next=3,fetch(t);case 3:return image=e.sent,e.next=6,image.blob();case 6:n=e.sent,o=URL.createObjectURL(n),(link=document.createElement("a")).href=o,link.download="下載的檔案",document.body.appendChild(link),link.click(),document.body.removeChild(link);case 14:case"end":return e.stop()}}),e)})))()},clickImageBackground:function(e){"openOtion"!==e.target.id&&(this.isShowMenu=!1)},dataURItoBlob:function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],o=new Uint8Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([o],{type:n})},toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.target.requestFullscreen?e.target.requestFullscreen():e.target.msRequestFullscreen?e.target.msRequestFullscreen():e.target.mozRequestFullScreen?e.target.mozRequestFullScreen():e.target.webkitRequestFullscreen&&e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},v=(n(314),n(47)),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("圖片全螢幕")]),e._v(" "),e._m(0),e._v(" "),t("div",{staticStyle:{width:"100vw"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:n(281),id:"img"},on:{click:function(t){e.isShowImg=!0}}})]),e._v(" "),e.isShowImg?t("div",{staticClass:"img_section",on:{click:function(t){return e.clickImageBackground(t)}}},[e._m(1),e._v(" "),e.isShowImg?t("div",{staticStyle:{position:"fixed",left:"16px",top:"16px",color:"white"},on:{click:function(t){e.isShowImg=!1}}},[e._v("X")]):e._e(),e._v(" "),e.isShowImg?t("div",{staticStyle:{"z-index":"2",position:"fixed",right:"16px",top:"16px",transform:"rotate(90deg) scale(1.5)",color:"white"},attrs:{id:"openOtion"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v("...")]):e._e(),e._v(" "),e.isShowMenu?t("div",{staticStyle:{position:"fixed",right:"40px",top:"32px",padding:"8px",width:"60px","background-color":"white","box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"}},[t("div",{staticStyle:{"text-align":"center",margin:"0 -8px 8px -8px"},on:{click:e.shareContent}},[e._v("分享")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"},on:{click:e.downloadImage}},[e._v("下載")])]):e._e()]):e._e()])}),o,!1,null,"2b075979",null);t.default=component.exports},329:function(e,t,n){"use strict";n.r(t);var o=n(12),r=(n(64),{methods:{handleAndroidShare:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("files").files,console.log("files????",t[0]),0!==t.length){e.next=5;break}return output.textContent="No files selected.",e.abrupt("return");case 5:if(navigator.canShare){e.next=8;break}return output.textContent="Your browser doesn't support the Web Share API.",e.abrupt("return");case 8:if(!navigator.canShare({files:t})){e.next=20;break}return e.prev=9,e.next=12,navigator.share({files:t,title:"Images",text:"Beautiful images"});case 12:output.textContent="Shared!",e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),output.textContent="Error: ".concat(e.t0.message);case 18:e.next=21;break;case 20:output.textContent="Your system doesn't support sharing these files.";case 21:case"end":return e.stop()}}),e,null,[[9,15]])})))()}}}),c=n(47),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("各種檔案分享")]),e._v(" "),e._m(0),e._v(" "),t("button",{attrs:{id:"share",type:"button"},on:{click:e.handleAndroidShare}},[e._v("Share your images!")]),e._v(" "),t("output",{attrs:{id:"output"}})])}),[function(){var e=this,t=e._self._c;return t("div",[t("label",{attrs:{for:"files"}},[e._v("Select images to share:")]),e._v(" "),t("input",{attrs:{id:"files",type:"file"}})])}],!1,null,null,null);t.default=component.exports},330:function(e,t,n){"use strict";n.r(t);n(79);var o={data:function(){return{longPressTimer:null,isLongPress:!1}},methods:{nowPointerPress:function(){var e=this;this.longPressTimer=setTimeout((function(){e.isLongPress=!0}),1200)},nowPointerUp:function(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},r=(n(316),n(47)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("長壓按鈕")]),e._v(" "),t("button",{staticClass:"removeSelect",on:{pointerdown:e.nowPointerPress,pointerup:e.nowPointerUp}},[e._v("可測試長壓按鈕")]),e._v(" "),t("div",[t("p",{class:{longPressText:e.isLongPress}},[e._v(e._s(e.isLongPress?"偵測到長壓按鈕":"長壓上面按鈕，變更文字"))]),e._v(" "),t("button",{attrs:{tabindex:"-1"},on:{click:function(t){e.isLongPress=!1}}},[e._v("清除")])])])}),[],!1,null,"71c93fe1",null);t.default=component.exports},331:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"fullScreenImg",attrs:{id:"imgViewer"}},[t("div",{staticClass:"imageContainer"},[t("img",{staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"},attrs:{src:n(284),id:"image1"}})]),e._v(" "),t("div",{staticClass:"imageContainer"},[t("img",{staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"},attrs:{src:n(281),id:"image2"}})]),e._v(" "),t("div",{staticClass:"imageContainer"},[t("img",{staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"},attrs:{src:n(318),id:"image3"}})])])}],r=n(12),c=(n(64),n(79),n(15),n(38),n(27),n(194),n(195),n(286),n(287),n(288),n(289),n(290),n(291),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(31),n(33),n(312),n(196),n(313)),l=n.n(c),d={data:function(){return{isShowImg:!1,isShowMenu:!1,shareData:{url:"https://pjchender.blogspot.com",title:"分享DOM的圖片",text:"需要下載html2canvas這個套件"}}},watch:{isShowImg:function(e){e&&this.$nextTick((function(){document.body.style.position="fixed",document.body.style.top="-".concat(window.scrollY,"px")})),e||this.$nextTick((function(){var e=document.body.style.top;document.body.style.position="",document.body.style.top="",setTimeout((function(){window.scrollTo(0,-1*parseInt(e||"0"))}),200)}))}},methods:{shareContent:function(){navigator.share?this.handleNavigatorShare():alert("瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器")},handleNavigatorShare:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,image,o,r,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Math.floor(document.querySelector("#imgViewer").scrollLeft/window.innerWidth),image=document.getElementById("image".concat(n+1)),t.next=5,l()(image);case 5:return o=t.sent,r=o.toDataURL(),t.next=9,fetch(r);case 9:return t.next=11,t.sent.blob();case 11:return c=t.sent,d=[new File([c],"image.png",{type:c.type,lastModified:(new Date).getTime()})],e.shareData.files=d,t.next=16,navigator.share(e.shareData);case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("err",t.t0):console.log("發生錯誤",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))()},dataURLtoFile:function(e,t){for(var n=e.split(","),o=n[0].match(/:(.*?);/)[1],r=atob(n[1]),c=r.length,l=new Uint8Array(c);c--;)l[c]=r.charCodeAt(c);return new File([l],t,{type:o})},downloadImage:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,image,o,r,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(document.querySelector("#imgViewer").scrollLeft/window.innerWidth),n=document.getElementById("image".concat(t+1)).src,e.next=4,fetch(n);case 4:return image=e.sent,e.next=7,image.blob();case 7:o=e.sent,r=URL.createObjectURL(o),(link=document.createElement("a")).href=r,link.download="下載的檔案",document.body.appendChild(link),link.click(),document.body.removeChild(link);case 15:case"end":return e.stop()}}),e)})))()},clickImageBackground:function(e){"openOtion"!==e.target.id&&(this.isShowMenu=!1)}}},m=(n(319),n(47)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("多圖片相簿")]),e._v(" "),t("p",[e._v("點擊下圖進入全螢幕，左右滑動切換圖片")]),e._v(" "),t("div",{staticStyle:{width:"100vw"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:n(284),id:"img"},on:{click:function(t){e.isShowImg=!0}}})]),e._v(" "),e.isShowImg?t("div",{staticClass:"img_section",on:{click:function(t){return e.clickImageBackground(t)}}},[e._m(0),e._v(" "),e.isShowImg?t("div",{staticStyle:{position:"fixed",left:"16px",top:"16px",color:"white"},on:{click:function(t){e.isShowImg=!1}}},[e._v("X")]):e._e(),e._v(" "),e.isShowImg?t("div",{staticStyle:{"z-index":"2",position:"fixed",right:"16px",top:"16px",transform:"rotate(90deg) scale(1.5)",color:"white"},attrs:{id:"openOtion"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v("...")]):e._e(),e._v(" "),e.isShowMenu?t("div",{staticStyle:{position:"fixed",right:"40px",top:"32px",padding:"8px",width:"60px","background-color":"white","box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"}},[t("div",{staticStyle:{"text-align":"center",margin:"0 -8px 8px -8px"},on:{click:e.shareContent}},[e._v("分享")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"},on:{click:e.downloadImage}},[e._v("下載")])]):e._e()]):e._e(),e._v("；\n")])}),o,!1,null,"21c398a6",null);t.default=component.exports},353:function(e,t,n){"use strict";n.r(t);var o={name:"IndexPage"},r=n(47),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("FullScreenView"),e._v(" "),t("AndroidTest"),e._v(" "),t("CopyText"),e._v(" "),t("LongPress"),e._v(" "),t("MutiImageView")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FullScreenView:n(328).default,AndroidTest:n(329).default,CopyText:n(352).default,LongPress:n(330).default,MutiImageView:n(331).default})}}]);