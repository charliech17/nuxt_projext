(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{280:function(e,t,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(135).default)("5a05bdbc",content,!0,{sourceMap:!1})},281:function(e,t,n){"use strict";n(280)},282:function(e,t,n){var l=n(134)(!1);l.push([e.i,".img_section[data-v-529734e9]{display:flex;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000}.fullScreenImg[data-v-529734e9]{-o-object-fit:contain;object-fit:contain;width:100vw;justify-content:center;align-items:center}",""]),e.exports=l},285:function(e,t,n){"use strict";n.r(t);var l={data:function(){return{isShowImg:!1}},methods:{toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.target.requestFullscreen?e.target.requestFullscreen():e.target.msRequestFullscreen?e.target.msRequestFullscreen():e.target.mozRequestFullScreen?e.target.mozRequestFullScreen():e.target.webkitRequestFullscreen&&e.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}},c=(n(281),n(47)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:{img_section:e.isShowImg}},[t("div",{staticStyle:{width:"100vW","background-color":"black",display:"flex","justify-content":"center","align-items":"center"}},[t("img",{class:{fullScreenImg:e.isShowImg},attrs:{src:"https://source.unsplash.com/random/1600x900"},on:{click:function(t){e.isShowImg=!e.isShowImg}}})])])}),[],!1,null,"529734e9",null);t.default=component.exports}}]);