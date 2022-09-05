<template>
    <div :class="{'img_section':isShowImg}">
        <img 
            src="https://source.unsplash.com/random/1600x900"
            @click="isShowImg = !isShowImg"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowImg: false
        }
    },
}
</script>


<style scoped>
    .img_section{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
    }
</style>
