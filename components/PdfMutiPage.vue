<template>
    <div>
        <vue-pdf-app 
            style="height: 100vh;" 
            :pdf="'@/assets/pdf/test2.pdf'"
        />
    </div>
</template>

<script>
    import VuePdfApp from "vue-pdf-app";

    export default {
        components: {
            VuePdfApp
        }
    };
</script>
