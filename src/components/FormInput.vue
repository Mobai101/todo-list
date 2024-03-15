<script setup></script>

<template>
  <div class="input">
    <input type="text" class="todo-input" name="todo" id="todo" />
    <button class="todo-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
        />
      </svg>
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
    fill: var(--orange);
  }

  .todo-button svg {
    width: 1.8rem;
  }

  .todo-button:hover {
    background-color: var(--orange);
    fill: var(--white);
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
