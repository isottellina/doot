import { Store } from "vuex"; // path to store file

declare module "@vue/runtime-core" {
  interface TaskObj {
    id: number;
    name: string;
    desc: string;
  }

  interface State {
    tasks: Array<TaskObj>;
  }

  interface ComponentCustomProperties {
    $store: Store;
  }
}
