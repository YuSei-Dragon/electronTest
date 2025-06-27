<template>
    <div v-if="$store.state.showHelp">
        <div class="help-block">
            <div class="help-title">指令提示帮助</div>
            <div class="help-title-little">指令皆以"/"开头，并以空格间隔指令内参数</div>
            <div class="help-title-little">实例：/video show</div>
            <div class="help-for" v-for="helpOne in helpList">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                helpList:[
                    {
                        name:"/video",
                        text:"用于控制小窗口的指令起手",
                        orderList:[
                            {
                                name:"show",
                                text:"控制小窗显示"
                            },
                            {
                                name:"hide",
                                text:"控制小窗隐藏"
                            },
                            {
                                name:"opacity 0.2",
                                text:"控制小窗透明度为0.2（具体数值随意更改）"
                            },
                            {
                                name:"address https://www.bilibili.com/",
                                text:"打开具体网页（具体网页随意改变）注意！有的网页（B站）点击里面会跳出新页面！如果要播放视频，需要直接进去b站具体的视频地址复制进来（可用于大部分在线播放源），或者直接拉伸弹出的小窗看（B站等加密播放网页，在当前页面无法获取播放源）。"
                            },
                            {
                                name:"url saolei",
                                text:"网页跳转的快捷指令，存放着开发者日常用的最多的摸鱼网站。可通过/setting指令导入的json文件中的urlList进行个性化定制"
                            },
                            {
                                name:"url",
                                text:"如果不输入具体的快捷网页名称，则会展示所有的快捷网页"
                            },
                            {
                                name:"bigger 0.5",
                                text:"当前网页看不清楚进行局部放大的处理方式，具体大小需要实际观看进行调整（具体数值随意更改）"
                            },

                        ]
                    },
                    {
                        name:"/setting",
                        text:"替换基本配置文件，用来控制页面基本信息和部分指令效果"
                    },
                    {
                        name:"/help",
                        text:"展示/隐藏指引文本",
                        orderList:[
                            {
                                name:"true",
                                text:"展示"
                            },
                            {
                                name:"false",
                                text:"隐藏"
                            },
                        ]
                        
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.help-block{
    padding: 10px;
}
.help-title{
    font-size: 12px;
    color: #666;
}
.help-title-little{
    font-size: 10px;
    color: #999;
    margin: 4px 0px;
}
</style>