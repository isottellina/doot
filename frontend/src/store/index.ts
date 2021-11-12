import { createStore } from "vuex";
import axios from "axios";

export interface TaskObj {
  id: number;
  name: string;
  desc: string;
}

export interface State {
  tasks: Array<TaskObj>;
}

export default createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
    },

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

    setTaskList(state, task_list) {
      state.tasks = task_list;
    },
  },
  actions: {
    getTasks({ commit }) {
      axios.get("/api/tasks").then((response) => {
        commit("setTaskList", response.data);
      });
    },

    createTask({ commit }, task_name) {
      const task = {
        id: 99,
        name: task_name,
        desc: "No description (yet?)",
      };

      commit("createTask", task);
    },
  },
  modules: {},
});
