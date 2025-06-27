<template>
    <div class="leftBlock" :style="$store.state.isNewStyle?'background:#c8e1f3;':''">
      <img class="userHead" src="../../.././public/img/test.jpg" alt="">
      <functionList/>
      <div @mouseover="mouseOver()" @click="clicked()" @mouseout="mouseOut()" @blur="clickBlur()" class="changeEnterprise" :style="getStr()">
        <img class="enterpriseImg" :src="require('../../.././public/img/'+($store.state.isNewStyle?'new/':'') +'enterprise.png')" alt="">
      </div>
    </div>
</template>
<script>
import functionList from "./functionList"
export default {
    data(){
        return{
            isChoice : false,
            isFlow: '',
        }
    },
    components:{
        functionList
    },
    methods:{
        getStr(){
            if(this.isChoice == true&&this.isFlow == true){
                return this.$store.state.isNewStyle?'background:#aad3f1;':'background:#578ACF'
            }else if(this.isChoice){
                return  this.$store.state.isNewStyle?'background:#b4d7f0;':'background:#4C83CC;'
            }else if(this.isFlow){
                return this.$store.state.isNewStyle?'background:#c4d6e6;':'background:#427CC9'
            }else{
                return ''
            }
        },
        mouseOver(){
            this.isFlow = true
        },
        clicked(){
            this.isChoice = true
        },
        mouseOut(){
            this.isFlow = false
            this.isChoice = false
        },
        clickBlur(){
            console.log(123321)
            this.isChoice = false
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.leftBlock{
    width: 60px;
    height: 100%;
    background: #3975C6;
    float: left;
    text-align: center;
    margin-left: -320px;
    position: relative;
  }
  .userHead{
    margin-top: 20px;
    width: 36px;
    height: 36px;
    border-radius: 5px;
    /* margin-bottom: 5px; */
  }
  .changeEnterprise{
    position: absolute;
    left: 6.25px;
    /* bottom: 0; */
    bottom: 5px;
    width: 47.5px;
    height: 47.5px;
    text-align: center;
  }
  .enterpriseImg{
    /* width: 30px; */
    width:24px;
    /* height: 26px; */
    height: 24px;
    margin-top: 10px;
  }
</style>