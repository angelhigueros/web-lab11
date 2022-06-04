import React from "react";
import { action } from "@storybook/addon-actions";
import '@storybook/addon-backgrounds/register';
import Navbar from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Text = () => <Navbar onClick={action("Opcion seleccionada")} />;



