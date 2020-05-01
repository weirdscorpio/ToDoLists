import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/main";
import { db } from "@/main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem("loggedUser")),
    inpage: false,
    logged:false,
    items:[],
    postSubscription: null,
    busy:false
  },
  mutations: {
    signUserIn: (state,user)=>{
      state.user=user;
      state.logged=true;
      localStorage.setItem("loggedUser",JSON.stringify(user));
    },
    signUserUp: (state,user)=>{
      state.user=user;
      state.logged=true;
      localStorage.setItem("loggedUser",JSON.stringify(user));
    },
    logUserOut: (state) =>{
      state.user = "";
      state.logged=false;
      state.items=[];
    },
    loadItems:(state,items)=>{
      state.items = items;
    },
    setBusy:(state)=>{
      state.busy=!(state.busy);

    }
  },
  actions: {
    async signUserIn( {commit} , payload) {
      commit("setBusy")  
      try{
        let x = await auth.signInWithEmailAndPassword(payload.email,payload.password);
        commit("signUserIn",x.user);
        commit("setBusy")
      }
      catch(err){
        commit("setBusy")
        throw err
      }
    },
    async signUserUp( {commit} , payload) {
      commit("setBusy")  
      let x;
      try{
        x=await auth.createUserWithEmailAndPassword(payload.email,payload.password)
      }
      catch(err){
        commit("setBusy")
        throw err
      } 
      commit("signUserUp",x.user);
      commit("setBusy")
    },
    async logUserOut(context){
        await auth.signOut()
        localStorage.removeItem("loggedUser");
        context.commit("logUserOut");
    },
    async addItem({commit},payload){
      try{
        console.log(commit);
        await db.collection("items").add(payload)
      }
      catch(err){
        alert(err);
      }
    },
    async loadItems(context){
      context.commit("setBusy")
      let postSubscription=db.collection("items").where("userId","==",context.state.user.uid).orderBy('created_at',"asc").onSnapshot((snapshot) =>{  
        let items=[]
          snapshot.forEach(doc => {
            let data = {id:doc.id,todo:doc.data().todo};
            items.push(data)
          });
          context.commit("loadItems",items)
        })
      context.commit("setBusy")
      return postSubscription;
    },
    async removeItem({commit},id){
        await db.collection("items").doc(id).delete();
        console.log(commit);
    },
  },
  getters: {
    getList: (store) =>{
      return store.items;
    },
    getBusy: (store) =>{
      return store.busy;
    }
  },
  modules: {}
});
