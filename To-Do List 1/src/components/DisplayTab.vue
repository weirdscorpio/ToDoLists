<template>
    <div class="holder">
        <div class="list" v-for="(x,index) in list" :key="x">
            <div class="line">{{ (index+1)+": "+x }}</div>
            <button class="btn" @click="rem(index)">-</button>
        </div>
    </div>    
</template>


<script>
export default {
    props:{
        list:Array
    },
    methods:{
        rem(x){
            this.$emit("remove",x)
        }
    }
    
}
</script>




<style scoped>
.holder{
    height: 70vh;
    width: 100vw;
}
.list{
    display: grid;
    grid-template-columns: 90% 10%;
    color:goldenrod;
    margin:30px;
}    
.btn{
    height: 30px;
    width:30px;
    font-size: 1.5em;
    background-color: goldenrod;
    border-radius: 50%;
    border: none;
}
.line{
    text-align: left;
    margin-right: 20px;
}
</style>