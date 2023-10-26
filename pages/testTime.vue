<template>
    <div>
        <div>
            <button @click="() => handleTimeoutTest(1)" style="background-color: #003ACD; color: white;">開始三分鐘計時</button>
            <button @click="() => handleTimeoutTest(2)" style="background-color: #003ACD; color: white;">開始十分鐘計時</button>
        </div>
        <div class="mBottom-8">
            <div>{{ title3 }}</div>
            <div> {{ timeoutRecord3 ? timeoutRecord3 : '' }}</div>
        </div>
        <div>
            <div>{{ title10 }}</div>
            <div> {{ timeoutRecord10 ? timeoutRecord10 : '' }}</div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                title3: '三分鐘停止',
                title10: '十分鐘停止',
                timeoutRecord3: 0,
                timeoutRecord10: 0,
            }
        },
        methods: {
            handleTimeoutTest(status) {
                if(status == 1) {
                    this.title3 = '開始計時三分鐘'
                    const nowTime = new Date()
                    console.log(nowTime)
                    setTimeout(()=>{
                        // alert('3分鐘到了')
                        const finalTime = new Date() 
                        console.log(finalTime - nowTime)
                        this.timeoutRecord3 = finalTime - nowTime
                    },3 * 60 * 1000)
                } else {
                    this.title10 = '開始計時十分鐘'
                    const nowTime = new Date()
                    console.log(nowTime)
                    setTimeout(()=>{
                        // alert('10分鐘到了')
                        const finalTime = new Date() 
                        console.log(finalTime - nowTime)
                        this.timeoutRecord10 = finalTime - nowTime
                    },10 * 60 * 1000)
                }
            },
        }
    }
</script>

<style scoped>
.mBottom-8 {
    margin-bottom: 16px;
}
</style>