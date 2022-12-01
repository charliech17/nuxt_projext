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
      <!-- <TestRelativeFixed/> -->
  </div>
</template>

<script>

export default {
    name: "IndexPage",
    data() {
        return {
            isShowTestExectue: true,
        };
    },
}
</script>
