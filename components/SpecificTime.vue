<template>
    <div>
        <hr>
        <h1>Check is now Time in specific Tawain time range</h1>
        <input type="time" v-model="startTime" @change="getStartTime">
        <input type="time" v-model="endTime" @change="getEndTime">
        <button @click="checkIsInRange">Check Time</button>
        <p>startTime:{{startTime}}</p>
        <p>endTime:{{endTime}}</p>
        <p>limitStartTime:{{limitStartTime}}</p>
        <p>limitEndTime:{{limitEndTime}}</p>
        <p>testMomentTime:{{testMomentTime}}</p>
    </div>
</template>


<script>
import moment from "moment";

export default {
    mounted() {
        //  各國時間 (語言，時區)
        // const SouelTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Seoul'}) 
        // const TokyioTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Tokyo'})
        // const NewYorkTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'America/New_York'})
        // const TaiwanTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Taipei'})
        
        // 時間運算
        // const limitStartTime = new Date(moment(new Date(TaiwanTime)).format("YYYY/MM/DD/10:00+0800"))
        // const limitEndTime   = new Date(moment(new Date(TaiwanTime)).format("YYYY/MM/DD/11:50+0800"))
        // const nowTime        = new Date()

        // console.log(limitStartTime,limitEndTime)

        // 判斷時間是否介於startTime與endTime之間
        // if(nowTime < limitEndTime && nowTime >= limitStartTime ) {
        //     alert('can not enter')
        // }

        // 如果 nowTime > limitEndTime   => 設定下一個提醒及踢出時間: 隔天16:45 16:50
        // 如果 nowTime < limitStartTime => 設定下一個提醒及踢出時間: 當天16:45 16:50
        
        // 時間相減後的單位(毫秒) 
        // console.log((limitEndTime - limitStartTime) , (limitStartTime - limitEndTime) / 1000)

        //  時間加一天、減一天
        // const addDay = new Date(moment(new Date(TaiwanTime)).add(1,'day').format("YYYY/MM/DD/22:30+0800"))
        // const subtractDay = new Date(moment(new Date(TaiwanTime)).subtract(1,'day').format("YYYY/MM/DD/22:30+0800"))
        // console.log(addDay,subtractDay)
    },
    methods: {
        getStartTime() {
            const TaiwanTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Taipei'})
            this.testMomentTime = moment(new Date(TaiwanTime)).format(`YYYY/MM/DD ${this.startTime}`) + " GMT+0800"
            this.limitStartTime = new Date(moment(new Date(TaiwanTime)).format(`YYYY/MM/DD ${this.startTime}`)+ " GMT+0800")
            console.log(this.limitStartTime,"startTime")
        },
        getEndTime() {
            const TaiwanTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Taipei'})
            this.limitEndTime = new Date(moment(new Date(TaiwanTime)).format(`YYYY/MM/DD ${this.endTime}`)+ " GMT+0800")
            console.log(this.limitEndTime,"endTime")
        },
        checkIsInRange() {
            const nowTime = new Date()
            if(nowTime < this.limitEndTime && nowTime >= this.limitStartTime ) {
                alert('this time is in range of Taiwan ☺')
            } else {
                alert('this time is not in range of Taiwan 😰')
            }
        }
    },
    data() {
        return {
            startTime: '',
            endTime: '',
            limitStartTime: '',
            limitEndTime: '',
            testMomentTime:'',
        }
    },
}
</script>