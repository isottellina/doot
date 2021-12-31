import { config, mount, shallowMount, VueWrapper } from "@vue/test-utils";
import Task from "@/components/Task.vue";

import { TaskObj, MockStore } from "./types";
import { createMockStore } from "./helpers";

describe("Task.vue", () => {
  let exampleTask: TaskObj;
  let mockStore: MockStore;

  beforeEach(() => {
    exampleTask = {
      id: 1,
      name: "Task 1",
      description: "This is the test task",
    };

    mockStore = createMockStore();

    config.global.provide = {
      store: mockStore
    };
  });

  it("renders name when passed", () => {
    const wrapper = mount(Task, {
      props: { task: exampleTask },
    });
    expect(wrapper.text()).toMatch(exampleTask.name);
  });

  it("renders description when passed", () => {
    const wrapper = mount(Task, {
      props: { task: exampleTask },
    });
    expect(wrapper.text()).toMatch(exampleTask.description);
  });

  it("deletes task when button is pressed.", () => {
    const wrapper = shallowMount(Task, {
      props: { task: exampleTask },
    });

    const button = wrapper.find(".button");
    button.trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith("deleteTask", 1);
  });

  it("changes name.", () => {
    const wrapper = mount(Task, {
      props: { task: exampleTask },
    });

    const nameEditor = wrapper.getComponent(".task-name") as VueWrapper;
    nameEditor.vm.$emit("edited", "Task 2");

    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith("changeNameTask", {
      name: "Task 2",
      task_id: 1,
    });
  });

  it("changes description.", () => {
    const wrapper = shallowMount(Task, {
      props: { task: exampleTask },
    });

    const descEditor = wrapper.getComponent(".task-desc") as VueWrapper;
    descEditor.vm.$emit("edited", "This is not the same description");

    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith("changeDescTask", {
      desc: "This is not the same description",
      task_id: 1,
    });
  });
});
