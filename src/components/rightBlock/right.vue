<template>
    <div ref="rightBlock" class="rightBlock">
        <rightTop :item="item" :long="rightBlockWidth"/>
        <rightMen :item="item" :height="rightBlockMenHeight" :memberList="memberList"/>
        <rightTest :item="item" :long="rightBlockWidth" :height="rightBlockMenHeight" :RandomMesList="RandomMesList"/>
        <rightInput :item="item" :long="rightBlockWidth" @initMes="initMes"/>
    </div>
</template>
<script>
import rightTop from "./rightTop"
import rightTest from "./rightTest"
import rightMen from "./rightMen"
import rightInput from "./rightInput"
export default {
  name: 'HelloWorld',
  props: {
    item:{
        default:()=>({}),
        type:Object,
    }
  },
  watch:{
    "$store.state.initMes":function(newV){
      console.log("检测到初始化数据memberList/chatDetail变化")
      if(newV.memberList){
        this.memberList = newV.memberList
      }
      if(newV.chatDetail){
        this.RandomMesList = newV.chatDetail
      }
      if(newV.urlList){
        console.log("改变了urlList")
        this.$store.commit("setUrlList",newV.urlList)
      }
      
    }
  },
  components:{
    rightTop,
    rightTest,
    rightMen,
    rightInput,
  },
  data() {
    return {
      rightBlockWidth : 0,
      rightBlockMenHeight : 0,
      memberList:[],
      RandomMesList:[
          "今天的OA不显示验证码呢",
          "稍等，我们检查下",
          "还是没有显示验证码",
          "各位同事，OA所在天翼云PaaS有点问题，目前正在找平台方处理，恢复之后第一时间在群里通知",
          "各位同事，OA已恢复正常，请大家正常使用~",
          "OA点击登录 一致跳转至登录界面",
          "具体有什么提示吗，请私发我下",
          "打印导出PDF报错了，",
          "@李兰  ",
          "好的，我们检查下",
          "本期推文与大家分享的是👉以数字孪生技术推动网络资源管理升级👈。数字孪生作为一种新兴的技术手段，通过对各种数字要素、数据场景进行虚实交互和模拟仿真，构建出与现实对应的“虚拟空间”，辅助提升决策效率，提升管理效率！一起来看一下数字孪生技术如何赋能资源管理!",
          "@所有人  ",
          "OA网页链接超时，这是什么问题啊，VPN是连着的",
          "访问OA不要挂VPN，会冲突",
          "登录页面后跳转不过去，也没有任何的提示",
          "具体有什么提示吗，请私发我下",
          "稍等，我们检查下",
          "还是没有显示验证码",
          "各位同事，OA所在天翼云PaaS有点问题，目前正在找平台方处理，恢复之后第一时间在群里通知",
          "各位同事，OA已恢复正常，请大家正常使用~",
        ]
    }
  },
  mounted(){
    window.addEventListener('resize',this.change)
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.change)
  },
  methods:{
    change(){
      const width = this.$refs.rightBlock.offsetWidth
      const height = this.$refs.rightBlock.offsetHeight
      this.rightBlockWidth = width
      this.rightBlockMenHeight = height-64
      // console.log("change")
    },
    initMes(data){
      console.log("录入数据")
      this.memberList = data.memberList
    }
  }
}
</script>
<style scoped >
   .rightBlock{
    width: 100%;
    height: 100%;
    float: left;
    background: #F6F6F7;
  }
</style>