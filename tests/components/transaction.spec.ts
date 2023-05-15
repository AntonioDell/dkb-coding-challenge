import { describe, expect, it, vi } from "vitest";
import TransactionComponent from "../../components/transaction.vue";
import { mount } from "@vue/test-utils";
import { faker } from "@faker-js/faker";

/* TODO: This mock should be done in a more centralized way. */
vi.mock("vue-i18n", () => {
  return {
    useI18n: () => ({
      locale: "en",
    }),
  };
});

const defaultProps = {
  amount: 0,
  description: "",
  color: "",
};

const mountTransaction = (additionalProps: object = {}) => {
  const props = Object.assign({}, defaultProps, additionalProps);
  const wrapper = mount(TransactionComponent, { props });

  return { wrapper };
};

describe("<Transaction>", async () => {
  describe("props", () => {
    describe("amount", () => {
      it("is displayed rounded to 2 decimal points and with suffix €", () => {
        const amount = faker.number.float({ max: 100, precision: 0.0001 });
        const { wrapper } = mountTransaction({ amount });

        expect(wrapper.text()).toContain(amount.toFixed(2) + "€");
      });
    });
    describe("description", () => {
      it("is displayed", () => {
        const description = faker.finance.transactionDescription();
        const { wrapper } = mountTransaction({ description });

        expect(wrapper.text()).toContain(description);
      });
    });
    describe("color", () => {
      it("is set as background color", () => {
        const color = "blue";
        const { wrapper } = mountTransaction({ color });

        const styles = getComputedStyle(wrapper.element);
        expect(styles.backgroundColor).toBe(color);
      });
    });
  });
});
