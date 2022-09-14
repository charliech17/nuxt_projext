<template>
    <div>
        <p>點擊下圖進入全螢幕，並可進行<span style="background-color:yellow">分享</span>或<span style="background-color:yellow">下載</span></p>
        <div style="width:100vw">
          <img src="@/assets/image/sol-nascendo-png-6.png" v-if="!isShowImg" @click="isShowImg = true" style="width:100%">
        </div>
        <div 
            @click="clickImageBackground($event)"
            class="img_section"
            v-if="isShowImg"
        >
                <!-- style="width:100vW;background-color:black;display:flex; justify-content: center;align-items: center;"  -->
                <div class="fullScreenImg">
                  <img 
                      src="@/assets/image/sol-nascendo-png-6.png"
                      id="img"
                      style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);width:100%;height:100%"
                  >
                </div>
                <div style="position:fixed;left:16px;top:16px;color:white;" @click="isShowImg = false" v-if="isShowImg">X</div>
                <div style="z-index:2;position:fixed;right:16px;top:16px;transform:rotate(90deg) scale(1.5);color:white;" id="openOtion" @click="isShowMenu=!isShowMenu" v-if="isShowImg">...</div>
                <div style="position:fixed;right:40px;top:32px;padding:8px;width:60px;background-color:white;box-shadow:0 0 3px 5px rgba(0,0,0,0.2);" v-if="isShowMenu">
                    <div style="text-align:center;margin:0 -8px 8px -8px;" @click="shareContent">分享</div>
                    <div style="text-align:center" @click="downloadImage">下載</div>
                </div>
        </div>
            <!-- <div>
                <img 
                    src="https://source.unsplash.com/random/1600x900"
                    @click="toggleFullScreen($event)"
                >
            </div> -->
    </div>
</template>

<script>
import html2canvas from 'html2canvas';

let initVH = window.innerHeight / 100;
let initVW = window.innerWidth / 100;

function setViewHeightViewWidth(windowsVH,windowsVW) {
  document.documentElement.style.setProperty('--vh', windowsVH + 'px');
  document.documentElement.style.setProperty('--vw', windowsVW + 'px');
}

// resize test
window.addEventListener('resize',()=>{
  let windowsVH = window.innerHeight / 100;
  let windowsVW = window.innerWidth / 100;
  // if(windowsVH === initVW &&  windowsVW === initVH) {
      // setTimeout(()=>{
  setViewHeightViewWidth(windowsVH,windowsVW)
  
  if(windowsVH === initVW &&  windowsVW === initVH) { 
    setTimeout(()=>{
      console.log('hello')
                window.scrollTo(0, 1);
              },100)
  }     
  // }
})

setViewHeightViewWidth(initVH,initVW)

export default {
    data() {
        return {
            isShowImg: false,
            isShowMenu: false,
            shareData: {
                url: 'https://pjchender.blogspot.com', // 要分享的 URL
                title: '分享DOM的圖片', // 要分享的標題
                text: '需要下載html2canvas這個套件', // 要分享的文字內容
            }
        }
    },
    watch: {
      isShowImg: function(isOpen) {
        if(isOpen) {
            this.$nextTick(()=>{
              setTimeout(()=>{
                window.scrollTo(0, 1);
              },100)
            })  
        } 
            
          // if(!isOpen) return document.body.style.overflowX = 'auto'
      }
    },
    methods: {
        shareContent() {
            if (navigator.share) {
                this.handleNavigatorShare();
            } else {
                alert('瀏覽器不支援分享功能，請改用chrome或是safiri瀏覽器')
                // handleNotSupportNavigatorShare();
            }
        },
        async handleNavigatorShare() {
            try {
                const image = document.querySelector('#img')
                const canvasElement = await html2canvas(image);
                const dataUrl = canvasElement.toDataURL();
                const blob = await (await fetch(dataUrl)).blob();
                const filesArray = [
                        new File(
                          [blob],
                          'animation.png',
                          {
                            type: blob.type,
                            lastModified: new Date().getTime()
                          }
                        )
                ];

                this.shareData.files = filesArray

              await navigator.share(this.shareData);
            //   result.textContent = '感謝你的的分享';
            } catch (err) {
              // 使用者拒絕分享或發生錯誤
              const { name } = err;
              if (name === 'AbortError') {
                console.log('err',err)
                // result.textContent = '您已取消分享此訊息';
              } else {
                // result.textContent = err;
                console.log('發生錯誤', err);
              }
            }
        },
        dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(","),
              mimeType = arr[0].match(/:(.*?);/)[1],
              decodedData = atob(arr[1]),
              lengthOfDecodedData = decodedData.length,
              u8array = new Uint8Array(lengthOfDecodedData);
            while (lengthOfDecodedData--) {
              u8array[lengthOfDecodedData] = decodedData.charCodeAt(lengthOfDecodedData);
            }
            return new File([u8array], filename, { type: mimeType });
        },
        async downloadImage() {
            const imageSrc = document.querySelector('#img').src
            const image = await fetch(imageSrc)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)

            const link = document.createElement('a')
            link.href = imageURL
            link.download = '下載的檔案'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        },
        clickImageBackground(event) {
            if(event.target.id === 'openOtion') return
            this.isShowMenu = false
        },
        // *** 目前無用到的function ***//
        dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        },
        toggleFullScreen(event) {
            if (!document.fullscreenElement &&    // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
              if (event.target.requestFullscreen) {
                event.target.requestFullscreen();
              } else if (event.target.msRequestFullscreen) {
                event.target.msRequestFullscreen();
              } else if (event.target.mozRequestFullScreen) {
                event.target.mozRequestFullScreen();
              } else if (event.target.webkitRequestFullscreen) {
                event.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
        },
    }
}
</script>


<style scoped>
    .img_section{
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        width: calc(var(--vw,1vw)*100);
        height: calc(var(--vh,1vh)*100);
        background-color: black;
        overflow: hidden;
        z-index: 100;
    }

    .fullScreenImg{
        overflow: hidden;
        /* object-fit: contain; */
        height: 100%;
        width: 100%;
        touch-action: pinch-zoom;
    }

    .fullScreenImg>img{
      object-fit: contain;
    }
</style>
