<template>
    <div>
        <h1>長壓按鈕</h1>
        <button @pointerdown="nowPointerPress" @pointerup="nowPointerUp" class="removeSelect">可測試長壓按鈕</button>
        <div>
            <p :class="{'longPressText': isLongPress}">{{isLongPress ? '偵測到長壓按鈕' : '長壓上面按鈕，變更文字'}}</p>
            <button @click="isLongPress=false" tabindex="-1">清除</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            longPressTimer: null,
            isLongPress: false
        }
    },
    methods: {
        nowPointerPress() {
            this.longPressTimer = setTimeout(async () => {
                this.isLongPress = true   
                await this.copyText()
            },1200)
        },
        nowPointerUp() {
            clearTimeout(this.longPressTimer)
            this.longPressTimer = null
        },
        copyText() {
            const text = '我是被複製的文字';
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
                alert('複製至剪貼簿失敗' + err.toString())
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

    .removeSelect {
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    } 
</style>