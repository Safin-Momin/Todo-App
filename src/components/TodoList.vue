<script setup>
import { useTodoListStore } from "../stores/TodoList";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo, initializeFromLocalStorage } = store;

onMounted(() => {
  initializeFromLocalStorage();
});
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div class="content">
      <span class="words" :class="{ completed: todo.completed }">{{
        todo.item
      }}</span>
      <div class="flex">
        <span @click.stop="toggleCompleted(todo.id)" class="done check"
          ><span class="cen"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </span>
        <span @click="deleteTodo(todo.id)" class="check"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
