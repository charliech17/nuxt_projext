(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{281:function(e,t,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(136).default)("1219e864",content,!0,{sourceMap:!1})},283:function(e,t,n){e.exports=n.p+"img/vue.e00c12e.png"},284:function(e,t,n){"use strict";n(281)},285:function(e,t,n){var r=n(135)(!1);r.push([e.i,".img_section[data-v-3d924e7d]{display:flex;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000}.fullScreenImg[data-v-3d924e7d]{-o-object-fit:contain;object-fit:contain;width:100vw;justify-content:center;align-items:center}@media (orientation:landscape){.fullScreenImg[data-v-3d924e7d]{-o-object-fit:contain;object-fit:contain;transform:scale(.8);justify-content:center;align-items:center}}",""]),e.exports=r},320:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(68),n(17),n(41),n(27),n(194),n(195),n(286),n(291),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(32),n(33),n(317),n(196),n(318)),c=n.n(o),l={data:function(){return{isShowImg:!1,isShowMenu:!1,shareData:{url:"https://pjchender.blogspot.com",title:"分享DOM的圖片",text:"需要下載html2canvas這個套件"}}},methods:{shareContent:function(){navigator.share?this.handleNavigatorShare():alert("瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器")},handleNavigatorShare:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var image,n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,image=document.querySelector("#img"),t.next=4,c()(image);case 4:return n=t.sent,r=n.toDataURL(),t.next=8,fetch(r);case 8:return t.next=10,t.sent.blob();case 10:return o=t.sent,l=[new File([o],"animation.png",{type:o.type,lastModified:(new Date).getTime()})],e.shareData.files=l,t.next=15,navigator.share(e.shareData);case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("err",t.t0):console.log("發生錯誤",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},dataURLtoFile:function(e,t){for(var n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]),c=o.length,l=new Uint8Array(c);c--;)l[c]=o.charCodeAt(c);return new File([l],t,{type:r})},downloadImage:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,image,n,r,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#img").src,e.next=3,fetch(t);case 3:return image=e.sent,e.next=6,image.blob();case 6:n=e.sent,r=URL.createObjectURL(n),(link=document.createElement("a")).href=r,link.download="image file name here",document.body.appendChild(link),link.click(),document.body.removeChild(link);case 14:case"end":return e.stop()}}),e)})))()},clickImageBackground:function(e){"openOtion"!==e.target.id&&(this.isShowMenu=!1)},dataURItoBlob:function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Blob([r],{type:n})},toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.target.requestFullscreen?e.target.requestFullscreen():e.target.msRequestFullscreen?e.target.msRequestFullscreen():e.target.mozRequestFullScreen?e.target.mozRequestFullScreen():e.target.webkitRequestFullscreen&&e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},d=(n(284),n(50)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("div",{class:{img_section:e.isShowImg},on:{click:function(t){return e.clickImageBackground(t)}}},[t("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",position:"relative"}},[t("img",{class:{fullScreenImg:e.isShowImg},staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"},attrs:{src:n(283),id:"img"},on:{click:function(t){e.isShowImg=!0}}}),e._v(" "),t("div",{staticStyle:{position:"fixed",left:"16px",top:"16px",color:"white"},on:{click:function(t){e.isShowImg=!1}}},[e._v("X")]),e._v(" "),t("div",{staticStyle:{"z-index":"2",position:"fixed",right:"16px",top:"16px",transform:"rotate(90deg) scale(1.5)",color:"white"},attrs:{id:"openOtion"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v("...")]),e._v(" "),e.isShowMenu?t("div",{staticStyle:{position:"fixed",right:"40px",top:"32px",padding:"8px",width:"60px","background-color":"white","box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"}},[t("div",{staticStyle:{"text-align":"center",margin:"0 -8px 8px -8px"},on:{click:e.shareContent}},[e._v("分享")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"},on:{click:e.downloadImage}},[e._v("下載")])]):e._e()])])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("點擊下圖進入全螢幕，並可進行"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("分享")]),e._v("或"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("下載")])])}],!1,null,"3d924e7d",null);t.default=component.exports},340:function(e,t,n){"use strict";n.r(t);var r={name:"IndexPage"},o=n(50),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("測試功能")]),e._v(" "),t("FullScreenView")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FullScreenView:n(320).default})}}]);