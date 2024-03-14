<script setup>
import { useTodoStore } from "@/store";

const todoStore = useTodoStore();
const props = defineProps({ todo: Object });

const completeHandler = (todoId) => {
  todoStore.toggleComplete(todoId);
};

const removeHandler = (todoId) => {
  todoStore.removeTodo(todoId);
};
</script>

<template>
  <li class="todo-li">
    <p :class="{ 'todo-p': true, completed: props.todo.completed }">
      {{ props.todo.text }}
    </p>
    <div class="todo-buttonDiv">
      <button class="complete-btn" @click="completeHandler(props.todo.id)">
        <i class="fas fa-check"></i>
      </button>
      <button class="trash-btn" @click="removeHandler(props.todo.id)">
        <i class="fas fa-trash"></i>
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
    font-size: 1.1rem;
    color: var(--white);
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
