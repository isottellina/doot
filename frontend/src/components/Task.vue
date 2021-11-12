<template>
  <div class="task ui fluid card">
    <div class="content">
      <div class="header">
        <Editor :base-text="task.name" @edited="setName" />
      </div>
      <div class="description">
        <Editor :base-text="task.description" @edited="setDesc" />
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
      this.$store.commit("removeTask", this.task.id);
    },

    setName(name: string): void {
      this.$store.commit("changeNameTask", {
        task_id: this.task.id,
        name: name,
      });
    },

    setDesc(desc: string): void {
      this.$store.commit("changeDescTask", {
        task_id: this.task.id,
        desc: desc,
      });
    },
  },
  components: { Editor },
});
</script>
