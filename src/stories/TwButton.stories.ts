import { Meta, StoryObj } from "@storybook/react";
import TwButton from "./TwButton";

const meta: Meta<typeof TwButton> = {
  title: "Example/TwButton",
  component: TwButton,
};

export default meta;

type Template = StoryObj<typeof TwButton>;

export const Primary: Template = {
  args: {
    look: "primary-filled",
    title:"Primary-filled"
  },
};

export const Outlined: Template = {
  args: {
    look: "primary-outlined",
    title:"Primary-outlined"
  },
};
