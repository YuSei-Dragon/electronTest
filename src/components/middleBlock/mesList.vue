<template>
    <div class="mesList">
        <div :style="getSry(item)" class="listBlock" @click="choiceMes(item,index)" v-for="(item,index) in mesList" :key="index">
            <img class="listImg" :src="require('../../.././public/img/' + item.src)  " alt="">
            <div v-show="item.newMesNum>0" class="isNew"></div>
            <div class="title">
                <div class="top">
                    <div class="titleText">{{item.title}}</div>
                    <div :class="getTagType(item)" v-if="item.tag&&item.tag!=''">
                        {{item.tag}}
                    </div>
                </div>
                <img v-if="item.isIgnore" class="ignore" :src="getIgnore(item)" alt="">
                <div class="bottom">
                    <div class="mesText">{{getmesText(item)}}</div>
                    <div class="timeText">{{item.time}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        mesList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            choice: '',
        }
    },
    methods:{
        choiceMes(item,index){
            console.log(index)
            this.choice = item.title
            this.$emit('changeMesList',index)
        },
        getSry(item){
            if(item.title==this.choice){
                return "background:#D1DEF0;"
            }else{
                return ""
            }
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
                return require('../../.././public/img/ignore1.png')
            }else{
                return require('../../.././public/img/ignore2.png') 
            }
        },
        getmesText(item){
            let text = item.detail
            if(item.newMesNum>0){
                text = '[' + item.newMesNum+ '条]' + text
            }
            return text
        }
    },

}
</script>
<style scoped>
  .mesList{
    height: 100vh;
    width: 100%;
    margin-top: 9px;
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
    top: 9px;
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