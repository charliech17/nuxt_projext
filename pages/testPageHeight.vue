<template>
    <div class="container">
        <div class="box1"></div>
        <div class="box2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint eveniet maiores, officia quasi, sit tempora soluta vel iusto nisi repudiandae est temporibus accusamus officiis facilis sequi sapiente delectus totam!</div>
        <div class="box3"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}
</script>

<style>
    body{
        margin: 0;
    }
</style>

<style scoped>
    .container {
        height: calc(var(--vh,1vh)*100); 
        display: flex;
        flex-direction: column;
        justify-content: space-between;  
    }
    .box1{
        height: 30px;
        background-color: blue;
    }
    .box2 {
        height: calc(var(--vh,1vh)*100 - 80px);
        background-color: brown;
    }
    .box3{
        height: 50px;
        background-color: aqua;
    }
</style>