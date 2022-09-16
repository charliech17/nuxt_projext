<template>
    <div>
        <h1>長壓按鈕</h1>
        <button @pointerdown="nowPointerPress" @pointerup="nowPointerUp">可測試長壓按鈕</button>
        <div>
            <p :class="{'longPressText': isLongPress}">{{isLongPress ? '偵測到長壓按鈕' : '長壓上面按鈕，變更文字'}}</p>
            <button @click="isLongPress=false">清除</button>
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
            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true   
            },1200)
        },
        nowPointerUp() {
            clearTimeout(this.longPressTimer)
            this.longPressTimer = null
        }
    }
}
</script>

<style scoped>
    .longPressText {
        color: green;
    }

</style>>

</style>