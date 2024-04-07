<template>
    <div class="rightBlock">
        <rightTop :item="item"/>
    </div>
</template>
<script>
import rightTop from "./rightTop"
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
  },
  data() {
    return {

    }
  },
  methods:{

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