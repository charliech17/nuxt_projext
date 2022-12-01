<template>
    <div>
        <br><br>
        <button @click="isShowSec2 = !isShowSec2">{{ isShowSec2 ? '縮合' : '展開' }}</button>
        <div class="container">
            <section class="blockSection">區塊一</section>
            <transition name="slideDown">
                <div class="sec2" v-show="isShowSec2"></div>
            </transition>
            <section class="blockSection">區塊二</section>
        </div>
        <div style="margin-bottom:100px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowSec2: false
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 16px;
    }
    .blockSection{
        height: 40px;
        line-height: 40px;
        padding-left: 16px;
        border: 1px solid black;
        border-top: 0;
        background-color: #FFFFFF;
    }

    .blockSection:nth-child(1){
        border-top: 1px solid black;
    }

    .sec2{
        height: 50px;
        border: 1px solid black;
        border-top: none;
        background-color: #F9FBFF;
    }

    .slideDown-leave-active,
    .slideDown-enter-active{
        transition: all .5s;
    }

    .slideDown-enter{
        /* transform: translateY(-30px); */
        height: 0px;
    }

    .slideDown-enter-to{
        /* transform: translateY(-30px); */
        height: 50px;
    }

    .slideDown-leave-to {
        /* opacity: 0; */
        /* transform: translateY(-40px); */
        height: 0px;
    }

</style>