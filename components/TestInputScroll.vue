<template>
    <input type="text">
</template>

<script>
    export default {
        mounted() {
            window.addEventListener('scroll',()=>{
                console.log('now Scroll!!!!')
            })
        }
    }
</script>