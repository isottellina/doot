<template>
  <div class="task ui fluid card">
    <div class="content">
      <div class="header">
        <Editor class="task-name" :base-text="task.name" @edited="setName" />
      </div>
      <div class="description">
        <Editor class="task-desc" :base-text="task.description" @edited="setDesc" />
      </div>
    </div>
    <div class="ui bottom attached button" @click="removeTask">Remove task</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Editor from "./Editor.vue";
import { TaskObj } from "../store";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<TaskObj>,
      required: true,
    },
  },
  methods: {
    removeTask() {
      this.$store.dispatch("deleteTask", this.task.id);
    },

    setName(name: string): void {
      this.$store.dispatch("changeNameTask", {
        task_id: this.task.id,
        name: name,
      });
    },

    setDesc(desc: string): void {
      this.$store.dispatch("changeDescTask", {
        task_id: this.task.id,
        desc: desc,
      });
    },
  },
  components: { Editor },
});
</script>
