<template>
    <div class="titleBlock">
        <div class="titleText">
            {{item.title}}
        </div>
        <!-- 虽然这几个按钮写在这里，但是实际上定位和这里无关 -->
        <img class="littleButton" src="../../.././public/img/little.png" alt="">
        <img class="changeSizeButton" src="../../.././public/img/square.png" alt="">
        <img @click="closeAll" class="closeButton" src="../../.././public/img/close.png" alt="">
        <img class="moreButton" src="../../.././public/img/moreBlack.png" alt="">
        <img class="addButton" src="../../.././public/img/addFriend.png" alt="">
    </div>
    
</template>
<script>
export default {
  props: {
    item:{
        default:()=>({}),
        type:Object,
    }
  },
  components:{

  },
  data() {
    return {
        // title: '',
    }
  },
  methods:{
    closeAll(){
        // window.electron.ipcRenderer.send('window-close')
        console.log(window.electron)
        //往main传送参数，操作窗体
    },
  }
}
</script>
<style scoped >
    .titleBlock{
        width: 100%;
        height: 64px;
        background: #F6F6F7;
        /* margin-top: 30px; */
        border-bottom: 1px solid #DEE0E2;
    }
    .topButton{
        width: 100%;
        height: 30px;
    }
    .titleText{
        width: 70%;
        height: 30px;
        float: left;
        margin-top: 26px;
        padding-left: 17px;
        font-size: 16.5px;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .moreButton{
        width: 28px;
        height: 26px;
        position: absolute;
        top: 24px;
        right: 57px;
        display: block;
    }
    .addButton{
        width: 32px;
        height: 28px;
        position: absolute;
        top: 22px;
        right: 13px;
        display: block;
    }
    .littleButton{
        width: 17px;
        height: 12px;
        position: absolute;
        top: 3px;
        right: 80px;
        display: block;
    }
    .changeSizeButton{
        width: 12px;
        height: 12px;
        position: absolute;
        top: 4px;
        right: 47px;
        display: block;
    }
    .closeButton{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 5px;
        right: 13px;
        display: block;
    }

</style>