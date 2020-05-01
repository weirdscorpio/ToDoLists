<template>
    <div class="holder">
        <div class="list" v-for="(x,index) in getList" :key="x">
            <div class="line">{{ (index+1)+": "+x }}</div>
            <button class="btn" @click="rem(index)">-</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'removeList'
    ]),
    rem (x) {
      this.removeList(x)
    }
  },
  computed: {
    ...mapGetters([
      'getList'
    ])
  }
}
</script>

<style scoped>
.holder{
    height: 70vh;
    width: 100vw;
    background: black;
}
.list{
    display: grid;
    grid-template-columns: 90% 10%;
    color:goldenrod;
    margin:0 30px 30px 30px;
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
