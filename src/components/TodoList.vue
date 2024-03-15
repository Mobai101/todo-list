<script setup>
import TodoListItem from "./TodoListItem.vue";
import { ref, watch } from "vue";
import { reactiveFilter, reactiveTodos } from "@/reactiveStore";
// import { storeToRefs } from "pinia";
// import { useTodoStore } from "../store.js";

// const todoStore = useTodoStore();
// const { todosArr } = storeToRefs(todoStore);
const filteredTodos = ref(null);

watch(
  [reactiveFilter, reactiveTodos],
  () => {
    if (reactiveFilter.value === "all") {
      filteredTodos.value = reactiveTodos.value;
    } else if (reactiveFilter.value === "completed") {
      filteredTodos.value = reactiveTodos.value.filter(
        (todo) => todo.completed
      );
    } else {
      filteredTodos.value = reactiveTodos.value.filter(
        (todo) => !todo.completed
      );
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="todo-container">
    <ul class="todo-ul">
      <TransitionGroup name="todos">
        <TodoListItem
          v-for="todo in filteredTodos"
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

  .todo-ul {
    position: relative;
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
