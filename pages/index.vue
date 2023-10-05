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
        <RecursionCompt :nodeData="nodeData"/>
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
            nodeData: [
                {
                    name: "A---------",
                    subMenu:[
                        {
                            name:"A-第二層-1",
                            subMenu: [{name: "測試1"},{name: "測試2"},{name: "測試3"}],
                        },
                        {
                            name:"A-第二層-2",
                            subMenu: [{name: "嘿嘿嘿嘿1"},{name: "嘿嘿嘿嘿2"}],
                        }
                    ]
                },
                {
                    name: "B---------",
                    subMenu:[{name:"B-第一層",subMenu: [{name:"yayayaya"}]},{name:"B-第二層"}]
                }
            ]
        };
    },
    components: { ColorPhone, TestElementLoading }
}
</script>
