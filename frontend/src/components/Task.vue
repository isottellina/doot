<template>
  <div class="task ui fluid card">
    <div class="content">
      <div class="header">
        <Editor :base-text="task.name" @edited="setName" />
      </div>
      <div class="description">
        <Editor :base-text="task.desc" @edited="setDesc" />
      </div>
    </div>
    <div class="ui bottom attached button" @click="removeTask">Remove task</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Editor from "./Editor.vue";

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

    setName(name: string): void {
      this.task.name = name;
    },

    setDesc(desc: string): void {
      this.task.desc = desc;
    },
  },
  components: { Editor },
})
export default class Task extends Vue {}
</script>
