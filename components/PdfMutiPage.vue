<template>
    <div>
        <input id="inputFile" type="file" @change="convertToBase64" />
        <div v-if="isShowPDF" @pointerdown="handlePDF_touch">
            <vue-pdf-app 
                v-if="isShowPDF"
                style="height: 40vh;" 
                :pdf="pdf"
                :page-number="1"
                :file-name="filename"
            />
        </div>
    </div>
</template>

<script>
    import VuePdfApp from "vue-pdf-app";

    export default {
        components: {
            VuePdfApp
        },
        data() {
            return {
                pdf: '',
                filename: '',
                isShowPDF: false
            }
        },
        methods: {
            convertToBase64() {
                //Read File
                const selectedFile = document.getElementById("inputFile").files;
                //Check File is not Empty
                if (selectedFile.length > 0) {
                    // Select the very first file from list
                    const fileToLoad = selectedFile[0];
                    // FileReader function for read the file.
                    const fileReader = new FileReader();
                    let base64;

                    const vueThis = this
                    // Onload of file read the file content
                    fileReader.onload = function(fileLoadedEvent) {
                        base64 = fileLoadedEvent.target.result;

                        vueThis.pdf = base64
                        vueThis.fileName = new Date()
                        vueThis.isShowPDF = true
                    };
                    // Convert data to base64
                    fileReader.readAsDataURL(fileToLoad);
                }
            },
            handlePDF_touch() {
                console.log('pdf touch')
            }
        }
    };
</script>
