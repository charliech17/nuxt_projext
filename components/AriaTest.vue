<template>
    <div>
        <button @click="isOpenDrawer = true">開啟drawer</button>
        <el-drawer title="我是標題" :visible.sync="isOpenDrawer" direction="btt">
            <div role="heading">標題</div>
            <p>我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試我是內文測試</p>
            <div role="button">確認</div>
        </el-drawer>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isOpenDrawer: false,

        }
    }
}
</script>

