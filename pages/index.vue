<template>
  <div>
      <h1>測試功能</h1>
      <FullScreenView/>
      <h1>測試android</h1>
      <AndroidTest/>
      <h1>測試複製</h1>
      <p id="copyText">哈囉hello copy</p>
      <button @click="copyText">複製</button>
  </div>
</template>

<script>
import AndroidTest from '../components/AndroidTest.vue';
export default {
    name: "IndexPage",
    components: { AndroidTest },
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
        }
    }
}
</script>

<style>
    html,body {
        margin:0;
        height:100%;
    }
</style>