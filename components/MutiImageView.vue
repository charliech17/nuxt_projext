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
                <div class="imageContainer" id="image1">
                    <img 
                        draggable="false"
                        src="@/assets/image/vue.png"
                        style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                    />
                </div>
                <div class="imageContainer" id="image2">
                    <img 
                        draggable="false"
                        src="@/assets/image/sol-nascendo-png-6.png"
                        style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                    />
                </div>
                <div class="imageContainer" id="image3">
                    <img 
                        draggable="false"
                        src="@/assets/image/png-transparent-cartoon-cute-puppy-cartoon-lovely-puppy.png"
                        style="box-shadow: 0 0 3px 5px rgba(0,0,0,0.2);"
                    />
                </div>
            </div>
            <div style="position:absolute;left:16px;top:16px;color:white;" @click="isShowImg = false" v-if="isShowImg">X</div>
            <div style="z-index:2;position:absolute;right:16px;top:16px;transform:rotate(90deg) scale(1.5);color:white;" id="openOtion" @click="isShowMenu=!isShowMenu" v-if="isShowImg">...</div>
            <div style="position:absolute;right:40px;top:32px;padding:8px;width:60px;background-color:white;box-shadow:0 0 3px 5px rgba(0,0,0,0.2);" v-if="isShowMenu">
                <div style="text-align:center;margin:0 -8px 8px -8px;" @click="shareContent">分享</div>
                <div style="text-align:center" @click="downloadImage">下載</div>
            </div>
        </div>
    </div>
</template>

<script>
// import html2canvas from 'html2canvas';

export default {
    data() {
        return {
            isShowImg: false,
            isShowMenu: false,
            shareData: {
                url: 'https://pjchender.blogspot.com', // 要分享的 URL
                title: '分享DOM的圖片', // 要分享的標題
                text: '需要下載html2canvas這個套件', // 要分享的文字內容
            },
            scrollY: 0,
        }
    },
    watch: {
        isShowImg: function(isOpen) {
            if(isOpen) {
                this.$nextTick(()=>{
                    this.scrollY = window.scrollY

                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${this.scrollY}px`;
                    document.body.style.backgroundColor = "black"
                })  
            }
        
        if(!isOpen) {
            this.$nextTick(()=>{
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.backgroundColor = ""
                setTimeout(()=>{
                    window.scrollTo({top: (this.scrollY) ,behavior:'auto'});
                },50)
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
                const imageElementSrc = document.querySelector(`#image${idNumber+1} > img`).src
                const blob = await (await fetch(imageElementSrc)).blob();
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
            const imageElementSrc = document.querySelector(`#image${idNumber+1} > img`).src

            const image = await fetch(imageElementSrc)
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
        /* 將照片置中，橫向排列 */
        display: flex;
        justify-content: center;
        align-items: center;
        /* 設定黑色全螢幕 */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        /* test */
        /* touch-action: pan-x pan-y; */
    }

    .fullScreenImg{
        /* 設定橫向滑動 */
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        display: flex;
        /* 設定滑動type(如此必滑動到影像部分) */
        scroll-snap-type: x mandatory;
        /* 設定寬度高度全滿 */
        width: 100%;
        height: 100%;
    }

    .fullScreenImg>.imageContainer{
        /* 設定滑動到位置、是否總是顯示(部會滑超過) */
        scroll-snap-align: start;
        scroll-snap-stop: always;
        /* 不要讓圖片縮小，不然三張圖片會擠在一頁 */
        flex-shrink: 0;
        /* 設定寬度滿版 */
        width: 100vw;
        /* 設定高度100% 超過hidden */
        height: 100%;
        overflow-y: hidden;
        /* 設定照片間距24px */
        margin-left: 24px;
    }

    .imageContainer > img {
        /* 設定照片吻合container大小 */
        object-fit: contain;
        width:100%;
        height:100%;
    }
</style>
