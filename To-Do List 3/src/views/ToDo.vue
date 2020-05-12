<template>
  <div class="todo">
    <div class="input-tab">
      <input
        v-model="mytodo"
        type="text"
        class="input"
        placeholder="Enter text here...."
      />
      <div class="button">
        <button class="my-button" @click="add()">+</button>
      </div>
    </div>
    <div class="display-tab" v-if="!this.$store.getters.getBusy">
      <div class="my-todos" v-for="(item, index) in getList" :key="item.id">
        <div class="each-todo">{{ index + 1 + " : " + item.todo }}</div>
        <div class="edit-icon">
          <img
            src="../assets/edit.svg"
            @click="openDialog(item)"
            alt="edit"
            style="background-color:greenyellow"
          />
        </div>
        <div class="button">
          <button class="my-button" @click="remove(item.id)">-</button>
        </div>
      </div>
      <b-modal id="edit" v-model="edit">
        <template v-slot:modal-header v-bind:class="no - padding">
          <div class="my-header">
            <h2>Edit ToDo</h2>
          </div>
        </template>

        <input class="input-edit" v-model="editedItem.todo" />        


        <template v-slot:modal-footer>
          <button class="my-buttton" @click="edit = false">Cancel</button>
          <button class="my-buttton" @click="update()">Edit</button>
        </template>
      </b-modal>
    </div>

    <div class="spinner-border" style="color:greenyellow" v-else></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      mytodo: "",
      unsubscribe: null,
      edit: false,
      editedItem: {
        todo: "",
        id: "",
      },
    };
  },
  methods: {
    add() {
      let x = this.mytodo.trim();
      console.log(x);
      if (x.length != 0) {
        this.$store
          .dispatch("addItem", {
            todo: x,
            created_at: Date.now(),
            userId: this.$store.state.user.uid,
          })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
      this.mytodo = "";
    },
    remove(id) {
      this.$store
        .dispatch("removeItem", id)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          alert(err);
        });
    },
    openDialog(item) {
      this.editedItem.id = item.id;
      this.editedItem.todo = item.todo;
      this.edit = true;
    },
    update() {
      this.$store.dispatch("updateItem", this.editedItem).catch((err) => {
        alert(err);
      });
      this.edit = false;
      (this.editedItem.id = ""), (this.editedItem.todo = "");
    },
  },
  computed: {
    ...mapGetters(["getList"]),
  },
  mounted() {
    this.$store
      .dispatch("loadItems")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped>

.my-buttton{
  border:none;
  border-radius: 0.2em;
  background-color: greenyellow;
  margin: 20px;
}

.input-edit{
  border: none;
  border-bottom: 1px solid black;
  color: white;
  background-image: linear-gradient(to right top, darkslategrey, black);
  box-shadow: 2px 2px 1px 1px darkseagreen;
  width: 80%;
}

/deep/ #edit___BV_modal_content_ {
  margin:10px;
  max-height: 400px;
  max-width: 400px;
  background-image: linear-gradient(to right , darkslategrey, black);
  color: white;
  padding: 4px;

}
/deep/ #edit___BV_modal_header_ {
  margin:10px;
  background-image: linear-gradient(to right , darkslategrey, black);
  color: white;
  padding: 4px;
}

/deep/ #edit___BV_modal_body_ {
  margin:10px;
  background-image: linear-gradient(to right , darkslategrey, black);
  color: white;
  padding: 4px;
}


/deep/ #edit___BV_modal_footer_ {
  margin:10px;
  background-image: linear-gradient(to right , darkslategrey, black);
  color: white;
  padding: 4px;
}




.input-tab {
  margin: 20px;
  display: grid;
  grid-template-columns: 90% 10%;
}

.input {
  width: 80vw;
  border: none;
  border-bottom: 1px solid black;
  color: white;
  background-image: linear-gradient(to right top, darkslategrey, black);
  box-shadow: 2px 2px 1px 1px darkseagreen;
}

.button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.edit-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.my-button {
  background-color: greenyellow;
  border: none;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}

.display-tab {
  margin: 20px;
}

.my-todos {
  display: grid;
  grid-template-columns: 80% 10% 10%;
  margin-top: 20px;
  color: white;
}

img {
  padding: 4px;
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
}

img:hover {
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .input-tab {
    margin: 5px;
    display: grid;
    grid-template-columns: 80% 10%;
  }
  .input {
    width: 70vw;
    font-size: 0.8em;
    border: none;
    border-bottom: 1px solid black;
    color: white;
    background-image: linear-gradient(to right top, darkslategrey, black);
    box-shadow: 2px 2px 1px 1px darkseagreen;
  }
  .my-button {
    background-color: greenyellow;
    border: none;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
  .display-tab {
    margin: 5px;
  }

  .my-todos {
    display: grid;
    grid-template-columns: 70% 10% 10%;
    margin-top: 20px;
    color: white;
  }
  img {
    background-color: greenyellow;
    border: none;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
  img:hover {
    cursor: pointer;
  }
}
</style>
