<template>
    <div>
        <el-input
            :value="inputData"
            @input="handleElInput"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputData: '',
            }
        },
        methods: {
            handleElInput(event) {
                console.log(event)
                this.inputData = event
            }
        }
    }
</script>