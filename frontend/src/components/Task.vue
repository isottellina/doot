<template>
  <div class="task ui fluid card">
    <div class="content">
      <div class="header">{{ name }}</div>
      <div class="description"><slot /></div>
    </div>
    <div class="ui bottom attached button">Remove task</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
  },
})
export default class task extends Vue {
  name!: string;
}
</script>
