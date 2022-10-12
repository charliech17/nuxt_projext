<template>
    <div>
        <div class="outer_backgroundStyle">
            <div class="backgroundStyle"></div>
        </div>
        <div style="position: relative;height: 500px;width: 100vw;background-color:red"></div>
    </div>
</template>


<style scoped>
    .outer_backgroundStyle {
        z-index: 100000;
        height: 500px;
        width: 100vw;
        
    }
    .backgroundStyle {
        height: 500px;
        width: 100vw;
        background-color: aqua;
        position: fixed;
        bottom: 0;

    }
</style>