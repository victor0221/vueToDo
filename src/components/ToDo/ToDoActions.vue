<template>
  <div class="button-container">
    <button class="edit-button" @click="editTodo">Edit</button>
    <button class="delete-button" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoButtons',
  methods: {
    editTodo() {
      this.$emit('edit')
    },
    deleteTodo() {
      this.$emit('delete')
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
}

.edit-button {
  background-color: #4caf50;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>
