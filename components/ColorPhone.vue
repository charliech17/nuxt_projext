<template>
    <div>
        <input type="color" @input="changeColor" :value="newColor">
        <p>現在的顏色是： {{newColor}}</p>
        <div class="image_section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3264 2448">
                <path id="svg_colorFill" data-name="svg_colorFill" class="cls-1" :style="svgColorStyle" d="M1844,1215c4.65,1.12,5.11,2.12,5,8-8.65,9.64-10.95,27.83-30,24v-8c6.82-9.21,7.38-20.6,22-22C1841.77,1216.32,1843.23,1215.69,1844,1215Zm-53,33c12.39-.19,18.3,4.42,27,7,8.93,2.65,14.56-4.46,20-6,13.72-3.87,32.27,4.58,33,17-8.99,5.83-19.92,26.13-11,40,5.09,7.92,13.61,6.49,14,20-4.37,5.69-5.66,13.3-10,19-3.61,4.75-10.66,7.83-15,12q-8.505-.495-17-1c-3.9-1.43-9.31-6.35-17-4-4.66,1.42-14.3,8.84-22,4-16.8-5.38-40.02-54.96-29-82,3.33-8.18,9.79-17.57,17-22C1784.08,1250.11,1788.25,1250.1,1791,1248Z"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageNum: 2,
                newColor: '#003acd'
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
        width: 300px;
        height: 300px;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }

    /* .svg_section1,.svg_section2{
        mix-blend-mode: multiply;
    } */

    .cls-1{
        mix-blend-mode: multiply;
        /* fill: green; */
    }
</style>