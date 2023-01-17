<template>
    <div>
        <br>
        <hr>
        <div>{{countTime}}</div>
        <button @click="handleListenPage" style="background-color: #003ACD; color: white;">開始監聽： 離開網頁的事件</button>
        <button @click="handleTimeoutTest" style="background-color: #003ACD; color: white;">開始監聽 setTimeout</button>
        <div>{{ isNowSetTimeout }}</div>
    </div>
</template>


<script>
import console from 'console'

export default {
    data() {
        return {
            countTime: 100,
            isNowSetTimeout: '',
        }
    },
    methods:{
        handleListenPage() {
            setInterval(()=>{
                this.countTime = this.countTime - 1  
            },1000)
            // visibilitychange
            window.addEventListener("visibilitychange",()=>{
                if (document.visibilityState === 'visible') {
                    console.log('visible')
                } else {
                    console.log('unvisible')
                }
            })
            // window focus
            window.addEventListener("focus",()=>{
                console.log('window focus囉')
                if(document.visibilityState === "visible") {
                    console.log('visible狀態改變')
                }
            })
            // window blur
            window.addEventListener("blur",()=>{
                console.log('blur囉！！！！')
            })
        },
        handleTimeoutTest() {
            this.isNowSetTimeout = '開始計時'
            const nowTime = new Date()
            console.log(nowTime)
            setTimeout(()=>{
                alert('3分鐘到了')
                const finalTime = new Date() 
                console.log(finalTime - nowTime)
            },60000)
        },
    },
}
</script>