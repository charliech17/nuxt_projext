<template>
    <div 
        :class="{'img_section':isShowImg}"
    >
        <div style="width:100vW;background-color:black;display:flex; justify-content: center;align-items: center;">
            <img 
                src="https://source.unsplash.com/random/1600x900"
                :class="{'fullScreenImg':isShowImg}"
                @click="isShowImg = !isShowImg"
            >
        </div>
        <!-- <div>
            <img 
                src="https://source.unsplash.com/random/1600x900"
                @click="toggleFullScreen($event)"
            >
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowImg: false
        }
    },
    methods: {
        toggleFullScreen(event) {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (event.target.requestFullscreen) {
      event.target.requestFullscreen();
    } else if (event.target.msRequestFullscreen) {
      event.target.msRequestFullscreen();
    } else if (event.target.mozRequestFullScreen) {
      event.target.mozRequestFullScreen();
    } else if (event.target.webkitRequestFullscreen) {
      event.target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
    }
}
</script>


<style scoped>
    .img_section{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
    }

    .fullScreenImg{
        object-fit:contain;
        width: 100vw;
            /* height: 100vh; */
        /* overflow: hidden; */
        justify-content: center;
        align-items: center;
    }
</style>
