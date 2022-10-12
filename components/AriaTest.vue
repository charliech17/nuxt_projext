<template>
    <div>
        <button @click="isOpenDrawer = true">開啟drawer</button>
        <el-drawer 
            :visible.sync="isOpenDrawer" 
            :show-close="false"
            title="我是標題" 
            direction="btt"
            role="dialog"
            aria-labelledby="dialog1Title"
            aria-describedby="dialog1Desc"
        >
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

