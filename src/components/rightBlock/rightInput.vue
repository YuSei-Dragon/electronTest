<template>
    <div class="InputBlock" :style="getWidth" >
        <div v-for="(item,index) in buttonsList" :key="index">
            <div class="buttonsBlock">
                <img :style="getSize(item)" :src="require('../../.././public/img/'+item.src)" alt="">
            </div>
            <div v-if="item.isMore" class="buttonsMore">
                <div class="moreText">▾</div>
            </div>
        </div>
        <div class="rightButtons">
            <img src="../../.././public/img/lighting.png" alt="">
            <div @click="openTest" class="rightButtonText">快速会议
                <div v-show="showTestBlock" class="TestBlock"> 
                    <a target='blank' href="tencent://message/?uin=3446378115&Site=qq号码说明&Menu=yes">123</a>
                </div>
            </div>
        </div>
        <textarea :onfocus="focus()" ref="textarea" id="myTextarea"  v-model="inputMes" autocomplete="false" class="input" type="text"></textarea>
        <div class="submitButton">发送(S)</div>
        <input class="setting-click" id="settingClick" type="file"/>
        <div class="log">{{$store.state.log}}</div>
        
    </div>
    
</template>
<script>
import orders from "../../codeJS/submitCode"
export default {
  props: {
    item:{
        default:()=>({}),
        type:Object,
    },
    long:{
        default: 470,
        type:Number,
    }
  },
  components:{

  },
  data() {
    return {
        buttonsList:[
            {
                name:'smile',
                isMore: false,
                src: 'smile.png',
                height: '17.5px',
                width: '17.5px',
                marTop:'5px',
            },
            {
                name:'cut',
                isMore: true,
                src: 'cut.png',
                height: '16px',
                width: '16px',
                marTop:'5px',
            },
            {
                name:'picture',
                isMore: false,
                src: 'picture.png',
                height: '20px',
                width: '16px',
                marTop:'3.5px',
            },
            {
                name:'text',
                isMore: false,
                src: 'text.png',
                height: '18.5px',
                width: '18px',
                marTop:'4px',
            },
            {
                name:'preMeeting',
                isMore: true,
                src: 'preMeeting.png',
                height: '23px',
                width: '19px',
                marTop:'1.5px',
            },
            {
                name:'file',
                isMore: true,
                src: 'file.png',
                height: '20px',
                width: '19px',
                marTop:'3px',
            },
            {
                name:'phone',
                isMore: true,
                src: 'phone.png',
                height: '18px',
                width: '18px',
                marTop:'3.5px',
            },
            {
                name:'moreRightBottom',
                isMore: false,
                src: 'moreRightBottom.png',
                height: '19px',
                width: '19px',
                marTop:'3px',
            },
            {
                name:'mesRecord',
                isMore: false,
                src: 'mesRecord.png',
                height: '24px',
                width: '25px',
                marTop:'1px',
            },
        ],
        inputMes:"",
        submitList : [],
        ListKey : -1,
        logOpacity: 1,
        showTestBlock: false,
    }
  },
  mounted(){
    const that = this
    this.$refs.textarea.addEventListener('keydown',function(e){
        // console.log(e.keyCode)
        const textarea = document.getElementById("myTextarea")
        if(e.keyCode===13){
            that.submit(that.inputMes)
            e.preventDefault()
            //回退回车的效果
            that.submitList.push(that.inputMes)
            that.ListKey = -1
            //如果已经向上查过了，就直接重置方便重新进行排序
            //保留输入记录
            that.inputMes = ''
            // console.log(that.submitList)
        }else if(e.keyCode === 38){
            // console.log("last mes")
            //如果检测到按下了 👆 按钮
            if(that.ListKey===-1&&that.submitList.length>0){
                //如果是第一次查找记录，而且确实有记录
                that.ListKey = that.submitList.length-1
                that.inputMes = that.submitList[that.ListKey]
                //设置读取到的数据
            }else if(that.ListKey !=-1&&that.submitList.length>0){
                //如果不是第一次查找
                that.ListKey--
                if(that.ListKey>=0){
                    that.inputMes = that.submitList[that.ListKey]
                }
            }
            // console.log(that.inputMes?.length)
            // console.dir(textarea.setSelectionRange,textarea.createTextRange)
            if(textarea.setSelectionRange){
                textarea.focus()
                setTimeout(()=>{
                    textarea.setSelectionRange(-1,-1)
                },10)
            //focus需要一定时间，而这里并没有组件变化，所以nextTick无效，要设置延时
            }else if(textarea.createTextRange){
                let range = textarea.createTextRange
                range.collapse(true)
                range.moveEnd('character',that.inputMes?.length)
                range.moveStart('character',that.inputMes?.length)
                range.select()
            }
        }else if(e.keyCode === 40){
            //如果检测到按下了 👇按钮
            if(that.ListKey<that.submitList.length&&that.submitList.length>0){
                //如果已经向上找过一次记录
                that.inputMes = that.submitList[that.ListKey+1]
                that.ListKey++
                // console.log(that.inputMes?.length)
            }
        }
        
    })
  },
  watch:{
    long(newVal,oldVal){
        // console.log(newVal)
        //监听数据变化
    }
  },
  computed:{
    getWidth(){
        const width = 'width:' + (this.long - 520) + 'px;'
        // console.log(width)
        return width
    }
  },
  methods:{
    getSize(item){
        let sty = 'height:'+item.height + ';width:'
        + item.width + ';margin-top:' + item.marTop +';'
        return sty
    },
    submit(mes){
        // console.log(this.$store.state.videoIndex)
        orders.codeAction(mes,this)
    },
    // getLogSty(){
    //     return 'opacity:' + this.logOpacity + ';'
    // }
    focus(){
        // console.log("focus")
    },
    openTest(){
        console.log("显示/隐藏testBlock")
        this.showTestBlock = !this.showTestBlock
    }
  }
}
</script>
<style scoped >
.InputBlock{
    width: 470px;
    height: 150px;
    position: absolute;
    bottom:18px;
    left: 340px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #DEE0E2;
}
.buttonsBlock{
    margin-top: 7px;
    margin-left: 6px;;
    width: 28px;
    height: 28px;
    float: left;
    text-align: center;
}
.buttonsBlock:hover{
    background: #E6E7E8;
}
.buttonsMore{
    float: left;
    width: 10px;
    height: 28px;
    margin-top: 5.5px;
    margin-right: 3px;
    color:#6C7075;
    text-align: center;
}
.buttonsMore:hover{
    background: #E6E7E8;
}

.moreText{
    margin-top: 4px;
    margin-left: -2px;
}
.rightButtons{
    float: right;
    padding: 3px;
    margin: 6px;
    border-radius: 5px;
}
.rightButtons:hover{
    background: #EAEAEC;
}
.rightButtons img{
    width: 20px;
    height: 20px;
    float: left;
}
.rightButtonText{
    position: relative;
    float: left;
    font-size: 12.5px;
    padding-top: 2px;
}
.TestBlock{
    position: absolute;
    top: 0;
    left: -100px;
    width: 100px;
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
    z-index: 99;
}
.input{
    padding: 10px;
    padding-top: 5px;
    border: 0;
    width: 95%;
    height: 35%;
    outline: none;
    font-weight: 500;
    resize: none;
    overflow: hidden;
}
.input:hover{
    overflow-y: scroll;
}
.input::-webkit-scrollbar {
    width: 15px;
}
.input::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
}
.input::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
    min-width: 32px;
    min-height: 32px;
}
.input::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
}
.submitButton{
    color: #6D7176;
    font-size: 13px;
    float: right;
    margin-right: 12px;
    margin-top: 10px;
}
.submitButton:hover{
    color: #9DA0A3;
}
.log{
    color: #6D7176;
    font-size: 13px;
    float: left;
    margin-left: 12px;
    padding-top: 10px;
    opacity: 0.5;
    width: 80%;
    height: 28px;
    overflow: hidden;
}
.log:hover{
    opacity: 1;
    overflow: scroll;
    padding: 0px;
    height: 50px;
}
.log::-webkit-scrollbar {
    width: 17px;
}
.log::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
}
.log::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
    /* min-width: 32px;
    min-height: 32px; */
}
.log::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
}
.setting-click{
    display: block;
    opacity: 0;
    height: 1px;
    width: 1px;
    padding: 0px;
    margin: 0px;
    border: none;
}
</style>