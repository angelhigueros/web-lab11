import React from "react";
import { LinkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={LinkTo("Button")} />;

ToStorybook.story = {
    name: 'to Storybook'
}
