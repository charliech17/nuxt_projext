<template>
    <div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: '子層的data'
        }
    },
    beforeCreate() {
        console.log('子 beforCreate', 'data is' + this.test)
    },
    created() {
        console.log('子 created', 'data is' + this.test)
    },
    beforeMount() {
        console.log('子 beforeMount', 'data is' + this.test)
    },
    mounted() {
        console.log('子 Mount', 'data is' + this.test)
    },
    beforeDestroy() {
        console.log('子 beforeDestroy')
    },
    destroyed() {
        console.log('子 beforeDestroy')
    }
}
</script>