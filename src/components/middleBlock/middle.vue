<template>
    <div ref="middleBlock" class="middleBlock">
        <searchBlock/>
        <mesList @changeMesList="changeByIndex" :mesList="mesList" :height="mesListHeight"/>
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
            mesListHeight : 0,
        }
    },
    mounted(){
    window.addEventListener('resize',this.change)
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.change)
    },
    methods:{
        changeByIndex(index){
            console.log("change List index:",index)
            this.$emit('changeList',index)
        },
        change(){
            const height = this.$refs.middleBlock.offsetHeight
            this.mesListHeight = height
            // console.log("change")
        }
    },
    components:{
        searchBlock,
        mesList,
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