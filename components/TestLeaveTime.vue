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
        })
        // window blur
        window.addEventListener("blur",()=>{
            console.log('blur囉！！！！')
        })
    }
}
</script>