import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      { id: 1, name: "Tâche 1", desc: "Exemple de tâche" },
      { id: 2, name: "Tâche 2", desc: "Exemple de tâche" },
    ],
  },
  mutations: {
    removeTask(state, task_id) {
      const id = state.tasks.findIndex((value) => value.id === task_id);
      state.tasks.splice(id, 1);
    },

    changeNameTask(state, { task_id, name }) {
      const id = state.tasks.findIndex((value) => value.id === task_id);
      state.tasks[id].name = name;
    },

    changeDescTask(state, { task_id, desc }) {
      const id = state.tasks.findIndex((value) => value.id === task_id);
      state.tasks[id].desc = desc;
    },
  },
  modules: {},
});
