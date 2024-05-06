<template>
    <div ref="peopleList" class="personBlock" :style="getTextBlock()">
      <div v-for="(item,index) in mesList" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="mes">{{item.mes}}</div>
      </div>
      <div style="width:100%;height:30px" ref="bottom"></div>
      <div @click="clickIframeBlock()" :style="getiframeBlock()" v-show="$store.state.showVideoIndex==1" >
        <iframe  ref="iframe" :src="$store.state.url" :style="getVideo()" name="iframe" ></iframe>
        <!-- security="restricted" sandbox="allow_forms allow-modals allow-popups allow-scripts allow-same-origin"
        处理自动跳转到顶层和屏蔽页面脚本活动 -->
        <div class="bigBlock"  ref="bigBlock">
          <!-- <img :src="bigSrc" alt=""> -->
        </div>
      </div>
    </div>
    
</template>
<script>
import html2canvas from "html2canvas"
const Mock = require("mockjs")
const Random = Mock.Random
//使用mockjs快速模拟人名
export default {
  props: {
    item:{
        default:()=>({}),
        type:Object,
    },
    long:{
      default:525,
      type:Number
    },
    height:{
      default:0,
      type:Number,
    }
  },
  watch:{
    long(newVal,oldVal){
        // console.log(newVal)
        //监听数据变化
    },
  },
  data() {
    return {
        mesList:[
        ],
        bigSrc:'',
    }
  },
  methods:{
    getTextBlock(){
      const sty = "height:"+(this.height-180)+"px;width:" + (this.long-480) + 'px;'
      // console.log(sty)
      return sty
      
    },
    iframeSetOpacity(){
      const that = this
      this.$nextTick(()=>{
        // console.log(that.$store.state.videoOpacity)
        const iframe = this.$refs.iframe
        const bigBlock = this.$refs.bigBlock
        iframe.onmouseover = function(){
          iframe.style.opacity = that.$store.state.videoOpacity
          bigBlock.style.opacity = that.$store.state.videoOpacity
        }
        iframe.onmouseout = function(){
          iframe.style.opacity = "0.02"
          bigBlock.style.opacity = "0.02"
        }
      })
      
    },
    getiframeBlock(){
      if(!this.$store.state.biggerIframe)
        return "position: relative;overflow: hidden;width: 525px;height: 400px;border: none;"
        else{
          return ""
        }
    },
    getVideo(){

        if(!this.$store.state.biggerIframe){
        return "position: absolute;width: 250%;height: 200%;left: -385px;top: -160px;transform: scale(0.4);border: none;opacity: 0.02;"
      }else{
        return "width: 525px;margin: 0px 3px; height: 400px;border-radius: 5px;position: relative;border: none;opacity: 0.02;"
      }
      },
    clickIframeBlock(){
      console.log("触发了放大更新")
      const iframeHtml = this.$refs.iframe.contentWindow//获取iframe内容
      console.log(iframeHtml)
      const iframeBody = iframeHtml.document.getElementsByTagName('body')[0]
      console.log(iframeBody)
      //获取iframe 的body
      this.$nextTick(()=>{
         html2canvas(iframeBody,{
        backgroundColor: "transparent",
        allowTaint: true,
        // useCORS :true,
        // width:this.$refs.iframe
        x:0,
        y:0,
        scrollX: 0,
        scrollY: 0,
      }).then((canvas)=>{
        console.log(canvas)
        document.querySelector('.bigBlock').appendChild(canvas)
        // canvas.id = 'canvas',
        // this.$refs.bigBlock.appendChild(canvas)
        // document.getElementById('canvas').style.position = 'fixed'
        // document.getElementById('canvas').style.top = '0'
        // document.getElementById('canvas').style.left = '0'
        // document.getElementById('canvas').style.zIndex = '999'
        this.bigSrc = canvas.toDataURL()
      })
      })
     
    }
  },
  mounted(){
    // console.log(this.height)
    for(let i = 0;i<20;i++){
      this.mesList.push({
        name:Random.cname(),
        mes:Random.csentence()
      })
    }
    this.iframeSetOpacity()
  },
  updated(){
    this.$nextTick(()=>{
      //需要nextTick等待成型
      // that.$refs.peopleList.scrollTop = that.$refs.peopleList.scrollHeight
      // that.$refs.peopleList.scrollTo({ top: that.$refs.peopleList.scrollHeight, behavior: 'smooth' });
      //把滚轮条拉到最低
      const bottom = this.$refs.bottom
      const height = bottom.offsetTop
      bottom.parentElement.scrollTo(0,height)
    })
  },
}
</script>
<style scoped >
.personBlock{
  /* width: 100%; */
  /* scroll-behavior: smooth; */
  overflow: hidden;
}
.personBlock:hover{
  overflow-y: scroll;
}
.personBlock::-webkit-scrollbar {
    width: 17px;
}
.personBlock::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
}
.personBlock::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
    min-width: 32px;
    min-height: 32px;
}
.personBlock::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
}
.name{
  /* width: 100%; */
  font-size: 12px;
  color: #6D7176;
  margin-left: 18px;
  padding: 6px 0;
}
.mes{
  background: #E8E8E9;
  font-size: 13px;
  padding: 10px;
  margin-left: 18px;
  border-radius: 5px;
  display: inline-block;
}
.bigBlock{
  position: absolute;
  top: 0px;
  right: 0px;
  background: green;
  width: 105px;
  height: 80px;
  opacity: 0.02;
}
.iframeBlock{
  position: relative;
  overflow: hidden;
  width: 525px;
  height: 400px;
  border: none;
}
.video{
  position: absolute;
  /* width: 525px;
  margin: 0px 3px; */
  /* height: 400px;
  border-radius: 5px;
  position: relative; */
  width: 250%;
  height: 250%;
  left: -385px;
  top: -310px;
  transform: scale(0.4);
  border: none;
  opacity: 0.02;
}
</style>