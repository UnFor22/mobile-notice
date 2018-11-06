<template>
    <div class="chat">
        <header class="header">
            <span>聊天页</span>
        </header>
        <div class="main" ref="main">
            <div>
                <div v-for="(item,index) in arr" :key="index" class="main-item">
                    {{item}}
                </div>
            </div>
        </div>
        <footer>
            <input class="input" v-model="text" @keyup.enter="handleSend"  type="text" />
            <button class="button" @click="handleSend" >发送</button>
        </footer>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'   
    export default {
        data(){
            return{
                text: '',
                BS:null,
                arr:[
                    'nihao',
                    'hao',
                    '很好',
                    '非常好',
                    '数据的1',
                    '数据的2',
                    '数据的3',
                    '数据的4',
                    '数据的5',
                    '数据的6',
                    '数据的7',
                    '数据的8',
                    '数据的9',
                    '数据的10',
                    '数据的11',
                    '数据的12',
                    '数据的13',
                    '数据的14',
                    '数据的15',
                    '数据的16',
                    '数据的17',
                    '数据的18',
                    '数据的19',
                    '数据的20',
                    '数据的21',
                ]
            }
        },
        methods:{
            handleSend(){
                this.arr.push(this.text)
                this.text = ''
                this.$nextTick(()=>{
                    this.BS.refresh()
                    let scrollTop = this.$refs.main.scrollHeight - this.$refs.main.offsetHeight
                    this.BS.scrollTo(0,-scrollTop,300)
                })
            },
            initScroll(){
                this.$nextTick(()=>{
                    let main = this.$refs.main;
                    this.BS = new BScroll(main,{
                        mouseWheel: true,
                        scrollbar: true
                    })
                })
            },    
        },
        mounted(){
            document.documentElement.style.overflow = 'auto'
            document.body.style.overflow = 'auto'
            document.getElementById('app').style.overflow = 'auto'
            this.initScroll()
        },
        beforeDestroy(){
            document.documentElement.style.overflow = 'auto'
            document.body.style.overflow = 'auto'
            document.getElementById('app').style.overflow = 'auto'
        }
    }
</script>
<style>
html {
    height: 100%;
    overflow: hidden;
}
body {
    height: 100%;
    overflow: hidden;
}
#app {
    height: 100%;
    overflow: hidden;
}
</style>
<style scoped lang='scss'>
.chat{
    display: flex;
    height: 100%;
    flex-direction: column;
    header {
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #409eff;
        color: #f1f1f1;
        font-size: 16px;
    }
    .main {
        // overflow-y: scroll;
        // -webkit-overflow-scrolling: touch;
        overflow: hidden;
        background: #f1f1f1;
        padding: 0 10px;
        flex: 1;
        // height: 500px;
        // height: 100%;
        .main-item {
            height: 40px;
            line-height: 40px;
        }
    }
    footer {
        // border-top: 1px solid #409eff;
        display: flex;
        background: #f1f1f1;
        padding: 9px 0;
        height: 40px;
        .input {
            -webkit-appearance: none;
            flex: 1;
            height: 40px;
            border: 1px solid #d7d7d7;    
        }
        .button {
            background: #f1f1f1;
            height: 40px;
            width: 80px;
            line-height: 40px;
        }
    }
}
</style>