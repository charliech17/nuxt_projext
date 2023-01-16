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
      <TestElementLoading/>
      <InputTest/>
      <!-- <TestRelativeFixed/> -->
  </div>
</template>

<script>
import ColorPhone from '../components/ColorPhone.vue';
import TestElementLoading from '../components/TestElementLoading.vue';


export default {
    name: "IndexPage",
    data() {
        return {
            isShowTestExectue: true,
        };
    },
    components: { ColorPhone, TestElementLoading }
}
</script>
