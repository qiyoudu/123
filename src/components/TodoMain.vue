<template >
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">

      <li
        v-for="item in todos"
        :key="item.id"
        :class="{completed:item.flag,editing:currentId===item.id}"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.flag" />
          <label @dblclick="editTodo(item.id)">{{item.name}}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input @keyup.enter="editedTodo" class="edit" v-model="item.name" />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  // data数据
  data() {
    return {
      currentId: -1
    }
  },
  props: ['todos'],
  methods: {
    delTodo(id) {
      this.$emit('del-todo', id)
    },
    editTodo(id) {
      this.currentId = id
    },
    editedTodo() {
      // 闭合修改框
      // 由于v-model已经实现双向绑定 此时只需要关闭修改框就可以实现修改功能
      this.currentId = -1
    }
  }
}
</script>
