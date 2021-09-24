/*eslint-disable*/
import React from "react";
import CurrikiTabs from "./tabs";

export default {
  title: "Utilities/CurrirkiTabs",
  component: CurrikiTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CurrikiTabs {...args} />;

export const TabsProps = Template.bind({});

TabsProps.args = {
  primary: true,
  secondary: false,
  tertiary:false,
  disabled: false,
};
