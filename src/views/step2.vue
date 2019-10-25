<template>
    <div class="step2">
        <p>2.请选择您的兴趣爱好</p>
        <p><input type="checkbox" v-model="checkbox" value="看书"/>看书
            <input type="checkbox" v-model="checkbox" value="游泳"/>游泳
            <input type="checkbox" v-model="checkbox" value="跑步"/>跑步
            <input type="checkbox" v-model="checkbox" value="看电影"/>看电影
            <input type="checkbox" v-model="checkbox" value="听音乐"/>听音乐
            <input type="checkbox" v-model="checkbox" value="动漫"/>动漫</p>
        <p><router-link to="/step1">上一步</router-link>
            <router-link to="/step3" @click.native="doClick()">下一步</router-link>
            <a href="#" @click="reset">重置</a></p>
    </div>
</template>

<script>
    export default {
        name: "step2",
        data(){
            return{
                checkbox:[]
            }
        },
        methods:{
            doClick(){
                alert(this.checkbox);
                this.$store.commit("addList",this.checkbox);
            },
            reset(){
                this.checkbox = [];
            }
        }
    }
</script>

<style scoped>
    .step2{
        padding: 20px;
    }
    p{
        font-size: 18px;
    }
    p a{
        text-decoration: none;
        padding: 15px;
        font-weight: bold;
        color: #7b68ee;
    }

</style>