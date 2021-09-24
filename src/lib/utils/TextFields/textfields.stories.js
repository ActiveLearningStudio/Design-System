/*eslint-disable*/
import React from "react";
import CurrikiTextField  from "./textfields";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Utilities/TextField ",
  component: CurrikiTextField ,
};

const Template = (args) => <CurrikiTextField  {...args} />;

export const TextFieldProps = Template.bind({});

TextFieldProps.args = {
  disabled: false,
  label: "checkbox text",
};
