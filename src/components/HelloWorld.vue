<template>
  <div class="mainBlock">
    <div class="backgroundBlock">
    <div class="titleBlock"></div>
    <leftBlock/>
    <!-- 左侧功能列表 -->
    <middleBlock @changeList="changeMesList" :mesList="mesList"/>
    <!-- 中间联系人一览 -->
    <rightBlock :item="mesList[choiceIndex]"/>
  </div>
  </div>
  
</template>

<script>
import leftBlock from "./leftBlock/left"
import middleBlock from "./middleBlock/middle"
import rightBlock from "./rightBlock/right"
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
                    src: 'test.jpg',
                    isIgnore: true,
                    time: "昨天",
                    detail: "梁非凡：警署都有规定，下属唔可以同上司啵嘴！",
                    tag:'老板',
                    tagType: 'info',
                    newMesNum:3,
                },
                {
                    title:'刘醒',
                    src: 'test.jpg',
                    isIgnore: true,
                    time: "5分钟前",
                    detail: "刘醒：对唔住非凡哥，但系警署有规定。",
                    tag:'啊sir',
                    tagType: 'success',
                    newMesNum:0,
                }
            ],
      choiceIndex:0
    }
  },
  methods:{
    changeMesList(index){
      console.log("update mesList",index)
      this.mesList[index].newMesNum = 0
      //点击某个对话，取消新信息 提示状态
      //更新原始数据
      this.choiceIndex = index
    }
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
</style>
