<template>
  <div>
      <h1>測試功能</h1>
      <FullScreenView/>
      <h1>測試android</h1>
      <AndroidTest/>
  </div>
</template>

<script>
import AndroidTest from '../components/AndroidTest.vue';
export default {
    name: "IndexPage",
    components: { AndroidTest }
}
</script>
