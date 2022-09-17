<template>
    <div>
        <h1>更新晨興聖言文章</h1>
        <p>串接 node.js api <a :href="revivalSite">前往網站</a></p>
        <input type="text" v-model="inputData">
        <button @click="sendValid" :disabled="!inputData">送出</button>
        <span :class="[updateStatusCode ? 'textGreen' :  'textRed']">{{updateStatusText}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: null,
            updateStatusText: "",
            updateStatusCode: null,
            revivalSite: "https://morningrevial-betterview.netlify.app/"
        }
    },
    methods:{
        // 測試~~
        async sendValid() {
            const bodyReq = JSON.stringify({passSecrect:this.inputData});
            const headerSetting = {'Content-Type':'application/json'};
            try{
                const updateDate = await fetch(
                        process.env.UPDATEURL,
                        {
                            method :  'POST',
                            headers:  headerSetting,
                            body   :  bodyReq,
                        }
                )
                const jsonData = await updateDate.json();
                if(jsonData.status === "success") return this.updateStatus(true)
                if(jsonData.status === "fail") return   this.updateStatus(false)
            } catch(err) {
                alert('錯誤')
                this.updateStatus(false)
            }
        },
        updateStatus(status) {
            if(status) {
                this.updateStatusText = "更新成功";
                this.updateStatusCode = true

                fetch(process.env.UPDATELOCAL)
            } else{
                this.updateStatusText = "更新失敗" ;
                this.updateStatusCode = false ;
            }
        }
    }
}
</script>

<style scoped>
    .textGreen {
        color: green;
    }

    .textRed {
        color: red;
    }

</style>