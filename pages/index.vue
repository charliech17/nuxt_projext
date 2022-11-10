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
      <!-- <TestRelativeFixed/> -->
  </div>
</template>

<script>
import UnderstandLifeCycle from '../components/UnderstandLifeCycle.vue';

export default {
    name: "IndexPage",
    components: { UnderstandLifeCycle }
}
</script>
