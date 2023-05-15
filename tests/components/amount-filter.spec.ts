import { describe, expect, it, vi } from "vitest";
import AmountFilter from "../../components/amount-filter.vue";
import { mount } from "@vue/test-utils";
import { faker } from "@faker-js/faker";

/* TODO: This mock should be done in a more centralized way. */
vi.mock("vue-i18n", () => {
  return {
    useI18n: () => ({
      t: (msg: any) => msg,
    }),
  };
});

const defaultProps = { modelValue: "" };

const mountFilter = (additionalProps: object = {}) => {
  const props = Object.assign({}, defaultProps, additionalProps);
  const wrapper = mount(AmountFilter, { props });
  const input = wrapper.find<HTMLInputElement>("[data-test-id=input]");
  return { wrapper, input };
};

describe("<AmountFilter>", () => {
  describe("props", () => {
    describe("modelValue", () => {
      it("shows the value in the input filed", () => {
        const modelValue = faker.number.float(100).toString();
        const { input } = mountFilter({ modelValue });

        expect(input.element.value).toEqual(modelValue);
      });
    });
  });
  describe("events", () => {
    describe("update:modelValue", () => {
      it("does not emit on render", () => {
        const { wrapper } = mountFilter();

        expect(wrapper.emitted("update:modelValue")).toBeFalsy();
      });
      it("emits on input value change with the newValue", async () => {
        const newValue = faker.number.float(100).toString();
        const { wrapper, input } = mountFilter();

        await input.setValue(newValue);

        const updateModelValueEmit = wrapper.emitted("update:modelValue");
        expect(updateModelValueEmit).toBeTruthy();
        expect(updateModelValueEmit).toHaveLength(1);
        expect(updateModelValueEmit![0]).toEqual(
          expect.arrayContaining([newValue])
        );
      });
    });
  });
});
