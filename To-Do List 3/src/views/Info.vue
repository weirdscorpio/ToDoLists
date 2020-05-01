<template>
  <div class="wrapper">
    <div class="logged-out" v-if="this.$store.state.logged">
      Welcome to To-Do List<br><br>
      Sign up or Login to Continue 
    </div>
    <div class="logged-in" v-else>
      Welcome to Your To-Do List<br><br>
      Click on Your To-Do List to Continue
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
  text-align: center;
}

</style>