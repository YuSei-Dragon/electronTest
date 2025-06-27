<template>
    <div ref="MenBlock" class="MenBlock">
      <div class="titleBlock">
        <div class="titleText">群成员 · {{num}}</div>
        <img class="email" src="../../.././public/img/littleEmail.png" alt="">
        <img class="more" src="../../.././public/img/moreBlack.png" alt="">
      </div>
      <div class="allpeopleBlock" :style="getPersonBlockHeight()">
        <div class="personBlock" v-for="(item,index) in menList" :key="index">
        <img v-if="item.sex == 0" class="personImg" src="../../.././public/img/personMan.png" alt="">
        <img v-if="item.sex == 1" class="personImg" src="../../.././public/img/personWoman.png" alt="">
        <div class="personBlockText">{{item.name}}</div>
        <img class="computerImg" src="../../.././public/img/computer.png" alt="">
      </div>
      </div>
      
      
    </div>
    
</template>
<script>
const Mock = require("mockjs")
const Random = Mock.Random
//使用mockjs快速模拟人名
export default {
  props: {
    item:{
        default:()=>({}),
        type:Object,
    },
    height:{
      default:648,
      type:Number,
    },
    memberList:{
      default:[],
      type:Array,
    }
  },
  watch:{
    "memberList":function(newV){
      this.init()
    }
  },
  components:{

  },
  data() {
    return {
        num: 26,
        menList:[
        ]
    }
  },
  methods:{
    getPersonBlockHeight(){
      let sty = 'width: 100%;overflow-x:hidden;height:'+ (this.height-32) + 'px'
      return sty
    },
    init(){
      this.menList = []
      this.memberList.forEach(item=>{
        this.menList.push(item)
      })
      if(this.menList.length<26){
        for(let i = this.menList.length;i<=26;i++){
          this.menList.push({
            name:Random.cname(),
            sex: Mock.mock('@integer(0,1)')
          })
        }
      }
    }
  },
  mounted(){
    for(let i =0 ;i<26;i++){
      //生成10条信息
      this.menList.push({
      name:Random.cname(),
      sex: Mock.mock('@integer(0,1)')
    })
    }
    
  },
}
</script>
<style scoped >
.MenBlock{
    width: 160px;
    height: 406px;
    /* background: rgb(254, 132, 132); */
    position: absolute;
    top: 66px;
    right: 0;
    border-left: 1px solid #DEE0E2;
}
.titleBlock{
  width: 100%;
  height: 32px;
}
.titleText{
  font-size: 12px;
  color: #666666;
  float: left;
  padding: 10px;
  padding-bottom: 0;
}
.email{
  width: 16px;
  height: 16px;
  padding-top: 8px;
  margin-left: 40px;
  float: left;
}
.more{
  width: 16px;
  height: 16px;
  padding-top: 7px;
  margin-left: 6px;
  float: left;
}
.allpeopleBlock{
  overflow: hidden;
}
.allpeopleBlock:hover{
  overflow: scroll;
}
.allpeopleBlock::-webkit-scrollbar {
    width: 17px;
}
.allpeopleBlock::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
}
.allpeopleBlock::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
    min-width: 32px;
    min-height: 32px;
}
.allpeopleBlock::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
}
.personBlock{
  width: 100%;
  height: 24px;
  position: relative;
  padding-bottom: 2px;
}
.personBlock:hover{
  background: #E6E8EB;
}
.personBlockText{
  font-size: 12.5px;
  float: left;
  padding-top: 2px;
  padding-left: 8px;
}
.personImg{
  width: 16px;
  height: 16px;
  float: left;
  padding-top: 2px;
}
.computerImg{
  width: 8px;
  height: 9px;
  position: absolute;
  top: 11px;
  left: 10px;
}
</style>