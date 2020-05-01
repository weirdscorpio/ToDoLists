<template>
  <div id="app">
    <div class="topnav">
      <div class="my-title">
        <router-link class="individual-link" to="/info"> To-Do List</router-link>
      </div>
      <div class="links" v-if="this.$store.state.logged == false">
        <div class="link">
          <router-link to="/login" class="individual-links">Login</router-link>
        </div>
        <div class="link">
          <router-link to="/signup" class="individual-links">SignUp</router-link>
        </div>
      </div>
      <div class="links" v-if="this.$store.state.logged == true ">
        <div class="link">
          <button @click="logout()" class="my-button">Logout</button>
        </div>
        <div class="link">
          <router-link to="/todo" class="individual-links">Your To-Do List</router-link>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.$router.push("todo")
      .catch(err =>{console.log(err)})

  },
  methods: {
    logout() {
      this.$store
        .dispatch("logUserOut")
        .then(() =>{
          this.$store.state.logged=false
          this.$router.push("login")
          })
        .catch((err) => {
          alert(err);
        });
    },
  },
  created(){
    if(JSON.parse(localStorage.getItem("loggedUser")))
      this.$store.state.logged=true
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: linear-gradient(to right bottom, black, darkslategrey);
  color: white;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topnav {
  width: 100vw;
  height: 60px;
  display: grid;
  grid-template-columns: auto auto;
  background-color: greenyellow;
}

.links {
  display: flex;
  justify-content: flex-end;
}

.my-title {
  font-size: 30px;
  display: flex;
  margin-left: 30px;
  align-items: center;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.individual-link {
  text-decoration: none !important;
  color: black;
}

.individual-links {
  text-decoration: none !important;
  color: black;
}
.individual-link:hover {
  color: black;
}

.individual-links:hover {
  font-size: 1.2em;
  color: black;
}

.welcome {
  width: 100vh;
  font-size: 1.5em;
  text-align: center;
}

.my-button {
  border: none;
  margin-right: 20px;
  background-color: greenyellow;
}
.my-button:hover {
  font-size: 1.2em;
}


@media only screen and (max-width: 700px) {
  .my-button{
    margin-right: 5px;
    font-size: 0.7em;
  }
  .individual-links{
    margin-right: 5px;
    font-size: 0.7em;   
  }
  .individual-link{
    font-size: 0.7em;
  }
  .individual-links:hover{
    color:black;
    font-size: 0.7em;
  }
  .individual-link:hover{
    color:black;
    font-size: 0.7em;
  }
  .my-button{
    font-size: 0.7em;
  }
}
</style>
