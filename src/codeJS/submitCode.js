export default {
    //用于存放所有的指令/js方法
    consoleSomething: function (data) {
        console.log("test", data)
    },
    changeVideoIndex: function (index, that) {
        that.$store.commit('changeVideoIndex', index)
        //改变video的坐标，设置为-1直接隐藏
    },
    changeUrl(url, that) {
        that.$store.commit('changeUrl', url)
    },
    changeVideoOpacity(opacity, that) {
        that.$store.commit('changeVideoOpacity', opacity)
    },
    logError(log, that) {
        that.$store.commit('logError', log)
    },
    changeBiggerIframe(res, that) {
        that.$store.commit('changeBiggerIframe', res)
    },
    changeUrlByList(name, that) {
        that.$store.commit('changeUrlByList', name)
    },
    getUrlList(that) {
        that.$store.commit('getUrlList')
    },
    initMes(that, mes) {
        that.$store.commit('setInitMes', mes)
    },
    codeAction(mes, that) {
        //传入外部this(that)
        mes = mes.trim()
        const result = mes.split(/\s+/)
        //通过正则表达式 去掉中间的空格
        //分隔形成指令数组
        this.logError("", that)
        //清空错误提示
        if (result[0] == "/video" && result[1]) {
            //如果是/video 指令
            console.log("触发了/video")
            if (result[1] == 'show' && !result[2]) {
                this.changeVideoIndex(1, that)
                // this.changeVideoIndex(result[2],that)
                //修改是否展示video
                this.logError("展示video", that)
            } else if (result[1] == 'hide' && !result[2]) {
                this.changeVideoIndex(-1, that)
                this.logError("隐藏video", that)
            } else if (result[1] == 'opacity' && result[2]) {
                this.changeVideoOpacity(result[2], that)
                this.logError("修改透明度成功！", that)
                //修改video透明度
            } else if (result[1] == 'address' && result[2]) {
                this.changeUrl(result[2], that)
                this.logError("修改地址成功！", that)
                //如果有网址，就使用输入的网址，不然就用默认的
            } else if (result[1] == 'bigger' && result[2]) {
                this.changeVideoIndex(1, that)
                //自动展示设置true防止报错
                this.changeBiggerIframe(result[2], that)
                this.logError("应用更大的video", that)
                //修改展示的大小
            } else if (result[1] == 'url') {
                if (result[2]) {
                    this.changeUrlByList(result[2], that)
                    this.logError("通过List展示修改网站地址成功！", that)
                    //修改展示的大小 
                } else {
                    this.logError("展示网页列表", that)
                    this.getUrlList(that)
                }

            } else {
                this.logError("输入了未知的命令！", that)
            }

        } else if (result[0] == "/setting") {
            //如果是/setting 指令
            console.log("触发了/setting")
            const setting = document.getElementById("settingClick")
            // console.log(setting)
            this.logError("请选择导入的数据文件！", that)
            setting.onchange = (e) => {
                console.log("触发了setting的修改事件")
                // const textData = e.target.result
                // console.log(textData, e, e.target)
                const file = e.target.files[0];
                // console.log(file)
                var reader = new FileReader()
                reader.readAsText(file)
                reader.onload = () => {
                    console.log("读取文件信息加载完毕")
                    const content = reader.result
                    // .trim()
                    // let fixedContent = content.replace(/(\w+):/g, '"$1":')
                    // fixedContent = fixedContent.replace(/'/g, '"');
                    // console.log((new Function('return ' + content))())
                    // console.log(JSON.parse(content))
                    // console.log(fixedContent)
                    // console.log(JSON.parse(fixedContent))
                    this.initMes(that, JSON.parse(content))
                }
            }

            setTimeout(() => {
                setting.click()
            }, 300)
        }else if (result[0] == "/help") {
            console.log("触发了/help")
            if(result[1]){
                that.$store.commit('setShowHelp', result[1])
                //控制要不要显示帮助指引
            }else{
                this.logError("指令不完整/指令有误！", that)
            }
            
        }
        else {
            // console.log(that)
            this.logError("输入了未知的命令！", that)
        }

    },

}