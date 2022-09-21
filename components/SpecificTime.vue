<template>
    <div>123</div>
</template>


<script>
import moment from "moment";

export default {
    mounted() {
        //  各國時間 (語言，時區)
        // const SouelTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Seoul'}) //('zh-TW', { timeZone: 'Asia/Taipei' })
        // const TokyioTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Tokyo'}) //('zh-TW', { timeZone: 'Asia/Taipei' })
        // const NewYorkTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'America/New_York'}) //('zh-TW', { timeZone: 'Asia/Taipei' })
        const TaiwanTime = new Date().toLocaleDateString('zh-TW',{timeZone: 'Asia/Taipei'}) //('zh-TW', { timeZone: 'Asia/Taipei' })
        
        // 時間運算
        const limitStartTime = new Date(moment(new Date(TaiwanTime)).format("YYYY/MM/DD/16:30+0800"))
        const limitEndTime   = new Date(moment(new Date(TaiwanTime)).format("YYYY/MM/DD/17:50+0800"))
        const nowTime        = new Date()

        console.log(limitStartTime,limitEndTime)

        // 判斷時間是否介於startTime與endTime之間
        if(nowTime <= limitEndTime && nowTime >= limitStartTime ) {
            alert('can not enter')
        }

        // 如果 nowTime > limitEndTime   => 設定下一個提醒及踢出時間: 隔天16:45 16:50
        // 如果 nowTime < limitStartTime => 設定下一個提醒及踢出時間: 當天16:45 16:50
        
        // 時間相減後的單位(毫秒) 
        console.log((limitEndTime - limitStartTime) , (limitStartTime - limitEndTime) / 1000)

        //  時間加一天、減一天
        const addDay = new Date(moment(new Date(TaiwanTime)).add(1,'day').format("YYYY/MM/DD/22:30+0800"))
        const subtractDay = new Date(moment(new Date(TaiwanTime)).subtract(1,'day').format("YYYY/MM/DD/22:30+0800"))
        console.log(addDay,subtractDay)
    },
    data() {
        return {

        }
    },
}
</script>