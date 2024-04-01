import { Meta, StoryObj } from "@storybook/react";
import ShadcnBtn from "./ShadcnBtn";
import { Mail } from "lucide-react";

const meta: Meta<typeof ShadcnBtn> = {
  title: "Example/ShadcnBtn",
  component: ShadcnBtn,
};

export default meta;

type Template = StoryObj<typeof ShadcnBtn>;

export const Ghost: Template = {
  args: {
    variant: "outline",
    title:"Outline",
    disable:true,
  },
};

export const Secondary: Template = {
  args: {
    variant: "secondary",
    title:"Secondary",
    icon: Mail,
    iconClassName:"m-1",
  },
};

export const Loading: Template = {
  args: {
    variant: "link",
    title:"Loading",
    icon: Mail,
    loader:true,
    iconClassName:"m-1",
  },
};
