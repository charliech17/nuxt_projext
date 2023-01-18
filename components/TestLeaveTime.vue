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
        <div>{{ isTimeInterval }}</div>
        <div> {{ startTime }}</div>
        <div>{{ '直接3分鐘：' + interval_3min_realTime }}, {{ interval_3min_timestamp }}</div>
        <div>{{ '每秒去扣的3分鐘：' + interval_every_3min_realTime }},{{ interval_every_3min_timestamp }} </div>
        <div>{{ '直接10分鐘：' + interval_10min_realTime }}, {{ interval_10min_timestamp }}</div>
        <div>{{ '每秒去扣的10分鐘：' + interval_every_10min_realTime }}, {{ interval_every_10min_timestamp }} </div>
        <button @click=""></button>
    </div>
</template>


<script>

export default {
    data() {
        return {
            countTime: 100,
            isNowSetTimeout: '',
            isErrorTime: '',
            isTimeInterval: '',
            isTimeInterval_10min: '',
            interval_3min_realTime: '',
            interval_10min_realTime: '',
            interval_every_3min_realTime:'',
            interval_every_10min_realTime:'',
            startTime: '',
            tenMinStartTime: '',
            interval_3min_timestamp:'',
            interval_10min_timestamp: '',
            interval_every_3min_timestamp:'',
            interval_every_10min_timestamp:'',
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
            this.isTimeInterval = '開始計時'
            this.startTime = new Date()
            let endTime_3min = new Date().getTime() + 180*1000;
            let endTime_10min = new Date().getTime() + 600*1000;

            let timeInter1;
            timeInter1 = setInterval(()=>{
                if (new Date().getTime() > endTime_3min) {
                    this.interval_3min_timestamp = new Date();
                    console.log('timeInter1', timeInter1)
                    clearInterval(timeInter1)
                }   
            },180000)
            
            
            this.interval_every_3min_realTime = 0;
            let time_every_interval;
            time_every_interval = setInterval(()=>{
                if (new Date().getTime() > endTime_3min) {
                    this.interval_every_3min_timestamp = new Date();
                    console.log('time_every_interval', time_every_interval)
                    clearInterval(time_every_interval)
                } else {
                    this.interval_every_3min_realTime++;
                }        
            },1000)


            let timeInter3;
            timeInter3 = setInterval(()=>{
                if (new Date().getTime() > endTime_10min) {
                    this.interval_10min_timestamp = new Date();
                    console.log('timeInter3', timeInter3)
                    clearInterval(timeInter3)
                }   
            },600*1000)


            this.interval_every_10min_realTime = 0;
            let timeInter4;
            timeInter4 = setInterval(()=>{
                if (new Date().getTime() > endTime_10min) {
                    this.interval_every_10min_timestamp = new Date();
                    console.log('timeInter4', timeInter4)
                    clearInterval(timeInter4)
                } else {
                    this.interval_every_10min_realTime++;
                }       
            },1000)

            

        },
    },
}

</script>