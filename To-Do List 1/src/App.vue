<template>
  <div id="app" class="app">
    <InputTab
        @add="add"
    />
    <DisplayTab
        :list="list"
        @remove="remove"
    />
  </div>
</template>

<script>
import InputTab from './components/InputTab.vue'
import DisplayTab from './components/DisplayTab.vue'

export default {
  name: 'App',
  components: {
    InputTab,
    DisplayTab
  },
  data(){
    return{
    list:[],
    input:''
    }
  } ,
  methods:{
    add(x)
    { 
      this.list.push(x)
    },
    remove(x)
    {
      this.list.splice(x,1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  background-color: black;
  overflow: hidden;
}

</style>
