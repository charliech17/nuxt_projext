<template>
    <div>
        <h1>測試複製</h1>
        <p id="copyText">使用clipboard的方式來複製的文字</p>
        <button @click="copyText">複製</button>
        <p id="copyText2">使用套件來複製的文字</p>
        <button id="copyTextBtn" data-clipboard-target="#copyText2">複製</button>
        <p id="copyText3">使用exe來複製的文字</p>
        <button id="copyTextBtn" @click="CopyToClipboard">複製</button>
        <p></p>
        <button @click="newCopyAction"></button>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
    mounted() {
        const clipboard = new ClipboardJS('#copyTextBtn');
    },
    methods: {
        copyText() {
            const text = document.getElementById('copyText').textContent;
            // 判斷瀏覽器支援
            if (!navigator.clipboard) {
                alert("瀏覽器不支援 Clipboard API")
                // 這裡可以改用 document.execCommand('copy') 的方法
            }

            // 非同步複製至剪貼簿
            let resolve = () => { 
                console.log('透過 Clipboard 複製至剪貼簿成功'); 
                alert('透過 Clipboard 複製至剪貼簿成功')
            }
            let reject = (err) => { 
                console.error('透過 Clipboard 複製至剪貼簿失敗:' + err.toString() ); 
                alert('複製至剪貼簿失敗')
            }
            navigator.clipboard.writeText(text).then(resolve, reject);
        },
        CopyToClipboard() {
            if(document.execCommand('copy')) {
                var range = document.createRange();
                range.selectNode(document.getElementById("copyText3"));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
            } else {
                alert('不支援execCommand')
            }
        },
        newCopyAction() {
            if (navigator.clipboard && navigator.clipboard.write) { 
                var data = [new ClipboardItem(
                    { "text/plain": Promise.resolve(new Blob(["Copy Text"], { type: 'text/plain' })) })
            ]; 
        }
            navigator.clipboard.write(data).then(()=> {

            })
        }
    }
}
</script>
