import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todo-list", {
  state: () => ({
    todoList: [],
  }),
  actions: {
    initializeFromLocalStorage() {
      const savedTodoList = JSON.parse(localStorage.getItem("todo")) || [];
      this.todoList = savedTodoList;
    },
    addTodo(item) {
      const newTodo = {
        item,
        id: new Date().getTime(),
        completed: false,
      };
      this.todoList.push(newTodo);
      this.saveToLocalStorage();
    },
    deleteTodo(itemId) {
      const todoToDelete = this.todoList.find((todo) => todo.id === itemId);

      if (!todoToDelete) {
        return;
      }

      const confirmed = window.confirm(
        `Are you sure you want to delete "${todoToDelete.item}"?`
      );
      if (confirmed) {
        this.todoList = this.todoList.filter((todo) => todo.id !== itemId);
        this.saveToLocalStorage();
      }
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((todo) => todo.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(this.todoList));
    },
  },
});
