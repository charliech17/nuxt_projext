<template>
    <div>
        <input type="color" @input="changeColor" :value="newColor">
        <p>現在的顏色是： {{newColor}}</p>
        <div class="image_section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3264 2448">
                <path id="svg_img1" data-name="svg_img1" class="cls-1" :style="svgColorStyle" d="M1848,1216c0.38,18.01-10.17,32.21-28,32a25.246,25.246,0,0,1-1-8c1.74-2.37,1.37-6.22,3-9C1826.61,1223.14,1835.31,1215.93,1848,1216Zm-52,32c11.14,0.08,16.51,6.11,26,7,5.32,0.5,12.31-4.78,17-6,14.67-3.82,30.45,5.97,32,16-8.66,5.63-19.26,25.57-11,41,3.63,6.79,12.69,7.72,14,17-9.81,14.12-11.83,34.29-36,34-14.68-13.74-33.52,5.92-45-1-22.71-7.98-40.6-66.68-24-92,3.34-5.09,11.17-11.6,17-14C1788.96,1248.78,1793.53,1249.53,1796,1248Z"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageNum: 2,
                newColor: '#aaa3ac'
            }
        },
        computed: {
            svgColorStyle() {
                return {fill: this.newColor}
            }
        },
        methods:{
            changeColor(event) {
                console.log(event.target.value)
                this.newColor = event.target.value
            }
        }
    }
</script>

<style scoped>
    .image_section{
        background-image: url("@/assets/image/myIphone.png");
        width: 800px;
        height: 800px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        image-rendering: crisp-edges;
    }

    /* .svg_section1,.svg_section2{
        mix-blend-mode: multiply;
    } */

    .cls-1{
        image-rendering: crisp-edges;
        mix-blend-mode: multiply;
        /* fill: green; */
    }
</style>