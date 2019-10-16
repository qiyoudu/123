<template>
  <footer v-show="isShowFooter" class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{left}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a @click="clickActive" href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-show="isShowButton" @click="clearAllCom" class="clear-completed">Clear completed</button>
  </footer>
</template>
<script>
export default {
  created() {
    console.log(this.newTodos)
  },
  data() {
    return {
      newTodos: this.todos
    }
  },
  props: ['todos'],
  computed: {
    left: function(params) {
      return this.todos.filter(item => !item.flag).length
    },
    isShowFooter() {
      return this.todos.length > 0
    },
    isShowButton() {
      return this.todos.some(item => item.flag)
    }
  },
  methods: {
    clearAllCom() {
      // 触发父组件给子组件的事件
      this.$emit('del-all-com')
    },
    clickActive() {}
  }
}
</script>
