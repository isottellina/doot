import { createStore } from "vuex";
import axios from "axios";

export interface TaskObj {
  id: number;
  name: string;
  description: string;
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
      state.tasks[id].description = desc;
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
      axios
        .post("/api/tasks", {
          name: task_name,
          description: "No description (yet?)",
        })
        .then((response) => {
          commit("createTask", response.data);
        });
    },

    deleteTask({ commit }, task_id) {
      axios.delete(`/api/tasks/${task_id}`).then(() => {
        commit("removeTask", task_id);
      });
    },
  },
  modules: {},
});
