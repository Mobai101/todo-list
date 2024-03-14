<script setup></script>

<template>
  <div class="input">
    <input type="text" class="todo-input" name="todo" id="todo" />
    <button class="todo-button">
      <i class="fas fa-plus-square"></i>
    </button>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .input {
    display: flex;
    justify-content: center;
  }

  .todo-input {
    width: 25.25rem;
    height: 3.25rem;
    font-size: 2rem;
    padding: 0.5rem;
    border: none;
  }

  .todo-button {
    height: 3.25rem;
    width: 2.75rem;
    background-color: var(--white);
    border: none;
    font-size: 2rem;
    color: var(--orange);
  }

  .todo-button:hover {
    background-color: var(--orange);
    color: var(--white);
  }

  .todo-button:active {
    transform: scale(0.9);
  }
}

/* Tablet */
@media screen and (max-width: 768px) {
}

/* Mobile */
@media screen and (max-width: 480px) {
  .todo-input {
    width: 80%;
  }
}
</style>
