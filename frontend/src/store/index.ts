import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      { id: 1, name: "Tâche 1", desc: "Exemple de tâche" },
      { id: 2, name: "Tâche 2", desc: "Exemple de tâche" },
    ],
  },
  mutations: {
    REMOVE_TASK(state, payload) {
      const idToRemove = state.tasks.findIndex((value) => value.id === payload);
      state.tasks.splice(idToRemove, 1);
    },
  },
  actions: {
    removeTask(context, payload) {
      context.commit("REMOVE_TASK", payload);
    },
  },
  modules: {},
});
