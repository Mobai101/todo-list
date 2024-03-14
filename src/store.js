import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todos", () => {
  const todosArr = ref(null);

  const insert = (todo) => {
    todosArr.value.push({
      text: todo.text,
      completed: todo.completed,
      id: todo.id,
    });
  };

  return { todosArr, insert };
});
