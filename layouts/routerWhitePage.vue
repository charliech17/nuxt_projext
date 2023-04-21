<template>
    <div class="scrollSection" id="scrollSectionID">
        <Nuxt/>
    </div>
</template>

<script>
    export default{
        mounted() {
            const vh = window.innerHeight / 100
            document.documentElement.style.setProperty('--vh',`${vh}px`)
        }
    }
</script>

<style scoped>
    .scrollSection{
        height: calc( var(--vh,1vh)*100 - 100px - 16px);
        overflow: auto;
    }
</style>