<template>
    <div class="middleBlock">
        <searchBlock/>
        <mesList @changeMesList="changeByIndex" :mesList="mesList"/>
    </div>
</template>
<script>
import searchBlock from "./search"
import mesList from "./mesList"
export default {
    props:{
        mesList:{
            type:Array,
            default: []
        }
    },
    data(){
        return{

        }
    },
    methods:{
        changeByIndex(index){
            console.log("change List index:",index)
            this.$emit('changeList',index)
        }
    },
    components:{
        searchBlock,
        mesList
    }
}
</script>
<style scoped>
  .middleBlock{
    width: 259px;
    height: 100%;
    float: left;
    background: #F0F0F1;
    margin-left: -260px;
    padding-top: 60px;
    border-right: 1px solid #DEE0E2;
  }
</style>