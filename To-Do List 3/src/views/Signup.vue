<template>
    <div class="signup">
    <div class="wrapper">
      
      <div class="container" v-if="!(this.$store.getters.getBusy)">
        <div>
          <input v-model="email" class="email" type="email" placeholder="Enter email...">
        </div>
        <div>
          <input v-model="password" class="password" type="password" placeholder="Enter password...">
        </div>
        <div class="button">
          <button class="my-button" @click="signup()">Sign Up</button>
        </div>
      </div>

      <div class="spinner-border" style="color:greenyellow" v-else>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods : {
    signup(){
      let data={
        email:this.email,password:this.password
      }
      this.$store
        .dispatch("signUserUp",data)
        .then(()=>{this.$router.push("todo")})
        .catch( err =>{
          alert(err);
        })
      this.email="";
      this.password="";
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
}

.container{
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
  max-height: 200px;
}

.email{
  border: none;
  border-bottom: 1px solid black;
  margin-top: 20px;
  background-image: linear-gradient(to right top,darkslategrey,black);
  color:white;
  box-shadow:2px 2px 1px 1px darkseagreen;

}
.password{
  border: none;
  border-bottom: 1px solid black;
  margin-top: 20px;
  background-image: linear-gradient(to right top,darkslategrey,black);
  color:white;
  box-shadow:2px 2px 1px 1px darkseagreen;

}
.button{
  display: flex;
  justify-content: center;
}
.my-button{
  margin-top: 20px;
  background-color: greenyellow;
  border:none;
  border-radius: 1em;
  height:40px;
  width:100px;
}

.my-button:hover{
  font-size: 1.2em;
  border-radius: 0.8em;
}

</style>