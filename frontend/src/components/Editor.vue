<template>
  <div class="editor">
    <div v-show="!edit" @dblclick="edit = true">
      {{ text }}
    </div>
    <form
      class="ui transparent input"
      v-show="edit"
      @submit.prevent="commitEdit"
    >
      <input v-model="text" type="text" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from "vue";

export default defineComponent({
  props: {
    baseText: {
      type: String,
      required: true,
    },
  },

  methods: {
    commitEdit(): void {
      this.edit = false;
      this.$emit("edited", this.text);
    },
  },

  setup(props) {
    const text = ref(props.baseText.slice());
    const edit = ref(false);

    onUpdated(() => {
      if (!edit.value) {
        text.value = props.baseText.slice();
      }
    });

    return {
      edit: edit,
      text: text,
    };
  },
});
</script>
