<template>
  <div id="app">
    <InputTab />
    <DisplayTab />
  </div>
</template>

<script>
import DisplayTab from './components/DisplayTab'
import InputTab from './components/InputTab'

export default {
  name: 'App',
  components: {
    DisplayTab,
    InputTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
