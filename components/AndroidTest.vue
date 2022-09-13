<template>
    <div>
        <div>
            <label for="files">Select images to share:</label>
            <input id="files" type="file">
        </div>
        <button id="share" type="button" @click="handleAndroidShare">Share your images!</button>
        <output id="output"></output>
    </div>
</template>


<script>
export default {
    methods:{
        async handleAndroidShare() {
            const files = document.getElementById('files').files

            console.log('files????',files[0])

            if (files.length === 0) {
                output.textContent = 'No files selected.'
                return
            }

            if (!navigator.canShare) {
                output.textContent = `Your browser doesn't support the Web Share API.`
                return
            }

        if (navigator.canShare({ files })) {
          try {
            await navigator.share({
              files,
              title: 'Images',
              text: 'Beautiful images'
            })
            output.textContent = 'Shared!'
          } catch (error) {
            output.textContent = `Error: ${error.message}`
          }
        } else {
          output.textContent = `Your system doesn't support sharing these files.`
        }
        }
    }
}
</script>