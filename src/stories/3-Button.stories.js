import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (arg) => (
  <Button onClick={action("clicked")} {...arg}></Button>
);

export const Rojo = Template.bind({});
Rojo.arg = {
  backgroundColor: "tomato",
  label: "Descrubir mas",
};
