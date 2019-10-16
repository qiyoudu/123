<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader @add-todo="addTodo"></TodoHeader>
      <!-- This section should be hidden by default and shown when there are todos -->
      <TodoMain @del-todo="delTodo" :todos="list"></TodoMain>
      <!-- This footer should hidden by default and shown when there are todos -->
      <TodoFooter @del-all-com="delAllCom" :todos="list"></TodoFooter>
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '齐友德',
          flag: false
        },
        {
          id: 2,
          name: '齐ddd',
          flag: true
        },
        {
          id: 3,
          name: '齐ttt',
          flag: false
        }
      ]
    }
  },
  name: 'todos',
  methods: {
    delTodo(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    addTodo(value) {
      let newTodo = {
        id: +new Date(),
        name: value,
        flag: false
      }
      this.list.push(newTodo)
    },
    delAllCom() {
      //  处理根组件中的数据
      this.list = this.list.filter(item => !item.flag)
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style>
</style>
