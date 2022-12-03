<template>
  <div>
      <FullScreenView/>
      <AndroidTest/>
      <CopyText/>
      <LongPress/>
      <MutiImageView/>
      <UpdateMorningRevival/>
      <StatusbarColor/>
      <SpecificTime/>
      <AriaTest/>
      <UnderstandLifeCycle/>
      <TestInputScroll/>
      <TestExectueAfterDestroy v-if="isShowTestExectue" @destroyElement="isShowTestExectue = false"/>
      <TestLeaveTime/>
      <AnimationTest/>
      <ColorPhone/>
      <!-- <TestRelativeFixed/> -->
  </div>
</template>

<script>
import ColorPhone from '../components/ColorPhone.vue';


export default {
    name: "IndexPage",
    data() {
        return {
            isShowTestExectue: true,
        };
    },
    components: { ColorPhone }
}
</script>
