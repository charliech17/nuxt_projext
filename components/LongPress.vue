<template>
    <div>
        <h1>長壓按鈕</h1>
        <button @pointerdown="nowPointerPress" @pointerup="nowPointerUp" class="removeSelect">可測試長壓按鈕</button>
        <div>
            <p :class="{'longPressText': isLongPress}">{{isLongPress ? '偵測到長壓按鈕' : '長壓上面按鈕，變更文字'}}</p>
            <button @click="isLongPress=false" tabindex="-1">清除</button>
        </div>
        <hr style="margin-bottom:40px">
        <div id="outerDiv" @pointerdown.stop.prevent="''" style="display:flex;">
            <div id="focusTxt"   tabindex="-1" class="removeSelect" style="display:inline-block;outline:none;position:relative;line-height:24px;width:fit-content;height:fit-content;background-color:#001e26;color:white"
                        @pointerdown.prevent.stop="nowPointerPressText" @pointerup="nowPointerUpText"
            >
                長壓此文字，出現複製彈窗 <div v-if="isShowCopyDialog" id="copyTxtDialogId" class="copyDialog" style="position:absolute;top:-26px;" @click="copyText">複製</div>
            </div>
            <div id="outside" style="flex:1;"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            longPressTimer: null,
            longPressTxtTimer: null,
            isLongPress: false,
            isShowCopyDialog: false,
            windowClickEvent:null,
        }
    },
    mounted() {
        this.windowClickEvent = window.addEventListener("click",(event)=> {
            console.log(event.target.id)
            if(event.target.id === "outerDiv" || event.target.id !== "copyTxtDialogId") return this.isShowCopyDialog = false
            // if(event.target.id === "copyTxtDialogId") return 
            // this.isShowCopyDialog = false
        },false)
    },
    methods: {
        nowPointerPress() {
            // this.copyText()
            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true   
                // const element = document.getElementById('focusTxt')

                // const selection = window.getSelection();
                // selection.removeAllRanges();

                // element.classList.remove('removeSelect')
                // // Select paragraph
                // const range = document.createRange();
                // range.selectNodeContents(element);
                // selection.addRange(range);


                // element.focus()

            },800)
        },
        nowPointerUp() {
            clearTimeout(this.longPressTimer)
            this.longPressTimer = null
        },
        nowPointerPressText() {
            const vueThis = this
            this.longPressTxtTimer = setTimeout(()=>{
                this.isShowCopyDialog = true
            },500)
        },
        nowPointerUpText() {
            clearTimeout(this.longPressTxtTimer)
            this.longPressTxtTimer = null
        },
        removeFocus() {
            document.getElementById('focusTxt').classList.add('removeSelect')
        },
        async copyText() {
            this.isShowCopyDialog = false

            const text = '我是被長壓複製的文字';
            // 判斷瀏覽器支援
            if (!navigator.clipboard) {
                alert("瀏覽器不支援 Clipboard API")
                // 這裡可以改用 document.execCommand('copy') 的方法
            }
            
            // 非同步複製至剪貼簿
            let resolve = () => { 
                console.log('透過 Clipboard 複製至剪貼簿成功'); 
                alert('透過 Clipboard 複製至剪貼簿成功')
            }
            let reject = (err) => { 
                console.error('透過 Clipboard 複製至剪貼簿失敗:' + err.toString() ); 
                alert('複製至剪貼簿失敗')
            }
            navigator.clipboard.writeText(text).then(resolve, reject);
        },
    }
}
</script>

<style scoped>
    .longPressText {
        color: green;
    }

    .copyDialog {
        background-color: #333333;
        color: #FFFFFF;
        padding: 2px;
        border-radius: 5px;
    }

    .removeSelect {
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    } 
</style>