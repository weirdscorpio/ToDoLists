<template>
    <div class="heading">
        <p class="title">To-Do-List</p>
        <div class="holder">
            <input class="input" v-model="input">
            <button class="btn" @click="addit()">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input:''
        }
    },
    methods:{
        addit() {
            this.input.trim()
            if(this.input.length!=0)
            {
                this.$emit("add",this.input);
            }
            this.input="";
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.heading{
    background-color: black;
    height: 30vh;
    width:100w;
}

.title{
    color:goldenrod ;
    font-family:Arial, 'Helvetica', sans-serif ;
    font-size: 5em;
    text-align: center;
    margin:0;
}

.input{
    height:40px;
    width:70vw;
    border:none;
    border-radius: 0.5em;
    background-color: lightgoldenrodyellow;
    font-size: 1.5em;
}

.holder{
    display: grid;
    grid-template-columns: 90% 10%;
    font-family:Arial, 'Helvetica', sans-serif;
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


</style>