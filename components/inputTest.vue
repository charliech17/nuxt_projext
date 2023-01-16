<template>
    <div>
        <input type="file" @change="handleChange">
        <p>{{  fileSize }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fileSize: '',
            }
        },
        methods: {
            handleChange(event) {
                this.fileSize = event.target.files[0].size
                console.log(event,event.target.files,event.target.files[0].size)
            },
        }
    }
</script>