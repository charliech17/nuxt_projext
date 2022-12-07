<template>
    <div>
        <h1>更換Statusbar 顏色</h1>
        <input type="text" v-model="txtColor">
        <button @click="changeStatusbarColor">更變顏色</button>
        <p @click="txtColor = '#FFFFFF'">#FFFFFF</p>
        <div v-for="color in allColor" :key="color">
            <p :style="{color: color}" @click="txtColor = color">{{color}}</p>
        </div>
        <!-- <p>#000000</p>
        <p style="color:#00FFFF">#00FFFF</p>
        <p style="color:#FF8C00">#FF8C00</p>
        <p style="color:#9932CC">#9932CC</p>
        <p style="color:#8B0000">#8B0000</p> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            txtColor: "#000000",
            allColor:['#000000','#00FFFF','#FF8C00','#9932CC','#8B0000']
        }
    },
    methods: {
        changeStatusbarColor(event) {
            // 修改html的backgroundColor 也可以改變status bar的顏色
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', this.txtColor);
        }
    }
}
</script>

