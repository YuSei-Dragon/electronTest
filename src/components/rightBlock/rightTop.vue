<template>
    <div class="titleBlock">
        <div class="leftBlock">
            <div class="titleText">
                {{item.title}}
            </div>
        </div>
        <div class="moreButton">
            <img class="moreButtonImg" src="../../.././public/img/moreBlack.png" alt="">
        </div>
        <div class="addButton">
            <img  class="addButtonImg" src="../../.././public/img/addFriend.png" alt="">
        </div>
        <div :style="getMoveBlock()"></div>
        <div :style="getMoveBlock2()"></div>
    </div>
    
</template>
<script>
export default {
  props: {
    item:{
        default:()=>({}),
        type:Object,
    },
    long:{
        default: 470,
        type:Number,
    }
  },
  components:{

  },
  data() {
    return {
        isBig : false
        //electron自带的窗口方法比较只能，不需要手动检测是否返回的状态是否正常
    }
  },
  watch:{
    long(newVal,oldVal){

    }
  },
  methods:{
    getMoveBlock(){
        const sty ="position:absolute;top:0;left:320px;height:28px;width:"+
        (this.long-430) + 'px;'+"-webkit-app-region: drag;"
        return sty
    },
    getMoveBlock2(){
        const sty ="position:absolute;top:28px;left:320px;height:36px;width:"+
        (this.long-410) + 'px;'+"-webkit-app-region: drag;"
        return sty
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
    .leftBlock{
        width: 100%;
        height: 100%;
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
        height: 28px;
        position: absolute;
        top: 24px;
        right: 57px;
        display: block;
        border-radius: 5px;
    }
    .moreButtonImg{
        width: 28px;
        height: 26px;
    }
    .moreButton:hover{
        background:#EAEAEC;
    }
    .addButton{
        width: 28px;
        height: 28px;
        position: absolute;
        top: 24px;
        right: 13px;
        display: block;
    }
    .addButtonImg{
        margin-top: -2px;
        width: 32px;
        height: 28px;
    }
    .addButton:hover{
        background:#EAEAEC;
    }
</style>