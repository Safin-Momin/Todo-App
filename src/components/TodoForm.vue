<script setup>
import { ref, toRef } from "vue";
import { useTodoListStore } from "../stores/TodoList";
const todo = ref("");
const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <div class="form-layout">
      <input type="text" v-model="todo" placeholder="Write Your Todo" />
      <button class="add">Add Todo</button>
    </div>
  </form>
</template>
