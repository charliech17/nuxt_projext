<template>
    <div></div>
</template>

<script>
    import '@/imageView/image_viewer.js'
    
    export default {
        mounted() {
            const prefix = '@/assets/imageViewer'
            // console.log(require(`@/assets/imageViewer/1.png`))
            const imgUrls =  [require(`@/assets/imageViewer/1.png`),require(`@/assets/imageViewer/2.png`),require(`@/assets/imageViewer/3.jpeg`)]
            const currentUrl = require(`@/assets/imageViewer/1.png`)
            const obj = {
                urls : imgUrls,
                current : currentUrl
            };
            setTimeout(()=> {
                previewImage.start(obj);
            })
        }
    }
</script>