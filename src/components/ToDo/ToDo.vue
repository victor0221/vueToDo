<template>
  <div>
    <ToDoList
      :todos="todos"
      @edit-todo="editTodo"
      @delete-todo="deleteTodo"
      @create-todo="openCreateModal"
    />
    <ToDoModal
      :visible="createModalVisible"
      @close="closeCreateModal"
      @update-todo="addTodo"
      :todo="newTodo"
    />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDo/ToDoList.vue'
import ToDoModal from '@/components/ToDo/ToDoModal.vue'

export default {
  name: 'ToDoPage',
  components: {
    ToDoList,
    ToDoModal
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: 'Create A Vue App',
          date: '01/01/2024'
        },
        {
          id: 2,
          name: 'Publish View App',
          date: '02/01/2024'
        }
      ],
      createModalVisible: false,
      newTodo: {}
    }
  },
  methods: {
    editTodo(todoId) {
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId)
      if (todoIndex !== -1) {
        this.newTodo = { ...this.todos[todoIndex] }
        this.createModalVisible = true
      }
    },
    deleteTodo(todoId) {
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId)
      if (todoIndex !== -1) {
        this.todos.splice(todoIndex, 1)
      }
    },
    openCreateModal() {
      this.createModalVisible = true
      this.newTodo = {}
    },
    closeCreateModal() {
      this.createModalVisible = false
    },
    addTodo(newTodo) {
      const existingTodoIndex = this.todos.findIndex((todo) => todo.id === newTodo.id)
      if (existingTodoIndex !== -1) {
        this.todos[existingTodoIndex] = { ...newTodo }
      } else {
        this.todos.push(newTodo)
      }
      this.createModalVisible = false
    }
  }
}
</script>
