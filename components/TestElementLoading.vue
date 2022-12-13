<template>
    <div>
        <button @click="changeLoadingStatus">開關loading</button>
    </div>
</template>

<script>
    import { Loading } from "element-ui"
    export default {
        data() {
            return {
                loadingInstance: null,
                isStartLoading: true,
            }
        },
        methods: {
            changeLoadingStatus() {
                if(this.isStartLoading) {
                    this.loadingInstance = Loading.service({
                        fullscreen: true,
                        lock: true,
                        text: '處理中...',
                        spinner: 'el-icon-loadingg',
                        customClass: 'customStyle'
                    })
                } else {

                }

                this.isStartLoading = !this.isStartLoading
            }
        }
    }
</script>

<style>
    /* .customStyle {
        background-image: url('http://i.stack.imgur.com/kx8MT.gif');
    } */


    .customStyle .el-icon-loadingg {
        background-image: url('https://blog.arvinh.info/image/rick-animate-values.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 300px;
        height: 100px;
        animation: none;
        margin-top: 0;
        transform: translateY(-50%);
    }
    .customStyle .el-loading-text {
        position: absolute;
        left: 50%;
        top: 50px; /** 圖片高度一半 */
        transform: translateY(-50%);
    }
</style>