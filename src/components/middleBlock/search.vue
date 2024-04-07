<template>
    <div class="searchBlock">
        <img class="searchImg" src="../../.././public/img/search.png" alt="">
        <input placeholder="搜索" @blur="inputBlur()" @focus="inputFocus()" :style="getInputSty()" class="search">
        <div class="addButton">
            <img class="addImg" src="../../.././public/img/add.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isFocus:false
        }
    },
    methods:{
        inputFocus(){
            this.isFocus = true
        },
        inputBlur(){
            this.isFocus = false
        },
        getInputSty(){
            if(this.isFocus){
                return "background:#fff;outline:1.5px solid #4B95F3;"
            }else{
                return ""
            }
        },
    }

}
</script>
<style scoped>
    .searchBlock{
        margin-top: -38px;
        width: 100%;
        height: 32px;
        position: relative;
    }
    .searchImg{
        position: absolute;
        top: 8px;
        left: 27px;
        width: 15px;
        height: 15px;
    }
    .search{
        width: 188px;
        height: 100%;
        margin-left: 16px;
        background: #E5E5E7;
        float: left;
        border: 0;
        border-radius: 2px;
        outline: none;
        text-indent: 36px;
    }
    .search:hover{
        background: #D9DADB;
    }
    .addButton{
        width: 32px;
        height: 32px;
        margin-left: 8px;
        background: #E5E5E7;
        float: left;
        text-align: center;
        border-radius: 3px;
    }
    .addButton:hover{
        background: #D9DADB;
    }
    .addImg{
        width: 20px;
        height: 20px;
        margin-top: 6px;

    }
</style>