<template>
<div class ="app">
   <h1>{{ auth.userName }}のToDoリスト</h1>
   <div class='main'>
      <TodoColumn @update="upDateTodoList" list-name="ToDo" :list="rsvTodoList.todo"/>
      <TodoColumn @update="upDateTodoList" list-name="Proceeding" :list="rsvTodoList.wip"/>
      <TodoColumn @update="upDateTodoList" list-name="Finish" :list="rsvTodoList.done"/>
   </div>
</div>
</template>
<script>

import firebase from '~/utils/firebase';
import { mapState } from 'vuex';
import cloneDeep from 'lodash.clonedeep';
import TodoColumn from '~/components/TodoColumn';


export default {
   components: {
      TodoColumn
   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      }
   },
   data() {
      return {
         rsvTodoList: {
         }
      };
   },
   computed: {
      ...mapState(['auth','todoList'])
   },

   methods: {
      upDateTodoList(){
         this.$store.dispatch('setTodoList', cloneDeep(this.rsvTodoList));
      }
   },
   beforeMount(){
         this.rsvTodoList = cloneDeep(this.todoList);
      },
}
</script>

<style scoped>
.app{
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: aquamarine;
   width: 100%;
   height: 100%;
}
.main {
   display: flex;
}
.list {
   margin: 10px;
}
</style>