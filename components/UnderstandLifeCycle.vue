<template>
    <div>
        <InnerComponent/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: '父層的data'
        }
    },
    beforeCreate() {
        console.log('父 beforCreate', 'data is' + this.test)
    },
    created() {
        console.log('父 created', 'data is' + this.test)
    },
    beforeMount() {
        console.log('父 beforeMount', 'data is' + this.test)
    },
    mounted() {
        console.log('父 Mount', 'data is' + this.test)
    }
}
</script>