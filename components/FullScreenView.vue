<template>
    <div 
        :class="{'img_section':isShowImg}"
    >
        <div style="width:100vW;background-color:black;display:flex; justify-content: center;align-items: center;">
            <img 
                src="https://source.unsplash.com/random/1600x900"
                :class="{'fullScreenImg':isShowImg}"
                @click="isShowImg = !isShowImg"
            >
        </div>
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
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
    }

    .fullScreenImg{
        width: 100vw;
        height: auto;
        overflow: hidden;
        justify-content: center;
        align-items: center;
    }
</style>
