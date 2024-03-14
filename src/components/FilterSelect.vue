<script setup></script>

<template>
  <div class="select">
    <select name="todos" id="todos" class="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .select {
    position: relative;
    width: 12rem;
    height: 3.25rem;
  }

  .filter-todo {
    border: none;
    appearance: none;
    height: 3.25rem;
    width: 12rem;
    padding: 1rem;
    cursor: pointer;
    color: var(--orange);
    outline: none;
  }

  /* Pseudo element for custom arrow */
  .select:after {
    content: "\25BC";
    background-color: var(--orange);
    position: absolute;
    z-index: 1;
    right: 0px;
    top: 50%;
    /* height: 3.25rem; */
    width: 1rem;
    transform: translateY(-50%);
    padding: 0.88rem 1rem;
    color: var(--white);
    pointer-events: none;
  }

  /* Pseudo element to capture click event */
  .select:after + span {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    pointer-events: all;
    opacity: 0;
    cursor: pointer;
  }
}

/* Tablet */
@media screen and (max-width: 768px) {
}

/* Mobile */
@media screen and (max-width: 480px) {
}
</style>
