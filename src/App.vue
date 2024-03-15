<script setup>
import FormInput from "./components/FormInput.vue";
import FilterSelect from "./components/FilterSelect.vue";
import TodoList from "./components/TodoList.vue";
import { watch, onMounted } from "vue";
import { reactiveTodos } from "@/reactiveStore";
// import { useTodoStore } from "./store.js";

// const todoStore = useTodoStore();

// When component first mounted, get todos from localstorage into state
onMounted(() => {
  const fetchedTodos = JSON.parse(localStorage.getItem("todos"));
  reactiveTodos.value = fetchedTodos || [];

  console.log(reactiveTodos.value);
});

// Watch when todos state changes, then update local storage also
watch(
  () => reactiveTodos.value,
  (newTodosArr) => {
    localStorage.setItem("todos", JSON.stringify(newTodosArr));
  },
  { deep: true }
);

// When user submit a new todo
const submitHandler = (event) => {
  if (!event.target.todo.value) return;

  reactiveTodos.insertTodo({
    text: event.target.todo.value,
    completed: false,
    id: parseInt(Math.random() * new Date()),
  });

  event.target.todo.value = "";
};
</script>

<template>
  <main>
    <h1 class="title">To-Do List</h1>
    <form class="form" @submit.prevent="submitHandler($event)">
      <FormInput />
      <FilterSelect />
    </form>
    <TodoList />
  </main>
</template>

<style scoped>
/* Desktop */
@media screen {
  .title {
    font-size: 4rem;
    color: var(--white);
    padding: 4rem 0;
    font-weight: 500;
  }

  .form {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 4rem;
  }
}

/* Tablet */
@media screen and (max-width: 768px) {
  .form {
    flex-direction: column;
    align-items: center;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
}
</style>
