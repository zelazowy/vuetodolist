<template>
  <div id="app">
    <div v-if="storeState.authorized === false">
        <Authorize/>
    </div>
    <div v-else>
        <AddTodo v-on:add-todo="addTodo"/>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    </div>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import Authorize from "../components/Authorize";

import axios from "axios";
import { store } from "../store.js";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
    Authorize
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  updated() {
    if (!store.state.authorized) {
        return;
    }

    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  },
  data() {
    console.log(store.state)
    return {
      todos: [],
      storeState: store.state
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
