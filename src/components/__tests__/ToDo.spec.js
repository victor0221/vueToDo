import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoList from '@/components/ToDo/ToDoList.vue'
import ToDoModal from '@/components/ToDo/ToDoModal.vue'

describe('ToDo App Tests', () => {
  it('renders ToDoList component properly', () => {
    const todos = [
      { id: 1, name: 'Task 1', date: '2024-05-25' },
      { id: 2, name: 'Task 2', date: '2024-05-26' }
    ]
    const wrapper = mount(ToDoList, { props: { todos } })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.findAll('.todo-item')).toHaveLength(todos.length)
  })

  it('renders ToDoModal component properly', () => {
    const visible = true
    const todo = { id: 1, name: 'Task 1', date: '2024-05-25' }
    const wrapper = mount(ToDoModal, { props: { visible, todo } })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('.modal')).toBeTruthy()
  })

  it('adds a new todo when submit is clicked in ToDoModal', async () => {
    const wrapper = mount(ToDoModal, { props: { visible: true } })
    const todoName = 'New Task'
    const todoDate = '2024-06-01'

    await wrapper.find('#name').setValue(todoName)
    await wrapper.find('#date').setValue(todoDate)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('update-todo')).toBeTruthy()
    expect(wrapper.emitted('update-todo')[0][0]).toEqual({ name: todoName, date: todoDate })
  })

  it('edits an existing todo when edit-todo event is emitted in ToDoList', async () => {
    const todos = [
      { id: 1, name: 'Task 1', date: '2024-05-25' },
      { id: 2, name: 'Task 2', date: '2024-05-26' }
    ]
    const wrapper = mount(ToDoList, { props: { todos } })
    const updatedTodo = { id: 1, name: 'Updated Task 1', date: '2024-06-01' }

    await wrapper.find('.edit-button').trigger('click')

    expect(wrapper.emitted('edit-todo')).toBeTruthy()
    expect(wrapper.emitted('edit-todo')[0]).toEqual([updatedTodo.id])
  })

  it('deletes an existing todo when delete-todo event is emitted in ToDoList', async () => {
    const todos = [
      { id: 1, name: 'Task 1', date: '2024-05-25' },
      { id: 2, name: 'Task 2', date: '2024-05-26' }
    ]
    const wrapper = mount(ToDoList, { props: { todos } })
    const todoIdToDelete = 1

    await wrapper.find('.delete-button').trigger('click')

    expect(wrapper.emitted('delete-todo')).toBeTruthy()
    expect(wrapper.emitted('delete-todo')[0]).toEqual([todoIdToDelete])
  })

  it('closes the modal when close event is emitted in ToDoModal', async () => {
    const wrapper = mount(ToDoModal, { props: { visible: true } })

    await wrapper.find('.close').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
