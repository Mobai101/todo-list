<script setup>
// import { useTodoStore } from "@/store";
import { reactiveTodos } from "@/reactiveStore";

// const todoStore = useTodoStore();
const props = defineProps({ todo: Object });

const completeHandler = (todoId) => {
  reactiveTodos.toggleComplete(todoId);
};

const removeHandler = (todoId) => {
  reactiveTodos.removeTodo(todoId);
};
</script>

<template>
  <li class="todo-li">
    <p :class="{ 'todo-p': true, completed: props.todo.completed }">
      {{ props.todo.text }}
    </p>
    <div class="todo-buttonDiv">
      <button class="complete-btn" @click="completeHandler(props.todo.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </button>
      <button class="trash-btn" @click="removeHandler(props.todo.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </button>
    </div>
  </li>
</template>

<style scoped>
/* Desktop */
@media screen {
  .completed {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .todo-li {
    display: flex;
    justify-content: center;
    min-height: 3.25rem;
    align-items: center;
    text-align: left;
    background-color: var(--white);
    justify-content: space-between;
    margin: 0.5rem;
  }

  .todo-p {
    padding: 0 0.5rem;
    width: 80%;
  }

  .todo-buttonDiv {
    height: 3.25rem;
    min-width: 6rem;
  }

  .todo-buttonDiv button {
    height: 100%;
    width: 3rem;
    border: none;
    font-size: 1rem;
    color: var(--white);
  }

  .todo-buttonDiv svg {
    width: 1rem;
    height: auto;
    fill: var(--white);
  }

  .complete-btn {
    background-color: var(--green);
  }

  .trash-btn {
    background-color: var(--orange);
  }

  .todo-buttonDiv button:active {
    transform: scale(0.9);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
}

/* Mobile */
@media screen and (max-width: 480px) {
}
</style>
