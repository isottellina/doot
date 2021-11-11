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
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    baseText: String,
  },

  methods: {
    commitEdit(): void {
      this.edit = false;
      this.$emit("edited", this.text);
    },
  },

  setup(props) {
    return {
      edit: ref(false),
      text: props.baseText,
    };
  },
});
</script>
