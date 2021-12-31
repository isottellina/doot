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
import { useStore } from "vuex";
import Editor from "./Editor.vue";
import { TaskObj } from "../store";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<TaskObj>,
      required: true,
    },
  },
  components: { Editor },

  setup(props) {
    const store = useStore();

    const removeTask = () => {
      store.dispatch("deleteTask", props.task.id);
    };

    const setName = (name: string): void => {
      store.dispatch("changeNameTask", {
        task_id: props.task.id,
        name: name,
      });
    };

    const setDesc = (desc: string): void => {
      store.dispatch("changeDescTask", {
        task_id: props.task.id,
        desc: desc,
      });
    };

    return {
      removeTask,
      setName,
      setDesc,
    };
  },
});
</script>
