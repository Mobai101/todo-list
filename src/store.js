import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todos", () => {
  const todosArr = ref(null);

  const currentFilter = ref("all");

  const changeFilter = (filterValue) => {
    currentFilter.value = filterValue;
  };

  const insertTodo = (todo) => {
    todosArr.value.push({
      text: todo.text,
      completed: todo.completed,
      id: todo.id,
    });
  };

  const toggleComplete = (todoId) => {
    const foundTodo = todosArr.value.find((todo) => todo.id === todoId);
    foundTodo.completed = !foundTodo.completed;
  };

  const removeTodo = (todoId) => {
    const todoIndex = todosArr.value.findIndex((todo) => todo.id === todoId);
    todosArr.value.splice(todoIndex, 1);
  };

  return {
    todosArr,
    currentFilter,
    insertTodo,
    toggleComplete,
    removeTodo,
    changeFilter,
  };
});
