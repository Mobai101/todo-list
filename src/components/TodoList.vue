<script setup>
import TodoListItem from "./TodoListItem.vue";
import { useTodoStore } from "../store.js";

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-container">
    <ul class="todo-ul">
      <TransitionGroup name="todos">
        <TodoListItem
          v-for="todo in todoStore.todosArr"
          :key="todo.id"
          :todo="todo"
        />
      </TransitionGroup>
    </ul>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .todo-container {
    width: 50%;
    margin: auto;
  }

  .todos-move,
  .todos-enter-active,
  .todos-leave-active {
    transition: all 0.5s ease;
  }

  .todos-enter-from,
  .todos-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .todos-leave-active {
    position: absolute;
  }
}

/* Tablet */
@media screen and (max-width: 768px) {
  .todo-container {
    width: 70%;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .todo-container {
    width: 90%;
  }
}
</style>
