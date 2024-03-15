import { reactive } from "vue";

// Current Filter Store
export const reactiveFilter = reactive({
  value: "all",

  changeFilter: function (filterValue) {
    this.value = filterValue;
  },
});

// Todo Store
export const reactiveTodos = reactive({
  value: null,

  insertTodo: function (todo) {
    this.value.push({
      text: todo.text,
      completed: todo.completed,
      id: todo.id,
    });
  },

  toggleComplete: function (todoId) {
    const foundTodo = this.value.find((todo) => todo.id === todoId);
    foundTodo.completed = !foundTodo.completed;
  },

  removeTodo: function (todoId) {
    const todoIndex = this.value.findIndex((todo) => todo.id === todoId);
    this.value.splice(todoIndex, 1);
  },
});
