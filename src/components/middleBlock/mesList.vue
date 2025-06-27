<template>
    <div class="mesList" :style="getMesListBlock()">
        <div :style="getSry(item,index)" class="listBlock" @click="choiceMes(item,index)" v-for="(item,index) in mesList" :key="index">
            <img class="listImg" :src="require('../../.././public/img/' + item.src)  " alt="">
            <div v-show="item.newMesNum>0" class="isNew"></div>
            <div class="title">
                <div class="top">
                    <div class="titleText" :style="getTitleTextStyle(item)">{{item.title}}</div>
                    <div :class="getTagType(item)" v-if="item.tag&&item.tag!=''">
                        {{item.tag}}
                    </div>
                </div>
                <img v-if="item.isIgnore" class="ignore" :src="getIgnore(item)" alt="">
                <div class="bottom">
                    <div class="mesText" :style="getMesTextStyle(item)">{{getmesText(item)}}</div>
                    <div class="timeText" :style="getMesTextStyle(item)">{{item.time}}</div>
                </div>
            </div>
            <!-- <div v-show="index==$store.state.showVideoIndex" >
              <iframe :src="$store.state.url" class="video" ></iframe>
            </div> -->
        </div>
        <helpBlock></helpBlock>
        
    </div>
</template>
<script>
import helpBlock from "./helpBlock"
export default {
    props:{
        mesList:{
            type:Array,
            default:[]
        },
        height:{
          default:470,
          type:Number,
        }
    },
    watch:{
      height(newVal,oldVal){

      },
    },
    components:{
      helpBlock
    },
    data(){
        return{
            choice: '',
        }
    },
    methods:{
        init(){
          
        },
        choiceMes(item,index){
            console.log(index)
            this.choice = item.title
            this.$emit('changeMesList',index)
        },
        getSry(item,index){
            let res = ''
            if(item.title==this.choice){
              if(this.$store.state.isNewStyle){
                res +="background:#208eff;"
              }else{
                res +="background:#D1DEF0;"
              }
            }
            // if(index==this.$store.state.showVideoIndex){
            //   res+= "height:220px;"
            // }
            return res
            
        },
        getTagType(item){
            if(item.tagType=='info'){
                return 'infoTag'
            }else if(item.tagType=='success'){
                return 'successTag'
            }
        },
        getIgnore(item){
            if(item.title!=this.choice){
                return require('../../.././public/img/'+ (this.$store.state.isNewStyle?'new/':'')+'ignore1.png')
            }else{
                return require('../../.././public/img/'+(this.$store.state.isNewStyle?'new/':'')+'ignore2.png') 
            }
        },
        getmesText(item){
            let text = item.detail
            if(item.newMesNum>0){
                text = '[' + item.newMesNum+ '条]' + text
            }
            return text
        },
        getMesListBlock(){
          const sty = "height:" + (this.height-120) +"px;"
          return sty
        },
        getMesTextStyle(item){
          let res = ""
          if(item.title==this.choice&&this.$store.state.isNewStyle){
            res +="color:#b4d4fa;"
          }
          return res
        },
        getTitleTextStyle(item){
          let res = ""
          if(item.title==this.choice&&this.$store.state.isNewStyle){
            res +="color:#fff;"
          }
          return res
        },
    },
    mounted(){
      this.init()
    }

}
</script>
<style scoped>
  .mesList{
    width: 100%;
    margin-top: 9px;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .mesList:hover{
    overflow-y: scroll;
  }
  .mesList::-webkit-scrollbar {
    width: 17px;
  }
  .mesList::-webkit-scrollbar-corner {
      background: rgba(0,0,0,0);
  }
  .mesList::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 6px;
      border: 4px solid rgba(0,0,0,0);
      background-clip: content-box;
      min-width: 32px;
      min-height: 32px;
  }
  .mesList::-webkit-scrollbar-track {
      background-color: rgba(0,0,0,0);
  }
  .listBlock{
    width: 252px;
    margin: 0px 3px;
    height: 62px;
    border-radius: 5px;
    position: relative;
  }
  .isNew{
    width: 11px;
    height: 11px;
    border-radius: 5px;
    position: absolute;
    top: 6px;
    left: 42px;
    background: #F04A3E;
  }
  .listBlock:hover{
    background: #E4E4E6;
  }
  .listImg{
    float: left;
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
  }
  .video{
    width: 240px;
    /* margin: 0px 3px; */
    height: 150px;
    border-radius: 5px;
    position: relative;
    border: none;
  }
  .title{
    float: left;
    width: 192px;
    height: 62px;
    position: relative;
  }
  .top{
    width: 100%;
    height: 31px;
  }
  .titleText{
    font-size: 13px;
    margin-top: 10px;
    padding-left: 4px;
    float: left;
  }
  .infoTag{
    color: #2483ff;
    background: #DCE5F1;
    text-align: center;
    padding: 1.5px 4px 2px 4px;
    margin-top: 11.5px;
    margin-left: 6px;
    font-size: 10px;
    float: left;
  }
  .successTag{
    color: #21c052;
    background: #DCECDF;
    text-align: center;
    padding: 1.5px 4px 2px 4px;
    margin-top: 11.5px;
    margin-left: 6px;
    font-size: 10px;
    float: left;
  }
  .ignore{
    position: absolute;
    top: 13px;
    right: 16px;
    width: 12px;
    height: 13px;
  }
  .bottom{
    display: flex;
    margin-top: 2px;
  }
  .mesText{
    flex: 1;
    font-size: 12px;
    color: #8C8D8F;
    padding-right: 15px;
    padding-left: 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .timeText{
    width: fit-content;
    font-size: 11px;
    color: #8C8D8F;
    padding-right: 12px;
    padding-top: 0.5px;
  }
</style>