<template>
    <div>
        <PdfMutiPage/>
        <FullScreenView/>
        <AndroidTest/>
        <CopyText/>
        <LongPress/>
        <MutiImageView/>
        <UpdateMorningRevival/>
        <StatusbarColor/>
        <SpecificTime/>
        <AriaTest/>
        <UnderstandLifeCycle v-if="showLifeCycle"/>
        <div>
            <button @click="showLifeCycle = !showLifeCycle">開啟/關閉lifeCycle</button>
        </div>
        <TestInputScroll/>
        <TestExectueAfterDestroy v-if="isShowTestExectue" @destroyElement="isShowTestExectue = false"/>
        <TestLeaveTime/>
        <AnimationTest/>
        <ColorPhone/>
        <TestElementLoading/>
        <InputTest/>
        <TelTest/>
        <InputBlur/>
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
            showLifeCycle: false,
        };
    },
    components: { ColorPhone, TestElementLoading }
}
</script>
