(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{281:function(e,t,n){e.exports=n.p+"img/sol-nascendo-png-6.ebcf783.png"},282:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(135).default)("164c9946",content,!0,{sourceMap:!1})},285:function(e,t,n){"use strict";n(282)},286:function(e,t,n){var o=n(134)(!1);o.push([e.i,".img_section[data-v-67ca7c59]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100vw;width:calc(var(--vw,1vw)*100);height:100vh;height:calc(var(--vh,1vh)*100);background-color:#000;overflow:hidden;z-index:100}.fullScreenImg[data-v-67ca7c59]{overflow:hidden;height:100%;width:100%;touch-action:pinch-zoom}.fullScreenImg>img[data-v-67ca7c59]{-o-object-fit:contain;object-fit:contain}",""]),e.exports=o},323:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e._self._c;return t("p",[e._v("點擊下圖進入全螢幕，並可進行"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("分享")]),e._v("或"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("下載")])])},function(){var e=this._self._c;return e("div",{staticClass:"fullScreenImg"},[e("img",{staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)",width:"100%",height:"100%"},attrs:{src:n(281)}})])}],c=n(12),r=(n(64),n(80),n(16),n(41),n(27),n(194),n(195),n(289),n(294),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(32),n(33),n(320),n(196),n(321)),l=n.n(r),d=window.innerHeight/100,h=window.innerWidth/100;function m(e,t){document.documentElement.style.setProperty("--vh",e+"px"),document.documentElement.style.setProperty("--vw",t+"px")}window.addEventListener("resize",(function(){var e=window.innerHeight/100,t=window.innerWidth/100;m(e,t),e===h&&t===d&&setTimeout((function(){console.log("hello"),window.scrollTo(0,100)}),100)})),m(d,h);var v={data:function(){return{isShowImg:!1,isShowMenu:!1,shareData:{url:"https://pjchender.blogspot.com",title:"分享DOM的圖片",text:"需要下載html2canvas這個套件"}}},watch:{isShowImg:function(e){e&&this.$nextTick((function(){document.body.style.height="calc(var(--vh,1vh)*100 - 10px)",document.body.style.overflow="hidden"})),e||this.$nextTick((function(){document.body.style.height="auto",document.body.style.overflow="visible"}))}},methods:{shareContent:function(){navigator.share?this.handleNavigatorShare():alert("瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器")},handleNavigatorShare:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var image,n,o,c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,image=document.querySelector("#img"),t.next=4,l()(image);case 4:return n=t.sent,o=n.toDataURL(),t.next=8,fetch(o);case 8:return t.next=10,t.sent.blob();case 10:return c=t.sent,r=[new File([c],"animation.png",{type:c.type,lastModified:(new Date).getTime()})],e.shareData.files=r,t.next=15,navigator.share(e.shareData);case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("err",t.t0):console.log("發生錯誤",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},dataURLtoFile:function(e,t){for(var n=e.split(","),o=n[0].match(/:(.*?);/)[1],c=atob(n[1]),r=c.length,l=new Uint8Array(r);r--;)l[r]=c.charCodeAt(r);return new File([l],t,{type:o})},downloadImage:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,image,n,o,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#img").src,e.next=3,fetch(t);case 3:return image=e.sent,e.next=6,image.blob();case 6:n=e.sent,o=URL.createObjectURL(n),(link=document.createElement("a")).href=o,link.download="下載的檔案",document.body.appendChild(link),link.click(),document.body.removeChild(link);case 14:case"end":return e.stop()}}),e)})))()},clickImageBackground:function(e){"openOtion"!==e.target.id&&(this.isShowMenu=!1)},dataURItoBlob:function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],o=new Uint8Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([o],{type:n})},toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.target.requestFullscreen?e.target.requestFullscreen():e.target.msRequestFullscreen?e.target.msRequestFullscreen():e.target.mozRequestFullScreen?e.target.mozRequestFullScreen():e.target.webkitRequestFullscreen&&e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},w=(n(285),n(47)),component=Object(w.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("圖片全螢幕")]),e._v(" "),e._m(0),e._v(" "),t("div",{staticStyle:{width:"100vw"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:n(281),id:"img"},on:{click:function(t){e.isShowImg=!0}}})]),e._v(" "),e.isShowImg?t("div",{staticClass:"img_section",on:{click:function(t){return e.clickImageBackground(t)}}},[e._m(1),e._v(" "),e.isShowImg?t("div",{staticStyle:{position:"fixed",left:"16px",top:"16px",color:"white"},on:{click:function(t){e.isShowImg=!1}}},[e._v("X")]):e._e(),e._v(" "),e.isShowImg?t("div",{staticStyle:{"z-index":"2",position:"fixed",right:"16px",top:"16px",transform:"rotate(90deg) scale(1.5)",color:"white"},attrs:{id:"openOtion"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v("...")]):e._e(),e._v(" "),e.isShowMenu?t("div",{staticStyle:{position:"fixed",right:"40px",top:"32px",padding:"8px",width:"60px","background-color":"white","box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"}},[t("div",{staticStyle:{"text-align":"center",margin:"0 -8px 8px -8px"},on:{click:e.shareContent}},[e._v("分享")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"},on:{click:e.downloadImage}},[e._v("下載")])]):e._e()]):e._e()])}),o,!1,null,"67ca7c59",null);t.default=component.exports}}]);