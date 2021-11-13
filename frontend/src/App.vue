<template>
  <h1 class="ui header">Doot</h1>
  <div class="ui">
    <Task v-for="item in this.tasks" :key="item.id" :task="item" />
  </div>
  <form @submit.prevent="createTask" class="add ui action input fluid">
    <input
      id="newTaskName"
      v-model="newTaskName"
      placeholder="Name of the new task"
      type="text"
      />
    <button type="submit" class="ui button">Add task</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Task from "./components/Task.vue";

export default defineComponent({
  data() {
    return {
      newTaskName: "",
    };
  },
  components: {
    Task,
  },
  methods: {
    createTask(): void {
      if (this.newTaskName != "") {
        this.$store.dispatch("createTask", this.newTaskName);
        this.newTaskName = "";
      }
    },
  },
  created() {
    this.$store.dispatch("getTasks");
  },
  computed: mapState(["tasks"]),
});
</script>

<style lang="scss">
#app {
  @media (min-width: 720px) {
    max-width: 40%;
  }

  margin: 0 auto;
  padding-top: 1em;
}

.header {
  text-align: center;
}

.add {
  margin-top: 1em;
}
</style>
