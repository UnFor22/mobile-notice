<template>
    <div>
        <label class="label"> 
            <!-- 用label做样式 -->
            <select>
                <option :value="item" v-for="(item,index) in arr" :key="index">{{item}}</option>
            </select>
        </label>      
    </div>
</template>

<script>
    export default {
        data(){
            return{
                arr:[
                    '',
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
        mounted(){
            this.$nextTick(()=>{
                this.arr.pop()
            })
        }
    }
</script>

<style scoped>

</style>