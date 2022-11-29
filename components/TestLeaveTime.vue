<template>
    <div>{{countTime}}</div>
</template>


<script>
export default {
    data() {
        return {
            countTime: 100
        }
    },
    mounted() {
        setInterval(()=>{
            this.countTime = this.countTime - 1  
        },1000)
    }
}
</script>