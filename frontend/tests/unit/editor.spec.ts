import { shallowMount } from "@vue/test-utils";
import Editor from "@/components/Editor.vue";

describe("Editor.vue", () => {
  it("renders the text that's passed to it", () => {
    const text = "Test";
    const wrapper = shallowMount(Editor, {
      props: { baseText: text },
    });

    expect(wrapper.text()).toMatch(text);
  });

  it("emits an event when edited", () => {
    const oldValue = "Test";
    const newValue = "Not the same value";

    const wrapper = shallowMount(Editor, {
      props: { baseText: oldValue },
    });

    const element = wrapper.find("input");
    element.setValue(newValue);
    element.trigger("submit");

    expect(wrapper.emitted().edited).toBeTruthy();
    expect(wrapper.emitted().edited[0]).toEqual([newValue]);
  });
});
