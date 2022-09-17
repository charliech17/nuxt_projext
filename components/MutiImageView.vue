<template>
    <div>
        <h1>多圖片相簿</h1>
        <p>點擊下圖進入全螢幕，左右滑動切換圖片</p>
        <div style="width:100vw">
            <img src="@/assets/image/vue.png" @click="isShowImg = true" style="width:100%" id="img">
        </div>
        <div 
            @click="clickImageBackground($event)"
            class="img_section"
            v-if="isShowImg"
        >
                <div class="fullScreenImg" id="imgViewer">
                    <div class="imageContainer">
                        <img 
                            src="@/assets/image/vue.png"
                            style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                            id="image1"
                        />
                    </div>
                    <div class="imageContainer">
                        <img 
                            src="@/assets/image/sol-nascendo-png-6.png"
                            style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                            id="image2"
                        />
                    </div>
                    <div class="imageContainer">
                        <img 
                            src="@/assets/image/png-transparent-cartoon-cute-puppy-cartoon-lovely-puppy.png"
                            style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                            id="image3"
                        />
                    </div>
                </div>
                <div style="position:fixed;left:16px;top:16px;color:white;" @click="isShowImg = false" v-if="isShowImg">X</div>
                <div style="z-index:2;position:fixed;right:16px;top:16px;transform:rotate(90deg) scale(1.5);color:white;" id="openOtion" @click="isShowMenu=!isShowMenu" v-if="isShowImg">...</div>
                <div style="position:fixed;right:40px;top:32px;padding:8px;width:60px;background-color:white;box-shadow:0 0 3px 5px rgba(0,0,0,0.2);" v-if="isShowMenu">
                    <div style="text-align:center;margin:0 -8px 8px -8px;" @click="shareContent">分享</div>
                    <div style="text-align:center" @click="downloadImage">下載</div>
                </div>
        </div>；
    </div>
</template>

<script>
import html2canvas from 'html2canvas';

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
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${window.scrollY}px`;
                })  
            }
        
        if(!isOpen) {
            this.$nextTick(()=>{
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                setTimeout(()=>{
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                },200)
            })  
        }
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
                const idNumber = Math.floor(document.querySelector('#imgViewer').scrollLeft / window.innerWidth)
                const image = document.getElementById(`image${idNumber+1}`)
                const canvasElement = await html2canvas(image);
                const dataUrl = canvasElement.toDataURL();
                const blob = await (await fetch(dataUrl)).blob();
                const filesArray = [
                        new File(
                                    [blob],
                                    'image.png',
                                    {type: blob.type,lastModified: new Date().getTime()}
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
            const idNumber = Math.floor(document.querySelector('#imgViewer').scrollLeft / window.innerWidth)
            const imageSrc = document.getElementById(`image${idNumber+1}`).src
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
        right: 0;
        bottom: 0;
        background-color: black;
    }

    .fullScreenImg{
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        display: flex;
        scroll-snap-type: x mandatory;
        width: 100%;
        height: 100%;
    }

    .fullScreenImg>.imageContainer{
        scroll-snap-align: start;
        scroll-snap-stop: always;
        flex-shrink: 0;
        width: 100vw;
    }

    .imageContainer > img {
        object-fit: contain;
        width:100%;
        height:100%;
    }
</style>
