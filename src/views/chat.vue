<template>
    <div class="chat">
        <header class="header">
            <span>聊天页</span>
        </header>
        <div class="main" ref="main">
            <div v-for="(item,index) in arr" :key="index">
                <div class="main-item">
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
    export default {
        data(){
            return{
                text: '',
                arr:[
                    'nihao',
                    'hao',
                    '很好',
                    '非常好',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                    '数据的',
                ]
            }
        },
        methods:{
            handleSend(){
                this.arr.push(this.text)
                this.text = ''
                this.$nextTick(()=>{
                    this.$refs.main.scrollTop = this.$refs.main.scrollHeight
                })
            }
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
    // overflow: hidden;
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
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        background: #f1f1f1;
        padding: 0 10px;
        flex: 1;
        .main-item {
            height: 40px;
            line-height: 40px;
        }
    }
    footer {
        border-top: 1px solid #409eff;
        display: flex;
        background: #f1f1f1;
        // height: 60px;
        padding: 9px 0;
        .input {
            -webkit-appearance: none;
            flex: 1;
            height: 40px;
            border: 1px solid #d7d7d7;    
        }
        .button {
            // border: 1px solid greenyellow;
            background: #f1f1f1;
            width: 80px;
            // height: 40px;
            line-height: 40px;
        }
    }
}

</style>