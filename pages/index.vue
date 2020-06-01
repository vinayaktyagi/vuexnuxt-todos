<template>
  <div >
    <!-- <button v-on:click="decrement">-</button> -->
    <!-- {{ctr}} -->
    <!-- <button v-on:click="increment">+</button> -->
    
    <article class="pa3 pa5-ns">
  <h1 class="f4 bold center mw6">TODOS</h1>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
    <li class="ph3 pv3 bb b--light-silver" v-for="todo in todos">{{todo.task}}</li>
    
  </ul>
</article>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      ctr: state => state.counter,
      todos: state=> state.todos
    })
  },
  methods: {
    // ...mapMutations(["increment", "decrement"])
  }
};
</script>