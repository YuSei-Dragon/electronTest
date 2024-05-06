<template>
    <div ref="rightBlock" class="rightBlock">
        <rightTop :item="item" :long="rightBlockWidth"/>
        <rightMen :item="item" :height="rightBlockMenHeight"/>
        <rightTest :item="item" :long="rightBlockWidth" :height="rightBlockMenHeight"/>
        <rightInput :item="item" :long="rightBlockWidth"/>
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