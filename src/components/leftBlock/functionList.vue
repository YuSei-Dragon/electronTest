<template>
    <div class="ListBolck">
        <div v-for="(item,index) in functions" :style="funGetSty(item)" :key="index" class="functionBlock" @click="clickChoice(item)" @mouseover="hasChoiceFuction(item)" @mouseout="isntChoice()">
            <img class="functionImg" :src="require('../../.././public/img/'+item.src)" alt="" :style="getOpacity(item)">
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
          src:'message.png'
        },
        {
          name:'邮件',
          src:'email.png'
        },
        {
          name:'文档',
          src:'document.png'
        },
        {
          name:'日程',
          src:'date.png'
        },
        {
          name:'会议',
          src:'meeting.png'
        },
        {
          name:'工作台',
          src:'desk.png'
        },
        {
          name:'通讯录',
          src:'address.png'
        },
        {
          name:'更多',
          src:'more.png'
        },
        ],
            choice : '信息',
            isInBlock :false,
            flow: '',
        }
    },
    methods:{
        funGetSty(item){
        if(item.name == this.choice&&this.isInBlock == true){
            return 'background:#578ACF'
        }else if(item.name == this.choice){
            return 'background:#4C83CC'
        }else if(item.name == this.flow){
            return 'background:#427CC9'
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
            if(item.name == this.choice){
                return "opacity:1;"
            }
            else{
                return "opacity:0.6;"
            }
        },
    },
    mounted(){

    }
}
</script>
<style scoped>
  .ListBolck{
    width:100%;
    height:100%;
    /* overflow: scroll; */
  }
  .functionBlock{
    width: 47.5px;
    height: 47.5px;
    margin: 9px auto;
  }
  .functionImg{
    width: 34px;
    height: 28px;
    padding-top: 2px;
  }
  .functionText{
    margin-top: -5px;
    color: #fff;
    font-size: 10px;
  }
</style>