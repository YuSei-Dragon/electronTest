<template>
    <div class="ListBolck" v-if="isShowBlock">
        <div v-for="(item,index) in functions" :style="funGetSty(item)" :key="index" class="functionBlock" @click="clickChoice(item)" @mouseover="hasChoiceFuction(item)" @mouseout="isntChoice()">
            <img class="functionImg" :src="require('../../.././public/img/'+item.srcText)" alt="" :style="getOpacity(item)">
            <!-- <img class="functionImg" :src="require('../../.././public/img/'+item.src+'.png')" alt="" :style="getOpacity(item)"> -->
            <div class="functionText" :style="getOpacity(item)">{{item.name}}</div>
        </div>
    </div>
     
</template>
<script>
export default {
    data(){
        return{
            functions:[
        {
          name:'信息',
          src:'message',
          srcText:""
        },
        // {
        //   name:'邮件',
        //   src:'email'
        // },
        {
          name:'文档',
          src:'document'
        },
        {
          name:'日程',
          src:'date'
        },
        {
          name:'会议',
          src:'meeting'
        },
        {
          name:'智能表格',
          src:'smartTable'
        },
        {
          name:'工作台',
          src:'desk'
        },
        {
          name:'通讯录',
          src:'address'
        },
        {
          name:'微盘',
          src:'tiny'
        },
        {
          name:'高级功能',
          src:'high'
        },
        // {
        //   name:'更多',
        //   src:'more'
        // },
        ],
            choice : '信息',
            isInBlock :false,
            flow: '',
            isShowBlock:false,
        }
    },
    watch:{
      "choice":function(newV){
        this.init()
      }
    },
    methods:{
      getImgName(item){
        console.log(item)
        let res = ""
        res += item.src
        if(this.$store.state.isNewStyle){
          res = "new/" + res
          console.log(res)
          if(item.name == this.choice){
            res+="1"
            //1584e9
          }else{
            res+="2"
            //7C8B9D
          }
        }
        return res
        
      },
      funGetSty(item){
        if(item.name == this.choice&&this.isInBlock == true){
            return this.$store.state.isNewStyle?'background:#aad3f1;':'background:#578ACF'
        }else if(item.name == this.choice){
            return  this.$store.state.isNewStyle?'background:#b4d7f0;':'background:#4C83CC;'
        }else if(item.name == this.flow){
            return this.$store.state.isNewStyle?'background:#c4d6e6;':'background:#427CC9'
        }else{
            return ''
        }
      },
      hasChoiceFuction(item){
        if(item.name == this.choice){
            this.isInBlock = true
        }
        this.flow = item.name
      },
      isntChoice(){
        this.isInBlock = false
        this.flow = ''
      },
      clickChoice(item){
        this.choice = item.name
      },
      getOpacity(item){
        let res = ""
        if(this.$store.state.isNewStyle){
          if(item.name == this.choice){
            res+="color:#2483ff;"
          }else{
            res += "color:#7C8B9D;"
          }
        }else{
          if(item.name == this.choice){
              res+= "opacity:1;"
            }
            else{
              res+= "opacity:0.6;"
            }
        }
          
          return res
      },
      init(){
        this.functions.map(item=>{
          // item.srcText = item.src + '.png'
          item.srcText = this.getImgName(item) + '.png'
          // item.srcText = ()=>{
          //   return require(item.srcText)
          // } 
          // require(item.srcText)
        })
        console.log(this.functions)
        this.isShowBlock = true
      }
    },
    mounted(){
      this.init()
    }
}
</script>
<style scoped>
  .ListBolck{
    width:100%;
    height:100%;
    /* overflow: scroll; */
    margin-top: -4px;
  }
  .functionBlock{
    width: 47.5px;
    height: 47.5px;
    margin: 9px auto;
    border-radius: 6px;
  }
  .functionImg{
    /* width: 34px;
    height: 28px;
    padding-top: 2px; */
    width: 25px;
    height: 24px;
    padding-top: 4.5px;
  }
  .functionText{
    /* margin-top: -5px; */
    margin-top: -2.5px;
    color: #fff;
    font-size: 10px;
  }
</style>