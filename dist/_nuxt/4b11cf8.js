(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{281:function(e,t,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(136).default)("4cde68eb",content,!0,{sourceMap:!1})},283:function(e,t,n){e.exports=n.p+"img/sol-nascendo-png-6.ebcf783.png"},284:function(e,t,n){"use strict";n(281)},285:function(e,t,n){var r=n(135)(!1);r.push([e.i,".img_section[data-v-3a46004e]{display:flex;position:fixed;top:0;left:0;width:100vw;width:calc(var(--vw,1vw)*100);height:100vh;height:calc(var(--vh,1vh)*100);background-color:#000}.fullScreenImg[data-v-3a46004e]{-o-object-fit:contain;object-fit:contain;width:100vw;justify-content:center;align-items:center}@media (orientation:landscape){.fullScreenImg[data-v-3a46004e]{-o-object-fit:none;object-fit:none;transform:scale(.5)}.img_section[data-v-3a46004e]{width:100vw;height:100vh}}",""]),e.exports=r},286:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(64),{methods:{handleAndroidShare:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("files").files,console.log("files????",t[0]),0!==t.length){e.next=5;break}return output.textContent="No files selected.",e.abrupt("return");case 5:if(navigator.canShare){e.next=8;break}return output.textContent="Your browser doesn't support the Web Share API.",e.abrupt("return");case 8:if(!navigator.canShare({files:t})){e.next=20;break}return e.prev=9,e.next=12,navigator.share({files:t,title:"Images",text:"Beautiful images"});case 12:output.textContent="Shared!",e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),output.textContent="Error: ".concat(e.t0.message);case 18:e.next=21;break;case 20:output.textContent="Your system doesn't support sharing these files.";case 21:case"end":return e.stop()}}),e,null,[[9,15]])})))()}}}),c=n(49),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("button",{attrs:{id:"share",type:"button"},on:{click:e.handleAndroidShare}},[e._v("Share your images!")]),e._v(" "),t("output",{attrs:{id:"output"}})])}),[function(){var e=this,t=e._self._c;return t("div",[t("label",{attrs:{for:"files"}},[e._v("Select images to share:")]),e._v(" "),t("input",{attrs:{id:"files",type:"file"}})])}],!1,null,null,null);t.default=component.exports},321:function(e,t,n){"use strict";n.r(t);var r,o,c=n(12),l=(n(64),n(17),n(41),n(27),n(194),n(195),n(287),n(292),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(32),n(33),n(318),n(196),n(319)),d=n.n(l);r=window.innerHeight/100,o=window.innerWidth/100,document.documentElement.style.setProperty("--vh",r+"px"),document.documentElement.style.setProperty("--vw",o+"px");var m={data:function(){return{isShowImg:!1,isShowMenu:!1,shareData:{url:"https://pjchender.blogspot.com",title:"分享DOM的圖片",text:"需要下載html2canvas這個套件"}}},methods:{shareContent:function(){navigator.share?this.handleNavigatorShare():alert("瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器")},handleNavigatorShare:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var image,n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,image=document.querySelector("#img"),t.next=4,d()(image);case 4:return n=t.sent,r=n.toDataURL(),t.next=8,fetch(r);case 8:return t.next=10,t.sent.blob();case 10:return o=t.sent,c=[new File([o],"animation.png",{type:o.type,lastModified:(new Date).getTime()})],e.shareData.files=c,t.next=15,navigator.share(e.shareData);case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("err",t.t0):console.log("發生錯誤",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()},dataURLtoFile:function(e,t){for(var n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]),c=o.length,l=new Uint8Array(c);c--;)l[c]=o.charCodeAt(c);return new File([l],t,{type:r})},downloadImage:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,image,n,r,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#img").src,e.next=3,fetch(t);case 3:return image=e.sent,e.next=6,image.blob();case 6:n=e.sent,r=URL.createObjectURL(n),(link=document.createElement("a")).href=r,link.download="下載的檔案",document.body.appendChild(link),link.click(),document.body.removeChild(link);case 14:case"end":return e.stop()}}),e)})))()},clickImageBackground:function(e){"openOtion"!==e.target.id&&(this.isShowMenu=!1)},dataURItoBlob:function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Blob([r],{type:n})},toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.target.requestFullscreen?e.target.requestFullscreen():e.target.msRequestFullscreen?e.target.msRequestFullscreen():e.target.mozRequestFullScreen?e.target.mozRequestFullScreen():e.target.webkitRequestFullscreen&&e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},h=(n(284),n(49)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("div",{class:{img_section:e.isShowImg},on:{click:function(t){return e.clickImageBackground(t)}}},[t("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t("img",{class:{fullScreenImg:e.isShowImg},staticStyle:{"box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"},attrs:{src:n(283),id:"img"},on:{click:function(t){e.isShowImg=!0}}}),e._v(" "),e.isShowImg?t("div",{staticStyle:{position:"fixed",left:"16px",top:"16px",color:"white"},on:{click:function(t){e.isShowImg=!1}}},[e._v("X")]):e._e(),e._v(" "),e.isShowImg?t("div",{staticStyle:{"z-index":"2",position:"fixed",right:"16px",top:"16px",transform:"rotate(90deg) scale(1.5)",color:"white"},attrs:{id:"openOtion"},on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v("...")]):e._e(),e._v(" "),e.isShowMenu?t("div",{staticStyle:{position:"fixed",right:"40px",top:"32px",padding:"8px",width:"60px","background-color":"white","box-shadow":"0 0 3px 5px rgba(0,0,0,0.2)"}},[t("div",{staticStyle:{"text-align":"center",margin:"0 -8px 8px -8px"},on:{click:e.shareContent}},[e._v("分享")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"},on:{click:e.downloadImage}},[e._v("下載")])]):e._e()])])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("點擊下圖進入全螢幕，並可進行"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("分享")]),e._v("或"),t("span",{staticStyle:{"background-color":"yellow"}},[e._v("下載")])])}],!1,null,"3a46004e",null);t.default=component.exports},341:function(e,t,n){"use strict";n.r(t);var r={name:"IndexPage",components:{AndroidTest:n(286).default}},o=n(49),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("測試功能")]),e._v(" "),t("FullScreenView"),e._v(" "),t("h1",[e._v("測試android")]),e._v(" "),t("AndroidTest")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FullScreenView:n(321).default,AndroidTest:n(286).default})}}]);