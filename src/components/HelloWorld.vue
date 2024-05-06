<template>
  <div class="mainBlock">
    <div class="backgroundBlock">
    <div class="titleBlock"></div>
    <leftBlock/>
    <!-- 左侧功能列表 -->
    <middleBlock @changeList="changeMesList" :mesList="mesList"/>
    <!-- 中间联系人一览 -->
    <rightBlock :item="mesList[choiceIndex]"/>
    <div class="littleButtonBlock">
      <img @click="minSize" class="littleButton" src="../.././public/img/little.png" alt="">
    </div>
    <div class="changeSizeButtonBlock">
      <img v-show="!isBig" @click="changeSize" class="changeSizeButton" src="../.././public/img/square.png" alt="">
      <img v-show="isBig" @click="changeSize" class="changeSizeButton" src="../.././public/img/backSize.png" alt="">
    </div>
    <div @click="closeAll" class="closeAllBlock">
      <!-- <img @click="closeAll" class="closeButton" src="../.././public/img/close.png" alt=""> -->
      ×
      <!-- 这是关闭符号，不能删除 -->
    </div>
    <div v-drag class="levitation"></div>
  </div>
  </div>
  
</template>

<script>
import leftBlock from "./leftBlock/left"
import middleBlock from "./middleBlock/middle"
import rightBlock from "./rightBlock/right"
const Mock = require("mockjs")
const Random = Mock.Random
export default {
  name: 'HelloWorld',
  props: {

  },
  components:{
    leftBlock,
    middleBlock,
    rightBlock
  },
  data() {
    return {
      mesList:[
                {
                    title:'梁非凡',
                    src: 'head1.jpg',
                    isIgnore: true,
                    time: "昨天",
                    detail: "梁非凡：警署都有规定，下属唔可以同上司啵嘴！",
                    tag:'老板',
                    tagType: 'info',
                    newMesNum:3,
                },
                {
                    title:'刘醒',
                    src: 'head2.jpg',
                    isIgnore: true,
                    time: "5分钟前",
                    detail: "刘醒：对唔住非凡哥，但系警署有规定。",
                    tag:'啊sir',
                    tagType: 'success',
                    newMesNum:0,
                }
            ],
      choiceIndex:0,
      isBig : false,
        //electron自带的窗口方法比较智能，不需要手动检测是否返回的状态是否正常
    }
  },
  mounted(){
    let a = 0
    for(let i=0;i<10;i++){
      if(a>=5){
        a = 0
      }
      a++
      const name = Random.cname()
       this.mesList.push({
            title:name,
            src: 'head' + a +'.jpg',
            isIgnore: true,
            time: Mock.mock('@integer(1, 59)')+"分钟前",
            detail: name+':'+ Random.csentence(),
            tag:Random.cname(),
            tagType: Mock.mock('@integer(0, 1)')==0?'success':"info",
            newMesNum:Mock.mock('@integer(0, 10)'),
       })
    }
     
  },
  methods:{
    changeMesList(index){
      console.log("update mesList",index)
      this.mesList[index].newMesNum = 0
      //点击某个对话，取消新信息 提示状态
      //更新原始数据
      this.choiceIndex = index
    },
    closeAll(){
        // window.electron.ipcRenderer.send('window-close')
        console.log("close")
        window.myApi.close('window-close')
        //往main传送参数，操作窗体
    },
    changeSize(){
        console.log("change")
        window.myApi.change('window-change')
        this.isBig = !this.isBig
    },
    minSize(){
        console.log("min")
        window.myApi.min('window-min')
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.mainBlock{
    position: relative;
}
.backgroundBlock{
    width: 100%;
    height: 100vh;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 320px;
  }
  .titleBlock{
    display: block;
    width: 320px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-app-region: drag;
  }
  .littleButtonBlock{
    position: absolute;
    top: 2px;
    right: 70px;
    display: block;
    width: 34px;
    height: 22px;
    text-align: center;
  }
  .littleButtonBlock:hover{
    background: #E6E7E8;
  }
  .littleButton{
      width: 17px;
      height: 12px;
  }
  .changeSizeButtonBlock{
    position: absolute;
    top: 2px;
    right: 35px;
    display: block;
    width: 34px;
    height: 22px;
    text-align: center;
  }
  .changeSizeButtonBlock:hover{
    background: #E6E7E8;
  }
  .changeSizeButton{
      width: 12px;
      height: 12px;
  }
  .closeAllBlock{
    position: absolute;
    top: 1px;
    right: 1px;
    display: block;
    width: 34px;
    height: 22px;
    text-align: center;
    font-family: "YouYuan";
    font-size: 19px;
    color: #979A9E;
    font-weight: 100;
  }
  .closeAllBlock:hover{
    background: #ff494b;
    color: #fff;
  }
  .closeButton{
      /* width: 10px;
      height: 10px; */
  }
  .levitation{
    position: absolute;
    right: 0;
    bottom: 200px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: #c9c9c9;
    opacity: 0.6;
  }
  .levitation:hover{
    opacity: 1;
  }
</style>
