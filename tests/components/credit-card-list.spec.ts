import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CreditCardList from "../../components/credit-card-list.vue";
import CreditCard from "../../components/credit-card.vue";

const defaultProps = {
  cards: [
    { id: "id-1", description: "Description 1" },
    { id: "id-2", description: "Description 2" },
  ],
  modelValue: "",
};

const mountList = (additionalProps: object = {}) => {
  const props = Object.assign({}, defaultProps, additionalProps);
  const wrapper = mount(CreditCardList, { props });

  return { wrapper };
};

describe("<CreditCardList>", async () => {
  describe("props", () => {
    describe("modelValue", () => {
      it("does not show a border given an empty value", async () => {
        const card1Id = defaultProps.cards[1].id;
        const { wrapper } = mountList();

        const card1 = wrapper.find(`[data-test-id=card-${card1Id}]`);

        expect(card1.classes("selected-border")).toBeFalsy();
      });
      it("shows a border around the card with the same value", () => {
        const modelValue = defaultProps.cards[1].id;
        const { wrapper } = mountList({ modelValue });

        const card1 = wrapper.find(`[data-test-id=card-${modelValue}]`);

        expect(card1.classes("selected-border")).toBeDefined();
      });
    });
    describe("cards", () => {
      it("renders each card in a component", () => {
        const { wrapper } = mountList();

        const card1 = wrapper.find(
          `[data-test-id=card-${defaultProps.cards[0].id}]`
        );
        const card2 = wrapper.find(
          `[data-test-id=card-${defaultProps.cards[1].id}]`
        );
        expect(card1).toBeTruthy();
        expect(card2).toBeTruthy();
      });
    });
  });
  describe("events", () => {
    describe("update:modelValue", () => {
      it("does not emit on render", () => {
        const { wrapper } = mountList();

        expect(wrapper.emitted("update:modelValue")).toBeFalsy();
      });
      it("emits with the card id, if a card is clicked", async () => {
        const card1Id = defaultProps.cards[1].id;
        const { wrapper } = mountList();

        const card1 = wrapper.find(`[data-test-id=card-${card1Id}]`);
        await card1.trigger("click");

        const eventEmit = wrapper.emitted("update:modelValue");
        expect(eventEmit).toBeDefined();
        expect(eventEmit).toHaveLength(1);
        expect(eventEmit![0]).toEqual(expect.arrayContaining([card1Id]));
      });
      it("does not emit, if a selected card is clicked again", async () => {
        const card1Id = defaultProps.cards[1].id;
        const { wrapper } = mountList({ modelValue: card1Id });

        const card1 = wrapper.find(`[data-test-id=card-${card1Id}]`);
        await card1.trigger("click");

        const eventEmit = wrapper.emitted("update:modelValue");
        expect(eventEmit).toBeFalsy();
      });
    });
  });
});
