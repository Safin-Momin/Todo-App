<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>

<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    <div class="flex justify-center">
      <div class="display">
        <todo-form />
        <todo-list />
      </div>
    </div>
  </div>
</template>
