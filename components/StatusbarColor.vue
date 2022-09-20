<template>
    <div>
        <h1>更換Statusbar 顏色</h1>
        <input type="text" v-model="txtColor">
        <button @click="changeStatusbarColor">更變顏色</button>
        <p>#FFFFFF</p>
        <p>#000000</p>
        <p style="color:#00FFFF">#00FFFF</p>
        <p style="color:#FF8C00">#FF8C00</p>
        <p style="color:#9932CC">#9932CC</p>
        <p style="color:#8B0000">#8B0000</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            txtColor: "#000000",
        }
    },
    methods: {
        changeStatusbarColor(event) {
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', this.txtColor);
        }
    }
}
</script>

