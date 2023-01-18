<template>
    <div>
        <br>
        <hr>
        <div>{{countTime}}</div>
        <button @click="handleListenPage" style="background-color: #003ACD; color: white;">開始監聽： 離開網頁的事件</button>
        <button @click="handleTimeoutTest" style="background-color: #003ACD; color: white;">開始監聽 setTimeout</button>
        <div>{{ isNowSetTimeout }}</div>
        <div>{{ isErrorTime }}</div>
        <button @click="handleTimeInterval_3min">測試三分鐘</button>
        <div>{{ isTimeInterval_3min }}</div>
        <div>{{ '直接3分鐘：' + interval_3min_realTime }}</div>
        <div>{{ '每秒去扣的3分鐘：' + interval_every_3min_realTime }}</div>
        <button @click="handleTimeInterval_10min">測試十分鐘</button>
        <div>{{ isTimeInterval_10min }}</div>
        <div>{{ '直接10分鐘：' + interval_10min_realTime }}</div>
        <div>{{ '每秒去扣的10分鐘：' + interval_every_10min_realTime }}</div>
        <button @click=""></button>
    </div>
</template>


<script>
import { clearInterval } from 'timers'


export default {
    data() {
        return {
            countTime: 100,
            isNowSetTimeout: '',
            isErrorTime: '',
            isTimeInterval_3min: '',
            isTimeInterval_10min: '',
            interval_3min_realTime: '',
            interval_10min_realTime: '',
            interval_every_3min_realTime:'',
            interval_every_10min_realTime:'',

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
                this.isErrorTime = finalTime - nowTime
            },600000)
        },
        handleTimeInterval_3min() {
            this.isTimeInterval_3min = '三分鐘開始計時'
            const nowDate = new Date()
            let timeInter;

            timeInter = setInterval(()=>{
                const threeMinTime = new Date()
                this.interval_3min_realTime = threeMinTime - nowDate
                clearInterval(timeInter)
            },180000)
            
            let timeInter_3min = 180000
            let time_every_interval;
            time_every_interval = setInterval(()=>{
                if(timeInter_3min == 0) {
                    timeInter_3min = timeInter_3min - 1000
                    const threeFinalTime = new Date()
                    this.interval_every_3min_realTime = threeFinalTime - nowDate
                    clearInterval(time_every_interval)
                } else if(timeInter_3min < 0) {
                    return;
                } else {
                    timeInter_3min = timeInter_3min - 1000
                }               
            },1000)
        },
        handleTimeInterval_10min() {
            this.isTimeInterval_10min =  '十分鐘開始計時'
            const nowDate = new Date()
            let timeInter;

            timeInter = setInterval(()=>{
                const tenMinTime = new Date()
                this.interval_10min_realTime = tenMinTime - nowDate
                clearInterval(timeInter)
            },600000)

            let timeInter_10min = 600000
            let time_every_interval;
            time_every_interval = setInterval(()=>{
                if(timeInter_10min === 0) {
                    timeInter_10min = timeInter_10min - 1000
                    const tenFinalTime = new Date()
                    this.interval_every_10min_realTime = tenFinalTime - nowDate
                    clearInterval(time_every_interval)
                } else if(timeInter_10min < 0) {
                    return
                }
                 else {
                    timeInter_10min = timeInter_10min - 1000
                }               
            },1000)
        },
    },
}
</script>