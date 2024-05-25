<template>
  <div class="todo-container">
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div>
          <div class="todo-name">{{ todo.name }}</div>
          <div class="todo-date">{{ todo.date }}</div>
        </div>
        <ToDoActions @edit="editTodo(todo.id)" @delete="deleteTodo(todo.id)" />
      </li>
    </ul>
    <button class="create-button" @click="openCreateModal">Create</button>
  </div>
</template>

<script>
import ToDoActions from '@/components/ToDo/ToDoActions.vue'

export default {
  name: 'ToDoList',
  components: {
    ToDoActions
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    editTodo(id) {
      this.$emit('edit-todo', id)
    },
    deleteTodo(id) {
      this.$emit('delete-todo', id)
    },
    openCreateModal() {
      this.$emit('create-todo')
    }
  }
}
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.todo-date {
  font-size: 14px;
  color: #888;
}
.create-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-button:hover {
  background-color: #45a049;
}
</style>
