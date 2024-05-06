export default{
    //用于存放所有的指令/js方法
    consoleSomething :function(data){
        console.log("test",data)
    },
    changeVideoIndex :function(index,that){
        that.$store.commit('changeVideoIndex',index)
        //改变video的坐标，设置为-1直接隐藏
    },
    changeUrl(url,that){
        that.$store.commit('changeUrl',url)
    },
    changeVideoOpacity(opacity,that){
        that.$store.commit('changeVideoOpacity',opacity)
    },
    logError(log, that){
        that.$store.commit('logError',log)
    },
    changeBiggerIframe(res,that){
        that.$store.commit('changeBiggerIframe',res)
    },
    codeAction(mes,that){
        //传入外部this(that)
        mes = mes.trim()
        const result = mes.split(/\s+/)
        //通过正则表达式 去掉中间的空格
        //分隔形成指令数组
        this.logError("",that)
        //清空错误提示
        if(result[0]=="/video"&&result[1]){
            //如果是/video 指令
            console.log("触发了/video")
            if(result[1]=='show'&&!result[2]){
                this.changeVideoIndex(1,that)
                // this.changeVideoIndex(result[2],that)
                //修改是否展示video
            }else if(result[1]=='hide'&&!result[2]){
                this.changeVideoIndex(-1,that)
            }else if(result[1]=='opacity'&&result[2]){
                this.changeVideoOpacity(result[2],that)
                //修改video透明度
            }else if(result[1]=='address'&&result[2]){
                this.changeUrl(result[2],that)
                //如果有网址，就使用输入的网址，不然就用默认的
            }else if(result[1]=='bigger'&&result[2]){
                this.changeBiggerIframe(result[2],that)
                //修改展示的大小

            }

        }
        else{
            console.log(that)
            this.logError("输入了未知的命令！",that)
        }

    },

}