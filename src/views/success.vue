<template>
    <div class="success">

        <p>您的性别是：{{sex}}</p>
        <p>您的爱好是：<span v-for="(item,index) in lists" :key="index">{{item}}</span></p>
        <p>个人简介：{{this.$store.state.text}}</p>
    </div>
</template>

<script>
    export default {
        name: "success",
        data(){
            return{
                sex:this.$store.state.sex,
                lists:this.$store.state.list,
                text:this.$store.state.text
            }
        },
    }
</script>

<style scoped>
    .success{
        padding: 20px;
    }
    p{
        font-size: 18px;
    }
</style>