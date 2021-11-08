<template>
  <div class="task ui fluid card">
    <div class="content">
      <div class="header">{{ task.name }}</div>
      <div class="description">{{ task.desc }}</div>
    </div>
    <div class="ui bottom attached button" @click="removeTask">Remove task</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    task: {
      id: Number,
      name: String,
      desc: String,
    },
  },
  methods: {
    removeTask() {
      this.$store.dispatch("removeTask", this.task.id);
    },
  },
})
export default class task extends Vue {
  task!: Record<string, unknown>;
}
</script>
