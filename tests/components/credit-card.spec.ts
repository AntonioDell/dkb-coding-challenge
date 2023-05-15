import { describe, expect, it, vi } from "vitest";
import CreditCard from "../../components/credit-card.vue";
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

const defaultProps = {
  description: "Test",
  id: "Test",
  color: "black",
};

const mountCard = (additionalProps: object = {}) => {
  const props = Object.assign({}, defaultProps, additionalProps);
  const wrapper = mount(CreditCard, { props });
  return { wrapper };
};

describe("<CreditCard>", () => {
  describe("props", () => {
    describe("description", () => {
      it("is displayed", () => {
        const description = faker.finance.accountName();
        const { wrapper } = mountCard({ description });

        expect(wrapper.text()).toContain(description);
      });
    });
    describe("id", () => {
      it("is displayed", () => {
        const id = faker.string.uuid();
        const { wrapper } = mountCard({ id });

        expect(wrapper.text()).toContain(id);
      });
    });
    describe("color", () => {
      it("is set as background color", () => {
        const color = "blue";
        const { wrapper } = mountCard({ color });

        const styles = getComputedStyle(wrapper.element);
        expect(styles.backgroundColor).toBe(color);
      });
    });
  });
});
