<template>
  <header class="header">
    <h1>todos</h1>
    <input
      @keyup.enter="handelEnter"
      class="new-todo"
      placeholder="What needs to be done?"
      v-model="name"
      autofocus
    />
  </header>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handelEnter() {
      this.$emit('add-todo', this.name)
      // 清空数据
      this.name = ''
    }
  }
}
</script>
