<template>
    <div>
        <button @click="destroyComponent">關閉元件</button>
        <div>按完上面按鈕後，打開console看一下</div>
    </div>
</template>

<script>
export default {
    destroyed() {
        console.log('元件死了')
    },
    methods:{
        destroyComponent() {
            this.$emit("destroyElement") //* 此步驟會通知外層關閉元件
            console.log('元件destroy後還執行的程式？？') 
            setTimeout(()=>{
                console.log('執行完destroy後又經過2秒的程式！！？？')
            },2000)
        }
    }
}
</script>