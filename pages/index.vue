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
      <!-- <TestRelativeFixed/> -->
  </div>
</template>

<script>
import UnderstandLifeCycle from '../components/UnderstandLifeCycle.vue';

export default {
    name: "IndexPage",
    data() {
      return {
        isShowTestExectue: true,
      }
    },
}
</script>
