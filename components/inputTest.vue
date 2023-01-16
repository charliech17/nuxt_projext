<template>
    <div>
        <input type="file" @change="handleChange">
        <p>{{  '大小: ' + fileSize }}</p>
        <p>{{ '檔案類型' + fileType  }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fileSize: '',
                fileType: '',
            }
        },
        methods: {
            handleChange(event) {
                this.fileSize = event.target.files[0].size
                this.fileType = event.target.files[0].type
                console.log(event,event.target.files,event.target.files[0].size)
            },
        }
    }
</script>