<template>
    <div>123</div>
</template>


<script>
import moment from "moment";

export default {
    mounted() {
        const limitStartTime = new Date(moment(new Date()).format("YYYY/MM/DD/16:30+0800"))
        const limitEndTime   = new Date(moment(new Date()).format("YYYY/MM/DD/17:30+0800"))
        const nowTime        = new Date()
        if(nowTime <= limitEndTime && nowTime >= limitStartTime ) {
            alert('can not enter')
        }
        // console.log(new Date(moment(new Date()).format("YYYY/MM/DD/16:30")))
    },
    data() {
        return {

        }
    },
}
</script>