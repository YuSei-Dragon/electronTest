import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// /video show 1 
//设置video组件显示(-1则是隐藏)
// /video opacity 0.5
//设置video 透明度为0.5
// /video address 网址地址
//设置video 打开的网址地址
const state = {
    //通过this.$store.state.? 获取
    showVideoIndex: -1,
    // url:'https://www.bilibili.com/',
    url: "https://neos.moecube.com/",
    urlList: [
        {
            name: 'bilibili',
            url: "https://www.bilibili.com/",
            mark: 'b站',
        }, {
            name: 'ygo',
            url: "https://neos.moecube.com/",
            mark: '游戏王',
        }, {
            name: 'saolei',
            url: 'https://www.minesweeper.cn/',
            mark: '扫雷',
        }, {
            name: 'pvz',
            url: 'https://game.moe.ms/',
            mark: '植僵',
        }, {
            name: 'baidu',
            url: 'https://www.baidu.com/',
            mark: '百度',
        }, {
            name: 'qq',
            url: 'https://im.qq.com/',
            mark: 'QQ',
        }
    ],
    videoOpacity: 0.2,
    log: ' ',
    biggerIframe: false,
    initMes: {},
    showHelp:false,
    isNewStyle:true,
    //是否使用新版本企业微信ui

}//数据储存
const actions = {
    //this.$store.dispatch("方法名字")
    //用于异步操作 mutations 里面的方法

}//事件相应
const mutations = {
    //具体的数据操作方法写在这里
    //this.$store.commit("方法名",参数)
    changeVideoIndex(state, index) {
        state.showVideoIndex = index
    },
    changeUrl(state, url) {
        state.url = url
    },
    changeVideoOpacity(state, opacity) {
        state.videoOpacity = opacity
    },
    logError(state, log) {
        state.log = log
    },
    changeBiggerIframe(state, res) {
        state.biggerIframe = res
    },
    changeUrlByList(state, name) {
        state.urlList.map((item) => {
            if (item.name == name) {
                state.url = item.url
            }
        })
    },
    getUrlList(state) {
        let res = ''
        state.urlList.map((item) => {
            res += item.name + '(' + item.mark + ')' + " _ "
        })
        state.log = res.slice(0, res.length - 3)
    },
    setUrlList(state,data) {
        state.urlList = data
    },
    setInitMes(state, mes) {
        state.initMes = mes
    },
    setShowHelp(state,data){
        state.showHelp = data
        console.log("state.showHelp",data)
    },
    setNewStyle(state,data){
        state.isNewStyle = data
    },

}//操作数据
const getters = {
    //类似与computed，进行缓存
}//数据加工

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})