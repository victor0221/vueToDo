<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 style="font-family: 'Roboto', sans-serif">Edit ToDo</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name" style="font-family: 'Roboto', sans-serif">Name:</label>
          <input
            type="text"
            id="name"
            v-model="editedTodo.name"
            required
            style="font-family: 'Roboto', sans-serif"
          />
        </div>
        <div class="form-group">
          <label for="date" style="font-family: 'Roboto', sans-serif">Date:</label>
          <input
            type="date"
            id="date"
            v-model="editedTodo.date"
            required
            style="font-family: 'Roboto', sans-serif"
          />
        </div>
        <button type="submit" style="font-family: 'Roboto', sans-serif">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoModal',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedTodo: { ...this.todo }
    }
  },
  watch: {
    todo(newTodo) {
      this.editedTodo = { ...newTodo }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    submitForm() {
      this.$emit('update-todo', { ...this.editedTodo })
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 300px;
  border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

input[type='text'],
input[type='date'],
button {
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
