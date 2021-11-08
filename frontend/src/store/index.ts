import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      { name: "Tâche 1", desc: "Exemple de tâche" },
      { name: "Tâche 2", desc: "Exemple de tâche" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
